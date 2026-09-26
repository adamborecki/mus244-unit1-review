window.LEARN_APP_CONFIG = {
  slug: 'sound-waves',
  course: 'MUS 244',
  title: '🌊 Sound Waves Basics',
  intro:
    'Review what sound is, how amplitude and frequency work, and how periodic vs aperiodic waves connect to pitch and noise.',
  difficulty: 'Beginner',
  estimatedMinutes: 12,
  keyTerms: ['medium', 'amplitude', 'frequency', 'periodic', 'aperiodic'],
  quizGoalSeconds: 130,
  resource: {
    label: 'Try Chrome Music Lab: Sound Waves',
    url: 'https://musiclab.chromeexperiments.com/Sound-Waves/',
  },
  guided: [
    {
      title: 'What sound is',
      body:
        'Sound is a pressure wave created by vibrations. It moves through a medium (usually air) and transfers energy to your ear.',
      points: [
        'No vibration means no sound source.',
        'Sound needs a medium: gas, liquid, or solid.',
        'In a vacuum, sound cannot travel.',
      ],
      checkpoint: {
        question: 'Which statement is correct?',
        options: [
          'Sound is an electromagnetic wave that can travel in a vacuum.',
          'Sound is a pressure wave that requires a medium.',
          'Sound is only possible in air.',
          'Sound is only electrical energy.',
        ],
        answer: 1,
        correct: 'Correct. Sound needs a medium to propagate.',
        wrong: 'Not yet. Re-check the definition of sound from class.',
      },
    },
    {
      title: 'Longitudinal vs graph view',
      body:
        'Real sound is longitudinal (compressions and rarefactions), but we often draw it as a transverse wave to visualize change over time.',
      points: [
        'Compressions are dense regions of molecules.',
        'Rarefactions are less dense regions.',
        'Waveform graphs are a visual model, not literal shape in air.',
      ],
      checkpoint: {
        question: 'Why do we use a transverse-looking graph for sound?',
        options: [
          'Because sound literally moves up and down in the air.',
          'Because it helps us visualize amplitude and cycles over time.',
          'Because microphones cannot capture longitudinal waves.',
          'Because only transverse waves have frequency.',
        ],
        answer: 1,
        correct: 'Right. It is a graphing convenience for analysis.',
        wrong: 'Try again. Think about graph representation vs physical motion.',
      },
    },
    {
      title: 'Amplitude and loudness',
      body:
        'Amplitude is the size of the pressure variation. Bigger overall amplitude is perceived approximately as louder sound.',
      points: [
        'Amplitude is not exactly equal to loudness, but closely related.',
        'Digital systems use dBFS where 0 dBFS is max possible level.',
        'Real-world sound pressure uses dBSPL.',
      ],
      checkpoint: {
        question: 'In a digital audio system, what does 0 dBFS represent?',
        options: [
          'The threshold of human hearing.',
          'The loudest signal the system can handle.',
          'The average loudness of music.',
          'Silence.',
        ],
        answer: 1,
        correct: 'Yes. 0 dBFS is the digital ceiling.',
        wrong: 'Check your dBFS vs dBSPL notes and retry.',
      },
    },
    {
      title: 'Frequency and pitch',
      body:
        'Frequency is cycles per second (Hz) and is perceived as pitch for periodic sounds.',
      points: [
        '1 kHz equals 1000 Hz.',
        'Doubling frequency = one octave up.',
        'Halving frequency = one octave down.',
      ],
      checkpoint: {
        question: 'If A4 is 440 Hz, one octave above is:',
        options: ['220 Hz', '330 Hz', '440 Hz', '880 Hz'],
        answer: 3,
        correct: 'Correct. One octave up from 440 Hz is 880 Hz.',
        wrong: 'Re-check octave math: doubling raises by one octave.',
      },
    },
    {
      title: 'Periodic vs aperiodic',
      body:
        'Periodic waves repeat regularly and usually have clear pitch. Aperiodic waves do not repeat regularly and are heard as noise.',
      points: [
        'Most real sounds are mixed periodic + aperiodic.',
        'Human hearing range is about 20 Hz to 20 kHz.',
        'Pitch perception drops when repetition is irregular.',
      ],
      checkpoint: {
        question: 'Which sound is most likely to have a clear singable pitch?',
        options: ['White noise', 'Periodic waveform', 'Random clicks', 'Aperiodic burst'],
        answer: 1,
        correct: 'Exactly. Periodicity supports pitch perception.',
        wrong: 'Look for the option with regular repetition.',
      },
    },
  ],
  quiz: [
    {
      prompt: 'Sound requires which condition to travel?',
      choices: ['A vacuum', 'A medium', 'Only solid walls', 'Only electromagnetic fields'],
      answer: 1,
      explain: 'Sound propagates through matter: gases, liquids, or solids.',
    },
    {
      prompt: 'Which pair matches correctly?',
      choices: [
        'Frequency -> loudness',
        'Amplitude -> pitch',
        'Frequency -> pitch',
        'Wavelength -> silence',
      ],
      answer: 2,
      explain: 'Frequency is perceived as pitch for periodic sounds.',
    },
    {
      prompt: '16000 Hz equals:',
      choices: ['1.6 kHz', '16 kHz', '160 kHz', '0.16 kHz'],
      answer: 1,
      explain: 'Divide by 1000: 16000 Hz = 16 kHz.',
    },
    {
      prompt: 'Aperiodic sound is commonly described as:',
      choices: ['Pure tone', 'Harmonic series', 'Noise', 'Octave'],
      answer: 2,
      explain: 'Aperiodic signals usually have no clear pitch and are heard as noise.',
    },
    {
      prompt: 'In digital audio, clipping risk increases near:',
      choices: ['-60 dBFS', '0 dBFS', '20 dBSPL', '1 Hz'],
      answer: 1,
      explain: '0 dBFS is the digital maximum.',
    },
    {
      prompt: 'What happens when frequency doubles?',
      choices: ['One octave down', 'No pitch change', 'One octave up', 'Twice the amplitude'],
      answer: 2,
      explain: 'Doubling frequency raises pitch by one octave.',
    },
    {
      prompt: 'Which statement about wave drawings is true?',
      choices: [
        'Transverse drawing is the literal path of air molecules in sound.',
        'Sound cannot be graphed over time.',
        'Transverse waveform is a useful graph representation of sound.',
        'Only sine waves can be graphed.',
      ],
      answer: 2,
      explain: 'Waveforms are graph representations of pressure change over time.',
    },
    {
      prompt: 'Typical human hearing range is approximately:',
      choices: ['2 Hz to 2 kHz', '20 Hz to 20 kHz', '200 Hz to 2 MHz', '1 Hz to 10 Hz'],
      answer: 1,
      explain: 'Commonly cited range is about 20 Hz to 20 kHz.',
    },
  ],
};
