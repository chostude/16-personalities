# Setup Firebase (sekali saja, gratis)

1. Buka https://console.firebase.google.com -> **Add project** -> beri nama -> Create.
2. **Authentication** -> Get started -> tab *Sign-in method* -> aktifkan **Email/Password**.
3. **Firestore Database** -> Create database -> pilih lokasi (mis. asia-southeast2 Jakarta) -> mulai dengan *production mode*.
4. Di Firestore, tab **Rules** -> tempel isi file `firestore.rules` -> **Publish**. (Ini membuat tiap user hanya bisa membaca/menulis datanya sendiri.)
5. **Project settings** (ikon gear) -> *Your apps* -> ikon **</>** (Web) -> daftarkan app -> salin objek `firebaseConfig`.
6. Tempel nilainya ke `firebase-config.js`.
7. Jalankan lewat server lokal, jangan klik dua kali file-nya (Firebase Auth tidak jalan di `file://`):
   - VS Code: extension *Live Server* -> klik kanan `index.html` -> Open with Live Server, atau
   - Terminal di folder ini: `python -m http.server 8000` lalu buka http://localhost:8000
8. Saat di-hosting (Firebase Hosting/Netlify/Vercel), tambahkan domainmu di Authentication -> Settings -> **Authorized domains**.

Struktur data: `users/{uid}/results/{id}` berisi `type`, `variant`, `ts`.
