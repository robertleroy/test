import{S as ee,i as te,s as se,C as ae,k as p,q as P,a as L,l as m,m as b,r as T,h as _,c as N,n as g,b as C,D as c,E as R,F as B,u as le,G as ne,H as oe,I as re,g as ie,d as ue,J as ce,K as _e,L as Q,M as fe,N as W}from"../chunks/index.f6ba03db.js";import{b as x}from"../chunks/paths.57a068b8.js";import{s as X,a as Y}from"../chunks/index.5af97a8f.js";const he=!0,be=Object.freeze(Object.defineProperty({__proto__:null,prerender:he},Symbol.toStringTag,{value:"Module"}));function Z(l,a,t){const o=l.slice();return o[9]=a[t],o}function $(l){let a,t,o=l[9].name+"",u,E;return{c(){a=p("div"),t=p("a"),u=P(o),E=L(),this.h()},l(v){a=m(v,"DIV",{class:!0});var i=b(a);t=m(i,"A",{href:!0});var n=b(t);u=T(n,o),n.forEach(_),E=N(i),i.forEach(_),this.h()},h(){g(t,"href",""+(x+l[9].path)),g(a,"class","route")},m(v,i){C(v,a,i),c(a,t),c(t,u),c(a,E)},p:fe,d(v){v&&_(a)}}}function de(l){let a,t,o,u,E,v,i,n,O,I=(l[0].length<3)+"",A,f,y,j,S,V,D,M,z,w=l[2],r=[];for(let e=0;e<w.length;e+=1)r[e]=$(Z(l,w,e));const U=l[5].default,h=ae(U,l,l[4],null);return{c(){a=p("header"),t=p("div"),o=p("div"),u=p("a"),E=P(l[1]),v=L(),i=p("div"),n=p("input"),O=L(),A=P(I),f=L(),y=p("nav");for(let e=0;e<r.length;e+=1)r[e].c();j=L(),S=p("main"),V=p("div"),h&&h.c(),this.h()},l(e){a=m(e,"HEADER",{class:!0});var d=b(a);t=m(d,"DIV",{class:!0});var s=b(t);o=m(s,"DIV",{class:!0});var H=b(o);u=m(H,"A",{href:!0});var F=b(u);E=T(F,l[1]),F.forEach(_),H.forEach(_),v=N(s),i=m(s,"DIV",{class:!0});var k=b(i);n=m(k,"INPUT",{type:!0,placeholder:!0}),O=N(k),A=T(k,I),k.forEach(_),f=N(s),y=m(s,"NAV",{class:!0});var G=b(y);for(let q=0;q<r.length;q+=1)r[q].l(G);G.forEach(_),s.forEach(_),d.forEach(_),j=N(e),S=m(e,"MAIN",{});var J=b(S);V=m(J,"DIV",{class:!0});var K=b(V);h&&h.l(K),K.forEach(_),J.forEach(_),this.h()},h(){g(u,"href",x+"/"),g(o,"class","title"),g(n,"type","text"),g(n,"placeholder","new item ..."),g(i,"class","newItem"),g(y,"class","svelte-f9neu0"),g(t,"class","flex svelte-f9neu0"),g(a,"class"," svelte-f9neu0"),g(V,"class","router svelte-f9neu0")},m(e,d){C(e,a,d),c(a,t),c(t,o),c(o,u),c(u,E),c(t,v),c(t,i),c(i,n),R(n,l[0]),c(i,O),c(i,A),c(t,f),c(t,y);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(y,null);C(e,j,d),C(e,S,d),c(S,V),h&&h.m(V,null),D=!0,M||(z=[B(n,"input",l[6]),B(n,"change",l[3])],M=!0)},p(e,[d]){if(d&1&&n.value!==e[0]&&R(n,e[0]),(!D||d&1)&&I!==(I=(e[0].length<3)+"")&&le(A,I),d&4){w=e[2];let s;for(s=0;s<w.length;s+=1){const H=Z(e,w,s);r[s]?r[s].p(H,d):(r[s]=$(H),r[s].c(),r[s].m(y,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=w.length}h&&h.p&&(!D||d&16)&&ne(h,U,e,e[4],D?re(U,e[4],d,null):oe(e[4]),null)},i(e){D||(ie(h,e),D=!0)},o(e){ue(h,e),D=!1},d(e){e&&_(a),ce(r,e),e&&_(j),e&&_(S),h&&h.d(e),M=!1,_e(z)}}}function ve(l,a,t){let o,u;Q(l,Y,f=>t(7,o=f)),Q(l,X,f=>t(8,u=f));let{$$slots:E={},$$scope:v}=a,i="Home",n="";const O=[{name:"Home",path:"/"},{name:"About",path:"/about"}];function I(){if(n.length<3)return;console.log("addItem",n);const f={id:Date.now().toString(36),city:n,region:"USA",countryCode:"US",lat:40.504123,lon:-74.516532};W(X,u=[...u,f],u),W(Y,o=[...o,f.id],o),t(0,n="")}function A(){n=this.value,t(0,n)}return l.$$set=f=>{"$$scope"in f&&t(4,v=f.$$scope)},[n,i,O,I,v,E,A]}class Ee extends ee{constructor(a){super(),te(this,a,ve,de,se,{})}}export{Ee as component,be as universal};
