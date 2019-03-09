export default function initScrollSuave(){

  const linksInternos = document.querySelectorAll('.menu-links li a, .banner a');
  const seta = document.querySelector('.seta');
  const top = document.querySelector('#home');
  


  function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop ;
    
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });


  }

  function backToTop(event){

    event.preventDefault();

    window.scrollTo({
      top: top,
      behavior:'smooth',
    });

  }

  function setaUp(){
  if(window.scrollY > 200){
    seta.classList.add('ativo');

  }else{
    seta.classList.remove('ativo');
  }
}



  linksInternos.forEach((item) =>{
    
    item.addEventListener('click', scrollSuave);

  });

  seta.addEventListener('click',backToTop);

  window.addEventListener('scroll', setaUp);
  
}