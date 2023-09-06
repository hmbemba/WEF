(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window,$t=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),xt=new WeakMap;let Ut=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($t&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=xt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&xt.set(e,t))}return t}toString(){return this.cssText}};const Xt=o=>new Ut(typeof o=="string"?o:o+"",void 0,gt),u=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new Ut(e,o,gt)},Ft=(o,t)=>{$t?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const r=document.createElement("style"),s=X.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,o.appendChild(r)})},Ot=$t?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Xt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const F=window,Ct=F.trustedTypes,Gt=Ct?Ct.emptyScript:"",Pt=F.reactiveElementPolyfillSupport,ct={toAttribute(o,t){switch(t){case Boolean:o=o?Gt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Mt=(o,t)=>t!==o&&(t==t||o==o),rt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:Mt},dt="finalized";let R=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const s=this._$Ep(r,e);s!==void 0&&(this._$Ev.set(s,r),t.push(s))}),t}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||rt}static finalize(){if(this.hasOwnProperty(dt))return!1;this[dt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of r)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(Ot(s))}else t!==void 0&&e.push(Ot(t));return e}static _$Ep(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ft(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=rt){var s;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const n=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:ct).toAttribute(e,r.type);this._$El=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Ev.get(t);if(i!==void 0&&this._$El!==i){const n=s.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:ct;this._$El=i,this[i]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,r){let s=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};R[dt]=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},Pt==null||Pt({ReactiveElement:R}),((st=F.reactiveElementVersions)!==null&&st!==void 0?st:F.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;const G=window,T=G.trustedTypes,St=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,ut="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,Bt="?"+O,Kt=`<${Bt}>`,E=document,L=()=>E.createComment(""),V=o=>o===null||typeof o!="object"&&typeof o!="function",It=Array.isArray,Zt=o=>It(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",it=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Et=/-->/g,Ht=/>/g,C=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Rt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Jt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Jt(1),H=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Tt=new WeakMap,P=E.createTreeWalker(E,129,null,!1);function Vt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const Qt=(o,t)=>{const e=o.length-1,r=[];let s,i=t===2?"<svg>":"",n=I;for(let c=0;c<e;c++){const a=o[c];let d,v,f=-1,g=0;for(;g<a.length&&(n.lastIndex=g,v=n.exec(a),v!==null);)g=n.lastIndex,n===I?v[1]==="!--"?n=Et:v[1]!==void 0?n=Ht:v[2]!==void 0?(Lt.test(v[2])&&(s=RegExp("</"+v[2],"g")),n=C):v[3]!==void 0&&(n=C):n===C?v[0]===">"?(n=s??I,f=-1):v[1]===void 0?f=-2:(f=n.lastIndex-v[2].length,d=v[1],n=v[3]===void 0?C:v[3]==='"'?Rt:Dt):n===Rt||n===Dt?n=C:n===Et||n===Ht?n=I:(n=C,s=void 0);const w=n===C&&o[c+1].startsWith("/>")?" ":"";i+=n===I?a+Kt:f>=0?(r.push(d),a.slice(0,f)+ut+a.slice(f)+O+w):a+O+(f===-2?(r.push(void 0),c):w)}return[Vt(o,i+(o[e]||"<?>")+(t===2?"</svg>":"")),r]};class z{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,n=0;const c=t.length-1,a=this.parts,[d,v]=Qt(t,e);if(this.el=z.createElement(d,r),P.currentNode=this.el.content,e===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(s=P.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const f=[];for(const g of s.getAttributeNames())if(g.endsWith(ut)||g.startsWith(O)){const w=v[n++];if(f.push(g),w!==void 0){const Yt=s.getAttribute(w.toLowerCase()+ut).split(O),Y=/([.?@])?(.*)/.exec(w);a.push({type:1,index:i,name:Y[2],strings:Yt,ctor:Y[1]==="."?ee:Y[1]==="?"?re:Y[1]==="@"?oe:K})}else a.push({type:6,index:i})}for(const g of f)s.removeAttribute(g)}if(Lt.test(s.tagName)){const f=s.textContent.split(O),g=f.length-1;if(g>0){s.textContent=T?T.emptyScript:"";for(let w=0;w<g;w++)s.append(f[w],L()),P.nextNode(),a.push({type:2,index:++i});s.append(f[g],L())}}}else if(s.nodeType===8)if(s.data===Bt)a.push({type:2,index:i});else{let f=-1;for(;(f=s.data.indexOf(O,f+1))!==-1;)a.push({type:7,index:i}),f+=O.length-1}i++}}static createElement(t,e){const r=E.createElement("template");return r.innerHTML=t,r}}function N(o,t,e=o,r){var s,i,n,c;if(t===H)return t;let a=r!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[r]:e._$Cl;const d=V(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,e,r)),r!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=N(o,a._$AS(o,t.values),a,r)),t}class te{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:s}=this._$AD,i=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(r,!0);P.currentNode=i;let n=P.nextNode(),c=0,a=0,d=s[0];for(;d!==void 0;){if(c===d.index){let v;d.type===2?v=new W(n,n.nextSibling,this,t):d.type===1?v=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(v=new ie(n,this,t)),this._$AV.push(v),d=s[++a]}c!==(d==null?void 0:d.index)&&(n=P.nextNode(),c++)}return P.currentNode=E,i}v(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class W{constructor(t,e,r,s){var i;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cp=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),V(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==y&&V(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(Vt(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.v(r);else{const n=new te(i,this),c=n.u(this.options);n.v(r),this.$(c),this._$AH=n}}_$AC(t){let e=Tt.get(t.strings);return e===void 0&&Tt.set(t.strings,e=new z(t)),e}T(t){It(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const i of t)s===e.length?e.push(r=new W(this.k(L()),this.k(L()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class K{constructor(t,e,r,s,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,s){const i=this.strings;let n=!1;if(i===void 0)t=N(this,t,e,0),n=!V(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const c=t;let a,d;for(t=i[0],a=0;a<i.length-1;a++)d=N(this,c[r+a],e,a),d===H&&(d=this._$AH[a]),n||(n=!V(d)||d!==this._$AH[a]),d===y?t=y:t!==y&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ee extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}const se=T?T.emptyScript:"";class re extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==y?this.element.setAttribute(this.name,se):this.element.removeAttribute(this.name)}}class oe extends K{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=N(this,t,e,0))!==null&&r!==void 0?r:y)===H)return;const s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}class ie{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Nt=G.litHtmlPolyfillSupport;Nt==null||Nt(z,W),((ot=G.litHtmlVersions)!==null&&ot!==void 0?ot:G.litHtmlVersions=[]).push("2.7.5");const ne=(o,t,e)=>{var r,s;const i=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t;let n=i._$litPart$;if(n===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=n=new W(t.insertBefore(L(),c),c,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt,lt;class S extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ne(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return H}}S.finalized=!0,S._$litElement$=!0,(nt=globalThis.litElementHydrateSupport)===null||nt===void 0||nt.call(globalThis,{LitElement:S});const jt=globalThis.litElementPolyfillSupport;jt==null||jt({LitElement:S});((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=o=>t=>typeof t=="function"?((e,r)=>(customElements.define(e,r),r))(o,t):((e,r)=>{const{kind:s,elements:i}=r;return{kind:s,elements:i,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},ae=(o,t,e)=>{t.constructor.createProperty(e,o)};function l(o){return(t,e)=>e!==void 0?ae(o,t,e):le(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(o){return l({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=({finisher:o,descriptor:t})=>(e,r)=>{var s;if(r===void 0){const i=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(e.key)}:{...e,key:i};return o!=null&&(n.finisher=function(c){o(c,i)}),n}{const i=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(i,r)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;const de=((at=window.HTMLSlotElement)===null||at===void 0?void 0:at.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function ue(o){const{slot:t,selector:e}=o??{};return ce({descriptor:r=>({get(){var s;const i="slot"+(t?`[name=${t}]`:":not([name])"),n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i),c=n!=null?de(n,o):[];return e?c.filter(a=>a.matches(e)):c},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ve=o=>(...t)=>({_$litDirective$:o,values:t});let fe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt="important",ye=" !"+zt,x=ve(class extends fe{constructor(o){var t;if(super(o),o.type!==pe.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const r=o[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const r in t)this.ut.add(r);return this.render(t)}this.ut.forEach(r=>{t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]="")});for(const r in t){const s=t[r];if(s!=null){this.ut.add(r);const i=typeof s=="string"&&s.endsWith(ye);r.includes("-")||i?e.setProperty(r,i?s.slice(0,-11):s,i?zt:""):e[r]=s}}return H}}),$e=[u`
    :host([growOnHover]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover]:hover) {
      transform: scale(1.03);
    }
  `,u`
    :host([growOnHover="1"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="1"]:hover) {
      transform: scale(1.01);
    }
  `,u`
    :host([growOnHover="2"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="2"]:hover) {
      transform: scale(1.02);
    }
  `,u`
    :host([growOnHover="3"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="3"]:hover) {
      transform: scale(1.03);
    }
  `,u`
    :host([growOnHover="4"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="4"]:hover) {
      transform: scale(1.04);
    }
  `,u`
    :host([growOnHover="5"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="5"]:hover) {
      transform: scale(1.05);
    }
  `,u`
    :host([growOnHover="6"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="6"]:hover) {
      transform: scale(1.06);
    }
  `,u`
    :host([growOnHover="7"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="7"]:hover) {
      transform: scale(1.07);
    }
  `,u`
    :host([growOnHover="8"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="8"]:hover) {
      transform: scale(1.08);
    }
  `,u`
    :host([growOnHover="9"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="9"]:hover) {
      transform: scale(1.09);
    }
  `,u`
    :host([growOnHover="10"]) {
      transition: transform .2s ease-in-out;
      cursor: pointer;
    }
    
    :host([growOnHover="10"]:hover) {
      transform: scale(1.1);
    }
  `],ge=[u`
:host([lightenOnHover]:hover) {
    opacity: 0.85;
}
`],_e=[u`
:host([darkenOnHover]:hover) {
    filter: brightness(85%);
}`];var me=Object.defineProperty,be=Object.getOwnPropertyDescriptor,p=(o,t,e,r)=>{for(var s=r>1?void 0:r?be(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&me(t,e,s),s};const wt=class wt extends S{constructor(){super(...arguments),this.round=!1,this.setShadow=(t,e,r,s,i)=>t?`${e||"2"}px ${r||"5"}px ${s||"10"}px rgba(0.1, 0.1, 0.1, ${t/10})`:i,this.showOnParser=t=>{let e="900px";return console.log(t),t=="mobile"&&(e="900px"),t=="tablet"&&(e="1200px"),t=="desktop"&&(e="1800px"),`@media (max-width: ${e})
            {
                display: none;
            }`},this.getFlexWrap=t=>{switch(t){case"1":case"wrap":case"yes":return"wrap";case"2":case"nowrap":case"no":return"nowrap";case"3":case"reverse":case"rev":return"reverse";case void 0:case null:case"":return"wrap";default:return"wrap"}}}setWidth(){return`${this.w?`width: ${this.w};`:""}`}};wt.styles=[u`
      :host {
        display: inline-block;
      }
      :host([disabled]) {
        pointer-events: none;
        opacity: 0.5;
      }
      :host([hidden]) {
        display: none;
      }
      :host([resizableX]) {
        resize: horizontal;
        overflow: auto;
      }
      :host([resizableY]) {
        resize: vertical;
        overflow: auto;
      }
    `,$e,ge,_e];let h=wt;p([l()],h.prototype,"padding",2);p([l()],h.prototype,"bgColor",2);p([l()],h.prototype,"bgColorOnHover",2);p([l()],h.prototype,"textColor",2);p([l()],h.prototype,"shadow",2);p([l()],h.prototype,"shadowX",2);p([l()],h.prototype,"shadowY",2);p([l()],h.prototype,"shadowDiffuse",2);p([l({type:Boolean})],h.prototype,"round",2);p([l()],h.prototype,"textColorOnHover",2);p([l()],h.prototype,"w",2);p([l()],h.prototype,"h",2);p([l()],h.prototype,"bkgImg",2);p([l()],h.prototype,"gap",2);p([l()],h.prototype,"flex",2);p([l()],h.prototype,"border",2);p([l()],h.prototype,"borderOnHover",2);p([l()],h.prototype,"borderRadius",2);p([l()],h.prototype,"wrap",2);p([l()],h.prototype,"hideOn",2);p([l()],h.prototype,"fgrow",2);p([l()],h.prototype,"fshrink",2);p([l()],h.prototype,"fbase",2);var we=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,xe=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ae(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&we(t,e,s),s};let pt=class extends h{render(){const o=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),t={padding:this.padding||"2vh 4vh 2vh 4vh",borderRadius:this.borderRadius?this.borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:o,border:this.border||"none"};return m`
                <style>
                    button {
                        color: ${this.textColor||"var(--btn-color, inherit)"};
                        background-color: ${this.bgColor?this.bgColor:"var(--btn-bg-color)"};
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                        ${this.w?`width: ${this.w};`:""}
                    }
                    button:hover {
                        color:            ${this.textColorOnHover?this.textColorOnHover:this.textColor?this.textColor:"var(--btn-hover-color, inherit)"};
                        background-color: ${this.bgColorOnHover?this.bgColorOnHover:this.bgColor?this.bgColor:"var(--btn-hover-bg-color)"};
                        ${this.borderOnHover?`outline:${this.borderOnHover}`:""}
                    }

                    :host{
                        ${this.fbase?`flex-basis: ${this.fbase};`:""}
                    }

                </style>
                <button style=${x(t)}>
                    <slot></slot>
                </button>
            `}};pt.styles=[u`
                        button {
                            border: none;
                            padding: 0;
                            font: inherit;
                            cursor: pointer;
                            outline: inherit;
                        }
                    `,h.styles,u`
                    :host 
                    {
                      display: block;
                    }`];pt=xe([b("base-btn")],pt);var Oe=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,Z=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ce(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Oe(t,e,s),s};const ht=m`
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg 
width='100%'
version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
<g>
	<rect x="4" y="5" width="16" height="2"/>
	<rect x="4" y="11" width="16" height="2"/>
	<rect x="4" y="17" width="16" height="2"/>
</g>
</svg>
`,Pe=m`

<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg 
width='100%'
version="1.1" id="Design_here" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; " xml:space="preserve">
<polygon points="20.707,11.293 12,2.586 3.293,11.293 4.707,12.707 11,6.414 11,20 13,20 13,6.414 19.293,12.707 "/>
</svg>
`;let j=class extends h{render(){const o={width:this.size||"5vh",height:this.size||"5vh",backgroundColor:this.bgColor||"var(--icon-bg-color)",borderRadius:this.circle?"100%":this.round?"2vh":"var(--icon-border-radius)",padding:this.padding||"1vh",display:"flex",justifyContent:"center",alignItems:"center"};let t=ht;switch(this.type){case"burger":t=ht;break;case"arrow-up":t=Pe;break;default:t=ht}return m`<div style=${x(o)}>${t}</div>`}};j.styles=[h.styles,u`div {cursor: pointer; }`];Z([l()],j.prototype,"type",2);Z([l()],j.prototype,"size",2);Z([l({type:Boolean})],j.prototype,"circle",2);j=Z([b("my-icon")],j);var Se=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,_=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ee(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Se(t,e,s),s};let $=class extends S{render(){const o={textDecoration:this.strike?"line-through":this.underline?"underline":"none",fontSize:this.smallest?"var(--font-smallest, .05em)":this.smaller?"var(--font-smaller, .75em)":this.small?"var(--font-small, .9em)":this.medium?"var(--font-medium, 1em)":this.large?"var(--font-large, 1.25em)":this.larger?"var(--font-larger, 1.5em)":this.largest?"var(--font-largest, 2em)":"var(--font-medium, 1em)",FontFace:"var(--font-face, inherit)",padding:this.padding||"0"};return m`
              <style>
                div{
                  ${this.color?`color: ${this.color}`:""};
                  ${this.bold?"font-weight: bold":""};
                  ${this.italic?"font-style: italic":""};
                  ${this.bgColor?`background-color: ${this.bgColor}`:""};

                }
              </style>

                <div style=${x(o)}>
                    <slot></slot>
                </div>
            `}};$.styles=[u`
        :host 
        {
          display: inline-block;
        }
        :host([disabled]) 
        {
          pointer-events: none;
          opacity: 0.5;
        }
        :host([hidden])
        {
          display: none;
        }

        div{
            margin: 0;
            padding: 0;
        }
	  `];_([l()],$.prototype,"color",2);_([l({type:Boolean})],$.prototype,"strike",2);_([l({type:Boolean})],$.prototype,"underline",2);_([l({type:Boolean})],$.prototype,"bold",2);_([l({type:Boolean})],$.prototype,"italic",2);_([l({type:Boolean})],$.prototype,"smallest",2);_([l({type:Boolean})],$.prototype,"smaller",2);_([l({type:Boolean})],$.prototype,"small",2);_([l({type:Boolean})],$.prototype,"medium",2);_([l({type:Boolean})],$.prototype,"large",2);_([l({type:Boolean})],$.prototype,"larger",2);_([l({type:Boolean})],$.prototype,"largest",2);_([l()],$.prototype,"bgColor",2);_([l()],$.prototype,"padding",2);$=_([b("my-text")],$);var He=Object.defineProperty,De=Object.getOwnPropertyDescriptor,J=(o,t,e,r)=>{for(var s=r>1?void 0:r?De(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&He(t,e,s),s};const At=class At extends h{constructor(){super(...arguments),this.type="text",this.defaultValue="",this.hint=""}render(){const t=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),e={padding:this.padding||"2vh 4vh 2vh 4vh",borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:t,border:this.border||"none",width:"100%"};return m`

                <input style=${x(e)}
                    type = ${this.type}
                    placeholder = ${this.hint} 
                    ${this.defaultValue?`value=${this.defaultValue}`:""}
                    ${this.notRequired?"":"required"}
                >
                <div></div>
            `}};At.styles=[u`
                    input {
                        color: inherit;
                        border: none;
                        padding: 0;
                        font: inherit;
                        cursor: pointer;
                        outline: inherit;
                      }
                    
                    `,h.styles,u`
                    :host {
                        display: inline-flex;
                        width: 100%;
                    }`];let A=At;J([l()],A.prototype,"type",2);J([l()],A.prototype,"defaultValue",2);J([l()],A.prototype,"hint",2);J([l({type:Boolean})],A.prototype,"notRequired",2);var Re=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,kt=(o,t,e,r)=>{for(var s=r>1?void 0:r?Te(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Re(t,e,s),s};let vt=class extends A{constructor(){super(...arguments),this.type="password"}};kt([l()],vt.prototype,"type",2);vt=kt([b("password-input")],vt);var Ne=Object.defineProperty,je=Object.getOwnPropertyDescriptor,qt=(o,t,e,r)=>{for(var s=r>1?void 0:r?je(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ne(t,e,s),s};let ft=class extends A{constructor(){super(...arguments),this.type="text"}};qt([l()],ft.prototype,"type",2);ft=qt([b("text-input")],ft);var Ue=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Wt=(o,t,e,r)=>{for(var s=r>1?void 0:r?Me(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ue(t,e,s),s};let yt=class extends A{constructor(){super(...arguments),this.type="email"}};Wt([l()],yt.prototype,"type",2);yt=Wt([b("email-input")],yt);var Be=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,Q=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ie(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Be(t,e,s),s};let U=class extends S{get_children(){var t;const o=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");if(o)return o.assignedElements({flatten:!0})}reset_error_slot(o){o&&(o.innerHTML="")}get_field_data(o){var s;const t=(s=o.shadowRoot)==null?void 0:s.querySelector("input"),e=t==null?void 0:t.value;return{fieldName:o.getAttribute("name"),inputValue:e}}valid_required(o){var i;var{fieldName:t,inputValue:e}=this.get_field_data(o);const r=o.getAttribute("notRequired"),s=(i=this.shadowRoot)==null?void 0:i.querySelector("slot[name=req_errors]");if(r!=null)return this.reset_error_slot(s),!0;if(e)return this.reset_error_slot(s),!0;if(s)return s.innerHTML+=`<li style="color:red; ">${this.cap(t)} is required</li>`,!1}cap(o){return o==null?"":o.toLowerCase().charAt(0).toUpperCase()+o.slice(1)}valid_min_len(o){var i;var{fieldName:t,inputValue:e}=this.get_field_data(o);const r=o.getAttribute("minLen"),s=(i=this.shadowRoot)==null?void 0:i.querySelector("slot[name=req_errors]");if(r==null)return!0;if(e&&r)return e.length<parseInt(r)&&s?(s.innerHTML+=`<li style="color:red; ">${this.cap(t)} must be at least ${r} characters long</li>`,!1):(this.reset_error_slot(s),!0)}validate_form_item(o){return!(!this.valid_required(o)||!this.valid_min_len(o))}get_field_name(o){return o.getAttribute("name")||""}get_field_value(o){var r;const t=(r=o.shadowRoot)==null?void 0:r.querySelector("input");return(t==null?void 0:t.value)||""}set_form_data(o){var i;const t=this._kids[0].children;for(const n of t){const c=this.get_field_name(n),a=this.get_field_value(n);c&&a&&o.set(c,a)}const e=(i=this.shadowRoot)==null?void 0:i.querySelector("input[type=hidden]"),r=e==null?void 0:e.getAttribute("name"),s=e==null?void 0:e.getAttribute("value");r&&s&&o.set(r,s)}validate(){var e;const o=this._kids[0].children,t=[];for(const r of o)t.push(this.validate_form_item(r));if(t.every(r=>r===!0)){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("form");r&&(r.addEventListener("formdata",s=>{s.formData.append("test_from_wc","test"),this.set_form_data(s.formData)}),r.submit())}}handle_enter(o){o.key==="Enter"&&this.validate()}render(){return m`

    <form method="post" @keypress=${this.handle_enter}>

    <input type="hidden" name="${this.csrfTokenName||"csrf_token"}" value="${this.csrfToken||""}">

 
    <ul>
        <slot name="req_errors">
        </slot>
    </ul>
    <ul>
        <slot name="min_len_errors">
        </slot>
    </ul>

	
	 <slot name="items">
	 </slot>
     
	 <slot name="submit" @click=${this.validate}>
	 </slot>
		
	</form>
    `}};U.styles=[u`
            :host 
            {
              display: inline-block;
            }`];Q([ue({slot:"items"})],U.prototype,"_kids",2);Q([l()],U.prototype,"csrfTokenName",2);Q([l()],U.prototype,"csrfToken",2);U=Q([b("my-form")],U);var Le=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,_t=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ve(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Le(t,e,s),s};let k=class extends h{render(){const o=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),t=r=>{switch(r){case"1":case"left":case"l":return"start";case"2":case"right":case"r":return"end";case"3":case"center":case"ctr":case"c":return"center";default:return"normal"}},e={padding:this.padding||"0px",backgroundColor:this.bgColor||"var(--btn-bg-color)",color:this.textColor||"var(--btn-color)",borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:o,display:"flex",flexDirection:"column",gap:this.gap||"var(--col-gap, 1vh)",alignItems:t(this.itemPosH)};return m`
                <style>
                    div{
                        ${this.w?`width: ${this.w};`:""}
                        ${this.h?`height: ${this.h};`:""}
                        ${this.wrap?`flex-wrap: ${this.getFlexWrap(this.wrap)};`:""}

                    }
                </style>
                <div style=${x(e)}>
                    <slot></slot>
                </div>
            `}};k.styles=[h.styles,u`
                    :host
                    {
                        display: block;
                    }
                `];_t([l()],k.prototype,"itemPosH",2);_t([l()],k.prototype,"itemPosV",2);k=_t([b("my-col")],k);var ze=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,mt=(o,t,e,r)=>{for(var s=r>1?void 0:r?ke(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&ze(t,e,s),s};let D=class extends h{render(){const o=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),t=s=>{switch(s){case"1":case"space-evenly":case"evenly":return"space-evenly";case"2":case"space-around":case"around":return"space-around";case"3":case"space-between":case"between":return"space-between";case"4":case"flex-end":case"end":return"flex-end";case"5":case"flex-start":case"start":return"flex-start";case"6":case"center":return"center";default:return"center"}},e=s=>{switch(s){case"1":case"top":return"start";case"2":case"btm":case"bottom":return"end";case"3":case"center":case"ctr":case"c":return"center";default:return"normal"}},r={padding:this.padding||"0px",color:this.textColor||"var(--btn-color)",borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:o,height:this.h||"auto",display:"flex",flexDirection:"row",gap:this.gap||"1vh",justifyContent:t(this.itemPosH),alignItems:e(this.itemPosV)};return m`
                <style>
                    div {

                        background-color: ${this.bgColor?this.bgColor:"var(--btn-bg-color)"};
                        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
                        ${this.wrap?`flex-wrap: ${this.getFlexWrap(this.wrap)};`:""}


                    }
                    div:hover {
                        color:            ${this.textColorOnHover?this.textColorOnHover:this.textColor?this.textColor:"var(--btn-hover-color, inherit)"};
                        background-color: ${this.bgColorOnHover?this.bgColorOnHover:this.bgColor?this.bgColor:"var(--btn-hover-bg-color)"};
                        ${this.borderOnHover?`outline:${this.borderOnHover}`:""}
                    }

                </style>
                <div style=${x(r)}>
                    <slot></slot>
                </div>
            `}};D.styles=[h.styles,u`
                        :host
                        {
                            display: block;
                        }
                    `];mt([l()],D.prototype,"itemPosH",2);mt([l()],D.prototype,"itemPosV",2);D=mt([b("my-row")],D);var qe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,bt=(o,t,e,r)=>{for(var s=r>1?void 0:r?We(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&qe(t,e,s),s};let q=class extends h{constructor(){super(...arguments),this.numCols="3"}render(){const o=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),t={padding:this.padding||"0px",backgroundColor:this.bgColor||"var(--btn-bg-color)",color:this.textColor||"var(--btn-color)",borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:o,columnCount:this.numCols||"var(--col-num-cols)",columnGap:this.gap||"1vh"};return m`
                <style>
                    div {
                        ${this.hideOn?this.showOnParser(this.hideOn):""}

                    }
                </style>
                <div style=${x(t)}>
                    <slot></slot>
                </div>
            `}};q.styles=[h.styles,u`
                    :host
                    {
                        display: block;
                    }
                `];bt([l()],q.prototype,"numCols",2);bt([l()],q.prototype,"gap",2);q=bt([b("my-cols")],q);var Ye=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,tt=(o,t,e,r)=>{for(var s=r>1?void 0:r?Xe(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Ye(t,e,s),s};let M=class extends h{constructor(){super(...arguments),this.h="100vh"}render(){const o=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),t={padding:this.padding||"0px",backgroundColor:this.bgColor||"var(--btn-bg-color)",color:this.textColor||"var(--btn-color)",borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:o,display:"flex",alignItems:"center",flexDirection:"column",gap:this.gap||"var(--col-gap, 1vh)",justifyContent:"center",height:this.h};return m`
                <div style=${x(t)}>
                    <slot></slot>
                </div>
            `}};M.styles=[h.styles,u`
                    :host
                    {
                        display: block;
                    }
                `];tt([l()],M.prototype,"gap",2);tt([l()],M.prototype,"contentPosition",2);tt([l()],M.prototype,"h",2);M=tt([b("center-div")],M);var Fe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,et=(o,t,e,r)=>{for(var s=r>1?void 0:r?Ge(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Fe(t,e,s),s};let B=class extends D{constructor(){super(...arguments),this.handleScroll=()=>{const o=this.getAttribute("bgColorOnScroll");o&&window.scrollY>0?this.scrollBgColor=o:this.scrollBgColor=void 0}}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.handleScroll)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.handleScroll)}render(){const o=this.setShadow(this.shadow,this.shadowX,this.shadowY,this.shadowDiffuse,"var(--btn-box-shadow)"),t=s=>{switch(s){case"1":case"space-evenly":case"evenly":return"space-evenly";case"2":case"space-around":case"around":return"space-around";case"3":case"space-between":case"between":return"space-between";case"4":case"flex-end":case"end":return"flex-end";case"5":case"flex-start":case"start":return"flex-start";case"6":case"center":return"center";default:return"center"}},e=s=>{switch(s){case"1":case"top":return"start";case"2":case"btm":case"bottom":return"end";case"3":case"center":case"ctr":return"center";default:return"normal"}},r={padding:this.padding||"0px",backgroundColor:this.scrollBgColor||this.bgColor,color:this.textColor||"var(--btn-color)",borderRadius:this.round?"2vh":"var(--btn-border-radius)",boxShadow:o,height:this.h||"auto",display:"flex",flexDirection:"row",gap:this.gap||"1vh",justifyContent:t(this.itemPosH),alignItems:e(this.itemPosV),position:"static",top:"auto",transition:"background-color 0.5s ease-in-out"};return m`
                <style>
                    :host
                    {
                        ${this.sticky?"position: sticky;":""}
                        ${this.sticky?"top: 0;":""}

                    }
                </style>
                <div style=${x(r)}>
                    <slot></slot>
                </div>
            `}};B.styles=[D.styles];et([l({type:Boolean})],B.prototype,"sticky",2);et([l()],B.prototype,"bgColorOnScroll",2);et([he()],B.prototype,"scrollBgColor",2);B=et([b("my-nav")],B);
