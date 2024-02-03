import{S as m,i as p}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a=document.querySelector("form");console.log(a);const c=document.querySelector(".js-gallery-elem");document.querySelector(".gallery");const u=document.querySelector(".loader");d();const h=new m(".gallery a",{captionDelay:250});a.addEventListener("submit",y);function y(s){s.preventDefault(),S();const o=a.elements.query.value;g(o).then(n=>b(n.hits)).catch(n=>L()),a.reset()}function g(s){const o="https://pixabay.com/api/",n="?key=42153847-0f7baac2d7b2e92d7ce6bbe8e",i=`&q=${s}`,e="&image_type=photo&orientation=horizontal&safesearch=true&per_page=20",r=o+n+i+e;return fetch(r).then(t=>{const l=t.json();return console.log(l),l}).then(t=>{if(t.total===0)throw new Error(error);return t})}function b(s){const o=s.map(({largeImageURL:n,webformatURL:i,tags:e,likes:r,views:t,comments:l,downloads:f})=>` <div class="gallery">
    <a href="${n}"><img src="${i}" alt="${e}" title="${e}" width = "360px"
      height = "300px"/>
       <ul class="info-cards-container">
      <li class="info-cards-elements">likes<span>${r}</span></li>
      <li class="info-cards-elements">views<span>${t}</span></li>
       <li class="info-cards-elements">comments<span>${l}</span></li>
       <li class="info-cards-elements">downloads<span>${f}</span></li>
     </ul>
      </a>
    </div>`).join("");c.innerHTML=o,d(),h.refresh()}function L(){c.innerHTML="",p.show({message:'❌ "Sorry, there are no images matching your search query. Please try again!',color:"red",position:"topRight",maxWidth:"400px"})}function S(){u.style.display="block"}function d(){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
