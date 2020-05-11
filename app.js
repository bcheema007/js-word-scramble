const words = ['html', 'javascript', 'intern', 'word', 'scramble', 'hello', 'world'];

const h1 = document.createElement('h1');
document.body.appendChild(h1);

const input = document.createElement('input');
document.body.appendChild(input);
input.setAttribute('style', 'display:none');

const btn = document.createElement('button');
btn.textContent = 'Start';
document.body.appendChild(btn);
btn.setAttribute('style', 'margin-left:5px');

btn.addEventListener('click', pickWord);

function pickWord() {
    input.value = "";
    input.setAttribute('style', 'display:inline');
    btn.removeEventListener('click', pickWord);
    btn.textContent = "Guess";
    const generateIndex = Math.floor(Math.random() * words.length);
    const word = words[generateIndex];
    let shuffledWord = shuffle(word);
    h1.textContent = shuffledWord;
    btn.addEventListener('click', function() {
        if(input.value === word) {
            h1.textContent = `You guessed correctly! The word was ${word}`;
            // this as in anonymous function???
            btn.removeEventListener('click', this);
            input.setAttribute('style', 'display:none');
            btn.textContent = 'Start';
            btn.addEventListener('click', pickWord);
        }
        else {
            h1.textContent = `Wrong ${shuffledWord}`;
        }
    });
}

function shuffle(word) {
    // create the character array
    let shuffleArr = word.split('');
    for(let i = 0; i < shuffleArr.length; i++) {
        const randomIndex = Math.floor(Math.random() * shuffleArr.length);
        let temp = shuffleArr[i];
        shuffleArr[i] = shuffleArr[randomIndex];
        shuffleArr[randomIndex] = temp;
    }
    // join the character array together 
    return shuffleArr.join('');
}
