// import { useLanguage } from "@/context/LanguageContext";
import { content as t } from "@/data/content";
export const useWhatsApp = () => {

  
  // Ganti dengan nomor asli Anda
  const WA_NUMBER = "601172215239"; 
  
  // Mengambil pesan dari language context dan meng-encode-nya agar aman untuk URL
  const message = encodeURIComponent(t.whatsapp.message);
  
  return `https://wa.me/${WA_NUMBER}?text=${message}`;
};