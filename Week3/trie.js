class trieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new trieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new trieNode();
      }
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return curr.endOfWord;
  }

  longestCommonPrefix() {
    let rslt = "";
    let curr = this.root;

    while (true) {
      const keys = Object.keys(curr.children);
      if (keys.length !== 1 || curr.endOfWord) break;
      let nextChar = keys[0];
      rslt += nextChar;
      curr = curr.children[nextChar];
    }
    if(rslt)return rslt
    return "NO"
  }

  dfs(curr,path,rslt){
    if(curr.endOfWord){
        rslt.push(path)
    }
    for(const char in curr.children){
        this.dfs(curr.children[char],path+char,rslt)
    }
  }

  autoComplete(prefix){
    let curr=this.root
    for(const char of prefix){
        if(!curr.children[char])return []
        curr=curr.children[char]
    }
    const rslt=[]
    this.dfs(curr,prefix,rslt)
    return rslt
  }
}

const trie = new Trie();
trie.insert("rohit");
trie.insert("racecar");
trie.insert("raina");
trie.insert("rqam");
trie.insert("race");
trie.insert("thambi");
// console.log(trie.longestCommonPrefix());
console.log(trie.autoComplete("th"))