bind=function(){var e,t=function(e,t){e.p$||(e.p$=e.ownerDocument.createTextNode("")),null!=t&&e.p$.parentNode?(e.p$.parentNode.insertBefore(e,e.p$),e.p$.parentNode.removeChild(e.p$)):null==t&&e.parentNode&&(e.parentNode.insertBefore(e.p$,e),e.parentNode.removeChild(e))};function n(e,n,i){if(e.innerHTML="",t(e,n),Array.isArray(n)){var o=i.createDocumentFragment();n.forEach(e=>o.appendChild(r(e,i))),e.appendChild(o)}else n&&e.appendChild(r(n,i))}function r(e,t){return e&&e.el||e.nodeName&&e||t.createTextNode(e)}(e=function(e,t){return"string"!=typeof e&&(t=e,e=null),function(r){var i=e?this.get(e):this.el;n(i,t&&null!=r?t(r):r,i.ownerDocument)}}).c=n;return{many:function(e,t){return"function"!=typeof e&&(t=e,e=null),function(n,r){r=e&&null!=n?e(n):n;for(var i=0;i<t.length;i++)t[i].call(this,r)}},html:function(e,n){return"string"!=typeof e&&(n=e,e=null),function(r){var i=e?this.get(e):this.el,o=n&&null!=r?n(r):r;i.innerHTML=o,t(i,o)}},text:function(e,n){return"string"!=typeof e&&(n=e,e=null),function(r){var i=e?this.get(e):this.el,o=n&&null!=r?n(r):r;i.textContent=o,t(i,o)}},attr:function(e,t,n){return"string"!=typeof t&&(n=t,t=e,e=null),function(r){var i=e?this.get(e):this.el,o=n&&null!=r?n(r):r;o?i.setAttribute(t,!0===o?"":o):i.removeAttribute(t)}},value:function(e,t){return"string"!=typeof e&&(t=e,e=null),function(n){var r=e?this.get(e):this.el;!function(e,t,n){if(null==t&&(t=""),e!==n.activeElement)return e.value=t;try{var r=e.selectionStart,i=e.selectionEnd;e.value=t,e.setSelectionRange(r,i)}catch(o){e.value=t}}(r,t&&null!=n?t(n):n,r.ownerDocument)}},listener:function(e,t,n){return"string"!=typeof t&&(n=t,t=e,e=null),function(r){var i=e?this.get(e):this.el;(this["l$"+(i.s$=""+e)+t]=r)?i.addEventListener(t,this,n):i.removeEventListener(t,this)}},children:e,visibility:function(e,n){return"string"!=typeof e&&(n=e,e=null),function(r){var i=e?this.get(e):this.el,o=n&&null!=r?n(r):r;t(i,o)}},slot:function(t,n){return"string"!=typeof t&&(n=t,t=null),function(r){var i=t?this.get(t):this.el;!function(t,n,r){t.pb$||(t.pb$=r.createTextNode("")),t.pa$||(t.pa$=r.createTextNode("")),t.parentNode&&(t.parentNode.insertBefore(t.pa$,t),t.parentNode.insertBefore(t.pb$,t.pa$),t.parentNode.removeChild(t)),t.pb$.parentNode&&function(e){for(;(e=t.pb$.nextSibling)!==t.pa$;)t.pb$.parentNode.removeChild(e)}(),null!=n&&t.pa$.parentNode&&function(i){for(e.c(t,n,r),i=r.createDocumentFragment();t.childNodes.length;)i.appendChild(t.childNodes[0]);t.pa$.parentNode.insertBefore(i,t.pa$)}()}(i,n&&null!=r?n(r):r,i.ownerDocument)}}}}();