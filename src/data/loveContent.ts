/**
 * ============================================================================
 * ❤️ FOR MY SONAI – PERSONALISATION CONFIGURATION FILE ❤️
 * ============================================================================
 * 
 * Welcome to the central control panel for Nasrin's website!
 * You can customize and edit ANY text, date, image path, letter, reason, or 
 * quiz question directly in this single file.
 * 
 * HOW TO ADD YOUR OWN PHOTOS:
 * 1. Place your images in the `public/gallery/` folder (e.g. `public/gallery/photo1.jpg`).
 * 2. Update the `image` URLs in the `memoryGallery.items` section below.
 * 
 * HOW TO ADD YOUR OWN BACKGROUND MUSIC:
 * 1. Place an MP3 file into `public/music/` (e.g. `public/music/our-song.mp3`).
 * 2. Set `music.audioSrc` below to `/music/our-song.mp3`.
 * 3. The built-in romantic lofi synthesizer will automatically play if no MP3 is found!
 * ============================================================================
 */
import beachProposalImg from '../assets/memories/beach_proposal.jpg';
import beachSmilesImg from '../assets/memories/beach_smiles.jpg';
import templeMomentImg from '../assets/memories/temple_moment.jpg';
import festiveLightsImg from '../assets/memories/festive_lights.jpg';
import melaAdventureImg from '../assets/memories/mela_adventure.jpg';

export interface TimelineItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  quote?: string;
}

export interface LoveReason {
  id: number;
  text: string;
  category: 'Smile' | 'Kindness' | 'Happiness' | 'Soul' | 'Moments';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  date: string;
  image: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  tilt: number; // in degrees for polaroid feel (-2 to 2)
}

export interface OpenWhenLetter {
  id: string;
  title: string;
  subtitle: string;
  sealColor: string;
  preview: string;
  letter: string;
  closing: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  sweetNote: string;
}

export interface LoveWebsiteContent {
  personal: {
    herName: string;
    nickname: string;
    websiteTitle: string;
    senderNickname: string;
    signatureDate: string;
  };
  welcomeScreen: {
    greeting: string;
    subtitle: string;
    envelopeNote: string;
    buttonText: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    floatingNote: string;
  };
  storyTimeline: {
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };
  reasons: {
    title: string;
    subtitle: string;
    items: LoveReason[];
  };
  gallery: {
    title: string;
    subtitle: string;
    items: GalleryPhoto[];
  };
  openWhenLetters: {
    title: string;
    subtitle: string;
    letters: OpenWhenLetter[];
  };
  quiz: {
    title: string;
    subtitle: string;
    questions: QuizQuestion[];
    resultMessage: string;
    resultSubtext: string;
  };
  finalSurprise: {
    badge: string;
    salutation: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    signOff: string;
    hugButtonText: string;
    hugCelebrationTitle: string;
    hugCelebrationMessage: string;
  };
  music: {
    trackTitle: string;
    artist: string;
    audioSrc: string;
    initialVolume: number;
  };
}

