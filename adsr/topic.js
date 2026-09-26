window.LEARN_APP_CONFIG = {
  slug: 'adsr',
  course: 'MUS 244',
  title: '📈 ADSR Envelope Lab',
  intro:
    'Practice Attack, Decay, Sustain, and Release so you can shape note behavior clearly in subtractive synthesis.',
  difficulty: 'Beginner',
  estimatedMinutes: 11,
  keyTerms: ['attack', 'decay', 'sustain', 'release', 'envelope'],
  quizGoalSeconds: 125,
  resource: {
    label: 'Ableton Learning Synths: Envelopes',
    url: 'https://learningsynths.ableton.com/en/envelopes/putting-the-envelope-together',
  },
  guided: [
    {
      title: 'Envelope concept',
      body:
        'An envelope describes how a target parameter changes over time after note on and note off events.',
      points: [
        'ADSR is a common four-stage envelope.',
        'Often applied to amplitude in beginner patches.',
        'Can also control filter or pitch for special effects.',
      ],
      checkpoint: {
        question: 'ADSR is mainly a tool for:',
        options: [
          'Static EQ curves only',
          'Time-based shaping of a parameter',
          'MIDI note naming',
          'Speaker calibration only',
        ],
        answer: 1,
        correct: 'Correct. ADSR shapes parameter behavior over time.',
        wrong: 'Think time-shape after note events.',
      },
    },
    {
      title: 'Attack stage',
      body:
        'Attack is the time it takes to rise from zero to maximum level after a note is triggered.',
      points: [
        'Short attack = immediate hit/pluck feel.',
        'Long attack = slow fade-in or swell.',
        'Attack affects articulation and perceived softness.',
      ],
      checkpoint: {
        question: 'To make a pad fade in slowly, increase:',
        options: ['Attack', 'Release only', 'Cutoff slope', 'Sample rate'],
        answer: 0,
        correct: 'Yes. Longer attack creates a swell.',
        wrong: 'Choose the stage that controls initial rise time.',
      },
    },
    {
      title: 'Decay and sustain',
      body:
        'Decay is the time from maximum down to sustain level. Sustain is a level, not a duration.',
      points: [
        'Decay controls how fast the drop happens.',
        'Sustain sets held-note level while key is down.',
        'High sustain keeps notes fuller while held.',
      ],
      checkpoint: {
        question: 'Which ADSR term is NOT a time value?',
        options: ['Attack', 'Decay', 'Sustain', 'Release'],
        answer: 2,
        correct: 'Correct. Sustain is a level, not a time.',
        wrong: 'Check which stage is defined as a level setting.',
      },
    },
    {
      title: 'Release stage',
      body:
        'Release is the time it takes for sound to fade out after note off.',
      points: [
        'Short release ends quickly after key-up.',
        'Long release leaves a tail.',
        'Useful for smooth transitions between notes.',
      ],
      checkpoint: {
        question: 'To avoid abrupt cutoff when releasing keys, increase:',
        options: ['Release', 'Pitch bend range', 'LFO rate only', 'Tempo'],
        answer: 0,
        correct: 'Right. Longer release smooths note endings.',
        wrong: 'Pick the stage after note-off.',
      },
    },
    {
      title: 'Applying ADSR musically',
      body:
        'Good starter method: set amp envelope first, then optionally try filter envelope for brightness movement.',
      points: [
        'Amp ADSR defines overall note shape.',
        'Filter ADSR can make attack brighter or softer.',
        'Save presets after you find useful shapes.',
      ],
      checkpoint: {
        question: 'In beginner workflows, ADSR is most commonly applied first to:',
        options: ['Amplitude/volume', 'MIDI channel number', 'Pan law', 'Sample rate'],
        answer: 0,
        correct: 'Exactly. Start with amp envelope for note shape.',
        wrong: 'Choose the target most often used first in class demos.',
      },
    },
  ],
  quiz: [
    {
      prompt: 'Attack means:',
      choices: [
        'Time from note-off to silence',
        'Time to rise to maximum after note-on',
        'Held level while key is down',
        'Amount of filter resonance',
      ],
      answer: 1,
      explain: 'Attack is the initial rise time.',
    },
    {
      prompt: 'Decay means:',
      choices: [
        'Time from maximum down to sustain level',
        'Held level while note is down',
        'How long MIDI note length is',
        'How fast LFO is',
      ],
      answer: 0,
      explain: 'Decay is the drop to sustain level.',
    },
    {
      prompt: 'Sustain is:',
      choices: [
        'A time setting',
        'A level while key is held',
        'A release curve type',
        'An oscillator waveform',
      ],
      answer: 1,
      explain: 'Sustain is a level, not a duration.',
    },
    {
      prompt: 'Release controls:',
      choices: [
        'Fade out time after note-off',
        'Rise time after note-on',
        'Filter cutoff only',
        'Pitch quantization',
      ],
      answer: 0,
      explain: 'Release shapes how quickly sound disappears after key-up.',
    },
    {
      prompt: 'To create a pluck-like quick onset, use:',
      choices: ['Long attack', 'Short attack', 'High release only', 'Low sustain only'],
      answer: 1,
      explain: 'Short attack gives immediate onset.',
    },
    {
      prompt: 'To make notes continue briefly after key release, increase:',
      choices: ['Decay', 'Release', 'Attack', 'Sustain only'],
      answer: 1,
      explain: 'Longer release creates a tail.',
    },
    {
      prompt: 'Common first ADSR target in class:',
      choices: ['Amplitude envelope', 'MIDI velocity range', 'Tempo map', 'Delay sync mode'],
      answer: 0,
      explain: 'Amp envelope is usually the first practical target.',
    },
    {
      prompt: 'Which statement is correct?',
      choices: [
        'ADSR only works on pitch',
        'ADSR is irrelevant in subtractive synthesis',
        'ADSR can shape amplitude, filter, or pitch over time',
        'ADSR always repeats like an LFO',
      ],
      answer: 2,
      explain: 'Envelopes can target different parameters, not only amplitude.',
    },
  ],
};
