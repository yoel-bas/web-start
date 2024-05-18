
var previousDateInput = document.getElementById('date');
var anchor = document.getElementById('anchor');
var btn = document.getElementById('submit')

previousDateInput.addEventListener('input', () => {
    if (previousDateInput.value) {
        
    } else {
        btn.style.display = none;

    }
});