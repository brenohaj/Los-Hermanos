export default function initAnimcaoScroll(){

  const section = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;
  
  function initAnima(){
    section.forEach((item) =>{

      const top = item.getBoundingClientRect().top - windowMetade;
      if(top<0){
        item.classList.add('ativo');
      }else if(item.classList.contains('ativo')){
        item.classList.remove('ativo');
      }
    });
  }


  window.addEventListener('scroll', initAnima);
  

  
}