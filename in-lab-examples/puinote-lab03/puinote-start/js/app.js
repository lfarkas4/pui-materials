console.log('Started Application.');

function updateElement() {
    const noteImageElement = document.querySelector('.notecard-thumbnail');
    const noteTitleElement = document.querySelector('.note-title');
    const noteBodyElement = document.querySelector('.note-body');
  
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
  }

notecard.element = document.querySelector('#notecard-one');
const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
const noteTitleElement = notecard.element.querySelector('.note-title');
const noteBodyElement = notecard.element.querySelector('.note-body');


const btnSubmit = document.querySelector('#btn-submit');
