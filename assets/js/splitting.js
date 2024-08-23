!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.Splitting=t()}(this,function(){"use strict";var n=document,t=n.createTextNode.bind(n);function r(n,t,r){n.style.setProperty(t,r)}function e(n,t){return n.appendChild(t)}function i(t,r,i,o){var u=n.createElement("span");return r&&(u.className=r),i&&(o||u.setAttribute("data-"+r,i),u.textContent=i),t&&e(t,u)||u}function o(n,t){return n.getAttribute("data-"+t)}function u(t,r){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(r||n).querySelectorAll(t)):[]}function c(n){for(var t=[];n--;)t[n]=[];return t}function a(n,t){n&&n.some(t)}function s(n){return function(t){return n[t]}}var l={};function f(n,t,r,e){return{by:n,depends:t,key:r,split:e}}function p(n){l[n.by]=n}function d(n,r,o,c,s){n.normalize();var l=[],f=document.createDocumentFragment();c&&l.push(n.previousSibling);var p=[];return u(n.childNodes).some(function(n){if(!n.tagName||n.hasChildNodes()){if(n.childNodes&&n.childNodes.length)return p.push(n),void l.push.apply(l,d(n,r,o,c,s));var e=n.wholeText||"",u=e.trim();u.length&&(" "===e[0]&&p.push(t(" ")),a(u.split(o),function(n,t){t&&s&&p.push(i(f,"whitespace"," ",s));var e=i(f,r,n);l.push(e),p.push(e)})," "===e[e.length-1]&&p.push(t(" ")))}else p.push(n)}),a(p,function(n){e(f,n)}),n.innerHTML="",e(n,f),l}var h="words",m=f(h,0,"word",function(n){return d(n,"word",/\s+/,0,1)}),g="chars",v=f(g,[h],"char",function(n,t,r){var e=[];return a(r[h],function(n,r){e.push.apply(e,d(n,"char","",t.whitespace&&r))}),e});function y(n){var t=(n=n||{}).key;return u(n.target||"[data-splitting]").map(function(e){var i=e["\uD83C\uDF4C"];if(!n.force&&i)return i;i=e["\uD83C\uDF4C"]={el:e};var u,c=n.by||o(e,"splitting");c&&"true"!=c||(c=g);var f=(function n(t,r,e){var i=e.indexOf(t);if(-1==i){e.unshift(t);var o=l[t];if(!o)throw Error("plugin not loaded: "+t);a(o.depends,function(r){n(r,t,e)})}else{var u=e.indexOf(0);e.splice(i,1),e.splice(u,0,t)}return e})(u=c,0,[]).map(s(l)),p=function(n,t){for(var r in t)n[r]=t[r];return n}({},n);return a(f,function(n){if(n.split){var o,u,c,s,l=n.by,f=(t?"-"+t:"")+n.key,d=n.split(e,p,i);f&&(o=e,s=(c="--"+f)+"-index",a(u=d,function(n,t){Array.isArray(n)?a(n,function(n){r(n,s,t)}):r(n,s,t)}),r(o,c+"-total",u.length)),i[l]=d,e.classList.add(l)}}),e.classList.add("splitting"),i})}function w(n,t,r){var e=u(t.matching||n.children,n),i={};return a(e,function(n){var t=Math.round(n[r]);(i[t]||(i[t]=[])).push(n)}),Object.keys(i).map(Number).sort($).map(s(i))}function $(n,t){return n-t}y.html=function(n){var t=(n=n||{}).target=i();return t.innerHTML=n.content,y(n),t.outerHTML},y.add=p;var b=f("lines",[h],"line",function(n,t,r){return w(n,{matching:r[h]},"offsetTop")}),N=f("items",0,"item",function(n,t){return u(t.matching||n.children,n)}),x=f("rows",0,"row",function(n,t){return w(n,t,"offsetTop")}),T=f("cols",0,"col",function(n,t){return w(n,t,"offsetLeft")}),L=f("grid",["rows","cols"]),_="layout",k=f(_,0,0,function(n,t){var c=t.rows=+(t.rows||o(n,"rows")||1),a=t.columns=+(t.columns||o(n,"columns")||1);if(t.image=t.image||o(n,"image")||n.currentSrc||n.src,t.image){var s=u("img",n)[0];t.image=s&&(s.currentSrc||s.src)}t.image&&r(n,"background-image","url("+t.image+")");for(var l=c*a,f=[],p=i(0,"cell-grid");l--;){var d=i(p,"cell");i(d,"cell-inner"),f.push(d)}return e(n,p),f}),C=f("cellRows",[_],"row",function(n,t,r){var e=t.rows,i=c(e);return a(r[_],function(n,t,r){i[Math.floor(t/(r.length/e))].push(n)}),i}),S=f("cellColumns",[_],"col",function(n,t,r){var e=t.columns,i=c(e);return a(r[_],function(n,t){i[t%e].push(n)}),i}),A=f("cells",["cellRows","cellColumns"],"cell",function(n,t,r){return r[_]});return p(m),p(v),p(b),p(N),p(x),p(T),p(L),p(k),p(C),p(S),p(A),y});