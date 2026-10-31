=======================================================
❤️ HOW TO ADD YOUR OWN BACKGROUND MUSIC
=======================================================

1. Copy your romantic song / MP3 file into this folder:
   c:\Users\Arkya\OneDrive\Desktop\MAgra mariners\public\music\romantic-melody.mp3

2. In `src/data/loveContent.ts`, verify or update:
   music: {
     trackTitle: "Your Song Name",
     artist: "Artist Name",
     audioSrc: "/music/romantic-melody.mp3",
     initialVolume: 0.6
   }

3. That's it!
   NOTE: Even if no MP3 file is placed here, the website automatically plays
   a gentle, royalty-free romantic piano & harp chime lullaby using the built-in
   Web Audio synthesizer, so it never gives a broken audio error!
=======================================================
