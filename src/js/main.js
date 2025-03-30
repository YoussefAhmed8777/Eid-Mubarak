let eidiaBtn = document.getElementById('eidia');

eidiaBtn.addEventListener('click', function(){
  displayMsg();
});


function displayMsg(){
  document.getElementById('eidiaText').innerHTML= `
  كل سنة وانتم طيبين و عيد سعيد عليكم و ينعاد عليكم الايام بخير 
  `
  document.getElementById('eidiaIcon').innerHTML= `
  <i class="fa-solid fa-heart" style="color:red;"></i>
  `
}