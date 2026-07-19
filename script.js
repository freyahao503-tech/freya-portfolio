const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('#site-nav');if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

const detailOrder=['laoma.html','ron-glass-heart.html','little-gift.html','pmbroken.html'];
const currentPage=location.pathname.split('/').pop();
const currentIndex=detailOrder.indexOf(currentPage);
const projectNav=document.querySelector('.project-nav');
if(projectNav&&currentIndex>=0){
  const links=[];
  if(currentIndex>0) links.push(`<a href="${detailOrder[currentIndex-1]}">← 上一项目</a>`);
  else links.push('<a href="../index.html#portfolio">返回作品集</a>');
  if(currentIndex<detailOrder.length-1) links.push(`<a href="${detailOrder[currentIndex+1]}">下一项目 →</a>`);
  else links.push('<a href="../index.html#portfolio">返回作品集</a>');
  projectNav.innerHTML=links.join('');
}
