/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words;
    this.chain = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chain = {};
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1];

      if (chain[word] === undefined) {
        chain[word] = [nextWord];
      } else {
        chain[word].push(nextWord);
      }
    }
    console.log("chain:", chain);
    return chain;
  }

  /** return random text from chains */

  getText(numWords = 100) {
    let key = Object.keys(this.chain);
    let randomText = this.getRandomIndex(key);

    let string = "";
    // let firstWord = key[randomText];
    // string += `${firstWord} `;

    for (let i = 0; i < numWords; i++) {
      let secondWord = "";
      let firstWord;
      if (i === 0 || secondWord === undefined) {
        firstWord = key[randomText];
        string += `${firstWord} `;
        secondWord = this.chain[firstWord];
      }
      let getTextChain = this.chain[firstWord][this.getRandomIndex(secondWord)];
      debugger;

      if (getTextChain === undefined) {
        debugger;
        string += ". ";
        secondWord = key[this.getRandomIndex(key)];
      } else {
        string += `${getTextChain} `;
        secondWord = getTextChain;
      }
    }

    debugger;
    console.log(string);
    return string;
    // MORE CODE HERE
  }

  getRandomIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  }
}

let mm = new MarkovMachine("the cat in the hat");
mm.getText();
