bind=function(){var e=function(e){return function(n,t){return"string"!=typeof n&&(t=n,n=null),function(r){var i=n?this.get(n):this.el,l=t&&null!=r?t(r):r;e.call(this,i,l,i.ownerDocument)}}},n=function(e,n,t){e.p$||(e.p$=t.createTextNode("")),null!=n&&e.p$.parentNode?e.p$.parentNode.replaceChild(e,e.p$):null==n&&e.parentNode&&e.parentNode.replaceChild(e.p$,e)},t=function(e,t,i){if(e.innerHTML="",n(e,t,i),Array.isArray(t)){var l=i.createDocumentFragment();t.forEach(e=>l.appendChild(r(e,i))),e.appendChild(l)}else t&&e.appendChild(r(t,i))};function r(e,n){return e&&e.el||e.nodeName&&e||n.createTextNode(e)}return{attr:function(e,n,t){return"string"!=typeof n&&(t=n,n=e,e=null),function(r){var i=e?this.get(e):this.el,l=t&&null!=r?t(r):r;l?i.setAttribute(n,!0===l?"":l):i.removeAttribute(n)}},children:e(t),html:e(function(e,t,r){e.innerHTML=t,n(e,t,r)}),many:function(e,n){return"function"!=typeof e&&(n=e,e=null),function(t){for(var r=e&&null!=t?e(t):t,i=0;i<n.length;i++)n[i].call(this,r)}},slot:e(function(e,n,r){e.pb$||(e.pb$=r.createTextNode("")),e.pa$||(e.pa$=r.createTextNode("")),e.parentNode&&(e.parentNode.insertBefore(e.pb$,e),e.parentNode.replaceChild(e.pa$,e)),e.pb$.parentNode&&function(n){for(;(n=e.pb$.nextSibling)!==e.pa$;)e.pb$.parentNode.removeChild(n)}(),null!=n&&e.pa$.parentNode&&function(i){for(t(e,n,r),i=r.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0]);e.pa$.parentNode.insertBefore(i,e.pa$)}()}),text:e(function(e,t,r){e.textContent=t,n(e,t,r)}),value:e(function(e,n,t){if(null==n&&(n=""),e!==t.activeElement)e.value=n;else try{var r=e.selectionStart,i=e.selectionEnd;e.value=n,e.setSelectionRange(r,i)}catch(l){e.value=n}}),visibility:e(n)}}();