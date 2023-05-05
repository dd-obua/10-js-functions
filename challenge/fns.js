// Poll app

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Get answer
    const input = prompt(
      `${this.question}]\n${this.options.join('\n')}\n(Write option number)`
    );
    const answer = Number(input);

    // Apply short circuiting with &&
    input &&
      typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

const answerPoll = document.querySelector('.poll');
answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
