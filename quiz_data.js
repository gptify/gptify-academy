/**
 * GPTify Uzbekistan — Academy Educational & Quiz Data
 * 14 To'liq Boyitilgan 10-Daqiqalik Interaktiv Darslar, Lego Konstruktori,
 * Jonli AI Simulyatori va 115+ ta Professional Prompt Lab To'plami.
 */

const QUIZ_DATA = {
  // 1. Kategoriyalar
  categories: [
    {
      id: "get_started",
      title: "🟢 1. Noldan Boshlash",
      desc: "AI nima? Qaysi vositani tanlash kerak (ChatGPT, Gemini, Claude, Perplexity)?",
      icon: "🚀",
      color: "#22c55e",
      questionCount: 15
    },
    {
      id: "learn_prompting",
      title: "💡 2. O'rganish & Muloqot",
      desc: "AI ga qanday buyruq berish kerak? 3 ta oltin qoida: Rol, Kontekst va Natija formati",
      icon: "🧠",
      color: "#3b82f6",
      questionCount: 20
    },
    {
      id: "apply_life_study",
      title: "💡 3. Hayot & Ishdagi Real Keyslar",
      desc: "Katta matnlar xulosasi, rasmiy xatlar yozish, oddiy Excel va shaxsiy maslahatchi",
      icon: "💡",
      color: "#06b6d4",
      questionCount: 15
    },
    {
      id: "visual_ai",
      title: "🎨 4. Vizual AI: Rasm & Video",
      desc: "Midjourney, Flux, Kling AI orqali fotorealistik rasm va video generatsiya qilish",
      icon: "🎨",
      color: "#f43f5e",
      questionCount: 12
    },
    {
      id: "apply_work_business",
      title: "💰 5. Ish & Biznesda Qo'llash",
      desc: "Frilans, mijozlarga AI xizmatlar, savdo botlari va daromad yaratish",
      icon: "⚡",
      color: "#ec4899",
      questionCount: 15
    },
    {
      id: "ai_safety_habits",
      title: "🛡️ 6. Xatolar & Xavfsizlik",
      desc: "AI aldaganda qanday tekshirish kerak? Maxfiy ma'lumotlarni asrash va to'g'ri odat shakllantirish",
      icon: "⚠️",
      color: "#ef4444",
      questionCount: 10
    }
  ],

  // 2. Boshlovchilar va Amaliyotchilar uchun Savollar Banki,

// 2. 20 ta Imtihon va Trenajyor Savollari (100% Amaliy Biznes Keyslar)
  questions: [
    // --- 1-BILET: B2B Sotuv va E'tirozlarni Yopish ---
    {
      id: 1,
      category: "sales",
      ticket: 1,
      isTricky: true,
      question: "Mijoz: 'Sizning xizmatingiz qimmat, bozorda boshqalar 30% arzonroq taklif qilyapti' degan e'tiroz bildirdi. AI dan qanday prompt so'rash narxni tushirmasdan sotuvni yopishga yordam beradi?",
      options: [
        "Mijozga: 'Ular sifatsiz ishlaydi' deb boshqalarni yomonlash",
        "AI dan: 'Mijoz e'tirozini qabul qilib, arzon variantlar keltiradigan xatarlarni tushuntiruvchi va bizning xizmat 2 oyda qanday qilib o'zini oqlashini hisoblab beruvchi 3 xil diplomatik javob yoz' deb so'rash",
        "Mijozga darhol 30% chegirma berish",
        "Mijozga boshqa yozmasdan aloqani uzish"
      ],
      correctIndex: 1,
      explanation: "Professional sotuvda narx bahslashilmaydi, balki mijozga qimmatroq yechim qanday qilib uning asabini, vaqtini va pulini asrab qolishi (ROI) hisob-kitoblar bilan ko'rsatiladi."
    },
    {
      id: 2,
      category: "sales",
      ticket: 1,
      isTricky: false,
      question: "Toshkentdagi korxona rahbariga Telegram orqali sovuq xat (Cold pitch) yozishda 30 soniyada diqqatni tortuvchi AI prompti qanday tuziladi?",
      options: [
        "Kompaniyangiz tarixi haqida 5 sahifalik uzun matn yozdirish",
        "AI ga: 'Rahbar uchun: 1) Uning og'riqli muammosini ko'rsatuvchi 1 ta fakt; 2) Qanday yechim bera olishimiz; 3) 10 daqiqalik qisqa suhbatga chorlovchi 60 so'zdan oshmaydigan ixcham xat tuz' deb vazifa berish",
        "Faqat narxlar ko'rsatilgan narxnoma (prays-list) tashlash",
        "Internetdagi barcha kontaktlarga bir xil spamlarni yuborish"
      ],
      correctIndex: 1,
      explanation: "Band rahbarlar uzun maqtovlarni o'qimaydi. 60 so'z ichida aniq muammo, yechim va yumshoq taklif (Call to action) berilsa, javob qaytarish konversiyasi 4 barobarga oshadi."
    },

    // --- 2-BILET: Marketing, SMM & Kontent ---
    {
      id: 3,
      category: "marketing",
      ticket: 2,
      isTricky: false,
      question: "Instagramda biznes sahifasi uchun AIDA (Diqqat-Qiziqish-Istak-Harakat) formulasi bo'yicha sotuvchi post yaratishda eng to'g'ri AI prompti qaysi?",
      options: [
        "'Biz haqimizda chiroyli post yoz'",
        "'Rol: Tajribali kopirayter. Vazifa: [Mahsulot] uchun AIDA formulasi bo'yicha Instagram post yoz. Diqqatni tortuvchi sarlavha, mijoz og'rig'i, mahsulot afzalligi va Directga yozishga undovchi CTA bo'lsin'",
        "'Faqat emojilardan iborat matn chiqar'",
        "'Inglizcha postni o'zbekchaga Google Translate qilib ber'"
      ],
      correctIndex: 1,
      explanation: "AIDA formulasi orqali tuzilgan postlar mijozni befarq qoldirmaydi: Attention (Diqqat) to'xtatadi, Interest (Qiziqish) o'qitadi, Desire (Istak) xohish uyg'otadi, Action (Harakat) xaridga undaydi."
    },
    {
      id: 4,
      category: "marketing",
      ticket: 2,
      isTricky: true,
      question: "Instagram Reels va TikTokda odamni dastlabki 3 soniyada to'xtatib qoluvchi kuchli 'Hook' ssenariysi tuzishda AI ga qanday cheklov qo'yiladi?",
      options: [
        "Videoni sekin va sokin musiqa bilan boshlash",
        "AI ga: 'Dastlabki 3 soniyada ekranda kutilmagan savol yoki paradoks ko'rsatuvchi, tomoshabinning odatiy fikrini sindiruvchi 5 xil provokatsion Hook taklif qil' deb cheklov qo'yish",
        "Faqat logotipni 5 soniya ko'rsatish",
        "Videoda umuman gapirmaslik"
      ],
      correctIndex: 1,
      explanation: "Lenta varaqlayotgan inson miyasi 3 soniyada qaror qabul qiladi. Kuchli vizual yoki matnli Hook bo'lmasa, foydali kontentingiz ham ko'rilmasdan o'tib ketadi."
    },

    // --- 3-BILET: Ofis & Excel Tahlili ---
    {
      id: 5,
      category: "office",
      ticket: 3,
      isTricky: false,
      question: "Kompaniyaning 5000 qatorli savdo jadvalidan faqat 'Chilonzor' filialida 'Mebel' toifasi bo'yicha jami tushumni hisoblash uchun AI dan qanday formula so'raladi?",
      options: [
        "Oddiy SUM formulasini so'rash",
        "AI ga ustunlarni ko'rsatib (A: Filial, B: Toifa, C: Summa): 'Chilonzor va Mebel shartlarini qanoatlantiruvchi SUMIFS formulasini va uni qanday kiritish yo'riqnomasini ber' deb so'rash",
        "Kalkulyatorda bittalab qo'shib chiqish",
        "Barcha qatorlarni qo'lda saralash"
      ],
      correctIndex: 1,
      explanation: "SUMIFS formulasi bir nechta shart bo'yicha yig'indini avtomatik hisoblaydi. AI ga ustun harflari berilsa, u bir zumda tayyor formulani tuzib beradi."
    },
    {
      id: 6,
      category: "office",
      ticket: 3,
      isTricky: true,
      question: "VLOOKUP dagi xatolardan (chapga qidirish cheklovi, ustun siljishi) qochish uchun zamonaviy Excelda qaysi yangi avlod formulasini AI dan talab qilish kerak?",
      options: [
        "Faqat COUNTIF",
        "XLOOKUP yoki INDEX+MATCH formulasi — chunki u ustun o'rnini o'zgartirganda buzilmaydi va ikkala yo'nalishda qidiradi",
        "Faqat AVERAGE",
        "Formulalar o'rniga faqat Word ishlatish"
      ],
      correctIndex: 1,
      explanation: "XLOOKUP zamonaviy Excelning eng qudratli qidiruv formulasidir. U chapga ham, o'ngga ham qidiradi va ustun qo'shilganda formulani buzib qo'ymaydi."
    },

    // --- 4-BILET: Uzum & E-Commerce ---
    {
      id: 7,
      category: "ecom",
      ticket: 4,
      isTricky: false,
      question: "Uzum Marketda mahsulot qidiruvda (SEO) 1-o'ringa chiqishi uchun sun'iy intellektdan qanday optimal sarlavha va tavsif tuzdiriladi?",
      options: [
        "Faqat bitta so'zdan iborat nom yozish",
        "AI ga: 'Xaridorlar Uzumda eng ko'p qidiradigan o'zbek va ruscha kalit so'zlarni jamlab, tovar nomi, asosiy afzalligi va xususiyatlarini 80 belgida SEO talabiga moslab ber' deb topshiriq berish",
        "Boshqa do'konning tavsifini nusxalash",
        "Sarlavhaga narxni yozib qo'yish"
      ],
      correctIndex: 1,
      explanation: "Uzum qidiruv algoritmlari sarlavha va tavsifdagi kalit so'zlarga tayanadi. To'g'ri tanlangan SEO kalit so'zlar organik ko'rishlar sonini 300% ga oshiradi."
    },
    {
      id: 8,
      category: "ecom",
      ticket: 4,
      isTricky: true,
      question: "Uzumda xaridor 1 yulduz qo'yib: 'Mahsulotda nuqson bor, umuman yoqmadi' deb salbiy sharh yozdi. Do'kon obro'sini saqlash uchun eng professional AI javob qanday bo'ladi?",
      options: [
        "Xaridor bilan janjallashib, uni tuhmatchilikda ayblash",
        "AI dan: 'Xaridordan samimiy uzr so'rab, mahsulotni bepul almashtirib berish taklifini beruvchi, boshqa yangi xaridorlarga do'kon mas'uliyatli ekanligini isbotlovchi diplomatik javob yoz' deb so'rash",
        "Sharhga umuman e'tibor bermaslik",
        "Do'konni yopib yuborish"
      ],
      correctIndex: 1,
      explanation: "Salbiy sharhlarga berilgan professional va g'amxo'r javob yangi kirgan 100 lab xaridorlarda ishonch uyg'otadi va sotuvni oshiradi."
    },

    // --- 5-BILET: Huquq, Shartnomalar & Tahlil ---
    {
      id: 9,
      category: "legal",
      ticket: 5,
      isTricky: true,
      question: "Didox orqali kelgan 25 sahifalik B2B pudrat shartnomasidagi yuqori penya va yashirin xatarlarni AI ga 10 soniyada qanday tekshirtirish mumkin?",
      options: [
        "Faqat oxirgi sahifadagi imzolarni o'qitish",
        "AI ga: 'Sen korporativ yuristisan. Matndan: 1) Bir tomonlama bekor qilish shartlari; 2) Har bir kechikkan kun uchun penya miqdori; 3) To'lov muddati buzilgandagi jarimalarni jadvalda ko'rsat va xatarlarni fosh et' deb buyruq berish",
        "Hujjatni o'qimasdan imzolash",
        "Shartnomani rasmga olib Instagramga joylash"
      ],
      correctIndex: 1,
      explanation: "AI katta shartnomalardagi mayda yozuvli yuqori foizli penya (masalan, kunlik 0.5% yoki 1%) tuzoqlarini soniyalarda aniqlab, biznesni millionlab so'm zarardan asraydi."
    },
    {
      id: 10,
      category: "legal",
      ticket: 5,
      isTricky: false,
      question: "Rahbar uchun oylik tushum va xarajatlar farqini 1 sahifalik tushunarli formatda taqdim etishda AI dan qanday tuzilma so'raladi?",
      options: [
        "Faqat 10 sahifalik quruq nazariy matn",
        "AI ga: '1) Asosiy ko'rsatkichlar (KPI); 2) Eng katta 3 ta xarajat moddasi; 3) Kelasi oyda xarajatlarni 15% qisqartirish bo'yicha 3 ta amaliy taklif ko'rinishidagi ixcham boshqaruv xulosasi (Executive Summary) ber' deb talab qilish",
        "Faqat bitta umumiy raqam ko'rsatish",
        "Hisobotni kechiktirish"
      ],
      correctIndex: 1,
      explanation: "Rahbarlarga (Executive) quruq raqamlar emas, raqamlar ortidagi muammo va aniq biznes takliflar kerak. Executive Summary formati eng qadrli hisoblanadi."
    },

    // --- 6-BILET: Karyera, HR & Mijozlar Servisi ---
    {
      id: 11,
      category: "career",
      ticket: 6,
      isTricky: false,
      question: "Xalqaro kompaniyalarga ishga topshirishda Google tan olgan 'XYZ formulasi' bo'yicha rezyumeni AI yordamida qanday kuchaytirish kerak?",
      options: [
        "'Men yaxshi va tirishqoq xodimman' deb umumiy gaplar yozish",
        "AI ga: '[Yutuq]ni [O'lchanadigan natija, % yoki $] orqali [Amalga oshirilgan harakat] yordamida bajardim shaklida har bir bandni raqamlar bilan qayta shakllantir' deb topshiriq berish",
        "Boshqa odamning CV sini to'liq ko'chirish",
        "Faqat maktab baholarini kiritish"
      ],
      correctIndex: 1,
      explanation: "Google XYZ formulasi: 'Accomplished [X] as measured by [Y], by doing [Z]'. Raqamlar bilan tasdiqlangan yutuqlar maosh taklifini 2 barobargacha oshiradi."
    },
    {
      id: 12,
      category: "career",
      ticket: 6,
      isTricky: true,
      question: "Telegram bot orqali mijozlarga 24/7 avtomatik narx va katalog yuborishda AIni qanday xavfsiz 'Rol va Cheklov' bilan sozlash kerak?",
      options: [
        "AIdan mijoz bilan xohlagan mavzuda suhbatlashishni so'rash",
        "AI ga qat'iy tizimli yo'riqnoma (System Prompt) berib: 'Sen faqat [Kompaniya] mahsulotlari bo'yicha ma'lumot berasan. Do'konda yo'q narsani to'qima, narxni o'zgartirma, begona mavzularga xushmuomalalik bilan rad javobini ber' deb chegaralash",
        "AIni umuman tekshirmasdan qo'yib yuborish",
        "Mijozlarning kartalarini so'rashga ruxsat berish"
      ],
      correctIndex: 1,
      explanation: "Chatbotlarda 'Guardrails' (chegaralar) o'rnatilmasa, AI mavjud bo'lmagan chegirmalar va'da qilishi yoki do'konga tegishli bo'lmagan mavzularga chalg'ishi mumkin."
    },

    // --- 7-BILET: Ta'lim, Til & Feynman Texnikasi ---
    {
      id: 13,
      category: "study",
      ticket: 7,
      isTricky: false,
      question: "Murakkab iqtisodiy qonuniyat yoki texnik tushunchani 5 daqiqada o'zlashtirish uchun Feynman texnikasi qanday qo'llaniladi?",
      options: [
        "Kitobdagi barcha ta'riflarni yodlab olish",
        "AI ga: 'Ushbu murakkab mavzuni 10 yoshli bolaga tushuntirgandek, hayotiy oddiy misollar (muzqaymoq yoki velosiped) bilan tushuntirib ber' deb buyurish",
        "Mavzuni o'rganmasdan tashlab ketish",
        "Faqat ilmiy maqolalarni qayta o'qish"
      ],
      correctIndex: 1,
      explanation: "Feynman texnikasi: agar siz biror narsani bolaga oddiy so'zlar bilan tushuntirib bera olsangiz, demak uning tub mohiyatini haqiqatan tushungansiz."
    },
    {
      id: 14,
      category: "study",
      ticket: 7,
      isTricky: false,
      question: "Ingliz tilida erkin so'zlashuv darajasini (Speaking) oshirishda AIdan shaxsiy repetitor sifatida qanday foydalaniladi?",
      options: [
        "Faqat so'zlarni o'zbekchaga tarjima qilib yurish",
        "AI ga: 'Sen mening sabrli ingliz tili do'stimsan. Men bilan B1 darajasida mavzularda suhbatlash. Har safar mening xatoimni tuzatib, nega bunday ekanligini tushuntir va savol bilan davom et' deb aytish",
        "Grammatika qoidalarini daftarga ko'chirish",
        "Yiliga bitta so'z o'rganish"
      ],
      correctIndex: 1,
      explanation: "AI uyalmasdan, xato qilishdan qo'rqmasdan jonli muloqot qilish imkonini beruvchi 24/7 bepul sabrli repetitordir."
    },

    // --- 8-BILET: AI Xavfsizligi & Gallyutsinatsiya ---
    {
      id: 15,
      category: "safety",
      ticket: 8,
      isTricky: true,
      question: "AI model to'qib chiqargan 'yolg'on fakt' (Hallucination) yoki noaniq statistikani fosh qilishning eng ishonchli usuli qaysi?",
      options: [
        "AI aytgan hamma narsaga ko'r-ko'rona ishonish",
        "AI dan javobini tasdiqlovchi rasmiy manbalarni (havola, qonun raqami yoki tadqiqot muallifini) ko'rsatishni so'rash va muhim faktlarni Perplexity/Google orqali qayta tekshirish",
        "Faqat telefonni o'chirib yoqish",
        "AI ga: 'Rost aytyapsanmi?' deb yana bir bor so'rash"
      ],
      correctIndex: 1,
      explanation: "AI ba'zan ishonchli ohangda haqiqatga to'g'ri kelmaydigan ma'lumot to'qishi mumkin (Hallucination). Grounding (manba talab qilish) bu xatoni bartaraf etadi."
    },
    {
      id: 16,
      category: "safety",
      ticket: 8,
      isTricky: true,
      question: "Kompaniyangizning ichki moliyaviy hisobotini yoki mijozlar pasport ma'lumotlarini AI ga yuklashdan oldin qaysi xavfsizlik qoidasiga rioya qilish shart?",
      options: [
        "Hamma ma'lumotlarni hech qanday o'zgarishsiz tashlash",
        "Barcha shaxsiy ma'lumotlarni (F.I.SH., pasport raqamlari, karta raqamlari, aniq korxona nomini) 'Kompaniya A', 'Xodim B' kabi anonim belgilarga almashtirib kiritish",
        "Faqat kechasi kiritish",
        "Faqat audioda aytish"
      ],
      correctIndex: 1,
      explanation: "Anonimlashtirish korporativ xavfsizlikning 1-qoidasidir. AI mantiqiy hisob-kitobni anonim ma'lumotlar bilan ham 100% to'g'ri bajara oladi."
    },

    // --- 9-BILET: Vizual AI & Prompt Muhandisligi ---
    {
      id: 17,
      category: "visual",
      ticket: 9,
      isTricky: false,
      question: "Midjourney yoki Flux orqali brend mahsulotining fotorealistik 3D reklama renderini olish uchun promptda qaysi parametrlar berilishi shart?",
      options: [
        "Faqat 'chiroyli rasm chiz'",
        "1) Mahsulot va material (shisha, metall, mato); 2) Yorug'lik (Studio lighting, soft shadows); 3) Kamera va burchak (Macro lens, 8k octane render, --ar 16:9)",
        "Faqat rassomning ismini yozish",
        "Harflar o'rniga faqat raqamlar yozish"
      ],
      correctIndex: 1,
      explanation: "Vizual AI yorug'lik, material va kamera burchagi ko'rsatilgandagina kinostudiya darajasidagi mukammal reklama tasvirini yaratadi."
    },
    {
      id: 18,
      category: "prompt_eng",
      ticket: 9,
      isTricky: false,
      question: "Professional Lego Promptning 4 ta tayanch bloki ([Rol] + [Kontekst] + [Cheklov] + [Format]) nima uchun oddiy bitta gapdan 10 barobar ustun?",
      options: [
        "Chunki u juda uzun",
        "Chunki u AIni aniq mutaxassis pozitsiyasiga qo'yadi, keraksiz suv so'zlarni taqiqlaydi va tayyor ishlatish mumkin bo'lgan aniq tuzilmada javob berishga majbur qiladi",
        "Chunki AI faqat shu so'zlarni tushunadi",
        "Chunki bu dasturlash tilidir"
      ],
      correctIndex: 1,
      explanation: "Lego formulasi noaniqlikni yo'q qiladi. AI o'zidan to'qimasdan, aynan sizning biznesingizga kerakli professional formatda natija beradi."
    },

    // --- 10-BILET: Korxonalarda AI Joriy Qilish & Kelajak ---
    {
      id: 19,
      category: "business_ai",
      ticket: 10,
      isTricky: false,
      question: "20-50 kishilik korxonada AIni joriy qilishda eng to'g'ri strategiya qaysi?",
      options: [
        "Darhol barcha xodimlarni ishdan bo'shatib, sun'iy intellektga topshirish",
        "Kompaniyada eng ko'p vaqt yeydigan 1 ta jarayondan (masalan: bir xil mijoz savollari yoki Excel hisobotlar) pilot guruh orqali boshlab, tayyor promptlar bazasini yaratish",
        "Hech narsani o'zgartirmaslik",
        "Million dollarlik tushunarsiz dasturlar sotib olish"
      ],
      correctIndex: 1,
      explanation: "To'g'ri AI transformatsiyasi eng ko'p vaqt sarflanadigan bitta bo'limdan boshlanadi. Natijani ko'rgan xodimlar AIni o'zlarining asosiy quroliga aylantiradilar."
    },
    {
      id: 20,
      category: "master",
      ticket: 10,
      isTricky: false,
      question: "Sun'iy intellekt davrida mehnat bozorida eng talabgir va yuqori daromad oluvchi mutaxassis kim bo'ladi?",
      options: [
        "AIdan qo'rqib, undan umuman foydalanmaydigan inson",
        "AI uning o'rnini egallashiga yo'l qo'ymay, o'z sohasida sun'iy intellektni professional qo'llab 10 kishining ishini 1 kunda bajara oladigan mutaxassis",
        "Faqat qo'lda xat yozadigan inson",
        "Kompyuter ishlatishni to'xtatgan inson"
      ],
      correctIndex: 1,
      explanation: "Sun'iy intellekt insonning o'rnini egallamaydi — lekin AIdan foydalanadigan mutaxassis AIdan foydalanmaydigan mutaxassisning o'rnini egallaydi!"
    }
  ],

  // 3. 14 ta 10-Daqiqalik Interaktiv Darslar (Stories, Lego & Jonli AI Simulyatori)
  lessons: [
  {
    "id": 1,
    "num": "1.1",
    "title": "Sun'iy Intellekt nima va u biznesda qanday inqilob qildi?",
    "duration": "10-12 daq",
    "category": "Boshlash",
    "summary": "AI sehr emas — u insoniyatning barcha tajribasini o'zida jamlagan universal hisoblash va fikrlash kuchaytiruvchisidir.",
    "takeaway": "AI sizning o'rningizni egallamaydi — lekin AIdan samarali foydalanadigan inson AIdan foydalanmaydigan insonning o'rnini egallaydi!",
    "concept": "### 🧠 Sun'iy Intellektning Tub Mohiyati\nKo'pchilik odamlar sun'iy intellektni 'hamma narsani biluvchi sehrli robot' deb tasavvur qilishadi. Aslida esa Zamonaviy Katta Til Modellari (LLM — Large Language Models) insoniyat yaratgan trillionlab matnlar, kitoblar, kodlar va dialoglar asosida o'qitilgan ulkan **ehtimollik va mantiqiy bog'liqlik mexanizmidir**.\n\nUlar shunchaki so'zlarni bir-biriga ulabgina qolmay, inson miyasi kabi mavhum g'oyalarni tushunish, murakkab kontekstni tahlil qilish va yangi yechimlar yaratish qobiliyatiga ega bo'ldi.\n\n### ⚡ An'anaviy Dasturlar vs Sun'iy Intellekt\nOddiy kompyuter dasturlari (masalan, kalkulyator yoki 1C) qat'iy qoidalar bo'yicha ishlaydi: agar `A` bo'lsa, `B` ni bajar. Agar kutilmagan vaziyat yuz bersa, dastur to'xtab qoladi.\nSun'iy intellekt esa **moslashuvchan fikrlaydi**: u noaniq, chalkash yoki chala berilgan ma'lumotdan ham eng mantiqiy va to'g'ri xulosani chiqarib bera oladi.",
    "workflow": "1. **🎯 Maqsadni Aniq Belgilash:** AI ga nima qilish kerakligini emas, qanday yakuniy natijaga erishish kerakligini aniq ayting.\n2. **📥 To'liq Birlamchi Kontekst Berish:** Sohangiz, byudjetingiz, mijozlaringiz va qanday cheklovlar borligini kiriting.\n3. **🔄 Iterativ Sayqallash:** Birinchi javob bilan cheklanib qolmang — 'Mana bu bandini chuqurroq yoz', 'Raqamlar bilan asosla' deb muloqotni davom ettiring.",
    "caseStudy": "🏢 **Toshkentdagi Kichik Mebel Korxonasi:**\n• **❌ Muammo:** 3 nafar savdo menejeri mijozlarning Telegramdagi savollariga javob berishga ulgurmas, buyurtmalar 2-3 soat kechikar va mijozlar raqobatchilarga ketib qolardi.\n• **💡 Yechim:** ChatGPT orqali 50 ta eng ko'p beriladigan savolga xushmuomala, o'zbekona va sotuvga undovchi skriptlar bazasi shakllantirildi.\n• **📈 Natija:** Birinchi 15 kunda mijozlarga javob qaytarish vaqti 2 soatdan 30 soniyaga tushdi, yo'qotiladigan mijozlar soni 70% ga kamaydi!",
    "proTips": "• **1-Qoida:** AI ga har doim aniq rol bering — 'Sen oddiy dastursan' emas, 'Sen 10 yillik tajribaga ega boshqaruvchisan' deb boshlang.\n• **Xato:** Bir martada juda ko'p chalkash vazifalar yuklash. Bitta so'rovda bitta aniq natija talab qiling.\n• **Oltin maslahat:** AI dan olingan matnni to'g'ridan-to'g'ri ko'r-ko'rona ishlatmang, doim insoniy filtrdan (fact-check) o'tkazing.",
    "bad_prompt": "Biznesimni qanday rivojlantiray?",
    "good_prompt": "Sen Toshkentdagi B2B xizmatlar ko'rsatuvchi kichik kompaniya biznes-maslahatchisisan. Biznesim: Ofis mebellari savdosi. Daromadni 2 oyda 20% ga oshirish uchun hoziroq qo'llash mumkin bo'lgan 3 ta amaliy qadamni xarajatlar va kutilayotgan natijalar bilan ko'rsat.",
    "practical_prompt": "Sen [Kasbingiz/Sohangiz] bo'yicha professional maslahatchisan. Mening vaziyatim: [Biznesingiz yoki ishingiz]. Maqsad: [Qanday natijaga erishmoqchisiz]. Menga bugunoq boshlash mumkin bo'lgan 3 ta amaliy qadamni ko'rsat.",
    "actionPrompt": "Sen kichik biznes maslahatchisisan. Toshkentdagi mebel do'koni uchun savdoni oshiruvchi 3 ta amaliy qadam taklif qil.",
    "legoPuzzle": {
      "slots": [
        "ROL",
        "KONTEKST",
        "FORMAT"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Biznes-maslahatchi",
          "slot": "ROL"
        },
        {
          "id": "t2",
          "text": "Kichik biznes egasiman",
          "slot": "KONTEKST"
        },
        {
          "id": "t3",
          "text": "3 ta amaliy qadam",
          "slot": "FORMAT"
        },
        {
          "id": "t4",
          "text": "She'r yozib ber",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Salom! Sizning biznesingizda AI bugunoq quyidagi 3 ta jarayonda yordam bera oladi:\n\n1. 📱 **Mijozlar savollariga avto-javob:** Telegramdagi 'Narxi qancha?' va 'Yetkazib berish bormi?' degan 80% bir xil savollarga 1 soniyada xushmuomala javob skriptlari.\n2. 📝 **Instagram postlari va sarlavhalar:** 1 haftalik mahsulotlar tavsifi va diqqatni tortuvchi sarlavhalarni 15 daqiqada tayyorlash.\n3. 📦 **Kechikkan tovarlar bo'yicha xat:** Ta'minotchilarga rasmiy va qat'iy talabnoma xatini tuzish."
  },
  {
    "id": 2,
    "num": "1.2",
    "title": "Asboblar tanlovi: ChatGPT vs Claude vs Gemini vs Perplexity",
    "duration": "12-14 daq",
    "category": "Boshlash",
    "summary": "Har bir AI modelining o'z super-kuchi bor: Birortasi hamma narsaga zo'r emas, to'g'ri vazifaga to'g'ri asbobni tanlash siri.",
    "takeaway": "Katta hujjat va shartnomalarga — Claude; Jonli internet qidiruv va faktlarga — Perplexity; Universal ijod va g'oyalarga — ChatGPT; Google ekotizimiga — Gemini!",
    "concept": "### 🛠️ Zamonaviy Katta To'rtlik (Big Four of AI)\nBozorda yuzlab modellar paydo bo'lmoqda, ammo professional darajada faqat 4 ta gigant ekotizim yetakchilik qilmoqda:\n\n1. **🟢 ChatGPT (OpenAI — GPT-4o):**\n   - *Super-kuchi:* Universal aql, ijodkorlik, savdo va marketing g'oyalari, dasturlash va ovozli muloqot.\n   - *Qachon tanlash kerak:* Matn yozish, g'oyalar miya hujumi (brainstorming), kundalik topshiriqlar.\n\n2. **🟣 Claude (Anthropic — Claude 3.5 Sonnet):**\n   - *Super-kuchi:* Eng tabiiy insoniy til, 200,000 tokengacha bo'lgan ulkan xotira va hujjatlarni chuqur tahlil qilish.\n   - *Qachon tanlash kerak:* 50-100 sahifalik PDF kitoblar, B2B shartnomalar auditi va murakkab kod yozish.\n\n3. **🔵 Gemini (Google — Gemini 1.5 Pro):**\n   - *Super-kuchi:* 2 million tokengacha bo'lgan tengsiz kontekst, Google Docs, Gmail, YouTube bilan to'g'ridan-to'g'ri integratsiya.\n   - *Qachon tanlash kerak:* Butun video yoki audio yozuvlarni tahlil qilish, Google Drive hujjatlari bilan ishlash.\n\n4. **🟡 Perplexity AI:**\n   - *Super-kuchi:* Haqiqiy vaqtda internet qidiruvi va har bir faktga aniq giperhavola (citation).\n   - *Qachon tanlash kerak:* Yangiliklar, bozor narxlari, faktik ma'lumotlar va tadqiqotlar.",
    "workflow": "1. **Topshiriq turini aniqlang:** Bu yangi ijodmi, katta hujjatmi yoki yangi xabar qidirishmi?\n2. **Mos modelni oching:** Hujjat bo'lsa Claude ga yuklang; bozor narxi bo'lsa Perplexity ga yozing.\n3. **Natijani solishtiring:** Eng muhim strategik loyihalarda bir xil so'rovni 2 ta modelga berib, solishtiring.",
    "caseStudy": "🏢 **Yuridik Konsalting Kompaniyasi:**\n• **❌ Muammo:** Yuristlar 40 sahifalik investitsiya shartnomalarini ko'rib chiqishga har safar 4-5 soat vaqt sarflardi.\n• **💡 Yechim:** Hujjat Claude 3.5 Sonnet modeliga yuklanib, xatarlar jadvalini chiqarish topshirildi.\n• **📈 Natija:** Barcha xavfli bandlar va yashirin jarimalar 15 soniyada topildi, yuristlar vaqti 80% ga tejab qolindi!",
    "proTips": "• **Tavsiya:** Yangi ma'lumot kerak bo'lsa (masalan, kechagi qonun o'zgarishi), ChatGPT ga emas, faqat Perplexity ga murojaat qiling.\n• **Xato:** Barcha modellarga bir xil javob kutish — har birining o'z xarakteri va kuchli tomoni bor.\n• **Pro Hack:** Claude matn yozishda ChatGPT ga qaraganda ancha kam 'suv' qo'shadi va tabiiyroq eshitiladi.",
    "bad_prompt": "Qaysi AI eng zo'r?",
    "good_prompt": "Men 25 sahifalik B2B shartnomani tahlil qilib, undagi xatarli shartlarni topmoqchiman. Buning uchun Claude 3.5 Sonnet menga qanday yordam bera oladi va so'rovni qanday berishim kerak?",
    "practical_prompt": "Quyidagi 3 ta vazifam bor: 1) [1-vazifangiz]; 2) [2-vazifangiz]; 3) [3-vazifangiz]. Menga qaysi AI modelidan (ChatGPT, Claude, Gemini, Perplexity) foydalanish eng samarali ekanligini va har biriga qanday so'rov kiritishim kerakligini tavsiya qil.",
    "actionPrompt": "Quyidagi 3 ta vazifam bor: 1) Internetdan yangi xabar topish; 2) Katta shartnoma o'qish; 3) Ijodiy post yozish. Qaysi modelni tanlashim kerak?",
    "legoPuzzle": {
      "slots": [
        "MODEL",
        "VAZIFA",
        "FORMAT"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Claude 3.5 Sonnet",
          "slot": "MODEL"
        },
        {
          "id": "t2",
          "text": "25 sahifalik shartnoma tahlili",
          "slot": "VAZIFA"
        },
        {
          "id": "t3",
          "text": "Xatarlar jadvali",
          "slot": "FORMAT"
        },
        {
          "id": "t4",
          "text": "Rasm chizib ber",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "🔍 **Shartnoma tahlili natijalari (Claude 3.5 Sonnet):**\n\nHujjat to'liq o'rganildi. Siz uchun 3 ta asosiy xatarli band aniqlandi:\n\n| Band | Xatar darajasi | Izoh va Tavsiya |\n| :--- | :---: | :--- |\n| **7.2-band** | 🔴 Yuqori | To'lov kechikkan har bir kun uchun **kunlik 0.5% penya** belgilangan. Tavsiya: 0.1% ga tushiring. |\n| **11.4-band** | 🟡 O'rta | Shartnoma faqat ijara beruvchi xohishi bilan bir tomonlama bekor qilinishi mumkin. |\n| **14.1-band** | 🟢 Past | Nizolar faqat Toshkent tumanlararo iqtisodiy sudida ko'riladi. |"
  },
  {
    "id": 3,
    "num": "2.1",
    "title": "Birinchi to'g'ri so'rov: AI ga insondek rol berish siri",
    "duration": "10-12 daq",
    "category": "O'rganish",
    "summary": "Nega oddiy savolga zerikarli javob qaytadi? AI ga aniq rol berish orqali natijani 5 barobar kuchaytirish.",
    "takeaway": "AIdan oddiy odamdek so'rasangiz, o'rtacha javob olasiz. Unga aniq tajribali mutaxassis rolini bersangiz, natija 5 barobar chuqurlashadi!",
    "concept": "### 🎭 Rol Berishning Neyron Mexanizmi (Role Prompting)\nAI o'z bazasida yuzlab million mutaxassislarning bilimini saqlaydi: u ham maktab o'quvchisi, ham 20 yillik tajribaga ega xalqaro Harvard professori kabi fikrlay oladi.\n\nAgar siz shunchaki *'Menga marketing haqida maslahat ber'* desangiz, neyron tarmoq barcha ma'lumotlarning o'rtacha arifmetik qiymatini oladi va sizga vikipediyadagi umumiy kitobiy gaplarni aytadi.\n\nLekin agar siz so'rovni quyidagicha boshlasangiz:\n> *'Sen Toshkentdagi premium brendlar bo'yicha 10 yillik tajribaga ega B2B marketing direktorsan...'*\n\nAI darhol ushbu soha leksikoni, qaror qabul qilish mantig'i va amaliy filtrlarni ishga tushiradi!",
    "workflow": "1. **Mutaxassislik darajasini belgilang:** Shunchaki 'yurist' emas, 'O'zbekiston soliq huquqi bo'yicha 15 yillik tajribaga ega advokat'.\n2. **Kompaniya kontekstini bering:** Kim uchun va qanday maqsadli auditoriyaga xizmat qilinmoqda?\n3. **Uslubni talab qiling:** 'Rasmiy, aniq raqamlar bilan, ortiqcha lirik chekinishlarsiz' deb chegaralang.",
    "caseStudy": "🏢 **Ayollar Kiyimlari Do'koni:**\n• **❌ Muammo:** SMMchi 'Menga post yoz' deb so'raganida AI juda zerikarli, kitobiy matn chiqarib berardi va layklar tushib ketgan edi.\n• **💡 Yechim:** Rol o'zgartirildi: 'Sen o'zbek ayollarining didini chuqur biladigan, samimiy dugonadek maslahat beruvchi Toshkentlik stilistsan'.\n• **📈 Natija:** Postlar ostida izohlar soni 4 barobar oshdi, Directga yozgan mijozlar soni 35 taga yetdi!",
    "proTips": "• **Oltin formula:** [Kim ekansan] + [Qaysi bozorda ishlaysan] + [Qanday mezonlarga tayanasen].\n• **Xato:** Bir vaqtning o'zida bir-biriga zid rollar berish (masalan: 'ham arzon sotuvchi bo'l, ham lyuks brend bo'l').\n• **Foydali trik:** AI ga: 'Javob berishdan oldin mendan qo'shimcha savollar so'ra' deb yozsangiz, u eng aniq natijani beradi.",
    "bad_prompt": "Menga marketing rejasi tuzib ber.",
    "good_prompt": "Sen Toshkentdagi 10 yillik tajribaga ega B2B marketing direktorsan. Yangi konsalting xizmati uchun diqqatni tortuvchi 3 ta amaliy strategiya taklif qil.",
    "practical_prompt": "Sen [Kasb/Mutaxassislik, masalan: 10 yillik tajribali bosh buxgalter / professional HR direktor]san. Menga [Vazifangiz] bo'yicha eng muhim 3 ta xatoni va ularning amaliy yechimini professional tilda tushuntirib ber.",
    "actionPrompt": "Sen Toshkentdagi 10 yillik tajribaga ega marketing rahbarisan. Menga yangi do'kon ochilishi uchun diqqatni tortuvchi 3 ta g'oya taklif qil.",
    "legoPuzzle": {
      "slots": [
        "ROL",
        "SOHA",
        "MAQSAD"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "10 yillik B2B marketolog",
          "slot": "ROL"
        },
        {
          "id": "t2",
          "text": "Toshkent kiyim bozori",
          "slot": "SOHA"
        },
        {
          "id": "t3",
          "text": "3 ta aksiya g'oyasi",
          "slot": "MAQSAD"
        },
        {
          "id": "t4",
          "text": "Oddiy talaba",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Assalomu alaykum! Toshkent kiyim bozoridagi 10 yillik tajribamga tayanib, yangi do'koningiz uchun 3 ta daromad keltiruvchi aksiya taklif qilaman:\n\n1. 🎁 **'Eskisini olib kel — 30% chegirma ol'**: Mijozlar eski kiyimlarini topshirib, yangi kolleksiyaga vaucher oladi.\n2. 📸 **'Ko'zgu selfisi kvesti'**: Do'kon stendida rasmga tushib Stories'ga qo'yganlarga 50,000 so'mlik sovg'a kuponi.\n3. ⏱ **'Faqat 2 soat: Baxtli oqshom'**: Har payshanba soat 18:00 dan 20:00 gacha maxsus tanlangan 20 xil mahsulotga 40% chegirma."
  },
  {
    "id": 4,
    "num": "2.2",
    "title": "3 Oltin Qoida: Rol, Kontekst va Natija formati (Before & After)",
    "duration": "12-14 daq",
    "category": "O'rganish",
    "summary": "Mukammal so'rov formulasini o'rganamiz: Kim? Vaziyat nima? Natija qanday ko'rinishda bo'lsin?",
    "takeaway": "Mukammal prompt formulasi: ROL (Kim?) + KONTEKST (Vaziyat nima?) + FORMAT (Qanday ko'rinishda: jadval, ro'yxat, punktlar?).",
    "concept": "### 📐 Prompt Muhandisligining Muqaddas Uchtaligi\nHar qanday samarali prompt 3 ta mustahkam ustunga tayanadi:\n\n1. **🎭 ROL (Role):**\n   AI kimning nuqtai nazaridan javob berishi kerak? (Advokat, buxgalter, kopirayter).\n\n2. **🌍 KONTEKST (Context):**\n   Vaziyat qanday? Maqsad nima? Qanday cheklovlar, byudjet yoki xatarlar mavjud? AI sizning xayolingizdagi sharoitni bilmaydi — kontekst qanchalik boy bo'lsa, javob shunchalik aniq bo'ladi.\n\n3. **📊 FORMAT (Format):**\n   Natijani qanday qabul qilmoqchisiz? Jadval (table), 5 ta qisqa bullet-points, qadam-baqadam algoritm, yoki Telegram xabari? Formatni belgilamasangiz, AI uzun va o'qish qiyin bo'lgan matn beradi.",
    "workflow": "1. **Rolni o'rnating:** `Sen tajribali B2B savdo mutaxassisisan.`\n2. **Kontekstni yozing:** `Mijoz 3 kundan beri hisob-fakturaga javob bermayapti, oldin 2 marta xarid qilgan.`\n3. **Formatni buyuring:** `Menga 50 so'zdan oshmaydigan, xushmuomala Telegram xabari matnini yoz.`",
    "caseStudy": "🏢 **Logistika Kompaniyasi:**\n• **❌ Muammo:** Menejerlar mijozlarga yuk kechikishi haqida xat yozganda mijozlar bilan janjal kelib chiqardi.\n• **💡 Yechim:** 3 Oltin Qoida bo'yicha shablon yaratildi: [Rol: Mijozlar bilan aloqa bo'yicha diplomat] + [Kontekst: Ob-havo tufayli Qozog'iston chegarasida yuk 2 kunga kechikmoqda] + [Format: 3 banddan iborat, uzr so'rash va kompensatsiya taklifi].\n• **📈 Natija:** Mijozlarning 90% i vaziyatni to'g'ri tushundi va birorta ham shartnoma bekor qilinmadi!",
    "proTips": "• **Amaliy qoida:** Agar natija qoniqtirmasa, butun promptni o'chirmang — faqat FORMAT qismini aniqlashtiring (masalan: 'Jadval ko'rinishida ber').\n• **Xato:** Kontekstsiz buyruq berish ('Xat yoz').\n• **Pro Maslahat:** So'rov oxiriga 'Qisqa va faqat amaliy bo'lsin' deb qo'shsangiz, AI keraksiz kirish so'zlarini tashlab yuboradi.",
    "bad_prompt": "Mijozga xat yoz.",
    "good_prompt": "[ROL]: B2B savdo menejeri. [KONTEKST]: Mijoz 3 kundan beri hisob-fakturaga javob bermayapti. [FORMAT]: 3 banddan iborat, xushmuomala, 50 so'zdan oshmaydigan Telegram xabari.",
    "practical_prompt": "[ROL]: Sen [Mutaxassislik]san.\n[KONTEKST]: [Vaziyatingizni 2 gapda tushuntiring].\n[CHЕKLOV]: [Ortiqcha gaplarsiz, faqat amaliy].\n[FORMAT]: [Jadval ko'rinishida: 1) Muammo, 2) Yechim, 3) Birinchi qadam].",
    "actionPrompt": "[ROL]: Yurist. [KONTEKST]: B2B ijara shartnomasi tuzilmoqda. [FORMAT]: Faqat 3 ta asosiy xatarli bandni jadvalda chiqar.",
    "legoPuzzle": {
      "slots": [
        "ROL",
        "KONTEKST",
        "FORMAT"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "B2B savdo menejeri",
          "slot": "ROL"
        },
        {
          "id": "t2",
          "text": "Mijoz 3 kundan beri to'lamayapti",
          "slot": "KONTEKST"
        },
        {
          "id": "t3",
          "text": "Xushmuomala Telegram xabar",
          "slot": "FORMAT"
        },
        {
          "id": "t4",
          "text": "Qo'pol talabnoma",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Assalomu alaykum, Akmal aka! Ishlaringiz yaxshimi?\n\nO'tgan seshanba kuni yuborilgan hisob-fakturani ko'rishga imkon bo'ldimi? Mahsulotlarni omboringizga ertaga 1-navbatda yetkazib berishimiz uchun to'lov holatini aniqlashtirib olmoqchi edik.\n\nAgar to'lovda biror texnik qiyinchilik bo'lsa, ayting, yordam berishga tayyorman. Rahmat!"
  },
  {
    "id": 5,
    "num": "3.1",
    "title": "Shaxsiy repetitor: Murakkab mavzuni 10 yoshli bolaga tushuntirgandek o'rganish",
    "duration": "10-12 daq",
    "category": "Qo'llash (O'qish)",
    "summary": "Feynman texnikasi: Har qanday qiyin qonun, atama yoki kitobni 5 daqiqada sodda misollar bilan tushunish.",
    "takeaway": "Feynman texnikasi: Murakkab soliq, qonun yoki texnologiyani tushunish uchun AIdan uni oddiy analogiyalar va hayotiy misollar bilan tushuntirishni so'rang.",
    "concept": "### 💡 Feynman Texnikasining Kuchi\nNobel mukofoti sovrindori Richard Feynman aytganidek:\n> *\"Agar siz biror mavzuni 10 yoshli bolaga tushuntirib bera olmasangiz, demak o'zingiz ham uni to'liq tushunmabsiz.\"*\n\nBiz ko'pincha murakkab moliyaviy hisobotlar (EBITDA, ROI), huquqiy moddalar yoki texnologik atamalarni (Blockchain, API, Cloud) o'rganishda murakkab ilmiy tilda yozilgan matnlarga duch kelamiz va boshimiz og'riydi.\n\nAI bu yerda dunyodagi eng sabrli va zukko o'qituvchiga aylanadi: u har qanday abstrakt matematik yoki iqtisodiy formulani nonvoyxona, bozor yoki kundalik turmush misolida jonlantirib beradi.",
    "workflow": "1. **Mavzuni bering:** Tushunmayotgan qiyin matn yoki formulani kiriting.\n2. **Analogiya so'rang:** 'Menga buni oddiy do'kon yoki oshxona misolida tushuntir' deb buyuring.\n3. **Savol-javob qiling:** 'Men buni to'g'ri tushundimmi? Agar bunday bo'lsa nima bo'ladi?' deb o'z tushunchangizni tekshiring.",
    "caseStudy": "🏢 **Toshkentlik Iqtisodiyot Talabasi:**\n• **❌ Muammo:** Talaba 'EBITDA' va 'Sof foyda' o'rtasidagi farqni kitoblardan 3 kun o'qib ham tushuna olmagan.\n• **💡 Yechim:** ChatGPT ga: 'Menga EBITDA ni maktab yonidagi muzqaymoq do'koni misolida tushuntir' deb so'radi.\n• **📈 Natija:** AI 2 daqiqada muzqaymoq suti, ijara va cho'ntakdagi pul misolida tushuntirdi va talaba imtihondan 100 ball oldi!",
    "proTips": "• **Kuchli ibora:** 'Mavzuni 10 yoshli bolaga tushuntirgandek, hayotiy misol bilan ayt'.\n• **Xato:** Faqat ta'rifni o'qib ketish. Albatta AIdan o'zingizni tekshiruvchi 3 ta savol berishini so'rang.\n• **Pro Hack:** Tushunmagan chet tili grammatikasini ham shu usulda 10 daqiqada o'zlashtirish mumkin.",
    "bad_prompt": "EBITDA nima?",
    "good_prompt": "EBITDA moliyaviy tushunchasini 10 yoshli bolaga tushuntirgandek, oddiy nonvoyxona misolida sodda va qiziqarli tilda tushuntirib ber.",
    "practical_prompt": "Menga [Murakkab atama yoki tushuncha]ni 10 yoshli bolaga tushuntirgandek, kundalik hayotiy misol (analogiya) bilan 3 ta qisqa bandda tushuntirib ber.",
    "actionPrompt": "Ushbu murakkab mavzuni 10 yoshli bolaga tushuntirgandek, kundalik hayotiy misollar bilan juda sodda tilda tushuntirib ber.",
    "legoPuzzle": {
      "slots": [
        "USUL",
        "TUSHUNCHA",
        "ANALOGIYA"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "10 yoshli bolaga tushuntirish",
          "slot": "USUL"
        },
        {
          "id": "t2",
          "text": "EBITDA moliyaviy atamasi",
          "slot": "TUSHUNCHA"
        },
        {
          "id": "t3",
          "text": "Muzqaymoq do'koni misoli",
          "slot": "ANALOGIYA"
        },
        {
          "id": "t4",
          "text": "Murakkab formula",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Tasavvur qil, sen maktab yonida **muzqaymoq do'koni** ochding:\n\n1. 🍦 **Daromad:** Kuniga 100,000 so'mlik muzqaymoq sotding.\n2. 🥛 **Xarajat:** Sut va muzga 40,000 so'm sarflading.\n3. 💰 **EBITDA:** Cho'ntagingda qolgan 60,000 so'm — bu do'koning o'z kuchi bilan ishlab topgan sof operatsion puli!\n\nHali bu puldan davlatga soliq to'lamagansan. EBITDA — biznesing qanchalik kuchli ishlayotganini ko'rsatadigan ko'rsatkichdir!"
  },
  {
    "id": 6,
    "num": "3.2",
    "title": "Til o'rganish: AI bilan har kuni jonli inglizcha muloqot",
    "duration": "12-14 daq",
    "category": "Qo'llash (O'qish)",
    "summary": "Hech qanday uyalishsiz, sabrli AI o'qituvchi bilan kunlik 10 daqiqa jonli gaplashish vorkfloui.",
    "takeaway": "Hech qanday uyalishsiz, sabrli AI repetitor bilan kuniga 10 daqiqa yozishish yoki ovozli gaplashish orqali tildagi to'siqni yengasiz.",
    "concept": "### 🗣️ Til O'rganishdagi Eng Katta To'siq: Uyatchanlik\nKo'pchilik odamlar grammatikani bilsa ham gapira olmaydi, chunki ular tirik odam oldida xato qilishdan, kulgiga qolishdan qo'rqishadi.\nAI bu muammoni butunlay yo'q qildi: u hech qachon sizning ustingizdan kulmaydi, charchamaydi va bir narsani 100 marta so'rasangiz ham tabassum bilan tushuntiradi.\n\nChatGPT ning ovozli rejimi (Voice Mode) yoki matnli suhbati orqali xatolaringizni muloyim tuzatuvchi shaxsiy repetitor yaratish mumkin.",
    "workflow": "1. **Rolni o'rnating:** 'Sen sabrli repetitorsan, men bilan A2 darajasida suhbatlash'.\n2. **Qoidani ayting:** 'Har safar xato qilsam, avval xatoni to'g'rilab, keyin savol ber'.\n3. **Mavzuni tanlang:** Ish, sayohat, sevimli taomlar haqida kuniga 10 daqiqa yozishing.",
    "caseStudy": "🏢 **Dasturchi (Frontend Dev):**\n• **❌ Muammo:** Xalqaro loyiha uchun suhbatdan o'tishi kerak edi, lekin inglizcha gaplashish tajribasi yo'q edi.\n• **💡 Yechim:** 2 hafta davomida har kuni AI bilan 20 daqiqa texnik intervyu simulyatsiyasini o'tkazdi.\n• **📈 Natija:** O'ziga bo'lgan ishonch oshdi va xorijiy kompaniyadan 2,500$ lik taklif (offer) oldi!",
    "proTips": "• **Pro Tip:** AIdan faqat xatoni aytishni emas, 'Qanday qilib buni tabiiyroq (native) aytish mumkin?' deb so'rang.\n• **Xato:** Bir kunda 3 soat o'rganib, keyin 1 hafta tashlab qo'yish. Kuniga 10 daqiqa ancha samaraliroq.",
    "bad_prompt": "Let's speak English.",
    "good_prompt": "Sen sabrli ingliz tili repetitorisan. Men bilan A2 darajasida ish va kundalik mavzularda suhbatlash. Har bir javobimda grammatik xato bo'lsa, uni tuzatib, keyin savol ber.",
    "practical_prompt": "Act as a patient English tutor. Let's have a friendly conversation about [Mavzu, masalan: my work / business / daily habits]. Keep your answers at [A2 / B1] level, correct my grammar mistakes politely after each message, and suggest 1 better phrase.",
    "actionPrompt": "Sen mening sabrli ingliz tili o'qituvchisisan. Men bilan A2 darajasida suhbatlash, xatolarimni muloyim tuzat va yangi so'zlarni eslat.",
    "legoPuzzle": {
      "slots": [
        "ROL",
        "DARAJA",
        "QOIDA"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Patient English Tutor",
          "slot": "ROL"
        },
        {
          "id": "t2",
          "text": "A2 Elementary level",
          "slot": "DARAJA"
        },
        {
          "id": "t3",
          "text": "Correct errors politely",
          "slot": "QOIDA"
        },
        {
          "id": "t4",
          "text": "Translate to Russian",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Hello! I am very glad to meet you. Don't worry about making mistakes — that is how we learn!\n\nLet's start: **What did you do today at work or study?** (Please reply in English, and I will help you with any difficult words!)"
  },
  {
    "id": 7,
    "num": "4.1",
    "title": "Rezyume va Karyera: Xalqaro standartdagi CV tayyorlash",
    "duration": "12-14 daq",
    "category": "Qo'llash (Ish)",
    "summary": "Google XYZ formulasi bo'yicha rezyumeni ish beruvchilar diqqatini tortadigan darajaga ko'tarish.",
    "takeaway": "Rezyumeda shunchaki majburiyatlarni emas — raqamlar bilan o'lchanadigan aniq natijalarni ko'rsating (Google XYZ usuli).",
    "concept": "### 📄 HR Nega Rezyumelarning 90% ini Axlatga Tashlaydi?\nKatta kompaniyalarda rekruter har bir rezyumega o'rtacha bor-yo'g'i **6-7 soniya** vaqt ajratadi.\nAgar rezyumeda *'Mijozlar bilan ishladim, xatlarga javob berdim'* kabi quruq gaplar bo'lsa, u darhol chetga suriladi.\n\nGoogle mutaxassislari ishlab chiqqan **XYZ formulasi**:\n> *\"Men **X** natijaga erishdim, **Y** o'lchov vositasi orqali, **Z** harakatini amalga oshirish yordamida.\"*\nMisol: *'Savdo bo'limida ishladim'* emas, *'Yangi CRM skriptlarini joriy etish orqali (Z), 6 oy ichida savdo hajmini (Y) 35% ga oshirdim (X)'*.",
    "workflow": "1. **Hozirgi tajribangizni yozing:** Qilgan ishlaringizni xomaki sanab bering.\n2. **AIdan XYZ formatiga o'tkazishni so'rang:** Raqamlar va fe'llar bilan boyiting.\n3. **Vakansiyaga moslang:** Ish e'lonidagi kalit so'zlarni rezyumega singdiring.",
    "caseStudy": "🏢 **Buxgalter Rezyumesi:**\n• **❌ Muammo:** 3 oy davomida 20 ta joyga rezyume yuborgan, birorta ham intervyuga chaqirishmagan.\n• **💡 Yechim:** Rezyume AI yordamida XYZ formulasiga o'tkazildi: 'Didox va 1C integratsiyasi orqali oylik hisobot topshirish vaqtini 5 kundan 1 kunga qisqartirdi'.\n• **📈 Natija:** 1 haftada 4 ta nufuzli korxona bosh buxgalter o'rinbosarligi suhbatiga chaqirdi!",
    "proTips": "• **Pro Maslahat:** Har doim faol harakat fe'llaridan foydalaning (Boshqardi, optimallashtirdi, oshirdi, tejab qoldi).\n• **Xato:** Rezyumeni 5 sahifa qilish — 1 sahifa (maksimum 2) yetarli.",
    "bad_prompt": "Menga rezyume yozib ber.",
    "good_prompt": "Mening kasbim: Savdo bo'limi boshlig'i. Quyidagi tajribamni Google XYZ formulasi (Natija + Foiz + Amal) bo'yicha 3 ta kuchli punktga aylantir: 1) Savdoni oshirdim; 2) Yangi mijozlar topdim; 3) Xodimlarni o'qitdim.",
    "practical_prompt": "Mening soham: [Sohangiz]. Tajribam: [Tajribangiz haqida 2 gap]. Buni xalqaro standartdagi rezyume uchun Google XYZ formulasi (erishilgan natija + o'lchov foizi + qilingan harakat) bo'yicha 3 ta kuchli punkt shaklida yozib ber.",
    "actionPrompt": "Mening tajribam: 3 yil savdoda ishladim, yangi mijozlar olib keldim. Buni Google XYZ formulasi bo'yicha rezyume punktlariga aylantir.",
    "legoPuzzle": {
      "slots": [
        "FORMAT",
        "SOHA",
        "NATIJA"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "XYZ formulasi (Vazifa + Natija)",
          "slot": "FORMAT"
        },
        {
          "id": "t2",
          "text": "Savdo bo'limi boshlig'i",
          "slot": "SOHA"
        },
        {
          "id": "t3",
          "text": "Savdoni 35% ga oshirish",
          "slot": "NATIJA"
        },
        {
          "id": "t4",
          "text": "Quruq majburiyatlar ro'yxati",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Sizning rezyumeingiz uchun xalqaro standartdagi 3 ta kuchli punkt:\n\n• **B2B savdo hajmini 6 oyda 35% ga oshirdi**: 12 ta yangi yirik korporativ mijoz bilan shartnoma imzolandi (Jami 480 mln so'm).\n• **Mijozlar bilan qayta aloqa tizimini (CRM) joriy etdi**: Natijada takroriy xaridlar ulushi 18% dan 42% ga yetkazildi.\n• **5 kishilik savdo jamoasini boshqardi**: Haftalik o'quv treninglari orqali yangi xodimlarning savdoga kirishish muddatini 2 haftaga qisqartirdi."
  },
  {
    "id": 8,
    "num": "4.2",
    "title": "Ofis ishlari: 3 soatlik Excel hisobotlari va xatlarni 10 daqiqada tugatish",
    "duration": "12-15 daq",
    "category": "Qo'llash (Ish)",
    "summary": "Excel formulalarini avtomatik yozdirish, rasmiy taklif xatlari va hisobotlarni bir zumda shakllantirish.",
    "takeaway": "Exceldagi qiyin formulalar (VLOOKUP, INDEX/MATCH) va makroslarni yodlash shart emas — AIdan so'rab 10 soniyada oling!",
    "concept": "### 📊 Ofis Xodimi Vaqtining 50% i Nega Isrof Bo'ladi?\nOfis xodimlari kun bo'yi bir xil mexanik ishlarni bajarishadi: Excelda jadvallarni tozalash, formulalar yozish, hamkorlarga rasmiy xatlar tayyorlash.\nAI bu jarayonni tubdan o'zgartiradi:\nSiz qanday formula yozishni bilishingiz shart emas — shunchaki ustunlarning harflarini va nima natija kerakligini aytsangiz, AI tayyor formulani katakgacha ko'rsatib beradi.",
    "workflow": "1. **Ustunlarni sanang:** A ustunda Sana, B da Filial, C da Summa.\n2. **Maqsadni ayting:** 'Faqat Sergeli filialining yanvar oyidagi jami savdosini hisobla'.\n3. **Formulani oling:** Chiqqan formulani nusxalab Excelga qo'ying.",
    "caseStudy": "🏢 **Taqsimot Markazi (Logistika):**\n• **❌ Muammo:** Har dushanba kuni 30 ta do'konning savdo qoldiqlarini jamlashga 4 soat vaqt ketardi.\n• **💡 Yechim:** ChatGPT dan SUMIFS va XLOOKUP formulalari olindi va bitta avtomatik shablon tuzildi.\n• **📈 Natija:** Hisobot tayyorlash vaqti 4 soatdan 5 daqiqaga qisqardi!",
    "proTips": "• **Pro Tip:** Agar Excel xato bersa (#N/A yoki #VALUE!), xato xabarini AIdan so'rang, sababini darhol aytadi.\n• **Tavsiya:** Yangi Excelda VLOOKUP o'rniga doim XLOOKUP dan foydalaning.",
    "bad_prompt": "Excelda qanday hisoblayman?",
    "good_prompt": "Excel jadvalimda A ustunda Sana, B ustunda Mahsulot, C ustunda Summa bor. Menga 'Telefon' mahsulotining jami savdosini hisoblovchi SUMIFS formulasini yozib ber.",
    "practical_prompt": "Excel jadvalimda quyidagi ustunlar bor: [Ustun nomlari: A, B, C...]. Men [Qanday natija olmoqchisiz]ni xohlayman. Menga eng sodda va samarali Excel formulasini va uni qanday kiritishni tushuntirib ber.",
    "actionPrompt": "Excelda 3 ta ustun bor: Sana, Bo'lim, Xarajat. Menga 'Marketing' bo'limining jami xarajatini hisoblovchi formulani va qanday kiritishni ko'rsat.",
    "legoPuzzle": {
      "slots": [
        "DASTUR",
        "USTUNLAR",
        "MAQSAD"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "SUMIFS formulasi",
          "slot": "DASTUR"
        },
        {
          "id": "t2",
          "text": "A:Sana, B:Bo'lim, C:Summa",
          "slot": "USTUNLAR"
        },
        {
          "id": "t3",
          "text": "Marketing xarajatini hisoblash",
          "slot": "MAQSAD"
        },
        {
          "id": "t4",
          "text": "Qo'lda hisoblagich",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Sizga kerakli eng aniq va tezkor Excel formulasi:\n\n```excel\n=SUMIFS(C:C, B:B, \"Marketing\")\n```\n\n**Qanday kiritish kerak:**\n1. Natija chiqishi kerak bo'lgan istalgan bo'sh katakka (masalan, `E2`) ushbu formulani qo'ying.\n2. `Enter` tugmasini bosing.\n3. Excel avtomatik tarzda faqat B ustunida 'Marketing' deb yozilgan qatorlarning C ustunidagi summalarini qo'shib beradi. 3 soatlik hisobot 5 soniyada tayyor!"
  },
  {
    "id": 9,
    "num": "5.1",
    "title": "SMM va Kontent: 1 haftalik postlar va video ssenariylarni 20 daqiqada tuzish",
    "duration": "12-15 daq",
    "category": "Qo'llash (Daromad)",
    "summary": "Telegram va Instagram uchun diqqatni tortuvchi sarlavha (Hook) va harakatga chaqiruv bilan kontent-reja.",
    "takeaway": "Yaxshi postning 80% muvaffaqiyati — birinchi 3 soniyadagi diqqatni tortuvchi sarlavhada (Hook).",
    "concept": "### 📱 E'tibor Iqtisodiyoti (Attention Economy)\nInstagram yoki Telegramda foydalanuvchi lentani har soniyada varaqlaydi. Agar sizning postingiz birinchi **3 soniyada** uning diqqatini tortmasa, postingiz qanchalik foydali bo'lmasin, hech kim o'qimaydi.\n\nKuchli post formulasi:\n1. **🪝 Hook (Qarmoq):** Odamni to'xtatuvchi g'alati fakt, savol yoki muammo.\n2. **📖 Qiymat (Value):** 3 ta amaliy maslahat yoki yechim.\n3. **🚀 CTA (Call to Action):** Aniq bitta harakat (Saqlab oling, do'stingizga yuboring, Directga yozing).",
    "workflow": "1. **Auditoriyani ayting:** 'Mening auditoriyam — Toshkentlik yosh onalar'.\n2. **Haftalik mavzularni so'rang:** 5 kunlik turli formatdagi postlar rejasi.\n3. **Har bir postga Hook va CTA qo'shing:** Aniq harakatga undovchi so'zlar.",
    "caseStudy": "🏢 **Kosmetika Do'koni:**\n• **❌ Muammo:** Har kuni 'Bugun nima post qo'yamiz?' deb bosh qotirishardi, postlar sifatsiz edi.\n• **💡 Yechim:** Dushanba kuni ertalab ChatGPT orqali to'liq haftalik kontent-plan tuzildi (2 ta foydali maslahat, 1 ta sharh, 1 ta aksiya, 1 ta interaktiv).\n• **📈 Natija:** Post tayyorlash vaqti haftasiga 10 soatdan 1 soatga tushdi, savdolar 25% ga oshdi!",
    "proTips": "• **Pro Tip:** Post oxiriga 'Batafsil ma'lumot olish uchun Directga + belgisini yuboring' deb yozsangiz, algoritmlar postni ko'proq tavsiya qiladi.\n• **Xato:** Faqat sotuvchi postlar qo'yish. 80% foydali kontent, 20% sotuv bo'lishi kerak.",
    "bad_prompt": "Telegram uchun post yoz.",
    "good_prompt": "Ayollar liboslari do'koni uchun Telegram kanalga 3 ta post ssenariysi tuz: 1) Foydali maslahat; 2) Mijoz sharhi; 3) Chegirma taklifi. Har birida kuchli Hook va CTA bo'lsin.",
    "practical_prompt": "Mening biznesim: [Biznesingiz yoki loyihangiz]. Maqsadli auditoriya: [Kimlar uchun]. Menga 1 haftalik (5 kunlik) Instagram/Telegram kontent rejasini jadval ko'rinishida ber: Kuni, Format, Sarlavha (Hook), Asosiy Fikr, Harakatga Chaqiruv (CTA).",
    "actionPrompt": "Mening soham: Ayollar kiyimlari do'koni. 1 haftalik Instagram karusel postlar rejasini: Sarlavha, Asosiy fikr va CTA bilan jadvalda ber.",
    "legoPuzzle": {
      "slots": [
        "PLATFORMA",
        "AUDITORIYA",
        "STRUKTURA"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Instagram Reels & Telegram",
          "slot": "PLATFORMA"
        },
        {
          "id": "t2",
          "text": "Toshkentlik yoshlar",
          "slot": "AUDITORIYA"
        },
        {
          "id": "t3",
          "text": "Hook + 3 maslahat + CTA",
          "slot": "STRUKTURA"
        },
        {
          "id": "t4",
          "text": "Gazeta e'loni",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "📅 **1 Haftalik Instagram & Telegram Kontent-Rejasi:**\n\n• **Dushanba (Ekspert maslahati):**\n🪝 *Hook:* 'Kiyimlaringiz 3 yuvishdan keyin xiralashib qolyaptimi? Mana 1 ta sir!'\n📖 *Fikr:* Mato sifatini saqlash bo'yicha 3 ta parvarish qoidasi.\n🚀 *CTA:* 'Ushbu postni yo'qotib qo'ymaslik uchun saqlab oling!'\n\n• **Chorshanba (Mijoz hikoyasi):**\n🪝 *Hook:* 'To'yga 2 soat qolganda ko'ylaksiz qolgan mijozimizga qanday yordam berdik?'\n📖 *Fikr:* Tezkor yetkazib berish xizmatimiz real keysi.\n🚀 *CTA:* 'Sizda ham shoshilinch vaziyat bo'lsa, hoziroq Directga yozing!'"
  },
  {
    "id": 10,
    "num": "5.2",
    "title": "B2B Savdo: Mijoz e'tirozlarini yopuvchi skriptlar va tijoriy takliflar",
    "duration": "12-15 daq",
    "category": "Qo'llash (Daromad)",
    "summary": "'Qimmat', 'O'ylab ko'ramiz', 'Raqobatchida arzonroq' degan e'tirozlarni sotuvga aylantirish san'ati.",
    "takeaway": "Mijoz 'Qimmat' deganda, u narxga emas — to'layotgan puliga yarasha qadriyat ko'rmayotganiga e'tiroz bildiradi.",
    "concept": "### 💰 B2B Savdoda E'tirozlar bilan Ishlash\nMijoz 'Qimmat' desa, tajribasiz sotuvchi darhol narxni tushiradi yoki chegirma beradi. Bu korxona daromadini o'ldiradi.\nProfessional sotuvchi esa narxni emas, qadriyatni ko'rsatadi:\n1. **Mijoz fikrini qabul qilish (Empathy):** 'Sizni to'liq tushunaman, byudjetni tejash juda muhim.'\n2. **Xarajat emas, investitsiya ekanligini hisoblash:** 'Bizning tizimimiz har oyda xodimlaringizning 40 soat vaqtini tejaydi, bu esa oyiga 5 mln so'm tejash demakdir.'\n3. **Yumshoq savol bilan keyingi qadamga o'tish:** 'Keling, 1 haftalik bepul sinovda buni o'z ko'zingiz bilan ko'ring, nima deysiz?'",
    "workflow": "1. **E'tirozni kiriting:** Mijoz aynan nima dedi?\n2. **Qadriyatni hisoblattiring:** Bizning xizmat mijozga qanday qilib pul tejaydi yoki topadi?\n3. **3 xil yumshoq javob variantini oling:** Telegram, telefon va yuzma-yuz uchrashuv uchun.",
    "caseStudy": "🏢 **CRM Tizimi Sotuvchisi:**\n• **❌ Muammo:** Mijozlar 'Bizga Excel yetadi, dasturingiz qimmat' deb 80% holatda rad javobini berardi.\n• **💡 Yechim:** ChatGPT orqali 'Exceldagi xatolar tufayli yo'qotilayotgan mijozlar hisob-kitobi' skripti tuzildi.\n• **📈 Natija:** Mijozlarning 45% i dasturni sinab ko'rishga rozi bo'ldi, konversiya 3 barobar oshdi!",
    "proTips": "• **Tavsiya:** Hech qachon mijoz bilan bahslashmang ('Yo'q, adashyapsiz' demang). Har doim 'Ha, tushunaman, shu bilan birga...' deb boshlang.\n• **Pro Hack:** Tijoriy taklifni 10 sahifa qilmang — 1 sahifalik ixcham taklif 5 barobar ko'proq o'qiladi.",
    "bad_prompt": "Mijoz qimmat dedi, nima deyin?",
    "good_prompt": "Sen Toshkentdagi B2B xizmatlar bo'yicha eng tajribali savdo menejerisan. Mijoz: 'Sizning xizmatingiz bizga juda qimmatlik qiladi'. Ushbu e'tirozni qadriyat ko'rsatish, 3 oyda o'zini oqlashi va yumshoq savol bilan yopuvchi 3 ta turli javob varianti yozib ber.",
    "practical_prompt": "Mening mahsulotim: [Mahsulot yoki xizmat]. Narxi: [Narxi]. Mijozning e'tirozi: [Mijoz aytgan so'z, masalan: 'Qimmat' yoki 'Raqobatchida arzon']. Ushbu e'tirozni qadriyat ko'rsatish va xushmuomala savol bilan yopuvchi 3 xil savdo skripti yozib ber.",
    "actionPrompt": "Mijoz 'Sizlarda xizmat juda qimmat' dedi. Chegirma bermasdan, qadriyatni tushuntiruvchi 3 ta xushmuomala javob yoz.",
    "legoPuzzle": {
      "slots": [
        "ROL",
        "E'TIROZ",
        "USUL"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Tajribali B2B savdo mutaxassisi",
          "slot": "ROL"
        },
        {
          "id": "t2",
          "text": "Xizmat juda qimmat",
          "slot": "E'TIROZ"
        },
        {
          "id": "t3",
          "text": "Qadriyat ko'rsatish + Hisob-kitob",
          "slot": "USUL"
        },
        {
          "id": "t4",
          "text": "Janjal qilish",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "Mijozning 'Qimmat' e'tirozini yopish uchun 3 ta professional variant:\n\n1. 🤝 **Qadriyatni ko'rsatish usuli:**\n'Akmal aka, sizni to'g'ri tushunaman, narx muhim omil. Lekin bizning yechimimiz xomashyo yo'qotishlarini 15% ga qisqartiradi, ya'ni birinchi 2 oyning o'zidayoq xarajatini to'liq qoplab beradi. Keling, hisob-kitobini 5 daqiqada ko'rsatib beraman?'\n\n2. ⚖️ **Sifat kafolati usuli:**\n'Bozorda arzonroq variantlar borligini bilamiz. Lekin ular bilan ishlagan mijozlarimiz ko'pincha qo'shimcha remont va to'xtab qolishlarga 2 barobar ko'p xarajat qilishgan. Biz esa 1 yillik rasmiy servis kafolatini beramiz.'\n\n3. 💡 **Bo'lib to'lash varianti:**\n'Byudjetingizga og'irlik qilmasligi uchun ushbu to'lovni 3 qismga bo'lib to'lash imkoniyatini taqdim eta olamiz.'"
  },
  {
    "id": 11,
    "num": "5.3",
    "title": "Uzum Market va E-Commerce: Sotuvchi kartochkalar va sharhlarga javoblar",
    "duration": "12-15 daq",
    "category": "Qo'llash (Daromad)",
    "summary": "SEO sarlavhalar, kalit so'zlar, 1-yulduzli salbiy sharhlarni do'kon obro'siga aylantirish sirlari.",
    "takeaway": "Salbiy sharhga berilgan xushmuomala va professional javob — yangi xaridorlar uchun eng kuchli ishonch kafolatidir.",
    "concept": "### 🛍️ Marketplace Qidiruv Algoritmlari (SEO)\nUzum Marketda xaridor birinchi navbatda qidiruv qatoriga so'z yozadi (masalan: 'ayollar sumkasi charm').\nAgar sizning kartochkangiz sarlavhasi va tavsifida ushbu kalit so'zlar to'g'ri joylashtirilmagan bo'lsa, tovaringiz 10-sahifada qolib ketadi va hech kim sotib olmaydi.\n\nShuningdek, **salbiy sharhlar (1-2 yulduz)** har qanday do'konda bo'ladi. Aqlli sotuvchi salbiy sharhga urishmasdan, xaridorga uzr so'rab, almashtirib berishni taklif qiladi — boshqa xaridorlar aynan shu javobni ko'rib do'konga ishonch bildirishadi!",
    "workflow": "1. **Tovarni tavsiflang:** Mahsulot nomi, materiali, o'lchami.\n2. **SEO sarlavha oling:** 60 belgidan oshmaydigan qidiruvbop nom.\n3. **Salbiy sharhlarga javob shablonini saqlang:** Servis obro'sini himoya qiling.",
    "caseStudy": "🏢 **Uzum Market Poyabzal Do'koni:**\n• **❌ Muammo:** Mahsulot kartochkasi 'Erkaklar krossovkasi' deb qisqa yozilgan, kuniga bor-yo'g'i 2 ta sotilardi.\n• **💡 Yechim:** ChatGPT orqali SEO optimizatsiya qilindi: 'Erkaklar krossovkasi bahorgi yozgi qulay sport poyabzali nafas oluvchi charm'.\n• **📈 Natija:** Kartochka ko'rishlar soni 6 barobar oshdi, kunlik savdo 15 tadan oshdi!",
    "proTips": "• **Tavsiya:** Tavsifga xaridorlar eng ko'p so'raydigan o'lchamlar jadvalini albatta kiriting.\n• **Xato:** Salbiy sharh yozgan mijozni ayblash ('O'zingiz noto'g'ri ishlatibsiz' demang).",
    "bad_prompt": "Uzumga sarlavha yoz.",
    "good_prompt": "Mahsulot: Simsiz Bluetooth quloqchinlar. Uzum Market algoritmlari bo'yicha eng yuqori qidiruv beruvchi: 1) Aniq SEO sarlavha (60 belgi); 2) 5 ta asosiy afzallik bullet-point; 3) 15 ta ommabop kalit so'zlar ro'yxatini o'zbek tilida tuzib ber.",
    "practical_prompt": "Mahsulotim: [Mahsulot nomi va xususiyatlari]. Sotiladigan platforma: Uzum Market. Menga: 1) Qidiruvda topga chiqaruvchi SEO sarlavha; 2) 5 ta asosiy foyda ro'yxati; 3) 1 yulduzli salbiy sharhga servisni saqlovchi diplomatik javob yozib ber.",
    "actionPrompt": "Uzum Market uchun 'Erkaklar charm hamyoni' mahsulotiga SEO sarlavha, 3 ta asosiy afzallik va qidiruv teglari yoz.",
    "legoPuzzle": {
      "slots": [
        "BOZOR",
        "MAHSULOT",
        "SEO_TALAB"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Uzum Market algoritmi",
          "slot": "BOZOR"
        },
        {
          "id": "t2",
          "text": "Simsiz Bluetooth quloqchin",
          "slot": "MAHSULOT"
        },
        {
          "id": "t3",
          "text": "60 belgi SEO sarlavha + Teglar",
          "slot": "SEO_TALAB"
        },
        {
          "id": "t4",
          "text": "Qog'oz varaqasi",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "📦 **Uzum Market SEO Mahsulot Kartochkasi:**\n\n• **SEO Sarlavha (Qidiruvbop):**\nSimsiz quloqchinlar Bluetooth 5.3, shovqinni bekor qiluvchi, mikrofonli pods\n\n• **5 ta Asosiy Afzallik (Bullet-points):**\n1. 🔋 **24 soat avtonom ishlash:** Keysi bilan birga bir haftalik zaryad.\n2. 🎧 **Kristaldek tiniq ovoz:** Chuqur Bass va suhbat uchun shovqin tozalagich.\n3. 💧 **IPX5 suvga chidamlilik:** Sport va yomg'irli ob-havo uchun xavfsiz.\n4. ⚡ **Tezkor ulanish:** Qopqog'ini ochishingiz bilan iPhone va Android'ga ulanadi.\n5. 🎁 **Komplektda:** Type-C kabel va 3 xil o'lchamdagi silikon embushurlar.\n\n• **15 ta Qidiruv Teglari:**\nquloqchin, besprovodnoy naushnik, bluetooth, pods, simsiz, bass, sport, mikrofon, android, iphone, uzum, sifatli, arzon, audio, musiqa."
  },
  {
    "id": 12,
    "num": "6.1",
    "title": "Katta Imtihonga Tayyorgarlik: Barcha qoidalarni tizimlashtirish",
    "duration": "10-12 daq",
    "category": "Master",
    "summary": "1-5 bosqichlarda o'rganilgan barcha prompt qoidalarini mustahkamlash va sinov testi.",
    "takeaway": "Asosiy 3 ta ustunni unutmang: Aniq Rol, Boy Kontekst va Chegaralangan Format — bu sizning eng kuchli qurolingiz!",
    "concept": "### 🎓 GPTify Master Kursi Xulosasi\nSiz sun'iy intellektni oddiy o'yinchog'i sifatida emas, balki biznesingiz va karyerangizni 10 barobar tezlashtiruvchi strategik qurol sifatida ishlatishni o'rgandingiz.\n\nEsda tuting:\n- AI hech qachon charchamaydi va dam olmaydi.\n- Har qanday noaniq vazifani unga bera olasiz.\n- Birinchi javob xom bo'lsa, 'Yana chuqurroq yoz', 'Raqamlar bilan asosla' deb talab qilish sizning haqqingizdir.",
    "workflow": "1. **Darslarni qayta ko'ring:** Tushunarsiz qolgan joylarni qayta o'qing.\n2. **Trenajyorda mashq qiling:** 10 ta biletni ishlab, xatolaringizni tahlil qiling.\n3. **Rasmiy imtihonga kiring:** 80% to'plang va rasmiy diplomni qo'lga kiriting!",
    "caseStudy": "🏢 **GPTify Bitiruvchisi (Tadbirkor):**\n• **Boshlang'ich holat:** ChatGPT dan faqat oddiy xat yozishda foydalanardi.\n• **Kursdan keyingi holat:** B2B shartnomalar tahlili, Uzum kartochkalari, haftalik SMM va Excel hisobotlarini 90% avtomatlashtirdi.\n• **Natija:** Haftasiga 18 soat qimmatli vaqtini tejab, biznesini kengaytirishga yo'naltirdi!",
    "proTips": "• **Oltin maslahat:** O'rganganlaringizni bugunoq o'z ishingizda sinab ko'ring.\n• **Amaliyot:** Haftada kamida 3 marta Prompt Lab'dagi yangi promptlarni qo'llang.",
    "bad_prompt": "Imtihon qanday bo'ladi?",
    "good_prompt": "GPTify AI Kursining barcha 5 ta asosiy qoidasini (Rol, Kontekst, Format, Feynman texnikasi, XYZ rezyume) ixcham cheklist ko'rinishida jadvalda jamlab ber.",
    "practical_prompt": "Menga AI bilan ishlashning eng muhim 5 ta oltin qoidasini o'z ichiga olgan, ish stolimga qo'yib olishim mumkin bo'lgan ixcham amaliy cheklist tuzib ber.",
    "actionPrompt": "AI bilan professional ishlashning 5 ta oltin qoidasini ixcham jadvalda ber.",
    "legoPuzzle": {
      "slots": [
        "ASOS",
        "METOD",
        "MAQSAD"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "Rol + Kontekst + Format",
          "slot": "ASOS"
        },
        {
          "id": "t2",
          "text": "Feynman va XYZ usullari",
          "slot": "METOD"
        },
        {
          "id": "t3",
          "text": "Imtihondan 80% to'plab diplom olish",
          "slot": "MAQSAD"
        },
        {
          "id": "t4",
          "text": "Eskicha ishlash",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "📋 **GPTify AI Masterlik Cheklisti:**\n\n1. ✅ **Rol ber:** Har doim AIni o'sha sohaning 10 yillik tajribali mutaxassisi roliga kiriting.\n2. ✅ **Kontekst kirit:** Byudjet, shahar, muddat va maqsadli auditoriyani aniq yozing.\n3. ✅ **Formatni chekla:** Jadval, punktlar yoki 50 so'zdan oshmaydigan matn shaklini talab qiling.\n4. ✅ **Feynman usuli:** Qiyin tushunchalarni 10 yoshli bolaga tushuntirgandek soddalashtiring.\n5. ✅ **XYZ formulasi:** Rezyume va yutuqlaringizni raqamlar bilan o'lchanadigan qiling."
  },
  {
    "id": 13,
    "num": "6.2",
    "title": "Kompaniyada AI joriy etish: Xodimlar va jarayonlarni avtomatlashtirish",
    "duration": "12-15 daq",
    "category": "Master",
    "summary": "Kichik va o'rta biznesda AI vositalarini xavfsiz, xodimlarga o'rgatgan holda joriy qilish yo'l xaritasi.",
    "takeaway": "Kompaniyada AIni birdaniga hamma joyga emas — eng ko'p vaqt yeydigan 1 ta oddiy jarayondan boshlab joriy qiling.",
    "concept": "### 🏢 Korxonalarda AI Transformatsiyasi\nKo'pchilik rahbarlar sun'iy intellektni joriy qilmoqchi bo'lib, darhol million dollarlik qimmat tizimlarni sotib olishga shoshilishadi va muvaffaqiyatsizlikka uchraydi.\n\nTo'g'ri strategiya — **'Pastda osilib turgan mevalar' (Low-hanging fruits)** usulidir:\nKompaniyangizda eng ko'p vaqt va asab oladigan 1 ta jarayonni toping (masalan: mijozlarning bir xil savollariga javob berish yoki Excelda hisobot jamlash).\nO'sha 1 ta jarayonga AIni muvaffaqiyatli bog'lang — natijani ko'rgan xodimlar AIdan qo'rqishni to'xtatadi va uni sevadigan bo'ladi!",
    "workflow": "1. **Audit qiling:** Xodimlaringiz qaysi ishga eng ko'p vaqt sarflayapti?\n2. **Pilot loyiha:** Faqat 1 ta bo'limda (masalan, savdo yoki HR) AIni 2 hafta sinang.\n3. **Standartlashtiring:** Muvaffaqiyatli promptlarni korporativ Prompt Bankiga saqlang.",
    "caseStudy": "🏢 **Toshkentdagi Ulgurji Savdo Firmasi:**\n• **❌ Muammo:** 6 nafar operator har kuni mijozlarga narxlar va qoldiqlar bo'yicha javob berishdan charchagan edi.\n• **💡 Yechim:** 1 ta Telegram bot va ChatGPT orqali avtomatik javob tizimi ishga tushirildi.\n• **📈 Natija:** Operatorlarning 60% vaqti bo'shadi va ular yangi mijozlarni faol qidirishga o'tdi, oylik tushum 40% ga oshdi!",
    "proTips": "• **Xavfsizlik:** Xodimlarga mijozlarning maxfiy pasport yoki karta ma'lumotlarini ochiq AIga kiritmaslikni qat'iy qoida qiling.\n• **Tavsiya:** Har haftada eng yaxshi prompt yozgan xodimga kichik bonus bering.",
    "bad_prompt": "Biznesga AIni qanday qo'yaman?",
    "good_prompt": "Sen kompaniyalarga AI integratsiya qiluvchi bosh maslahatchisan. 20 kishilik savdo korxonasida 30 kun ichida AIni bosqichma-bosqich joriy qilish bo'yicha 4 haftalik xavfsiz yo'l xaritasini tuz.",
    "practical_prompt": "Mening kompaniyamda [Xodimlar soni] nafar xodim ishlaydi, sohamiz [Sohangiz]. Biznesimizda xodimlar vaqtini tejash uchun 30 kunlik AI joriy qilish rejasini tuzib ber.",
    "actionPrompt": "20 kishilik kompaniya uchun 4 haftalik AI joriy qilish yo'l xaritasini tuzib ber.",
    "legoPuzzle": {
      "slots": [
        "BOSQICH",
        "JARAYON",
        "XAVFSIZLIK"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "4 haftalik pilot loyiha",
          "slot": "BOSQICH"
        },
        {
          "id": "t2",
          "text": "Savdo va mijozlar servisi",
          "slot": "JARAYON"
        },
        {
          "id": "t3",
          "text": "Maxfiy ma'lumotlar himoyasi",
          "slot": "XAVFSIZLIK"
        },
        {
          "id": "t4",
          "text": "Barcha xodimlarni bo'shatish",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "🚀 **Kompaniyada AIni 30 Kunda Joriy Qilish Rejasi:**\n\n• **1-Hafta (Audit va Tayyorgarlik):**\nXodimlarning eng ko'p vaqtini oluvchi 3 ta mexanik jarayonni aniqlash. Ichki AI xavfsizlik qoidalarini (NDA) tasdiqlash.\n\n• **2-Hafta (Pilot guruh):**\nSavdo bo'limidagi 3 nafar xodimni tayyor promptlar bazasi bilan qurollantirish va Telegram mijozlari bilan sinash.\n\n• **3-Hafta (Natijalarni o'lchash):**\nTejalgan vaqt va mijozlar qoniqishini tahlil qilish. Xatolarni tuzatish.\n\n• **4-Hafta (Kompaniya bo'ylab kengaytirish):**\nBarcha bo'limlar uchun yagona korporativ 'GPTify Prompt Banki'ni joriy etish va umumiy seminar o'tkazish."
  },
  {
    "id": 14,
    "num": "6.3",
    "title": "30 Kunlik Odat: AI bilan har kuni 1 soat vaqtingizni tejash",
    "duration": "10-12 daq",
    "category": "Master",
    "summary": "AI bilan ishlashni tish yuvishdek tabiiy kundalik odatga aylantirish va doimiy unumdorlik siri.",
    "takeaway": "Eng yaxshi AI vositasi — har kuni ishlatadigan vositangizdir. Har tong vazifalaringizni AI bilan rejalashtiring!",
    "concept": "### ⚡ Odat Kuchaytiruvchisi (Habit Stacking)\nYangi bilimlarni o'rgangandan so'ng eng katta xavf — 3 kundan keyin eski usulda ishlashga qaytib ketishdir.\nBuning oldini olish uchun 'Odatlar bog'liqligi' qoidasini qo'llang:\nHar kuni ertalab kompyuterni yoqqaningizda yoki Telegramni ochganingizda, birinchi bo'lib ChatGPT ni oching va bugungi 3 ta eng qiyin vazifangizni unga ayting:\n*'Bugun mana bu xatni yozishim, bu hisobotni tuzishim kerak. Keling, birgalikda 10 daqiqada tugatamiz.'*",
    "workflow": "1. **Ertalabki 5 daqiqa:** Kunlik rejangizni AI bilan birgalikda Timeboxing qiling.\n2. **Qiyin vazifalarni bo'ling:** Katta ishlarni AIdan 3 ta kichik qismga bo'lib berishini so'rang.\n3. **Kechki xulosa:** Bugun AIdan qancha vaqt yutganingizni baholang.",
    "caseStudy": "🏢 **Boshqaruvchi Direktor:**\n• **Eski odat:** Har kuni tongda 50 ta elektron xatni o'qib javob yozishga 2 soat sarflardi, charchab qolardi.\n• **Yangi AI odati:** Xatlarni AIga tashlab, faqat eng muhim 5 tasiga qisqa tezislar bilan javob yozdiradigan bo'ldi.\n• **Natija:** Kunlik 1.5 soat vaqt tejab, uni strategik uchrashuvlarga bag'ishladi!",
    "proTips": "• **Oltin qoida:** Har qanday qiyin yoki zerikarli ish oldidan o'zingizga savol bering: 'Buni AI qanday tezlashtirishi mumkin?'.\n• **Tabriklaymiz:** Siz butun kursni yakunladingiz! Endi imtihondan o'tib, rasmiy diplomni qo'lga kiriting!",
    "bad_prompt": "Qanday odat qilaman?",
    "good_prompt": "Men kunlik ishimda AIdan doimiy foydalanuvchi yuqori unumdor mutaxassisga aylanmoqchiman. Menga 30 kunlik 'AI Odat Trekeri' rejasini haftalar kesimida tuzib ber.",
    "practical_prompt": "Mening kasbim: [Kasbingiz]. Har kuni AI yordamida 1 soat vaqtimni tejashim uchun 30 kunlik bosqichma-bosqich amaliy odat shakllantirish rejasini tuzib ber.",
    "actionPrompt": "AI bilan har kuni 1 soat vaqtni tejovchi 30 kunlik amaliy odat rejasini ber.",
    "legoPuzzle": {
      "slots": [
        "MUDDAT",
        "MAQSAD",
        "NATIJA"
      ],
      "tokens": [
        {
          "id": "t1",
          "text": "30 kunlik amaliyot",
          "slot": "MUDDAT"
        },
        {
          "id": "t2",
          "text": "Kunlik 1 soat vaqt tejash",
          "slot": "MAQSAD"
        },
        {
          "id": "t3",
          "text": "Rasmiy diplom va yangi unumdorlik",
          "slot": "NATIJA"
        },
        {
          "id": "t4",
          "text": "Ertaga qoldirish",
          "slot": "DISTRACTOR"
        }
      ]
    },
    "simulatedAiResponse": "🎉 **30 Kunlik Shaxsiy AI Odat Tracker (GPTify Habit System):**\n\n• **1-Hafta:** Kunlik xatlar va Telegram xabarlarni ChatGPT orqali 3 barobar tezroq yozish.\n• **2-Hafta:** Exceldagi barcha qiyin formulalarni AIdan so'rab 1 daqiqada olish.\n• **3-Hafta:** B2B mijozlar e'tirozlariga tayyor savdo skriptlarini qo'llash.\n• **4-Hafta:** Katta shartnomalarni 10 soniyada xatarlarga tekshirish.\n\n🏆 Siz **AI Master** darajasiga yetdingiz! Rasmiy diplomga loyiqsiz!"
  }
],

  // 4. Prompt Lab uchun 115+ ta tayyor professional promptlar (9 ta toifa)
  promptLab: [
  {
    "id": "p_sales_1",
    "title": "B2B Savdo: 'Qimmat' E'tirozini Yopish",
    "category": "sales",
    "prompt": "Sen Toshkentdagi B2B xizmatlar bo'yicha eng tajribali savdo direktorsan. Mijoz bizning taklifimizga 'Sizlarning xizmatingiz bizga juda qimmatlik qiladi' deb javob berdi. Ushbu e'tirozni: 1) Mijozni tushunish va qadriyat ko'rsatish; 2) Xarajat emas, 3 oyda o'zini oqlovchi investitsiya ekanligini hisoblab berish; 3) Yumshoq ochiq savol bilan keyingi bosqichga o'tish usulida 3 xil variantda yozib ber.",
    "tags": [
      "B2B",
      "Savdo",
      "E'tiroz"
    ]
  },
  {
    "id": "p_sales_2",
    "title": "Mijozdan Tavsiya (Referral) So'rash Skripti",
    "category": "sales",
    "prompt": "Biz [Mahsulot yoki Xizmat]ni mijozga muvaffaqiyatli yetkazib berdik va mijoz mamnun. Undan o'zining tadbirkor do'stlariga bizni tavsiya qilishini so'rovchi, mutlaqo tabiiy, qistovsiz va hurmatli Telegram audio/matn skriptini tuzib ber.",
    "tags": [
      "Savdo",
      "Referral",
      "Mijoz"
    ]
  },
  {
    "id": "p_sales_3",
    "title": "Sovuq Qo'ng'iroq (Cold Call) 30 Soniyalik Hook",
    "category": "sales",
    "prompt": "Soha: [Sizning sohangiz, masalan: Ombor hisobi dasturi]. Men kompaniya rahbariga birinchi marta qo'ng'iroq qilyapman. Telefonni ko'targan birinchi 30 soniyada uning diqqatini tortuvchi, 'Bizga hech narsa kerak emas' deyishiga yo'l qo'ymaydigan 3 ta kuchli ssenariy yozib ber.",
    "tags": [
      "ColdCall",
      "Savdo",
      "Skript"
    ]
  },
  {
    "id": "p_sales_4",
    "title": "Yo'qolib Qolgan Mijozni Qaytarish (Follow-up)",
    "category": "sales",
    "prompt": "Mijoz 1 hafta oldin tijoriy taklifimizni olgan, ammo 'O'ylab ko'ramiz' deb g'oyib bo'lgan. Unga o'zini aybdor his qildirmaydigan, qadriyatli yangilik yoki foydali ma'lumot bahonasida eslatuvchi 3 bosqichli Telegram xabarlar zanjirini tuz.",
    "tags": [
      "FollowUp",
      "Savdo",
      "Telegram"
    ]
  },
  {
    "id": "p_sales_5",
    "title": "Chegirma So'ragan Mijozga Qadriyat Ko'rsatish",
    "category": "sales",
    "prompt": "Mijoz xizmatimizga 30% chegirma so'ramoqda. Narxni tushirmasdan, unga qo'shimcha bonuslar yoki xizmat paketi orqali to'liq narxda sotishga undovchi muzokara skriptini yoz.",
    "tags": [
      "Muzokara",
      "Chegirma",
      "Savdo"
    ]
  },
  {
    "id": "p_sales_6",
    "title": "B2B Tijoriy Taklif (Commercial Proposal) Tuzish",
    "category": "sales",
    "prompt": "Kompaniyamiz: [Biznes nomi va xizmati]. Mijoz: [Mijoz kompaniyasi]. 1 sahifalik ixcham, 'Muammo — Yechim — Kutilayotgan ROI (daromad) — Narx — Keyingi qadam' tuzilishiga ega professional tijoriy taklif matnini tayyorlab ber.",
    "tags": [
      "Taklif",
      "B2B",
      "Hujjat"
    ]
  },
  {
    "id": "p_sales_7",
    "title": "Mijoz bilan Birinchi Uchrashuv Rejasi (Discovery Call)",
    "category": "sales",
    "prompt": "Potensial B2B mijoz bilan birinchi 20 daqiqalik onlayn uchrashuv o'tkazmoqchiman. Uning haqiqiy 'og'riqli nuqtalari'ni (pain points) va byudjetini aniqlashga yordam beruvchi 7 ta strategik savol ro'yxatini tuz.",
    "tags": [
      "Uchrashuv",
      "Savdo",
      "Strategiya"
    ]
  },
  {
    "id": "p_sales_8",
    "title": "Xizmat Narxini Oshirish Haqida Hurmatli Xat",
    "category": "sales",
    "prompt": "Biz uzoq yillik mijozlarimiz uchun xizmat narxini kelasi oydan 15% ga oshiryapmiz. Ularni ranjitmasdan, xizmat sifati qanday yaxshilangani va bozor holatini tushuntiruvchi muloyim, tushunarli rasmiy xat yozib ber.",
    "tags": [
      "Mijoz",
      "Xat",
      "Boshqaruv"
    ]
  },
  {
    "id": "p_sales_9",
    "title": "Mijozga Cross-sell & Up-sell Taklif Qilish",
    "category": "sales",
    "prompt": "Mijoz bizdan [Asosiy tovar/xizmat] sotib oldi. Unga qo'shimcha ravishda [Qo'shimcha mahsulot]ni taklif qilib, xarid chekini 25% ga oshiruvchi tabiiy tavsiya xabarini yozib ber.",
    "tags": [
      "Upsell",
      "Savdo",
      "Chek"
    ]
  },
  {
    "id": "p_sales_10",
    "title": "Raqobatchidan Bizga O'tishni Taklif Qilish",
    "category": "sales",
    "prompt": "Mijoz hozirda bizning to'g'ridan-to'g'ri raqobatchimiz xizmatidan foydalanadi va ba'zi kamchiliklardan norozi. Raqobatchini yomonlamasdan, bizning ustunliklarimizni va xavfsiz o'tish (migratsiya) kafolatini ko'rsatuvchi taklif tayyorla.",
    "tags": [
      "Raqobat",
      "B2B",
      "Savdo"
    ]
  },
  {
    "id": "p_sales_11",
    "title": "Shoshilinchlik (Urgency) Hissini Yaratish",
    "category": "sales",
    "prompt": "Mijoz qaror qabul qilishni doim keyinga surmoqda. Sun'iy bosimsiz, lekin real muddat (masalan, narx oshishi yoki joylar soni cheklangani) orqali bugun qaror qabul qilishga undovchi 3 ta samarali xabar yoz.",
    "tags": [
      "Urgency",
      "Savdo",
      "Mijoz"
    ]
  },
  {
    "id": "p_sales_12",
    "title": "Katta Korporativ Tender Hujjati Uchun Muqaddima",
    "category": "sales",
    "prompt": "Davlat yoki yirik korporativ tenderda qatnashyapmiz. Bizning kompaniya nima uchun eng ishonchli ijrochi ekanligini 3 ta aniq fakt, tajriba va xatarlarni nolga tushirish kafolatlari bilan asoslab beruvchi tender muqaddima xatini yoz.",
    "tags": [
      "Tender",
      "B2B",
      "Korporativ"
    ]
  },
  {
    "id": "p_sales_13",
    "title": "VIP Mijozlarga Yopiq Taklif Xati",
    "category": "sales",
    "prompt": "Eng sodiq 20 ta top mijozimiz uchun yangi eksklyuziv xizmat turini faqat ularga maxsus shartlar bilan birinchi bo'lib taqdim etuvchi shaxsiy, yuqori maqomli xabar matnini tuz.",
    "tags": [
      "VIP",
      "Sodiqlik",
      "Eksklyuziv"
    ]
  },
  {
    "id": "p_sales_14",
    "title": "Qarzdorlikni Yumshoq Undirish Xati",
    "category": "sales",
    "prompt": "Mijozning hisob-faktura bo'yicha to'lov muddati 10 kunga o'tib ketdi. Do'stona aloqalarni buzmasdan, lekin to'lovni zudlik bilan amalga oshirish zarurligini qat'iy bildiruvchi 2 bosqichli xat yoz.",
    "tags": [
      "Qarz",
      "Moliya",
      "Xat"
    ]
  },
  {
    "id": "p_sales_15",
    "title": "Telegram Direct Orqali B2B Sotish Skripti",
    "category": "sales",
    "prompt": "O'zbekiston bozorida tadbirkorlar va rahbarlarning shaxsiy Telegramiga yozishda ularning vaqtini hurmat qiladigan, spamdek ko'rinmaydigan va birinchi savolda qiziqish uyg'otuvchi 4 bosqichli DM savdo voronkasi yozib ber.",
    "tags": [
      "Telegram",
      "DM",
      "Voronka"
    ]
  },
  {
    "id": "p_smm_1",
    "title": "Instagram Carousel & SMM Post",
    "category": "smm",
    "prompt": "Mavzu: [Mavzuni yozing]. 7 slayddan iborat interaktiv Instagram karusel ssenariysini yoz: 1-slayd diqqatni tortuvchi sarlavha (Hook), 2-5 slaydlar amaliy keyslar va qoidalar, 6-slayd asosiy xulosa, 7-slayd harakatga chaqiruv (CTA va saqlab olishga undash).",
    "tags": [
      "Instagram",
      "Carousel",
      "SMM"
    ]
  },
  {
    "id": "p_smm_2",
    "title": "3 Soniyalik Diqqatni Tortuvchi Sarlavhalar (Hooks)",
    "category": "smm",
    "prompt": "Mening soham: [Sohangiz]. Instagram Reels va TikTok videolarimning birinchi 3 soniyasida tomoshabinni to'xtatib qoluvchi 10 ta psixologik 'Hook' sarlavha variantini yozib ber (Qiziqish, xavf, raqamlar va kutilmagan faktlar asosida).",
    "tags": [
      "Hooks",
      "Reels",
      "Viral"
    ]
  },
  {
    "id": "p_smm_3",
    "title": "Instagram Reels 60 Soniyalik Viral Ssenariy",
    "category": "smm",
    "prompt": "Mavzu: [Mavzuingiz]. 60 soniyalik Reels uchun kadrlar rejasi (Storyboarding) bilan to'liq ssenariy yoz: Har bir soniya (0-3s, 3-15s, 15-45s, 45-60s) uchun vizual harakat, ekrandagi matn va gapiriladigan nutqni jadvalda ko'rsat.",
    "tags": [
      "Reels",
      "Video",
      "Ssenariy"
    ]
  },
  {
    "id": "p_smm_4",
    "title": "Telegram Kanal Uchun Ekspert Tahlil Posti",
    "category": "smm",
    "prompt": "Sohamizdagi so'nggi yangilik: [Yangilik yoki voqea]. Ushbu voqeaning oddiy o'quvchi yoki tadbirkor cho'ntagiga qanday ta'sir qilishini tushuntiruvchi, professional tahliliy, qisqa abzaslar va chiroyli emojilar bilan Telegram posti yoz.",
    "tags": [
      "Telegram",
      "Ekspert",
      "Tahlil"
    ]
  },
  {
    "id": "p_smm_5",
    "title": "Salbiy Izohlarni Xushmuomala Yopish",
    "category": "smm",
    "prompt": "Instagram postimiz ostida mijoz juda g'azablangan salbiy izoh qoldirdi: '[Izoh matni]'. Do'konimiz obro'sini oshiradigan, boshqa o'quvchilarda bizga nisbatan hurmat uyg'otadigan va mijoz bilan muammoni shaxsiyga o'tkazuvchi javob yoz.",
    "tags": [
      "Krizis",
      "SMM",
      "Izohlar"
    ]
  },
  {
    "id": "p_smm_6",
    "title": "Mijozlar Fikridan Keys-Post Yaratish",
    "category": "smm",
    "prompt": "Mijozimiz bizning xizmatimizdan so'ng erishgan natijasi: [Natija, masalan: 1 oyda savdosini 40% ga oshirdi]. Ushbu haqiqiy keysni 'Hikoya (Storytelling)' usulida qiziqarli o'qiladigan va yangi mijozlarni o'ziga tortadigan postga aylantir.",
    "tags": [
      "Keys",
      "Storytelling",
      "Post"
    ]
  },
  {
    "id": "p_smm_7",
    "title": "Yangi Mahsulot Ochilish (Launch) Kampaniyasi",
    "category": "smm",
    "prompt": "Biz yangi mahsulot chiqaryapmiz: [Mahsulot tavsifi]. 5 kunlik 'Isitish' (Pre-launch hype) kampaniyasi rejasini tuz: 1-kun intriga, 2-kun muammoni ko'rsatish, 3-kun parda orti, 4-kun maxsus taklif, 5-kun rasmiy start.",
    "tags": [
      "Launch",
      "Kampaniya",
      "Marketing"
    ]
  },
  {
    "id": "p_smm_8",
    "title": "Qiziqarli Interaktiv O'yin / So'rovnoma Posti",
    "category": "smm",
    "prompt": "Telegram kanalimizda o'quvchilar faolligini (engagement) 3 barobar oshirish uchun sohamizga mos [Soha] qiziqarli test, mantiqiy topishmoq yoki bahsli savol shaklidagi interaktiv post tayyorla.",
    "tags": [
      "Interaktiv",
      "Faollik",
      "Telegram"
    ]
  },
  {
    "id": "p_smm_9",
    "title": "Bayram Chegirmasi Uchun Emotsional Matn",
    "category": "smm",
    "prompt": "Yaqinlashib kelayotgan [Bayram nomi] munosabati bilan mijozlarimizga samimiy tabrik va bir vaqtning o'zida maxsus bayramona chegirma taklifini taqdim etuvchi iliq, sotuvga yo'naltirilgan matn yoz.",
    "tags": [
      "Bayram",
      "Chegirma",
      "SMM"
    ]
  },
  {
    "id": "p_smm_10",
    "title": "FAQ (Ko'p Beriladigan Savollar) Karuseli",
    "category": "smm",
    "prompt": "Bizning xizmatimiz bo'yicha mijozlar eng ko'p so'raydigan 5 ta savol: [Savollar]. Har biriga 2 jumlada aniq, xushmuomala javob berilgan va e'tirozlarni yo'qotuvchi Instagram posti tuz.",
    "tags": [
      "FAQ",
      "SMM",
      "Savollar"
    ]
  },
  {
    "id": "p_smm_11",
    "title": "Sahna Orti (Backstage) Ish Jarayoni Posti",
    "category": "smm",
    "prompt": "Kompaniyamizda mahsulot qanday tayyorlanishi yoki jamoamiz qanday ishlashi haqida samimiy 'Sahna orti' posti matnini yoz. Maqsad: Brendga nisbatan shaffoflik va insoniy ishonchni oshirish.",
    "tags": [
      "Backstage",
      "Brend",
      "Ishonch"
    ]
  },
  {
    "id": "p_smm_12",
    "title": "Soha Afsonalari va Haqiqatlari (Myth vs Fact)",
    "category": "smm",
    "prompt": "Mening soham: [Sohangiz]. Odamlar orasida ushbu soha haqida keng tarqalgan 3 ta noto'g'ri afsonani fosh qiluvchi va haqiqiy faktlarni ko'rsatuvchi virusli 'Afsona vs Haqiqat' posti tuz.",
    "tags": [
      "Mif",
      "Haqiqat",
      "Ekspert"
    ]
  },
  {
    "id": "p_smm_13",
    "title": "Foydali Cheklist Posti (Saqlab Olishga Undovchi)",
    "category": "smm",
    "prompt": "Mavzu: [Mavzu, masalan: Sayohatga chiqishdan oldin tekshirish kerak bo'lgan 10 narsa]. O'quvchi albatta 'Saqlab oling' tugmasini bosishi uchun juda amaliy, ixcham 7 bandli cheklist postini tayyorla.",
    "tags": [
      "Cheklist",
      "Saqlash",
      "SMM"
    ]
  },
  {
    "id": "p_smm_14",
    "title": "Mahsulotni Solishtirish (Biz vs Bozor)",
    "category": "smm",
    "prompt": "Bizning mahsulotimiz bilan bozordagi arzon/sifatsiz analoglar o'rtasidagi 4 ta asosiy farqni (xomashyo, xizmat muddati, servis, kafolat) ko'rsatuvchi xolis va ishonarli taqqoslash jadvali tuz.",
    "tags": [
      "Taqqoslash",
      "Sifat",
      "Savdo"
    ]
  },
  {
    "id": "p_smm_15",
    "title": "Harakatga Chaqiruvchi (CTA) 10 Xil Variant",
    "category": "smm",
    "prompt": "Oddiy 'Bog'laning' yoki 'Sotib oling' degan zerikarli iboralar o'rniga, post yakunida izoh qoldirishga, profil havolasiga o'tishga va Directga yozishga undovchi 10 ta kuchli va original CTA variantlarini ber.",
    "tags": [
      "CTA",
      "Konversiya",
      "SMM"
    ]
  },
  {
    "id": "p_office_1",
    "title": "3 Soatlik Yig'ilish Bayonnomasi (Meeting Minutes)",
    "category": "office",
    "prompt": "Quyida jamoaviy yig'ilishdagi gaplashilgan tartibsiz gaplar keltirilgan: [Yig'ilish yozuvlari]. Buni professional formatga o'tkaz: 1) Qabul qilingan asosiy qarorlar; 2) Kimga qanday vazifa yuklatildi (Mas'ul shaxs va muddat); 3) Keyingi uchrashuv mavzusi.",
    "tags": [
      "Yig'ilish",
      "Bayonnoma",
      "Ofis"
    ]
  },
  {
    "id": "p_office_2",
    "title": "Excel SUMIFS va Shartli Jamlash Formulalari",
    "category": "office",
    "prompt": "Excel jadvalimda A ustunda Sana, B ustunda Filial, C ustunda Mahsulot turi, D ustunda Savdo summasi joylashgan. Menga faqat 'Chilonzor' filialida sotilgan 'Mebel' mahsulotlarining jami summasini hisoblovchi aniq SUMIFS formulasini va qanday kiritishni tushuntirib ber.",
    "tags": [
      "Excel",
      "Formula",
      "SUMIFS"
    ]
  },
  {
    "id": "p_office_3",
    "title": "Excel XLOOKUP: Yangi Avlod Qidiruv Formulasi",
    "category": "office",
    "prompt": "VLOOKUP formulasidagi xatolardan charchadim. Exceldagi XLOOKUP formulasi qanday ishlashini, chapga va o'ngga qidirish afzalligini va agar topilmasa xato chiqarmaslik parametrini amaliy misol bilan ko'rsat.",
    "tags": [
      "Excel",
      "XLOOKUP",
      "Qidiruv"
    ]
  },
  {
    "id": "p_office_4",
    "title": "Excel Dublikatlarni Topish va Tozalash VBA Makrosi",
    "category": "office",
    "prompt": "Excelda 50,000 qatorli mijozlar bazam bor. Telefon raqamlari bir xil bo'lgan takroriy qatorlarni topib, ularni boshqa varaqqa ajratuvchi va jadvalni tozalovchi sodda VBA kodini yozib ber.",
    "tags": [
      "Excel",
      "VBA",
      "Makros"
    ]
  },
  {
    "id": "p_office_5",
    "title": "Rahbariyatga Oylik Hisobot Xulasasi (Executive Summary)",
    "category": "office",
    "prompt": "Bizning bo'limning oylik ko'rsatkichlari: [Asosiy raqamlar, reja va fakt]. Bosh direktor 2 daqiqada o'qib vaziyatni to'liq tushunishi uchun 1 sahifalik ixcham, raqamlar tahlili, yutuqlar va xatarlar ko'rsatilgan Executive Summary tayyorla.",
    "tags": [
      "Hisobot",
      "Rahbariyat",
      "Xulosa"
    ]
  },
  {
    "id": "p_office_6",
    "title": "Hamkorga Rasmiy Da'vo Xati (Claim Letter)",
    "category": "office",
    "prompt": "Ta'minotchi shartnomada belgilangan tovarlarni 14 kunga kechiktirdi. Unga nisbatan jarima sanksiyalari qo'llanilishidan oldin, rasmiy, qonuniy asoslarga ega, jiddiy va qat'iy talabnoma xatini tuzib ber.",
    "tags": [
      "Da'vo",
      "RasmiyXat",
      "Hamkor"
    ]
  },
  {
    "id": "p_office_7",
    "title": "Ta'tilga Chiqishda Avtomatik Javob (Out-of-office)",
    "category": "office",
    "prompt": "Men [Sanadan — Sanagacha] mehnat ta'tilida bo'laman. Email va Telegram orqali xat yozgan mijoz va hamkorlar uchun professional, xushmuomala va shoshilinch holatlarda kimga murojaat qilish kerakligini ko'rsatuvchi avto-javob yoz.",
    "tags": [
      "Email",
      "Ta'til",
      "Ofis"
    ]
  },
  {
    "id": "p_office_8",
    "title": "Jamoaga Yangi Qoidani E'lon Qilish Xati",
    "category": "office",
    "prompt": "Kompaniyamizda yangi tartib-intizom yoki ish tartibi joriy etilmoqda: [Yangi qoida]. Xodimlarda norozilik uyg'otmasdan, bu qoida butun jamoa qulayligi va xavfsizligi uchun nega muhimligini tushuntiruvchi motivatsion xat yoz.",
    "tags": [
      "Jamoa",
      "Qoida",
      "HR"
    ]
  },
  {
    "id": "p_office_9",
    "title": "10 Sahifalik PDF Hujjatni 1 Sahifaga Qisqartirish",
    "category": "office",
    "prompt": "Quyidagi matnni (yoki yuklangan hujjatni) tahlil qilib, suvi va rasmiyatchiligini olib tashla. Faqat eng muhim 5 ta fakt, 3 ta xavf va 1 ta asosiy xulosani bullet-point shaklida chiqar.",
    "tags": [
      "Qisqartirish",
      "PDF",
      "Tahlil"
    ]
  },
  {
    "id": "p_office_10",
    "title": "Korporativ Taqdimot (Pitch Deck) Slayd Rejasi",
    "category": "office",
    "prompt": "Mavzu: [Taqdimot mavzusi]. 10 ta slayddan iborat korporativ taqdimot arxitekturasini tuz: Har bir slayd uchun aniq sarlavha, vizual g'oya (grafik/rasm) va ekranda yozilishi kerak bo'lgan 2 tadan asosiy tezisni yoz.",
    "tags": [
      "Taqdimot",
      "PowerPoint",
      "Slayd"
    ]
  },
  {
    "id": "p_office_11",
    "title": "Loyiha Muddatlari Kechikishini Tushuntirish Xati",
    "category": "office",
    "prompt": "Texnik yoki tashqi sabablarga ko'ra loyiha muddati 10 kunga kechikmoqda. Buyurtmachiga bahona qidirmasdan, muammoni qanday hal qilayotganimizni va yakuniy sifatni kafolatlovchi halol va ishonchli tushuntirish xati tayyorla.",
    "tags": [
      "Loyiha",
      "Mijoz",
      "Kechikish"
    ]
  },
  {
    "id": "p_office_12",
    "title": "Ta'minotchidan Qarzni Qaytarishni Talab Qilish",
    "category": "office",
    "prompt": "Oldindan to'lov qilingan, lekin mahsulot yetkazib berilmagan ta'minotchiga nisbatan pulni 3 bank ish kuni ichida qaytarishni qat'iy talab qiluvchi rasmiy yuridik ogohlantirish xati yozib ber.",
    "tags": [
      "Qarz",
      "Moliya",
      "Talabnoma"
    ]
  },
  {
    "id": "p_office_13",
    "title": "Xodimni Mukofotlash Taqdimnomasi",
    "category": "office",
    "prompt": "Bo'limimizdagi fidoyi xodim [Xodim ismi] o'tgan chorakda favqulodda ajoyib natija ko'rsatdi: [Natija]. Bosh direktorga uni pul mukofoti yoki lavozimini ko'tarish haqida asosli va qonuniy taqdimnoma (memorandum) yozib ber.",
    "tags": [
      "Mukofot",
      "HR",
      "Rag'bat"
    ]
  },
  {
    "id": "p_office_14",
    "title": "Yangi Xodim Uchun 1 Haftalik Onboarding Yo'riqnomasi",
    "category": "office",
    "prompt": "Lavozim: [Lavozim nomi, masalan: Savdo menejeri]. Birinchi haftada xodim kompaniyaga tezda moslashishi, asosiy dasturlarni o'rganishi va stressga tushmasligi uchun 5 kunlik aniq soatlar kesimidagi moslashuv rejasini tuz.",
    "tags": [
      "Onboarding",
      "HR",
      "Reja"
    ]
  },
  {
    "id": "p_office_15",
    "title": "Ichki Nizolarni Bartaraf Qilish Bo'yicha Rahbariyat Xati",
    "category": "office",
    "prompt": "Ikkita bo'lim (masalan, Marketing va Savdo) o'rtasida mas'uliyat bo'yicha tushunmovchilik yuzaga keldi. Nizoni bartaraf etish, o'zaro ayblashni to'xtatish va umumiy maqsad sari birlashtirish bo'yicha diplomatik ichki murojaat yoz.",
    "tags": [
      "Nizo",
      "Boshqaruv",
      "Jamoa"
    ]
  },
  {
    "id": "p_ecom_1",
    "title": "Uzum Market SEO Mahsulot Kartochkasi",
    "category": "ecom",
    "prompt": "Mahsulot: [Mahsulot nomi]. Uzum Market qidiruv algoritmlarida top o'ringa chiqish uchun: 1) Aniq SEO sarlavha (kalit so'zlar bilan); 2) 5 ta asosiy xususiyat va foyda (bullet-points); 3) Mahsulot tavsifi; 4) 15 ta ommabop qidiruv teglari ro'yxatini o'zbek tilida tuz.",
    "tags": [
      "Uzum",
      "SEO",
      "Marketplace"
    ]
  },
  {
    "id": "p_ecom_2",
    "title": "Uzum 1-Yulduzli Salbiy Sharhga Diplomatik Javob",
    "category": "ecom",
    "prompt": "Xaridor Uzum Marketda 'Yetkazib berishda qadoq ezilgan, tovar buzuq chiqdi' deb 1 yulduz qo'ydi. Boshqa potensial xaridorlar ishonchini mustahkamlaydigan, xaridorga bepul almashtirib berishni taklif qiluvchi yuqori servisli javob yoz.",
    "tags": [
      "Uzum",
      "Sharh",
      "Servis"
    ]
  },
  {
    "id": "p_ecom_3",
    "title": "Uzum Kartochkasi Uchun Infografika Matnlari",
    "category": "ecom",
    "prompt": "Mahsulot: [Mahsulot nomi]. Dizayner uchun 5 ta rasm slaydiga qo'yiladigan matnlar: 1-rasm asosiy ustunlik; 2-rasm o'lchamlar va to'plam; 3-rasm kimlar uchun mos; 4-rasm sifat kafolati; 5-rasm xaridorga minnatdorchilik.",
    "tags": [
      "Infografika",
      "Dizayn",
      "Uzum"
    ]
  },
  {
    "id": "p_ecom_4",
    "title": "Qadoqlash Ichiga Sovg'a Xatchasi (Thank You Card)",
    "category": "ecom",
    "prompt": "Har bir buyurtma qutisiga solinadigan kichik minnatdorchilik xatchasi matnini tuz. Unda xaridorga samimiy rahmat aytilsin, 5 yulduzli sharh qoldirish iltimos qilinsin va keyingi xarid uchun 10% chegirma promokodi berilsin.",
    "tags": [
      "Qadoq",
      "Bonus",
      "Uzum"
    ]
  },
  {
    "id": "p_ecom_5",
    "title": "Yangi Tovarni Test Qilish Uchun Bozor Tahlili",
    "category": "ecom",
    "prompt": "Men O'zbekistonga Xitoydan [Tovar nomi] olib kirib Uzum Marketda sotmoqchiman. Ushbu tovarning mavsumiyligi, maqsadli auditoriyasi, taxminiy marjasi va ehtimoliy xatarlarini tahlil qilib ber.",
    "tags": [
      "Tahlil",
      "Xitoy",
      "Import"
    ]
  },
  {
    "id": "p_ecom_6",
    "title": "Mijozni Qayta Xarid Qilishga Undash (SMS/Telegram)",
    "category": "ecom",
    "prompt": "Bizdan 30 kun oldin xarid qilgan mijozlarga yangi kolleksiya yoki mos keluvchi aksessuarlarni taklif qiluvchi, qisqa va qiziqarli 160 belgili SMS / Telegram xabari tuz.",
    "tags": [
      "SMS",
      "Mijoz",
      "E-Commerce"
    ]
  },
  {
    "id": "p_ecom_7",
    "title": "Nasiya Savdo (Muddatli To'lov) Afzalligini Tushuntirish",
    "category": "ecom",
    "prompt": "Qimmat mahsulotimizni naqdga olishga ikkilanayotgan mijozga Uzum Nasiya yoki boshqa bo'lib to'lash tizimi orqali kuniga bor-yo'g'i [Summa] so'm to'lab xarid qilish mumkinligini psixologik jihatdan qulay tushuntir.",
    "tags": [
      "Nasiya",
      "Savdo",
      "Psixologiya"
    ]
  },
  {
    "id": "p_ecom_8",
    "title": "Bozor Narxlarini Tahlil Qilish Strategiyasi",
    "category": "ecom",
    "prompt": "Raqobatchilar narxlar urushi (dumping) boshlaganda o'z narximizni tushirmasdan, qanday qilib qo'shimcha qiymat (to'plam, tez yetkazish, kafolat) evaziga savdo hajmini saqlab qolish strategiyasini tuz.",
    "tags": [
      "Narx",
      "Dumping",
      "Strategiya"
    ]
  },
  {
    "id": "p_ecom_9",
    "title": "Qaytarilgan Tovarlar (Returns) Foizini Kamaytirish",
    "category": "ecom",
    "prompt": "Kiyim yoki poyabzal savdosida o'lcham to'g'ri kelmasligi sababli tovar qaytishi ko'p bo'lmoqda. Mahsulot tavsifida o'lchamni qanday aniq ko'rsatish va qaytishlarni 50% ga kamaytirish bo'yicha yo'riqnoma tuz.",
    "tags": [
      "Vozvrat",
      "O'lcham",
      "Uzum"
    ]
  },
  {
    "id": "p_ecom_10",
    "title": "Yaroqsiz Tovar Bo'yicha Xitoy Zavodiga Da'vo Xati",
    "category": "ecom",
    "prompt": "Xitoylik yetkazib beruvchidan kelgan tovarning 15% qismi yaroqsiz chiqdi. Ingliz va xitoy tillariga tarjima qilish uchun qulay, faktlar va fotosuratlar ilovasi bilan zararni qoplashni talab qiluvchi qat'iy da'vo yoz.",
    "tags": [
      "Xitoy",
      "Brak",
      "Da'vo"
    ]
  },
  {
    "id": "p_ecom_11",
    "title": "Mavsumiy Tovar Qoldiqlarini Tezda Sotish Aksiyasi",
    "category": "ecom",
    "prompt": "Omborimizda [Mavsumiy tovar] qoldiqlari qolib ketmoqda. Ularni 10 kun ichida foyda bilan yoki zararsiz to'liq naqd pulga aylantirish (likvidatsiya) uchun 3 ta agressiv marketing aksiyasi g'oyasini ber.",
    "tags": [
      "Aksiya",
      "Ombor",
      "Likvidatsiya"
    ]
  },
  {
    "id": "p_ecom_12",
    "title": "Uzum Sharhlar Sonini 5 Barobar Oshirish Tizimi",
    "category": "ecom",
    "prompt": "Yangi do'konda sharhlar kam bo'lsa savdo bo'lmaydi. Qonuniy va marketplace qoidalarini buzmagan holda, har bir xaridordan samimiy rasm va video sharh olish mexanizmini bosqichma-bosqich yozib ber.",
    "tags": [
      "Sharhlar",
      "Uzum",
      "Reyting"
    ]
  },
  {
    "id": "p_legal_1",
    "title": "Didox Shartnoma Audit Tekshiruvi",
    "category": "legal",
    "prompt": "Quyidagi B2B yetkazib berish shartnomasi bandlarini O'zbekiston Fuqarolik Kodeksi talablari bo'yicha tekshir: Har bir banddagi yashirin xatarlarni (yuqori penya, bir tomonlama bekor qilish, noaniq to'lov muddatlari) jadval shaklida chiqar va xavfsiz tahrirni taklif et.",
    "tags": [
      "Didox",
      "Huquq",
      "Audit"
    ]
  },
  {
    "id": "p_legal_2",
    "title": "B2B Shartnomasida Xatarli Penya Bandini Tahrirlash",
    "category": "legal",
    "prompt": "Hamkor taklif qilgan shartnomada 'To'lov kechikkan har bir kun uchun 0.5% penya' yozilgan. O'zbekiston qonunchiligiga ko'ra penyani qonuniy chegaraga (masalan, 0.1% va jami qarzning 10% idan oshmasligi) moslab qayta tahrirlab ber.",
    "tags": [
      "Penya",
      "Shartnoma",
      "Huquq"
    ]
  },
  {
    "id": "p_legal_3",
    "title": "Bino Ijarasi Shartnomasidagi Yashirin Xatarlar",
    "category": "legal",
    "prompt": "Tadbirkor sifatida yangi do'kon/ofis binosini ijaraga olyapman. Ijara shartnomasida ijara beruvchining narxni to'satdan oshirishi, remont xarajatlari va depozitni qaytarish bo'yicha qanday xatarli bandlar bo'lishi mumkin va ularni qanday to'g'rilash kerak?",
    "tags": [
      "Ijara",
      "Ko'chmasMulk",
      "Xatarlar"
    ]
  },
  {
    "id": "p_legal_4",
    "title": "Xodim bilan Maxfiylik Kelishuvi (NDA) Matni",
    "category": "legal",
    "prompt": "Kompaniyamizning tijorat sirlari, mijozlar bazasi va texnologiyalarini himoya qilish uchun O'zbekiston Mehnat kodeksiga mos, qonuniy kuchga ega bo'lgan 2 sahifalik ixcham NDA (Non-Disclosure Agreement) shartnomasi loyihasini tayyorla.",
    "tags": [
      "NDA",
      "Maxfiylik",
      "HR"
    ]
  },
  {
    "id": "p_legal_5",
    "title": "Shartnoma Muddatini Uzaytirish Qo'shimcha Kelishuvi",
    "category": "legal",
    "prompt": "Mavjud shartnoma muddati tugamoqda, lekin hamkorlik davom etadi. Asosiy shartnomaga barcha huquqiy rekvizitlar va aniq o'zgartirishlar ko'rsatilgan rasmiy Qo'shimcha Kelishuv (Dopolnitelnoe soglashenie) loyihasini yoz.",
    "tags": [
      "Kelishuv",
      "Shartnoma",
      "Hujjat"
    ]
  },
  {
    "id": "p_legal_6",
    "title": "Shartnomani Bir Tomonlama Bekor Qilish Xabarnomasi",
    "category": "legal",
    "prompt": "Hamkor o'z majburiyatlarini surunkali bajarmagani sababli shartnomani sudgacha tartibda bir tomonlama bekor qilish haqida rasmiy Bildirishnoma (Uvedomlenie) matnini O'zbekiston qonunlariga havola bilan tayyorla.",
    "tags": [
      "BekorQilish",
      "Huquq",
      "Xabarnoma"
    ]
  },
  {
    "id": "p_legal_7",
    "title": "QQS va Yangi Soliq Imtiyozlarini Tushunish",
    "category": "legal",
    "prompt": "Men aylanmadan olinadigan soliqdan (4%) umumiy soliq tizimiga (QQS 12% va Foyda solig'i) o'tmoqchiman. Ushbu o'tishning biznes kassa oqimiga (Cash Flow) ta'sirini, qanday xarajatlarni hisobga olish (zachyot) mumkinligini oddiy tilda tushuntirib ber.",
    "tags": [
      "Soliq",
      "QQS",
      "Buxgalteriya"
    ]
  },
  {
    "id": "p_legal_8",
    "title": "Debitorlik Qarzini Sudgacha Hal Qilish Talabnomasi",
    "category": "legal",
    "prompt": "Mijoz 3 oydan beri 50 mln so'm qarzini to'lamayapti. Iqtisodiy sudga da'vo arizasi kiritishdan oldin O'zbekiston qonunchiligi bo'yicha majburiy bo'lgan Sudgacha Talabnoma (Pretenziya) matnini hisoblangan penyalar bilan tuz.",
    "tags": [
      "Pretenziya",
      "Sud",
      "Qarz"
    ]
  },
  {
    "id": "p_legal_9",
    "title": "Boshqaruv Hisobi (P&L) Tahlili va Xarajatlarni Qisqartirish",
    "category": "legal",
    "prompt": "Kompaniyamizning oylik daromad va xarajatlar ko'rsatkichlari: [Raqamlar]. Ushbu P&L hisobotini audit qilib, qaysi xarajatlar asossiz oshib ketganini va operatsion foydani qanday qilib 15% ga oshirish mumkinligini ko'rsat.",
    "tags": [
      "Moliya",
      "P&L",
      "Foyda"
    ]
  },
  {
    "id": "p_legal_10",
    "title": "Mahsulot Tannarxi Kalkulyatsiyasi Auditi",
    "category": "legal",
    "prompt": "Ishlab chiqarish korxonamizda mahsulot tannarxi oshib ketmoqda. Xomashyo, ish haqi, amortizatsiya va bilvosita xarajatlarni to'g'ri taqsimlovchi va haqiqiy tannarxni hisoblovchi kalkulyatsiya modelini tuzib ber.",
    "tags": [
      "Tannarx",
      "Audit",
      "IshlabChiqarish"
    ]
  },
  {
    "id": "p_legal_11",
    "title": "Naqd Pul Oqimi (Cash Flow) Inqirozining Oldini Olish",
    "category": "legal",
    "prompt": "Kompaniyamiz qog'ozda foydada, lekin xodimlarga oylik va soliqlarni to'lashga naqd pul yetishmayapti (Kassa uzilishi / Kassetik razriv). Ushbu muammoni zudlik bilan hal qilishning 5 ta amaliy moliyaviy usulini ber.",
    "tags": [
      "CashFlow",
      "Moliya",
      "Kassa"
    ]
  },
  {
    "id": "p_legal_12",
    "title": "MChJ Ta'sischilar Shartnomasi va Ulushlar Taqsimoti",
    "category": "legal",
    "prompt": "Ikki sherik yangi biznes boshlayapmiz (50/50 yoki 60/40). Kelajakda nizo chiqmasligi uchun qanday qarorlar bir ovozdan qabul qilinishi, kim qanday javobgarlik olishi va sheriklikdan chiqish tartibini belgilovchi memorandum tuz.",
    "tags": [
      "MChJ",
      "Sheriklik",
      "Huquq"
    ]
  },
  {
    "id": "p_dev_1",
    "title": "Python Telegram Bot Strukturasining Arxitekturasi",
    "category": "dev",
    "prompt": "Python (aiogram 3.x) da Telegram Mini App bilan integratsiya qiluvchi, SQLite/PostgreSQL va xavfsiz environment o'zgaruvchilari (dotenv) bilan ishlaydigan toza, modulli bot arxitekturasi kodini yozib ber.",
    "tags": [
      "Python",
      "Aiogram",
      "Bot"
    ]
  },
  {
    "id": "p_dev_2",
    "title": "Web Scraping: Saytdan Ma'lumotlarni Qirqib Olish",
    "category": "dev",
    "prompt": "Python BeautifulSoup va requests kutubxonalari yordamida e-tijorat saytidan mahsulot nomlari, narxlari va mavjudligini avtomatik yig'ib, toza Excel (xlsx) fayliga saqlaydigan skript yoz.",
    "tags": [
      "Python",
      "Scraping",
      "Data"
    ]
  },
  {
    "id": "p_dev_3",
    "title": "SQL Murakkab JOIN va Indekslarni Optimizatsiya Qilish",
    "category": "dev",
    "prompt": "Mening SQL so'rovim 1 million qatorli jadvalda 8 soniyada ishlayapti: [SQL so'rovingiz]. Ushbu so'rovni tahlil qilib, qaysi ustunlarga INDEX qo'yish kerakligini va so'rov tezligini 50ms gacha tezlashtirish usulini ko'rsat.",
    "tags": [
      "SQL",
      "Optimizatsiya",
      "Baza"
    ]
  },
  {
    "id": "p_dev_4",
    "title": "REST API Integratsiya Kodini Yozish (cURL & Python)",
    "category": "dev",
    "prompt": "Quyidagi API hujjatiga asosan [API tafsilotlari]: Python requests kutubxonasida avtorizatsiya headerlari, xatoliklarni ushlash (try/except) va qayta urinish (retry) mexanizmi bilan to'liq integratsiya funksiyasini yoz.",
    "tags": [
      "API",
      "Python",
      "Integratsiya"
    ]
  },
  {
    "id": "p_dev_5",
    "title": "Regex (Muntazam Ifodalar) orqali Ma'lumot Tekshirish",
    "category": "dev",
    "prompt": "O'zbekiston telefon raqamlari (+998 90 123-45-67 formati), STIR (INN 9 xonali) va Pasport seriya/raqamini tekshiruvchi aniq va xatosiz Regular Expression (Regex) namunalarini tushuntirish bilan ber.",
    "tags": [
      "Regex",
      "Tekshirish",
      "Dev"
    ]
  },
  {
    "id": "p_dev_6",
    "title": "Git Konfliktlarni Tushunish va To'g'rilash",
    "category": "dev",
    "prompt": "Git tarmog'ida 'Merge conflict' yuzaga keldi. Qadam-baqadam git status, git diff ko'rish, konflikt belgilarini (`<<<<<<<`, `=======`, `>>>>>>>`) to'g'ri hal qilish va xavfsiz commit qilish buyruqlarini tushuntir.",
    "tags": [
      "Git",
      "GitHub",
      "DevOps"
    ]
  },
  {
    "id": "p_dev_7",
    "title": "Dockerfile va Docker Compose Faylini Yaratish",
    "category": "dev",
    "prompt": "Node.js (yoki Python) web ilovasi uchun eng yengil (alpine), xavfsiz va multi-stage build imkoniyatiga ega bo'lgan production-ready Dockerfile hamda Redis bilan birga ishga tushiruvchi docker-compose.yml yozib ber.",
    "tags": [
      "Docker",
      "DevOps",
      "Server"
    ]
  },
  {
    "id": "p_dev_8",
    "title": "Frontend Console Error Debugging",
    "category": "dev",
    "prompt": "Brauzer konsolida quyidagi xatolik chiqmoqda: '[Xatolik xabari]'. Ushbu xatoning ildiz sababi nima va kodimning qaysi qismini qanday tuzatishim kerakligini misol bilan ko'rsat.",
    "tags": [
      "JavaScript",
      "Debug",
      "Frontend"
    ]
  },
  {
    "id": "p_dev_9",
    "title": "Linux Server Nginx Reverse Proxy Sozlash",
    "category": "dev",
    "prompt": "Ubuntu serverida port 3000 da ishlayotgan Node.js ilovasini o'z domenimizga ulash, bepul Let's Encrypt SSL sertifikatini o'rnatish va Nginx konfiguratsiya faylini xavfsizlik sozlamalari bilan yozib ber.",
    "tags": [
      "Linux",
      "Nginx",
      "SSL"
    ]
  },
  {
    "id": "p_dev_10",
    "title": "Ma'lumotlar Bazasi Sxemasi (DB Schema) Loyihalash",
    "category": "dev",
    "prompt": "Loyiha: [Loyiha, masalan: Onlayn dori yetkazib berish xizmati]. Ushbu tizim uchun Foydalanuvchilar, Tovarlar, Buyurtmalar va To'lovlar jadvallari orasidagi munosabatlarni (1-to-many, many-to-many) ko'rsatuvchi PostgreSQL sxemasi kodini yoz.",
    "tags": [
      "PostgreSQL",
      "Database",
      "Arxitektura"
    ]
  },
  {
    "id": "p_dev_11",
    "title": "Kiberxavfsizlik: XSS va SQL Injectiondan Himoya",
    "category": "dev",
    "prompt": "Web sayt foydalanuvchi kiritgan ma'lumotlarni qabul qilganda XSS (Cross-Site Scripting) va SQL Injection xurujlaridan himoyalanish uchun qanday sanitizatsiya va parametrli so'rovlar ishlatilishi kerakligini kodda ko'rsat.",
    "tags": [
      "Xavfsizlik",
      "Kiber",
      "Backend"
    ]
  },
  {
    "id": "p_dev_12",
    "title": "Cron Job Avtomatlashtirilgan Vazifalar Rejasi",
    "category": "dev",
    "prompt": "Linux serverida har kuni kechasi soat 03:00 da ma'lumotlar bazasining zaxira nusxasini (backup) olib, uni siqib (zip) va Telegram bot orqali adminga yuboruvchi bash skript va uning crontab qatorini yozib ber.",
    "tags": [
      "Cron",
      "Bash",
      "Avtomat"
    ]
  },
  {
    "id": "p_hr_1",
    "title": "Xalqaro Standartdagi Rezyume (Google XYZ Formulasi)",
    "category": "hr",
    "prompt": "Lavozim: [Sizning kasbingiz]. Mening hozirgi tajribam: [Tajribangizni yozing]. Google'ning 'XYZ formulasi' bo'yicha ('X natijaga erishdim, Y o'lchov vositasi orqali, Z harakati yordamida') 3 ta kuchli, raqamlar bilan asoslangan rezyume bandini tuz.",
    "tags": [
      "Rezyume",
      "Google",
      "Karyera"
    ]
  },
  {
    "id": "p_hr_2",
    "title": "LinkedIn Profil Sarlavhasi (Headline) va 'About'",
    "category": "hr",
    "prompt": "Kasbim: [Sohangiz va tajribangiz]. LinkedIn'da xalqaro va mahalliy rekruterlar meni oson topishi uchun diqqatni tortuvchi Headline (sarlavha) hamda mening kuchli tomonlarim va yutuqlarimni ko'rsatuvchi 300 so'zlik 'About' bo'limi matnini yoz.",
    "tags": [
      "LinkedIn",
      "PersonalBrand",
      "HR"
    ]
  },
  {
    "id": "p_hr_3",
    "title": "Ish Intervyusida STAR Usulida Javob Berish",
    "category": "hr",
    "prompt": "Intervyuda eng ko'p so'raladigan savol: 'Ishingizdagi eng katta qiyinchilikni qanday yenggansiz?'. Ushbu savolga xalqaro STAR (Situation, Task, Action, Result) metodologiyasi bo'yicha taassurot qoldiruvchi javob tuzib ber.",
    "tags": [
      "Intervyu",
      "STAR",
      "Karyera"
    ]
  },
  {
    "id": "p_hr_4",
    "title": "Maoshni Oshirishni So'rash Bo'yicha Suhbat Skripti",
    "category": "hr",
    "prompt": "Kompaniyada 1 yildan beri ishlayapman va natijalarim yaxshi. Rahbar bilan maoshni 30% ga oshirish bo'yicha shaxsiy suhbat o'tkazmoqchiman. Nolishsiz, qilingan aniq foydani ko'rsatuvchi va o'zaro manfaatli taklif beruvchi suhbat ssenariysini yoz.",
    "tags": [
      "Maosh",
      "Muzokara",
      "Rahbar"
    ]
  },
  {
    "id": "p_hr_5",
    "title": "Ishdan Bo'shash Haqidagi Hurmatli Xat (Resignation)",
    "category": "hr",
    "prompt": "Yangi ish topganim sababli joriy kompaniyadan ketmoqdaman. Barcha ko'priklarni saqlab qolgan holda, mehmondo'stlik uchun minnatdorchilik bildiruvchi va 2 haftalik topshirish (handover) jarayoniga tayyorligimni bildiruvchi rasmiy xat yoz.",
    "tags": [
      "Resignation",
      "Karyera",
      "Odob"
    ]
  },
  {
    "id": "p_hr_6",
    "title": "Xodimga SMART Standartida Aniq Vazifa Qo'yish",
    "category": "hr",
    "prompt": "Mening vazifam: [Umumiy vazifa, masalan: Savdoni oshirish]. Buni xodim bahona topolmaydigan, aniq o'lchanadigan, muddati va mezonlari aniq bo'lgan SMART (Specific, Measurable, Achievable, Relevant, Time-bound) ko'rsatmasiga aylantir.",
    "tags": [
      "SMART",
      "Boshqaruv",
      "Vazifa"
    ]
  },
  {
    "id": "p_hr_7",
    "title": "Iqtidorli Mutaxassislarni Tortuvchi Ish E'loni (JD)",
    "category": "hr",
    "prompt": "Bizga [Lavozim nomi] kerak. Standart zerikarli qoliplar o'rniga, eng kuchli mutaxassislarni jalb qiluvchi, kompaniya madaniyati, haqiqiy qiyin chaqiriqlar va taklif qilinayotgan imkoniyatlar samimiy yozilgan zamonaviy Job Description tuz.",
    "tags": [
      "Vakansiya",
      "Rekruting",
      "HR"
    ]
  },
  {
    "id": "p_hr_8",
    "title": "1-on-1 Samaradorlik Suhbati Savollari",
    "category": "hr",
    "prompt": "Rahbar sifatida xodimlarim bilan har 2 haftada 30 daqiqalik yakkama-yakka suhbat o'tkazaman. Xodimning ichki his-tuyg'ularini, motivatsiyasini tushunish va unga qanday to'siqlar xalaqit berayotganini aniqlovchi 6 ta chuqur savol ber.",
    "tags": [
      "1on1",
      "Rahbar",
      "Motivatsiya"
    ]
  },
  {
    "id": "p_hr_9",
    "title": "Xodimning Salbiy Natijasiga Konstruktiv Fikr (Feedback)",
    "category": "hr",
    "prompt": "Xodim muhim loyiha muddatini buzdi. Uni sindirib tashlamasdan, lekin xatoning jiddiyligini anglatuvchi va kelgusida takrorlanmasligi uchun 'Sendvich usuli' (Ijobiy — Tuzatish — Yangi maqsad) bo'yicha suhbat matnini tuz.",
    "tags": [
      "Feedback",
      "Boshqaruv",
      "Sendvich"
    ]
  },
  {
    "id": "p_hr_10",
    "title": "Jamoada Yangi KPI Tizimini Joriy Qilish",
    "category": "hr",
    "prompt": "Soha: [Bo'lim nomi]. Xodimlar faqat oylik maoshga qarab o'tirmasdan, biznes natijalariga bog'langan 3 ta asosiy KPI (Samaradorlik ko'rsatkichi) formulasi va ularning oylik bonusga ta'sir qilish foizini hisoblab ber.",
    "tags": [
      "KPI",
      "Bonus",
      "Moliya"
    ]
  },
  {
    "id": "p_hr_11",
    "title": "Xodimlarni AI Vositalariga O'rgatish Rejasi",
    "category": "hr",
    "prompt": "Kompaniyamiz xodimlarining kunlik 30% vaqtini tejash uchun ularni ChatGPT va AI vositalariga o'rgatmoqchimiz. 4 haftalik amaliy ichki korporativ o'quv dasturi va natijani tekshirish mezonlarini tuz.",
    "tags": [
      "Trening",
      "AI",
      "Transformatsiya"
    ]
  },
  {
    "id": "p_hr_12",
    "title": "Kuchli Tavsiyanoma (Recommendation Letter) Yozish",
    "category": "hr",
    "prompt": "Bizda 2 yil ishlagan sobiq xodim xorijiy kompaniyaga ishga kirmoqda. Uning mas'uliyati, tez o'rganishi va jamoaga qo'shgan hissasi haqida quruq maqtovlarsiz, aniq misollar bilan boyitilgan nufuzli tavsiyanoma xati yoz.",
    "tags": [
      "Tavsiya",
      "Karyera",
      "HR"
    ]
  },
  {
    "id": "p_study_1",
    "title": "IELTS Writing Task 2: 7.5+ Band Insho Rejasi",
    "category": "study",
    "prompt": "Mavzu: [IELTS savoli]. Ushbu savolga 7.5+ band darajasida insho yozish uchun: 1) Kirish (Paraphrase + Thesis statement); 2) Body 1 (Topic sentence + misol); 3) Body 2 (Qarshi fikr + yechim); 4) Xulosa; 5) 10 ta akademik so'z va iboralar ro'yxatini ber.",
    "tags": [
      "IELTS",
      "Writing",
      "InglizTili"
    ]
  },
  {
    "id": "p_study_2",
    "title": "Sabrli Ingliz Tili Repetitori (Suhbat & Grammatika)",
    "category": "study",
    "prompt": "Sen mening sabrli ingliz tili repetitorimsan. Men bilan [Mavzu, masalan: ish yoki sayohat] haqida A2/B1 darajasida suhbatlash. Men xato qilsam, darhol to'g'ri variantini va nega shunday bo'lishini o'zbekcha qisqa tushuntirib, keyin yangi savol ber.",
    "tags": [
      "InglizTili",
      "Repetitor",
      "Grammatika"
    ]
  },
  {
    "id": "p_study_3",
    "title": "Feynman Texnikasi: Murakkab Mavzuni 5 Daqiqada Tushunish",
    "category": "study",
    "prompt": "Mavzu: [Qiyin mavzu, masalan: Neyron tarmoqlari qanday o'rganadi?]. Feynman texnikasi bo'yicha: Ushbu mavzuni 10 yoshli bolaga tushuntirgandek, mutlaqo sodda hayotiy analogiyalar va kundalik misollar bilan 3 ta qisqa bandda tushuntir.",
    "tags": [
      "Feynman",
      "O'rganish",
      "Sodda"
    ]
  },
  {
    "id": "p_study_4",
    "title": "300 Sahifalik Biznes Kitobidan Eng Muhim 5 Qoida",
    "category": "study",
    "prompt": "Kitob nomi: [Kitob va muallifi]. Ushbu kitobning butun falsafasi va mazmunidan hayotda va biznesda darhol qo'llash mumkin bo'lgan eng muhim 5 ta amaliy qoida, 3 ta bosh g'oya va 1 ta asosiy amaliy mashqni chiqarib ber.",
    "tags": [
      "Kitob",
      "Konspekt",
      "Xulosa"
    ]
  },
  {
    "id": "p_study_5",
    "title": "Kunlik Timeboxing Jadvali Tuzish",
    "category": "study",
    "prompt": "Bugungi vazifalarim ro'yxati: [Vazifalar]. Elon Mask va Bill Geyts qo'llaydigan 'Timeboxing' usuli bo'yicha soat 08:00 dan 20:00 gacha 30-60 daqiqalik bloklarga bo'lingan, tanaffuslar va eng muhim (Deep Work) vazifalar ajratilgan kunlik reja tuz.",
    "tags": [
      "Timeboxing",
      "Vaqt",
      "Samaradorlik"
    ]
  },
  {
    "id": "p_study_6",
    "title": "Prokrastinatsiyani Yengish va 2 Daqiqalik Qoida",
    "category": "study",
    "prompt": "Men [Vazifa nomi]ni bajarishni 1 haftadan beri orqaga suryapman va boshlashga erinyapman. Bosh miyadagi qo'rquv va qarshilikni sindirish uchun '2 daqiqalik mikrostrok' usuli bo'yicha hoziroq boshlash mumkin bo'lgan 3 ta kulgili darajada oson qadamni yozib ber.",
    "tags": [
      "Prokrastinatsiya",
      "Odat",
      "Psixologiya"
    ]
  },
  {
    "id": "p_study_7",
    "title": "Qiyin Ilmiy Maqolani O'zbek Tiliga Moslashtirish",
    "category": "study",
    "prompt": "Quyidagi ingliz tilidagi ilmiy matnni [Matn] quruq Google Translate kabi emas, o'zbek tilining boy so'zlashuv va adabiy qoidalariga moslab, atamalariga izoh bergan holda ravon tarjima qilib ber.",
    "tags": [
      "Tarjima",
      "Ilm",
      "Til"
    ]
  },
  {
    "id": "p_study_8",
    "title": "Xorijiy Universitetga Motivatsion Xat (SOP)",
    "category": "study",
    "prompt": "Men [Universitet va Yo'nalish nomi]ga magistratura/bakalavrga topshiryapman. Mening qisqacha tarixim: [Tarixingiz]. Qabul komissiyasida hayrat uyg'otuvchi, shaxsiy qiyinchiliklar va aniq maqsadlar aks etgan 500 so'zlik professional Statement of Purpose (SOP) yoz.",
    "tags": [
      "SOP",
      "Universitet",
      "Grant"
    ]
  },
  {
    "id": "p_study_9",
    "title": "Yangi Ko'nikmani 30 Kunda O'rganish Yo'l Xaritasi",
    "category": "study",
    "prompt": "Ko'nikma: [Masalan: Python dasturlash yoki Moliyaviy modellashtirish]. Noldan boshlab har kuni 45 daqiqa ajratgan holda 30 kunda amaliy natija ko'rsatishga imkon beruvchi haftalik va kunlik Roadmap tuz.",
    "tags": [
      "Roadmap",
      "O'rganish",
      "30Kun"
    ]
  },
  {
    "id": "p_study_10",
    "title": "Muzokaralarda Tinglash va Qarshi Fikrni Sindirish",
    "category": "study",
    "prompt": "Qarama-qarshi tomon bilan suhbatda o'z fikringizni majburlab o'tkazmasdan, Kris Vossning 'FBR muzokaralari' usuli (Labeling & Mirroring) orqali suhbatdoshni o'zi rozi bo'ladigan holatga keltirish texnikasini misollar bilan ko'rsat.",
    "tags": [
      "Muzokara",
      "Psixologiya",
      "Muloqot"
    ]
  },
  {
    "id": "p_study_11",
    "title": "Notiqlik San'ati: 5 Daqiqalik Ta'sirli Nutq",
    "category": "study",
    "prompt": "Mavzu: [Nutq mavzusi]. Katta auditoriya oldida 5 daqiqada aytiladigan, dastlabki 15 soniyada diqqatni jalb qiluvchi, hissiy cho'qqisi (climax) bo'lgan va odamlarni o'ylantirib qo'yuvchi nutq matnini tayyorla.",
    "tags": [
      "Notiqlik",
      "Nutq",
      "Auditoriya"
    ]
  },
  {
    "id": "p_study_12",
    "title": "Shaxsiy Oylik Byudjet va Jamg'arma Rejasi",
    "category": "study",
    "prompt": "Mening oylik daromadim [Daromad] so'm. 50/30/20 qoidasi (50% ehtiyojlar, 30% xohishlar, 20% jamg'arma va investitsiya) bo'yicha shaxsiy oylik xarajatlar balansini va ortiqcha xarajatlarni 20% ga kamaytirish strategiyasini tuz.",
    "tags": [
      "Moliya",
      "Jamg'arma",
      "Byudjet"
    ]
  },
  {
    "id": "p_vis_1",
    "title": "Midjourney: Hashamatli Parfyum Tijoriy Fotosessiyasi",
    "category": "visual",
    "prompt": "Commercial studio product photography of a luxury black matte perfume bottle with gold accents, floating weightlessly with crystal clear water splashes, dramatic rim lighting, soft caustics, cinematic bokeh, hyper-realistic 8k, shot on Hasselblad H6D-100c --ar 16:9 --v 6.0 --style raw",
    "tags": [
      "Midjourney",
      "Mahsulot",
      "Rasm"
    ]
  },
  {
    "id": "p_vis_2",
    "title": "Midjourney: Toshkent Modernist Arxitekturasi va Dron Tasviri",
    "category": "visual",
    "prompt": "Breathtaking aerial drone shot of modern Tashkent City skyscrapers blending with turquoise traditional mosaic domes during golden hour sunset, warm sun rays piercing through glass facades, cinematic composition, ultra-detailed 8k --ar 16:9 --v 6.0",
    "tags": [
      "Midjourney",
      "Toshkent",
      "Arxitektura"
    ]
  },
  {
    "id": "p_vis_3",
    "title": "Midjourney: Minimalist 3D App Ikonkasi",
    "category": "visual",
    "prompt": "Clean futuristic 3D icon of a glowing neon brain merged with golden lightning bolt, glossy clay textures, vibrant emerald and cyber cyan colors, smooth studio lighting, isolated on solid dark background, Figma Dribbble trending --ar 1:1 --v 6.0",
    "tags": [
      "Midjourney",
      "3D",
      "Ikonka"
    ]
  },
  {
    "id": "p_vis_4",
    "title": "Midjourney: Studiyada Olingan Professional Portret",
    "category": "visual",
    "prompt": "High-end corporate editorial portrait of a confident young Central Asian entrepreneur wearing a sharp charcoal suit, soft diffused Rembrandt lighting, shallow depth of field, authentic skin textures, magazine cover quality --ar 4:5 --v 6.0",
    "tags": [
      "Midjourney",
      "Portret",
      "Biznes"
    ]
  },
  {
    "id": "p_vis_5",
    "title": "Midjourney: O'zbek Milliy Taomi (Palov) Premium Reklamasi",
    "category": "visual",
    "prompt": "Mouthwatering culinary photography of traditional Uzbek Osh Palov served on an authentic ceramic Rishtan plate, steaming tender lamb chunks, golden carrots, quail eggs, warm rustic atmosphere, food magazine editorial --ar 16:9 --v 6.0",
    "tags": [
      "Midjourney",
      "Taom",
      "Milliy"
    ]
  },
  {
    "id": "p_vis_6",
    "title": "Kling & Runway: 4K Kinematik Dron Video Ssenariysi",
    "category": "visual",
    "prompt": "Slow cinematic drone orbit around an ancient Silk Road turquoise minaret at sunrise, morning mist rolling over ancient rooftops, dynamic light changes, photorealistic 4k video render, camera movement smooth and majestic.",
    "tags": [
      "Runway",
      "Kling",
      "Video"
    ]
  },
  {
    "id": "p_vis_7",
    "title": "Sora & Luma: Dinamik Mahsulot Animatsiyasi",
    "category": "visual",
    "prompt": "Ultra-realistic dynamic camera zoom-in into a new sleek electric car dashboard, digital holographic UI booting up with glowing neon animations, smooth reflections on dark polished metal, 60fps cinematic commercial.",
    "tags": [
      "Luma",
      "Sora",
      "Video"
    ]
  },
  {
    "id": "p_vis_8",
    "title": "Midjourney: Futuristik Smartfon Dizayni",
    "category": "visual",
    "prompt": "Industrial design prototype of a next-generation transparent foldable smartphone, sleek titanium edges, glowing holographic micro-display, clean minimalist Scandinavian aesthetic, white studio background --ar 16:9 --v 6.0",
    "tags": [
      "Midjourney",
      "Texnologiya",
      "Konsept"
    ]
  },
  {
    "id": "p_vis_9",
    "title": "Midjourney: Vektor Izometrik Infografika Elementlari",
    "category": "visual",
    "prompt": "Isometric 3D vector illustration of an interconnected smart logistics warehouse, automated robotic conveyor belts, delivery drones, vibrant pastel gradient palette, clean tech presentation asset --ar 16:9 --v 6.0",
    "tags": [
      "Midjourney",
      "Vektor",
      "Grafika"
    ]
  },
  {
    "id": "p_vis_10",
    "title": "Midjourney: Premium Kofe Brendi Qadoq Dizayni",
    "category": "visual",
    "prompt": "Modern luxury coffee bean pouch packaging design mockup, matte textured craft paper with embossed gold typography, surrounded by scattered roasted Arabica beans, dark moody lighting, high resolution --ar 3:2 --v 6.0",
    "tags": [
      "Midjourney",
      "Brending",
      "Qadoq"
    ]
  }
],

  // 5. Biletlar, Oktagon va FAQ
  // 5. Biletlar (Har birida 5 tadan saralangan savollar)
  tickets: [
    { id: 1, name: "1-Bilet", questionIds: [1, 2, 3, 6, 13] },
    { id: 2, name: "2-Bilet", questionIds: [4, 5, 7, 10, 14] },
    { id: 3, name: "3-Bilet", questionIds: [8, 9, 11, 15, 16] },
    { id: 4, name: "4-Bilet", questionIds: [12, 17, 18, 19, 20] },
    { id: 5, name: "5-Bilet", questionIds: [1, 3, 7, 10, 13] },
    { id: 6, name: "6-Bilet", questionIds: [2, 5, 8, 11, 14] },
    { id: 7, name: "7-Bilet", questionIds: [4, 6, 9, 12, 15] },
    { id: 8, name: "8-Bilet", questionIds: [3, 8, 13, 16, 19] },
    { id: 9, name: "9-Bilet", questionIds: [5, 10, 15, 18, 20] },
    { id: 10, name: "10-Bilet (VIP)", questionIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
  ],

  // 6. Oktagon (PvP) uchun tezkor raqiblar
  octagonBots: [
    { name: "Alisher (AI Dev)", avatar: "👨‍💻", rating: 1420 },
    { name: "Madina (Prompt Specialist)", avatar: "👩‍🔬", rating: 1560 },
    { name: "GPTify Bot (Master)", avatar: "🤖", rating: 1890 }
  ],

  // 7. Ko'p Beriladigan Savollar (FAQ)
  faqs: [
    {
      q: "GPTify Academy kurslari qanday tartibda o'tiladi?",
      a: "Kurslarimiz amaliy formatda bo'lib, 14 ta to'liq modul, audio/video tushuntirishlar, real O'zbekiston B2B keyslari va tayyor promptlar ustaxonasidan iborat. Boshlang'ichdan professional darajagacha tizimli o'rgatiladi."
    },
    {
      q: "Rasmiy sertifikat qanday olinadi?",
      a: "Mini App ichidagi 'Real Imtihon' bo'limida 20 daqiqalik sinovdan o'tib, 80% yoki undan yuqori natija to'plasangiz, tizim sizning ism-familiyangiz tushirilgan rasmiy GPTify AI Sertifikatini darhol generatsiya qilib beradi."
    },
    {
      q: "Kompaniyalar uchun B2B xizmatlar qanday ishlaydi?",
      a: "Korxonalarga AI joriy etish auditi, xodimlar uchun korporativ treninglar hamda savdo, buxgalteriya (Didox) va mijozlarga xizmat ko'rsatishni 90% avtomatlashtiruvchi aqlli agentlar ishlab chiqamiz."
    },
    {
      q: "Prompt Lab vositasidan qanday foydalaniladi?",
      a: "Ilovadagi 'PROMPT LAB' bo'limiga kiring, o'zingizga kerakli soha (Savdo, Uzum SEO, Huquq, SMM) promptini tanlang va 1-bosishda nusxalab, ChatGPT, Claude yoki Gemini da ishlating."
    },
    {
      q: "Savollar bo'lsa kimga murojaat qilish kerak?",
      a: "Har qanday savol va takliflar bo'yicha to'g'ridan-to'g'ri rasmiy adminimiz @GPTify_UZ ga yozishingiz yoki @GPTifyUZ kanalimiz orqali yangiliklarni kuzatib borishingiz mumkin."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUIZ_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_DATA };
}
