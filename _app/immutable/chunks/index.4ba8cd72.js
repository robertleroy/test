function E(){}function ee(e,t){for(const n in t)e[n]=t[n];return e}function K(e){return e()}function I(){return Object.create(null)}function v(e){e.forEach(K)}function B(e){return typeof e=="function"}function $e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function ne(e,...t){if(e==null)return E;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ee(e,t,n){e.$$.on_destroy.push(ne(t,n))}function ke(e,t,n,i){if(e){const r=Q(e,t,n,i);return e[0](r)}}function Q(e,t,n,i){return e[1]&&i?ee(n.ctx.slice(),e[1](i(t))):n.ctx}function Se(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(t.dirty.length,r.length);for(let o=0;o<s;o+=1)a[o]=t.dirty[o]|r[o];return a}return t.dirty|r}return t.dirty}function Ne(e,t,n,i,r,a){if(r){const s=Q(t,n,i,a);e.p(s,r)}}function Me(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function Ae(e,t,n){return e.set(n),t}function je(e){return e&&B(e.destroy)?e.destroy:E}const ie=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in ie;let A=!1;function re(){A=!0}function se(){A=!1}function ce(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function le(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let l=0;l<t.length;l++){const f=t[l];f.claim_order!==void 0&&c.push(f)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const l=t[c].claim_order,f=(r>0&&t[n[r]].claim_order<=l?r+1:ce(1,r,d=>t[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const a=[],s=[];let o=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(t[c-1]);o>=c;o--)s.push(t[o]);o--}for(;o>=0;o--)s.push(t[o]);a.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<a.length&&s[c].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;e.insertBefore(s[c],f)}}function oe(e,t){if(A){for(le(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Ce(e,t,n){A&&!n?oe(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function ae(e){e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function ue(e){return document.createElement(e)}function fe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function W(e){return document.createTextNode(e)}function Te(){return W(" ")}function Le(){return W("")}function Oe(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function qe(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function Be(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function _e(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,i,r=!1){_e(e);const a=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const c=n(o);return c===void 0?e.splice(s,1):e[s]=c,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const c=n(o);return c===void 0?e.splice(s,1):e[s]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function U(e,t,n,i){return R(e,r=>r.nodeName===t,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||a.push(o.name)}a.forEach(s=>r.removeAttribute(s))},()=>i(t))}function We(e,t,n){return U(e,t,n,ue)}function De(e,t,n){return U(e,t,n,fe)}function he(e,t){return R(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(t),!0)}function ze(e){return he(e," ")}function Fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function He(e,t){e.value=t??""}function Ie(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Ge(e,t,n){e.classList[n?"add":"remove"](t)}function me(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}function Je(e,t){return new e(t)}let k;function $(e){k=e}function D(){if(!k)throw new Error("Function called outside component initialization");return k}function Ke(e){D().$$.on_mount.push(e)}function Qe(e){D().$$.after_update.push(e)}function Re(){const e=D();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const a=me(t,n,{cancelable:i});return r.slice().forEach(s=>{s.call(e,a)}),!a.defaultPrevented}return!0}}function Ue(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const w=[],G=[];let x=[];const J=[],V=Promise.resolve();let O=!1;function X(){O||(O=!0,V.then(Y))}function Ve(){return X(),V}function q(e){x.push(e)}const L=new Set;let b=0;function Y(){if(b!==0)return;const e=k;do{try{for(;b<w.length;){const t=w[b];b++,$(t),pe(t.$$)}}catch(t){throw w.length=0,b=0,t}for($(null),w.length=0,b=0;G.length;)G.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];L.has(n)||(L.add(n),n())}x.length=0}while(w.length);for(;J.length;)J.pop()();O=!1,L.clear(),$(e)}function pe(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function ye(e){const t=[],n=[];x.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),x=t}const M=new Set;let g;function Xe(){g={r:0,c:[],p:g}}function Ye(){g.r||v(g.c),g=g.p}function Z(e,t){e&&e.i&&(M.delete(e),e.i(t))}function ge(e,t,n,i){if(e&&e.o){if(M.has(e))return;M.add(e),g.c.push(()=>{M.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function Ze(e,t){e.d(1),t.delete(e.key)}function et(e,t){ge(e,1,1,()=>{t.delete(e.key)})}function tt(e,t,n,i,r,a,s,o,c,l,f,_){let d=e.length,m=a.length,h=d;const j={};for(;h--;)j[e[h].key]=h;const S=[],C=new Map,P=new Map,z=[];for(h=m;h--;){const u=_(r,a,h),p=n(u);let y=s.get(p);y?i&&z.push(()=>y.p(u,t)):(y=l(p,u),y.c()),C.set(p,S[h]=y),p in j&&P.set(p,Math.abs(h-j[p]))}const F=new Set,H=new Set;function T(u){Z(u,1),u.m(o,f),s.set(u.key,u),f=u.first,m--}for(;d&&m;){const u=S[m-1],p=e[d-1],y=u.key,N=p.key;u===p?(f=u.first,d--,m--):C.has(N)?!s.has(y)||F.has(y)?T(u):H.has(N)?d--:P.get(y)>P.get(N)?(H.add(y),T(u)):(F.add(N),d--):(c(p,s),d--)}for(;d--;){const u=e[d];C.has(u.key)||c(u,s)}for(;m;)T(S[m-1]);return v(z),S}const be=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...be];function nt(e){e&&e.c()}function it(e,t){e&&e.l(t)}function we(e,t,n,i){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),i||q(()=>{const s=e.$$.on_mount.map(K).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...s):v(s),e.$$.on_mount=[]}),a.forEach(q)}function xe(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(w.push(e),X(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function rt(e,t,n,i,r,a,s,o=[-1]){const c=k;$(e);const l=e.$$={fragment:null,ctx:[],props:a,update:E,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:I(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&ve(e,_)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){re();const _=de(t.target);l.fragment&&l.fragment.l(_),_.forEach(ae)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),we(e,t.target,t.anchor,t.customElement),se(),Y()}$(c)}class st{$destroy(){xe(this,1),this.$destroy=E}$on(t,n){if(!B(n))return E;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{we as A,xe as B,ke as C,oe as D,He as E,Oe as F,Ne as G,Me as H,Se as I,tt as J,Pe as K,v as L,Ee as M,E as N,Ze as O,Ae as P,Ue as Q,et as R,st as S,B as T,fe as U,De as V,Ge as W,je as X,qe as Y,Re as Z,Te as a,Ce as b,ze as c,ge as d,Le as e,Ye as f,Z as g,ae as h,rt as i,Qe as j,ue as k,We as l,de as m,Be as n,Ke as o,Ie as p,W as q,he as r,$e as s,Ve as t,Fe as u,Xe as v,G as w,Je as x,nt as y,it as z};
