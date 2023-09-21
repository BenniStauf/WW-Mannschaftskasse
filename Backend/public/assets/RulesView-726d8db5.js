import{u as y,w as T,o as i,c as r,a,b as n,d as s,e,F as l,r as d,n as m,t as c,f,R as G,T as z,h as A,y as D,M as C,X as w,g as R,i as M,Y as S,j as b,V as B,_ as v}from"./index-1a63d944.js";const K={class:"min-h-full"},L={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},H={class:"flex h-20 items-center justify-between"},U={class:"flex items-center"},N=e("div",{class:"flex-shrink-0"},[e("img",{class:"block h-16 w-auto lg:hidden",src:v,alt:"Westwien Logo"}),e("img",{class:"hidden h-16 w-auto lg:block",src:v,alt:"Westwien Logo"})],-1),W={class:"hidden md:block"},F={class:"ml-10 flex items-baseline space-x-4"},V=["onClick","aria-current"],j={class:"hidden md:block"},$={class:"ml-4 flex items-center md:ml-6"},Z=e("span",{class:"absolute -inset-1.5"},null,-1),O=e("span",{class:"sr-only"},"Open user menu",-1),P=["src"],E={class:"-mr-2 flex md:hidden"},I=e("span",{class:"absolute -inset-0.5"},null,-1),X=e("span",{class:"sr-only"},"Open main menu",-1),Y={class:"space-y-1 px-2 pb-3 pt-2 sm:px-3"},q={key:0,class:"border-t border-wwDarkGreen pb-3 pt-4"},J={class:"flex items-center px-5"},Q={class:"flex-shrink-0"},ee=["src"],se={class:"ml-3"},te={class:"text-base font-medium text-white"},ie={class:"mt-3 space-y-1 px-2"},ne=e("header",{class:"bg-white shadow"},[e("div",{class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"},[e("h1",{class:"text-3xl font-bold leading-tight tracking-tight text-gray-900"},"Regeln")])],-1),re={class:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"},ae=e("p",{class:"mx-5 mb-7"}," Hier findet ihr alle Regeln von der Mannschaftskasse und die dazugehörigen Preise. Wen eine neue Regeln hinzugefügt wird gebe ich euch im Training bescheid. Wenn ihr Vorschläge für neue Regeln habt gebt mir bitte auch bescheid, dann könne wir abstimmen, ob diese neue Regel hinzugefügt wird, oder nicht. ",-1),oe=e("p",{class:"mx-5"},"Meine Kontodaten für die Überweisung findet ihr hier:",-1),ce=e("p",{class:"mx-5 font-bold mb-7"},"IBAN: AT48 2011 1296 1060 0801",-1),le={role:"list",class:"divide-y divide-gray-100 mx-5"},de={class:"text-sm font-semibold leading-6 text-gray-900"},ue={class:"flex w-full flex-none justify-between gap-x-8 sm:w-auto"},pe={class:"flex gap-x-2.5"},he={class:"text-sm leading-6 text-gray-900"},we={__name:"RulesView",setup(ge){const u=y(),o=T(),_=[{name:"Home",path:"/",current:!1},{name:"Regeln",path:"/rules",current:!0},{name:"Statistik",path:"/stats",current:!1},{name:"Suggestions",path:"/suggestions",current:!1}],k=[{description:"Zu spät kommen beim Training (Man muss 10min vor Trainingsbeginn in der Halle sein)",price:"50c pro Minute"},{description:"Zu spät kommen beim Match (Ab Treffpunkt)",price:"1€ pro Minute"},{description:"Nicht erscheinen im Training ohne Absage (Absagen gelten bis 2h vor dem Training)",price:"5€"},{description:"Training ohne Grund Absagen",price:"2.5€"},{description:"Besoffen zum Training",price:"5€"},{description:"Besoffen zum Match",price:"10€"},{description:"Kurze Socken im Training",price:"1€"},{description:"Kleidung vergessen (zu Hause oder im Training)",price:"50c pro Kleidungsstück"},{description:"Schuhe vergessen (zu Hause oder im Training)",price:"2€"},{description:"Keine Springschnur / Theraband / Ball",price:"1€"},{description:"Headshot Torwart",price:"1€"},{description:"Headshot Torwart bei einem freien Wurf",price:"1.5€"},{description:"Field Goal im Training (zählt wenn der Ball das Holz berührt, freier Wurf ohne Kontakt)",price:"50c"},{description:"Dumme rote Karte",price:"5€"},{description:"Dumme 2min (Mit Schiri diskutieren, Schiri beleidigen, etc.)",price:"2.5€"},{description:"Dresscode Freitag",price:"1€"},{description:"Dresscode vor einem Match (alle grünes T-Shirt)",price:"2€"},{description:"Reden, während ein Trainer spricht",price:"1€"},{description:"Pick vergessen bzw. keines mehr da (gilt nur für den Zuständigen)",price:"1€"},{description:"Dummes, unnötiges Foul im Training",price:"1€"},{description:"Nicht laufen gehen, kein Krafttraining machen",price:"2€"},{description:"Keine Wasserflasche",price:"1€"},{description:"Rülpsen im Training",price:"1€"},{description:"Furzen im Training",price:"1€"},{description:"Dress vergessen",price:"5€"}],x=[{name:"Sign out",href:"#"}];return(me,p)=>(i(),r("div",K,[a(s(B),{as:"nav",class:"bg-wwGreen"},{default:n(({open:h})=>[e("div",L,[e("div",H,[e("div",U,[N,e("div",W,[e("div",F,[(i(),r(l,null,d(_,t=>e("a",{key:t.name,onClick:g=>s(u).push(t.path),class:m([t.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","rounded-md px-3 py-2 text-sm font-medium"]),"aria-current":t.current?"page":void 0},c(t.name),11,V)),64))])])]),e("div",j,[e("div",$,[s(o).getAktiverUser?(i(),f(s(C),{key:0,as:"div",class:"relative ml-3"},{default:n(()=>[e("div",null,[a(s(G),{class:"relative flex max-w-xs items-center rounded-full bg-wwGreen text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:n(()=>[Z,O,e("img",{class:"h-8 w-8 rounded-full",src:s(o).getAktiverUser.profilbild_url,alt:""},null,8,P)]),_:1})]),a(z,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(A),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[(i(),r(l,null,d(x,t=>a(s(D),{onClick:s(o).deleteAktivenUser,key:t.name},{default:n(({active:g})=>[e("a",{class:m([g?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},c(t.name),3)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]),_:1})):(i(),r("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray",onClick:p[0]||(p[0]=t=>s(u).push("/login"))}," Login "))])]),e("div",E,[a(s(w),{class:"relative inline-flex items-center justify-center rounded-md bg-wwGreen p-2 text-indigo-200 hover:bg-wwLightGreen hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:n(()=>[I,X,h?(i(),f(s(M),{key:1,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"})):(i(),f(s(R),{key:0,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"}))]),_:2},1024)])])]),a(s(S),{class:"md:hidden"},{default:n(()=>[e("div",Y,[(i(),r(l,null,d(_,t=>a(s(w),{key:t.name,as:"a",onClick:g=>s(u).push(t.path),class:m([t.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","block rounded-md px-3 py-2 text-base font-medium"]),"aria-current":t.current?"page":void 0},{default:n(()=>[b(c(t.name),1)]),_:2},1032,["onClick","class","aria-current"])),64))]),s(o).getAktiverUser?(i(),r("div",q,[e("div",J,[e("div",Q,[e("img",{class:"h-10 w-10 rounded-full",src:s(o).getAktiverUser.profilbild_url,alt:""},null,8,ee)]),e("div",se,[e("div",te,c(s(o).getAktiverUser.vorname)+" "+c(s(o).getAktiverUser.nachname),1)])]),e("div",ie,[(i(),r(l,null,d(x,t=>a(s(w),{key:t.name,as:"a",onClick:s(o).deleteAktivenUser,class:"block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-wwLightGreen hover:bg-opacity-75"},{default:n(()=>[b(c(t.name),1)]),_:2},1032,["onClick"])),64))])])):(i(),r("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray m-5",onClick:p[1]||(p[1]=t=>s(u).push("/login"))}," Login "))]),_:1})]),_:1}),ne,e("main",null,[e("div",re,[ae,oe,ce,e("ul",le,[(i(),r(l,null,d(k,(h,t)=>e("li",{key:t,class:"flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"},[e("div",null,[e("p",de,c(h.description),1)]),e("dl",ue,[e("div",pe,[e("dd",he,c(h.price),1)])])])),64))])])])]))}};export{we as default};
