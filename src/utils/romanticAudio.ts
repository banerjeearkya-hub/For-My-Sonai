/**
 * Romantic Audio Engine
 * Handles custom MP3 playback with a graceful, royalty-free Web Audio API
 * romantic piano/harp arpeggio synthesizer fallback.
 */

class RomanticAudioEngine {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private volume: number = 0.6;
  private isMuted: boolean = false;
  private timerId: number | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private isUsingCustomAudio: boolean = false;
  private onVisualizerUpdate?: (frequencyData: number[]) => void;

  constructor() {
    // Initialized on user interaction
  }

  public initCustomAudio(url: string) {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.audioElement = new Audio(url);
    this.audioElement.loop = true;
    this.audioElement.volume = this.isMuted ? 0 : this.volume;

    this.audioElement.addEventListener('error', () => {
      // Gracefully fall back to web audio synthesizer
      this.isUsingCustomAudio = false;
      if (this.isPlaying) {
        this.startSynthesizer();
      }
    });

    this.audioElement.addEventListener('canplaythrough', () => {
      this.isUsingCustomAudio = true;
    });
  }

  public setVisualizerCallback(callback: (frequencyData: number[]) => void) {
    this.onVisualizerUpdate = callback;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
  }

  public async play(): Promise<boolean> {
    this.isPlaying = true;

    // Try custom audio element first if valid
    if (this.audioElement && this.isUsingCustomAudio) {
      try {
        await this.audioElement.play();
        this.startVisualizerSimulation();
        return true;
      } catch {
        // Fall back to synthesizer
      }
    }

    // Otherwise, start romantic generative synthesizer
    this.startSynthesizer();
    return true;
  }

  public pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.audioCtx && this.audioCtx.state === 'running') {
      this.audioCtx.suspend();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // --- Generative Romantic Piano / Chime Synthesizer ---
  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  private startSynthesizer() {
    this.initAudioContext();
    if (!this.audioCtx) return;

    // Gentle romantic chord progression notes (frequencies in Hz)
    // Cmaj7 -> Am9 -> Fmaj7 -> Gsus4
    const chords: number[][] = [
      [261.63, 329.63, 392.00, 493.88], // C E G B (Cmaj7)
      [220.00, 261.63, 329.63, 440.00], // A C E A (Am)
      [174.61, 261.63, 349.23, 440.00], // F C F A (Fmaj7)
      [196.00, 293.66, 392.00, 523.25], // G D G C (Gsus4)
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
    }

    // Play an arpeggio every 450ms for a peaceful romantic lullaby
    this.timerId = window.setInterval(() => {
      if (!this.isPlaying || !this.audioCtx || this.isMuted) return;

      const currentChord = chords[chordIdx];
      const freq = currentChord[noteIdx];
      this.playRomanticChime(freq);

      noteIdx++;
      if (noteIdx >= currentChord.length) {
        noteIdx = 0;
        chordIdx = (chordIdx + 1) % chords.length;
      }

      // Trigger visualizer wave
      if (this.onVisualizerUpdate) {
        const fakeFreqs = [
          Math.random() * 0.7 + 0.3,
          Math.random() * 0.9 + 0.1,
          Math.random() * 0.8 + 0.2,
          Math.random() * 0.6 + 0.4,
          Math.random() * 0.85 + 0.15,
        ];
        this.onVisualizerUpdate(fakeFreqs);
      }
    }, 480);
  }

  private playRomanticChime(frequency: number) {
    if (!this.audioCtx || this.isMuted) return;

    try {
      const now = this.audioCtx.currentTime;

      // Soft Sine + Low harmonic for warm piano/music-box chime
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, now);

      // Warm low-pass filter to make it gentle and romantic (not piercing)
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);

      const targetVol = this.volume * 0.18;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(targetVol, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.8);
    } catch {
      // AudioContext interrupted
    }
  }

  private startVisualizerSimulation() {
    if (this.timerId !== null) window.clearInterval(this.timerId);
    this.timerId = window.setInterval(() => {
      if (!this.isPlaying || !this.onVisualizerUpdate) return;
      this.onVisualizerUpdate([
        Math.random() * 0.6 + 0.2,
        Math.random() * 0.9 + 0.1,
        Math.random() * 0.7 + 0.3,
        Math.random() * 0.8 + 0.2,
        Math.random() * 0.5 + 0.3,
      ]);
    }, 200);
  }
}

export const romanticAudio = new RomanticAudioEngine();
