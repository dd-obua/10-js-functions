// Poll app

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = prompt(`
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
    `);

    const inputValue = Number(input);

    if (input && inputValue >= 0 && inputValue <= 3) {
      switch (inputValue) {
        case 0:
          this.answers[0]++;
          break;
        case 1:
          this.answers[1]++;
          break;
        case 2:
          this.answers[2]++;
          break;
        case 3:
          this.answers[3]++;
      }
      console.log(inputValue, this.answers);
    }
  },
};

const answerPoll = document.querySelector('.poll');

answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));
