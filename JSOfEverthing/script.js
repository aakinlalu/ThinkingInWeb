// Calculate reading time for a blog post
const content = document.querySelector("#content");
const numWords = content.textContent.split(' ').length;

// words per minute
const wpm = 250;
const readingTime = Math.ceil(numWords / wpm);

// Display reading time
const readingTimeElement = document.createElement("p");
readingTimeElement.textContent = `Estimated reading time: ${readingTime} minute${readingTime > 1 ? 's' : ''}`;
readingTimeElement.style.fontSize = "1.2em";


const  root = document.documentElement;
const primaryColor = getComputedStyle(root).getPropertyValue('--primary-color');
root.style.setProperty('--primary-color', 'blue');

// Insert HTML at the current position of a contentEditable element
document.addEventListener('DOMContentLoaded', () => {
    const contentEle = document.getElementById('content');
    const insertButton = document.getElementById('insert-button');

    // Get the current selection
    const  handleInsert = () => {
        // Get the current selection
        const selection = window.getSelection();

        // Get the range of the selection
        const range = selection.getRangeAt(0);

        // Create a new element to insert
        const newElement = document.createElement('span');
        newElement.innerHTML = 'Hello World!';


        // Insert the new element at the current position
        range.insertNode(newElement);
    
    };

    insertButton.addEventListener('click', handleInsert);

});

// Display a confirm modal when closing the browser
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});

// Check if users click outside of selected text
document.addEventListener('click', (event) => {
    const selection = window.getSelection();
    const clickedElement = event.target;
    if (!selection.containsNode(clickedElement, true)) {
        // Clear the selection
    }
}
);

//Check if the code is running in the browser
const isBrowser = typeof window === 'object' && typeof document === 'object';

// Detect mobile browsers
const isMobile = function () {
    const match = window.matchMedia('(pointer:coarse)');
    return match && match.matches;
};