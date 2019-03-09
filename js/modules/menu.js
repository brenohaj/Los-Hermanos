export default function initMenu(){

  const btnEntrar = document.querySelector('.btn-menu');
  const menu = document.querySelector('.menu');
  const btnSair = document.querySelector('.btn-sair');


  function abriMenu(event){
    event.preventDefault();
    menu.classList.toggle('ativo');

  }
  function fecharMenu(event){
    event.preventDefault();
    menu.classList.remove('ativo');
  }


  btnEntrar.addEventListener('click', abriMenu);
  btnSair.addEventListener('click', fecharMenu);
}