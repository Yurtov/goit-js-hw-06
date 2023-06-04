const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value')

const decrementBtn = counterEl.firstElementChild;
const incrementBtn = counterEl.lastElementChild;

console.log(decrementBtn)

const counter = {
    value: Number(valueEl.textContent),
    increment() {
        this.value +=1;
    },
    decrement() {
        this.value -=1;
    }
};

decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
})
