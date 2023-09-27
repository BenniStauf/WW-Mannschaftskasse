import{o as a,c as o,e,u as T,w as U,k as S,q as B,J as V,m as w,a as i,b as r,d as t,F as u,r as m,n as b,t as l,f as x,R as M,T as N,h as R,y as F,M as H,X as v,g as O,i as P,Y as W,j as y,V as q,ak as A,_ as j}from"./index-b09a1467.js";import{r as D,a as $}from"./CurrencyEuroIcon-10b7c86d.js";function E(z,h){return a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"})])}const J={class:"min-h-full"},X={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},Y={class:"flex h-20 items-center justify-between"},I={class:"flex items-center"},K=e("div",{class:"flex-shrink-0"},[e("img",{class:"block h-16 w-auto lg:hidden",src:j,alt:"Westwien Logo"}),e("img",{class:"hidden h-16 w-auto lg:block",src:j,alt:"Westwien Logo"})],-1),Q={class:"hidden md:block"},Z={class:"ml-10 flex items-baseline space-x-4"},ee=["onClick","aria-current"],te={class:"hidden md:block"},se={class:"ml-4 flex items-center md:ml-6"},ae=e("span",{class:"absolute -inset-1.5"},null,-1),ne=e("span",{class:"sr-only"},"Open user menu",-1),oe=["src"],le={class:"-mr-2 flex md:hidden"},ie=e("span",{class:"absolute -inset-0.5"},null,-1),re=e("span",{class:"sr-only"},"Open main menu",-1),de={class:"space-y-1 px-2 pb-3 pt-2 sm:px-3"},ce={key:0,class:"border-t border-wwDarkGreen pb-3 pt-4"},ue={class:"flex items-center px-5"},me={class:"flex-shrink-0"},he=["src"],ge={class:"ml-3"},xe={class:"text-base font-medium text-white"},_e={class:"mt-3 space-y-1 px-2"},pe=e("header",{class:"bg-white shadow"},[e("div",{class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between"},[e("h1",{class:"text-3xl font-bold leading-tight tracking-tight text-gray-900"},"Statistik")])],-1),fe={class:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"},we=e("h3",{class:"text-xl font-semibold leading-6 text-gray-900 ml-2"},"Total",-1),be={class:"flex flex-row justify-center w-full mb-12"},ve={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2"},ye={class:"absolute rounded-md bg-wwGreen p-3"},ke={class:"ml-16 truncate text-sm font-medium text-gray-500"},Ge={class:"ml-16 flex items-baseline pb-6 sm:pb-7"},Ce={class:"text-2xl font-semibold text-gray-900"},Se=e("hr",null,null,-1),Ae=e("h3",{class:"text-xl font-semibold leading-6 text-gray-900 ml-2 mt-5"},"Summe",-1),je={class:"flex flex-row justify-center w-full mb-12"},De={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2"},$e={class:"absolute rounded-md bg-wwGreen p-3"},ze={class:"ml-16 truncate text-sm font-medium text-gray-500"},Le={class:"ml-16 flex items-baseline pb-6 sm:pb-7"},Te={class:"text-2xl font-semibold text-gray-900"},Ue=e("hr",null,null,-1),Be=e("h3",{class:"text-xl font-semibold leading-6 text-gray-900 ml-2 mt-5"},"Pro Spieler",-1),Ve={role:"list",class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5"},Me={class:"flex flex-1 flex-col p-8"},Ne=["src"],Re={class:"mt-6 text-sm font-medium text-gray-900"},Fe={class:"-mt-px flex divide-x divide-gray-200 cursor-pointer"},He={class:"flex w-0 flex-1"},Oe=["onClick"],qe={__name:"StatisticsView",setup(z){const h=T(),d=U(),p=S([{id:1,name:"Anzahl Überwiesen",stat:"0",icon:D},{id:2,name:"Anzahl Bar bekommen",stat:"0",icon:$}]),f=S([{id:1,name:"Summe Überwiesen",stat:"0",icon:D},{id:2,name:"Summe Bar bekommen",stat:"0",icon:$}]),k=B([]);V(async()=>{const{data:g}=await w.get("/paymentType");p[0].stat=g[0].karte,p[1].stat=g[0].barzahlung;const{data:c}=await w.get("/sumType");f[0].stat=c[0].karte,f[1].stat=c[0].barzahlung;const{data:n}=await w.get("/spieler");console.log(n),k.value=n.spieler});function L(g){console.log(g.s_id),h.push(`/statsPlayer/${g.s_id}`)}const G=[{name:"Home",path:"/",current:!1},{name:"Regeln",path:"/rules",current:!1},{name:"Statistik",path:"/stats",current:!0},{name:"Suggestions",path:"/suggestions",current:!1}],C=[{name:"Sign out",href:"#"}];return(g,c)=>(a(),o("div",J,[i(t(q),{as:"nav",class:"bg-wwGreen"},{default:r(({open:n})=>[e("div",X,[e("div",Y,[e("div",I,[K,e("div",Q,[e("div",Z,[(a(),o(u,null,m(G,s=>e("a",{key:s.name,onClick:_=>t(h).push(s.path),class:b([s.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","rounded-md px-3 py-2 text-sm font-medium"]),"aria-current":s.current?"page":void 0},l(s.name),11,ee)),64))])])]),e("div",te,[e("div",se,[t(d).getAktiverUser?(a(),x(t(H),{key:0,as:"div",class:"relative ml-3"},{default:r(()=>[e("div",null,[i(t(M),{class:"relative flex max-w-xs items-center rounded-full bg-wwGreen text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:r(()=>[ae,ne,e("img",{class:"h-8 w-8 rounded-full",src:t(d).getAktiverUser.profilbild_url,alt:""},null,8,oe)]),_:1})]),i(N,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[i(t(R),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:r(()=>[(a(),o(u,null,m(C,s=>i(t(F),{onClick:t(d).deleteAktivenUser,key:s.name},{default:r(({active:_})=>[e("a",{class:b([_?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},l(s.name),3)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]),_:1})):(a(),o("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray",onClick:c[0]||(c[0]=s=>t(h).push("/login"))}," Login "))])]),e("div",le,[i(t(v),{class:"relative inline-flex items-center justify-center rounded-md bg-wwGreen p-2 text-indigo-200 hover:bg-wwLightGreen hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:r(()=>[ie,re,n?(a(),x(t(P),{key:1,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"})):(a(),x(t(O),{key:0,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"}))]),_:2},1024)])])]),i(t(W),{class:"md:hidden"},{default:r(()=>[e("div",de,[(a(),o(u,null,m(G,s=>i(t(v),{key:s.name,as:"a",onClick:_=>t(h).push(s.path),class:b([s.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","block rounded-md px-3 py-2 text-base font-medium"]),"aria-current":s.current?"page":void 0},{default:r(()=>[y(l(s.name),1)]),_:2},1032,["onClick","class","aria-current"])),64))]),t(d).getAktiverUser?(a(),o("div",ce,[e("div",ue,[e("div",me,[e("img",{class:"h-10 w-10 rounded-full",src:t(d).getAktiverUser.profilbild_url,alt:""},null,8,he)]),e("div",ge,[e("div",xe,l(t(d).getAktiverUser.vorname)+" "+l(t(d).getAktiverUser.nachname),1)])]),e("div",_e,[(a(),o(u,null,m(C,s=>i(t(v),{key:s.name,as:"a",onClick:t(d).deleteAktivenUser,class:"block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-wwLightGreen hover:bg-opacity-75"},{default:r(()=>[y(l(s.name),1)]),_:2},1032,["onClick"])),64))])])):(a(),o("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray m-5",onClick:c[1]||(c[1]=s=>t(h).push("/login"))}," Login "))]),_:1})]),_:1}),pe,e("main",null,[e("div",fe,[e("div",null,[we,e("div",be,[e("dl",ve,[(a(!0),o(u,null,m(p,n=>(a(),o("div",{key:n.id,class:"relative overflow-hidden rounded-lg bg-white px-4 pb-1 pt-5 shadow sm:px-6 sm:pt-6 mx-12"},[e("dt",null,[e("div",ye,[(a(),x(A(n.icon),{class:"h-6 w-6 text-white","aria-hidden":"true"}))]),e("p",ke,l(n.name),1)]),e("dd",Ge,[e("p",Ce,l(n.stat),1)])]))),128))])]),Se,Ae,e("div",je,[e("dl",De,[(a(!0),o(u,null,m(f,n=>(a(),o("div",{key:n.id,class:"relative overflow-hidden rounded-lg bg-white px-4 pb-1 pt-5 shadow sm:px-6 sm:pt-6 mx-12"},[e("dt",null,[e("div",$e,[(a(),x(A(n.icon),{class:"h-6 w-6 text-white","aria-hidden":"true"}))]),e("p",ze,l(n.name),1)]),e("dd",Le,[e("p",Te,l(n.stat)+"€",1)])]))),128))])]),Ue,Be,e("ul",Ve,[(a(!0),o(u,null,m(k.value,(n,s)=>(a(),o("li",{key:s,class:"col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"},[e("div",Me,[e("img",{class:"mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover",src:n.profilbild_url,alt:""},null,8,Ne),e("h3",Re,l(n.vorname)+" "+l(n.nachname),1)]),e("div",null,[e("div",Fe,[e("div",He,[e("a",{onClick:_=>L(n),class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"},[i(t(E),{class:"h-7 w-7 text-wwGray","aria-hidden":"true"}),y(" Statistik anzeigen ")],8,Oe)])])])]))),128))])])])])]))}};export{qe as default};
