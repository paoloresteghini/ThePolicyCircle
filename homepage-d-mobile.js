// Mobile controls for static client previews.
const mobilePanel=document.querySelector('.mobile-menu-section');
if(mobilePanel){
 mobilePanel.id='preview-mobile-navigation';
 const controls=[...document.querySelectorAll('.open-menu,.open-menu-search')].map(el=>{const b=document.createElement('button');b.type='button';b.className=el.className;b.innerHTML=el.innerHTML;b.setAttribute('aria-label',el.classList.contains('open-menu-search')?'Open search':'Open menu');b.setAttribute('aria-controls',mobilePanel.id);b.setAttribute('aria-expanded','false');el.replaceWith(b);return b});
 let opener;
 function setOpen(open){mobilePanel.classList.toggle('preview-open',open);controls.forEach(b=>b.setAttribute('aria-expanded',String(open)));controls.find(b=>b.classList.contains('open-menu'))?.setAttribute('aria-label',open?'Close menu':'Open menu')}
 controls.forEach(b=>b.addEventListener('click',()=>{opener=b;const open=!mobilePanel.classList.contains('preview-open');setOpen(open);if(open&&b.classList.contains('open-menu-search'))mobilePanel.querySelector('input')?.focus()}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobilePanel.classList.contains('preview-open')){setOpen(false);opener?.focus()}});
}
