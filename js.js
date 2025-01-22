const items = document.querySelectorAll('.draggable');
const placeholders = document.querySelectorAll('.placeholder');
let dragged = null;

for (const placeholder of placeholders) {
    placeholder.addEventListener('touchmove', touchMove);
    placeholder.addEventListener('touchend', touchEnd);
}

for (const item of items) {
    item.addEventListener('touchstart', touchStart);
}

function touchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    dragged = event.currentTarget;
    dragged.classList.add('hold');
    dragged.style.position = 'absolute';
    dragged.style.zIndex = '1000';
    dragged.style.left = `${touch.pageX - dragged.offsetWidth / 2}px`;
    dragged.style.top = `${touch.pageY - dragged.offsetHeight / 2}px`;
}

function touchMove(event) {
    event.preventDefault();
    if (!dragged) return;
    const touch = event.touches[0];
    dragged.style.left = `${touch.pageX - dragged.offsetWidth / 2}px`;
    dragged.style.top = `${touch.pageY - dragged.offsetHeight / 2}px`;
}

function touchEnd(event) {
    event.preventDefault();
    if (!dragged) return;

    const touch = event.changedTouches[0];
    dragged.style.position = '';
    dragged.style.zIndex = '';
    dragged.style.left = '';
    dragged.style.top = '';

    const dropTarget = document.elementFromPoint(touch.pageX, touch.pageY);

    if (dropTarget && dropTarget.classList.contains('placeholder')) {
        if (!dropTarget.firstElementChild && !dropTarget.classList.contains('main')) {
            dropTarget.append(dragged);
        }
    }

    dragged.classList.remove('hold');
    dragged = null;
}

function checkResult() {
    let misstakes = 0;
    let result = document.querySelectorAll(".window");
    for (elem of result) {
        if (elem.firstElementChild && elem.firstElementChild.classList.contains('incorrect')) {
            misstakes += 1;
        }
    }
    alert("Ошибок: " + misstakes);
    location.pathname = "MAIN.html";
}
