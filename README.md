# For My Sonai ❤️ – A Little Universe of Love

A complete, premium-quality, fully interactive romantic surprise website built with love for **Nasrin** (*Sonai*).

---

## 🌹 Live Experience Overview

- **Cinematic Welcome Screen**: An interactive 3D envelope with a wax seal that bursts open with rose petal confetti to welcome Nasrin to her little universe.
- **Main Hero**: A romantic universe greeting with floating hearts, gentle gradients, and a glowing CTA.
- **Our Story Timeline**: An interactive relationship milestone timeline with editable dates, descriptions, and photos.
- **100 Little Reasons**: An interactive 3D flip card reader with 100 thoughtful reasons, category filters, and a "Surprise Me 🎲" randomizer.
- **Memory Gallery**: A responsive Polaroid-style masonry gallery with washi tape accents, handwritten captions, and a full-screen lightbox modal.
- **Open When... Letters**: 6 sealed interactive envelopes with wax seals that open into heartfelt vintage stationery letters.
- **Little Surprise Quiz**: A playful 5-question love trivia quiz with instant sweet feedback and an animated victory celebration card.
- **Final Surprise**: An emotional dark burgundy climax with a pulsing glowing heart, heartfelt message, and a full-screen **"Virtual Hug 🤗"** celebration with heart confetti.
- **Floating Music Player**: An audio player with play/pause, volume control, mute, and animated sound visualizer bars, powered by a built-in royalty-free romantic lullaby synthesizer + custom MP3 support.

---

## 🎨 Color Palette & Design System

- **Deep Romantic Red**: `#8B1538`
- **Rose Pink**: `#F4A6B8`
- **Soft Pink**: `#FCE4EC`
- **Cream**: `#FFF8F5`
- **Burgundy**: `#4A1025`
- **White**: `#FFFFFF`
- **Accents**: Gold `#D4AF37`
- **Typography**: `Playfair Display`, `Cormorant Garamond`, `Great Vibes` (cursive), and `Plus Jakarta Sans`.

---

## 🛠️ Personalising the Website

**You only need to edit one file to customize everything:**

```text
src/data/loveContent.ts
```

In this single file, you can modify:
1. **Personal Details**: Her name, nickname ("Sonai"), your nickname, and signature.
2. **Story Timeline**: Dates and stories for your first meeting, first conversation, special memories, and milestones.
3. **100 Reasons**: Add, edit, or customize any of the 100 reasons why she is special.
4. **Memory Gallery**: Image paths, titles, and captions for your photos.
5. **Open When... Letters**: The full text of the 6 letters.
6. **Quiz**: Questions, answers, and sweet feedback notes.
7. **Final Surprise**: The final love note and the message for the "Virtual Hug" popup.
8. **Music**: Custom MP3 path and track title.

---

## 📸 How to Add Your Own Photos

1. Drop your image files into:
   ```text
   public/gallery/
   ```
   *(For example: `photo1.jpg`, `photo2.jpg`, etc.)*

2. Open `src/data/loveContent.ts` and update the `gallery.items` list:
   ```typescript
   {
     id: "photo-1",
     title: "Our Date Night",
     caption: "Your smile was brighter than all the city lights. ✨",
     date: "October 2026",
     image: "/gallery/photo1.jpg",
     tilt: -1.5,
   }
   ```
3. Save the file. The photos will immediately appear in the Polaroid gallery with full lightbox support!

---

## 🎵 How to Add Your Own Music

1. Put your favorite song or MP3 file into:
   ```text
   public/music/romantic-melody.mp3
   ```
2. In `src/data/loveContent.ts`, verify or update:
   ```typescript
   music: {
     trackTitle: "Our Favorite Song",
     artist: "Artist Name",
     audioSrc: "/music/romantic-melody.mp3",
     initialVolume: 0.6,
   }
   ```
3. **Built-in Fallback**: If no MP3 file is provided, the website automatically plays a soothing romantic piano & harp chime lullaby using the Web Audio API—meaning it will never trigger a broken audio error!

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open your browser at `http://localhost:5173/` to view the website.

---

## 🌐 Deploying to Vercel or GitHub Pages

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Click **Deploy**. Your site will be live on a custom `.vercel.app` URL in seconds!

### Deploying to GitHub Pages
1. Build the production files:
   ```bash
   npm run build
   ```
2. The `dist/` folder contains the ready-to-deploy static website.
3. You can deploy using GitHub Actions or push the `dist` folder to a `gh-pages` branch.

---

## ❤️ Made with Love

Dedicated to **Nasrin** (*Sonai*). May this little universe bring a warm smile to her face!
