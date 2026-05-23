# DiscBase → BeyondField Sayfa-Bazlı Port Planı

> Bu doküman planı **uygulamaz**, sadece sayfa sayfa neyi nasıl inşa edeceğimizi tanımlar.
> Onaydan sonra ilk uygulama adımı: bu içeriği `D:\BeyondField\discbase_to_beyondfield.md`'a kopyalamak ve her sayfayı ayrı PR/oturumda inşa etmek.

---

## Context

**Neden:** BeyondField, DiscBase'in (eski Firebase tabanlı React projesi) yerine geçecek. DiscBase'in çalışan UX akışları ve özellik kapsamı referans alınacak, ancak BeyondField'ın mimari kuralları (Stateless Node + Prisma/Neon Postgres, "Aptal Frontend / Zeki Backend", i18n zorunlu, hardcoded URL yasak, dummy buton yasak) sıfır taviz uygulanacak.

**Şu an var olan:** Auth (login/register/JWT), Team CRUD (`GET/POST /api/teams`), SportSelection, TeamSelection, boş Dashboard, Prisma'da 6 model (User, Team, Player, Match, FrisbeeMatchEvent, FrisbeePlayerStat). Detay için `D:\BeyondField\backend\prisma\schema.prisma` ve `D:\BeyondField\frontend\src\App.tsx`.

**Sonuç hedefi:** Aşağıdaki 12 sayfa, ham veri girildiğinde backend'in stat'ı **transaction içinde** denormalize ettiği, frontend'in sadece okuduğu, tüm metinlerin i18n'den geldiği, tüm URL'lerin `import.meta.env.VITE_API_URL`'den geldiği, tüm butonların gerçek API'ye bağlı olduğu, çoklu sporu (şimdilik sadece ULTIMATE_FRISBEE aktif) destekleyen bir uygulama.

---

## Genel Mimari Kararları (Tüm sayfalar için geçerli)

### Backend
- **Katmanlar:** `routes/<domain>Routes.ts` → `controllers/<domain>Controller.ts` → `services/<domain>Service.ts` → `repositories/<domain>Repository.ts`. Mevcut team akışı (`teamController.ts:17-27` → `teamService.ts:7-20` → `teamRepository.ts:16-22`) referans şablon.
- **Cevap formatı:** `{ status: 'success'|'error', data?, message? }` (mevcut konvansiyon).
- **Auth:** Tüm `/api/*` endpoint'leri (auth dışı) `authMiddleware` arkasında. `req.user.userId` ile sahiplik doğrulaması.
- **Yetki:** `Team.ownerId === req.user.userId` kontrolü her yazma operasyonunda **service** katmanında. ADMIN/COACH/VIEWER ayrımı: VIEWER salt okur, COACH yazar, ADMIN siler.
- **Stat agregasyon:** **Senkron Prisma transaction.** `addEvent()` servisi `prisma.$transaction([eventCreate, playerStatUpsert, matchScoreUpdate])` çalıştırır. Redis/worker yok; senkron tutarlılık.
- **Sport sınırı:** Tüm domain modellerinde `sportType` zorunlu, default `ULTIMATE_FRISBEE`. Servisler `where: { sportType }` ile filtreler.

### Frontend
- **HTTP:** Sadece `D:\BeyondField\frontend\src\lib\apiClient.ts`. Yeni baseURL hardcode etmek yasak; `import.meta.env.VITE_API_URL` zaten orada okunuyor.
- **i18n:** Her yeni string `t('domain.page.key')` ile. Yeni anahtarlar **hem** `locales/tr.json` **hem** `locales/en.json`'a eklenir. Mevcut yapı (`i18n.ts` + `useTranslation`) korunur.
- **State:** Sunucu durumu için hiçbir global store yok; her sayfa kendi `useEffect + apiClient` ile çeker. UI seçimleri (selectedTeam, selectedSport) `appStore.ts` zaten yapıyor.
- **Yönlendirme:** `App.tsx`'e route eklenir, `ProtectedRoute` sarmalayıcısıyla (`requireSport`, `requireTeam` flag'leri mevcut).
- **Tipler:** Her domain için `frontend/src/types/<domain>.ts`. Backend response şekillerine uyumlu.

