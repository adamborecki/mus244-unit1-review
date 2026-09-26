window.LEARN_APP_CONFIG = {
  slug: 'synth',
  course: 'MUS 244',
  title: '🎹 Synthesis Fundamentals',
  intro:
    'Compare synthesis vs sampling, then review the subtractive synthesis chain and common oscillator waveforms.',
  difficulty: 'Beginner',
  estimatedMinutes: 13,
  keyTerms: ['oscillator', 'subtractive synthesis', 'sampling', 'timbre', 'modulation'],
  quizGoalSeconds: 145,
  resource: {
    label: 'Ableton Learning Synths Playground',
    url: 'https://learningsynths.ableton.com/en/playground',
  },
  guided: [
    {
      title: 'Synthesis vs sampling',
      body:
        'Synthesis builds sound from generated waveforms. Sampling reshapes recorded audio clips or instrument recordings.',
      points: [
        'Synthesizers generate source signals.',
        'Samplers replay and transform recordings.',
        'Both methods are common in modern production.',
      ],
      checkpoint: {
        question: 'Which example is sampling?',
        options: [
          'Building a tone from sine waves',
          'Playing back and pitching a recorded piano note',
          'Using an LFO on filter cutoff',
          'Drawing an ADSR envelope on oscillator pitch',
        ],
        answer: 1,
        correct: 'Correct. Playback of recorded audio is sampling.',
        wrong: 'Look for the option that starts from existing recordings.',
      },
    },
    {
      title: 'Oscillators as the source',
      body:
        'Oscillators generate periodic waveforms (saw, square, triangle, sine) that become the raw material for synthesis.',
      points: [
        'Saw and square are common subtractive starting points.',
        'Sine is the purest waveform.',
        'Wave shape strongly affects harmonic content.',
      ],
      checkpoint: {
        question: 'In subtractive synthesis, what usually comes first?',
        options: ['LFO', 'Filter', 'Oscillator', 'Reverb'],
        answer: 2,
        correct: 'Right. The oscillator is the source signal.',
        wrong: 'Re-check typical signal flow in class notes.',
      },
    },
    {
      title: 'Subtractive signal flow',
      body:
        'Typical flow: oscillator creates rich harmonics, filter removes some frequencies, then amplitude stage shapes level.',
      points: [
        'Subtractive means carving away frequency content.',
        'Filters are central for tone sculpting.',
        'Envelope and modulation add movement over time.',
      ],
      checkpoint: {
        question: 'Why is it called subtractive synthesis?',
        options: [
          'You subtract notes from MIDI clips',
          'You remove frequencies from a richer source',
          'You lower sample rate',
          'You only use subtraction math in DSP code',
        ],
        answer: 1,
        correct: 'Yes. The filter subtracts parts of the spectrum.',
        wrong: 'Think about removing spectral content from the source.',
      },
    },
    {
      title: 'Modulation overview',
      body:
        'Modulation means one parameter changes another. In basic synths this often comes from LFOs and envelopes.',
      points: [
        'LFO = repeating change pattern.',
        'Envelope = note-triggered shape over time.',
        'Targets can include pitch, filter, and amplitude.',
      ],
      checkpoint: {
        question: 'Which pair correctly matches behavior?',
        options: [
          'LFO -> note-off only',
          'Envelope -> always repeating regardless of note events',
          'LFO -> repeating modulation pattern',
          'Oscillator -> modulation source only',
        ],
        answer: 2,
        correct: 'Correct. LFOs are repeating modulation sources.',
        wrong: 'Look for the repeating modulation behavior.',
      },
    },
    {
      title: 'Patch mindset',
      body:
        'A practical patch process: pick source wave, set filter tone, shape ADSR, then add subtle modulation for motion.',
      points: [
        'Start simple and change one control at a time.',
        'Listen for what each parameter changes.',
        'Document what works so you can recreate sounds.',
      ],
      checkpoint: {
        question: 'Best beginner workflow for patch design is to:',
        options: [
          'Randomly tweak all knobs at once',
          'Change one parameter at a time and listen',
          'Only use presets forever',
          'Skip envelopes and filters',
        ],
        answer: 1,
        correct: 'Exactly. Isolating changes builds understanding faster.',
        wrong: 'Choose the workflow that isolates cause and effect.',
      },
    },
  ],
  quiz: [
    {
      prompt: 'Synthesis is best described as:',
      choices: [
        'Only recording acoustic instruments',
        'Creating sounds from generated signals',
        'Only editing existing samples',
        'Only mastering with EQ',
      ],
      answer: 1,
      explain: 'Synthesis creates sound from generated waveforms and DSP.',
    },
    {
      prompt: 'Sampling is best described as:',
      choices: [
        'Building every sound from sine partials only',
        'Manipulating recorded audio snippets',
        'Removing frequencies with low-pass only',
        'Converting tempo to frequency',
      ],
      answer: 1,
      explain: 'Sampling starts from recordings.',
    },
    {
      prompt: 'Common subtractive source waveform choice:',
      choices: ['Saw or square', 'Silence', 'White page', 'Metronome only'],
      answer: 0,
      explain: 'Saw/square offer rich harmonics for filtering.',
    },
    {
      prompt: 'Subtractive synthesis primarily shapes timbre using:',
      choices: ['Filters', 'Lyrics', 'Room acoustics only', 'MIDI channels'],
      answer: 0,
      explain: 'Filters remove frequencies and sculpt tone.',
    },
    {
      prompt: 'Modulation in synthesis means:',
      choices: [
        'A parameter changes another parameter over time',
        'Only raising volume',
        'Only transposing notes',
        'Deleting harmonics permanently',
      ],
      answer: 0,
      explain: 'Modulation is one control source changing a target.',
    },
    {
      prompt: 'Which is usually note-triggered and not always repeating?',
      choices: ['LFO', 'Envelope', 'Oscillator pitch', 'Sample rate'],
      answer: 1,
      explain: 'Envelopes are tied to note on/off behavior.',
    },
    {
      prompt: 'Best first step for learning patch design:',
      choices: [
        'Tweak everything at once',
        'Disable audio output',
        'Change one control at a time',
        'Never touch filter controls',
      ],
      answer: 2,
      explain: 'Isolating changes makes cause/effect clear.',
    },
    {
      prompt: 'Oscillator role in a basic synth patch:',
      choices: ['Generate source waveform', 'Copy homework', 'Measure BPM only', 'Store presets only'],
      answer: 0,
      explain: 'Oscillator is the source sound generator.',
    },
  ],
};
