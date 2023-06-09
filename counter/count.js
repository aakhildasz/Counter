let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.button-container button');

btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('btn-decrease')){
            count--;
        }
        else if(styles.contains('btn-increase')){
            count++;
        }
            else if(styles.contains('reset')){
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        if(count === 0) {
            value.style.color = 'whitesmoke';
        }
        value.textContent = count;
    });
});