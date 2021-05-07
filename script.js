const phrases = [
    'bekommt einen Heiratsantrag', 
    'wird Mutter / Vater', 
    'löscht aus Versehen sein komplettes Git-Repository', 
    'wird Vegetarier:in', 
    'trifft die Traumfrau / den Traummann', 
    'geht beruflich ins Ausland', 
    'macht eine Weltreise', 
    'zieht mit dem Partner zusammen', 
    'lässt sich ein "neue fische"-Tattoo stechen', 
    'gewinnt ein Meet & Greet mit Jason Derulo', 
    'erhält endlich seinen Impftermin', 
    'zieht sich für den Playboy aus', 
    'hat seine erste Sitzung bei den Anonymen Alkoholikern', 
    'meldet sich für Ballettstunden an', 
    'landet im Knast', 
    'wird neuer Assistant Coach bei "neue fische"',  
]

const members = [
    {name: 'Bejan'}, 
    {name: 'Borjan'}, 
    {name: 'Farah'}, 
    {name: 'Felix'}, 
    {name: 'Florian'}, 
    {name: 'Gabriele'}, 
    {name: 'Helena'}, 
    {name: 'Jens'}, 
    {name: 'Lukas'}, 
    {name: 'Matthias'}, 
    {name: 'Oliver G.'}, 
    {name: 'Oliver N.'}, 
    {name: 'Sabrina'}, 
    {name: 'Sacid'}, 
    {name: 'Sharine'}, 
    {name: 'Vika'},  
]

const header = document.querySelector('header');
const main = document.querySelector('main');

const button = document.createElement('button');
button.innerHTML = `Start<br>fortune teller<br>"SUMMER 2021"`;
header.appendChild(button);

const containerNames = document.createElement('div');
containerNames.classList.add('containerEins');
main.appendChild(containerNames);

const containerPhrases = document.createElement('div');
containerPhrases.classList.add('containerZwei');
main.appendChild(containerPhrases);

members.forEach((member) => {
    const box = memberboxCreator (member);
    containerNames.appendChild(box);
 });
 
 function memberboxCreator (member) {
     const box = document.createElement('div');
     box.classList.add('box');
     box.innerText = member.name;
     return box;
 };

const numberOfPhraseBoxes = 16;

const phraseBoxes = new Array(numberOfPhraseBoxes);

button.addEventListener('click', () => {
    containerPhrases.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phrases.forEach((phrase) => {
        const randomBoxIndex = Math.floor(Math.random() * numberOfPhraseBoxes);
        if (phraseBoxes[randomBoxIndex]) {
          phraseBoxes[randomBoxIndex].push(phrase);
        } else {
          phraseBoxes[randomBoxIndex] = [phrase];
        }
      });
    phraseBoxes.forEach((phraseBox) => {
        const div = colouredBoxes(phraseBox);
        containerPhrases.appendChild(div);
        });
    containerPhrases.appendChild(colouredBoxes(phrases[randomIndex]));
});

function colouredBoxes(phrase) {
    const p = document.createElement('p');
    p.innerText = phrase;

    const randomHue = Math.round(Math.random() * 360);
    p.classList.add('phrasebox');
    p.style.backgroundColor = `hsl(${randomHue}, 80%, 90%)`;

    return p;
};
