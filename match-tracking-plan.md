# Match Tracking UI Yenileme Planı

## Context

Mevcut `MatchTracking.tsx` çalışıyor ancak görsel tasarım ve akış, discbase-web referans ekranlarından (screenshottmatchtracking/) önemli ölçüde farklı. Frizbi maç takip metin dosyası da bazı stat mantığı farklarına (drop'ta atıcı kredit, "diski al" sub-fazı, vb.) dikkat çekiyor. Bu plan UI'yi referans ekranlarla hizalamak ve stat mantığını düzeltmek için hazırlandı.

---

## Referans Ekranlardan Çıkan Gereksinimler

### Genel Layout (Tracking aktifken)
- **Sol alan (≈65%)**: Gömülü YouTube iframe (`react-youtube` zaten import edilmiş)
- **Sağ panel (≈35%)**: `CANLI OLAY GEÇMİŞİ` – son eventlerin listesi; her satır `OyuncuAdı: Aksiyon → İkincilOyuncu` formatında
- **Alt şerit**: 7 oyuncu kartı yatay sıralanmış, oyun fazına göre farklı butonlar

### TrackingStep akışı (mevcut → hedef)
```
roster → start_mode → [tracking: diski_al → offense_active | defense_active]
```
Mevcut `TrackingStep` tipine `'diski_al'` eklenmesi gerekiyor ya da bunu `tracking` fazı içinde ayrı bir `subPhase` state'i olarak yönetmek daha temiz.

### Oyuncu Kartı Butonları (faza göre)
| Faz | Disk sahibi | Diğer oyuncular |
|---|---|---|
| `diski_al` | — | **DİSKİ AL** (amber) |
| `offense_active` disk sahibi | **HATA/PAS** (orange) | — |
| `offense_active` diğer | — | **PAS ALDI** (green) + **DROP** (red) + **GOOL** (purple) |
| `defense` | — | **BLOK** (blue) + **CALLAHAN** (indigo) |

### Rakip Butonları (defense'te)
- **Rakip Sayı Attı** → awayScore +1, yeni sayı
- **Rakip Hata Yaptı** → takım offense'e geçer, `diski_al` fazına döner

---

## Değiştirilecek Dosyalar

### 1. `frontend/src/pages/MatchTracking.tsx` — Ana değişiklik

**A) Tip güncelleme**
```ts
type OffenseSubPhase = 'diski_al' | 'active'
```
`activePasserId === null` → `diski_al`, `activePasserId !== null` → `active` şeklinde mevcut state'ten türetilebilir (ekstra state gerekmeyebilir).

**B) Layout yeniden düzenleme (tracking fazında)**
```
<div class="flex h-screen">
  <div class="flex flex-col flex-1">          // Sol
    <YouTubePlayer />                          // Gömülü video
    <HorizontalPlayerCards />                  // Alt şerit
  </div>
  <div class="w-80 overflow-y-auto">          // Sağ panel
    <LiveEventHistory events={liveEvents} />
  </div>
</div>
```

**C) Yeni `HorizontalPlayerCards` bileşeni (aynı dosya içi)**
- `lineup` array'ini alır, her oyuncu için kart render eder
- `gameMode`, `isPullPhase`, `activePasserId` prop'larına bakarak doğru butonları gösterir
- `isPullPhase === true` → Defense'e özgü pull oyuncusu seçimi (mevcut pull UI buna entegre olacak)

**D) Yeni `LiveEventHistory` bileşeni (aynı dosya içi)**
- Local `liveEvents: string[]` state'i (her event kaydında güncellenir)
- Format: `"OyuncuAdı: Aksiyon → İkincilOyuncu"` veya `"OyuncuAdı: Aksiyon"`
- En fazla 15-20 satır, `overflow-y-auto` ile scroll

**E) Olay Geçmişi (sağ panel, nokta arşivi)**
- Screenshot 3'te görülen "12. Sayı, Skor: 7-6" tarzı kayıtlar
- `archivedPoints: {index, whoScored, homeScore, awayScore}[]` state'i (mevcut `archivePoint` çağrısında eklenir)

**F) Rakip butonları**
- `OPPONENT_GOAL` → mevcut `opponentScoredHandler` kullanılacak (zaten var)
- `Rakip Hata Yaptı` → `gameMode = 'OFFENSE'`, `activePasserId = null` (diski_al fazına dönüş)

**G) Roster & start_mode fazları**
- Sol: gömülü YouTube (yüklü değilse placeholder)
- Sağ: mevcut roster seçim / start_mode butonları (screenshot 2 & 4 ile uyumlu)

---

### 2. `backend/src/services/matchService.ts` — Drop stat düzeltmesi

Mevcut davranış: DROP olayında sadece receiver'a `drops +1`.  
Metin dosyası: DROP'ta **atıcı (playerId) +1 başarılı pas** almalı.

`getStatDeltas` içinde:
```ts
case 'DROP':
  return { drops: 1 }  // mevcut
// → hedef: receiver drops +1, thrower successfulPasses +1
```

Düzeltme: `recordEvent` servisinde DROP aksiyonu için `playerId` (receiver) ve `secondaryPlayerId` (thrower) ayrımını kullanarak:
- `playerId` → `drops +1`
- `secondaryPlayerId` → `successfulPasses +1, completions +1`

Bu mevcut transaction mantığına paralel şekilde eklenir.

---

### 3. `frontend/src/locales/tr.json` & `en.json` — Yeni i18n anahtarları

```json
"tracking": {
  "diskiAl": "DİSKİ AL",
  "throwaway": "HATA/PAS",
  "passReceived": "PAS ALDI",
  "drop": "DROP",
  "goal": "GOOL",
  "block": "BLOK",
  "callahan": "CALLAHAN",
  "opponentError": "Rakip Hata Yaptı",
  "liveEvents": "CANLI OLAY GEÇMİŞİ",
  "pointHistory": "Olay Geçmişi"
}
```

---

## Uygulama Adımları (Agent'lar ile)

1. **beyondfield-backend-dev agent** → `matchService.ts` DROP stat düzeltmesi
2. **beyondfield-ui-designer agent** → `MatchTracking.tsx` layout yeniden tasarımı + yeni bileşenler
3. **beyondfield-data-bridge agent** → `liveEvents` local state ile event kayıt API'si entegrasyonu; arşivlenen nokta geçmişi state güncellemesi

---

## Doğrulama

1. `npm run dev` (frontend) + `npm run dev` (backend) başlat
2. Bir maç oluştur → İstatistik Takibini Başlat
3. 7 oyuncu seç → Hücum seç → `DİSKİ AL` butonlarının göründüğünü doğrula
4. Bir oyuncuya tıkla → Disk sahibi `HATA/PAS`, diğerleri `PAS ALDI / DROP / GOOL` görmeli
5. PAS ALDI → sol event geçmişinde "OyuncuA: Completion → OyuncuB" satırı gözükmeli
6. Defans seç → tüm kartlarda `BLOK` + `CALLAHAN` gözükmeli
7. `Rakip Hata Yaptı` → offense `diski_al` fazına dönmeli
8. Maçı bitir → istatistikler doğru görünmeli; DROP'ta atıcıya completion eklendiğini `MatchPlayerStat`'ta kontrol et

---

## Onaylanınca Yapılacak

Plan dosyası olarak `D:\BeyondField\match-tracking-plan.md` kaydedilecek, ardından yukarıdaki agent'larla uygulama başlayacak.
