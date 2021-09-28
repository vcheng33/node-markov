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
      if (chain[this.words[i]] === undefined) {
        chain[this.words[i]] = [this.words[i+1]];
      } else {
        chain[this.words[i]].push(this.words[i+1]);
      }
    }
    console.log("chain:", chain);
    return chain;
  }
  


  /** return random text from chains */

  getText(numWords = 100) {
    // MORE CODE HERE
  }
}

let mm = new MarkovMachine("the cat in the hat");