export const loveContent: LoveWebsiteContent = {
  // 1. Personal Details
  personal: {
    herName: "Nasrin",
    nickname: "Sonai",
    websiteTitle: "For My Sonai ❤️",
    senderNickname: "Forever Your Biggest Admirer",
    signatureDate: "Always & Forever",
  },

  // 2. Welcome Cinematic Screen
  welcomeScreen: {
    greeting: "Hey Nasrin... ❤️",
    subtitle: "Someone has created a little world just for you.",
    envelopeNote: "A special parcel of love waiting to be opened...",
    buttonText: "Open Your Surprise 💌",
  },

  // 3. Hero Section
  hero: {
    badge: "Crafted With Infinite Love ✨",
    title: "Welcome to Your Little Universe, Sonai ❤️",
    subtitle: "Every little thing in this world has been created with you in mind.",
    ctaButton: "Explore Our Story ↓",
    floatingNote: "You are the brightest star in my sky.",
  },

  // 4. Our Story Timeline
  storyTimeline: {
    title: "Every Story Has Its Own Magic...",
    subtitle: "A glimpse of the little steps and unforgettable moments that brought warmth to my world.",
    items: [
      {
        id: "first-meeting",
        tag: "Little Adventures",
        title: "Wandering Through Life With You",
        date: "Cherished Memories",
        description:
          "From simple strolls to bustling fairs and little markets, every moment spent exploring by your side feels like the sweetest adventure.",
        image: melaAdventureImg,
        quote: "Some people arrive and gently make your whole world brighter.",
      },
      {
        id: "first-conversation",
        tag: "Sun & Waves",
        title: "Beach Days & Carefree Laughter",
        date: "12 May 2024",
        description:
          "Walking along the warm shoreline, listening to the ocean breeze and your cheerful laugh. Being beside you makes any place feel like paradise.",
        image: beachSmilesImg,
        quote: "Your laughter is the sweetest melody under the sun.",
      },
      {
        id: "special-memories",
        tag: "Festive Nights",
        title: "Festive Lights & Radiant Smiles",
        date: "02 October 2025",
        description:
          "Surrounded by sparkling lights and celebration, but the brightest and most beautiful thing in the whole crowd was your smile right next to me.",
        image: festiveLightsImg,
        quote: "In a room full of lights, my eyes will always search for you.",
      },
      {
        id: "favourite-moments",
        tag: "Sweet Blessings",
        title: "Standing Together In Blessings",
        date: "02 October 2025",
        description:
          "Standing by the grand temple together. You looked completely breathtaking in red, and looking at you, I just felt so blessed to have you in my life.",
        image: templeMomentImg,
        quote: "Having you as my Sonai is the greatest blessing I could ever ask for.",
      },
      {
        id: "beautiful-milestones",
        tag: "Our Promise",
        title: "A Timeless Promise By The Ocean",
        date: "12 May 2024",
        description:
          "Down on one knee on the morning sand with the water reflecting the sunrise. Looking into your eyes and knowing that my heart is unconditionally yours forever.",
        image: beachProposalImg,
        quote: "Always and forever, holding your hand through every chapter.",
      },
    ],
  },

  // 5. 100 Reasons Why You Are Special
  reasons: {
    title: "100 Little Reasons Why You Are Special",
    subtitle: "A collection of 100 little things that make you an absolute wonder to my heart.",
    items: [
      { id: 1, text: "Your beautiful smile that effortlessly lights up my darkest days.", category: "Smile" },
      { id: 2, text: "The pure kindness you show to everyone around you.", category: "Kindness" },
      { id: 3, text: "The happiness and genuine warmth you bring into my life.", category: "Happiness" },
      { id: 4, text: "The way you make ordinary, everyday moments feel so magical.", category: "Moments" },
      { id: 5, text: "Simply being you—unapologetic, authentic, and wonderfully unique.", category: "Soul" },
      { id: 6, text: "The gentle sparkle in your eyes whenever you are excited about something.", category: "Smile" },
      { id: 7, text: "How your voice instantly brings calmness when my mind is racing.", category: "Soul" },
      { id: 8, text: "The sweet, adorable way you laugh when something is truly funny.", category: "Happiness" },
      { id: 9, text: "Your caring heart that always remembers the small details.", category: "Kindness" },
      { id: 10, text: "The comfort of knowing you exist in this world.", category: "Soul" },
      { id: 11, text: "How you make me want to be the best version of myself every day.", category: "Moments" },
      { id: 12, text: "The cute expressions you make without even realizing it.", category: "Smile" },
      { id: 13, text: "How safe and peaceful it feels whenever I talk to you.", category: "Soul" },
      { id: 14, text: "Your strength and resilience, even on days that feel heavy.", category: "Kindness" },
      { id: 15, text: "The way you can turn my worst mood upside down with one sweet text.", category: "Happiness" },
      { id: 16, text: "How adorable you are when you get playful or mischievous.", category: "Smile" },
      { id: 17, text: "Your honesty, loyalty, and the sincerity in everything you do.", category: "Soul" },
      { id: 18, text: "The way your name brings an instant smile to my face whenever it pops up.", category: "Moments" },
      { id: 19, text: "How patient and understanding you are when I need it most.", category: "Kindness" },
      { id: 20, text: "The little jokes and teasing that only we understand.", category: "Happiness" },
      { id: 21, text: "Your boundless capacity to care and love deeply.", category: "Soul" },
      { id: 22, text: "How gorgeous you look, especially when you are just being natural.", category: "Smile" },
      { id: 23, text: "The sweet good morning and good night thoughts you inspire.", category: "Moments" },
      { id: 24, text: "How you make distance feel small with your warm presence.", category: "Soul" },
      { id: 25, text: "The genuine encouragement you give whenever I face a challenge.", category: "Kindness" },
      { id: 26, text: "The unique rhythm of your laughter that I could listen to forever.", category: "Happiness" },
      { id: 27, text: "How thoughtful you are when you ask how my day really was.", category: "Kindness" },
      { id: 28, text: "The way you crinkle your nose or smile with your whole face.", category: "Smile" },
      { id: 29, text: "How you remember little things I once casually mentioned.", category: "Moments" },
      { id: 30, text: "The softness of your heart in a world that is often rough.", category: "Soul" },
      { id: 31, text: "Your sweet enthusiasm when talking about your favourite things.", category: "Happiness" },
      { id: 32, text: "The way you make my heart skip a beat even after all this time.", category: "Moments" },
      { id: 33, text: "How pretty you look when you blush or get shy.", category: "Smile" },
      { id: 34, text: "The warmth that radiates from your kind words.", category: "Kindness" },
      { id: 35, text: "Your unwavering support that makes me feel like I can conquer anything.", category: "Soul" },
      { id: 36, text: "How cute you look when you are sleepy or cozy.", category: "Moments" },
      { id: 37, text: "The sweet nicknames and affectionate banter we share.", category: "Happiness" },
      { id: 38, text: "Your intuition and how you sense when something is bothering me.", category: "Kindness" },
      { id: 39, text: "The way you inspire poetry and romantic thoughts effortlessly.", category: "Soul" },
      { id: 40, text: "How you make me laugh until my cheeks hurt.", category: "Happiness" },
      { id: 41, text: "The feeling of gratitude I have every morning knowing you are in my life.", category: "Moments" },
      { id: 42, text: "Your graceful way of handling things with quiet elegance.", category: "Soul" },
      { id: 43, text: "How gentle and caring your hands and touch feel in my thoughts.", category: "Kindness" },
      { id: 44, text: "The sweet little songs or tunes you hum randomly.", category: "Happiness" },
      { id: 45, text: "Your captivating presence that makes any room feel brighter.", category: "Smile" },
      { id: 46, text: "How you listen so attentively to every story I share.", category: "Kindness" },
      { id: 47, text: "The sweet habit of making sure I have eaten or taken care of myself.", category: "Kindness" },
      { id: 48, text: "Your beautiful soul that reflects in everything you touch.", category: "Soul" },
      { id: 49, text: "How you turn quiet silence into comfortable companionship.", category: "Moments" },
      { id: 50, text: "The way my world feels so right and balanced with you.", category: "Soul" },
      { id: 51, text: "Your radiant positivity that brightens cloudy skies.", category: "Happiness" },
      { id: 52, text: "How effortlessly stylish and charming you are.", category: "Smile" },
      { id: 53, text: "Your sweet gestures that show how much you care without saying a word.", category: "Kindness" },
      { id: 54, text: "The way your laugh is the sweetest melody I've ever known.", category: "Happiness" },
      { id: 55, text: "How you celebrate my tiny victories as if they were giant milestones.", category: "Kindness" },
      { id: 56, text: "Your dreamy, imaginative mind that sees beauty everywhere.", category: "Soul" },
      { id: 57, text: "The tender way you say my name that feels like a warm embrace.", category: "Moments" },
      { id: 58, text: "How you make every cup of tea or coffee taste like cozy comfort.", category: "Moments" },
      { id: 59, text: "Your playful pout when you playfully disagree.", category: "Smile" },
      { id: 60, text: "The deep, heartfelt talks that reveal how precious your thoughts are.", category: "Soul" },
      { id: 61, text: "How you believe in me even during times when I doubt myself.", category: "Kindness" },
      { id: 62, text: "Your smile that can disarm any worry or sadness.", category: "Smile" },
      { id: 63, text: "The fun adventures, both big and small, we imagine together.", category: "Happiness" },
      { id: 64, text: "The way you make my heart race with just a single glance or picture.", category: "Moments" },
      { id: 65, text: "How pure and unfiltered your joy is when you are truly happy.", category: "Happiness" },
      { id: 66, text: "Your sweet advice that always comes from a place of deep love.", category: "Kindness" },
      { id: 67, text: "How effortlessly you fit into the warmest spaces of my heart.", category: "Soul" },
      { id: 68, text: "The adorable reactions you give when I give you a sweet surprise.", category: "Smile" },
      { id: 69, text: "The way you inspire me to create things like this little universe for you.", category: "Moments" },
      { id: 70, text: "Your warm empathy that makes anyone feel understood and valued.", category: "Kindness" },
      { id: 71, text: "How you make me feel like the luckiest person just by choosing me.", category: "Soul" },
      { id: 72, text: "The comforting reassurance in your words when life gets hectic.", category: "Kindness" },
      { id: 73, text: "How cute you are when you get passionate about your interests.", category: "Happiness" },
      { id: 74, text: "Your sweet hugs that linger in memory like sunshine.", category: "Moments" },
      { id: 75, text: "The light you bring into every conversation we have.", category: "Happiness" },
      { id: 76, text: "How you appreciate the beauty of sunsets and quiet skies.", category: "Soul" },
      { id: 77, text: "Your beautiful laugh lines that tell stories of happiness.", category: "Smile" },
      { id: 78, text: "The quiet moments where we don't need to speak to feel connected.", category: "Moments" },
      { id: 79, text: "How your presence turns any place into a peaceful haven.", category: "Soul" },
      { id: 80, text: "The thoughtful messages you send out of the blue.", category: "Kindness" },
      { id: 81, text: "The cute way you get excited about food, treats, and small delights.", category: "Happiness" },
      { id: 82, text: "How you always see the silver lining even in messy situations.", category: "Soul" },
      { id: 83, text: "Your lovely hair and how graceful you look every single day.", category: "Smile" },
      { id: 84, text: "The safety I feel knowing our bond is rooted in real care.", category: "Soul" },
      { id: 85, text: "How you make every holiday, weekend, and weekday feel special.", category: "Happiness" },
      { id: 86, text: "The sweet memories we have already created that I replay over and over.", category: "Moments" },
      { id: 87, text: "The way you hold my heart with such tenderness.", category: "Kindness" },
      { id: 88, text: "Your infectious enthusiasm that makes life an exciting adventure.", category: "Happiness" },
      { id: 89, text: "The quiet strength and dignity you carry yourself with.", category: "Soul" },
      { id: 90, text: "The unforgettable warmth of your voice saying 'Sonai' or laughing.", category: "Moments" },
      { id: 91, text: "How you make love feel natural, peaceful, and so fulfilling.", category: "Soul" },
      { id: 92, text: "Your smile that remains etched in my mind wherever I go.", category: "Smile" },
      { id: 93, text: "The generous kindness you extend without expecting anything in return.", category: "Kindness" },
      { id: 94, text: "How you make ordinary routines feel like cherished rituals.", category: "Moments" },
      { id: 95, text: "The way you make my days brighter simply by existing.", category: "Happiness" },
      { id: 96, text: "Your sweet sense of humor that never fails to cheer me up.", category: "Happiness" },
      { id: 97, text: "The pure honesty that makes trusting you the easiest thing in the world.", category: "Soul" },
      { id: 98, text: "How you turn every little memory into a precious treasure.", category: "Moments" },
      { id: 99, text: "The endless future moments I look forward to spending with you.", category: "Soul" },
      { id: 100, text: "Because you are Nasrin—my Sonai, my favourite person, and my whole universe.", category: "Soul" },
    ],
  },

  // 6. Memory Gallery
  gallery: {
    title: "Little Moments, Big Memories 📸",
    subtitle: "Snapshots of our laughter, our adventures, and timeless love.",
    items: [
      {
        id: "photo-1",
        title: "Golden Festive Days",
        caption: "You looked breathtaking in red by the grand temple. ❤️",
        date: "02 October 2025",
        image: templeMomentImg,
        tilt: -1.8,
      },
      {
        id: "photo-2",
        title: "A Timeless Promise",
        caption: "Down on one knee by the ocean—my heart is forever yours. 💍✨",
        date: "12 May 2024",
        image: beachProposalImg,
        tilt: 1.5,
      },
      {
        id: "photo-3",
        title: "Sun, Waves & Your Radiance",
        caption: "The beach was bright, but your smile was the warmest view. 🌊",
        date: "12 May 2024",
        image: beachSmilesImg,
        tilt: -1.2,
      },
      {
        id: "photo-4",
        title: "Little Adventures Together",
        caption: "Wandering through the bustling fair, lost in our own little world. 🎡",
        date: "Special Memories",
        image: melaAdventureImg,
        tilt: 2.1,
      },
      {
        id: "photo-5",
        title: "Shining In The Lights",
        caption: "Surrounded by festive colors, your joy illuminated everything. ✨",
        date: "02 October 2025",
        image: festiveLightsImg,
        tilt: -1.5,
      },
    ],
  },

  // 7. Open When... Letters
  openWhenLetters: {
    title: "Open These Whenever You Need Me",
    subtitle: "Six little sealed envelopes filled with love, waiting for the moments you need them most.",
    letters: [
      {
        id: "miss-me",
        title: "Open When You Miss Me",
        subtitle: "For the quiet moments when the distance feels a little too loud.",
        sealColor: "#8B1538",
        preview: "Close your eyes for three seconds, take a deep breath...",
        letter: `My dearest Sonai,\n\nIf you are reading this, it means you're missing me right now. I want you to close your eyes, take a slow deep breath, and feel the warmth in your chest. That warmth is me holding your hand across any distance.\n\nNo matter how many miles or hours stand between us, never forget that you are on my mind with every passing breeze. Look up at the sky; we share the very same clouds and the very same stars.\n\nWhenever you miss me, send me a message or just think of my voice reminding you: You are my favourite thought in the entire world, and I am always right beside you in spirit.\n\nUntil I see you next, keep smiling for me.`,
        closing: "With all my love and endless hugs,",
      },
      {
        id: "feel-sad",
        title: "Open When You Feel Sad",
        subtitle: "When the day was heavy and you need a safe place to rest your heart.",
        sealColor: "#4A1025",
        preview: "It is okay to not be okay today. I am here...",
        letter: `Sweet Nasrin,\n\nI wish I could be there right now to tuck a strand of hair behind your ear, wrap you in a soft warm blanket, and take away whatever is weighing on your heart.\n\nIt is completely okay to feel tired, sad, or overwhelmed. You don't always have to be strong. You are allowed to take a break and just breathe.\n\nRemember that dark clouds always pass, but your beautiful, resilient light remains. You are so deeply loved, cherished, and treasured—more than words can ever capture. Drink some water, rest your head, and know that tomorrow is a gentle new beginning.`,
        closing: "Holding your hand tightly through the storm,",
      },
      {
        id: "need-smile",
        title: "Open When You Need A Smile",
        subtitle: "A quick dose of sweetness, giggles, and affection.",
        sealColor: "#F4A6B8",
        preview: "Did you know that your smile is officially my favourite sight?",
        letter: `Hey Sonai! 😊\n\nIf you opened this envelope, my mission is to see those gorgeous lips curve into that smile that melts my heart every single time.\n\nDid you know that scientifically speaking, you are 100% responsible for 99% of my daily daydreams? And that seeing you laugh is literally the sweetest sound in the universe?\n\nSo do me a tiny favor right now: smile! Yes, right now, even if it's a goofy one. Let that radiance out, because the world is so much prettier when Nasrin is smiling!`,
        closing: "Your number one fan always,",
      },
      {
        id: "cannot-sleep",
        title: "Open When You Cannot Sleep",
        subtitle: "For restless late nights when the world is dark and still.",
        sealColor: "#4A1025",
        preview: "Let the worries of today rest. The night is gentle...",
        letter: `Dearest Sonai,\n\nIt is late, the world outside is quiet, and your mind is wandering. Let go of whatever happened today, and don't worry about tomorrow yet.\n\nImagine me sitting beside you, gently stroking your forehead, whispering that everything is going to be alright. You are safe. You are cared for. You are deeply loved.\n\nClose your eyes, relax your shoulders, and listen to the quiet lullaby of the night. Meet me in your dreams tonight—I'll be waiting with a cup of warm tea and a giant hug.`,
        closing: "Sweetest dreams, my love,",
      },
      {
        id: "feel-special",
        title: "Open When You Want To Feel Special",
        subtitle: "A reminder of just how extraordinary and irreplaceable you are.",
        sealColor: "#8B1538",
        preview: "Never forget how magical you truly are to this world...",
        letter: `My beloved Nasrin,\n\nSometimes the routine of life makes us forget our own magic. So let this letter be your gentle, undeniable reminder:\n\nYou are not just special—you are one of a kind. The way you care for people, your warmth, your intelligence, your grace, and that rare spark in your eyes make you irreplaceable.\n\nOut of all the billions of people on this planet, my heart picked you without a single moment of hesitation. You bring so much joy into my existence, and having you as my Sonai is the greatest blessing.`,
        closing: "Adoring you forever and always,",
      },
      {
        id: "remember-love",
        title: "Open When You Need To Remember My Love",
        subtitle: "When you want to be reminded of how deep and steadfast my feelings are.",
        sealColor: "#8B1538",
        preview: "My love for you is steady, patient, and unchanging...",
        letter: `My dearest Sonai,\n\nNo matter what changes around us—seasons, years, routines—there is one constant that will never waver: my deep, sincere, and enduring love for you.\n\nIt is there in the good mornings, in the quiet afternoons, in the challenges, and in every single celebration. It is steady like the tides and bright like the morning sun.\n\nWhenever you feel any doubt or need a reminder, come back to this letter. You are my home, my peace, and my heart's greatest joy.`,
        closing: "Eternally and unconditionally yours,",
      },
    ],
  },

  // 8. Little Surprise Quiz
  quiz: {
    title: "How Well Do You Know Our Little World?",
    subtitle: "A sweet and playful little quiz made with smiles and love.",
    questions: [
      {
        id: 1,
        question: "What is my absolute favourite nickname for you?",
        options: ["Princess", "Sonai ❤️", "Sweetheart", "Angel"],
        correctIndex: 1,
        sweetNote: "You guessed it! 'Sonai' is the most special name in my vocabulary! 🥰",
      },
      {
        id: 2,
        question: "What is the secret superpower that Nasrin possesses?",
        options: [
          "Melting my heart with just one smile",
          "Making time fly when we talk",
          "Being the sweetest person ever",
          "All of the above! ✨",
        ],
        correctIndex: 3,
        sweetNote: "Of course, ALL of the above! You possess every single one! ❤️",
      },
      {
        id: 3,
        question: "When is the best time for me to think about you?",
        options: ["In the morning", "During the afternoon", "At night before sleep", "24/7 without a break! 🕰️"],
        correctIndex: 3,
        sweetNote: "Ding ding! You live rent-free in my thoughts every single hour! 💫",
      },
      {
        id: 4,
        question: "If we had an entire day to spend together, what would matter most?",
        options: [
          "An expensive restaurant",
          "Just being together and sharing laughs ❤️",
          "Visiting a bustling city",
          "Watching a long movie",
        ],
        correctIndex: 1,
        sweetNote: "Just being with you makes any place feel like paradise. 🌸",
      },
      {
        id: 5,
        question: "How much do you mean to me?",
        options: ["A lot", "More than words can say", "To the moon and back", "Beyond the universe itself! 🚀❤️"],
        correctIndex: 3,
        sweetNote: "Infinitely beyond any universe or star! Always and forever. ❤️",
      },
    ],
    resultMessage: "You are the queen of our little world!",
    resultSubtext: "No matter your score, you hold 100% of my heart, every single second of every day. ❤️",
  },

  // 9. Final Surprise (Most Emotional Section)
  finalSurprise: {
    badge: "A Letter Sealed With Infinite Love",
    salutation: "Dear Sonai...",
    paragraph1:
      "Nasrin, if I could create a little universe, I would fill it with your smile, your happiness and all the beautiful moments we have yet to create.",
    paragraph2: "Thank you for being you. You are someone very special to me.",
    paragraph3: "I hope this little surprise makes you smile. ❤️",
    signOff: "Forever Your Biggest Admirer",
    hugButtonText: "One More Hug? 🤗",
    hugCelebrationTitle: "Sending you the biggest virtual hug, Sonai! ❤️",
    hugCelebrationMessage:
      "Wrap your arms around yourself right now, close your eyes, and feel the warmest embrace. You are cherished, protected, and loved beyond measure.",
  },

  // 10. Music Settings
  music: {
    trackTitle: "Romantic Lofi Melody",
    artist: "For My Sonai ❤️",
    audioSrc: "/music/romantic-melody.mp3", // Place your MP3 here if desired
    initialVolume: 0.6,
  },
};
