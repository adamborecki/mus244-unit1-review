window.LEARN_APP_CONFIG = {
  slug: 'harmonics',
  course: 'MUS 244',
  title: '🎵 Harmonic Series and FFT',
  intro:
    'Practice harmonic-series math, overtones, and why Fourier analysis explains timbre and additive synthesis.',
  difficulty: 'Beginner',
  estimatedMinutes: 14,
  keyTerms: ['fundamental', 'partial', 'overtone', 'harmonic series', 'FFT'],
  quizGoalSeconds: 150,
  resource: {
    label: 'Open your Harmonic Series Builder (Gen3)',
    url: 'https://adamborecki.github.io/harmonic-series-builder-gen3/',
  },
  guided: [
    {
      title: 'Fundamental and integer multiples',
      body:
        'A harmonic series uses a fundamental frequency and positive integer multiples of it: x, 2x, 3x, 4x, and so on.',
      points: [
        'The fundamental is the first partial.',
        'Each next partial is a whole-number multiple.',
        'Not every frequency set is harmonic-series based.',
      ],
      checkpoint: {
        question: 'Which set is harmonic-series based on 50 Hz?',
        options: [
          '50, 100, 150, 200',
          '50, 90, 130, 170',
          '50, 75, 100, 125',
          '50, 120, 200, 310',
        ],
        answer: 0,
        correct: 'Correct. Those are integer multiples of 50.',
        wrong: 'Look for whole-number multiples of the fundamental.',
      },
    },
    {
      title: 'Partials and intervals',
      body:
        'Early partials create familiar interval patterns (octave, fifth, major third, etc.) from the same fundamental.',
      points: [
        '2nd partial is one octave above the fundamental.',
        '3rd partial introduces a perfect fifth relation.',
        'These interval relations shape many acoustic timbres.',
      ],
      checkpoint: {
        question: 'From a fundamental, the 2nd partial is:',
        options: ['Minor third above', 'Perfect fifth above', 'One octave above', 'Unison'],
        answer: 2,
        correct: 'Yes. The 2nd partial is the octave.',
        wrong: 'Remember: multiplying by 2 gives an octave up.',
      },
    },
    {
      title: 'Overtones and timbre',
      body:
        'Different instruments can play the same pitch but sound different because overtone content and balance differ.',
      points: [
        'Overtones are frequencies above the fundamental.',
        'Relative overtone strength changes timbre.',
        'Sine waves are a special case with no overtones.',
      ],
      checkpoint: {
        question: 'Which wave is the main exception with no harmonic overtones?',
        options: ['Saw wave', 'Square wave', 'Triangle wave', 'Sine wave'],
        answer: 3,
        correct: 'Correct. A pure sine contains only one frequency component.',
        wrong: 'Think of the purest possible tone.',
      },
    },
    {
      title: 'Fourier transform and FFT',
      body:
        'Fourier analysis decomposes a waveform into frequency components. FFT is the fast algorithm that makes this practical in software.',
      points: [
        'Waveform view shows amplitude over time.',
        'Spectrum/spectrogram view shows frequency content.',
        'FFT powers spectrum analyzers.',
      ],
      checkpoint: {
        question: 'What does FFT primarily help you do?',
        options: [
          'Convert MIDI to notation',
          'Quickly analyze frequency content in a signal',
          'Increase speaker volume',
          'Transpose all notes by an octave',
        ],
        answer: 1,
        correct: 'Exactly. FFT quickly reveals spectral components.',
        wrong: 'Focus on analysis of what frequencies are present.',
      },
    },
    {
      title: 'Additive synthesis link',
      body:
        'Additive synthesis builds complex timbres by adding sine waves at selected frequencies and levels.',
      points: [
        'Think recipe: frequencies + levels = resulting waveform.',
        'Harmonic series is a common blueprint for additive tones.',
        'Your existing Harmonic Series Builder is ideal for practice.',
      ],
      checkpoint: {
        question: 'Additive synthesis mainly builds sound by:',
        options: [
          'Removing high frequencies with filters',
          'Stacking sine components',
          'Stretching time with delay only',
          'Pitch-shifting samples only',
        ],
        answer: 1,
        correct: 'Right. Additive synthesis combines sine components.',
        wrong: 'Additive means building up components, not removing.',
      },
    },
  ],
  quiz: [
    {
      prompt: 'If the fundamental is 100 Hz, the 5th partial is:',
      choices: ['200 Hz', '300 Hz', '500 Hz', '1000 Hz'],
      answer: 2,
      explain: '5th partial = 5 x 100 Hz = 500 Hz.',
    },
    {
      prompt: 'Which list is NOT a harmonic series from one fundamental?',
      choices: ['100, 200, 300, 400', '40, 80, 120, 160', '100, 200, 400, 800', '60, 120, 180, 240'],
      answer: 2,
      explain: '100, 200, 400, 800 skips integer steps and is powers of two only.',
    },
    {
      prompt: 'Why can two instruments on the same note sound different?',
      choices: [
        'Only one has pitch',
        'They have different overtone content',
        'One has no frequency',
        'Amplitude never changes',
      ],
      answer: 1,
      explain: 'Timbre depends on overtone makeup and levels.',
    },
    {
      prompt: 'FFT is most closely related to:',
      choices: ['Frequency analysis', 'Tempo mapping', 'Notation export', 'Reverb rendering'],
      answer: 0,
      explain: 'FFT is a fast method to break a signal into frequency components.',
    },
    {
      prompt: 'A pure sine wave contains:',
      choices: ['Many strong harmonics', 'Only a fundamental frequency component', 'No frequency at all', 'Only noise'],
      answer: 1,
      explain: 'Ideal sine wave is a single frequency.',
    },
    {
      prompt: 'Additive synthesis usually starts by combining:',
      choices: ['Filtered noise bursts', 'Recorded drum loops', 'Sine waves', 'Only FM carriers'],
      answer: 2,
      explain: 'The classical additive model is sums of sine waves.',
    },
    {
      prompt: 'A spectrum analyzer displays mainly:',
      choices: ['Wave height in pixels only', 'Frequency and amplitude', 'Lyrics and note names', 'MIDI velocity only'],
      answer: 1,
      explain: 'Spectrum displays amplitude per frequency.',
    },
    {
      prompt: 'If you double a harmonic frequency component, that is:',
      choices: ['One octave up', 'One octave down', 'No pitch change', 'Always noise'],
      answer: 0,
      explain: 'Doubling frequency is one octave up.',
    },
  ],
};
