# https://www.youtube.com/watch?v=BTf05gs_8iU&t=15s
# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
class TrieNode:
    def __init__(self):
        self.children = {} #example map a : TrieNode
        self.isAWord = False


class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        currentNode = self.root

        for character in word:
            if character not in currentNode.children:
                currentNode.children[character] = TrieNode()
            
            currentNode = currentNode.children[character]

        currentNode.isAWord = True
        

    def search(self, word: str) -> bool:
        def deepFirstSearch(j, root):
            currentNode = root

            for i in range(j, len(word)):
                character = word[i]

                if character == ".":
                    for child in currentNode.children.values():
                        if deepFirstSearch(i + 1, child):
                            return True
                    return False
                else:
                    if character not in currentNode.children:
                        return False
                    currentNode = currentNode.children[character]
            return currentNode.isAWord

        return deepFirstSearch(0, self.root)