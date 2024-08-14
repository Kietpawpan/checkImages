// CURSUR : https://codepen.io/bharat-gupta/pen/gZMOQO 
var cursor = true;
var speed = 300;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);

// Img classification from https://www.geeksforgeeks.org/how-to-set-up-the-ml5js-library/

let classifier;
let imageElement = document.getElementById('image');
let resultElement = document.getElementById('result');

function setup() {
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

document.getElementById('file-input')
        .addEventListener('change', handleFileSelect);
function handleFileSelect(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            imageElement.src = e.target.result;
            imageElement.style.display = 'block';
            imageElement.onload = function () {
                classifyFn();
            };
        };
        reader.readAsDataURL(file);
    	resultElement.innerHTML = "Checking...<span id='cursor'>_</span>";
    }
}

function classifyFn() {
    console.log('Classifying image...');
    classifier.classify(imageElement)
        .then(results => {
            console.log('Classification results:', results);
            let highestConfidenceResult = results.reduce((max, result) =>
                result.confidence > max.confidence ? result : max,
                { label: '', confidence: 0 }
            );
     var gurl = 'https://translate.google.co.th/details?sl=en&tl=th&text=';
     var gurl2 = '&op=translate';
     var turl = gurl + highestConfidenceResult.label + gurl2;
     resultElement.innerText = `Label: ${highestConfidenceResult.label}\nConfidence: 
     ${(highestConfidenceResult.confidence * 100).toFixed(2)}%`;
 
setTimeout(transt, 3000);
function transt() {
 resultElement.innerHTML = "Translating...<span id='cursor'>_</span>";
}



setTimeout(trans, 5000);
function trans() {
  window.location.href =turl;
}

        })
        .catch(error => {
            console.error('Classification error:', error);
            resultElement.innerText = 'Error classifying image.';

        });
}
setup();
