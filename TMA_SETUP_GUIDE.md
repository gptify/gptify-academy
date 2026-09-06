# 📱 GPTify Uzbekistan — Telegram Mini App (TMA) Ishga Tushirish Qo'llanmasi

Ushbu qo'llanma orqali siz yaratilgan **GPTify AI Ta'lim va Test Telegram Mini Ilovasi**ni kompyuteringizda yoki to'g'ridan-to'g'ri Telegram ichida ishga tushirishingiz mumkin.

---

## 1. Lokal Kompyuterda Sinash (Brauzer orqali)

Mini Appni sinash uchun terminalda quyidagi buyruqni bering:

```bash
python tma/serve_tma.py
```

So'ngra brauzeringizda quyidagi manzilni oching:
👉 **[http://localhost:8080](http://localhost:8080)**

> **Brauzerda:** F12 tugmasini bosib, "Device Toolbar" (Mobil ko'rinish) rejimini yoqsangiz, ilova xuddi Telegram ichidagi kabi mobil formatda ochiladi.

---

## 2. Telegram Ichida Jonli Sinash (Tunnel orqali)

Telegram Mini App ishlashi uchun **HTTPS** havolasi kerak. Buning uchun bepul Cloudflare Tunnel yoki ngrok dan foydalanishingiz mumkin:

### A) Cloudflare Tunnel orqali (Bepul & Ro'yxatdan o'tmasdan):
1. Terminalda serverni yoniq qoldiring: `python tma/serve_tma.py`
2. Boshqa terminalda:
```bash
cloudflared tunnel --url http://localhost:8080
```
3. Cloudflare sizga `https://tasodifiy-nom.trycloudflare.com` ko'rinishidagi havola beradi.

### B) ngrok orqali:
```bash
ngrok http 8080
```
Natijada hosil bo'lgan `https://...ngrok-free.app` manzilidan foydalanasiz.

---

## 3. BotFather'da Mini App Tugmasini Sozlash

Telegramda pastki chap burchakda doimiy **`[ Ochish ]`** tugmasi paydo bo'lishi uchun:

1. Telegramda **[@BotFather](https://t.me/BotFather)** ga kiring.
2. `/setmenubutton` buyrug'ini yuboring.
3. Botingizni tanlang: `@GPTifyUZBot`
4. Tugma matnini kiriting: `Ochish`
5. Yuqoridagi HTTPS havolangizni (yoki GitHub Pages / Vercel havolangizni) yuboring:
   `https://sizning-saytingiz.vercel.app/`

---

## 4. Bepul Doimiy Joylashtirish (Hosting)

Ushbu Mini App statik (HTML/CSS/JS) arxitekturada yaratilgani sababli, uni 1 daqiqada bepul hostingga yuklashingiz mumkin:

- **GitHub Pages:** Repozitoriy sozlamalarida `Settings -> Pages -> Deploy from branch` ni yoqing.
- **Vercel / Cloudflare Pages:** `tma` papkasini Vercel orqali 1-click bilan doimiy bepul HTTPS domeniga o'tkazishingiz mumkin.

---

## 5. Mini App Imkoniyatlari (O'quvchi uchun):
- ⚡ **30 kunlik AI Challenge:** Kunlik streak va o'zlashtirish foizi
- 📋 **Barcha AI Testlar:** 5 ta asosiy mavzu (LLM, Prompting, Biznesda AI, Vizual AI, Xavfsizlik)
- 💔 **Xatolarni Tuzatish:** Faqat adashgan savollarni qayta ishlash bo'limi
- 🎓 **Darslik:** 14 ta amaliy modul va promptlar kutubxonasi
- 🤖 **Prompt Lab:** 1-bosishda nusxalanadigan professional promptlar
- ▶ **Test Yechish:** Foydalanuvchi darajasiga mos tezkor savollar
- ⚔️ **Oktagon:** 1v1 PvP AI savollar jangi
- 🎫 **Biletlar:** 10 ta maxsus bilet
- ✅ **Real Imtihon:** 20 daqiqalik sinov va yakunda rasmiy **GPTify AI Sertifikati**ni yuklab olish!
