# BeyondField — Proje Kural Seti ve Sistem Mimarisi

## 1. Temel Geliştirme Prensipleri

Bu prensiplerden asla taviz verilmez:

### "Aptal" Frontend, "Zeki" Backend
Frontend arayüzleri sadece veriyi gösterir. Hiçbir hesaplama, filtreleme veya veri birleştirme işlemi tarayıcıda/telefonda yapılmaz. Tüm iş yükü Backend'de çalışır.

### Denormalizasyon (Hazır Veri)
Ham maç verileri (kim kime pas attı vb.) sadece kaydedilir. İstatistikler anlık hesaplanmaz; ham veri girildiği anda arka planda hesaplanıp "İstatistikler" tablosuna yazılır. Okuma işlemleri yalnızca bu hazır istatistik tablolarından yapılır.

### Çoklu Dil (i18n)
Kodlamanın ilk adımından itibaren tüm kullanıcı metinleri çoklu dil desteğine uygun yazılır. Kod içinde hard-coded metin olmaz.

### Nokta Atışı Kod Güncellemeleri
Kodlama yardımı alınırken dosyaların tamamı baştan sona kopyalanmaz; sadece eklenmesi veya değiştirilmesi gereken spesifik bloklar üzerinden ilerlenir.

---

## 2. Teknoloji Yığını (Tech Stack)

### Kullanıcı Arayüzü (Frontend — Web)
| Katman | Teknoloji |
|---|---|
| Çatı | React + Vite + TypeScript |
| Stil | TailwindCSS |
| Durum Yönetimi | Zustand veya Redux Toolkit (yalnızca UI state) |
| Dil Desteği | react-i18next |

### Sunucu ve İş Mantığı (Backend)
| Katman | Teknoloji |
|---|---|
| Çatı | Node.js + Express.js + TypeScript |
| Veritabanı Aracı | Prisma ORM |
| Mimari | Routes → Controllers → Services → Repositories |

### Veritabanı ve Depolama (Cloud Infrastructure)
| Katman | Teknoloji | Gerekçe |
|---|---|---|
| Ana Veritabanı | Neon.tech (PostgreSQL) | Serverless — kullanıcı sayısına göre otomatik ölçeklenir; dahili Connection Pooling barındırır |
| Medya Depolama | Cloudflare R2 veya AWS S3 | Büyük dosyalar (logolar, videolar) burada tutulur; PostgreSQL'e yalnızca URL kaydedilir |

---

## 3. Ölçeklenebilirlik Önlemleri

### Stateless (Durumsuz) Mimari
Node.js sunucusunun RAM'inde geçici veri tutulmaz. Kullanıcı sayısı arttığında sunucu yatay olarak kolayca çoklanabilir.

### Bağlantı Havuzu (Connection Pooling)
Binlerce eş zamanlı okuma isteği sıraya sokulup veritabanına kontrollü aktarılır. Neon.tech'in dahili pooler'ı bu görevi üstlenir.

### Medya İzolasyonu
Yüksek boyutlu dosyalar nesne depolama servisine (R2/S3) yönlendirilir; bu sayede medya trafiği veritabanını asla kilitlemez.
