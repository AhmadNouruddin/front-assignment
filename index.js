const menu = document.getElementById('kebab-menu');
const menuIcon = document.getElementById('menu-icon');
const menuContent = document.getElementById('menu-content');
const likes = document.getElementById('likes');
const counter = document.getElementById('counter');
const article = document.getElementById("article");
const tools = document.getElementById('tools');
const colorText = document.getElementById('color-text');



// show & hide menu
function showHideMenu() {
    if (menuIcon.classList.contains('fa-ellipsis-vertical')) {
        menuIcon.classList.remove('fa-ellipsis-vertical');
        menuIcon.classList.add('fa-ellipsis');
        menuContent.style.display = "block";
    }
    else {
        menuIcon.classList.remove('fa-ellipsis');
        menuIcon.classList.add('fa-ellipsis-vertical');
        menuContent.style.display = "none";
    };
}

// increse number of likes
function likesCounter() {
    conterText = counter.innerHTML;
    numLikes = Number(conterText) + 1;
    counter.textContent = ' ' + numLikes + ' ';
}


// show pop up menu after selecting text
function selectText(event) {
    if (window.getSelection().toString().length > 0) {
        const posX = event.clientX;
        const posY = event.clientY;

        tools.style.top = posY - 50;
        tools.style.left = posX - 60;
        tools.style.display = "block";

    }
    else {
        tools.style.display = "none";
    }
}


function colorSelctedText() {
    let span = document.createElement('span');
    span.style.backgroundColor = '#1bba1e';

    if (window.getSelection) {
        let sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}

// Event Listeners
menu.addEventListener('click', showHideMenu);
likes.addEventListener('click', likesCounter);
article.addEventListener('mouseup', selectText);




