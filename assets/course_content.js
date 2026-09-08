/**
 * GPTify Academy — Complete 14-Lesson Course Content
 * Curriculum: Amaliy Sun'iy Intellekt va B2B Avtomatlashtirish
 * Instructors: Shukhrat Iskandarov (Berlin) & Davlatbek Iskandarov (PhD, TDIU)
 * Fully Enriched: Time budgets, Deep-dive case studies, Interactive quizzes, Storyboards & Prompts
 */

const COURSE_DATA = {
  "1_1": {
    "id": "1_1",
    "module": "1-Modul: AI Asoslari & Modellar Tanlovi",
    "lessonNum": "1.1",
    "title": "1.1. LLM qanday fikrlaydi? (GPT-4o vs Claude 3.5 Sonnet vs Gemini)",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Modellar Anatomiyasi & Nazariya: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Grounding Prompt Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: ASOSIY TUSHUNCHA",
        "avatar": "🤖",
        "name": "AI Asoslari:",
        "quote": "Sun'iy intellekt insondek 'ong' yoki ma'lumotlar ombori emas — u navbatdagi eng to'g'ri so'zni (tokenni) ehtimollik nazariyasi bilan bashorat qiluvchi super-kalkulyatordir.",
        "tip": "💡 <b>Qoida:</b> Modelga qancha aniq kontekst bersangiz, uning to'g'ri token tanlash ehtimoli shuncha oshadi."
      },
      {
        "tag": "2 / 4-QADAM: KATTA XATO",
        "avatar": "❌",
        "name": "Foydalanuvchi Xatosi:",
        "quote": "\"Menga O'zbekiston soliq qonunchiligi bo'yicha 2026-yilgi yangi qarorni topib ber\" deb manbasiz umumiy savol berish.",
        "tip": "⚠️ <b>Oqibat:</b> Model bilmagan joyini to'qib chiqaradi (Hallucination) va soxta moddalarni haqiqatdek taqdim etadi."
      },
      {
        "tag": "3 / 4-QADAM: MODELLAR TANLOVI",
        "avatar": "🎯",
        "name": "Qaysi Model Qachon Kerak?",
        "quote": "<b>Claude 3.5 Sonnet:</b> B2B hujjatlar, kodlash va chuqur mantiq.<br><b>GPT-4o:</b> Audio, rasmlar va ijodiy marketing.<br><b>Gemini 1.5/2.0:</b> 100+ sahifalik kitoblar va yirik hisobotlar.",
        "tip": "⚖️ <b>Tavsiya:</b> B2B biznes va jiddiy tahlillar uchun har doim Claude 3.5 Sonnet ni tanlang."
      },
      {
        "tag": "4 / 4-QADAM: AMALIYOT",
        "avatar": "💎",
        "name": "Faktik Natija Formulari:",
        "quote": "\"Faqat men taqdim etgan hujjat asosida javob ber. Agar javob matnda bo'lmasa, o'zingdan to'qima va bilmayman deb yoz.\"",
        "tip": "🏆 <b>Yutuq:</b> Xatolik ehtimoli 99% ga kamayadi va biznesingiz xavfsiz bo'ladi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🎯 1-Qism: \"Next-Token Prediction\" Nima va Nega Model Inson Emas?</h4>\n            <p>\n              Ko'pchilik tadbirkorlar sun'iy intellektni xuddi Google kabi hamma narsani biluvchi internet-ensiklopediya deb o'ylashadi. Bu xato! Katta Til Modellari (LLM — Large Language Models) aslida <b>navbatdagi eng ehtimolli tokenni (so'z bo'lagini) bashorat qiluvchi</b> ehtimollik kalkulyatoridir.\n            </p>\n            <p>\n              Masalan: <i>\"O'zbekistonning poytaxti — ...\"</i> jumlasi kiritilganda, model miyasidagi milliardlab parametrlar tahlil qilinib, \"Toshkent\" so'zining ehtimolligi 99.4% deb topiladi va u chiqariladi. Agar siz modeldan u bilmaydigan noma'lum ichki hisobotingiz haqida so'rasangiz, u <i>\"bilmayman\"</i> deyish o'rniga, grammatik jihatdan eng ishonarli eshitiladigan <b>yolg'onni (hallucination)</b> to'qib chiqaradi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">📊 2-Qism: 2026-Yilgi Top 3 Model Taqqoslashi</h4>\n          <p>Biznesingizda qaysi modeldan foydalanish xarajat va aniqlikni belgilaydi:</p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">Claude 3.5 Sonnet (Anthropic)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                <b>Eng kuchli tomoni:</b> Mantiqiy fikrlash, B2B shartnomalar, Excel va dasturlash. O'zbekistondagi Didox hujjatlari va moliya auditida jahon chempioni.\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">GPT-4o (OpenAI)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                <b>Eng kuchli tomoni:</b> Multimodal imkoniyatlar (ovoz, audio transkripsiya, rasmlarni ko'rish), marketing va tezkor javoblar.\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--tg-blue);\">Gemini 1.5 Pro / 2.0 (Google)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                <b>Eng kuchli tomoni:</b> 1-2 million tokenlik ulkan kontekst oynasi. 500 sahifalik buxgalteriya kitoblarini birvarakayiga tahlil qilish.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Real Toshkent B2B Keysi (Halutsinatsiya Falokati)</h4>\n            <p>\n              Toshkentdagi ulgurji savdo korxonasi direktori ChatGPT bepul versiyasiga: <i>\"Yangi Soliq kodeksi bo'yicha keshbekka qanday chegirma beriladi?\"</i> deb savol berdi. Model O'zbekiston qonunida umuman mavjud bo'lmagan soxta \"18-modda, 3-qism\"ni to'qib chiqardi. Natijada korxona shartnomada xato band kiritib, 12 million so'm jarimaga uchradi.\n            </p>\n            <p>\n              <b>To'g'ri GPTify Yondashuvi (Grounding):</b> Modelga hech qachon ochiq savol bermang. Avval Soliq.uz yoki Didox'dan rasmiy qaror matnini ko'chirib o'tkazing va buyruq bering: <i>\"Faqat quyidagi matn doirasida javob ber. Agar javob matnda bo'lmasa, 'Ushbu ma'lumot taqdim etilgan matnda yo'q' deb javob qaytar.\"</i>\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Kompaniyangiz yillik shartnomalari va Didox hujjatlarini tahlil qilishda modelning yolg'on to'qib chiqarishini (hallucination) qanday qilib 99% ga kamaytirasiz?",
      "options": [
        "A) Modelga internetdan o'zi qidirib xulosa qilishini buyurish orqali.",
        "B) Aniq hujjat matnini taqdim etib, 'Faqat berilgan matn asosida javob ber, matnda yo'q narsani to'qima' cheklovini kiritish (Grounding) orqali.",
        "C) Savolni rus va ingliz tillarida bir vaqtda qayta-qayta takrorlash orqali."
      ],
      "correctIndex": 1,
      "explanation": "To'ppa-to'g'ri! 'Grounding' texnikasi modelni o'z ixtiyoriy fantaziyasidan mahrum qiladi va faqat siz taqdim etgan faktik hujjat doirasida javob berishga majburlaydi."
    },
    "notes": [
      "<b>Next-Token Prediction:</b> LLM inson kabi fikrlamaydi, balki statistik ehtimollik asosida so'zlarni ulaydi.",
      "<b>Claude 3.5 Sonnet:</b> B2B hujjatlar, shartnomalar va jadvallar tahlilida eng ishonchli model.",
      "<b>Grounding qoidasi:</b> 'Faqat taqdim etilgan matn doirasida ishla' cheklovi biznes xatarlarini nolga tushiradi."
    ],
    "downloadablePrompt": "Sen qat'iy faktlarga tayanuvchi korporativ tahlilchisan.\nQuyida senga kompaniyaning ichki nizomi berilgan.\nVAZIFA: Faqat va faqat taqdim etilgan matnga tayangan holda savolga javob ber.\nCHEKLOV: Agar savolning aniq javobi matnda mavjud bo'lmasa, hech narsani taxmin qilma yoki to'qima. Shunchaki: \"Ushbu ma'lumot taqdim etilgan hujjatda yo'q\" deb javob qaytar.",
    "homeworkTitle": "Topshiriq: Modelni o'z bilimi bilan cheklovchi xavfsiz tizimli prompt yozing",
    "homeworkDefault": "Sen professional korporativ arxivchisan. Senga kompaniya qoidalari taqdim etiladi. \nFaqat ushbu qoidalar asosida xodimlarning savollariga javob ber. \nHech qachon tashqi internet ma'lumotlaridan foydalanma va javobing oxirida hujjatning qaysi bandiga tayanganingni ko'rsat."
  },
  "1_2": {
    "id": "1_2",
    "module": "1-Modul: AI Asoslari & Modellar Tanlovi",
    "lessonNum": "1.2",
    "title": "1.2. Tokenlar, xotira va Context Window",
    "duration": "15 daqiqa",
    "timeBudget": "📖 Tokenizatsiya & Xotira Sirlari: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Chunking Prompt Amaliyoti: 6 daqiqa (JAMI: 15 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: TOKEN NIMA?",
        "avatar": "🔤",
        "name": "Token Anatomiyasi:",
        "quote": "AI matnni so'zlar emas, balki 'tokenlar' (bo'g'inlar va belgi qismlari) ko'rinishida o'qiydi. 100 ta inglizcha so'z ~130 tokenni tashkil etadi.",
        "tip": "🇺🇿 <b>O'zbek tili siri:</b> Lotin alifbosidagi 'sh', 'ch', 'o'' kabi harflar ingliz tiliga nisbatan 2-3 barobar ko'proq token yeydi."
      },
      {
        "tag": "2 / 4-QADAM: 'LOST IN THE MIDDLE'",
        "avatar": "📉",
        "name": "Katta Hujjatlar Xatosi:",
        "quote": "Modelga 60 varoqlik shartnomani birdaniga tashlasangiz, u boshini va oxirini yaxshi eslaydi, lekin o'rtadagi muhim shartlarni tushirib qoldiradi.",
        "tip": "⚠️ <b>Diqqat:</b> Bu ilmiy tilda 'Lost in the Middle' (O'rtada yo'qolish) fenomeni deb ataladi."
      },
      {
        "tag": "3 / 4-QADAM: CHUNKING YECHIMI",
        "avatar": "✂️",
        "name": "To'g'ri Texnika (Chunking):",
        "quote": "Katta hajmli ma'lumotlarni 3-5 betdan iborat mantiqiy bloklarga (chunks) bo'lib tahlil qildirish eng yuqori aniqlikni kafolatlaydi.",
        "tip": "💡 <b>AI Qoidasi:</b> Avval har bir bo'lim bo'yicha oraliq xulosa oling, so'ngra yakuniy tahlil yarating."
      },
      {
        "tag": "4 / 4-QADAM: KESH VA XARAJAT",
        "avatar": "💰",
        "name": "Prompt Caching:",
        "quote": "Kompaniya qoidalarini har safar qayta-qayta to'liq yuklamaslik uchun Prompt Caching ishlatiladi — bu API xarajatlarini 90% ga kamaytiradi!",
        "tip": "🏆 <b>Natija:</b> Ham javob olish tezligi 3 barobar oshadi, ham budjet tejaladi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🔤 1-Qism: Tokenlar Qanday Hisoblanadi va Nega O'zbek Tilida Xarajat Ko'proq?</h4>\n            <p>\n              LLM modellar bayt darajasidagi Byte-Pair Encoding (BPE) orqali matnni parchalaydi. Ingliz tilidagi eng ko'p ishlatiladigan so'zlar (masalan, <i>\"company\"</i>, <i>\"contract\"</i>) 1 ta butun tokenni tashkil qiladi.\n            </p>\n            <p>\n              Ammo o'zbek tilidagi lotin alifbosi so'zlari (masalan, <i>\"shartnoma\"</i>, <i>\"o'zgarishlar\"</i>, <i>\"qo'shimcha\"</i>) model xotirasida 3 dan 5 tagacha tokenga bo'linib ketadi. Natijada: 100 ta o'zbekcha so'z 250-300 tokenni iste'mol qiladi. Bu API orqali B2B botlar yaratganda xarajatlarni to'g'ri rejalashtirishni talab qiladi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">📉 2-Qism: \"Lost in the Middle\" Muammosi</h4>\n          <p>\n            Modellarning kontekst oynasi (Context Window) 128K dan 1M gacha bo'lishiga qaramay, Stenford universiteti tadqiqotlari shuni ko'rsatadiki: matn hajmi 20,000 tokendan oshganda, modelning matn markazidagi ma'lumotlarni eslab qolish aniqligi <b>50% dan ko'proq pasayadi</b>.\n          </p>\n          <p>\n            Buning oldini olishning eng samarali usuli — <b>Chunking (Mantiqiy Bo'laklash)</b> strategiyasidir:\n          </p>\n          <ul>\n            <li>Hujjatni 3-5 sahifalik mantiqiy boblarga ajrating.</li>\n            <li>Har bir bobdan faqat kerakli 3 ta asosiy faktni ajratib oling.</li>\n            <li>Ajratilgan faktlarni yakuniy xulosaga birlashtiring.</li>\n          </ul>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">⚡ 3-Qism: Prompt Caching Orqali 90% Mablag'ni Tejash</h4>\n            <p>\n              Agar korxonangizda har kuni mijozlarga javob beruvchi Telegram AI sotuvchi ishlasa, kompaniya katalogi (50 bet) har bir savolda modelga qayta yuboriladi. Anthropic va OpenAI tizimlaridagi <b>Prompt Caching</b> texnologiyasi katalog ma'lumotlarini server keshida saqlaydi.\n            </p>\n            <p>\n              Natijada har bir kiruvchi xabar uchun butun katalog to'lovi emas, balki faqat yangi kelgan mijoz savoli uchun haq to'lanadi. Bu oylik API hisobini $300 dan $30 ga tushirish imkonini beradi!\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Kompaniyangizning 70 sahifalik yirik shartnomasi va hisobotini AI orqali tahlil qilayotganda 'Lost in the Middle' xatosiga tushmaslik uchun qanday yo'l tutiladi?",
      "options": [
        "A) Hujjatni mantiqiy bloklarga (chunking) ajratib, har bir bobdan oraliq xulosa olgach, yakuniy tahlilni hosil qilish.",
        "B) Barcha 70 sahifani birdaniga bitta xabarda tashlab, modeldan 1 qatorda javob berishni so'rash.",
        "C) Shartnomani word faylida qisqartirib faqat 1-betini qoldirish."
      ],
      "correctIndex": 0,
      "explanation": "Ajoyib! Chunking yirik hujjatlardagi axborot yo'qolishining oldini oladi va tahlil aniqligini 95%+ darajada saqlaydi."
    },
    "notes": [
      "<b>O'zbek tili tokenizatsiyasi:</b> Lotin alifbosidagi maxsus belgilar ko'proq token sarflaydi, shuning uchun ixcham va aniq yozish muhim.",
      "<b>Lost in the Middle:</b> Hujjat markazidagi muhim faktlar unutilmasligi uchun matnni bo'laklarga ajratib tahlil qildiring.",
      "<b>Prompt Caching:</b> Qayta-qayta yuboriladigan ma'lumotlarni keshga olib, xarajatni 90% tejang."
    ],
    "downloadablePrompt": "Senga katta hajmdagi xom ma'lumot taqdim etilmoqda.\nVazifang matnni to'liq o'qib chiqib, uni 3 ta asosiy bosqichda tahlil qilish:\n1-bosqich: Matndagi barcha sanalar, shaxslar va moliyaviy summalarni jadvalga ajrat.\n2-bosqich: Har bir bo'lim bo'yicha 2 jumlalik eng muhim qarorlarni xulosala.\n3-bosqich: Rahbariyat uchun 5 banddan iborat yakuniy xulosa chiqar.",
    "homeworkTitle": "Topshiriq: Katta hajmli matndan ma'lumot yo'qotmasdan xulosa oluvchi chunking prompti",
    "homeworkDefault": "Sen professional ma'lumot arxitektorisan. Taqdim etilgan matn juda uzun bo'lgani sababli, undagi eng muhim qarorlarni boy bermaslik uchun matnni qadamma-qadam 3 qismga bo'lib tahlil qil va har bir qismning xulosasini alohida ko'rsat."
  },
  "1_3": {
    "id": "1_3",
    "module": "1-Modul: AI Asoslari & Modellar Tanlovi",
    "lessonNum": "1.3",
    "title": "1.3. Maxfiylik: Korporativ ma'lumotlarni himoyalash",
    "duration": "18 daqiqa",
    "timeBudget": "📖 Axborot Xavfsizligi & Yuridik Qoidalar: 8 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Anonimizatsiya Sandboxing: 8 daqiqa (JAMI: 18 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: KORPORATIV XAVF",
        "avatar": "🚨",
        "name": "Real Falokat Ssenariysi:",
        "quote": "Kompaniya hisobchisi barcha xodimlarning oylik maoshlari va mijozlar shartnomalarini oddiy bepul ChatGPT ga yukladi.",
        "tip": "⚠️ <b>Oqibat:</b> Bepul platformalar ushbu ma'lumotlarni modelni qayta o'qitish (training) uchun o'z serverlarida saqlab qoladi."
      },
      {
        "tag": "2 / 4-QADAM: OPT-OUT SOZLAMASI",
        "avatar": "🛡️",
        "name": "Zudlik Bilan Amalga Oshirish:",
        "quote": "Sozlamalarda 'Improve model for everyone / Training' opsiyasini o'chirib qo'yish shart yoki korporativ Team/Enterprise akkaunt ishlatish lozim.",
        "tip": "🔒 <b>Qoida:</b> API orqali yuborilgan ma'lumotlar OpenAI va Anthropic tomonidan o'qitishga olinmaydi."
      },
      {
        "tag": "3 / 4-QADAM: ANONIMIZATSIYA",
        "avatar": "🎭",
        "name": "Shaxsiy Ma'lumotlarni Yashirish:",
        "quote": "Hujjatni AIga tashlashdan oldin barcha telefon raqamlar, ismlar va bank rekvizitlarini 'Kompaniya A', 'Xodim 1' ko'rinishida almashtiring.",
        "tip": "💡 <b>AI Ko'rsatmasi:</b> Model tahlil uchun real ism-familiyani bilishi shart emas — unga faqat raqamlar va mantiq kerak."
      },
      {
        "tag": "4 / 4-QADAM: O'ZBEKISTON QONUNI",
        "avatar": "⚖️",
        "name": "Shaxsiy Ma'lumotlar Qonuni:",
        "quote": "O'zbekiston Respublikasining 'Shaxsiy ma'lumotlar to'g'risida'gi qonuniga binoan, fuqarolar pasport ma'lumotlarini ochiq AI tizimlariga kiritish taqiqlanadi.",
        "tip": "🏆 <b>Natija:</b> Kompaniyangiz yuridik jarimalar va obro' yo'qotishdan 100% himoyalanadi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🚨 1-Qism: Nega Bepul ChatGPT ga Ichki Moliyaviy Ma'lumotlarni Kiritib Bo'lmaydi?</h4>\n            <p>\n              Dunyo bo'yicha eng mashhur AI xavfsizlik insidentlaridan biri Samsung korxonasida yuz bergan: muhandislar yangi mikrochiplarning maxfiy dasturiy kodini bepul ChatGPT ga tekshirish uchun yuklashgan. Bir necha haftadan so'ng ushbu kod boshqa foydalanuvchilarning so'rovlarida qisman paydo bo'la boshlagan!\n            </p>\n            <p>\n              <b>Sabab:</b> Bepul servislar o'z foydalanish shartlarida (Terms of Service) foydalanuvchi kiritgan ma'lumotlardan modelni o'qitishda foydalanish huquqini saqlab qoladi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">⚖️ 2-Qism: O'zbekiston Qonunchiligi va PII Ma'lumotlar</h4>\n          <p>\n            O'zbekiston Respublikasining \"Shaxsiy ma'lumotlar to'g'risida\"gi Qonuni (O'RQ-547) ga ko'ra, O'zbekiston fuqarolarining shaxsiy ma'lumotlari (PINFL, pasport ma'lumotlari, yashash manzili, telefon raqamlari, bank hisob raqamlari) himoyalanishi shart.\n          </p>\n          <p>\n            Ushbu ma'lumotlarni xorijdagi ochiq AI serverlariga nazoratsiz kiritish yuridik javobgarlikka va yirik ma'muriy jarimalarga olib kelishi mumkin.\n          </p>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🛡️ 3-Qism: Data Sanitization (Anonimizatsiya Quvuri)</h4>\n            <p>\n              Toshkentdagi yetakchi klinika o'z mijozlari tahlillarini AI yordamida qayta ishlashdan oldin <b>Anonimizatsiya quvurini</b> yo'lga qo'ydi:\n            </p>\n            <div class=\"matrix-grid\">\n              <div class=\"matrix-col\">\n                <b style=\"color:#ef4444;\">Xom Ma'lumot:</b>\n                <p style=\"font-size:12px; color:#cbd5e1; margin:0;\">\n                  \"Rustam Karimov, Tel: +998901234567, Diagnoz: Qon bosimi 140/90, To'lov: 450,000 UZS\"\n                </p>\n              </div>\n              <div class=\"matrix-col\">\n                <b style=\"color:var(--teal-light);\">Anonimlashtirilgan Matn:</b>\n                <p style=\"font-size:12px; color:#cbd5e1; margin:0;\">\n                  \"[Mijoz_104], Diagnoz: Qon bosimi 140/90, To'lov: [Summa_X]\"\n                </p>\n              </div>\n            </div>\n            <p style=\"margin-top:10px;\">\n              Modelga faqat tibbiy mantiq kerak, insonning ismi va telefoni unga baribir tahlil uchun shart emas. Tahlil qaytib kelgach, ichki tizim [Mijoz_104] ni yana o'z joyiga qaytaradi.\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Kompaniyangiz B2B shartnomasidagi nozik tijoriy sirlarni xavfsiz tarzda AI orqali tekshirish uchun qaysi protokolga amal qilinishi kerak?",
      "options": [
        "A) Kompaniya nomi, bank INN, telefonlar va shaxslar ismini [Kompaniya_A], [INN_1] ko'rinishida anonimlashtirish va rasmiy API / Enterprise litsenziyasi orqali ishlash.",
        "B) Bepul ChatGPT ga hech qanday o'zgartirishsiz to'liq yuklash.",
        "C) Shartnomani ochiq Telegram guruhiga tashlab tekshirish."
      ],
      "correctIndex": 0,
      "explanation": "To'g'ri! Anonimizatsiya va rasmiy API litsenziyasi tijoriy sirlar va shaxsiy ma'lumotlar oqib ketishidan 100% himoya qiladi."
    },
    "notes": [
      "<b>Opt-Out qoidasi:</b> ChatGPT Settings $\rightarrow$ Data Controls $\rightarrow$ Chat History & Training: OFF qilib qo'yish lozim.",
      "<b>API xavfsizligi:</b> Rasmiy API interfeyslari orqali yuborilgan ma'lumotlar model xotirasiga o'tmaydi.",
      "<b>PII himoyasi:</b> Pasport, karta raqamlari, telefonlarni hech qachon ochiq promptga kiritmang."
    ],
    "downloadablePrompt": "Quyidagi B2B shartnoma matnini tekshirishdan oldin ANONIMIZATSIYA qil:\n1. Barcha real kompaniya nomlarini [Kompaniya_A] va [Kompaniya_B] ga almashtir.\n2. Barcha telefon raqamlarni [+998 90 000-00-00] ga almashtir.\n3. Barcha bank hisob raqamlari va INNlarni [INN_XXXXX] ga almashtir.\nFaqat shundan so'ng matndagi yuridik xavflarni tahlil qil.",
    "homeworkTitle": "Topshiriq: Hujjatdan maxfiy ma'lumotlarni tozalovchi anonimizatsiya prompti",
    "homeworkDefault": "Sen korporativ axborot xavfsizligi mutaxassisisan. Taqdim etilgan B2B shartnomadagi barcha shaxsiy ma'lumotlar, bank rekvizitlari va kompaniya rahbarlari ismlarini xavfsiz o'zgaruvchilarga almashtirib, xavflar tahlilini tayyorla."
  },
  "2_1": {
    "id": "2_1",
    "module": "2-Modul: Professional Prompt Muhandisligi",
    "lessonNum": "2.1",
    "title": "2.1. Frameworklar: ROLE + TASK + CONSTRAINTS (RTC)",
    "duration": "20 daqiqa",
    "timeBudget": "📖 RTC Frameworki & Konversiya Sirlari: 8 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Professional RTC Prompt Yozish: 10 daqiqa (JAMI: 20 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: 'YOMON PROMPT'",
        "avatar": "❌",
        "name": "Oddiy Buyruq:",
        "quote": "\"Menga mebel do'koni uchun chiroyli reklama posti yozib ber.\"",
        "tip": "📉 <b>Natija:</b> Umumiy, zerikarli, suvdan iborat matn keladi — hech kim o'qimaydi va sotmaydi."
      },
      {
        "tag": "2 / 4-QADAM: RTC FORMULASI",
        "avatar": "📐",
        "name": "Universal Framework:",
        "quote": "<b>R (Role):</b> Kim sifatida yozadi?<br><b>T (Task):</b> Aniq nima qilishi kerak?<br><b>C (Constraints):</b> Qat'iy qoidalar va cheklovlar nima?",
        "tip": "💡 <b>Qoida:</b> Modelga chegaralarni ko'rsatmasangiz, u har doim o'rtacha umumiy javob beradi."
      },
      {
        "tag": "3 / 4-QADAM: CHEKLOVLAR KUCHI",
        "avatar": "⚡",
        "name": "Cheklovlar (Constraints):",
        "quote": "\"Murakkab ilmiy atamalar ishlatma. 3 jumlada yoz. Oxirida faqat narx va Telegram havolasini qoldir.\"",
        "tip": "🎯 <b>Sir:</b> Cheklovlar qanchalik qat'iy bo'lsa, konversiya shunchalik yuqori bo'ladi."
      },
      {
        "tag": "4 / 4-QADAM: NATIJA",
        "avatar": "💎",
        "name": "10x Yuqori Natija:",
        "quote": "Mijozni birinchi jumlada ushlab qoluvchi, aniq narx ko'rsatilgan va darhol buyurtmaga undovchi yuqori konversiyali B2B matn!",
        "tip": "🏆 <b>Muvaffaqiyat:</b> Har qanday vazifa uchun ushbu RTC frameworkidan foydalaning."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">📐 1-Qism: Nega Oddiy Promptlar Faqat \"Suv\" Yozadi?</h4>\n            <p>\n              Agar siz AIga: <i>\"Menga yaxshi tijoriy taklif yozib ber\"</i> desangiz, u nima qilsin? Uning xotirasida millionlab takliflar bor — maktab inshosidan tortib ilmiy dissertatsiyagacha. Natijada u barcha uslublarning o'rtacha gibridini beradi: balandparvoz so'zlar, <i>\"Bizning maqsadimiz — mijozlarimizga quvonch ulashish\"</i> kabi hech kimga kerak bo'lmagan shiorlar.\n            </p>\n            <p>\n              Modelga nima kerakligini emas, balki <b>chegaralarni</b> aytish professional muhandislikning siri hisoblanadi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">🎯 2-Qism: RTC (Role, Task, Constraints) Anatomiyasi</h4>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">1. ROLE (Rol & Mutaxassislik)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Modelga qaysi doiradagi bilimlarni faollashtirish kerakligini aytadi: <i>\"Sen 10 yillik tajribaga ega, O'zbekiston B2B bozorida yetakchi savdo strategisan.\"</i>\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">2. TASK (Aniq Vazifa & Maqsad)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Kutilayotgan yakuniy natija: <i>\"Toshkentdagi restoran egalari uchun avtomatlashtirilgan AI menyu tizimining 3 ta asosiy foydasini bayon qil.\"</i>\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--tg-blue);\">3. CONSTRAINTS (Qat'iy Cheklovlar)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Hajm: 120 so'zdan oshmasin. Ohang: Do'stona va professional. Taqiq: 'Biz bozorda yetakchimiz' kabi arzon gaplarni ishlatma.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Real Taqqoslash (Tashkent Mebel Ishlab Chiqaruvchisi)</h4>\n            <p>\n              <b>Oddiy Prompt Natijasi:</b><br>\n              <i>\"Bizning sifatli mebellarimiz sizning xonadoningizga shinamlik va fayz bag'ishlaydi. Biz bilan bog'laning...\"</i> (Konversiya: 0.4%, hech kim o'qimadi).\n            </p>\n            <p style=\"margin-top:8px;\">\n              <b>RTC Prompt Natijasi:</b><br>\n              <i>\"Restoraningizda mehmonlar noqulay stullar tufayli tez ketib qolyaptimi? Ortopedik B2B mebellarimiz mehmonlarning o'tirish vaqtini 35 daqiqaga uzaytiradi, bu esa har bir stoldan o'rtacha chekni 22% ga oshiradi. 10 ta stoldan ortiq buyurtmaga bepul yetkazib berish faqat juma kunigacha.\"</i> (Konversiya: 4.8%, 18 ta buyurtma).\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "RTC formulasida 'Constraints' (Cheklovlar) bloki qanday asosiy vazifani bajaradi?",
      "options": [
        "A) Modelga umumiy falsafiy mulohaza yuritish erkinligini beradi.",
        "B) Matn hajmi, ohang, qat'iy taqiqlangan so'zlar va formatni belgilab, suvdan xoli yuqori konversiyali natija olishni ta'minlaydi.",
        "C) Modelning generatsiya tezligini sekinlashtiradi."
      ],
      "correctIndex": 1,
      "explanation": "Aynan to'g'ri! Cheklovlar — suvdan iborat gaplarni kesib tashlab, faqat aniq foyda va sotuvchi faktlarni qoldiruvchi filtrdir."
    },
    "notes": [
      "<b>Role (Rol):</b> Modelga aniq tajriba va kasbiy nuqtai nazarni beradi.",
      "<b>Task (Vazifa):</b> Aniq maqsad va kutilayotgan harakatni belgilaydi.",
      "<b>Constraints (Cheklovlar):</b> Matnni ixcham, qat'iy va suvdan toza qiladi."
    ],
    "downloadablePrompt": "ROLE: Sen yetakchi B2B xizmatlar kompaniyasining Bosh Marketing Direktori (CMO)san.\nTASK: Tashkentdagi logistika va omborxona egalari uchun AI orqali yuklarni saralash xizmatimizni taklif qiluvchi 3 ta qisqa Telegram post yoz.\nCONSTRAINTS: \n1. Umumiy shiorlardan qoch.\n2. Har bir postda aniq tejaladigan soat va pul ko'rsatilsin.\n3. Ohang professional, samimiy va Toshkent tadbirkorlari tiliga mos bo'lsin.",
    "homeworkTitle": "Topshiriq: RTC Framework asosida professional B2B taklif prompti yozing",
    "homeworkDefault": "ROLE: Sen 10 yillik B2B savdo bo'yicha maslahatchisan.\nTASK: Yirik ishlab chiqarish korxonasi rahbari uchun xodimlar malakasini oshiruvchi AI trening taklifini tayyorla.\nCONSTRAINTS: Maksimum 4 ta jumla bo'lsin, aniq ROI keltirilsin va bepul auditga chaqirilsin."
  },
  "2_2": {
    "id": "2_2",
    "module": "2-Modul: Professional Prompt Muhandisligi",
    "lessonNum": "2.2",
    "title": "2.2. Few-Shot va Chain-of-Thought texnikasi",
    "duration": "22 daqiqa",
    "timeBudget": "📖 Mantiqiy Zanjirlar & Namuna Strategiyasi: 8 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Few-Shot & CoT Sandboxing: 12 daqiqa (JAMI: 22 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: 'ZERO-SHOT' MUAMMOSI",
        "avatar": "❓",
        "name": "Namunasiz So'rov (Zero-Shot):",
        "quote": "Siz modelga: \"Mijoz sharhini tahlil qil\" dedingiz. Model har safar har xil usulda javob qaytaradi — standart yo'q.",
        "tip": "⚠️ <b>Muammo:</b> Notekis sifat va CRM ga kiritish qiyin bo'lgan chalkash format."
      },
      {
        "tag": "2 / 4-QADAM: FEW-SHOT TEXNIKASI",
        "avatar": "📋",
        "name": "2-3 Ta Ideal Namuna Ko'rsatish:",
        "quote": "Modelga so'rov oldidan 2 ta ideal namuna (Input $\\rightarrow$ Output) berasiz. Model siz kutgan aynan o'sha formatni 100% takrorlaydi.",
        "tip": "💡 <b>Qoida:</b> 10 ta tushuntirish berishdan ko'ra 2 ta yaxshi namuna ko'rsatish samaraliroq."
      },
      {
        "tag": "3 / 4-QADAM: CHAIN-OF-THOUGHT (CoT)",
        "avatar": "🧠",
        "name": "Qadamma-Qadam Fikrlash:",
        "quote": "\"Keling, buni qadam-baqadam ko'rib chiqamiz: 1. Asosiy muammoni aniqla, 2. Xatarni bahola, 3. Yakuniy yechimni taklif qil.\"",
        "tip": "🎯 <b>Mantiq siri:</b> Modelga oraliq fikrlash imkonini bersangiz, mantiqiy xatolar 80% ga kamayadi."
      },
      {
        "tag": "4 / 4-QADAM: B2B CRM INTEGRATSIYASI",
        "avatar": "🏆",
        "name": "Avtomatlashtirish:",
        "quote": "Har bir kiruvchi Telegram xabari avtomatik tarzda tahlil qilinib, aniq skoring bilan CRM tizimiga tushadi!",
        "tip": "🚀 <b>Natija:</b> Menejerlaringiz vaqti 5 barobar tejaladi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">📋 1-Qism: Zero-Shot vs Few-Shot (In-Context Learning)</h4>\n            <p>\n              <b>Zero-Shot</b> — bu modeldan oldindan hech qanday namuna bermasdan vazifani bajarishni so'rashdir. Masalan: <i>\"Mijozning ushbu xabarini tahlil qil\"</i>. Model nima muhimligini bilmagani uchun ba'zan uzun izoh, ba'zan qisqa so'z yozadi.\n            </p>\n            <p>\n              <b>Few-Shot</b> — bu promptning ichida modelga 2 yoki 3 ta ideal \"Kiruvchi ma'lumot $\\rightarrow$ Kutilgan natija\" juftligini ko'rsatishdir. Model inson kabi analogiya asosida o'rganadi (In-Context Learning) va keyingi barcha so'rovlarni aynan siz ko'rsatgan qolipda qaytaradi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">🧠 2-Qism: Chain-of-Thought (CoT) — Nega AI Shoshilmasligi Kerak?</h4>\n          <p>\n            Murakkab matematik, moliyaviy yoki yuridik savollarda modeldan to'g'ridan-to'g'ri yakuniy javob so'ralsa, u adashish ehtimoli 40-50% ga yetadi.\n          </p>\n          <p>\n            Chunki LLM navbatdagi tokenni o'zining avvalgi generatsiya qilgan tokenlari asosida chiqaradi. Agar unga avval qadamma-qadam mulohaza yuritish (Chain-of-Thought) buyurilsa, u har bir oraliq xulosani o'zi o'qib boradi va yakuniy xulosada <b>xato qilmaydi</b>.\n          </p>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Telegram Mijozlarini Tahlil Qiluvchi Few-Shot Shablon</h4>\n            <p>Quyidagi shablon real B2B korxonalarida kiruvchi leadlarni saralashda ishlatiladi:</p>\n            <pre style=\"background:rgba(0,0,0,0.5); padding:12px; border-radius:8px; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:#a7f3d0; overflow-x:auto;\">\nNAMUNA 1:\nMijoz: \"Assalomu alaykum, 50 ta ofis stoli kerak, hisob raqamga to'laymiz, narxi qancha?\"\nTahlil: Qiziqish = 95% (Issiq) | Byudjet = Katta | Harakat = Bosh hisobchiga Didox rekvizitlarini so'rash.\n\nNAMUNA 2:\nMijoz: \"Salom, shunchaki qiziqib ko'rdim, keyinroq yozarman.\"\nTahlil: Qiziqish = 20% (Sovuq) | Byudjet = Noma'lum | Harakat = 3 kundan keyin katalog yuborish.\n\nYANGI MIJOZ:\n{mijoz_xabari}\nTahlil:\n            </pre>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Murakkab moliyaviy hisob-kitob yoki mantiqiy shartnomaviy tahlil paytida modelning to'g'ri javob berish ehtimolini keskin oshiruvchi texnika qaysi?",
      "options": [
        "A) Modelga darhol faqat bitta yakuniy sonni aytishni qat'iy talab qilish.",
        "B) Chain-of-Thought: Modelga yakuniy xulosadan oldin har bir hisoblash va fikrlash qadamini ketma-ket yozishni buyurish.",
        "C) Prompt matnini bosh harflar bilan yozish."
      ],
      "correctIndex": 1,
      "explanation": "To'ppa-to'g'ri! Chain-of-Thought (CoT) texnikasi modelga mantiqiy zanjir hosil qilishga imkon beradi va oraliq xatolarni yo'qotadi."
    },
    "notes": [
      "<b>Few-Shot:</b> 2-3 ta namuna ko'rsatish orqali natija formatini 100% barqarorlashtirish mumkin.",
      "<b>Chain-of-Thought:</b> Qadamma-qadam mulohaza yuritish murakkab tahlillarda xatolikni yo'qotadi.",
      "<b>CRM integratsiyasi:</b> Bir xil standartdagi natijalar dasturiy tizimlarga oson ulanadi."
    ],
    "downloadablePrompt": "Senga quyida 2 ta namuna berilgan:\nNamuna 1:\nMijoz: \"Narxi qancha?\"\nKvalifikatsiya: {Bosqich: \"Narx so'rash\", Harakat: \"Ehtiyojni aniqlash\"}\n\nNamuna 2:\nMijoz: \"Shartnomani Didox orqali yuboring.\"\nKvalifikatsiya: {Bosqich: \"Yopilish\", Harakat: \"Rekvizit olish\"}\n\nHozirgi mijoz xabari: \"{xabar}\"\nYuqoridagi namunalar qolipi asosida qadamma-qadam mulohaza yuritib javob ber.",
    "homeworkTitle": "Topshiriq: CoT va Few-Shot uslubida B2B lead baholovchi prompt yarating",
    "homeworkDefault": "Sen B2B savdo tahlilchisisan. Quyida senga berilgan namunalar asosida qadamma-qadam mulohaza yuritib, yangi kelgan mijoz xabarining qiziqish darajasini (Issiq/Iliq/Sovuq) va keyingi zarur harakatni aniqla."
  },
  "2_3": {
    "id": "2_3",
    "module": "2-Modul: Professional Prompt Muhandisligi",
    "lessonNum": "2.3",
    "title": "2.3. Meta-Prompting: AI orqali prompt yozdirish",
    "duration": "16 daqiqa",
    "timeBudget": "📖 Meta-Prompting Arxitekturasi: 6 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Prompt Generatori Amaliyoti: 8 daqiqa (JAMI: 16 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: 'OQ QOG'OZ' QO'RQUVI",
        "avatar": "✍️",
        "name": "Foydalanuvchi:",
        "quote": "\"Menga murakkab AI bot kerak, lekin uni qanday so'zlar bilan to'g'ri tasvirlashni bilmayapman...\"",
        "tip": "💡 <b>Yechim:</b> Promptni o'zingiz noldan yozishingiz shart emas — buni sun'iy intellektning o'ziga topshiring!"
      },
      {
        "tag": "2 / 4-QADAM: META-PROMPTING",
        "avatar": "🤖",
        "name": "AI Prompt Injeneri:",
        "quote": "\"Sen jahon darajasidagi Prompt Engineer san. Menga mukammal tizimli prompt yozishimda yordam berasan.\"",
        "tip": "🎯 <b>Sir:</b> AI o'z qoidalarini insondan ko'ra yaxshiroq biladi."
      },
      {
        "tag": "3 / 4-QADAM: INTERAKTIV SAVOLLAR",
        "avatar": "❓",
        "name": "AI ning 3 Ta Savoli:",
        "quote": "\"Promptni yozishdan oldin menga ayting: 1. Maqsadli auditoriyangiz kim? 2. Ohang qanday bo'lsin? 3. Qanday taqiqlar bor?\"",
        "tip": "🔄 <b>Qayta Aloqa:</b> Aniq savollarga javob berish orqali 10 barobar kuchliroq prompt yaratiladi."
      },
      {
        "tag": "4 / 4-QADAM: YAKUNIY SHABLON",
        "avatar": "🏆",
        "name": "Professional Natija:",
        "quote": "Barcha cheklovlar, rollar va xatarlar hisobga olingan tayyor korporativ tizimli prompt tayyor!",
        "tip": "🚀 <b>Samaradorlik:</b> Soatlab o'ylanish o'rniga 3 daqiqada tayyor yechim."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🤖 1-Qism: Meta-Prompting Nima va Nega U Har Qanday Insondan Kuchli?</h4>\n            <p>\n              Ko'pchilik insonlar prompt yozayotganda o'zlarining barcha talablarini bir vaqtda ifodalab bera olmaydi: ba'zan cheklovlar esdan chiqadi, ba'zan format noaniq qoladi.\n            </p>\n            <p>\n              <b>Meta-Prompting</b> — bu AIni o'zini mukammal prompt yaratuvchi tizim arxitektori sifatida ishlatishdir. Model o'zining kognitiv tuzilishini, qanday so'zlar attensiyani kuchaytirishini va qanday cheklovlar xatarlarni kamaytirishini mukammal darajada biladi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">🔄 2-Qism: Clarification Loop (Aniqlashtiruvchi Halqa)</h4>\n          <p>\n            Eng kuchli meta-promptlarning asosi — modelga darhol prompt yozishga ruxsat bermaslikdir. Model avval sizga savollar berishi shart:\n          </p>\n          <ul>\n            <li><b>Kim uchun?</b> Yakuniy foydalanuvchi kim: rahbar, xaridor yoki texnik mutaxassis?</li>\n            <li><b>Qanday xatolardan qochish kerak?</b> Avvalgi sinovlarda qanday kamchiliklar kuzatilgan?</li>\n            <li><b>Format qanday?</b> JSON, Markdown jadvali yoki qisqa matn?</li>\n          </ul>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: GPTify Universal Meta-Prompt Formulari</h4>\n            <p>Quyidagi tizimli ko'rsatmani ChatGPT yoki Claude ga yuboring va istalgan biznesingiz uchun prompt yasattiring:</p>\n            <pre style=\"background:rgba(0,0,0,0.5); padding:12px; border-radius:8px; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:#a7f3d0; overflow-x:auto;\">\nSen dunyodagi eng tajribali AI Prompt Engineer san.\nMening maqsadim: {g'oyangizni bir jumlada yozing}\n\nVAZIFA:\n1. Darhol prompt yozma!\n2. Ushbu promptni jahon darajasida mukammal qilish uchun menga 3 ta eng muhim aniqlashtiruvchi savol ber.\n3. Men javob berganimdan so'ng, Role-Task-Constraints formatida to'liq professional tizimli promptni taqdim et.\n            </pre>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Meta-prompting texnikasida modeldan yuqori aniqlikdagi prompt olishning eng muhim qoidasi nima?",
      "options": [
        "A) Modelga darhol birinchi sekunddayoq tayyor prompt yozishni buyurish.",
        "B) Modelga prompt yozishdan oldin vazifani chuqurlashtiruvchi 3-4 ta aniqlashtiruvchi savol berishni va shundan so'ngгина yozishni buyurish.",
        "C) Har doim faqat bitta so'zli buyruqlar berish."
      ],
      "correctIndex": 1,
      "explanation": "To'g'ri! Savol-javob halqasi (Clarification Loop) yashirin talablar va cheklovlarni yuzaga chiqaradi va natijada ideal prompt hosil bo'ladi."
    },
    "notes": [
      "<b>Meta-Prompting:</b> Sun'iy intellektdan boshqa sun'iy intellektlar uchun ko'rsatma yozishda foydalanish.",
      "<b>Clarification Loop:</b> Model sizga savol berishi orqali kontekst to'liqligini ta'minlaydi.",
      "<b>Tezlik:</b> Noldan o'ylanish o'rniga 3 daqiqada tayyor korporativ prompt yaratish imkoni."
    ],
    "downloadablePrompt": "Sen professional Prompt Arxitektorisan.\nMening maqsadim: Kompaniyamiz sotuvchilari uchun mijozlar e'tirozini yopuvchi bot yaratish.\nPrompt yozishdan oldin, menga maqsadli auditoriya, xizmat narxi va kompaniya haqida 3 ta aniq savol ber.\nJavobimdan so'ng to'liq tizimli prompt shakllantir.",
    "homeworkTitle": "Topshiriq: O'z sohangiz uchun Meta-prompt yordamida mukammal tizimli prompt yarating",
    "homeworkDefault": "Sen Bosh Prompt Arxitektorisan. Menga korxonamizdagi hisob-kitoblarni tekshiruvchi yordamchi uchun tizimli prompt yaratishim kerak. Ishni boshlashdan oldin menga 3 ta eng muhim savolni ber."
  },
  "3_1": {
    "id": "3_1",
    "module": "3-Modul: B2B Savdo & Telegram Botlar",
    "lessonNum": "3.1",
    "title": "3.1. Narx e'tirozlarini 100% yopuvchi skriptlar",
    "duration": "25 daqiqa",
    "timeBudget": "📖 Nazariya & Tahlil: 8 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Amaliy topshiriq: 15 daqiqa (JAMI: 25 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: MIJOZ E'TIROZI",
        "avatar": "👤",
        "name": "Mijoz (Toshkent korxonasi):",
        "quote": "\"Aka, taklifingiz juda yaxshi, lekin 18 million juda qimmat! 20% skidka qilib 14.5 million qilib bering, bugun pulni o'tkazamiz...\"",
        "tip": "⚠️ <b>Xavf:</b> Agar bu vaziyatda narxni tushirsangiz, mijoz xizmat sifatiga shubha bilan qaray boshlaydi va marjangiz 30% yo'qoladi."
      },
      {
        "tag": "2 / 4-QADAM: AN'ANAVIY XATO",
        "avatar": "❌",
        "name": "Tajribasiz Sotuvchi Javobi:",
        "quote": "\"Mayli, xo'jayin bilan gaplashdim, faqat siz uchun 15 millionga kelishamiz...\"",
        "tip": "📉 <b>Natija:</b> Mijoz 'Demak bular boshida narxni oshirib aytgan ekan' deb o'ylaydi va yana 1 million tushirishni so'raydi."
      },
      {
        "tag": "3 / 4-QADAM: GPTIFY AI FORMULASI (VALUE STACKING)",
        "avatar": "🤖",
        "name": "GPTify AI Savdo Strategi:",
        "quote": "\"Taklif narxi sifat kafolati va aniq KPI natijalariga bog'langan. Narxni tushira olmaymiz, lekin sizga 1 oylik bepul VIP texnik nazorat va xodimlar uchun AI master-klassini sovg'a qilamiz. Bu bonus faqat bugun imzolansa amal qiladi!\"",
        "tip": "💡 <b>AI Qoidasi:</b> Xaridor narxni emas, tavakkalchilikni kamaytirishni xohlaydi. Bepul o'qitish va kafolat narxni saqlab qoladi."
      },
      {
        "tag": "4 / 4-QADAM: G'ALABA & BITIM",
        "avatar": "💎",
        "name": "Mijozning Yakuniy Roziligi:",
        "quote": "\"Ajoyib! Xodimlarni o'qitish va 1 oylik yordam aynan bizga kerak edi. Shartnomani 18 millionga tayyorlang, dushanba Didox orqali imzolaymiz!\"",
        "tip": "🏆 <b>G'alaba:</b> Narx to'liq 100% saqlandi, marja yo'qotilmadi va mijoz uzoq muddatli sodiq hamkorga aylandi!"
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🎯 1-Qism: Nega Xaridor Chegirma So'raydi? (Muzokara Psixologiyasi)</h4>\n            <p>\n              O'zbekiston B2B bozorida 85% tadbirkorlar va rahbarlar chegirma so'rashining sababi <b>pul yo'qligi emas</b>. Ularning maqsadi — muzokarada \"g'alaba qozonish\" va investitsiya xavfini kamaytirish. \n            </p>\n            <p>\n              Agar siz mijozning birinchi so'rovidayoq narxni 20% tushirsangiz (masalan, 18M UZS dan 14.5M UZS ga), mijoz miyasida quyidagi 3 ta halokatli signal paydo bo'ladi:\n            </p>\n            <ul>\n              <li><b>\"Bular boshida narxni asossiz oshirib aytgan ekan.\"</b> (Ishonch yo'qoladi).</li>\n              <li><b>\"Demak yana 1-2 million tushirish mumkin, qattiqroq bosish kerak.\"</b> (Muzokara yana 2 haftaga cho'ziladi).</li>\n              <li><b>\"Bu xizmatning o'zi aslida unchalik qimmat turmas ekan.\"</b> (Qadr-qimmat o'ladi).</li>\n            </ul>\n          </div>\n\n          <h4 style=\"color:#fff;\">🛠️ 2-Qism: \"Value Stacking\" Formulasining 3 Ustuni</h4>\n          <p>\n            GPTify metodologiyasi bo'yicha narx e'tirozini yopish narxni tushirish bilan emas, balki <b>Qo'shimcha Qiymat Qatlamlarini (Value Stacking)</b> kiritish orqali amalga oshiriladi:\n          </p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">1. Narxni Qat'iy Himoya Qilish</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\"Narximiz xizmat sifati va kafolatiga bog'langan, shuning uchun narx qat'iy.\"</p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">2. Xatarni Kamaytiruvchi Bonus</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">Narx o'rniga 1 oylik VIP yordam yoki 3 ta xodimni bepul o'qitishni qo'shib berish.</p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--tg-blue);\">3. Shoshilinchlik (Urgency)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\"Ushbu bonus faqat shartnoma bugun imzolanib, avans o'tkazilsa amal qiladi.\"</p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Real Tashkent Keysi (18,000,000 UZS lik Shartnoma)</h4>\n            <p>\n              Toshkentdagi distribyutorlik korxonasi direktori bilan uchrashuvda mijoz: <i>\"Boshqa dasturchilar 12 millionga qilib beramiz deyapti, sizda nega 18 million?\"</i> deb so'radi.\n            </p>\n            <p>\n              <b>GPTify AI Savdo Yondashuvi:</b><br>\n              <i>\"Tushunaman, Jamshid aka. Bozorda 10 millionga ham qilib beradiganlar bor, lekin 2 haftadan keyin bot to'xtab qolsa yoki mijozlaringiz so'roviga xato javob bersa, yo'qotishingiz 50 milliondan oshadi. Bizning narximizga 6 oylik uzluksiz texnik kafolat, Didox e-hujjatlari va xodimlaringiz uchun amaliy trening kiritilgan. Narxni tushira olmaymiz, biroq bugun shartnoma tuzsak, sotuv bo'limingizga bepul SMM generatsiya modulini ham ulab beramiz.\"</i>\n            </p>\n            <p style=\"margin-top:8px; color:var(--teal-light); font-weight:700;\">\n              Natija: Jamshid aka narx masalasini boshqa ochmadi va shu kuni Didox orqali 18,000,000 UZS lik to'liq shartnomani imzoladi!\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Mijoz sizga: 'Taklifingiz yaxshi, lekin byudjetimiz kamroq. 20% arzonlashtirib bering' deganida eng to'g'ri strategiya qaysi?",
      "options": [
        "A) Darhol rozi bo'lib, mijozni yo'qotmaslik uchun 20% chegirma berish.",
        "B) Narxni qat'iy saqlab, uning o'rniga xavfni kamaytiruvchi bepul 1 oylik VIP yordam yoki xodimlarni o'qitishni bonus qilib berish.",
        "C) 'Qimmat bo'lsa boshqalardan oling' deb suhbatni to'xtatish."
      ],
      "correctIndex": 1,
      "explanation": "Ajoyib va to'g'ri! Narxni tushirish ishonchni o'ldiradi. 'Value Stacking' orqali qiymatni oshirish esa marjani 100% saqlab, mijozga g'alaba hissini beradi."
    },
    "notes": [
      "<b>Narxni Hech Qachon Tushirmang:</b> Narxni tushirish xaridor miyasida sifatga shubha uyg'otadi.",
      "<b>Qiymatni Oshirish Qoidasi:</b> Chegirma berish o'rniga xaridorning xavfini kamaytiruvchi bepul 1 oylik VIP yordam yoki xodimlarni o'qitishni qo'shib bering.",
      "<b>Tezkor Rozilik Mexanizmi:</b> Bonus taklifi faqat shartnoma <b>bugun</b> imzolangan taqdirdagina amal qilishini ko'rsating."
    ],
    "downloadablePrompt": "Sen tajribali B2B muzokara rahbarisan. \nMijoz {chegirma_foizi}% chegirma talab qildi.\nVazifang: \n1. Narx sifat va kafolatga to'liq mos ekanini xushmuomalalik bilan tushuntir.\n2. Chegirma o'rniga 1 oylik bepul texnik yordam va jamoa treningini qo'shib ber.\n3. Ushbu bonus faqat shartnoma BUGUN imzolangan taqdirdagina amal qilishini ta'kidla.\nOhang: Ishonchli, qat'iy, do'stona.",
    "homeworkTitle": "Topshiriq: Mijoz 20% Chegirma Talab Qilganda Bitimni Yopuvchi Prompt Yozing",
    "homeworkDefault": "Sen yetakchi B2B konsalting sotuv rahbarisan. Mijoz 20% chegirma so'raganda xushmuomalalik bilan narx sifat va natijani kafolatlashi sababli qat'iy ekanini tushuntir. Buning o'rniga, uning xatarlarini nolga tushirish uchun 1 oylik bepul VIP texnik nazorat va xodimlar uchun AI vorkshopini sovg'a sifatida qo'shib ber. Faqat bugun imzolansa amal qilishini ta'kidla."
  },
  "3_2": {
    "id": "3_2",
    "module": "3-Modul: B2B Savdo & Telegram Botlar",
    "lessonNum": "3.2",
    "title": "3.2. Telegram & Instagram AI savdo botini ulash",
    "duration": "30 daqiqa",
    "timeBudget": "📖 Bot Arxitekturasi & Handoff: 10 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Intent & Prompt Sandboxing: 18 daqiqa (JAMI: 30 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: TUNGI SO'ROVLAR",
        "avatar": "🌙",
        "name": "Mijoz Kechasi Soat 23:40 da:",
        "quote": "\"Assalomu alaykum, sizlarda 100 kishilik korporativ trening bormi? Narxi va sanasini bilmoqchi edim.\"",
        "tip": "⚠️ <b>Muammo:</b> Menejerlar uxlayapti. Ertalab soat 9:00 gacha mijoz raqobatchidan sotib oladi."
      },
      {
        "tag": "2 / 4-QADAM: 24/7 AI JAVOBI",
        "avatar": "⚡",
        "name": "GPTify Savdo Boti:",
        "quote": "\"Vaalaykum assalom! Ha, 100 kishilik maxsus B2B modulimiz mavjud. Jamoangiz uchun mos dasturni 1 daqiqada taqdim etishim uchun menga faoliyatingiz sohasini yozib yuboring.\"",
        "tip": "💡 <b>Tezlik:</b> 10 soniyada berilgan javob bitim yopilish ehtimolini 7 barobar oshiradi."
      },
      {
        "tag": "3 / 4-QADAM: HAND-OFF (INSONGA TOPSHIRISH)",
        "avatar": "🤝",
        "name": "Trigger Ishga Tushdi:",
        "quote": "Mijoz: \"Biz Didox orqali shartnoma qilamiz, ertaga uchrashuv belgilaylik\". Bot darhol bosh menejer Telegramiga xabar yuboradi.",
        "tip": "🎯 <b>Qoida:</b> AI to'lov va shartnoma bosqichiga kelganda suhbatni jonsiz davom ettirmay, tirik mutaxassisga uzatishi shart."
      },
      {
        "tag": "4 / 4-QADAM: BITIM & CRM",
        "avatar": "🏆",
        "name": "Ertalabki Natija:",
        "quote": "Ertalab soat 9:00 da menejer tayyor kelishilgan uchrashuv va Didox rekvizitlari bilan ish boshlaydi.",
        "tip": "🚀 <b>G'alaba:</b> 0 ta yo'qotilgan lead va to'liq avtomatlashgan savdo voronkasi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🤖 1-Qism: Telegram AI Savdo Boti Qanday Ishlaydi?</h4>\n            <p>\n              O'zbekistonda biznesning 90% muloqoti Telegram orqali o'tadi. Oddiy tugmali botlar (masalan: 1-tugma, 2-tugma) bugungi kunda mijozlarni asabiylashtiradi, chunki mijoz erkin matn yoki ovozli xabar yozishni afzal ko'radi.\n            </p>\n            <p>\n              Zamonaviy LLM-bot uch bosqichda ishlaydi:\n            </p>\n            <ul>\n              <li><b>Intent Detection (Niyatni aniqlash):</b> Mijoz narx so'rayaptimi, shikoyat qilyaptimi yoki shartnoma imzolamoqchimi?</li>\n              <li><b>Knowledge Retrieval (Bilimlar bazasi):</b> Kompaniyangizning ichki PDF va Word qo'llanmasidan aniq faktni topish.</li>\n              <li><b>Action Execution (Harakat):</b> Telefon raqamini olish, CRM ga yozish yoki Click/Payme ssilkasini shakllantirish.</li>\n            </ul>\n          </div>\n\n          <h4 style=\"color:#fff;\">🤝 2-Qism: \"Human-in-the-Loop\" va Hand-off Triggerlari</h4>\n          <p>\n            Eng katta xato — AIni butunlay nazoratsiz qoldirib, hamma narsani unga ishonib topshirishdir. Professional arxitekturada quyidagi 3 ta holatda AI darhol suhbatni tirik insonga uzatishi (Hand-off) lozim:\n          </p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:#ef4444;\">1. Salbiy Hissiyot / Shikoyat</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">Mijoz xizmatdan norozi bo'lsa, AI bahslashmasdan uzr so'rab sifat bo'limiga uzatadi.</p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">2. Katta Byudjetli Bitim</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">Mijoz: \"Bizga 500 ta litsenziya kerak\" deganida darhol B2B savdo direktoriga bildirishnoma boradi.</p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">3. Didox & Yuridik Hujjatlar</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">Rekvizitlar va shartnoma tuzish bosqichida inson yurist tasdig'i talab etiladi.</p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: O'zbekiston Bozorida Konversiyani Oshiruvchi Tizimli Prompt</h4>\n            <p>\n              Modelga nafaqat savollarga javob berish, balki <b>har bir xabar oxirida mijozni navbatdagi qadamga yetaklovchi savol</b> berish buyuriladi:\n            </p>\n            <p style=\"font-style:italic; color:#cbd5e1;\">\n              \"Noto'g'ri: Kurs narxi 2 million so'm.<br>\n              To'g'ri: Kursimiz narxi 2 million so'm bo'lib, unga barcha amaliy shablonlar va shaxsiy mentorlik kiritilgan. Siz qaysi soha bo'yicha bot yaratmoqchisiz, sizga mos amaliy misolni ko'rsataymi?\"\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Telegram AI savdo boti faoliyatida 'Hand-off' (suhbatni insonga uzatish) qaysi vaziyatda darhol ishga tushishi shart?",
      "options": [
        "A) Mijoz salomlashganda.",
        "B) Mijoz jiddiy norozilik bildirib shikoyat qilganda yoki Didox orqali yirik shartnoma tuzish bosqichiga yetganda.",
        "C) Mijoz oddiy ish vaqtini so'raganda."
      ],
      "correctIndex": 1,
      "explanation": "To'g'ri! Shikoyatlar va yirik moliyaviy bitimlar insoniy munosabat va vakolat talab qiladi, shuning uchun AI darhol xabarni boshqaruvchiga uzatishi lozim."
    },
    "notes": [
      "<b>24/7 Tezkorlik:</b> Dastlabki 5 daqiqada berilgan javob savdo ehtimolini 7 barobar oshiradi.",
      "<b>Hand-off qoidasi:</b> Shikoyat va yirik shartnomalarda suhbat avtomatik tirik insonga topshirilishi shart.",
      "<b>Savol bilan yakunlash:</b> Har bir javob mijozni keyingi qadamga undovchi ochiq savol bilan tugashi kerak."
    ],
    "downloadablePrompt": "Sen B2B kompaniyasining Telegramdagi rasmiy AI maslahatchisisan.\nQOIDALAR:\n1. Javoblaring samimiy, do'stona va professional bo'lsin.\n2. Har bir javob oxirida mijoz ehtiyojini aniqlovchi 1 ta ochiq savol ber.\n3. Agar mijoz 'shartnoma', 'Didox' yoki 'shikoyat' so'zlarini ishlatsa, darhol 'Sizga mas'ul rahbarimiz bog'lanishi uchun telefon raqamingizni qoldiring' deb yoz va [HANDOFF_REQUIRED] tegi bilan tugat.",
    "homeworkTitle": "Topshiriq: Hand-off triggeriga ega Telegram AI sotuvchi promptini yozing",
    "homeworkDefault": "Sen Toshkentdagi logistika kompaniyasining Telegram AI menejerisan. Mijozlarning narx va xizmatlar bo'yicha savollariga javob ber, lekin shartnoma tuzish va chegirma so'ralganda darhol bosh sotuvchiga yo'naltiruvchi bildirishnoma tayyorla."
  },
  "3_3": {
    "id": "3_3",
    "module": "3-Modul: B2B Savdo & Telegram Botlar",
    "lessonNum": "3.3",
    "title": "3.3. Sovuq leadlarni isitish va CRM ga tushirish",
    "duration": "18 daqiqa",
    "timeBudget": "📖 Sovuq Leadlar & Voronka Sirlari: 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Re-engagement Prompt Sandboxing: 9 daqiqa (JAMI: 18 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: 'O'LIK' BAZA",
        "avatar": "🗄️",
        "name": "Kompaniya CRM Bazasi:",
        "quote": "Bazangizda 2,500 ta raqam bor — ular 3 oy oldin narx so'rab, keyin jim bo'lib ketgan 'sovuq' mijozlardir.",
        "tip": "📉 <b>Muammo:</b> Ularga yana oddiy reklama tashlasangiz, 90% sizni 'Spam'ga tiqib bloklaydi."
      },
      {
        "tag": "2 / 4-QADAM: ISITISH STRATEGIYASI",
        "avatar": "🔥",
        "name": "Qiymat Berish Birinchi:",
        "quote": "\"Hech narsa sotmang. Ularga o'z sohalari bo'yicha yangi tejamkorlik keysi yoki bepul qulay hisob-kitob jadvalini yuboring.\"",
        "tip": "💡 <b>Psixologiya:</b> Bepul foyda olgan inson sizga minnatdorlik bilan qayta javob yozadi."
      },
      {
        "tag": "3 / 4-QADAM: AI PERSONALIZATSIYASI",
        "avatar": "🎯",
        "name": "Har Birlariga Alohida:",
        "quote": "AI har bir kompaniya profili va faoliyatiga qarab shaxsiylashtirilgan 2 qatorlik samimiy xat yaratadi.",
        "tip": "🚀 <b>Farq:</b> Ommaviy robot xati emas, xuddi do'stona hamkor yozgandek eshitiladi."
      },
      {
        "tag": "4 / 4-QADAM: RE-AKTIVATSIYA",
        "avatar": "💎",
        "name": "Natija:",
        "quote": "2,500 ta sovuq kontaktdan 140 tasi qayta jonlanib, 18 ta yirik shartnoma imzolandi!",
        "tip": "🏆 <b>Yutuq:</b> Yangi marketingga 1 so'm sarflamasdan turib 150M+ UZS qo'shimcha daromad."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">❄️ 1-Qism: Nega Sovuq Baza O'ladi va Qanday Qilib Uni Tiriltirish Mumkin?</h4>\n            <p>\n              Har qanday O'zbekiston korxonasida eng katta boylik — bu avval sizga qiziqqan, lekin nimadir sabab bilan o'sha paytda sotib olmagan mijozlar ro'yxatidir.\n            </p>\n            <p>\n              Ularga har hafta <i>\"Aksiya! Faqat bugun 20% arzon oling!\"</i> deb yozish — bazani tezda o'ldirishning eng to'g'ri yo'lidir. Mijoz sizni tajovuzkor sotuvchi sifatida qabul qiladi.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">📈 2-Qism: 3 Bosqichli \"Value-First\" Re-aktivatsiya Zanjiri</h4>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">1-Xabar (Qiymat)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Hech qanday savdo yo'q: <i>\"Akmal aka, siz bilan 2 oy oldin ombor hisobini gaplashgan edik. Yaqinda shu sohada xarajatlarni 18% ga qisqartirgan qisqa tahlil tayyorladik, sizga PDF formatida tashlab qo'yaymi?\"</i>\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">2-Xabar (Keys & Natija)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Mijoz \"Ha\" deb javob bergach, real keys yuboriladi va undagi muammolar uning o'zida ham bor-yo'qligi so'raladi.\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--tg-blue);\">3-Xabar (Yumshoq Taklif)</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                <i>\"Xohlasangiz, 15 daqiqalik qisqa qo'ng'iroqda jamoangizdagi aynan shu nuqtani bepul audit qilib berishimiz mumkin.\"</i>\n              </p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: CRM Voronkasida Leadlarni Avtomatik Skoring Qilish</h4>\n            <p>\n              AI har bir javobni o'qib, uni quyidagi 3 toifaga ajratadi va AmoCRM yoki Bitrix24 ga status beradi:\n            </p>\n            <ul>\n              <li><b>Issiq (Score 80-100):</b> \"Qachon ko'rishamiz?\" $\rightarrow$ Sotuv bo'limi rahbariga qo'ng'iroq vazifasi yuklanadi.</li>\n              <li><b>Iliq (Score 40-79):</b> \"Hozir bandmiz, keyingi oy yozing\" $\rightarrow$ CRM da 30 kundan keyin eslatma qo'yiladi.</li>\n              <li><b>Sovuq (Score 0-39):</b> \"Kerak emas\" $\rightarrow$ Baza bezovta qilinmaydi.</li>\n            </ul>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "CRM bazasida bir necha oy oldin qolib ketgan sovuq mijozlar bilan qayta aloqa o'rnatishda qaysi yondashuv eng yuqori natija beradi?",
      "options": [
        "A) Darhol ommaviy reklama va chegirma xabarini spam qilib tashlash.",
        "B) Hech narsa sotmasdan, avval ularning biznesiga foydali bo'lgan bepul amaliy keys yoki tahlilni ulashish (Value-First) orqali muloqotni tiklash.",
        "C) Har kuni ertalab ularga 'Assalomu alaykum' deb yozib turish."
      ],
      "correctIndex": 1,
      "explanation": "To'g'ri! 'Value-First' yondashuvi mijozda qarzdorlik va qiziqish uyg'otadi, spam deb qabul qilinmaydi va qayta javob berish ehtimolini keskin oshiradi."
    },
    "notes": [
      "<b>Value-First:</b> Sotishdan oldin bepul foydali bilim yoki tahlil bering.",
      "<b>Shaxsiylashtirish:</b> Ommaviy xabarlar o'rniga mijozning o'z faoliyatiga mos 2 jumlalik samimiy murojaat.",
      "<b>Avtomatik Skoring:</b> AI orqali javoblar tahlil qilinib, faqat tayyor mijozlar tirik sotuvchilarga uzatiladi."
    ],
    "downloadablePrompt": "Sen B2B re-engagement (sovuq mijozlarni jonlantirish) bo'yicha mutaxassisisan.\nMijoz ma'lumotlari: {Kompaniya_nomi, Soha, Oxirgi muloqot sanasi}.\nVAZIFA:\n1. Hech qanday arzon chegirma va ochiq savdo taklif qilma.\n2. Ularning sohasi bo'yicha 1 ta real foydali amaliy keys mavjudligini aytib, do'stona qisqa xat yoz (maksimum 3 jumla).\n3. Oxirida faqat PDF formatini yuborishga ruxsat so'rab tugat.",
    "homeworkTitle": "Topshiriq: Sovuq B2B mijozlarni jonlantiruvchi 3 bosqichli xat shablonini yozing",
    "homeworkDefault": "Sen Toshkentdagi distribyutorlik korxonasining marketing rahbarisan. 3 oy oldin narx so'rab yo'qolib ketgan 50 ta yirik do'kon egalarini do'stona tarzda qayta muloqotga chaqiruvchi qiymatga asoslangan xat loyihasini tayyorla."
  },
  "4_1": {
    "id": "4_1",
    "module": "4-Modul: Excel, Moliya & Operatsiyalar",
    "lessonNum": "4.1",
    "title": "4.1. Excel xom ma'lumotlaridan AI tahlili",
    "duration": "22 daqiqa",
    "timeBudget": "📖 CSV/Excel Tozalash & Tahlil: 8 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ AI Formula & Audit Sandboxing: 12 daqiqa (JAMI: 22 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: CHAOTIK JADVALLAR",
        "avatar": "📑",
        "name": "Buxgalteriya Realligi:",
        "quote": "1C yoki banking tizimidan chiqqan 10,000 qatorlik CSV fayl: sanalar har xil formatda, raqamlar matn sifatida tushgan, xatolar tiqilib yotibdi.",
        "tip": "⏳ <b>Yo'qotish:</b> Buxgalter va tahlilchi buni qo'lda tozalash uchun har hafta 15 soat vaqt sarflaydi."
      },
      {
        "tag": "2 / 4-QADAM: AI CLEANING",
        "avatar": "🧹",
        "name": "Avtomatik Tozalash:",
        "quote": "\"Ushbu jadvaldagi bo'sh qatorlarni o'chir, sanalarni YYYY-MM-DD formatiga keltir va barcha valyutalarni so'mga aylantir.\"",
        "tip": "⚡ <b>Tezlik:</b> 15 soatlik ish 15 soniyada xatosiz amalga oshiriladi."
      },
      {
        "tag": "3 / 4-QADAM: ANOMALIYALARNI TOPISH",
        "avatar": "🔍",
        "name": "Audit & Keshflou Oqishi:",
        "quote": "\"Jadvaldagi eng shubhali 5 ta to'lovni va o'tgan oyga nisbatan 40% dan ko'p oshgan xarajat moddalarini aniqla.\"",
        "tip": "💡 <b>AI Qobiliyati:</b> Inson ko'zidan qochgan yashirin xarajat va kamomadlarni darhol topadi."
      },
      {
        "tag": "4 / 4-QADAM: YAKUNIY DASHBORD",
        "avatar": "📊",
        "name": "Rahbariyat Qarori:",
        "quote": "Tadbirkor bir qarashda qayerda pul yo'qotilayotgani va qaysi mahsulot eng yuqori marja keltirayotganini ko'radi!",
        "tip": "🏆 <b>Natija:</b> To'liq moliyaviy shaffoflik va xotirjamlik."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">📊 1-Qism: Nega Kompaniyalar Excelda Adashadi?</h4>\n            <p>\n              O'zbekistondagi 95% o'rta bizneslar 1C, IIKO, Jowi yoki bank tizimlaridan ma'lumotlarni Excelga eksport qiladi. Ammo eksport qilingan fayllarda:\n            </p>\n            <ul>\n              <li>Sanalar aralashib ketgan (masalan: 04.09.2026 va 2026/09/04).</li>\n              <li>Bo'shliqlar tufayli sonlar matn (string) sifatida o'qiladi va VLOOKUP ishlamay qoladi.</li>\n              <li>Dublikat operatsiyalar hisobotlarni sun'iy ravishda shishirib ko'rsatadi.</li>\n            </ul>\n          </div>\n\n          <h4 style=\"color:#fff;\">🛠️ 2-Qism: AI Orqali Tozalash va Formulalar Yaratish</h4>\n          <p>\n            Endi murakkab makroslar yozish shart emas. Claude 3.5 Sonnet yoki GPT-4o ga xom jadval namunasini berib, to'g'ridan-to'g'ri formula yoki tozalangan ma'lumotni olish mumkin:\n          </p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">Debitorlik Qarzlarini Toifalash</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Mijozlarning to'lov kechikish muddatini avtomatik tarzda: <i>0-30 kun, 31-60 kun, 61-90 kun va Xavfli (90+ kun)</i> guruhlariga ajratish formulasi.\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">ABC/XYZ Tahlili</b>\n              <p style=\"font-size:12.5px; color:#94a3b8; margin:0;\">\n                Kompaniya daromadining 80% ini ta'minlovchi A-toifadagi tovarlarni bir zumda aniqlab berish.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Real Audit Keysi (38 Million So'mlik Oqish)</h4>\n            <p>\n              Toshkentdagi kafelar tarmog'i egasi o'tgan oylik ta'minot xarajatlari jadvalini AI ga tekshirtirdi. Model 2 soniya ichida shuni aniqladi: go'sht mahsulotlari yetkazib beruvchisi oyning ikkinchi yarmida narxni kelishilgan 85,000 so'm o'rniga 105,000 so'mdan hisoblagan va bu buxgalter e'tiboridan chetda qolgan.\n            </p>\n            <p style=\"color:var(--teal-light); font-weight:700;\">\n              Natija: Korxona ortiqcha to'langan 38,400,000 UZS ni qaytarib oldi va ta'minotchi bilan shartnomani qayta ko'rib chiqdi.\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "1C yoki bank hisobidan olingan 5,000 qatorlik xom CSV jadvalidagi anomaliyalarni (narxlarning asossiz oshishi yoki takroriy to'lovlar) AI orqali topishda eng to'g'ri prompt qaysi?",
      "options": [
        "A) 'Mana jadval, menga umumiy sonlarni ko'rsat.'",
        "B) 'Jadvaldagi har bir tovar pozitsiyasi bo'yicha narx o'zgarishlarini tahlil qil. O'tgan oyning o'rtacha narxidan 15% dan ortiq farq qilgan shubhali qatorlarni va takroriy to'lov ID larini alohida jadval qilib ko'rsat.'",
        "C) 'Jadvalni ingliz tiliga tarjima qilib ber.'"
      ],
      "correctIndex": 1,
      "explanation": "To'ppa-to'g'ri! Aniq parametrlar (15% dan ortiq farq, takroriy ID lar) modelga xatolik va firibgarliklarni aniq topish imkonini beradi."
    },
    "notes": [
      "<b>Tozalash:</b> AI bir necha soniyada xom jadvallarni mantiqiy tartibga soladi.",
      "<b>Anomaliya nazorati:</b> Inson ko'zidan qochgan xatoliklar va ortiqcha to'lovlarni darhol fosh qiladi.",
      "<b>Debitorlik:</b> Qarzlar muddatini toifalash keshflou inqirozining oldini oladi."
    ],
    "downloadablePrompt": "Sen Bosh Moliyaviy Auditorisan.\nQuyida senga kompaniyaning xarajatlar jadvali taqdim etilmoqda.\nVAZIFA:\n1. Eng ko'p pul sarflangan top-5 ta xarajat moddasini aniqla.\n2. O'tgan oyga nisbatan eng katta foizda oshgan pozitsiyalarni ko'rsat.\n3. Shubhali, takrorlangan yoki asossiz ko'ringan to'lovlar bo'yicha rahbariyatga 3 ta ogohlantiruvchi xulosa yoz.",
    "homeworkTitle": "Topshiriq: Excel xarajatlar jadvalini audit qiluvchi professional prompt yozing",
    "homeworkDefault": "Sen tajribali moliyaviy tahlilchisan. Taqdim etilgan oylik xarajatlar jadvalidagi eng xavfli keshflou oqishlarini aniqla, xarajatlarni toifalarga ajrat va rahbariyat uchun 1 betlik tahliliy xulosa tayyorla."
  },
  "4_2": {
    "id": "4_2",
    "module": "4-Modul: Excel, Moliya & Operatsiyalar",
    "lessonNum": "4.2",
    "title": "4.2. Oylik xarajatlar va daromad hisobotlari",
    "duration": "20 daqiqa",
    "timeBudget": "📖 Boshqaruv Hisobi (P&L, Cashflow): 7 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Executive Summary Sandboxing: 11 daqiqa (JAMI: 20 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: 'HISOBDA PUL BOR, LEKIN QANI?'",
        "avatar": "🤷‍♂️",
        "name": "Tadbirkorning Savoli:",
        "quote": "\"Qog'ozda 50 million so'm foyda qildik deb yozilgan, lekin kassada ishchilarga oylik berishga naqd pul yo'q! Nega?\"",
        "tip": "⚠️ <b>Klassik Xato:</b> P&L (Daromad va xarajat) bilan Cashflow (Pul oqimi) ni adashtirish."
      },
      {
        "tag": "2 / 4-QADAM: IKKI HISOBOT FARQI",
        "avatar": "⚖️",
        "name": "Boshqaruv Hisobi:",
        "quote": "<b>P&L:</b> Xizmat ko'rsatilgan paytdagi hisobiy foydani ko'rsatadi.<br><b>Cashflow:</b> Pul real kassa yoki hisob raqamga tushgan paytni ko'rsatadi.",
        "tip": "💡 <b>Qoida:</b> Kompaniyalar foyda yo'qligidan emas, pul oqimi to'xtab qolganidan (kassoviy razriv) sinadi."
      },
      {
        "tag": "3 / 4-QADAM: AI FORECASTING",
        "avatar": "🔮",
        "name": "Kelajakni Bashorat Qilish:",
        "quote": "AI o'tgan 6 oylik tendensiya asosida keyingi 60 kun ichida qachon kassada pul taqchilligi yuzaga kelishini hisoblab chiqadi.",
        "tip": "🛡️ <b>Xavfsizlik:</b> Muammo yuzaga kelishidan 1 oy oldin choralarni ko'rasiz."
      },
      {
        "tag": "4 / 4-QADAM: 1-BETLIK XULOSA",
        "avatar": "📑",
        "name": "Executive Summary:",
        "quote": "50 sahifalik jadvallar o'rniga direktor uchun 5 ta asosiy KPI va aniq tavsiyalar.",
        "tip": "🏆 <b>Boshqaruv:</b> Qarorlar taxminlar bilan emas, aniq raqamlar bilan qabul qilinadi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">⚖️ 1-Qism: P&L va Cashflow — Tadbirkorning Asosiy Adashuvi</h4>\n            <p>\n              Toshkentdagi ko'plab biznes egalari Didox orqali 100 million so'mlik hisob-fakturani tasdiqlagach: <i>\"Biz 100 million ishladik!\"</i> deb hisoblashadi. Ammo agar mijoz shartnoma bo'yicha pulni 45 kundan keyin to'laydigan bo'lsa, bu pul hali Cashflow da yo'q!\n            </p>\n            <p>\n              Agar korxona bu vaqt ichida oylik maosh, ijara va soliq to'lovlarini amalga oshirishi kerak bo'lsa, <b>Kassa uzilishi (Kassoviy razriv)</b> yuz beradi. Buni tushunish va AI orqali oldindan modellashtirish biznes tirikligining asosidir.\n            </p>\n          </div>\n\n          <h4 style=\"color:#fff;\">📊 2-Qism: Rahbariyat Uchun \"1-Sahifalik Executive Summary\"</h4>\n          <p>\n            Kompaniya direktori yoki ta'sischisiga 50 betlik buxgalteriya provodkalari kerak emas. Unga 3 ta savolga aniq javob zarur:\n          </p>\n          <ul>\n            <li><b>Sof Operatsion Marja (EBITDA):</b> Biz har 100 so'm tushumdan necha so'm toza foyda qilyapmiz?</li>\n            <li><b>Xarajatlar Strukturasidagi Siljish:</b> Qaysi xarajat moddasi rejadagidan chetga chiqdi?</li>\n            <li><b>Keyingi 30 Kunlik Kassa Xavfi:</b> Qachon va qancha miqdorda to'lov defitsiti kutilmoqda?</li>\n          </ul>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: GPTify Moliyaviy Prompt Arxitekturasi</h4>\n            <p>AI ga oylik umumiy ko'rsatkichlarni berib, direktor uchun qaror qabul qiluvchi hisobot tayyorlash:</p>\n            <pre style=\"background:rgba(0,0,0,0.5); padding:12px; border-radius:8px; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:#a7f3d0; overflow-x:auto;\">\nSen Bosh Moliyaviy Direktor (CFO)san.\nBerilgan ma'lumotlar asosida Boshqaruv Kengashi uchun 1 sahifalik hisobot tayyorla:\n1. Asosiy ko'rsatkichlar (Tushum, Yalpi marja %, Sof foyda %).\n2. Salbiy tendensiyalar (qaysi xarajatlar daromad o'sishidan tezroq o'smoqda).\n3. 3 ta tezkor tavsiya: daromadni oshirish yoki keraksiz xarajatlarni muzlatish choralari.\n            </pre>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Kompaniyada P&L bo'yicha qog'ozda katta foyda ko'ringani holda xodimlarga oylik berishga kassa uzilishi (kassoviy razriv) paydo bo'lishining eng asosiy sababi nima?",
      "options": [
        "A) Mijozlarga berilgan muddatli to'lovlar (debitorlik) tufayli mahsulot topshirilgan, lekin real naqd pul hali hisob raqamga kelib tushmagan.",
        "B) Buxgalter bank ilovasini ochmagan.",
        "C) Kompaniya juda ko'p reklama bergani uchun."
      ],
      "correctIndex": 0,
      "explanation": "Aynan to'g'ri! P&L daromadni xizmat ko'rsatilgan vaqtda tan oladi, lekin pul oqimi (Cashflow) real pul kelgandagina shakllanadi. Debitorlik qarzlarining kechikishi kassa uzilishiga olib keladi."
    },
    "notes": [
      "<b>P&L vs Cashflow:</b> Qog'ozdagi foyda kassa xavfsizligini kafolatlamaydi.",
      "<b>Kassoviy razriv:</b> Kelgusi oylardagi pul taqchilligini AI orqali oldindan bashorat qiling.",
      "<b>Executive Summary:</b> Qaror qabul qiluvchi rahbar uchun ixcham va harakatga yo'naltirilgan xulosa."
    ],
    "downloadablePrompt": "Sen professional B2B Moliya Direktorisan.\nKompaniyaning oylik moliyaviy ma'lumotlari:\n- Tushum: {tushum}\n- To'g'ridan-to'g'ri tannarx: {tannarx}\n- Doimiy operatsion xarajatlar: {operatsion_xarajat}\n- Debitorlik qarzlari: {debitorlik}\nVAZIFA:\n1. Sof operatsion marjani hisobla.\n2. Pul oqimidagi eng katta xatarni bahola.\n3. Direktor uchun 3 ta aniq boshqaruv qarorini shakllantir.",
    "homeworkTitle": "Topshiriq: Rahbariyat uchun oylik moliyaviy tahlil va prognoz prompti tuzing",
    "homeworkDefault": "Sen korxona moliyaviy maslahatchisisan. Kompaniyaning oylik tushum va xarajatlari asosida kassa uzilishlarini prognoz qiluvchi va marjani saqlovchi 1 betlik tahlil shablonini ishlab chiq."
  },
  "4_3": {
    "id": "4_3",
    "module": "4-Modul: Excel, Moliya & Operatsiyalar",
    "lessonNum": "4.3",
    "title": "4.3. Soliq.uz va Didox hujjatlarini avtomatlashtirish",
    "duration": "25 daqiqa",
    "timeBudget": "📖 Didox & Soliq Yuridik Nazorati: 8 daqiqa · 🧠 Bilim tekshiruvi: 2 daqiqa · ⚡ Shartnoma Audit Sandboxing: 15 daqiqa (JAMI: 25 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: DIDOX YUKLAMASI",
        "avatar": "📑",
        "name": "Buxgalter Realligi:",
        "quote": "Oy oxirida Didox tizimiga 300 ta elektron hisob-faktura va shartnoma keladi. Har birini ko'zdan kechirishga vaqt yetmaydi.",
        "tip": "⚠️ <b>Xavf:</b> Bitta noto'g'ri QQS stavkasi yoki xato MXIK kodi hisob raqamning bloklanishiga sabab bo'ladi."
      },
      {
        "tag": "2 / 4-QADAM: MXIK KODLARINI TEKSHIRISH",
        "avatar": "🏷️",
        "name": "Soliq.uz Talabi:",
        "quote": "2026-yilgi qoidalarga ko'ra, tovar va xizmatlar MXIK (IKPU) kodi va o'lchov birligi xato kiritilsa, soliq imtiyozi bekor qilinadi.",
        "tip": "💡 <b>AI Nazorati:</b> AI shartnoma matnini rasmiy tasniflagich bilan 1 soniyada solishtirib beradi."
      },
      {
        "tag": "3 / 4-QADAM: YASHIRIN YURIDIK QOPQONLAR",
        "avatar": "⚖️",
        "name": "Shartnoma Auditi:",
        "quote": "\"Ushbu B2B shartnomada bizning zararimizga ishlaydigan bir tomonlama jarimalar va noaniq to'lov shartlari bormi?\"",
        "tip": "🛡️ <b>Himoya:</b> Hamkor taklif qilgan shartnomadagi xavfli bandlarni zudlik bilan aniqlaydi."
      },
      {
        "tag": "4 / 4-QADAM: AVTOMATIK TASDIQ",
        "avatar": "✅",
        "name": "Xavfsiz E-Hujjat:",
        "quote": "Barcha xavflar bartaraf etilgach, Didox orqali xavfsiz va qonuniy shartnoma imzolanadi!",
        "tip": "🏆 <b>Natija:</b> 0 ta soliq jarimasi va 100% yuridik xotirjamlik."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🏛️ 1-Qism: O'zbekiston E-Hujjat Tizimi va Didox Realligi</h4>\n            <p>\n              O'zbekistonda tadbirkorlik subyektlari o'rtasidagi deyarli barcha hisob-kitoblar Didox, E-Faktura va Soliq.uz platformalari orqali elektron raqamli imzo (ERI) bilan amalga oshiriladi. ERI qo'yilgan hujjat qog'ozdagi muhrli hujjat bilan bir xil yuridik kuchga ega.\n            </p>\n            <p>\n              Biroq, ko'pchilik buxgalterlar vaqti yetmasligi tufayli hamkorlar yuborgan e-faktura va shartnomalarni <b>o'qimasdan tasdiqlab yuborishadi</b>. Bu quyidagi oqibatlarga olib keladi:\n            </p>\n            <ul>\n              <li>Xato MXIK (IKPU) kodi tufayli 0% QQS imtiyozining kuyishi (ayniqsa IT Park rezidentlari uchun).</li>\n              <li>Hamkor tomonidan kiritilgan asossiz bir tomonlama penya (masalan, kechikkan har bir kun uchun 0.5%).</li>\n              <li>Nizo yuzaga kelganda sud joylashuvi sifatida hamkorning viloyat sudi ko'rsatilganligi.</li>\n            </ul>\n          </div>\n\n          <h4 style=\"color:#fff;\">🔍 2-Qism: AI Shartnoma Auditori — Nimani Qidirish Kerak?</h4>\n          <p>Claude 3.5 Sonnet yuridik hujjatlarni tahlil qilishda inson yuristidan tezroq quyidagi 4 ta asosiy qopqonni topadi:</p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:#ef4444;\">1. Asimmetrik Jarimalar</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">Biz kechiksak 20% jarima, lekin hamkor to'lovni kechiktirsa hech qanday javobgarlik yo'q bandlar.</p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">2. Qabul Qilish Muddati</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">\"Agar 3 kunda e'tiroz bildirilmasa, ish bajarilgan hisoblanadi\" kabi yashirin shartlar.</p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">3. Soliq & MXIK Muvofiqligi</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">Xizmat ko'rsatish mazmuni bilan MXIK kodi mosligi va QQS hisob-kitobi.</p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Real Didox Shartnoma Audit Prompti</h4>\n            <p>Quyidagi tizimli prompt har qanday shartnoma matnini Didox'da imzolashdan oldin tekshirish uchun ishlatiladi:</p>\n            <pre style=\"background:rgba(0,0,0,0.5); padding:12px; border-radius:8px; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:#a7f3d0; overflow-x:auto;\">\nSen O'zbekiston xo'jalik huquqi bo'yicha yetakchi korporativ yuristisan.\nQuyida senga Didox orqali kelgan shartnoma matni berilgan.\nVAZIFA:\n1. Bizning (Buyurtmachi/Ijrochi) manfaatlarimizga zid bo'lgan barcha asimmetrik bandlarni ko'rsat.\n2. Fors-major, to'lov muddatlari va penya shartlaridagi xatarlarni aniqla.\n3. Hamkor bilan muzokarada ushbu bandlarni qanday o'zgartirish bo'yicha tahrir taklif qil.\n            </pre>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Didox orqali kelgan B2B shartnomani imzolashdan oldin korporativ xatarlarni nolga tushirish uchun qaysi bandlarga alohida e'tibor berish lozim?",
      "options": [
        "A) Faqat shrift o'lchami va sahifalar soniga.",
        "B) Asimmetrik jarimalar, to'lov kechikishi oqibatlari, qabul qilish dalolatnomasi muddatlari va sud yurisdiksiyasiga.",
        "C) Shartnomani o'qimasdan darhol ERI bilan tasdiqlash."
      ],
      "correctIndex": 1,
      "explanation": "To'g'ri! Asimmetrik shartlar, penya stavkalari va qabul qilish muddatlari shartnomalardagi eng ko'p moliyaviy yo'qotish keltiradigan yashirin xatarlardir."
    },
    "notes": [
      "<b>Didox mas'uliyati:</b> ERI bilan imzolangan har bir hujjat to'liq yuridik kuchga ega.",
      "<b>MXIK kodlari:</b> Soliq imtiyozlari bekor bo'lmasligi uchun kodlar xizmat turiga to'liq mos kelishi shart.",
      "<b>Yuridik audit:</b> Hamkor shartnomasidagi asimmetrik jarimalarni AI orqali bir necha soniyada toping."
    ],
    "downloadablePrompt": "Sen O'zbekiston qonunchiligi bo'yicha B2B yuristisan.\nSenga Didox orqali imzolash uchun taqdim etilgan shartnoma matni yuklanmoqda.\nVazifang:\n1. Kompaniyamiz uchun eng xatarli bo'lgan 3 ta moddani aniqla.\n2. Qaysi moddalar bo'yicha to'lovlar kechiksa asossiz penya yuklanishi mumkinligini ko'rsat.\n3. Hamkorga taklif qilinadigan xavfsiz tahririyat variantini tayyorla.",
    "homeworkTitle": "Topshiriq: Didox B2B shartnomasini xavflar bo'yicha tekshiruvchi yuridik prompt yozing",
    "homeworkDefault": "Sen korporativ yuridik tahlilchisan. Taqdim etilgan B2B xizmat ko'rsatish shartnomasidagi yashirin risklar, noxolis jarimalar va sud yurisdiksiyasi bo'yicha tahliliy xulosa tayyorla."
  },
  "5_1": {
    "id": "5_1",
    "module": "5-Modul: Yakuniy Loyiha & Sertifikat",
    "lessonNum": "5.1",
    "title": "5.1. Kompaniyangiz uchun to'liq AI arxitektura",
    "duration": "40 daqiqa",
    "timeBudget": "📖 90 Kunlik Korporativ AI Yo'l Xaritasi: 12 daqiqa · 🧠 Bilim tekshiruvi: 3 daqiqa · ⚡ Korporativ Arxitektura Loyihasi: 25 daqiqa (JAMI: 40 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: 'AI TREND' TUZOG'I",
        "avatar": "🌪️",
        "name": "Boshqaruv Xatosi:",
        "quote": "\"Hamma AI deb baqiryapti, kelinglar biz ham nimadir bot yasaylik!\" deb rejisiz pul sarflash.",
        "tip": "📉 <b>Oqibat:</b> Aniq biznes maqsadisiz qilingan loyihalar 1 oydan so'ng tashlab qo'yiladi."
      },
      {
        "tag": "2 / 4-QADAM: BIZNES PROTSEDSURALAR AUDITI",
        "avatar": "🔍",
        "name": "Audit & ROI:",
        "quote": "Kompaniyada xodimlar vaqti eng ko'p ketayotgan va xatoliklar eng ko'p uchrayotgan 3 ta qoramtir nuqtani aniqlash.",
        "tip": "💡 <b>Qoida:</b> AI avval eng qimmat vaqtni tejashi kerak: Sotuv, Moliya va Mijozlarni qo'llab-quvvatlash."
      },
      {
        "tag": "3 / 4-QADAM: 90 KUNLIK ROADMAP",
        "avatar": "🗺️",
        "name": "Bosqichma-Bosqich Joriy Qilish:",
        "quote": "<b>1-oy:</b> Xodimlarni o'qitish va xavfsizlik.<br><b>2-oy:</b> Savdo va Telegram botini ishga tushirish.<br><b>3-oy:</b> Moliya va Didox tizimlarini avtomatlashtirish.",
        "tip": "🎯 <b>Tizim:</b> Butun tashkilot bosqichma-bosqich yangi samaradorlik darajasiga ko'tariladi."
      },
      {
        "tag": "4 / 4-QADAM: TO'LIQ AVTOMATIZATSIYA",
        "avatar": "🏆",
        "name": "Yangi Davr Kompaniyasi:",
        "quote": "Xodimlar sonini oshirmasdan turib kompaniya daromadini 3 barobar oshirgan zamonaviy AI-kompaniya!",
        "tip": "💎 <b>Natija:</b> Bozor yetakchiligiga erishish va raqobatchilardan 2 yil oldinga o'tish."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🗺️ 1-Qism: Korxonada AI Joriy Qilishning 90 Kunlik Yo'l Xaritasi (Roadmap)</h4>\n            <p>\n              Sun'iy intellekt texnologiya emas, bu — <b>operatsion samaradorlik qurolidir</b>. Rejasiz kiritilgan har qanday texnologiya xodimlar tomonidan rad etiladi.\n            </p>\n            <p>\n              GPTify Uzbekistan korporativ standartiga ko'ra, joriy qilish 3 ta bosqichda amalga oshiriladi:\n            </p>\n            <ul>\n              <li><b>1-30 Kun: Kognitiv Audit & Xavfsizlik.</b> Kompaniyadagi takroriy vazifalar xaritasi tuziladi, korporativ litsenziyalar olinadi va xodimlar ma'lumotlar xavfsizligiga o'qitiladi.</li>\n              <li><b>31-60 Kun: Front-Office (Sotuv & Marketing).</b> Telegram/Instagram AI savdo boti ishga tushiriladi, sovuq leadlarni isitish va CRM skoring yo'lga qo'yiladi.</li>\n              <li><b>61-90 Kun: Back-Office (Moliya & Operatsiyalar).</b> Excel, Didox, hisobotlar va shartnoma auditi to'liq avtomatlashtiriladi.</li>\n            </ul>\n          </div>\n\n          <h4 style=\"color:#fff;\">💰 2-Qism: ROI (Return on Investment) Hisoblash Formulasi</h4>\n          <p>Kompaniya rahbari sun'iy intellektga sarflangan har bir dollar necha dollar bo'lib qaytishini ko'rishi shart:</p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">Tejalgan Ish Vaqti</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">\n                10 ta xodim har kuni 2 soatdan takroriy ishdan ozod bo'lsa = oyiga 440 soat. O'rtacha soatlik maosh $5 bo'lsa = <b>$2,200 oylik tejov</b>.\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">Qo'shimcha Bitimlar</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">\n                Tungi va dam olish kunlaridagi leadlarning 24/7 yopilishi hisobiga konversiyaning 15% ga oshishi = <b>+$4,000 toza tushum</b>.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">🏢 3-Qism: Kompaniya Ichki AI Qo'llanmasi (AI Policy)</h4>\n            <p>\n              Har bir korxona o'z xodimlari uchun 1 sahifalik ichki qoidani joriy qilishi shart:\n            </p>\n            <ul>\n              <li><b>Ruxsat etilgan:</b> Matnlarni tahrirlash, g'oyalar yaratish, Excel formulalari, B2B skriptlar tayyorlash.</li>\n              <li><b>Qat'iy taqiqlangan:</b> Mijozlarning shaxsiy pasport va bank rekvizitlarini bepul AI servislariga kiritish, AI javobini inson ko'zidan o'tkazmasdan Didox orqali tasdiqlash.</li>\n            </ul>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Kompaniyada sun'iy intellektni joriy etishda xodimlarning qarshiligini yengish va eng yuqori ROI ga erishishning to'g'ri strategiyasi qaysi?",
      "options": [
        "A) Hamma xodimlarni ishdan bo'shatib, hamma ishni bir kunda botlarga topshirish.",
        "B) 90 kunlik bosqichma-bosqich yo'l xaritasi asosida avval xodimlarni o'qitish, eng ko'p vaqt yeyotgan takroriy vazifalarni AIga o'tkazish va xavfsizlik reglamentini kiritish.",
        "C) AI haqida xodimlarga aytmasdan yashirincha ishlatish."
      ],
      "correctIndex": 1,
      "explanation": "To'ppa-to'g'ri! Tizimli 90 kunlik yo'l xaritasi xodimlarni dushmanga emas, qurollangan mutaxassislarga aylantiradi va korxona unumdorligini 3-5 barobar oshiradi."
    },
    "notes": [
      "<b>90 Kunlik Yo'l Xaritasi:</b> Audit $\\rightarrow$ Sotuv $\\rightarrow$ Moliya bosqichlarida tizimli joriy etish.",
      "<b>ROI aniqligi:</b> Tejalgan soatlar va oshgan savdo konversiyasi aniq dollarda hisoblanishi kerak.",
      "<b>AI Policy:</b> Kompaniya ichida nima ruxsat etilgani va nima taqiqlangani aniq yozilishi shart."
    ],
    "downloadablePrompt": "Sen Korporativ AI Transformatsiya Direktorisan (CAIO).\nKompaniya ma'lumotlari: {Soha, Xodimlar soni, Asosiy muammolar}.\nVAZIFA:\nUshbu korxona uchun 90 kunlik AI joriy etish strategiyasini tuz:\n1. Qaysi 3 ta departament birinchi bo'lib avtomatlashtiriladi?\n2. Kutilayotgan oylik vaqt va pul tejovi (ROI) qanday bo'ladi?\n3. Xodimlar uchun axborot xavfsizligi bo'yicha 3 ta asosiy qoida.",
    "homeworkTitle": "Topshiriq: O'z korxonangiz uchun 90 kunlik to'liq AI arxitektura rejasini tuzing",
    "homeworkDefault": "Sen korporativ AI strategisan. O'zingiz ishlayotgan yoki boshqarayotgan korxona uchun 3 ta asosiy bo'lim (Sotuv, Moliya, Xizmat ko'rsatish) bo'yicha 90 kunlik joriy qilish yo'l xaritasi va kutilayotgan ROI hisob-kitobini tayyorla."
  },
  "5_2": {
    "id": "5_2",
    "module": "5-Modul: Yakuniy Loyiha & Sertifikat",
    "lessonNum": "5.2",
    "title": "5.2. Yakuniy imtihon & Rasmiy Sertifikat",
    "duration": "Imtihon",
    "timeBudget": "📖 Imtihon Reglamenti & Tahlil: 10 daqiqa · 🧠 Kompleks Sinov Testi: 10 daqiqa · ⚡ Bitiruv Amaliy Loyihasi: 20 daqiqa (JAMI: 40 daqiqa)",
    "storyboard": [
      {
        "tag": "1 / 4-QADAM: BILIMLAR INTEGRATSIYASI",
        "avatar": "🎓",
        "name": "Akademiya Yakuni:",
        "quote": "Siz AI asoslari, modellar tanlovi, professional prompt muhandisligi, B2B savdo botlari va moliyaviy audit bo'yicha to'liq 14 ta darsni o'tdingiz.",
        "tip": "💡 <b>Maqsad:</b> Endi siz oddiy foydalanuvchi emas, balki real natija keltiruvchi amaliy mutaxassissiz."
      },
      {
        "tag": "2 / 4-QADAM: KOMPLEKS SINOV",
        "avatar": "📝",
        "name": "Yakuniy Imtihon:",
        "quote": "Barcha 5 ta modulni qamrab oluvchi vaziyatli savollar va real kompaniya uchun amaliy diplom loyihasi.",
        "tip": "🎯 <b>Standart:</b> Nazariy yodlash emas, faqat amaliy muammolarni hal qilish qobiliyati sinovdan o'tadi."
      },
      {
        "tag": "3 / 4-QADAM: RASMIY SERTIFIKAT",
        "avatar": "🏆",
        "name": "Tasdiqlangan Malaka:",
        "quote": "O'zbekiston va xalqaro miqyosda tekshirilishi mumkin bo'lgan maxsus ID raqamli rasmiy GPTify Academy sertifikati!",
        "tip": "💎 <b>Karyera:</b> LinkedIn, rezyume va korporativ mijozlar oldida tasdiqlangan ekspertlik maqomi."
      },
      {
        "tag": "4 / 4-QADAM: KELAJAK SIZNIKI",
        "avatar": "🚀",
        "name": "Mentorlar Tabrigi:",
        "quote": "\"Sun'iy intellekt inson o'rnini egallamaydi, balki sun'iy intellektdan to'g'ri foydalanadigan inson boshqalardan 10 barobar oldinga o'tib ketadi!\"",
        "tip": "🌟 <b>Muvaffaqiyat:</b> Ilm va amaliyot birlashganda imkonsiz narsaning o'zi qolmaydi."
      }
    ],
    "deepDive": "\n        <div class=\"deep-dive-article\">\n          <div class=\"case-callout\">\n            <h4 style=\"color:var(--teal-light); margin-top:0;\">🎓 1-Qism: GPTify Academy Rasmiy Malaka Standarti</h4>\n            <p>\n              Ushbu kursni tamomlagan mutaxassis O'zbekiston B2B bozorida eng talabgir bo'lgan zamonaviy ko'nikmalarga ega bo'ladi:\n            </p>\n            <ul>\n              <li><b>Modellar arxitekturasi:</b> Qaysi vazifaga Claude 3.5 Sonnet, qaysi biriga GPT-4o yoki Gemini kerakligini aniq biladi.</li>\n              <li><b>Professional Prompt Muhandisligi:</b> RTC, Few-Shot, Chain-of-Thought va Meta-prompting orqali xatolarsiz natija oladi.</li>\n              <li><b>Savdo & Avtomatlashtirish:</b> Telegram va CRM tizimlarida 24/7 ishlovchi, narx e'tirozlarini 100% yopuvchi botlarni qura oladi.</li>\n              <li><b>Moliya & Yuridik Nazorat:</b> Excel jadvallari, Didox e-hujjatlari va Soliq.uz qoidalarini AI yordamida audit qila oladi.</li>\n            </ul>\n          </div>\n\n          <h4 style=\"color:#fff;\">📜 2-Qism: Sertifikat Verifikatsiyasi va Karyera</h4>\n          <p>\n            Har bir bitiruvchiga beriladigan rasmiy sertifikat <b>unikal verifikatsiya kodiga</b> ega bo'lib, xalqaro hamkorlar, ish beruvchilar va buyurtmachilar tomonidan `gptify.co/uz/verify` sahifasida tekshirilishi mumkin.\n          </p>\n          <div class=\"matrix-grid\">\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--teal-light);\">Kompaniya Egalari Uchun</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">\n                Kompaniyadagi barcha jarayonlarni shaxsan o'zi nazorat qilish va xarajatlarni 40% ga qisqartirish vakolati.\n              </p>\n            </div>\n            <div class=\"matrix-col\">\n              <b style=\"color:var(--lime);\">Mutaxassislar Uchun</b>\n              <p style=\"font-size:12.5px; color:#cbd5e1; margin:0;\">\n                B2B bozorda o'z xizmatlari narxini kamida 2-3 barobar oshirish va yirik korporativ loyihalarni boshqarish imkoniyati.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"case-callout\" style=\"border-left-color:var(--lime);\">\n            <h4 style=\"color:var(--lime); margin-top:0;\">✨ 3-Qism: Shukhrat & Davlatbek Iskandarovlarning Yakuniy Tavsiyasi</h4>\n            <p>\n              <i>\"Sun'iy intellekt shunchaki texnologiya emas — u inson intellektining kuchaytirgichidir. Biz yaratgan har bir prompt va har bir skript sizning eng qimmatli boyligingiz — vaqtingizni oilangizga, strategik g'oyalaringizga va yangi marralarga bag'ishlashingiz uchun xizmat qiladi. Olg'a!\"</i>\n            </p>\n          </div>\n        </div>\n        ",
    "quiz": {
      "question": "Kursning barcha 5 modulidan kelib chiqqan holda: Zamonaviy O'zbekiston korxonasida AI orqali eng yuqori daromad va samaradorlikka erishishning bosh formulasi nima?",
      "options": [
        "A) Faqat bepul modellarga umumiy savollar yozib turish.",
        "B) Kuchli modellar (Claude/GPT-4o) + RTC/Few-Shot prompt muhandisligi + 24/7 Telegram savdo voronkasi + Excel va Didox moliyaviy auditini yagona tizimga birlashtirish.",
        "C) Texnologiyalardan butunlay voz kechib, faqat qog'ozda ishlash."
      ],
      "correctIndex": 1,
      "explanation": "Mukammal va to'g'ri! Aynan shu yaxlit tizim — GPTify Academy ning poydevori bo'lib, korxonangizni zamonning eng ilg'or darajasiga olib chiqadi. Tabriklaymiz!"
    },
    "notes": [
      "<b>Kompleks Bilim:</b> Modellar + Prompt Engineering + Savdo + Moliya integratsiyasi.",
      "<b>Verifikatsiya:</b> Rasmiy tekshiriladigan sertifikat sizning ekspert maqomingizni tasdiqlaydi.",
      "<b>Amaliy Natija:</b> Nazariya emas, bevosita kompaniya foydasini oshiruvchi amaliy ko'nikmalar."
    ],
    "downloadablePrompt": "Sen Kompaniyaning Bosh AI Strategi va Tizim Arxitektorisan.\nBiznesingizning barcha bo'limlari (Savdo, Marketing, Moliya, Xizmat) uchun to'liq integratsiyalashgan AI xaritasi tayyorlangan.\nUshbu xaritani yillik strategik reja sifatida rasmiylashtir va har bir bosqich bo'yicha mas'ul shaxslar KPI ko'rsatkichlarini belgilab ber.",
    "homeworkTitle": "Yakuniy Imtihon: Butun kompaniyangiz uchun yaxlit AI strategiyasini taqdim eting",
    "homeworkDefault": "Men GPTify Academy ning barcha 14 ta darsini to'liq o'zlashtirdim. Quyida mening korxonam uchun ishlab chiqilgan yaxlit AI arxitekturasi, savdo boti ssenariysi va moliyaviy audit tizimi keltirilgan. Rasmiy sertifikat berilishi uchun ko'rib chiqilsin."
  }
};

if (typeof window !== 'undefined') {
  window.COURSE_DATA = COURSE_DATA;
}
