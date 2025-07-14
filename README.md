# 🛒 Bosch E-commerce Frontend

Ovo je responzivna e-commerce frontend aplikacija izrađena pomoću **React-a**, uz korišćenje **Vite** okruženja za razvoj i **Tailwind CSS** biblioteke za moderno stilizovanje. Projekat simulira prikaz proizvoda, detalje proizvoda, korpu, pretragu...

👉 **Live Demo**: (https://bosch-ivory.vercel.app/)

---

## 📦 Funkcionalnosti

- ✅ Stranica sa listom proizvoda
- ✅ Stranica pojedinačnog proizvoda:
  - Galerija slika
  - Tehničke specifikacije
  - Dodavanje u korpu
  - Navigacija putem breadcrumb-a
- ✅ Korpa:
  - Upravljanje količinom
  - Ukupan iznos
  - Zadržavanje stanja korpe prilikom navigacije
- ✅ Pretraga i filtriranje:
  - Real-time pretraga po nazivu proizvoda
  - Debounce input (300ms kašnjenje)
  - Brisanje pretrage i prikaz broja rezultata
- 
- ✅ Responzivan dizajn za mobilne, tablete i desktop uređaje

---

## ⚙️ Uputstvo za pokretanje

1. **Kloniraj repozitorijum:**
   ```bash
   git clone https://github.com/veljkoMiljkovic123/bosch.git
   cd cd .\bosch\
   code .

2.  Instaliraj zavisnosti: npm install

3. Pokreni development server: npm run dev

Zašto ove tehnologije?
React – Komponentni pristup omogućava modularnu i laku izgradnju interfejsa

Vite – Ekstremno brz alat za razvoj i buildovanje

Tailwind CSS – Utility-first pristup za brzo stilizovanje bez ponavljanja

Redux Toolkit – Pouzdano upravljanje globalnim stanjem aplikacije

React Router – Navigacija kroz aplikaciju pomoću ruta


🏗️ Arhitektura
Komponente: Sve višekratne celine su u components/ folderu

Stranice: Svaka stranica aplikacije se nalazi u pages/ direktorijumu

Redux: Globalno stanje se čuva u store/ folderu sa slice-ovima (cartSlice, productsSlice)

Podaci: Simulirani kroz lokalni ProductsService

Rute: Implementirane pomoću react-router-dom

🧪 Samoprocena
🔍 Izazovi
Skakanje slike na detalj stranici
✔️ Rešeno korišćenjem fiksnih dimenzija i object-contain klase

Brisanje proizvoda iz korpe
✔️ Rešeno ispravnim pozivanjem deleteItemCartAction i pravilnim import/export-om

Debounce pretraga i layout
✔️ Rešeno kroz lodash.debounce i fine-tuning Tailwind klasa

Zadržavanje stanja pri paginaciji
✔️ Sve stanje sortiranja, pretrage i stranice čuvano kroz lokalni useState

🔧 Šta bih unapredio sa više vremena:
-Posvetio vise paznje responsiv-u i generalno detaljima
-Uradio sortiranje i paginaciju

🚀 Deploy
Projekat je deploy-ovan putem Vercel servisa:
🔗 bosch-ivory.vercel.app


📁 Struktura projekta
├── components/              # Višekratne komponente
├── pages/                   # Pojedinačne stranice
├── services/                # Simulacija podataka
├── store/                   # Redux konfiguracija
├── public/                  # Statika (slike, logo)
├── App.jsx
├── main.jsx
└── README.md
