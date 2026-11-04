(function(){
  document.body.classList.remove('no-js');
  var $=function(s,c){return (c||document).querySelector(s)}, $$=function(s,c){return [].slice.call((c||document).querySelectorAll(s))};
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var I18N=JSON.parse($('#i18n').textContent);

  // nav + reveal + cursor light (giong trang chu)
  var nav=$('.nav'); function navState(){ nav.classList.toggle('scrolled', scrollY>40) }
  addEventListener('scroll',navState,{passive:true}); navState();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} })},{threshold:.12});
  $$('.rv').forEach(function(el){ io.observe(el) });
  var cl=$('.cursor-light');
  if(cl && !reduce){ var cx=innerWidth/2, cy=innerHeight/3, tx=cx, ty=cy;
    addEventListener('pointermove',function(e){ tx=e.clientX; ty=e.clientY },{passive:true});
    (function loop(){ cx+=(tx-cx)*.12; cy+=(ty-cy)*.12; cl.style.transform='translate('+cx+'px,'+cy+'px)'; requestAnimationFrame(loop) })(); }

  // loc san pham
  var items=$$('.item'), PAGE=24, shown=PAGE;
  var state={type:'',stone:'',q:''};
  var norm=function(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d') };
  var countEl=$('#count'), more=$('#more'), empty=$('#empty');

  // doc bo loc tu URL (?loai=...&da=...) de chia se duoc link
  var qs=new URLSearchParams(location.search);
  if(qs.get('loai')) state.type=qs.get('loai');
  if(qs.get('da')) state.stone=qs.get('da');
  if(qs.get('q')) state.q=qs.get('q');

  function sync(){
    $$('[data-f-stone]').forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.fStone===state.stone) });
    $('#type').value=state.type; $('#q').value=state.q;
  }
  function apply(resetPage){
    if(resetPage) shown=PAGE;
    var words=norm(state.q).trim().split(/\s+/).filter(Boolean), n=0;
    items.forEach(function(li){
      var ok=(!state.type||li.dataset.type===state.type)&&(!state.stone||li.dataset.stone===state.stone)&&words.every(function(w){ return li.dataset.q.indexOf(w)>-1 });
      li.dataset.match=ok?'1':'0';
      if(ok) n++;
      li.hidden=!ok || (ok && n>shown);
    });
    countEl.textContent=n===1?I18N.count_one:I18N.count.replace('{n}',n);
    more.hidden=n<=shown; empty.hidden=n>0;
    var p=new URLSearchParams();
    if(state.type) p.set('loai',state.type); if(state.stone) p.set('da',state.stone); if(state.q) p.set('q',state.q);
    history.replaceState(null,'',location.pathname+(p.toString()?'?'+p:'')+location.hash);
  }
  $$('[data-f-stone]').forEach(function(b){ b.addEventListener('click',function(){ state.stone=b.dataset.fStone; sync(); apply(true) }) });
  $('#type').addEventListener('change',function(e){ state.type=e.target.value; apply(true) });
  var t; $('#q').addEventListener('input',function(e){ clearTimeout(t); t=setTimeout(function(){ state.q=e.target.value; apply(true) },160) });
  more.addEventListener('click',function(){ shown+=PAGE; apply(false) });
  sync(); apply(true);

  // mo san pham tu link #sp-xxx
  if(location.hash.indexOf('#sp-')===0){ var li=$(location.hash); if(li){ li.hidden=false; setTimeout(function(){ openItem(li) },300) } }

  // chuyen VI/EN: giu #sp-<ma> de sang ban kia van mo dung mon dang xem
  $$('[data-lang-switch]').forEach(function(a){ a.addEventListener('click',function(){
    if(location.hash.indexOf('#sp-')===0) a.href=a.href.split('#')[0]+location.hash;
  }) });

  // lightbox
  var lb=$('#lb');
  function openItem(li){
    var img=$('img',li), card=$('.pcard',li);
    $('#lb-img').src=img.src.replace('-480.webp','-960.webp'); $('#lb-img').alt=img.alt;
    $('#lb-name').textContent=$('h3',card).textContent;
    $('#lb-meta').textContent=$('.meta',card).textContent;
    $('#lb-badges').innerHTML=$('.badges',card).innerHTML;
    var d=$('.desc',card); $('#lb-desc').textContent=d?d.textContent:''; $('#lb-desc').hidden=!d;
    $('#lb-acts').innerHTML=$('.acts',card).innerHTML;
    var ll=$('#lb-lang'); ll.href=ll.href.split('#')[0]+'#'+li.id;
    if(lb.showModal) lb.showModal(); else lb.setAttribute('open','');
    history.replaceState(null,'',location.pathname+location.search+'#'+li.id);
  }
  $$('[data-open]').forEach(function(b){ b.addEventListener('click',function(){ openItem(b.closest('.item')) }) });
  function close(){ lb.close ? lb.close() : lb.removeAttribute('open') }
  $('[data-close]',lb).addEventListener('click',close);
  lb.addEventListener('click',function(e){ if(e.target===lb) close() });
  lb.addEventListener('close',function(){ history.replaceState(null,'',location.pathname+location.search) });
})();
