(() => {
  const config = window.LEARN_APP_CONFIG;
  if (!config) return;

  const byId = (id) => document.getElementById(id);

  const elements = {
    topicTitle: byId('topicTitle'),
    topicIntro: byId('topicIntro'),
    topicDifficulty: byId('topicDifficulty'),
    topicTime: byId('topicTime'),
    topicResource: byId('topicResource'),
    stats: byId('stats'),
    modeButtons: Array.from(document.querySelectorAll('.mode-btn')),
    guidedPanel: byId('guidedPanel'),
    quizPanel: byId('quizPanel'),
    deliverablePanel: byId('deliverablePanel'),
    guidedStepCounter: byId('guidedStepCounter'),
    guidedProgressBar: byId('guidedProgressBar'),
    guidedProgressText: byId('guidedProgressText'),
    guidedTitle: byId('guidedTitle'),
    guidedBody: byId('guidedBody'),
    guidedPoints: byId('guidedPoints'),
    checkpointPrompt: byId('checkpointPrompt'),
    checkpointOptions: byId('checkpointOptions'),
    checkpointFeedback: byId('checkpointFeedback'),
    prevStepBtn: byId('prevStepBtn'),
    nextStepBtn: byId('nextStepBtn'),
    quizStatus: byId('quizStatus'),
    quizPrompt: byId('quizPrompt'),
    quizOptions: byId('quizOptions'),
    quizFeedback: byId('quizFeedback'),
    nextQuestionBtn: byId('nextQuestionBtn'),
    restartQuizBtn: byId('restartQuizBtn'),
    studentName: byId('studentName'),
    studentSection: byId('studentSection'),
    studentTerms: byId('studentTerms'),
    studentWin: byId('studentWin'),
    studentQuestion: byId('studentQuestion'),
    studentNext: byId('studentNext'),
    generateDeliverableBtn: byId('generateDeliverableBtn'),
    copyDeliverableBtn: byId('copyDeliverableBtn'),
    deliverableOutput: byId('deliverableOutput'),
    deliverableStatus: byId('deliverableStatus'),
  };

  const state = {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    badges: new Set(),
    milestones: new Set(),
    mode: 'guided',
    guided: {
      index: 0,
      completed: new Set(),
      feedback: '',
      feedbackType: '',
    },
    quiz: {
      order: [],
      index: 0,
      score: 0,
      answered: false,
      selectedChoice: null,
      feedback: '',
      feedbackType: '',
      finished: false,
      startedAt: 0,
      elapsedSeconds: 0,
    },
  };

  const sessionId = Math.random().toString(36).slice(2, 8);

  init();

  function init() {
    fillTopicHeader();
    bindModeButtons();
    bindGuided();
    bindQuiz();
    bindDeliverable();
    resetQuiz();
    logEvent('quiz_start', { totalQuestions: config.quiz.length });
    renderGuided();
    renderQuiz();
    renderStats();
    generateDeliverable();
  }

  function fillTopicHeader() {
    document.title = `${config.title} | MUS 244 Learning App`;
    elements.topicTitle.textContent = config.title;
    elements.topicIntro.textContent = config.intro;
    elements.topicDifficulty.textContent = `Level: ${config.difficulty || 'Beginner'}`;
    elements.topicTime.textContent = `Time: ${config.estimatedMinutes || '10-15'} min`;

    if (elements.topicResource) {
      if (config.resource && config.resource.url) {
        elements.topicResource.innerHTML = '';
        const a = document.createElement('a');
        a.href = config.resource.url;
        a.target = '_blank';
        a.rel = 'noreferrer noopener';
        a.className = 'link-chip';
        a.textContent = config.resource.label || 'External resource';
        elements.topicResource.appendChild(a);
      } else {
        elements.topicResource.innerHTML = '';
      }
    }
  }

  function bindModeButtons() {
    elements.modeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        switchMode(btn.dataset.mode);
      });
    });
  }

  function switchMode(mode) {
    state.mode = mode;
    elements.modeButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.mode === mode);
    });

    elements.guidedPanel.classList.toggle('is-active', mode === 'guided');
    elements.quizPanel.classList.toggle('is-active', mode === 'quiz');
    elements.deliverablePanel.classList.toggle('is-active', mode === 'deliverable');

    if (mode === 'deliverable') {
      generateDeliverable();
    }
  }

  function bindGuided() {
    elements.prevStepBtn.addEventListener('click', () => {
      if (state.guided.index <= 0) return;
      state.guided.index -= 1;
      state.guided.feedback = '';
      state.guided.feedbackType = '';
      renderGuided();
    });

    elements.nextStepBtn.addEventListener('click', () => {
      if (state.guided.index >= config.guided.length - 1) return;
      state.guided.index += 1;
      state.guided.feedback = '';
      state.guided.feedbackType = '';
      renderGuided();
    });
  }

  function renderGuided() {
    const step = config.guided[state.guided.index];
    const completed = state.guided.completed.size;
    const total = config.guided.length;
    const progressPct = Math.round((completed / total) * 100);

    elements.guidedStepCounter.textContent = `${state.guided.index + 1} / ${total}`;
    elements.guidedProgressBar.style.width = `${progressPct}%`;
    elements.guidedProgressText.textContent = `${completed}/${total} checkpoints cleared (${progressPct}%)`;

    elements.guidedTitle.textContent = step.title;
    elements.guidedBody.textContent = step.body;
    elements.guidedPoints.innerHTML = step.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('');

    elements.checkpointPrompt.textContent = step.checkpoint.question;
    elements.checkpointOptions.innerHTML = '';

    step.checkpoint.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.type = 'button';
      button.textContent = option;
      button.addEventListener('click', () => answerCheckpoint(index));
      elements.checkpointOptions.appendChild(button);
    });

    elements.checkpointFeedback.textContent = state.guided.feedback;
    elements.checkpointFeedback.classList.toggle('is-good', state.guided.feedbackType === 'good');
    elements.checkpointFeedback.classList.toggle('is-bad', state.guided.feedbackType === 'bad');

    elements.prevStepBtn.disabled = state.guided.index === 0;
    elements.nextStepBtn.disabled = state.guided.index === total - 1;
  }

  function answerCheckpoint(choiceIndex) {
    const step = config.guided[state.guided.index];
    const isCorrect = choiceIndex === step.checkpoint.answer;

    if (isCorrect) {
      const firstTime = !state.guided.completed.has(state.guided.index);
      state.guided.completed.add(state.guided.index);
      state.guided.feedback = step.checkpoint.correct || 'Correct. Nice work.';
      state.guided.feedbackType = 'good';

      if (firstTime) {
        awardXp(22);
      }

      if (
        state.guided.completed.size === config.guided.length &&
        !state.milestones.has('guided-complete')
      ) {
        state.milestones.add('guided-complete');
        awardXp(30);
        unlockBadge('Guided Complete');
      }
    } else {
      state.guided.feedback = step.checkpoint.wrong || 'Not yet. Re-check the key points and try again.';
      state.guided.feedbackType = 'bad';
      state.streak = 0;
    }

    renderGuided();
    renderStats();
    generateDeliverable();
  }

  function bindQuiz() {
    elements.nextQuestionBtn.addEventListener('click', () => {
      if (!state.quiz.answered && !state.quiz.finished) return;

      if (state.quiz.finished) {
        switchMode('deliverable');
        return;
      }

      const isLastQuestion = state.quiz.index >= config.quiz.length - 1;
      if (isLastQuestion) {
        finishQuiz();
        return;
      }

      state.quiz.index += 1;
      state.quiz.answered = false;
      state.quiz.selectedChoice = null;
      state.quiz.feedback = '';
      state.quiz.feedbackType = '';
      renderQuiz();
    });

    elements.restartQuizBtn.addEventListener('click', async () => {
      const hasProgress =
        state.quiz.index > 0 || state.quiz.answered || state.quiz.finished || state.quiz.score > 0;

      if (hasProgress) {
        const confirmed = await askConfirm({
          title: 'Restart the quiz?',
          body: `You're on question ${Math.min(state.quiz.index + 1, config.quiz.length)}/${config.quiz.length} with a score of ${state.quiz.score}. Restarting clears this attempt (your guided progress and XP are safe).`,
          confirmLabel: 'Restart Quiz',
        });
        if (!confirmed) return;
      }

      logEvent('quiz_restart', {
        hadProgress: hasProgress,
        atQuestion: state.quiz.finished ? config.quiz.length : state.quiz.index + 1,
        scoreBeforeRestart: state.quiz.score,
      });

      resetQuiz();
      renderQuiz();
      renderStats();
      generateDeliverable();
    });
  }

  function ensureConfirmModal() {
    if (byId('appConfirmOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'appConfirmOverlay';
    overlay.className = 'confirm-overlay hidden';
    overlay.innerHTML = `
      <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirmTitle" aria-describedby="confirmBody">
        <h3 id="confirmTitle"></h3>
        <p id="confirmBody"></p>
        <div class="confirm-actions">
          <button class="btn-ghost" type="button" data-confirm-cancel>Cancel</button>
          <button class="btn" type="button" data-confirm-ok>Confirm</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  function askConfirm({ title, body, confirmLabel }) {
    ensureConfirmModal();
    const overlay = byId('appConfirmOverlay');
    const okBtn = overlay.querySelector('[data-confirm-ok]');
    const cancelBtn = overlay.querySelector('[data-confirm-cancel]');

    overlay.querySelector('#confirmTitle').textContent = title;
    overlay.querySelector('#confirmBody').textContent = body;
    okBtn.textContent = confirmLabel || 'Confirm';

    return new Promise((resolve) => {
      function cleanup(result) {
        overlay.classList.add('hidden');
        okBtn.removeEventListener('click', onOk);
        cancelBtn.removeEventListener('click', onCancel);
        overlay.removeEventListener('keydown', onKey);
        overlay.removeEventListener('click', onBackdrop);
        resolve(result);
      }

      function onOk() {
        cleanup(true);
      }

      function onCancel() {
        cleanup(false);
      }

      function onKey(event) {
        if (event.key === 'Escape') cleanup(false);
      }

      function onBackdrop(event) {
        if (event.target === overlay) cleanup(false);
      }

      okBtn.addEventListener('click', onOk);
      cancelBtn.addEventListener('click', onCancel);
      overlay.addEventListener('keydown', onKey);
      overlay.addEventListener('click', onBackdrop);
      overlay.classList.remove('hidden');
      okBtn.focus();
    });
  }

  function resetQuiz() {
    state.quiz.order = shuffle(Array.from({ length: config.quiz.length }, (_, i) => i));
    state.quiz.index = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    state.quiz.selectedChoice = null;
    state.quiz.feedback = '';
    state.quiz.feedbackType = '';
    state.quiz.finished = false;
    state.quiz.startedAt = Date.now();
    state.quiz.elapsedSeconds = 0;
  }

  function renderQuiz() {
    if (state.quiz.finished) {
      renderQuizResult();
      return;
    }

    const question = getCurrentQuestion();
    elements.quizStatus.textContent = `Question ${state.quiz.index + 1}/${config.quiz.length} | Score ${state.quiz.score}`;
    elements.quizPrompt.textContent = question.prompt;
    elements.quizOptions.innerHTML = '';

    question.choices.forEach((choice, idx) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-btn';
      button.textContent = choice;
      button.disabled = state.quiz.answered;

      if (state.quiz.answered) {
        if (idx === question.answer) {
          button.classList.add('is-correct');
        }
        if (idx === state.quiz.selectedChoice && idx !== question.answer) {
          button.classList.add('is-wrong');
        }
      }

      button.addEventListener('click', () => answerQuiz(idx));
      elements.quizOptions.appendChild(button);
    });

    elements.quizFeedback.textContent = state.quiz.feedback;
    elements.quizFeedback.classList.toggle('is-good', state.quiz.feedbackType === 'good');
    elements.quizFeedback.classList.toggle('is-bad', state.quiz.feedbackType === 'bad');

    elements.nextQuestionBtn.classList.toggle('hidden', !state.quiz.answered);
    elements.nextQuestionBtn.textContent =
      state.quiz.index >= config.quiz.length - 1 ? 'See Results' : 'Next Question';
  }

  function renderQuizResult() {
    const percent = quizPercent();
    const total = config.quiz.length;
    elements.quizStatus.textContent = `Final Score: ${state.quiz.score}/${total} (${percent}%)`;
    elements.quizPrompt.textContent = 'Quiz complete. You can run it again, or switch to Canvas Deliverable.';
    elements.quizFeedback.textContent = `Time: ${state.quiz.elapsedSeconds}s | Best streak: ${state.bestStreak}`;
    elements.quizFeedback.classList.remove('is-bad');
    elements.quizFeedback.classList.add('is-good');
    elements.quizOptions.innerHTML = `
      <div class="result-grid">
        <p class="result-pill"><strong>${state.xp}</strong>XP</p>
        <p class="result-pill"><strong>Level ${getLevel()}</strong>Current Level</p>
        <p class="result-pill"><strong>${state.badges.size}</strong>Badges</p>
        <p class="result-pill"><strong>${state.quiz.elapsedSeconds}s</strong>Time</p>
      </div>
    `;
    elements.nextQuestionBtn.classList.remove('hidden');
    elements.nextQuestionBtn.textContent = 'Open Deliverable';
  }

  function answerQuiz(choiceIndex) {
    if (state.quiz.answered || state.quiz.finished) return;

    const question = getCurrentQuestion();
    const isCorrect = choiceIndex === question.answer;

    state.quiz.answered = true;
    state.quiz.selectedChoice = choiceIndex;

    if (isCorrect) {
      state.quiz.score += 1;
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      const streakBonus = state.streak >= 3 ? 4 : 0;
      awardXp(12 + streakBonus);
      state.quiz.feedback = question.explain || 'Correct.';
      state.quiz.feedbackType = 'good';
    } else {
      state.streak = 0;
      state.quiz.feedback = question.explain || 'Not quite. Check the guided steps and retry.';
      state.quiz.feedbackType = 'bad';
    }

    renderQuiz();
    renderStats();
    generateDeliverable();
  }

  function finishQuiz() {
    state.quiz.finished = true;
    state.quiz.elapsedSeconds = Math.max(1, Math.round((Date.now() - state.quiz.startedAt) / 1000));

    if (quizPercent() >= 80) {
      unlockBadge('Quiz Pro');
    }
    if (quizPercent() === 100) {
      unlockBadge('Perfect Score');
    }
    if (state.bestStreak >= 4) {
      unlockBadge('Combo Builder');
    }

    const speedTarget = config.quizGoalSeconds || 130;
    if (state.quiz.elapsedSeconds <= speedTarget) {
      unlockBadge('Speed Run');
    }

    awardXp(40);

    logEvent('quiz_finish', {
      score: state.quiz.score,
      total: config.quiz.length,
      percent: quizPercent(),
      elapsedSeconds: state.quiz.elapsedSeconds,
      bestStreak: state.bestStreak,
      badges: Array.from(state.badges),
    });

    renderQuiz();
    renderStats();
    generateDeliverable();
  }

  function getCurrentQuestion() {
    const questionIndex = state.quiz.order[state.quiz.index];
    return config.quiz[questionIndex];
  }

  function bindDeliverable() {
    elements.generateDeliverableBtn.addEventListener('click', () => {
      generateDeliverable();
      elements.deliverableStatus.textContent = 'Canvas text generated.';
    });

    elements.copyDeliverableBtn.addEventListener('click', async () => {
      await copyDeliverable();
    });
  }

  function generateDeliverable() {
    const date = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());

    const guidedDone = state.guided.completed.size;
    const guidedTotal = config.guided.length;
    const guidedPct = Math.round((guidedDone / guidedTotal) * 100);
    const scoreText = state.quiz.finished
      ? `${state.quiz.score}/${config.quiz.length} (${quizPercent()}%)`
      : `${state.quiz.score}/${config.quiz.length} (in progress)`;

    const name = cleanValue(elements.studentName.value, '[Your name]');
    const section = cleanValue(elements.studentSection.value, '[Section / class time]');
    const terms = cleanValue(
      elements.studentTerms.value,
      config.keyTerms ? config.keyTerms.slice(0, 3).join(', ') : '[3 key terms]'
    );
    const win = cleanValue(elements.studentWin.value, '[What clicked for you]');
    const question = cleanValue(elements.studentQuestion.value, '[What you still need help with]');
    const next = cleanValue(elements.studentNext.value, '[What you will practice next]');

    const badges = Array.from(state.badges);

    const text = [
      `${config.course || 'MUS 244'} Learning App Check-In`,
      `Module: ${config.title}`,
      `Date: ${date}`,
      `Student: ${name}`,
      `Section: ${section}`,
      '',
      'Progress',
      `- Guided tutorial: ${guidedDone}/${guidedTotal} steps (${guidedPct}%)`,
      `- Quiz score: ${scoreText}`,
      `- Best streak: ${state.bestStreak}`,
      `- XP and Level: ${state.xp} XP (Level ${getLevel()})`,
      `- Badges: ${badges.length ? badges.join(', ') : 'None yet'}`,
      '',
      'Reflection',
      `- Key terms I can explain: ${terms}`,
      `- One thing I understand better: ${win}`,
      `- One thing I still need help with: ${question}`,
      `- What I will practice next: ${next}`,
      '',
      `Generated from /${config.slug} webapp.`,
    ].join('\n');

    elements.deliverableOutput.value = text;
  }

  async function copyDeliverable() {
    const text = elements.deliverableOutput.value;
    if (!text.trim()) {
      elements.deliverableStatus.textContent = 'Generate text first.';
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      elements.deliverableStatus.textContent = 'Copied to clipboard.';
    } catch (_error) {
      elements.deliverableOutput.focus();
      elements.deliverableOutput.select();
      const copied = document.execCommand('copy');
      elements.deliverableStatus.textContent = copied
        ? 'Copied to clipboard.'
        : 'Clipboard blocked. Select the text and copy manually.';
    }
  }

  function renderStats() {
    const guidedPct = Math.round((state.guided.completed.size / config.guided.length) * 100);
    const badges = Array.from(state.badges);
    const badgeMarkup = badges.length
      ? badges.map((badge) => `<span class="badge">${escapeHtml(badge)}</span>`).join('')
      : '<span class="badge">No badges yet</span>';

    elements.stats.innerHTML = `
      <article class="stat-card">
        <p class="label">Level</p>
        <p class="value">${getLevel()}</p>
      </article>
      <article class="stat-card">
        <p class="label">XP</p>
        <p class="value">${state.xp}</p>
      </article>
      <article class="stat-card">
        <p class="label">Guided</p>
        <p class="value">${guidedPct}%</p>
      </article>
      <article class="stat-card">
        <p class="label">Quiz</p>
        <p class="value">${state.quiz.score}/${config.quiz.length}</p>
      </article>
      <article class="stat-card stat-wide">
        <p class="label">Badges</p>
        <div class="badge-list">${badgeMarkup}</div>
      </article>
    `;
  }

  function awardXp(points) {
    state.xp += points;
  }

  function unlockBadge(name) {
    state.badges.add(name);
  }

  function quizPercent() {
    if (!config.quiz.length) return 0;
    return Math.round((state.quiz.score / config.quiz.length) * 100);
  }

  function getLevel() {
    return Math.floor(state.xp / 120) + 1;
  }

  function cleanValue(value, fallback) {
    const trimmed = value.trim();
    return trimmed || fallback;
  }

  function logEvent(type, detail) {
    const base = {
      session: sessionId,
      module: config.slug,
      type,
      ts: new Date().toISOString(),
      ...detail,
    };
    const hash = shortHash(JSON.stringify(base));
    const record = { ...base, hash };
    console.log(`[MUS244] ${JSON.stringify(record)}`);
    return record;
  }

  // cyrb53: small, fast, non-cryptographic string hash. Good enough to flag an
  // obviously-edited console log line, not to stop a determined student.
  function shortHash(str) {
    let h1 = 0xdeadbeef;
    let h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i += 1) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    const combined = 4294967296 * (2097151 & h2) + (h1 >>> 0);
    return combined.toString(16).slice(0, 8);
  }

  function shuffle(arr) {
    const clone = [...arr];
    for (let i = clone.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
