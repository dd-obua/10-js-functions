// Poll app

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = Number(
      prompt(`
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
    `)
    );

    switch (input) {
      case 0:
        answers[0]++;
        break;
      case 1:
        answers[1]++;
        break;
      case 2:
        answers[2]++;
        break;
      case 3:
        answers[3]++;
      default:
        'Invalid input';
    }
  },
};

poll.registerNewAnswer();
