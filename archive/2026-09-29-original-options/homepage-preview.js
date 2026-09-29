const dialog=document.querySelector('#preview-dialog');
document.querySelectorAll('[data-preview-link]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();dialog.showModal()}));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();dialog.showModal()}));dialog.querySelector('button').onclick=()=>dialog.close();
document.querySelectorAll('.slider-wrapper').forEach(wrapper=>{const slides=[...wrapper.querySelectorAll('.slider>.slide')];if(!slides.length)return;const nav=document.createElement('div');nav.className='preview-slide-nav';nav.setAttribute('aria-label','Choose slide');slides.forEach((slide,i)=>{const b=document.createElement('button');b.type='button';b.textContent=slide.dataset.title||`Story ${i+1}`;b.addEventListener('click',()=>show(i));nav.append(b)});wrapper.append(nav);function show(index){slides.forEach((slide,i)=>slide.hidden=i!==index);[...nav.children].forEach((b,i)=>b.setAttribute('aria-pressed',i===index));if(wrapper.classList.contains('slider-type-1'))wrapper.closest('.et_pb_section').style.setProperty('background-color',slides[index].dataset.color||'#033147','important')}show(0)});
document.querySelectorAll('.et_pb_code_inner').forEach(el=>{if(el.textContent.trim()==='[instagram-feed feed=1]'){el.innerHTML='<p class="social-offline">Social feed retained here. Live feed unavailable in this offline preview.</p>'}});
document.querySelectorAll('.mobile_menu_bar,.hamburger,.menu-toggle').forEach(b=>b.addEventListener('click',()=>document.querySelector('.mobile-menu-section')?.classList.toggle('preview-open')));

// Local navigation disclosures, destination links stay in preview mode.
const disclosures=[...document.querySelectorAll('header li.menu-item-has-children')].map((item,index)=>{
 const link=item.querySelector(':scope > a');const panel=item.querySelector(':scope > ul');if(!link||!panel)return null;
 const button=document.createElement('button');button.type='button';button.className='preview-nav-toggle';button.textContent=link.textContent+' ▾';panel.id='preview-submenu-'+index;button.setAttribute('aria-controls',panel.id);button.setAttribute('aria-expanded','false');link.replaceWith(button);item.classList.add('preview-disclosure');
 let pinned=false;const set=open=>{if(!open)pinned=false;item.classList.toggle('preview-nav-open',open);button.setAttribute('aria-expanded',String(open));};
 button.addEventListener('click',()=>{const open=!pinned;disclosures.forEach(d=>d&&d.set(false));set(open);pinned=open});
 item.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches)set(true)});item.addEventListener('mouseleave',()=>{if(!item.contains(document.activeElement))set(false)});
 item.addEventListener('focusout',()=>setTimeout(()=>{if(!item.contains(document.activeElement))set(false)},0));
 item.addEventListener('keydown',e=>{if(e.key==='Escape'){set(false);button.focus()}if(e.target===button&&e.key==='ArrowDown'){e.preventDefault();set(true);panel.querySelector('a')?.focus()}});
 return {item,set};
});document.addEventListener('click',e=>disclosures.forEach(d=>{if(d&&!d.item.contains(e.target))d.set(false)}));
