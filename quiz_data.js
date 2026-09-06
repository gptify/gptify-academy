/**
 * GPTify Uzbekistan — AI Ta'lim va Testlar Bazasi (Quiz Bank)
 * 14 ta darslik, Mavzular, Biletlar, Real Imtihon va Chalg'ituvchi savollar
 */

const QUIZ_DATA = {
  // 1. Asosiy Bosqichlar: Boshlash ➔ O'rganish ➔ Qo'llash
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

  // 2. Boshlovchilar va Amaliyotchilar uchun Savollar Banki
  questions: [
    // --- 1. Noldan Boshlash ---
    {
      id: 1,
      category: "get_started",
      ticket: 1,
      isTricky: false,
      question: "Sun'iy intellektdan endi foydalanayotgan odam qaysi vositadan boshlagani eng ma'qul?",
      options: [
        "Murakkab dasturlash tillarini (Python, C++) 6 oy o'rganish",
        "ChatGPT (OpenAI), Claude yoki Gemini kabi bepul chat-yordamchilardan birini ochib, kundalik savol bilan boshlash",
        "O'ziga shaxsiy server xarid qilish",
        "Faqat ingliz tilini mukammal o'rgangandan so'ng boshlash"
      ],
      correctIndex: 1,
      explanation: "Hozirgi AI vositalari (ChatGPT, Gemini, Claude) o'zbek tilida bemalol tushunadi va javob beradi. Boshlash uchun dasturlash yoki texnik bilim shart emas — oddiy chat kabi yozishmasdan boshlash kifoya."
    },
    {
      id: 2,
      category: "get_started",
      ticket: 1,
      isTricky: false,
      question: "Internetdagi eng so'nggi ma'lumotlar va manbalar bilan qidirish kerak bo'lganda qaysi AI eng yaxshi yordam beradi?",
      options: [
        "Perplexity AI yoki Gemini (Search orqali yangilangan)",
        "Faqat oflayn lug'atlar",
        "Eski kalkulyator",
        "Faqat rasm chizuvchi Midjourney"
      ],
      correctIndex: 0,
      explanation: "Perplexity AI va Google Gemini real vaqtda internetdan ma'lumot qidirib, har bir ma'lumotning qaysi saytdan olinganini (havolasini) ko'rsatib beradi."
    },

    // --- 2. O'rganish & Muloqot ---
    {
      id: 3,
      category: "learn_prompting",
      ticket: 2,
      isTricky: false,
      question: "AI dan yuqori sifatli va aniq javob olishning 3 ta oltin ustuni qaysi?",
      options: [
        "Faqat juda uzun so'zlar ishlatish",
        "1) Rol berish (Kimdek javob bersin); 2) Kontekst (Vaziyat nima); 3) Aniq format (Qanday ko'rinishda kerak)",
        "Savolni 10 marta qayta-qayta yozish",
        "Faqat bitta so'z yozish"
      ],
      correctIndex: 1,
      explanation: "Masalan: '[Rol]: Sen tajribali ingliz tili o'qituvchisisan. [Kontekst]: Boshlang'ich o'quvchiga tushuntiryapsan. [Format]: 3 ta misol bilan qisqa tushuntir'. Bu eng samarali formuladir."
    },
    {
      id: 4,
      category: "learn_prompting",
      ticket: 2,
      isTricky: true,
      question: "Nega ko'pchilik odamlar AI dan 'foydasiz umumiy javob' olib hafsalasi pir bo'ladi?",
      options: [
        "Chunki AI umuman aqlli emas",
        "Chunki ular savolni noaniq berishadi: masalan 'Menga biznes haqida gapir' deb kontekstsiz so'rashadi",
        "Chunki internet sekin",
        "Chunki AI faqat ingliz tilida biladi"
      ],
      correctIndex: 1,
      explanation: "Oltin qoida: 'Qanday so'rasangiz, shunday javob olasiz' (Garbage in, garbage out). Noaniq savolga umumiy kitobiy javob qaytadi. Aniq vaziyat berilsa, haqiqiy javob chiqadi."
    },

    // --- 3. Hayot & O'qishda Qo'llash ---
    {
      id: 5,
      category: "apply_life_study",
      ticket: 3,
      isTricky: false,
      question: "Murakkab mavzuni (masalan, iqtisodiy qonun yoki ilmiy maqolani) AI yordamida tez tushunish siri nima?",
      options: [
        "Matnni yodlab olish",
        "AI ga: 'Ushbu mavzuni 10 yoshli bolaga tushuntirgandek, hayotiy oddiy misollar bilan tushuntirib ber' deb so'rash (Feynman texnikasi)",
        "Matnni o'qimasdan tashlab ketish",
        "Faqat audio eshitish"
      ],
      correctIndex: 1,
      explanation: "Bu 'Feynman texnikasi' deb ataladi. AI ga 'oddiy tilda tushuntir' desangiz, u barcha qiyin atamalarni kundalik misollarga aylantirib, 5 daqiqada tushunishingizni ta'minlaydi."
    },
    {
      id: 6,
      category: "apply_life_study",
      ticket: 3,
      isTricky: false,
      question: "Chet tilini (ingliz/rus) o'rganishda AI dan qanday qilib tekin repetitor sifatida foydalanish mumkin?",
      options: [
        "Faqat so'zlarni tarjima qilish",
        "AI ga: 'Sen mening sabrli suhbatdoshimsan. Men bilan inglizcha A2 darajasida suhbatlash, xatolarimni muloyim tuzatib, to'g'ri variantini ko'rsat' deb buyurish",
        "Har kuni faqat bitta so'z so'rash",
        "Faqat lug'at o'qish"
      ],
      correctIndex: 1,
      explanation: "AI hech qachon charchamaydi, uyalmasdan xato qilib o'rganish imkonini beradi va xatolaringizni darhol grammatik jihatdan tushuntirib beradi."
    },

    // --- 4. Ish & Biznesda Qo'llash ---
    {
      id: 7,
      category: "apply_work_business",
      ticket: 4,
      isTricky: false,
      question: "Ishga kirish uchun rezyume (CV) tayyorlayotganda AI dan qanday to'g'ri foydalaniladi?",
      options: [
        "AI ga internetdagi soxta rezyumeni ko'chirib berishni aytish",
        "O'zingizning tajribangizni yozib, so'ng AI ga: 'Ushbu rezyumeni maqsadli vakansiya talablariga moslab, kuchli fe'llar bilan professional tahrir qil' deb buyruq berish",
        "Rezyumega rasm qo'ymaslik",
        "Faqat 1 sahifalik bosh sahifa yuborish"
      ],
      correctIndex: 1,
      explanation: "AI sizning haqiqiy yutuqlaringizni professional biznes tilida ifodalab beradi va HR mutaxassislarining e'tiborini tortuvchi ko'rinishga keltiradi."
    },
    {
      id: 8,
      category: "apply_work_business",
      ticket: 4,
      isTricky: false,
      question: "Mijoz xizmatingizga 'Qimmat ekan' deb e'tiroz bildirdi. Amaliy savdoda AI sizga qanday yordam beradi?",
      options: [
        "Mijoz bilan bahslashish",
        "AI dan: 'Narxni tushirmasdan, mijozga bu xarajat 3 oyda qanday qilib o'zini oqlashi va foyda keltirishini ko'rsatuvchi 3 xil muloyim javob tuzib ber' deb so'rash",
        "Darhol 50% chegirma berish",
        "Mijozga boshqa yozmaslik"
      ],
      correctIndex: 1,
      explanation: "AI orqali siz mijozga 'narx' haqida emas, 'foyda va qiymat' haqida fikrlashga yordam beruvchi kuchli psixologik javob skriptini olasiz."
    },

    // --- 5. Xatolar & Xavfsizlik ---
    {
      id: 9,
      category: "ai_safety_habits",
      ticket: 5,
      isTricky: true,
      question: "AI ba'zida mavjud bo'lmagan kitob, qonun moddasi yoki faktni to'qib chiqarishi mumkin. Buni nima deyiladi va qanday oldi olinadi?",
      options: [
        "Bu kompyuter virusi, kompyuterni o'chirish kerak",
        "Bu 'Gallyutsinatsiya' (Hallucination) deyiladi. Oldini olish uchun AI dan faqat berilgan matn/manba ichidan javob berishni so'rash va faktlarni tekshirish kerak",
        "Bunday narsa bo'lmaydi, AI doim 100% haqiqatni aytadi",
        "Faqat telefonni qayta yoqish kerak"
      ],
      correctIndex: 1,
      explanation: "AI model bilmagan joyini tan olmasdan 'chiroyli to'qima' berishi mumkin. Muhim fakt, qonun yoki raqamlar bilan ishlaganda manba berishni (Grounding) so'rash shart."
    },
    {
      id: 10,
      category: "ai_safety_habits",
      ticket: 5,
      isTricky: true,
      question: "Kompaniyangizning maxfiy moliyaviy hisobotini yoki mijozlar pasport ma'lumotlarini ochiq AI ga kiritish xavflimi?",
      options: [
        "Mutlaqo xavfsiz, hamma kiritadi",
        "Ha, xavfli! Ochiq bepul modellar kiritilgan ma'lumotlarni o'rganish uchun ishlatishi mumkin. Maxfiy raqamlarni anonimlashtirish (ism va hisob raqamlarini o'zgartirib kiritish) shart",
        "Faqat internet trafigi ketadi",
        "AI pasport ma'lumotini tushunmaydi"
      ],
      correctIndex: 1,
      explanation: "Korporativ yoki shaxsiy ma'lumotlar bilan ishlaganda har doim maxfiy ismlar va summalarni o'zgartirib (anonimlashtirib) kiritish eng xavfsiz qoidadir."
    }
  ],

    // --- 4. Uzum & Marketplace ---
    {
      id: 8,
      category: "uzum_ecommerce",
      ticket: 4,
      isTricky: false,
      question: "Uzum Marketda tovaringiz qidiruvda yuqoriga chiqishi uchun AI qanday yordam beradi?",
      options: [
        "Faqat chiroyli rasm chizib beradi",
        "O'zbek va rus tillarida eng ko'p qidiriladigan SEO kalit so'zlarni aniqlab, mahsulot sarlavhasi va tavsifiga me'yorida joylashtiradi",
        "Uzum adminlariga shikoyat xati yozadi",
        "Barcha tovarlar narxini 1000 so'm qiladi"
      ],
      correctIndex: 1,
      explanation: "Uzum algoritmlari qidiruv so'zlariga bog'langan. AI orqali tuzilgan to'g'ri SEO sarlavha va xususiyatlar tovar ko'rishlar sonini 3-5 barobarga oshiradi."
    },
    {
      id: 9,
      category: "uzum_ecommerce",
      ticket: 4,
      isTricky: true,
      question: "Uzumda xaridor jahli chiqib 1 yulduz qo'ydi va salbiy sharh yozdi. Noto'g'ri harakat qaysi?",
      options: [
        "Mijoz bilan tortishib, uni yolg'onchilikda ayblash",
        "AI yordamida uzr so'rab, nuqsonni almashtirib berish va do'kon obro'sini saqlovchi diplomatik javob yozish",
        "Mijozga do'kon nomidan kichik bonus yoki kompensatsiya taklif qilish",
        "Kelgusida bunday nuqson qaytarilmasligini ommaviy ko'rsatish"
      ],
      correctIndex: 0,
      explanation: "Boshqa xaridorlar aynan salbiy sharhlarga sotuvchi qanday javob berganini o'qiydi. Diplomatik va g'amxo'r javob yangi xaridorlar ishonchini qozonadi."
    },

    // --- 5. Shartnoma & Xavfsizlik ---
    {
      id: 10,
      category: "business_safety",
      ticket: 5,
      isTricky: true,
      question: "Didox orqali kelgan 20 sahifalik yangi B2B shartnomani AI ga qanday tekshirtirish kerak?",
      options: [
        "Faqat oxirgi sahifasini o'qitish",
        "AI ga: 'Faqat: 1) Har bir kun uchun penya miqdori; 2) Bir tomonlama bekor qilish huquqi; 3) To'lov muddati kechikkanidagi xatarlarni jadvalda ko'rsat' deb tekshirtirish",
        "Hujjatni o'qimasdan imzolash",
        "Hujjatdagi barcha raqamlarni o'chirib tashlash"
      ],
      correctIndex: 1,
      explanation: "AI katta shartnomalardagi mayda harflar bilan yozilgan yuqori foizli penya tuzoqlarini (masalan, kunlik 0.5% yoki 1%) 10 soniyada fosh qilib, sizni millionlab so'm zarardan asraydi."
    }
  ],

  // 3. 14 ta amaliy modul (Boshlash ➔ O'rganish ➔ Qo'llash Yo'l Xaritasi)
  lessons: [
    {
      id: 1,
      num: "1.1",
      title: "AI nima va u qanday yordamchi bo'la oladi? (Qo'rquvni yengish)",
      duration: "10 daq",
      category: "Boshlash",
      summary: "AI dasturchilar uchun emas, oddiy insonlar uchun super-yordamchi. U qanday fikrlaydi va nimaga qodir?",
      actionPrompt: "Sen mening sabrli maslahatchisimsan. Menga sun'iy intellekt mening kasbimda (sotuvchi/buxgalter/o'qituvchi) qanday 3 ta amaliy yordam bera olishini oddiy tilda aytib ber."
    },
    {
      id: 2,
      num: "1.2",
      title: "Asboblar tanlovi: ChatGPT vs Claude vs Gemini vs Perplexity",
      duration: "12 daq",
      category: "Boshlash",
      summary: "Qaysi vosita qachon kerak? Qaysi biri bepul, qaysi biri internetdan qidiradi va qaysi biri hujjat o'qiydi?",
      actionPrompt: "Quyidagi 3 ta vazifam bor: 1) Internetdan yangi xabar topish; 2) Katta shartnoma o'qish; 3) Ijodiy post yozish. Qaysi modelni tanlashim kerak?"
    },
    {
      id: 3,
      num: "2.1",
      title: "Birinchi to'g'ri so'rov: AI ga insondek rol berish siri",
      duration: "15 daq",
      category: "O'rganish",
      summary: "Nega oddiy savolga zerikarli javob qaytadi? AI ga aniq rol berish orqali natijani 5 barobar kuchaytirish.",
      actionPrompt: "Sen Toshkentdagi 10 yillik tajribaga ega marketing rahbarisan. Menga yangi do'kon ochilishi uchun diqqatni tortuvchi 3 ta g'oya taklif qil."
    },
    {
      id: 4,
      num: "2.2",
      title: "3 Oltin Qoida: Rol, Kontekst va Natija formati (Before & After)",
      duration: "16 daq",
      category: "O'rganish",
      summary: "Mukammal so'rov formulasini o'rganamiz: Kim? Vaziyat nima? Natija qanday ko'rinishda bo'lsin?",
      actionPrompt: "[ROL]: Yurist. [KONTEKST]: B2B ijara shartnomasi tuzilmoqda. [FORMAT]: Faqat 3 ta asosiy xatarli bandni jadvalda chiqar."
    },
    {
      id: 5,
      num: "3.1",
      title: "Shaxsiy repetitor: Murakkab mavzuni 10 yoshli bolaga tushuntirgandek o'rganish",
      duration: "14 daq",
      category: "Qo'llash (O'qish)",
      summary: "Feynman texnikasi: Har qanday qiyin qonun, atama yoki kitobni 5 daqiqada sodda misollar bilan tushunish.",
      actionPrompt: "Ushbu murakkab mavzuni 10 yoshli bolaga tushuntirgandek, kundalik hayotiy misollar bilan juda sodda tilda tushuntirib ber."
    },
    {
      id: 6,
      num: "3.2",
      title: "Til o'rganish: AI bilan har kuni jonli inglizcha muloqot",
      duration: "15 daq",
      category: "Qo'llash (O'qish)",
      summary: "Hech qanday uyalishsiz, sabrli AI o'qituvchi bilan kunlik 10 daqiqa jonli gaplashish vorkfloui.",
      actionPrompt: "Sen mening sabrli ingliz tili o'qituvchisisan. Men bilan A2 darajasida suhbatlash, xatolarimni muloyim tuzat va yangi so'zlarni eslat."
    },
    {
      id: 7,
      num: "4.1",
      title: "Mukammal rezyume (CV) va ish qidirish sirlari",
      duration: "18 daq",
      category: "Qo'llash (Ish)",
      summary: "Tajribangizni professional biznes tilida ifodalab, maqsadli vakansiyaga 100% mos rezyume tayyorlash.",
      actionPrompt: "Mening tajribam quyidagicha... Ushbu vakansiya talablarini hisobga olib, rezyumemdagi yutuqlarimni kuchli natijalar bilan qayta tahrirlab ber."
    },
    {
      id: 8,
      num: "4.2",
      title: "Ofis ishlari: 3 soatlik Excel hisobotlari va xatlarni 10 daqiqada tugatish",
      duration: "20 daq",
      category: "Qo'llash (Ish)",
      summary: "Excel formulalarini avtomatik yozdirish, rasmiy taklif xatlari va hisobotlarni bir zumda shakllantirish.",
      actionPrompt: "Excelda 3 ta ustun bor: Sana, Bo'lim, Xarajat. Menga 'Marketing' bo'limining jami xarajatini hisoblovchi formulani va qanday kiritishni ko'rsat."
    },
    {
      id: 9,
      num: "5.1",
      title: "SMM va Kontent: 1 haftalik postlar va video ssenariylarni 20 daqiqada tuzish",
      duration: "22 daq",
      category: "Qo'llash (Daromad)",
      summary: "Telegram va Instagram uchun diqqatni tortuvchi sarlavha (Hook) va harakatga chaqiruv bilan kontent-reja.",
      actionPrompt: "Mening soham: Ayollar kiyimlari do'koni. 1 haftalik Instagram karusel postlar rejasini: Sarlavha, Asosiy fikr va CTA bilan jadvalda ber."
    },
    {
      id: 10,
      num: "5.2",
      title: "Mijozlar bilan savdo: 'Qimmat' degan e'tirozlarni muloyim yopish",
      duration: "20 daq",
      category: "Qo'llash (Savdo)",
      summary: "Narxni tushirmasdan, mahsulot keltiradigan foydani ko'rsatib savdoni muvaffaqiyatli yopish skriptlari.",
      actionPrompt: "Mijoz xizmatimizga 'Qimmat ekan' dedi. Unga narxni tushirmasdan qiymat ko'rsatuvchi 3 ta muloyim va ishonchli javob varianti yozib ber."
    },
    {
      id: 11,
      num: "6.1",
      title: "Didox va shartnomalar: 20 sahifalik hujjatdan penya xatarlarini topish",
      duration: "24 daq",
      category: "Qo'llash (Huquq)",
      summary: "B2B shartnomalardagi yashirin kunlik 0.5% penya tuzoqlarini 10 soniyada fosh qilish usullari.",
      actionPrompt: "Ushbu shartnoma matnidan faqat biz uchun xatarli bo'lgan bandlarni (penya, javobgarlik, to'lov muddati) jadval qilib chiqarib ber."
    },
    {
      id: 12,
      num: "6.2",
      title: "Gallyutsinatsiya: AI yolg'on gapirganda uni qanday fosh qilish mumkin?",
      duration: "16 daq",
      category: "Xavfsizlik",
      summary: "Model bilmagan joyini to'qib chiqarganini aniqlash va undan faqat aniq manbalar bilan ishlashni talab qilish.",
      actionPrompt: "Faqat quyidagi manbaga tayan. Agar matnda javob bo'lmasa, o'zingdan qo'shma, 'Manbada ma'lumot yo'q' deb ochiq ayt."
    },
    {
      id: 13,
      num: "7.1",
      title: "Maxfiylik va xavfsizlik: Kompaniya va shaxsiy sirlarni himoya qilish",
      duration: "18 daq",
      category: "Xavfsizlik",
      summary: "Bank kartalari, parollar va maxfiy ma'lumotlarni AI ga kiritmaslik va anonimlashtirish qoidalari.",
      actionPrompt: "Ushbu matndagi barcha shaxsiy ismlar va raqamlarni umumiy belgilarga almashtirib, xavfsiz holatga keltir."
    },
    {
      id: 14,
      num: "7.2",
      title: "30 kunlik AI odati: Kunlik 10 daqiqada amaliy natijaga erishish va Sertifikat",
      duration: "25 daq",
      category: "Sertifikat",
      summary: "Kundalik unumdorlik streaki, real keyslar bo'yicha imtihon topshirish va rasmiy sertifikat olish.",
      actionPrompt: "Men bugun AI ni kundalik ishimda qanday qo'lladim? 30 kunlik unumdorlik odatini shakllantirish bo'yicha menga shaxsiy chek-list tuz."
    }
  ],

  // 4. Prompt Lab uchun tayyor professional promptlar
  promptLab: [
    {
      id: "p1",
      title: "B2B Savdo E'tirozini Yopish",
      category: "Savdo",
      prompt: "Sen Toshkentdagi B2B xizmatlar bo'yicha eng tajribali savdo menejerisan. Mijoz: 'Sizning xizmatingiz bizga juda qimmatlik qiladi'. Ushbu e'tirozni qadriyat ko'rsatish, 3 oyda o'zini oqlashi va yumshoq savol bilan yopuvchi 3 ta turli javob varianti yozib ber.",
      tags: ["B2B", "Savdo", "E'tiroz"]
    },
    {
      id: "p2",
      title: "Uzum Market SEO Mahsulot Kartochkasi",
      category: "E-Commerce",
      prompt: "Mahsulot: Simsiz Bluetooth quloqchinlar. Uzum Market algoritmlari bo'yicha eng yuqori qidiruv beruvchi: 1) Aniq SEO sarlavha (60 belgi); 2) 5 ta asosiy afzallik bullet-point; 3) 15 ta ommabop kalit so'zlar ro'yxatini o'zbek tilida tuzib ber.",
      tags: ["Uzum", "SEO", "Marketplace"]
    },
    {
      id: "p3",
      title: "Didox Shartnoma Audit Tekshiruvi",
      category: "Huquq",
      prompt: "Quyidagi B2B yetkazib berish shartnomasi bandlarini O'zbekiston Fuqarolik Kodeksi talablari bo'yicha tekshir: Har bir banddagi yashirin xatarlarni (yuqori penya, bir tomonlama bekor qilish, noaniq to'lov muddatlari) jadval shaklida chiqar va xavfsiz tahrirni taklif et.",
      tags: ["Didox", "Huquq", "Audit"]
    },
    {
      id: "p4",
      title: "Instagram Carousel & SMM Post",
      category: "Marketing",
      prompt: "Mavzu: '2026-yilda har bir o'zbek tadbirkori bilishi shart bo'lgan 3 ta bepul AI vosita'. 7 slayddan iborat interaktiv Instagram karusel ssenariysini yoz: 1-slayd diqqatni tortuvchi sarlavha (Hook), 2-4 slaydlar amaliy keyslar, oxirgi slayd harakatga chaqiruv (CTA).",
      tags: ["SMM", "Instagram", "Marketing"]
    },
    {
      id: "p5",
      title: "Midjourney: Professional Mahsulot Fotosessiyasi",
      category: "visual",
      prompt: "Commercial studio product photography of a luxury perfume bottle, floating in air with subtle water splashes, soft cinematic studio lighting, minimalist dark background, hyper-realistic, 8k resolution, shot on 85mm lens --ar 16:9 --v 6.0",
      tags: ["Midjourney", "Visual", "Rasm"]
    },
    {
      id: "p6",
      title: "Kling AI & Runway: Matndan Video Ssenariysi",
      category: "visual",
      prompt: "Cinematic drone shot of an ancient turquoise dome of Samarkand at golden hour, warm sunlight reflections, smooth camera orbiting, ultra-realistic 4k, slow motion.",
      tags: ["Kling", "Runway", "Video"]
    }
  ],

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
