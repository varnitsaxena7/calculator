var screen=document.querySelector('input');

let buttons = document.querySelectorAll('.button');
let screenValue='';
buttons.forEach((button)=>{
    button.addEventListener('click', () => {
       
        switch(button.innerText)
        {
        case 'AC':
                screenValue="";
              screen.value=screenValue;
              break;
        case 'C':
                screenValue=screenValue.slice(0,-1);
                screen.value=screenValue;

              
              break;
              
        case 'X':button.innerText='*';
              screenValue+=button.innerText;
                 screen.value=screenValue;
               break;
        case '=':
              screen.value=eval(screenValue);
              break;
         default: screenValue += button.innerText;
            screen.value=screenValue;
          }
    });
});
