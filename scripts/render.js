const { remote, ipcRenderer, clipboard, shell } = require('electron');
const path = require('path');
const app = remote.app;
var fs = require('fs');
//Set Initial Faces
var earNumber = 0;
var mouthNumber = 0;
var eyeNumber = 0;
//Import Lists/Create lists if they don't exist
if (fs.existsSync(app.getPath("userData") + '/faces')) {} else {
    installFaces();
}
//Declare Lists and remove empty elements
var ears = fs.readFileSync(app.getPath("userData") + '/faces/ears.txt', 'utf8').split('\n');
var mouths = fs.readFileSync(app.getPath("userData") + '/faces/mouths.txt', 'utf8').split('\n');
var eyes = fs.readFileSync(app.getPath("userData") + '/faces/eyes.txt', 'utf8').split('\n');
var eyes = eyes.filter(e => e);
var ears = ears.filter(e => e);
var mouths = mouths.filter(e => e);

//See if new faces are added in new update
//Gets any faces added in updates
neweyes = eyesarr.filter((item) => !eyes.includes(item))
newears = earsarr.filter((item) => !ears.includes(item))
newmouths = mouthsarr.filter((item) => !mouths.includes(item))
    //Adds new faces to .txt files and lists
function newFaces(name, list, newList) {
    for (i in newList) {
        fs.appendFileSync(app.getPath("userData") + '/faces/' + name + '.txt', newList[i] + "\n");
        list.push(newList[i]);
    }
}
newFaces('eyes', eyes, neweyes);
newFaces('ears', ears, newears);
newFaces('mouths', mouths, newmouths);
//Gets random part
randomPart = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)].split(" ");
};
//Initialization
document.addEventListener("DOMContentLoaded", function() {
    var headerEars, headerEyes, headerMouth, randomFace;
    //Random Face
    headerEars = randomPart(ears);
    headerEyes = randomPart(eyes);
    headerMouth = mouths[Math.floor(Math.random() * mouths.length)];
    randomFace = headerEars[0] + headerEyes[0] + headerMouth + headerEyes[1] + headerEars[1];
    document.getElementById('headerFace').innerHTML = randomFace;
    document.getElementById('faceOutput').value = randomFace;
    document.getElementById('ears').innerHTML = headerEars.join("");
    document.getElementById('eyes').innerHTML = headerEyes.join("");
    document.getElementById('mouths').innerHTML = headerMouth;
    document.title = randomFace;
    earNumber = ears.indexOf(headerEars.join(" "));
    eyeNumber = eyes.indexOf(headerEyes.join(" "));
    mouthNumber = mouths.indexOf(headerMouth);
});
//Change Face in Input
function setFace() {
    faceEars = ears[earNumber].split(" ");
    faceEyes = eyes[eyeNumber].split(" ");
    document.getElementById('faceOutput').value = faceEars[0] + faceEyes[0] + mouths[mouthNumber] + faceEyes[1] + faceEars[1];
    document.getElementById('ears').innerHTML = ears[earNumber];
    document.getElementById('eyes').innerHTML = eyes[eyeNumber];
    document.getElementById('mouths').innerHTML = mouths[mouthNumber];
}
//Increase Part Value
function increase(number, arr) {
    window[number] >= arr.length - 1 ? window[number] = 0 : window[number] += 1;
    setFace();
}
//Decrease Part Value
function decrease(number, arr) {
    window[number] <= 0 ? window[number] = arr.length - 1 : window[number] -= 1;
    setFace();
}
//Opens faces txt docs in file explorer
function edit() {
    shell.openExternal(
        app.getPath("userData") + '/faces'
    );
}
//Get Random Face
function shuffle() {
    randomEars = randomPart(ears);
    randomEyes = randomPart(eyes);
    randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
    randomFace = randomEars[0] + randomEyes[0] + randomMouth + randomEyes[1] + randomEars[1];
    document.getElementById('faceOutput').value = randomFace;
    document.getElementById('ears').innerHTML = randomEars.join("");
    document.getElementById('eyes').innerHTML = randomEyes.join("");
    document.getElementById('mouths').innerHTML = randomMouth;
    earNumber = ears.indexOf(randomEars.join(" "));
    eyeNumber = eyes.indexOf(randomEyes.join(" "));
    mouthNumber = mouths.indexOf(randomMouth);
}
//Generate 
function randomList() {
    function generateRandomFace() {
        randomEars = randomPart(ears);
        randomEyes = randomPart(eyes);
        randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
        randomFace = randomEars[0] + randomEyes[0] + randomMouth + randomEyes[1] + randomEars[1]
        return randomFace;
    }
    fs.writeFile(app.getPath('desktop') + '/randomFaces.txt', '', (err) => { if (err) throw err; });
    i = 0;
    while (i < 60) {
        i++
        fs.appendFileSync(app.getPath('desktop') + '/randomFaces.txt', (generateRandomFace() + "\n\n"));
    }
}
//Save
function save() {
    fs.appendFileSync(app.getPath("userData") + '/faces/savedFaces.txt', (document.getElementById('faceOutput').value + "\n\n"));
}
//Copy
function copy() {
    clipboard.writeText(document.getElementById('faceOutput').value);
}
//Paste
function paste() {
    inputVal = document.getElementById('faceOutput').value;
    document.getElementById('faceOutput').value = inputVal + clipboard.readText();
}
//Clear
function clearInput() {
    document.getElementById('faceOutput').value = "";
}
//Quit
function quit() {
    ipcRenderer.send('quit', 'quitting');
}
//Minimize
function min() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}
//Keyboard Shortcuts
document.onkeydown = function(e) {
    if (e.ctrlKey && e.key == "r") {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        shuffle();
    } else if (e.ctrlKey && e.key == "q") {
        quit();
    } else if (e.ctrlKey && e.key == "-") {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    } else if (e.key == "F11") {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
    } else if (e.ctrlKey && e.key == "e") {
        increase('earNumber', ears)
    } else if (e.ctrlKey && e.key == "s") {
        save()
    } else if (e.ctrlKey && e.key == "g") {
        randomList()
    } else if (e.ctrlKey && e.key == "i") {
        increase('eyeNumber', eyes)
    } else if (e.ctrlKey && e.key == "m") {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        increase('mouthNumber', mouths)
    } else if (e.ctrlKey && e.key == "Delete") {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        clearInput()
    }
};