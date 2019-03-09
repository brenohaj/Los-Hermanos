export default function initAnimaNumeros(){

const numeros = document.querySelectorAll('[data-numero]');

function animaNumeral(){
    numeros.forEach((numero) =>{
      const total = +numero.innerText;
      const incremento = Math.ceil(total/100);
      let start =0;

      const timer = setInterval(()=>{
        start = start + incremento;
        numero.innerText = start;
        if(start > total){
          numero.innerText = total;
          clearInterval(timer);
        }

      },15 * Math.random());
    });
}
 



function mutacao(mutation){
  console.log(mutation);
  if(mutation[0].target.classList.contains('ativo')){
    observer.disconnect();
    animaNumeral();
  }

}

const observeSection = document.querySelector('.numeros');
const observer = new MutationObserver(mutacao);
observer.observe(observeSection,{attributes:true});

  
}