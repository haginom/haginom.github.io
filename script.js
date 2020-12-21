const other = document.getElementById('other')
other.style.display = "none";

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    changeSection();
  });

  function changeSection(){
    const intro = document.getElementById('first')
    intro.style.display = "none";
    const other = document.getElementById('other')
    other.style.display = "block";
  }



for (let i=0; i<4; i++){
    
}