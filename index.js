// add new note to page
let noteNum = 1;
const addNote = () => {
    let notebox = document.getElementById('noteBox');
    let element = `<div id="note" class="${noteNum}">
        <div class="icon">
            <button onclick="edit(event)" id="edit"><i class="fa-solid fa-pen-to-square" id="icon1"></i></button>
            <button onclick="del(event)" id="del"><i class="fa-solid fa-trash" id="icon1"></i></button>
            <button onclick="save(event)" id="save"><i class="fa-solid fa-bookmark"></i></button>
        </div>
         <textarea name="textArea" id="${noteNum}" cols="30" rows="10"></textarea>
         </div>`;
        notebox.insertAdjacentHTML('beforeend', element);
noteNum++;
}

// bookmarks items
const bookmarks = () => {
    let myData = localStorage.getItem('notes');
    alert(myData);
}


// edit note
const edit = (event) => {
    let parent = document.getElementById('noteBox');
    let parentClassName = event.target.parentNode.parentNode.parentNode.className;
    let childs = parent.childNodes;
    childs.forEach(child => {

        if(parentClassName === child.className) {
            child.childNodes[3].focus();
        }
    })
}

// delete note
const del = (event) => {
    let parent = document.getElementById('noteBox');
    let parentClassName = event.target.parentNode.parentNode.parentNode.className;
    let childs = parent.childNodes;
    
    // delete note
    childs.forEach(child => {

        if(parentClassName === child.className) {
            parent.removeChild(child);
        }
    })
}

// save note
let notesArray = [];
const save = (event) => {
    let parent = document.getElementById('noteBox');
    let parentClassName = event.target.parentNode.parentNode.parentNode.className;
    let childs = parent.childNodes;
    childs.forEach(child => {

        if(parentClassName === child.className) {
            notesArray.push(child.childNodes[3].value);

        }
    })
    localStorage.setItem('notes',JSON.stringify(notesArray));
}