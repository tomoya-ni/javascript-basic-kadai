const change = document.getElementById('btn');


change.addEventListener('click',()=>{
  setTimeout(()=>{
    var h1 = document.getElementById('text');
    h1.textContent='ボタンをクリックしました';
  }, 2000);
});
