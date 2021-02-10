function duplicatedWord(paragraph){
  const words = paragraph.split(" ")
  const w ={}
  words.forEach( word => {
    const cleanWord = word.replace(/[^A-Za-z0-9]/g, '')
    if (cleanWord.length >=3){
      w[cleanWord] = (w[cleanWord] || 0) +1
    }
  }
  )
  return w
}

function findSomething(object) {
  return Object.keys(object).find(key => object[key] > 1);
}


function wordFinder(text) {
  const paragraphs = text.toUpperCase().split("\n")
  const wc = paragraphs.map( paragraph => duplicatedWord(paragraph))
  x = []
  wc.forEach((item, i) => {
    if (findSomething(item)){
      x.push({duplicated: Object.keys(item)[0], paragraph:paragraphs[i]})
    }
  })
  return x
}

function callButton(){
  let doc = document.getElementById('duplicated')
  const x = wordFinder(document.getElementById('textInput').value)
  console.log(x)
  x.forEach((item, i) => {
    doc.innerHTML =  (doc.innerHTML||"") +`<div> palavra duplicada: ${item.duplicated} paragrafo -> ${item.paragraph} </div>`
  });
 console.log(doc)
}

console.log(document)
document.getElementById('callButton').addEventListener("click", function(event){
 event.preventDefault()
 callButton()
});
