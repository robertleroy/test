import{w as e}from"./index.1cc03ede.js";let o=JSON.parse(localStorage.getItem("savedLocations"))||[],r=JSON.parse(localStorage.getItem("sortOrder"))||[];const s=e(o);s.subscribe(t=>localStorage.setItem("savedLocations",JSON.stringify(t)));const a=e(r);a.subscribe(t=>localStorage.setItem("sortOrder",JSON.stringify(t)));let l=JSON.parse(localStorage.getItem("todoStore"))||{list:[],order:[]};const S=e(l);S.subscribe(t=>{localStorage.setItem("todoStore",JSON.stringify(t))});export{a,S as b,s};
