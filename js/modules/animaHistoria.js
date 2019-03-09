export default function initAnimaHistoria(){

 const historiaResumo = document.querySelector('.historia-resumo');
 const historiaCompleta = document.querySelector('.historia-completa');
 const btnHistoria  = document.querySelector('.logo-historia a');
 

  function initHistoria(event){
    event.preventDefault();
    historiaCompleta.classList.add('ativo');
    historiaResumo.remove();
  }


 btnHistoria.addEventListener('click',initHistoria);





}