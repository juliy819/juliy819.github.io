import{e as C,g as F,a as V,t as $,_ as A,b as N}from"./index-15414ed8.js";import{_ as R}from"./Waves-e4859cde.js";import{l as q,r as w,b as z,S as i,aa as t,u as x,ah as o,bl as a,F as n,aL as D,aJ as E,R as e,aO as u,b0 as h,a8 as b}from"./@vue-2d0ddfb4.js";import{v as G,w as J,o as M}from"./naive-ui-b87942d2.js";import"./pinia-948ba97c.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./nprogress-29a3b628.js";import"./@babel-061b4810.js";import"./@vueuse-4d6fb19c.js";import"./js-cookie-cf83ad76.js";import"./axios-aba6f0e0.js";import"./vue-router-2a5450bb.js";import"./dayjs-aaaa0bae.js";import"./swiper-d1934b6f.js";import"./ssr-window-c9202916.js";import"./@kangc-6220f0f5.js";import"./vue-a1bd1397.js";import"./markdown-it-emoji-4f1b57fa.js";import"./prismjs-08ac3f6b.js";import"./v-viewer-8afc779e.js";import"./viewerjs-3fd8af48.js";import"./vueuc-27e3b830.js";import"./evtd-b614532e.js";import"./seemly-76b7b838.js";import"./@css-render-c34b42f4.js";import"./vooks-d838407f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-0dc9900e.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const O={getFavouriteList:()=>C({url:"/favourite/list",method:"get"})},U=O,W=r=>(D("data-v-02955884"),r=r(),E(),r),j={class:"page-header"},H=W(()=>t("h1",{class:"page-title"},"收藏夹",-1)),K=["src"],P={class:"bg"},Q={class:"page-container"},T={class:"favourite-classify"},X=["viewBox"],Y=["d","fill"],Z=["src"],tt={class:"favourite-item-info"},et={class:"favourite-item-title"},st={class:"favourite-item-desc"},ot={class:"favourite-item-info"},it=q({__name:"index",setup(r){const B=F(),c=w(0),d=w([]),v=(l,f)=>{const _=l.match(f);return _?_[1]:null};return z(()=>{U.getFavouriteList().then(({data:l})=>{d.value=l.data,d.value.length>0?c.value=1:c.value=2}).catch(()=>{c.value=-1})}),(l,f)=>{const _=R,I=A,y=G,k=J,m=M,L=V;return e(),i(n,null,[t("div",j,[H,t("img",{src:x(B),alt:"",class:"page-cover"},null,8,K),o(_)]),t("div",P,[t("div",Q,[o(L,{status:c.value,"failed-msg":"收藏加载失败","no-data-msg":"暂时还没有收藏哦~"},{data:a(()=>[(e(!0),i(n,null,u(d.value,(p,g)=>(e(),i("div",{key:g},[t("h2",T,h(p.classify),1),o(k,{class:"favourite-item-wrapper",cols:"1 s:2 m:3 l:4",responsive:"screen","x-gap":"15","y-gap":"15"},{default:a(()=>[(e(!0),i(n,null,u(p.favouriteList,(s,S)=>(e(),b(y,{key:S,class:"favourite-item",onClick:at=>x($)(s.url)},{default:a(()=>[s.icon.startsWith("svg")?(e(),i("svg",{key:0,class:"favourite-item-image",viewBox:v(s.icon,/\/viewBox:(.*?)\//)},[t("path",{d:v(s.icon,/\/d:(.*)/),fill:v(s.icon,/\/fill:(.*?)\//)},null,8,Y)],8,X)):s.icon===""?(e(),b(I,{key:1,"icon-class":"favourite",size:"3.75rem",class:"favourite-item-image"})):(e(),i("img",{key:2,src:s.icon,alt:"",class:"favourite-item-image"},null,8,Z)),t("div",tt,[t("div",et,h(s.title),1),t("div",st,h(s.description),1)])]),_:2},1032,["onClick"]))),128))]),_:2},1024)]))),128))]),loading:a(()=>[(e(),i(n,null,u([1,2],p=>t("div",{key:p},[o(m,{height:"1.5rem",width:"10rem",round:"",class:"mb20"}),o(k,{class:"favourite-item-wrapper",cols:"1 s:2 m:3 l:4",responsive:"screen","x-gap":"15","y-gap":"15"},{default:a(()=>[(e(),i(n,null,u([1,2,3,4,5,6,7,8],g=>o(y,{class:"favourite-item",key:g},{default:a(()=>[o(m,{class:"favourite-item-image"}),t("div",ot,[o(m,{height:"1.25rem",width:"5rem",round:"",class:"mb5"}),o(m,{height:"2.5rem",width:"calc(100% - 0.75rem)",round:""})])]),_:2},1024)),64))]),_:2},1024)])),64))]),_:1},8,["status"])])])],64)}}});const Mt=N(it,[["__scopeId","data-v-02955884"]]);export{Mt as default};