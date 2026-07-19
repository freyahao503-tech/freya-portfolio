const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('#site-nav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

const film=document.querySelector('.original-film video');
if(film){
  const wrapper=document.querySelector('.original-film');
  const isGift=location.pathname.endsWith('/little-gift.html');
  const isLaoma=location.pathname.endsWith('/laoma.html');
  if(isGift||isLaoma){
    const cover=document.createElement('img');
    cover.src=isGift?'../assets/images/gift/cover.png':'../assets/images/laoma/cover.png';
    cover.alt=isGift?'《小小的礼物》作品封面':'《老马识途》作品封面';
    const note=document.createElement('p');
    note.textContent='本页面仅展示项目封面与本人职责说明，完整正片不对外公开。';
    wrapper.replaceChildren(cover,note);
    wrapper.classList.add('external-film');
  }
}
