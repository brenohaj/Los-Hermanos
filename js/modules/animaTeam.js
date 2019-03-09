export default function initTeam(){


const teamMini = document.querySelectorAll('.team');
const teamInfo = document.querySelectorAll('.info-member');

teamInfo[0].classList.add('show');
function activeTeam(index){
  
  teamInfo.forEach((item)=>{
    item.classList.remove('show');
  })
  teamInfo[index].classList.add('show');
}

teamMini.forEach((item,index)=>{
  item.addEventListener('click',(event)=>{
    event.preventDefault();
    activeTeam(index);
  })
});







}