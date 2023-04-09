const buttons = document.querySelector('.buttons');
let btns = buttons.querySelectorAll('span');
const value = buttons.querySelector('#value');

btns.forEach(btn => {
  btn.addEventListener('click',function(){
    if(this.innerHTML === "="){
      value.innerHTML = eval(value.innerHTML);
    }else if(this.innerHTML === 'clear'){
      value.innerHTML = " ";
    }else{
      value.innerHTML += this.innerHTML;
    }
  });
});