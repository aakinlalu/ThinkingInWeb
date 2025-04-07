
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.2.4';

const pipe = await pipeline('sentiment-analysis');

let result = document.querySelector('#output');
let input = document.querySelector('textarea');
let button = document.querySelector('button');
button.addEventListener('click', async () => {
    if (input.value.trim() === '') {
        result.textContent = '';
        return;
    };

    const sentiment = await pipe(input.value);
    console.log(sentiment);
    result.innerHTML = `<strong>${sentiment[0].label}</strong> (${(sentiment[0].score * 100).toFixed(2)}%)`;

    
}, false
);