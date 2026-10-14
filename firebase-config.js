// Konfigurasi Firebase untuk project mbti-refsasha.
// Catatan: JANGAN pakai "import ... from 'firebase/app'" di sini.
// Firebase sudah dimuat lewat <script> di index.html, jadi cukup isi objek ini.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDkOqOIiwtVWjGjjHTlqfKeQbsqPgl0YPs",
  authDomain: "mbti-refsasha.firebaseapp.com",
  projectId: "mbti-refsasha",
  storageBucket: "mbti-refsasha.firebasestorage.app",
  messagingSenderId: "157347566533",
  appId: "1:157347566533:web:6e01d2dc437fca3e04b1ac"
};

// ===== Kirim hasil tes ke email (EmailJS, gratis 200 email/bulan) =====
// Selama masih "ISI_...", fitur kirim email nonaktif dan web tetap jalan normal.
window.EMAILJS_CONFIG = {
  publicKey: "hqH4O3SoSSaWG9zdO",
  serviceId: "service_43zizfc",
  templateId: "template_sgfaat5"
};
