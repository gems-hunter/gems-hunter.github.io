(function(){
  document.body.classList.remove('no-js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function(s,c){return (c||document).querySelector(s)}, $$ = function(s,c){return [].slice.call((c||document).querySelectorAll(s))};
  // chuoi theo ngon ngu nhung trong trang (#i18n) va tien to duong dan ve goc site
  var I18N = JSON.parse($('#i18n').textContent), ROOT = document.documentElement.dataset.root || '';

  // reveal
  var io = new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} })},{threshold:.12});
  $$('.rv').forEach(function(el){ io.observe(el) });

  // nav
  var nav=$('.nav'); function navState(){ nav.classList.toggle('scrolled', scrollY>40) } navState();

  // menu mobile (hamburger)
  var mb=$('.menu-btn');
  function setMenu(o){ nav.classList.toggle('open',o); document.documentElement.classList.toggle('menu-open',o); mb.setAttribute('aria-expanded',o) }
  mb.addEventListener('click',function(e){ e.stopPropagation(); setMenu(!nav.classList.contains('open')) });
  $$('#nav-menu a').forEach(function(a){ a.addEventListener('click',function(){ setMenu(false) }) });
  document.addEventListener('click',function(e){ if(nav.classList.contains('open') && (e.target===nav || !nav.contains(e.target))) setMenu(false) });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && nav.classList.contains('open')){ setMenu(false); mb.focus() } });
  matchMedia('(min-width:901px)').addEventListener('change',function(m){ if(m.matches) setMenu(false) });

  // che do gop y: ?feedback bat (nho trong tab), ?feedback=off tat. Xem assets/js/feedback.js
  (function(){ var q=new URLSearchParams(location.search), on=false;
    try{ if(q.has('feedback')) sessionStorage.setItem('gh-feedback', q.get('feedback')==='off'?'0':'1'); on=sessionStorage.getItem('gh-feedback')==='1' }
    catch(e){ on=q.has('feedback') && q.get('feedback')!=='off' }
    if(on) import('./feedback.js').catch(function(e){ console.error('[feedback]', e) });
  })();

  // cursor light
  var cl=$('.cursor-light'), cx=innerWidth/2, cy=innerHeight/3, tx=cx, ty=cy;
  addEventListener('pointermove',function(e){ tx=e.clientX; ty=e.clientY },{passive:true});
  (function loop(){ cx+=(tx-cx)*.12; cy+=(ty-cy)*.12; cl.style.transform='translate('+cx+'px,'+cy+'px)'; requestAnimationFrame(loop) })();

  // stars
  var cv=$('#stars'), ctx=cv.getContext('2d'), stars=[], dpr=Math.min(devicePixelRatio||1,2);
  function size(){ var r=cv.getBoundingClientRect(); cv.width=r.width*dpr; cv.height=r.height*dpr; stars=[];
    var n=Math.round(r.width*r.height/9000); for(var i=0;i<n;i++) stars.push({x:Math.random()*cv.width,y:Math.random()*cv.height,r:(Math.random()*1.2+.3)*dpr,p:Math.random()*6.28,s:.6+Math.random()*1.6}); }
  size(); addEventListener('resize',size);
  function draw(t){ ctx.clearRect(0,0,cv.width,cv.height);
    stars.forEach(function(s){ var a=reduce?.6:.35+.65*Math.abs(Math.sin(s.p+t/1000*s.s*.6)); ctx.globalAlpha=a; ctx.fillStyle='#dff6ff'; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.283); ctx.fill(); });
    if(!reduce) requestAnimationFrame(draw); }
  requestAnimationFrame(draw);

  // hero crossfade + tag
  var names=I18N.hero;
  var imgs=$$('[data-fade] img'), k=0, timer;
  function next(){ imgs[k].classList.remove('on'); k=(k+1)%imgs.length; imgs[k].classList.add('on'); $('[data-name]').textContent=names[k][0]; $('[data-desc]').textContent=names[k][1]; }
  function go(){ if(!reduce && !timer) timer=setInterval(next,5200) } function stop(){ clearInterval(timer); timer=null }
  document.addEventListener('visibilitychange',function(){ document.hidden?stop():go() }); go();

  // word reveal
  var st=$('[data-words]');
  (function split(node){ [].slice.call(node.childNodes).forEach(function(n){
    if(n.nodeType===3){ var f=document.createDocumentFragment(); n.textContent.split(/(\s+)/).forEach(function(w){ if(!w) return; if(/^\s+$/.test(w)) f.appendChild(document.createTextNode(w)); else { var s=document.createElement('span'); s.className='w'; s.textContent=w; f.appendChild(s);} }); node.replaceChild(f,n); }
    else split(n); }); })(st);
  var words=$$('.w',st);

  // chapters pinned rail
  var chap=$('.chapters'), rail=$('.rail', chap), bar=$('.bar i', chap);
  var pars=$$('[data-par]');
  function onScroll(){
    navState();
    // words
    var r=st.getBoundingClientRect(), p=(innerHeight*.85 - r.top)/(r.height+innerHeight*.35); p=Math.max(0,Math.min(1,p));
    var lit=Math.round(p*words.length); words.forEach(function(w,i){ w.classList.toggle('lit', i<lit || reduce) });
    // rail
    if(innerWidth>900){
      var cr=chap.getBoundingClientRect(), total=cr.height-innerHeight, q=Math.max(0,Math.min(1,-cr.top/total));
      var dist=rail.scrollWidth-innerWidth; rail.style.transform='translate3d('+(-q*dist)+'px,0,0)'; bar.style.transform='scaleX('+q+')';
    }
    // parallax
    if(!reduce) pars.forEach(function(el){ if(innerWidth<=900 && el.classList.contains('fl')){ el.style.transform=''; return; }
      var b=el.getBoundingClientRect(), c=(b.top+b.height/2-innerHeight/2); el.style.transform='translate3d(0,'+(c*parseFloat(el.dataset.par)).toFixed(1)+'px,0)'; });
  }
  addEventListener('scroll',onScroll,{passive:true}); addEventListener('resize',onScroll); onScroll();

  // picker
  // anh + mau cua tung loai da; chu (alt, nhan, cau ke) lay tu I18N.picker cung thu tu
  var data=[
    {g:'#7FD6E2', raw:'aqua-raw', made:'aqua-ring'},
    {g:'#B79BFF', raw:'h-amethyst', made:'amethyst-bracelet-book'},
    {g:'#F2B95A', raw:'h-citrine-raw', made:'citrine-pendant'},
    {g:'#DDE8F2', raw:'h-clear-quartz', made:'clear-quartz-bracelet'},
    {g:'#FF9FD0', raw:'opals', made:'black-opal'}
  ].map(function(d,i){ var t=I18N.picker[i], img=function(n){ return ROOT+'assets/img/'+n+'.webp' };
    return {g:d.g, raw:[img(d.raw),t.raw_alt,t.raw_label], made:[img(d.made),t.made_alt,t.made_label], say:t.say} });
  var tabs=$$('.chips [role=tab]'), duo=$('.duo'), picker=$('.picker');
  data.forEach(function(d){ [d.raw[0],d.made[0]].forEach(function(s){ var i=new Image(); i.src=s; }) });
  function pick(i,focus){
    tabs.forEach(function(t,j){ t.setAttribute('aria-selected', j===i); t.tabIndex=j===i?0:-1 });
    if(focus) tabs[i].focus();
    var d=data[i]; picker.style.setProperty('--glow', d.g); duo.style.setProperty('--glow', d.g);
    duo.classList.add('swap');
    setTimeout(function(){
      $('#d-raw').src=d.raw[0]; $('#d-raw').alt=d.raw[1]; $('#l-raw').textContent=d.raw[2];
      $('#d-made').src=d.made[0]; $('#d-made').alt=d.made[1]; $('#l-made').textContent=d.made[2];
      duo.classList.remove('swap');
    }, reduce?0:420);
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){ pick(i) });
    t.addEventListener('keydown',function(e){ var n=null;
      if(e.key==='ArrowRight'||e.key==='ArrowDown') n=(i+1)%tabs.length;
      if(e.key==='ArrowLeft'||e.key==='ArrowUp') n=(i-1+tabs.length)%tabs.length;
      if(e.key==='Home') n=0; if(e.key==='End') n=tabs.length-1;
      if(n!==null){ e.preventDefault(); pick(n,true) } });
  });
})();
