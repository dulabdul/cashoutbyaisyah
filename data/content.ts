import { ContentData } from "@/types";

export const content: Record<"my" | "en", ContentData> = {
  my: {
    nav: {
      home: "Home",
      about: "About Us",
      why: "Why Choose Us",
      service: "Service",
      advantage: "Advantage",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    
    hero: {
      headline: "SPAYLATER BOOSTPAYFLEX",
      desc: "CASHOUT KILAT, TAK PERLU MENUNGGU! Ada limit PayLater dalam SPayLater, Boost, dan Grab? Nak tukar jadi tunai?",
      cta: "Cashout Sekarang",
      stats: [
        { value: "5000+", label: "Transaksi Berjaya" },
        { value: "RM 2M+", label: "Total Dicairkan" },
        { value: "5 Minit", label: "Proses Purata" }
      ]
    },
    about: {
      title: "Tentang Kami",
      badge: "Profesional & Terpercaya",
      desc: "Perkhidmatan Pencairan Wang dari Platform PayLater dengan Mudah dan Cepat bersama Cashout SPayLater! Adakah anda mencari cara yang mudah dan cepat untuk mendapatkan wang tunai daripada had SPayLater atau Boost PayLater anda? Cashout SPayLater adalah penyelesaian terbaik untuk anda! Kami menawarkan perkhidmatan yang pantas, selamat, dan berbaloi."
    },
    why: {
      title: "Why Choose Us",
      desc: "Memilih perkhidmatan kami bermaksud anda mengutamakan kepantasan, keselamatan dan kemudahan. Kami memahami bahawa keperluan dana yang mendesak tidak boleh ditangguhkan, sebab itu seluruh proses kami direka agar seefisien mungkin.",
      cta: "Hubungi Kami"
    },
    services: {
      title: "KHIDMAT KAMI",
      subtitle: "Kami melayani pencairan berbagai jenis PayLater populer",
      items: [
        { title: "ShopeePay Later", desc: "Cairkan limit SPayLater anda pada bila-bila masa dengan proses pantas.", icon: "shopee" },
        { title: "Boost PayFlex", desc: "Tukar limit Boost PayFlex anda kepada wang tunai dengan cara selamat.", icon: "zap" },
        { title: "Grab PayLater", desc: "Nikmati perkhidmatan pencairan limit Grab PayLater tanpa sebarang halangan.", icon: "car" }
      ]
    },
    advantages: {
      title: "MENGAPA KAMI",
      items: [
        { title: "Proses Pantas", desc: "Wang cair hanya dalam beberapa minit.", icon: "clock" },
        { title: "Selamat & Dipercayai", desc: "Sistem transaksi yang jelas tanpa caj tersembunyi.", icon: "shield" },
        { title: "Panduan Lengkap", desc: "Dibantu oleh CS sehingga transaksi berjaya.", icon: "users" },
        { title: "Kadar Terbaik", desc: "Kadar yang kompetitif dan mesra pelanggan.", icon: "percent" },
        { title: "Privasi Terpelihara", desc: "Data anda selamat dan tidak dikongsi.", icon: "lock" },
        { title: "Perkhidmatan 24/7", desc: "Kami sedia membantu pada bila-bila masa.", icon: "headphones" }
      ]
    },
    testimonials: {
      title: "Testimoni Pelanggan",
      items: Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        src: `/images/testimoni/testi${i+1}.jpeg`, // Pastikan file ini ada nanti
        alt: `Testimoni Cashout ${i + 1}`
      }))
    },
    contact: {
      title: "Nak Cashout Paylater? Hubungi Kami!",
      desc: "Jangan biarkan kebutuhan mendesak menghambat Anda. Tim kami siap membantu pencairan limit Anda dengan aman.",
      cta: "Hubungi Sekarang"
    },
    footer: {
      desc: "CashoutByAisyah - Solusi terpercaya pencairan limit PayLater anda menjadi tunai instan.",
      copyright: "© 2025 CashoutByAisyah. All rights reserved."
    },
    whatsapp: {
      message: "Cashout paylater (spaylater/boost)"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      why: "Why Choose Us",
      service: "Service",
      advantage: "Advantage",
      testimonials: "Testimonials",
      contact: "Contact"
    },
    hero: {
      headline: "SPAYLATER BOOSTPAYFLEX",
      desc: "INSTANT CASHOUT, NO WAITING! Have PayLater limits in SPayLater, Boost, or Grab? Want to convert them to cash?",
      cta: "Cashout Now",
      stats: [
        { value: "5000+", label: "Successful Transactions" },
        { value: "RM 2M+", label: "Total Cashed Out" },
        { value: "5 Mins", label: "Average Process" }
      ]
    },
    about: {
      title: "About Us",
      badge: "Professional & Trusted",
      desc: "Easy and Fast Cashout Service from PayLater Platforms with Cashout SPayLater! Are you looking for an easy and quick way to get cash from your SPayLater or Boost PayLater limits? Cashout SPayLater is the best solution for you! We offer fast, safe, and worthwhile services."
    },
    why: {
      title: "Why Choose Us",
      desc: "Choosing our service means you prioritize speed, security, and convenience. We understand that urgent funding needs cannot be delayed, which is why our entire process is designed to be as efficient as possible.",
      cta: "Contact Us"
    },
    services: {
      title: "OUR SERVICES",
      subtitle: "We serve cashouts for various popular PayLater types",
      items: [
        { title: "ShopeePay Later", desc: "Cashout your SPayLater limit anytime with a fast process.", icon: "shopee" },
        { title: "Boost PayFlex", desc: "Convert your Boost PayFlex limit to cash safely and efficiently.", icon: "zap" },
        { title: "Grab PayLater", desc: "Enjoy Grab PayLater cashout service without any obstacles.", icon: "car" }
      ]
    },
    advantages: {
      title: "WHY US",
      items: [
        { title: "Fast Process", desc: "Cash disbursed in just a few minutes.", icon: "clock" },
        { title: "Safe & Trusted", desc: "Clear transaction system with no hidden charges.", icon: "shield" },
        { title: "Step-by-Step Guide", desc: "Assisted by CS until transaction is successful.", icon: "users" },
        { title: "Best Rates", desc: "Competitive and customer-friendly rates.", icon: "percent" },
        { title: "Privacy Protected", desc: "Your data is safe and not shared with others.", icon: "lock" },
        { title: "24/7 Service", desc: "We are ready to help whenever you need.", icon: "headphones" }
      ]
    },
    testimonials: {
      title: "Customer Testimonials",
      items: Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        src: `/images/testimoni/testi${i+1}.jpeg`,
        alt: `Testimonial Cashout ${i + 1}`
      }))
    },
    contact: {
      title: "Need Funds Immediately? Contact Us!",
      desc: "Don't let urgent needs hold you back. Our team is ready to help cashout your limit safely.",
      cta: "Contact Now"
    },
    footer: {
      desc: "CashoutByAisyah - Trusted solution for converting your PayLater limits into instant cash.",
      copyright: "© 2025 CashoutByAisyah. All rights reserved."
    },
    whatsapp: {
      message: "Cashout paylater (spaylater/boost)"
    }
  }
};