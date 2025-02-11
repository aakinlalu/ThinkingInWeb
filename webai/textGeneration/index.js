import { FilesetResolver, LlmInference } from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai';

const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('generate');

const modelFileName = 'gemma2-2b-it-gpu-int8.bin';


function displayPartialResults(partialResults, complete) {
    output.textContent +=partialResults;

    if (complete) {
        if (!output.textContent) {
            output.textContent = 'No results found.';
        }
        submit.disabled = false;
 }

}


async function generateText() {
    const genailFileset = await FilesetResolver.forGenAiTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm'
    );
    let llmInference;

    submit.onclick = () => {
        output.textContent = '';
        submit.disabled = true;
        llmInference.generateResponse(input.value, displayPartialResults);

     };

     submit.value = 'Loading the model...'
     LlmInference.createFromOptions(genailFileset, {
        baseOptions: {modelAssetPath: modelFileName},

     })
     .then(llm => {
            llmInference = llm;
            submit.disabled = false;
            submit.value = 'Get Response';
     })
        .catch(() => {
            alert('Failed to load the model.');
        });
}

generateText();