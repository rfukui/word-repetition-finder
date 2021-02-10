function duplicatedWord(paragraph){
  const words = paragraph.split(" ")
  const w ={}
  words.forEach( word => {
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    if (cleanWord.length >=3){
      w[cleanWord] = (w[cleanWord] || 0) +1
    }
  }
  )
  return w
}

function findSomething(object) {
  return Object.keys(object).filter(key => object[key] > 1)
}


function wordFinder(text) {
  const paragraphs = text.toUpperCase().split("\n")
  const wc = paragraphs.map( paragraph => duplicatedWord(paragraph))
  x = []
  wc.forEach((item, i) => {
    console.log(findSomething(item))
    const dupliWords = findSomething(item).join(', ')
      x.push({duplicated: dupliWords, paragraph:paragraphs[i]})
  })
  return x
}

function callButton(){
  let doc = document.getElementById('duplicated')
  doc.innerHTML = ""
  wordFinder(document.getElementById('textInput').value).forEach((item, i) => {
    doc.innerHTML += `<div> palavras duplicadas: ${item.duplicated} paragrafo -> ${item.paragraph} <br /><br /><br />`
  });
 console.log(doc)
}

console.log(document)
document.getElementById('callButton').addEventListener("click", function(event){
 event.preventDefault()
 callButton()
});