### Bilinçli Olarak Atlanan / Sonra Yapılacaklar
- BullMQ/Redis: gerek yok (senkron transaction yeter).
- Postgres triggers: Prisma ile uyumsuz, atlandı.
- Firebase: tamamen çıkıyor. Google OAuth ileride eklenirse Passport.js ile.
- Konva playbook editörü ve Training/Ultiplays entegrasyonu: bu doküman onayından sonra **ayrı** planlanacak (kapsamı büyük).

---

## Şema Genişletmeleri (Tek migration)

`backend/prisma/schema.prisma` üzerine eklenecekler. Migration ismi: `add_tournament_and_event_metadata`.

### Yeni modeller
- **Tournament** — id, name, ownerTeamId, sportType, startDate, endDate?, location?, createdAt. Relations: `ownerTeam: Team`, `matches: Match[]`, `rosterPlayers: TournamentRosterPlayer[]`.
- **TournamentRosterPlayer** — id, tournamentId, playerId, jerseyOverride? — turnuvaya özel kadro. Unique(tournamentId, playerId).

### Mevcut model değişiklikleri
- **Match** — yeni alanlar: `tournamentId?` (nullable, FK Tournament), `youtubeVideoId?` (string), `durationSeconds?` (int), `finished` (boolean default false).
- **FrisbeeMatchEvent** — yeni alanlar: `secondaryPlayerId?` (asist atan, FK Player), `videoTimestampSeconds?` (int), `period?` (int), `scoreUsAtEvent?` (int), `scoreThemAtEvent?` (int).
- **FrisbeeActionType** enum'una ekle: `COMPLETION`, `OPPONENT_GOAL`, `SUBSTITUTION`, `PULL_SUCCESS`, `PULL_FAIL`, `TIMEOUT_START`, `POINT_START`, `POINT_END`.
- **FrisbeePlayerStat** — yeni alanlar: `pointsPlayed` (int), `successfulPasses` (int — `completions`'tan ayrı tutmak istiyorsak adlandırma netleşmeli; tek alan da olur), `pullAttempts`, `successfulPulls`, `plusMinus`.

### Atlandı (sonraki faz)
- Playbook, Training, EfficiencyCriterion, ProEventData (PRO capture mode için fromX/fromY/toX/toY).

---

## Sayfa 1: Login

**DiscBase referans:** `src/pages/Login.tsx` (Google OAuth via Firebase).
**BeyondField mevcut:** `frontend/src/pages/Login.tsx` (e-posta + şifre, JWT). **Tamam, değişiklik yok** — Google OAuth ileride opsiyonel olarak eklenir.

---

## Sayfa 2: Register

**DiscBase'de yok** (sadece OAuth vardı). **BeyondField'da mevcut** (`pages/Register.tsx`). **Değişiklik yok.**

---

## Sayfa 3: Sport Selection

**DiscBase'de yok.** BeyondField'da `pages/SportSelection.tsx` zaten var (sadece Ultimate Frisbee aktif). **Değişiklik yok.**

---

## Sayfa 4: Team Selection

**DiscBase referans:** `src/pages/TeamSelect.tsx` — "Add Team" ve "Join Team" butonları çalışmıyordu (anti-pattern).
**BeyondField mevcut:** `pages/TeamSelection.tsx` + `POST /api/teams` çalışıyor.
**Eksikler:**
- "Join Team" akışı yok. **Yeni:** Davet kodu modeli. Backend: `Team` modeline `inviteCode` (string, unique, nullable) alanı, `POST /api/teams/:id/invite-code` (kod oluşturur), `POST /api/teams/join` body `{code}` (kullanıcıyı takıma `coach/viewer` olarak ekler). Şu anki şemada User↔Team many-to-many yok; **karar:** Bu MVP'de "Join" özelliğini atla, sadece sahip ekleyebilir. Daha sonra `TeamMember` join tablosuyla yapılır.
- Takım silme yok. **Yeni:** `DELETE /api/teams/:id` — service `ownerId` kontrol eder, cascade (Players, Matches, Events) Prisma `onDelete: Cascade` ile.

---

## Sayfa 5: Dashboard

**DiscBase referans:** `src/pages/Dashboard.tsx` — son maçlar, oyuncu sayısı, takım istatistik özetleri.
**BeyondField mevcut:** Boş stub.

### Backend
- `GET /api/dashboard?teamId=...` → tek istekte: `{ team, playerCount, recentMatches: Match[5], topScorers: PlayerStat[3], totalTournaments }`.
- Controller: yeni `dashboardController.getSummary`. Service `dashboardService.buildSummary(teamId, userId)` — sahiplik doğrulama, paralel `Promise.all` ile alt sorgular. Repository katmanına yeni dosya gerekmez; mevcut `teamRepository`, `playerRepository`, `matchRepository`, `statRepository` kullanır.
- **Hesaplama kuralı:** topScorers `FrisbeePlayerStat.orderBy(goals desc).take(3)`. Anlık hesap yok.

### Frontend
- `pages/Dashboard.tsx`'i doldur. Bölümler: HeroCard (takım adı+logo), MetricCards (oyuncu sayısı, turnuva sayısı, son maç skoru), `RecentMatchesList`, `TopScorersList`.
- i18n: `dashboard.metrics.players`, `dashboard.recentMatches.title`, `dashboard.topScorers.title`, `dashboard.empty.noMatches`.
- Hiçbir buton "dummy" değil; tüm linkler navigasyon (`/roster`, `/tournaments`, `/matches/:id`) veya boş-durum mesajı.

---

## Sayfa 6: Roster (Oyuncu Listesi + Leaderboard)

**DiscBase referans:** `src/pages/Roster.tsx` — oyuncular tablosu + leaderboard (TOTAL/PER_MATCH/PER_POINT).

### Backend
- **Player CRUD:**
  - `GET /api/teams/:teamId/players` → Player[]
  - `POST /api/teams/:teamId/players` body `{firstName, lastName, position, jerseyNumber, photoUrl?}` (position enum: HANDLER, CUTTER, HYBRID — yeni enum gerekli)
  - `PUT /api/players/:id`
  - `DELETE /api/players/:id` (cascade events/stats)
- **Leaderboard:**
  - `GET /api/teams/:teamId/leaderboard?sortBy=goals&mode=TOTAL` → PlayerStat[] sıralı.
  - `mode=PER_MATCH`: `goals / matchesPlayed`. `mode=PER_POINT`: `goals / pointsPlayed`. **Hesaplama backend service'te** (`statService.computeLeaderboard`), Prisma'dan ham FrisbeePlayerStat çekilir, JavaScript'te bölünür, sıralanır — frontend yapmaz.
- Service'ler: `playerService` (validasyon: jerseyNumber team içinde unique), `statService` (leaderboard hesabı). Repository: `playerRepository`, `statRepository`.

### Frontend
- Yeni `pages/Roster.tsx`. İki sekme: "Oyuncular" (CRUD tablo) ve "Sıralama" (leaderboard).
- Modal'lar: `AddPlayerModal`, `EditPlayerModal` — gerçek API çağrıları, optimistic update yok (basit re-fetch).
- Sıralama sekmesinde `<select>` ile mode değiştirilir, her değişimde `GET /leaderboard?mode=...` çağrılır. **Frontend hiçbir bölme/çarpma yapmaz.**
- Route: `/roster` (mevcut) artık gerçek sayfa. `ProtectedRoute requireTeam`.
- i18n: `roster.tabs.players`, `roster.tabs.leaderboard`, `roster.modal.add.title`, `roster.fields.jerseyNumber` vs.

---

## Sayfa 7: Tournament List

**DiscBase referans:** `src/pages/TournamentList.tsx` — turnuva kartları + "Add" (çalışmıyordu).

### Backend
- Migration: Yukarıdaki `Tournament` modeli eklendikten sonra.
- `GET /api/teams/:teamId/tournaments` → Tournament[] (startDate desc).
- `POST /api/teams/:teamId/tournaments` body `{name, startDate, endDate?, location?}`
- `PUT /api/tournaments/:id`, `DELETE /api/tournaments/:id` (cascade matches → events → stat recompute? Karar: silinen turnuva maçları FrisbeePlayerStat'tan **decrement** etmeli. Service `recomputeStatsAfterDelete`.)
- Service: `tournamentService` — validasyon: name unique within team.

### Frontend
- Yeni `pages/TournamentList.tsx`. Card grid + "+ Yeni Turnuva" butonu (gerçek modal, gerçek POST).
- Route: `/tournaments`. Sidebar nav'a eklenir (`Layout.tsx` güncellenir).
- i18n: `tournaments.list.title`, `tournaments.modal.create.title`, vs.

---

## Sayfa 8: Tournament Detail

**DiscBase referans:** `src/pages/TournamentDetail.tsx` — 3 sekme (Maçlar / İstatistikler / Kadro).

### Backend
- `GET /api/tournaments/:id` → `{ tournament, matches, roster, computedStats }` — istatistikler turnuva kapsamında pre-aggregate. **Bu da denormalize edilmeli:** yeni model `TournamentPlayerStat` (tournamentId, playerId, goals, assists, blocks, ...) — her event commit'inde hem global `FrisbeePlayerStat` hem ilgili `TournamentPlayerStat` upsert edilir. (Alternatif: anlık hesapla — kuralı bozar.)
- **Karar:** `TournamentPlayerStat` modelini şema migration'ına ekle.
- `POST /api/tournaments/:id/roster` body `{playerIds}` → TournamentRosterPlayer toplu insert.

### Frontend
- Yeni `pages/TournamentDetail.tsx`. Üst kısımda turnuva info, altında tab nav (`MatchesTab`, `StatsTab`, `RosterTab`).
- MatchesTab: maç listesi + "Yeni Maç" butonu (turnuvaya bağlı).
- StatsTab: TournamentPlayerStat tablosu, sortable kolonlar (frontend sort sadece UI, backend zaten sorted döner — tercihe göre).
- RosterTab: turnuva kadrosu seçimi (checkbox liste).
- Route: `/tournaments/:id`.

---

## Sayfa 9: Match Detail

**DiscBase referans:** `src/pages/MatchDetail.tsx` — özet, event timeline, oyuncu stat tablosu, YouTube embed, "Save Video", "Delete Last Point".

### Backend
- `GET /api/matches/:id` → `{ match, events: FrisbeeMatchEvent[], playerStats: MatchPlayerStat[] }` — burada da denormalize: `MatchPlayerStat` modeli (matchId, playerId, goals, assists, ...). Aynı transaction pattern.
- `PUT /api/matches/:id` body `{youtubeVideoId?, finished?}`
- `DELETE /api/matches/:id/events/last` → son event'i geri al, stat'ları decrement (transaction). Service `eventService.undoLast(matchId)`.

### Frontend
- Yeni `pages/MatchDetail.tsx`. Üst: skor + takımlar + tarih. Orta: YouTube iframe (varsa) + video ID kaydet modal. Alt: 2 kolon — sol event timeline (kronolojik), sağ stat tablosu.
- "Canlı Takibe Başla" → `/matches/:id/track` navigasyonu (sadece `match.finished === false` ise göster).
- Route: `/matches/:id`.

---

## Sayfa 10: Match Tracking (Canlı Maç Takibi)

**DiscBase referans:** `src/pages/MatchTracking.tsx` — en karmaşık sayfa. Lineup seçimi, pull timer, point-by-point event girişi, undo, opponent score.
**BeyondField karar:** SIMPLE capture mode'u tam yap; ADVANCED ve PRO sonraki faz.

### Backend
- `POST /api/matches/:id/events` body `{playerId, secondaryPlayerId?, actionType, minute, videoTimestampSeconds?}`
  - Transaction:
    1. `FrisbeeMatchEvent.create`
    2. `FrisbeePlayerStat.upsert` ilgili oyuncu için (action type'a göre alan increment)
    3. `MatchPlayerStat.upsert`
    4. `TournamentPlayerStat.upsert` (varsa)
    5. `Match.update` skor/durum
  - Service: `eventService.recordEvent` — switch(actionType) ile hangi stat alanlarının artacağını belirler. Bu mantık **tek noktada** (service), repository sadece DB yazımı.
- `POST /api/matches/:id/points/archive` body `{lineup: playerIds[], whoScored: 'US'|'THEM', startMode, durationSeconds}` — point sonu: lineup'taki tüm oyuncuların `pointsPlayed` +1.
- `DELETE /api/matches/:id/events/last` (yukarıda var).
- `POST /api/matches/:id/start`, `POST /api/matches/:id/finish` — status değiştirir.

### Frontend
- Yeni `pages/MatchTracking.tsx`. State machine: `LINEUP_SELECT → POINT_ACTIVE → POINT_END_CONFIRM`.
- UI bölümleri:
  - Top bar: skor (büyük), süre, "Maçı Bitir" butonu.
  - Sol panel: 7'lik lineup seçici (checkbox grid).
  - Orta: aktif oyuncu kartları (büyük dokun hedefleri).
  - Sağ panel: aksiyon butonları (Catch, Goal, Drop, Throwaway, Block, Callahan, Opponent Goal, Timeout, Undo).
- Tüm butonlar **her tıklamada API POST**. Optimistic UI yok — backend cevabı bekle ve re-render. Yavaşsa "loading" overlay.
- Pull timer: frontend sadece zamanı tutar (UI state), bitince `POST /events` ile `PULL_SUCCESS` veya `PULL_FAIL` action'ı yollar.
- Route: `/matches/:id/track`.
- i18n: tüm aksiyon adları, state mesajları.

### Atlandı
- ADVANCED mode (plus/minus point-level tracking) — şimdilik basit increment.
- PRO mode (sahada koordinat) — Konva canvas gerekli, sonraki faz.

---

## Sayfa 11: Player Detail

**DiscBase referans:** `src/pages/PlayerDetail.tsx` — kariyer stat, pass network radar chart, takım ortalamasıyla karşılaştırma.

### Backend
- `GET /api/players/:id/career` → `{ player, totalStats: FrisbeePlayerStat, perMatch, perPoint, teamAverages }`. Tümü pre-aggregate'ten okunur. teamAverages: takımdaki tüm FrisbeePlayerStat'ların ortalaması (service'te tek SQL `avg()` veya JS).
- **Pass network:** `FrisbeeMatchEvent` üzerinden grupla `(playerId, secondaryPlayerId)` count. Karar: yeni model `PlayerPassEdge` (fromPlayerId, toPlayerId, count) ekle, event transaction'ında upsert. Anlık SQL aggregation da olabilir ama kural "hazır veri".
- `GET /api/players/:id/pass-network` → `[{toPlayerId, toPlayerName, count}]`.

### Frontend
- Yeni `pages/PlayerDetail.tsx`. Üst: foto + isim + forma no. Orta: KPI kartları (toplam gol, asist, %). Alt sol: pass network (basit liste ya da `recharts` radar — kütüphane eklemek gerekir).
- "Takım ortalamasına göre" toggle: backend zaten ortalamayı verdi, frontend sadece yan yana gösterir. **Hesap yok.**
- Route: `/players/:id`.

---

## Sayfa 12: Settings

**DiscBase referans:** `src/pages/Setting.tsx` — tema, dil, isim formatı, capture mode default, efficiency criteria, CSV export, JSON backup/restore. CSV export hardcoded mock'tu (anti-pattern).

### Backend
- `UserSettings` modeli: userId (unique), theme, language, nameFormat (enum), defaultCaptureMode (enum), createdAt, updatedAt. Default değerler register'da insert edilir.
- `GET /api/me/settings`, `PUT /api/me/settings`.
- **CSV Export (gerçek):** `GET /api/teams/:teamId/export/players.csv` → `Content-Type: text/csv; charset=utf-8`, BOM ile başlar. Service `exportService.buildPlayerStatsCsv(teamId)` — pre-aggregate'ten okur, satır satır CSV string üretir, response stream'i. Frontend sadece linke yönlendirir (`<a href={apiUrl + '/.../export/players.csv'} download>`). Token query param ile veya header gerekirse JS fetch + blob.
- `GET /api/teams/:teamId/export/matches.csv` — maç bazlı.

### Frontend
- Yeni `pages/Settings.tsx`. Form alanları: tema (light/dark/system), dil (tr/en — `i18n.changeLanguage`), isim formatı select.
- "CSV İndir" butonu → gerçek backend endpoint (mock yok). Loading state.
- Backup/restore: settings JSON `GET /api/me/settings` ile alınır, frontend bir dosyaya yazar. Restore: dosya okur, `PUT /api/me/settings`. **Bu fonksiyon sadece kullanıcı ayarları için; takım verisi için backup ayrı endpoint.**
- Route: `/settings`. i18n: tüm label'lar.

---

## Sonraki Fazlara Bırakılanlar (Bu doküman kapsamı dışı)

- **Sayfa 13: Trainings** — antrenman yoklama, Ultiplays JSON parse, CSV. Yeni modeller: `Training`, `TrainingAttendance`.
- **Sayfa 14: Gameplay (Playbook)** — Konva canvas editörü. Yeni modeller: `Playbook`, `PlaybookFrame`, `PlaybookActor`. `react-konva` paketi.
- **PRO/ADVANCED capture modes** — koordinat takibi (Match Tracking sayfasına eklenecek).
- **Çoklu kullanıcı/takım üyeliği** — TeamMember join tablosu, davet sistemi.
- **Google OAuth** — Passport.js entegrasyonu.
- **Cloudflare R2/S3 dosya upload** — logo/foto için presigned URL endpoint.

---

## Sıra (Önerilen Uygulama Sırası)

1. **Şema migration** (Tournament, TournamentRosterPlayer, MatchPlayerStat, TournamentPlayerStat, PlayerPassEdge, UserSettings + Match/Event/PlayerStat alan eklemeleri + enum genişletme). Tek migration.
2. **Sayfa 6: Roster** — Player CRUD'siz hiçbir maç anlamlı değil; en altta o.
3. **Sayfa 5: Dashboard** — boş takım için bile çalışır, hızlı kazanım.
4. **Sayfa 7: Tournament List → Sayfa 8: Tournament Detail**
5. **Sayfa 9: Match Detail** (önce read-only)
6. **Sayfa 10: Match Tracking** (en karmaşık, sona)
7. **Sayfa 11: Player Detail**
8. **Sayfa 12: Settings + CSV Export**

Her sayfa: backend route → service → repo → migration (gerekiyorsa) → frontend page → i18n keys (tr+en) → manuel smoke test (`npm run dev` backend + frontend, gerçek tıklamayla doğrulama).

---

## Doğrulama (Verification)

Her sayfa için kabul kriterleri:
1. **Backend testi:** Postman/curl ile her endpoint cevap veriyor; transaction sonrası DB'de hem ham event hem stat tablosu güncellenmiş (Neon console veya `npx prisma studio`).
2. **Frontend testi:** `npm run dev` ile sayfa açılıyor, hiçbir buton sessiz/dummy değil, network tab'ında her tıklama gerçek API'ye gidiyor, response sonrası UI güncelleniyor.
3. **i18n testi:** Dil seçimi TR↔EN yapıldığında sayfada hiçbir hardcoded string kalmıyor (Türkçe metin EN modunda görünmemeli).
4. **Hesaplama kuralı testi:** DevTools Network tab'ında frontend'in `/leaderboard?mode=PER_MATCH` çağrısı dışında HİÇ matematiksel agregasyon yapmadığını doğrulamak için frontend kodunda `goals / matches` benzeri ifade aranmayacak (grep ile).
5. **Hardcoded URL testi:** `grep -r "localhost:3000" frontend/src` boş dönmeli; `grep -r "VITE_API_URL" frontend/src` her servis dosyasında geçmeli (veya tek `apiClient.ts`'te).
