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
    },

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
        "id": 1,
        "num": "1.1",
        "title": "AI nima va u qanday yordamchi bo'la oladi? (Qo'rquvni yengish)",
        "duration": "10 daq",
        "category": "Boshlash",
        "summary": "AI dasturchilar uchun emas, oddiy insonlar uchun super-yordamchi. U qanday fikrlaydi va nimaga qodir?",
        "takeaway": "AI insonning o'rnini egallamaydi, lekin AI bilan qurollangan mutaxassis AI ishlatmaydiganlarni ortda qoldiradi.",
        "concept": "Ko'pchilik AI'ni faqat dasturchilar yoki IT mutaxassislar uchun deb o'ylaydi. Aslida esa ChatGPT, Claude yoki Gemini — bu sizga istalgan sohada (savdo, buxgalteriya, xatlar, tarjima) 24/7 xizmat qiluvchi, hech qachon charchamaydigan shaxsiy assistentdir. Siz unga qanchalik aniq vazifa bersangiz, natija shunchalik mukammal bo'ladi.",
        "bad_prompt": "Menga ishda yordam ber.",
        "good_prompt": "Sen tajribali biznes-maslahatchisan. Men kichik biznes egasiman. Menga bugun vaqtimni tejash uchun AI dan foydalanish mumkin bo'lgan 3 ta aniq jarayonni misollar bilan ko'rsat.",
        "practical_prompt": "Sen mening sabrli biznes-maslahatchisimsan. Mening soham: [Sohangizni yozing, masalan: Kiyim do'koni / Logistika]. Menga kundalik ishimda har kuni eng ko'p vaqt oladigan 3 ta jarayonni AI yordamida qanday tezlashtirish mumkinligini oddiy qadamlar bilan tushuntir.",
        "actionPrompt": "Sen mening sabrli maslahatchisimsan. Menga sun'iy intellekt mening kasbimda qanday 3 ta amaliy yordam bera olishini oddiy tilda aytib ber.",
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
        "duration": "12 daq",
        "category": "Boshlash",
        "summary": "Qaysi vosita qachon kerak? Qaysi biri bepul, qaysi biri internetdan qidiradi va qaysi biri hujjat o'qiydi?",
        "takeaway": "Internetdan yangi ma'lumot qidirishga — Perplexity; katta shartnoma yoki hujjat tahliliga — Claude; universal g'oyalar va matnlarga — ChatGPT; Google Docs/Gmail integratsiyasiga — Gemini!",
        "concept": "• ChatGPT (OpenAI): Universal assistent, g'oyalar yaratish, savdo skriptlari va kod yozishda 1-o'rinda.\n• Claude (Anthropic): Eng xushmuomala, tabiiy insondek yozadi, 100 sahifalik PDF hujjat va shartnomalarni 5 soniyada tahlil qiladi.\n• Gemini (Google): Google ekotizimi (Gmail, Docs, Drive) bilan bog'langan, eng katta kontekst oynasiga ega.\n• Perplexity AI: Google o'rnini bosuvchi AI qidiruv tizimi, har bir javobiga aniq manba (link) beradi.",
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
        "duration": "15 daq",
        "category": "O'rganish",
        "summary": "Nega oddiy savolga zerikarli javob qaytadi? AI ga aniq rol berish orqali natijani 5 barobar kuchaytirish.",
        "takeaway": "AIdan oddiy odamdek so'rasangiz, quruq javob olasiz. Unga aniq rol (Masalan: 10 yillik tajribali marketolog) bersangiz, natija 5 barobar chuqurlashadi!",
        "concept": "AI dunyodagi barcha ma'lumotlarni biladi. Agar unga 'menga post yoz' desangiz, u o'rtacha maktab o'quvchisi darajasida yozadi. Lekin 'Sen Toshkentdagi premium brendlar marketing direktorsan' deb rol bersangiz, u o'sha mutaxassisning lug'at boyligi va strategik fikrlashiga moslashadi.",
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
        "duration": "16 daq",
        "category": "O'rganish",
        "summary": "Mukammal so'rov formulasini o'rganamiz: Kim? Vaziyat nima? Natija qanday ko'rinishda bo'lsin?",
        "takeaway": "Mukammal prompt formulasi: ROL (Kim?) + KONTEKST (Vaziyat nima?) + FORMAT (Qanday ko'rinishda: jadval, ro'yxat, punktlar?).",
        "concept": "AI sizning miyangizdagi kontekstni ko'ra olmaydi. Agar unga kontekst (byudjet, maqsadli auditoriya, muddat) va natija shakli (jadval, bullet points) berilsa, qayta-qayta tuzatishga hojat qolmaydi.",
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
        "duration": "14 daq",
        "category": "Qo'llash (O'qish)",
        "summary": "Feynman texnikasi: Har qanday qiyin qonun, atama yoki kitobni 5 daqiqada sodda misollar bilan tushunish.",
        "takeaway": "Feynman texnikasi: Murakkab soliq, qonun yoki texnologiyani tushunish uchun AIdan uni oddiy analogiyalar va hayotiy misollar bilan tushuntirishni so'rang.",
        "concept": "Har qanday murakkab tushunchani (masalan, blokcheyn, EBITDA yoki yangi soliq kodeksi moddasini) oddiy do'kon yoki bozor misolida 2 daqiqada tushunib olish mumkin. AIdan '10 yoshli bolaga tushuntirgandek' deb so'rash — eng samarali usul.",
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
        "duration": "15 daq",
        "category": "Qo'llash (O'qish)",
        "summary": "Hech qanday uyalishsiz, sabrli AI o'qituvchi bilan kunlik 10 daqiqa jonli gaplashish vorkfloui.",
        "takeaway": "Hech qanday uyalishsiz, sabrli AI repetitor bilan kuniga 10 daqiqa yozishish yoki ovozli gaplashish orqali tildagi to'siqni yengasiz.",
        "concept": "ChatGPT ovozli rejimi (Voice Mode) yoki matnli suhbati orqali AIdan xatolaringizni muloyimlik bilan to'g'rilashni va yangi iboralarni o'rgatishni so'rashingiz mumkin. U sizni hech qachon masxara qilmaydi va charchamaydi.",
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
                    "text": "Correct mistakes politely",
                    "slot": "QOIDA"
                },
                {
                    "id": "t4",
                    "text": "Only IELTS 9.0 vocabulary",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "Hello! I am very happy to chat with you today! 😊\n\nLet's talk about your daily morning routine. What is the first thing you do after you wake up in the morning?\n\n*(Tip: Write your answer in simple English. If you make any mistakes, don't worry, I will gently help you correct them!)*"
    },
    {
        "id": 7,
        "num": "4.1",
        "title": "Mukammal rezyume (CV) va ish qidirish sirlari",
        "duration": "18 daq",
        "category": "Qo'llash (Ish)",
        "summary": "Tajribangizni professional biznes tilida ifodalab, maqsadli vakansiyaga 100% mos rezyume tayyorlash.",
        "takeaway": "Rezyumeda faqat vazifalarni emas, raqamlar va natijalarni ko'rsating (X ishni qildim ➔ Natijada daromad Y% ga oshdi).",
        "concept": "Ish beruvchilar va HRlar rezyumeni ko'rishga o'rtacha 6 soniya sarflaydi. AI sizning oddiy tajribangizni xalqaro standartdagi kuchli fe'llar va aniq natijalar bilan boyitib beradi.",
        "bad_prompt": "Mening rezyumemni chiroyli qilib ber.",
        "good_prompt": "Men savdo menejeriman. Mening quyidagi 2 yillik tajribamni raqamlar va yutuqlar bilan kuchaytirib, xalqaro kompaniya uchun 3 ta professional bullet-pointga aylantir.",
        "practical_prompt": "Mening kasbim: [Kasbingiz]. Mening hozirgi tajribam: [Tajribangizni 2-3 gapda yozing]. Ushbu tajribani xalqaro XYZ formatida (Vazifa + Harakat + Raqamli Natija) 3 ta kuchli bullet-point ko'rinishida qayta yozib ber.",
        "actionPrompt": "Mening tajribam quyidagicha... Ushbu vakansiya talablarini hisobga olib, rezyumemdagi yutuqlarimni kuchli natijalar bilan qayta tahrirlab ber.",
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
        "duration": "20 daq",
        "category": "Qo'llash (Ish)",
        "summary": "Excel formulalarini avtomatik yozdirish, rasmiy taklif xatlari va hisobotlarni bir zumda shakllantirish.",
        "takeaway": "Exceldagi qiyin formulalar (VLOOKUP, INDEX/MATCH) va makroslarni yodlash shart emas — AIdan so'rab 10 soniyada oling!",
        "concept": "Excel jadvalingizdagi ustun nomlarini AIdan qanday formula yozish kerakligini so'rasangiz, u tayyor formulani va qaysi katakka qanday qo'yishni batafsil ko'rsatadi.",
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
        "duration": "22 daq",
        "category": "Qo'llash (Daromad)",
        "summary": "Telegram va Instagram uchun diqqatni tortuvchi sarlavha (Hook) va harakatga chaqiruv bilan kontent-reja.",
        "takeaway": "Yaxshi postning 80% muvaffaqiyati — birinchi 3 soniyadagi diqqatni tortuvchi sarlavhada (Hook).",
        "concept": "AI orqali Instagram Reels, TikTok va Telegram kanallar uchun e'tiborni tortuvchi sarlavhalar, asosiy kontent va harakatga chaqiruv (CTA) bilan to'liq haftalik kontent-plan tuzish mumkin.",
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
                    "text": "Ayollar kiyimlari do'koni",
                    "slot": "AUDITORIYA"
                },
                {
                    "id": "t3",
                    "text": "Hook + Fikr + CTA",
                    "slot": "STRUKTURA"
                },
                {
                    "id": "t4",
                    "text": "Faqat narxlar ro'yxati",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "Instagram va Telegram uchun tayyor 1 kunlik viral post loyihasi:\n\n🎯 **Hook (Birinchi 3 soniya):** 'Ko'ylak tanlashda 90% ayollar yo'l qo'yadigan 1 ta katta xato!'\n💡 **Asosiy qism:** 'Rang mos kelgandek tuyuladi, lekin mato kunduzgi quyoshda o'zgaradi. Bugun biz paxta va ipak aralashmali matolarning 3 ta sirini ochamiz...'\n📢 **CTA (Harakatga chaqiruv):** 'O'zingizga mos razmerni bilish uchun izohlarda \"RAZMER\" deb yozing, katalogimizni yuboramiz!'"
    },
    {
        "id": 10,
        "num": "5.2",
        "title": "Mijozlar bilan savdo: 'Qimmat' degan e'tirozlarni muloyim yopish",
        "duration": "20 daq",
        "category": "Qo'llash (Savdo)",
        "summary": "Narxni tushirmasdan, mahsulot keltiradigan foydani ko'rsatib savdoni muvaffaqiyatli yopish skriptlari.",
        "takeaway": "'Qimmat' degani 'olmayman' degani emas, balki 'menga qiymatni to'liq tushuntirib ber' deganidir!",
        "concept": "Narxni tushirib chegirma berish shart emas. AIdan mahsulotning keltiradigan iqtisodiy foydasini ko'rsatuvchi 3 xil savdo skriptini olib foydalaning.",
        "bad_prompt": "Qimmat degan mijozga nima dey?",
        "good_prompt": "Biznes trening sotamiz. Narxi 1.5 mln so'm. Mijoz 'qimmat ekan' dedi. Unga narxni tushirmasdan, kurs o'zini qanday oqlashini ko'rsatuvchi 3 ta xushmuomala javob varianti yoz.",
        "practical_prompt": "Mening mahsulotim/xizmatim: [Mahsulot nomi] (Narxi: [Summa]). Mijoz menga: 'Juda qimmat, boshqa joyda arzonroq ekan' dedi. Unga mijozni hurmat qilgan holda qiymatni ko'rsatuvchi va savol bilan yakunlanuvchi 3 ta variant yozib ber.",
        "actionPrompt": "Mijoz xizmatimizga 'Qimmat ekan' dedi. Unga narxni tushirmasdan qiymat ko'rsatuvchi 3 ta muloyim va ishonchli javob varianti yozib ber.",
        "legoPuzzle": {
            "slots": [
                "E'TIROZ",
                "USLUB",
                "FORMAT"
            ],
            "tokens": [
                {
                    "id": "t1",
                    "text": "Juda qimmat degan e'tiroz",
                    "slot": "E'TIROZ"
                },
                {
                    "id": "t2",
                    "text": "Chegirmasiz qiymat ko'rsatish",
                    "slot": "USLUB"
                },
                {
                    "id": "t3",
                    "text": "3 ta yopuvchi skript",
                    "slot": "FORMAT"
                },
                {
                    "id": "t4",
                    "text": "Narxni 50% tushirish",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "Mijoz 'Qimmat' deganda chegirmasiz savdoni yopish skriptlari:\n\n1. 💎 **Kafolat bilan yopish:**\n*'Javohir aka, to'g'ri aytasiz, narx birinchi qarashda yuqoriroq ko'rinishi mumkin. Lekin bizning xizmatimiz 1 yillik bepul texnik kafolatni va xodimlaringizni to'liq o'qitishni o'z ichiga oladi.'*\n\n2. 📊 **Kunlik tejamkorlik hisobi:**\n*'Agar 1.5 mln so'mni 30 kunga bo'lsak, kuniga atigi 50,000 so'mga to'g'ri keladi. Bu esa xodimingiz yo'qotayotgan 3 soatlik qimmatli vaqtini to'liq tejaydi.'*\n\n3. 🤝 **Yumshoq savol bilan boshqaruvni olish:**\n*'Siz uchun aynan qaysi qismi qimmatlik qilyapti: boshlang'ich to'lovmi yoki xizmat hajmi? Keling, moslab ko'ramiz.'*"
    },
    {
        "id": 11,
        "num": "6.1",
        "title": "Didox va shartnomalar: 20 sahifalik hujjatdan penya xatarlarini topish",
        "duration": "24 daq",
        "category": "Qo'llash (Huquq)",
        "summary": "B2B shartnomalardagi yashirin kunlik 0.5% penya tuzoqlarini 10 soniyada fosh qilish usullari.",
        "takeaway": "Shartnomadagi kunlik 0.5% yoki 1% jarima (penya) tuzoqlarini AIdan 10 soniyada fosh qilib, biznesingizni yuz millionlab zarardan qutqaring!",
        "concept": "Shartnoma matnini Claude yoki ChatGPTga yuklab, faqat javobgarlik, penya va to'lov shartlarini jadval qilib chiqarishni so'rash orqali yuristlik xatarlarini bir zumda ko'rasiz.",
        "bad_prompt": "Shartnomani o'qib ber.",
        "good_prompt": "Ushbu ijara shartnomasi matnidan faqat ijarachi uchun xavfli bo'lgan bandlarni: penya miqdori, muddatdan oldin bekor qilish shartlari va javobgarlikni alohida ajratib ber.",
        "practical_prompt": "Quyidagi shartnoma matnini tahlil qil. Undagi biz uchun xatarli bo'lgan barcha bandlarni (ayniqsa penya foizi, jarimalar, bir tomonlama bekor qilish huquqi) aniq ko'rsatib ber:\n[Shartnoma matnini bu yerga qo'ying]",
        "actionPrompt": "Ushbu shartnoma matnidan faqat biz uchun xatarli bo'lgan bandlarni (penya, javobgarlik, to'lov muddati) jadval qilib chiqarib ber.",
        "legoPuzzle": {
            "slots": [
                "HUJJAT",
                "DIQQAT_MARKAZI",
                "FORMAT"
            ],
            "tokens": [
                {
                    "id": "t1",
                    "text": "Didox B2B shartnomasi",
                    "slot": "HUJJAT"
                },
                {
                    "id": "t2",
                    "text": "Penya va jarimalar",
                    "slot": "DIQQAT_MARKAZI"
                },
                {
                    "id": "t3",
                    "text": "Xatarlar xulosasi jadvali",
                    "slot": "FORMAT"
                },
                {
                    "id": "t4",
                    "text": "Barcha matnni tarjima qilish",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "⚠️ **Shartnomadagi yashirin moliyaviy xatarlar:**\n\n1. **9.1-band:** Yetkazib berish 1 kunga kechiksa, jami shartnoma summasining 1% miqdorida penya hisoblanadi (Standart 0.1% bo'lishi kerak, 10 barobar oshirilgan!).\n2. **12.3-band:** Buyurtmachi to'lovni 30 kungacha kechiktirsa, unga nisbatan hech qanday jarima belgilanmagan (Bir tomonlama tengsiz shart!).\n\n**Tavsiya:** Ushbu shartnomani imzolamasdan, penya miqdorini o'zaro tenglashtirish (har ikki tomonga kunlik 0.1%) talabi bilan qaytaring."
    },
    {
        "id": 12,
        "num": "6.2",
        "title": "Gallyutsinatsiya: AI yolg'on gapirganda uni qanday fosh qilish mumkin?",
        "duration": "16 daq",
        "category": "Xavfsizlik",
        "summary": "Model bilmagan joyini to'qib chiqarganini aniqlash va undan faqat aniq manbalar bilan ishlashni talab qilish.",
        "takeaway": "AI ishonch bilan yolg'on gapirishi mumkin (gallyutsinatsiya). Bunga yo'l qo'ymaslik uchun 'Faqat berilgan manbadan foydalan, bilmasang bilmayman deb ayt' qoidasini bering!",
        "concept": "Neyrotarmoqlar faktlarni eslab qolmaydi, balki keyingi so'zni ehtimollik bilan bashorat qiladi. Shu sababli muhim faktlar va raqamlarni doim tekshirish lozim.",
        "bad_prompt": "O'zbekistondagi 2025-yilgi qonun haqida ayt.",
        "good_prompt": "Faqat quyida keltirilgan rasmiy manba matniga asoslanib javob ber. Agar manbada ma'lumot bo'lmasa, o'zingdan taxmin qilma, 'Manbada keltirilmagan' deb aniq yoz.",
        "practical_prompt": "Quyidagi matn asosida savolimga javob ber. QAT'IY QOIDA: Faqat berilgan matndan foydalan. Agar javob matnda bo'lmasa, o'zingdan hech narsa to'qima, faqat 'Matnda bu ma'lumot yo'q' deb javob qaytar.\nMatn: [Matningiz]\nSavol: [Savolingiz]",
        "actionPrompt": "Faqat quyidagi manbaga tayan. Agar matnda javob bo'lmasa, o'zingdan qo'shma, 'Manbada ma'lumot yo'q' deb ochiq ayt.",
        "legoPuzzle": {
            "slots": [
                "QOIDA",
                "MANBA",
                "CHЕKLOV"
            ],
            "tokens": [
                {
                    "id": "t1",
                    "text": "Faqat berilgan matndan foydalan",
                    "slot": "QOIDA"
                },
                {
                    "id": "t2",
                    "text": "Rasmiy qonun hujjati",
                    "slot": "MANBA"
                },
                {
                    "id": "t3",
                    "text": "Bilmasang to'qima deb ayt",
                    "slot": "CHЕKLOV"
                },
                {
                    "id": "t4",
                    "text": "Erkin ijodiy taxmin qil",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "✅ **Faktik tahlil natijasi:**\n\nSiz taqdim etgan hujjat matnini to'liq ko'rib chiqdim.\n\n• **Savol:** 2026-yilgi yangi bojxona imtiyozlari.\n• **Javob:** Siz taqdim etgan manbada ushbu imtiyozlar haqida hech qanday ma'lumot keltirilmagan.\n\n*Qoidangizga binoan men o'zimdan hech qanday taxmin yoki uydirma fakt qo'shmadim. Iltimos, tegishli bojxona qarori matnini ilova qiling.*"
    },
    {
        "id": 13,
        "num": "7.1",
        "title": "Maxfiylik va xavfsizlik: Kompaniya va shaxsiy sirlarni himoya qilish",
        "duration": "18 daq",
        "category": "Xavfsizlik",
        "summary": "Bank kartalari, parollar va maxfiy ma'lumotlarni AI ga kiritmaslik va anonimlashtirish qoidalari.",
        "takeaway": "AI ga HECH QACHON mijozlarning pasport ma'lumotlari, bank karta raqamlari yoki kompaniya tijorat sirlarini kiritmang!",
        "concept": "Ma'lumotlarni kiritishdan oldin ularni anonimlashtirish kerak (Masalan: 'Toshmatov Ali' o'rniga 'Mijoz A', '120 mln so'm' o'rniga 'X summa').",
        "bad_prompt": "Kompaniyamizning 12456 raqamli maxfiy shartnomasini tekshir.",
        "good_prompt": "Men B2B shartnoma loyihasini tahlil qilmoqchiman. Barcha kompaniya nomlari va hisob raqamlari anonimlashtirilgan. Faqat yuridik mantig'ini tekshir.",
        "practical_prompt": "Ushbu matndagi barcha shaxsiy ismlarni [Mijoz 1], summalarni [X summa], kompaniya nomlarini [Kompaniya A] deb almashtirib, mantiqan to'g'rilab ber:\n[Matningiz]",
        "actionPrompt": "Ushbu matndagi barcha shaxsiy ismlar va raqamlarni umumiy belgilarga almashtirib, xavfsiz holatga keltir.",
        "legoPuzzle": {
            "slots": [
                "XAVFSIZLIK",
                "ALMASHTIRISH",
                "MAQSAD"
            ],
            "tokens": [
                {
                    "id": "t1",
                    "text": "Maxfiy ma'lumotlarni tozalash",
                    "slot": "XAVFSIZLIK"
                },
                {
                    "id": "t2",
                    "text": "Ismlarni [Mijoz A] deb o'zgartirish",
                    "slot": "ALMASHTIRISH"
                },
                {
                    "id": "t3",
                    "text": "Yuridik mantiqni tekshirish",
                    "slot": "MAQSAD"
                },
                {
                    "id": "t4",
                    "text": "Bank kartasi parolini yozish",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "🔒 **Anonimlashtirilgan xavfsiz shartnoma loyihasi:**\n\n'[Kompaniya 1]' (Ijara beruvchi) va '[Kompaniya 2]' (Ijarachi) o'rtasida tuzilgan shartnoma tahlil qilindi:\n\n• Barcha bank rekvizitlari, hisob raqamlari va shaxsiy telefonlar muvaffaqiyatli anonimlashtirildi.\n• Kompaniyangiz tijorat siri OpenAI/Claude serverlariga tushib qolish xavfi 0% ga tushirildi.\n• Endi ushbu matnni xohlagan AI modelida xavfsiz tahlil qilishingiz mumkin."
    },
    {
        "id": 14,
        "num": "7.2",
        "title": "30 kunlik AI odati: Kunlik 10 daqiqada amaliy natijaga erishish va Sertifikat",
        "duration": "25 daq",
        "category": "Sertifikat",
        "summary": "Kundalik unumdorlik streaki, real keyslar bo'yicha imtihon topshirish va rasmiy sertifikat olish.",
        "takeaway": "AI bu bir marta ko'rib qo'yiladigan o'yinchoq emas, bu kunlik tish yuvish kabi foydali odat. Har kuni 1 ta vazifangizni AI orqali yeching!",
        "concept": "30 kun davomida kuniga atigi 10 daqiqa AI dan foydalansangiz, oy oxirida ish unumdorligingiz 2 barobar oshganini va haftasiga 10-15 soat vaqtingiz tejalganini ko'rasiz.",
        "bad_prompt": "Menga maslahat ber.",
        "good_prompt": "Men buxgalterman. Keyingi 30 kun davomida har kuni 10 daqiqa sarflab AIdan professional foydalanish bo'yicha kundalik 30 kunlik reja tuzib ber.",
        "practical_prompt": "Mening kasbim: [Kasbingiz]. Menga keyingi 14 kun uchun har kuni 10 daqiqada bajariladigan, amaliy natija beruvchi kundalik AI mashg'ulotlari rejasi (Daily AI Habit Tracker) tuzib ber.",
        "actionPrompt": "Men bugun AI ni kundalik ishimda qanday qo'lladim? 30 kunlik unumdorlik odatini shakllantirish bo'yicha menga shaxsiy chek-list tuz.",
        "legoPuzzle": {
            "slots": [
                "ODAT",
                "VAQT",
                "NATIJA"
            ],
            "tokens": [
                {
                    "id": "t1",
                    "text": "Har kuni 1 ta amaliy vazifa",
                    "slot": "ODAT"
                },
                {
                    "id": "t2",
                    "text": "Kuniga atigi 10 daqiqa",
                    "slot": "VAQT"
                },
                {
                    "id": "t3",
                    "text": "30 kunda 2x ish unumdorligi",
                    "slot": "NATIJA"
                },
                {
                    "id": "t4",
                    "text": "Haftada 1 marta ko'rib qo'yish",
                    "slot": "DISTRACTOR"
                }
            ]
        },
        "simulatedAiResponse": "🎉 **30 Kunlik Shaxsiy AI Odat Tracker (GPTify Habit System):**\n\n• **1-Hafta:** Kunlik xatlar va Telegram xabarlarni ChatGPT orqali 3 barobar tezroq yozish.\n• **2-Hafta:** Exceldagi barcha qiyin formulalarni AIdan so'rab 1 daqiqada olish.\n• **3-Hafta:** B2B mijozlar e'tirozlariga tayyor savdo skriptlarini qo'llash.\n• **4-Hafta:** Katta shartnomalarni 10 soniyada xatarlarga tekshirish.\n\n🏆 Siz **AI Master** darajasiga yetdingiz! Rasmiy diplomga loyiqsiz!"
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
