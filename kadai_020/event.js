const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', ()=> {
  var h1 = document.getElementById('text');
  h1.textContent='ボタンをクリックしました'
});