const item = document.querySelector('.animated-content');
const container = document.querySelector('.relative');
console.log(item);

container.addEventListener('mouseover', () => {
    item.classList.add('animate-fade-in-up-reverse');
});
