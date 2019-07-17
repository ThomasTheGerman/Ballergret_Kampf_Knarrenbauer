/*jshint esversion: 6 */


var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/Annegret Kramp-Karrenbauer/gi, 'Ballergret Kampf-Knarrenbauer');
  value = value.replace(/Kramp-Karrenbauer/gi, 'Kampf-Knarrenbauer');
  value = value.replace(/Karrenbauer/gi, 'Knarrenbauer');
  value = value.replace(/AKK /gi, 'AKK-47');
  node.nodeValue = value;
}

window.onload = findAndReplace();
