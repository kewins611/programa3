document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counterValue');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
        count--;
        counterValue.textContent = count;
    });
});
