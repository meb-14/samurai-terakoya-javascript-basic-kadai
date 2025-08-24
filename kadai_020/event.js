const btn = document.getElementById('btn');

const textContent = document.getElementById('text');

btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
    console.log(text);
});