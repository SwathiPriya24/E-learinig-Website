// <!-- number -->
//   Function to animate numbers
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


animateValue("number1", 0, 35, 2000);
animateValue("number2", 0, 210, 2000);
animateValue("number3", 0, 54, 2000);
// 

// < !--text reveal-- >
        document.addEventListener('DOMContentLoaded', function () {

        const text = document.querySelector('.reveal-text');


        const textContent = text.textContent;


        const characters = textContent.split('');


        text.textContent = '';


        characters.forEach((char, index) => {
            const charElement = document.createElement('span');
        charElement.textContent = char;
        charElement.style.animationDelay = `${index * 0.1}s`; 
        text.appendChild(charElement);
        });
    });

