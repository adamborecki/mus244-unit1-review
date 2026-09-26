window.LEARN_APP_CONFIG = {
  slug: 'filters',
  course: 'MUS 244',
  title: '🎚️ Filters and EQ Basics',
  intro:
    'Review low-pass/high-pass ideas, cutoff and resonance, and practical filter/EQ moves used in beginner mixing.',
  difficulty: 'Beginner',
  estimatedMinutes: 12,
  keyTerms: ['low-pass', 'high-pass', 'cutoff', 'resonance', 'shelf EQ'],
  quizGoalSeconds: 130,
  resource: {
    label: 'Ableton Learning Synths Playground',
    url: 'https://learningsynths.ableton.com/en/playground',
  },
  guided: [
    {
      title: 'Frequency spectrum refresher',
      body:
        'Humans hear roughly 20 Hz to 20 kHz. Filters and EQ shape specific parts of this range.',
      points: [
        'Lower frequencies feel bass-heavy.',
        'Higher frequencies can add brightness.',
        'Shaping frequency balance changes clarity and tone.',
      ],
      checkpoint: {
        question: 'The human hearing range used in class is about:',
        options: ['2 Hz to 2 kHz', '20 Hz to 20 kHz', '200 Hz to 200 kHz', '0 Hz to 1 kHz'],
        answer: 1,
        correct: 'Correct. About 20 Hz to 20 kHz.',
        wrong: 'Use the standard range discussed in acoustics.',
      },
    },
    {
      title: 'Low-pass and high-pass',
      body:
        'Low-pass (high-cut) keeps lows and removes highs. High-pass (low-cut) keeps highs and removes lows.',
      points: [
        'Naming can be confusing: low-pass = high-cut.',
        'High-pass = low-cut.',
        'These are core subtractive synthesis and mixing tools.',
      ],
      checkpoint: {
        question: 'A high-pass filter is also called:',
        options: ['High-cut', 'Low-cut', 'Bandpass', 'Shelf boost'],
        answer: 1,
        correct: 'Yes. High-pass is also called low-cut.',
        wrong: 'Check the alias terms from class.',
      },
    },
    {
      title: 'Cutoff, slope, resonance',
      body:
        'Filter behavior is shaped by where cutoff sits, how steep slope is, and whether resonance boosts around cutoff.',
      points: [
        'Cutoff chooses where filtering starts.',
        'Slope controls how quickly it attenuates.',
        'Resonance emphasizes frequencies near cutoff.',
      ],
      checkpoint: {
        question: 'Which control emphasizes frequencies around cutoff?',
        options: ['Release', 'Resonance (Q)', 'Sustain', 'Attack'],
        answer: 1,
        correct: 'Correct. Resonance (Q) boosts near cutoff.',
        wrong: 'Look for the filter-specific emphasis control.',
      },
    },
    {
      title: 'Parametric, bandpass, shelf',
      body:
        'Beyond LP/HP, EQ includes bell (parametric), bandpass, and shelf filters for targeted shaping.',
      points: [
        'Parametric EQ uses center frequency, gain, and Q.',
        'Bandpass lets only a middle band through.',
        'Shelf filters boost/cut then stay changed above or below cutoff.',
      ],
      checkpoint: {
        question: 'Which statement about shelf EQ is true?',
        options: [
          'It always returns to 0 dB after the center point.',
          'It boosts or cuts and then stays at that level.',
          'It only works on 1 kHz exactly.',
          'It is identical to a gate.',
        ],
        answer: 1,
        correct: 'Right. Shelf EQ changes level and stays there across a region.',
        wrong: 'Think about the difference between bell and shelf shapes.',
      },
    },
    {
      title: 'Practical beginner moves',
      body:
        'A common workflow is low-cutting non-bass tracks and then making gentle EQ moves for clarity.',
      points: [
        'Use low-cut on many non-bass sources.',
        'Use small boosts/cuts before extreme moves.',
        'Always compare with bypass to hear actual impact.',
      ],
      checkpoint: {
        question: 'A common mixing move from class was to:',
        options: [
          'Low-cut almost everything except bass-heavy sources',
          'Boost 20 Hz on every track',
          'Use no filters at all',
          'Hard-pan every channel before EQ',
        ],
        answer: 0,
        correct: 'Exactly. Low-cut cleanup is a common starter move.',
        wrong: 'Pick the practical cleanup approach used in class.',
      },
    },
  ],
  quiz: [
    {
      prompt: 'Low-pass filter mainly allows:',
      choices: ['Low frequencies through', 'High frequencies through', 'No frequencies through', 'Only noise through'],
      answer: 0,
      explain: 'Low-pass keeps lows, cuts highs.',
    },
    {
      prompt: 'High-pass filter is also known as:',
      choices: ['Low shelf', 'Low cut', 'Band reject', 'Parametric bell'],
      answer: 1,
      explain: 'High-pass and low-cut refer to the same idea.',
    },
    {
      prompt: 'Resonance (Q) usually does what?',
      choices: [
        'Boosts around cutoff frequency',
        'Changes project tempo',
        'Changes MIDI channel',
        'Sets waveform shape directly',
      ],
      answer: 0,
      explain: 'Resonance emphasizes the region near cutoff.',
    },
    {
      prompt: 'A parametric EQ (bell) uses which controls?',
      choices: ['Center frequency, gain, Q', 'Attack, decay, sustain', 'Rate, depth, sync', 'Threshold, ratio, knee'],
      answer: 0,
      explain: 'Bell EQ is defined by center frequency, gain, and Q.',
    },
    {
      prompt: 'Bandpass filter behavior:',
      choices: [
        'Only low frequencies pass',
        'Only high frequencies pass',
        'Only a selected band passes',
        'Everything is boosted equally',
      ],
      answer: 2,
      explain: 'Bandpass allows a middle band and attenuates outside it.',
    },
    {
      prompt: 'Shelf EQ differs from bell EQ because shelf:',
      choices: [
        'Always affects one exact frequency only',
        'Changes level then stays changed across a range',
        'Cannot cut, only boost',
        'Is only for vocals',
      ],
      answer: 1,
      explain: 'Shelf boosts/cuts and keeps that offset across highs or lows.',
    },
    {
      prompt: 'Common beginner cleanup move:',
      choices: [
        'Low-cut non-bass tracks',
        'Boost extreme highs on every track',
        'Remove all mid frequencies',
        'Disable filtering completely',
      ],
      answer: 0,
      explain: 'High-pass cleanup on non-bass sources is common.',
    },
    {
      prompt: 'Cutoff frequency mainly sets:',
      choices: [
        'Where filtering starts in the spectrum',
        'The song key',
        'The MIDI note length',
        'Speaker impedance',
      ],
      answer: 0,
      explain: 'Cutoff determines the transition point for filtering.',
    },
  ],
};
