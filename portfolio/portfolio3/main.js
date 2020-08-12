function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

const btn = document.querySelector('.btn');
const page = document.querySelector('.page');
btn.addEventListener('click', function () {
    page.style.backgroundColor = generateRandomColor();
})