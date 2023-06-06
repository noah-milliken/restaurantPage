(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([e.id,"html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n.page-container {\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    border: solid;\n}\n\n.nav {\n    display: flex;\n    width: 20%;\n    background-color: bisque;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn {\n    border: 0;\n    background-color: burlywood;\n}\n\n.main {\n    width: 100%;\n    height: auto;\n    background-color: bisque;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=r(h,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=a(e,r),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),o=t(569),i=t.n(o),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),h=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=[{id:"avocadoToast",name:"Avocado Toast",description:"Artisanal sourdough toast topped with smashed avocado, heirloom tomatoes, and microgreens.",price:12.99},{id:"quinoaBowl",name:"Quinoa Bowl",description:"Organic quinoa served with roasted vegetables, kale, pickled beets, and a tahini dressing.",price:14.99},{id:"artisanBurger",name:"Artisan Burger",description:"Grass-fed beef patty topped with heirloom tomatoes, arugula, caramelized onions, and truffle aioli on a brioche bun.",price:16.99},{id:"kaleSalad",name:"Kale Salad",description:"Fresh kale leaves mixed with roasted butternut squash, pomegranate seeds, toasted almonds, and lemon vinaigrette.",price:11.99},{id:"sweetPotatoFries",name:"Sweet Potato Fries",description:"Organic sweet potato fries seasoned with rosemary and sea salt, served with a garlic aioli dipping sauce.",price:7.99}],v=[{name:"Mountain Oasis",location:"Rocky Peak, Colorado",address:"123 Mountain View Road, Rocky Peak, CO 12345",phone:"(555) 123-4567",email:"rockypeak@restaurant.com"},{name:"Coastal Breeze",location:"Seaside Haven, Oregon",address:"456 Ocean Drive, Seaside Haven, OR 54321",phone:"(555) 987-6543",email:"seasidehaven@restaurant.com"},{name:"Desert Oasis",location:"Sun Valley, Arizona",address:"789 Desert Highway, Sun Valley, AZ 98765",phone:"(555) 456-7890",email:"sunvalley@restaurant.com"}],g=["home","menu","contact"],b=function(){const e=document.createElement("div");e.setAttribute("class","page-container");const n=document.createElement("div"),t=function(){const e=document.createElement("div");e.setAttribute("class","menu");const n=document.createElement("div");return f.forEach((e=>{const t=`\n            <div class="card" id=${e.id}>\n            <h2>${e.name}</h2>\n            <p>${e.description}</p>\n            <p>Price: $${e.price.toFixed(2)}</p>\n            </div>\n            `;n.innerHTML+=t})),e.appendChild(n),e}(),a=function(){const e=document.createElement("div");e.setAttribute("class","contact");const n=document.createElement("div");return v.forEach((e=>{const t=`\n        <div>\n            <h1>${e.name}</h1>\n            <h3>${e.location}</h3>\n            <h3>${e.address}</h3>\n            <h4>${e.phone}</h4>\n            <h4>${e.email}</h4>\n\n            </div>\n\n        `;n.innerHTML+=t})),e.appendChild(n),e}(),r=function(){const e=document.createElement("div");return e.setAttribute("class","home"),e.innerHTML="\n        <h1>Welcome to whales Tail</h1>\n        <p>Prepare yourself for a truly unique dining experience at [Restaurant Name]. We take pride in serving the most mediocre food in town and offering a service that will leave you questioning your life choices. Our talented chefs have mastered the art of mediocrity, combining bland flavors with uninspired presentation. Our waitstaff is trained to provide the slowest and most indifferent service imaginable. But wait, there's more! In a bold move, we proudly declare that tips starting at a whopping 40% are non-negotiable. Because who wouldn't want to generously reward such extraordinary mediocrity?</p>\n        <h3>Dont come back, see if we care.</h3>\n    ",e}();n.appendChild(a),n.setAttribute("class","main");const o=document.createElement("div");return o.setAttribute("class","nav"),g.forEach((e=>{const i=document.createElement("button");i.textContent=e,i.setAttribute("class","btn"),i.setAttribute("id",e),o.appendChild(i),i.addEventListener("click",(()=>{n.innerHTML="","home"===e?n.appendChild(r):"menu"===e?n.appendChild(t):"contact"===e?n.appendChild(a):n.appendChild(r)}))})),e.appendChild(o),e.appendChild(n),e};document.querySelector("#content").appendChild(function(){const e=document.createElement("div");return e.appendChild(b()),e}())})()})();