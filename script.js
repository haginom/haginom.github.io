const intro = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')

const sections = [intro, second, third, fourth]

intro.style.display = "flex";
second.style.display= "none";
third.style.display= "none";
fourth.style.display = "none";

const btnOne = document.querySelector('#btn-one');
const btnTwo = document.querySelector('#btn-two');
const btnThree = document.querySelector('#btn-three');
const btnFour = document.querySelector('#btn-four')

btnOne.addEventListener('click', () => {
    changeSection();
  });
btnTwo.addEventListener('click', () => {
    changeSection();
});  
btnThree.addEventListener('click', () => {
    changeSection();
});  
btnFour.addEventListener('click', () => {
    changeSection();
});  

function changeSection(){
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

