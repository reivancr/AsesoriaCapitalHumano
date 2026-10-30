(function(){
  var btns=document.querySelectorAll('.tabs button'),cards=document.querySelectorAll('#cards .card');
  btns.forEach(function(b){b.addEventListener('click',function(){
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    cards.forEach(function(c){c.hidden=b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f});
  })});
})();
