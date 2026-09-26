window.LEARN_APP_CONFIG = {
  slug: 'lfos',
  course: 'MUS 244',
  title: '🔁 LFO Modulation Lab',
  intro:
    'Learn how low-frequency oscillators create repeating movement in pitch, filter, and amplitude for subtractive synth patches.',
  difficulty: 'Beginner',
  estimatedMinutes: 11,
  keyTerms: ['LFO', 'rate', 'depth', 'target', 'modulation'],
  quizGoalSeconds: 125,
  resource: {
    label: 'Ableton Learning Synths Playground',
    url: 'https://learningsynths.ableton.com/en/playground',
  },
  guided: [
    {
      title: 'What an LFO is',
      body:
        'LFO means low-frequency oscillator. It is usually below the audible pitch range and used to modulate other parameters.',
      points: [
        'LFOs often run below 20 Hz.',
        'They are control signals more than audible tones.',
        'Their job is to create repetitive change.',
      ],
      checkpoint: {
        question: 'Why is it called a low-frequency oscillator?',
        options: [
          'It only works on low notes',
          'It usually runs at low rates used for control modulation',
          'It always lowers volume',
          'It has no waveform',
        ],
        answer: 1,
        correct: 'Correct. LFOs are low-rate oscillators used as modulators.',
        wrong: 'Think about frequency range and control purpose.',
      },
    },
    {
      title: 'Modulation targets',
      body:
        'LFOs can target pitch, filter cutoff, or amplitude. Each target creates a different motion character.',
      points: [
        'Pitch target can create vibrato.',
        'Filter target can create wobble or sweep motion.',
        'Amplitude target can create tremolo.',
      ],
      checkpoint: {
        question: 'LFO -> amplitude usually creates:',
        options: ['Tremolo', 'Reverb tail', 'Compressor pumping only', 'Pitch quantization'],
        answer: 0,
        correct: 'Yes. Repeating amplitude modulation is tremolo.',
        wrong: 'Choose the term for repeating loudness modulation.',
      },
    },
    {
      title: 'Rate and depth',
      body:
        'Rate controls speed of modulation. Depth (amount) controls how strong the modulation is.',
      points: [
        'Higher rate = faster movement.',
        'Higher depth = larger parameter swings.',
        'Small depth can add subtle life without sounding obvious.',
      ],
      checkpoint: {
        question: 'If modulation is too wild, first reduce:',
        options: ['Rate only', 'Depth/amount', 'Oscillator count', 'Sample bit depth'],
        answer: 1,
        correct: 'Correct. Reducing depth usually tames extreme movement fastest.',
        wrong: 'Look for the control that sets modulation strength.',
      },
    },
    {
      title: 'Wave shape and feel',
      body:
        'LFO waveform shape affects how movement feels. Sine is smooth, square is abrupt, triangle is linear up/down.',
      points: [
        'Sine wave motion feels organic and smooth.',
        'Square wave modulation jumps between two states.',
        'Wave shape choice changes groove and character.',
      ],
      checkpoint: {
        question: 'Which LFO shape usually gives smooth siren-like motion?',
        options: ['Sine', 'Square', 'Noise', 'Sample and hold only'],
        answer: 0,
        correct: 'Right. Sine modulation is smooth and continuous.',
        wrong: 'Pick the smoothest periodic waveform.',
      },
    },
    {
      title: 'Practical patching',
      body:
        'A beginner-friendly method is: choose one target, set moderate rate, then raise depth gradually while listening.',
      points: [
        'Avoid routing one LFO to too many targets at first.',
        'Compare with LFO bypass often.',
        'Small amounts can make patches feel less static.',
      ],
      checkpoint: {
        question: 'Best first step for clear learning with LFOs is:',
        options: [
          'Route to every parameter at once',
          'Use one target and increase amount slowly',
          'Set depth to max immediately',
          'Disable monitoring while editing',
        ],
        answer: 1,
        correct: 'Exactly. Isolating one target teaches cause and effect.',
        wrong: 'Choose the option that keeps variables controlled.',
      },
    },
  ],
  quiz: [
    {
      prompt: 'LFO most often runs in what range?',
      choices: ['20 Hz to 20 kHz', 'Below about 20 Hz', 'Above 20 kHz', 'Exactly 440 Hz'],
      answer: 1,
      explain: 'LFOs are usually low-rate control oscillators.',
    },
    {
      prompt: 'LFO to pitch commonly creates:',
      choices: ['Tremolo', 'Vibrato', 'Compression', 'Clipping'],
      answer: 1,
      explain: 'Pitch modulation by LFO is vibrato.',
    },
    {
      prompt: 'LFO to amplitude commonly creates:',
      choices: ['Tremolo', 'Chorus only', 'Hard clipping', 'Delay feedback'],
      answer: 0,
      explain: 'Amplitude modulation produces tremolo.',
    },
    {
      prompt: 'Depth/amount controls:',
      choices: [
        'How strong the modulation is',
        'How many notes can play',
        'Project sample rate',
        'The EQ slope only',
      ],
      answer: 0,
      explain: 'Depth sets modulation intensity.',
    },
    {
      prompt: 'Rate controls:',
      choices: ['Modulation speed', 'Master volume', 'Note length', 'MIDI channel'],
      answer: 0,
      explain: 'Rate is modulation speed.',
    },
    {
      prompt: 'Which shape gives abrupt on/off style modulation?',
      choices: ['Sine', 'Triangle', 'Square', 'Saw only'],
      answer: 2,
      explain: 'Square jumps between two levels.',
    },
    {
      prompt: 'Good beginner troubleshooting move when motion is too intense:',
      choices: ['Raise depth', 'Lower depth', 'Raise resonance to max', 'Disable audio output'],
      answer: 1,
      explain: 'Lowering depth usually calms the effect quickly.',
    },
    {
      prompt: 'In synthesis, modulation means:',
      choices: [
        'One parameter changing another over time',
        'Only recording automation in DAW',
        'Only editing samples',
        'Only changing tempo',
      ],
      answer: 0,
      explain: 'Modulation is one signal controlling another parameter.',
    },
  ],
};
