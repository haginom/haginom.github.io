const intro = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')

const sections = [intro, second, third, fourth]

intro.style.display = "flex";
second.style.display= "none";
third.style.display= "none";
fourth.style.display = "none";

const btns = document.querySelectorAll('#btn');
const bbtns = document.querySelectorAll('#btn-back')


for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener('click', function () {
         goForward();
    	})
 };

for (let i = 0; i < bbtns.length; i++) {
bbtns[i].addEventListener('click', function () {
 		goBackward();
 	})
 };

function goForward(){
    for (let i=0; i<sections.length; i++){
        if (i < sections.length-1){
            if (sections[i].style.display != "none"){
                sections[i+1].style.display = "block";
                sections[i].style.display = "none";
                return;
            }
        } else {
            console.log(i)
            sections[i].style.display = "none";
            sections[0].style.display = "flex";
            
            return
        }
    }
  };

function goBackward(){
    for (let i = 0; i < sections.length; i++){
        if (i > 1){
            if (sections[i].style.display != "none"){
                sections[i].style.display = "none";
                sections[i-1].style.display = "block";
                return
            }
        } else 
            if (sections[i].style.display != "none"){
                sections[i].style.display = "none";
                sections[i-1].style.display = "flex";
                return
            }
    }
};

