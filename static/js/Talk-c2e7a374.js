import{g as D,c as E,a as O,h as R,m as $,_ as F,b as H}from"./index-f0ba7160.js";import{_ as A}from"./index-2824cf88.js";import{_ as G}from"./Waves-825e896d.js";import{l as J,r as c,e as q,b as K,S as g,aa as t,u as p,ah as o,bl as u,F as h,aL as P,aJ as Q,R as d,j as k,b0 as l,aO as U,a8 as W,bp as X,aD as Y}from"./@vue-2d0ddfb4.js";import{t as f}from"./index-4db8903a.js";import{u as Z}from"./vue-router-2a5450bb.js";import{l as tt,t as et,o as ot,j as st}from"./naive-ui-b87942d2.js";import"./pinia-948ba97c.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./nprogress-29a3b628.js";import"./@babel-061b4810.js";import"./@vueuse-4d6fb19c.js";import"./js-cookie-cf83ad76.js";import"./axios-aba6f0e0.js";import"./dayjs-aaaa0bae.js";import"./swiper-d1934b6f.js";import"./ssr-window-c9202916.js";import"./@kangc-6220f0f5.js";import"./vue-a1bd1397.js";import"./markdown-it-emoji-4f1b57fa.js";import"./prismjs-08ac3f6b.js";import"./v-viewer-8afc779e.js";import"./viewerjs-3fd8af48.js";import"./vueuc-27e3b830.js";import"./evtd-b614532e.js";import"./seemly-76b7b838.js";import"./@css-render-c34b42f4.js";import"./vooks-d838407f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-0dc9900e.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./index-b2b7cf50.js";const at=n=>(P("data-v-1d38cd28"),n=n(),Q(),n),nt={class:"page-header"},it=at(()=>t("h1",{class:"page-title"},"说说",-1)),ct=["src"],lt={class:"bg"},mt={class:"page-container"},rt={class:"talk-item"},_t={class:"talk-meta"},pt={class:"talk-content-wrap"},ut={class:"talk-info"},dt={class:"talk-user-name"},kt={class:"talk-time"},vt=["innerHTML"],gt={class:"talk-image"},ht={class:"info mt10"},ft=J({__name:"Talk",setup(n){const C=D(),T=Z(),{userStore:i}=E(),m=c(0),r=c(0),b=c(3),s=c({id:0,nickname:"",avatar:"",talkContent:"",imgList:[],isTop:0,likeCount:0,commentCount:0,createTime:""}),y=q(()=>e=>i.talkLikeSet.indexOf(e)!=-1?"active":""),x=e=>{r.value=e},w=()=>{if(!i.id){$.msgError("请先登录");return}let e=s.value.id;f.likeTalk(e).then(()=>{i.talkLikeSet.indexOf(e)!=-1?s.value.likeCount-=1:s.value.likeCount+=1,i.talkLike(e)}).catch(()=>{})},L=()=>{var e;(e=document.getElementById("comment-container"))==null||e.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})};return K(()=>{f.getTalk(Number(T.params.id)).then(({data:e})=>{s.value=e.data,m.value=1}).catch(()=>{m.value=-1})}),(e,v)=>{const S=G,I=tt,_=F,B=et,z=A,a=ot,j=st,M=O;return d(),g(h,null,[t("div",nt,[it,t("img",{class:"page-cover",src:p(C),alt:""},null,8,ct),o(S)]),t("div",lt,[t("div",mt,[o(M,{status:m.value,"failed-msg":"说说加载失败"},{data:u(()=>[t("div",rt,[t("div",_t,[o(I,{circle:"",size:"large",src:s.value.avatar},null,8,["src"])]),t("div",pt,[t("div",ut,[t("span",dt,[k(l(s.value.nickname)+" ",1),o(_,{"icon-class":"badge",class:"ml5"})]),t("span",kt,l(p(R)(s.value.createTime)),1)]),t("div",{class:"talk-content",innerHTML:s.value.talkContent},null,8,vt),t("div",gt,[(d(!0),g(h,null,U(s.value.imgList,(N,V)=>(d(),W(B,{class:"image",key:V,src:N,"object-fit":"cover","img-props":{style:{height:"100%",width:"100%"}},onClick:v[0]||(v[0]=X(()=>{},["prevent"]))},null,8,["src"]))),128))]),t("div",ht,[t("span",{class:"talk-like info",onClick:w},[o(_,{"icon-class":"like",size:"0.8rem",class:Y(["mr5",p(y)(s.value.id)])},null,8,["class"]),k(" "+l(s.value.likeCount),1)]),t("span",{class:"talk-comment info",onClick:L},[o(_,{"icon-class":"comment",size:"0.9rem",class:"mr5"}),k(" "+l(r.value==null?0:r.value),1)])])])]),o(z,{"comment-type":b.value,onGetCommentCount:x},null,8,["comment-type"])]),loading:u(()=>[o(j,{justify:"start",align:"center"},{default:u(()=>[o(a,{circle:"",size:"large"}),t("div",null,[o(a,{round:"",text:"",style:{width:"8rem"}}),o(a,{round:"",style:{width:"12rem"}})])]),_:1}),o(a,{class:"mt30",text:"",round:""}),o(a,{round:"",text:"",repeat:2})]),_:1},8,["status"])])])],64)}}});const ae=H(ft,[["__scopeId","data-v-1d38cd28"]]);export{ae as default};