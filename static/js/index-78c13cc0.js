import{l as x,r as p,b as C,S,aa as s,D as b,bf as y,bn as M,ah as c,bl as g,u as w,F as A,aL as I,aJ as L,R as N,j as V,b0 as v}from"./@vue-2d0ddfb4.js";import{e as h,c as B,m as l,b as D}from"./index-46ecffbd.js";import{s as K}from"./vue3-danmaku-b2e7f713.js";import{h as F,l as T}from"./naive-ui-b87942d2.js";import"./pinia-948ba97c.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./nprogress-29a3b628.js";import"./@babel-061b4810.js";import"./@vueuse-4d6fb19c.js";import"./axios-aba6f0e0.js";import"./js-cookie-cf83ad76.js";import"./vue-router-2a5450bb.js";import"./dayjs-aaaa0bae.js";import"./swiper-d1934b6f.js";import"./ssr-window-c9202916.js";import"./@kangc-6220f0f5.js";import"./vue-a1bd1397.js";import"./markdown-it-emoji-4f1b57fa.js";import"./prismjs-08ac3f6b.js";import"./v-viewer-8afc779e.js";import"./viewerjs-3fd8af48.js";import"./vueuc-27e3b830.js";import"./evtd-b614532e.js";import"./seemly-76b7b838.js";import"./@css-render-c34b42f4.js";import"./vooks-d838407f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-0dc9900e.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const U={getMessageList(){return h({url:"/message/list",method:"get"})},addMessage(t){return h({url:"/message",method:"post",data:t})}},f=U,W=t=>(I("data-v-66102ad2"),t=t(),L(),t),j={class:"message-container"},q=W(()=>s("h1",{class:"message-title"},"留言板",-1)),z={class:"message-input"},E=["onKeyup"],J={class:"danmaku-container"},R={class:"danmaku-item"},$={class:"ml5"},G={class:"ml5"},H=x({__name:"index",setup(t){const{blogStore:d,userStore:n}=B(),o=p(""),u=p(),m=p([]),_=()=>{if(o.value.trim()=="")return l.msgWarning("留言内容不能为空"),!1;const i=n.avatar?n.avatar:d.siteConfig.touristAvatar,a=n.nickname?n.nickname:"游客";let r={avatar:i,nickname:a,messageContent:o.value};f.addMessage(r).then(()=>{d.siteConfig.messageCheck?l.msgWarning("留言成功，正在审核中"):(u.value.push(r),l.msgSuccess("留言成功")),o.value=""}).catch(()=>{})};return C(async()=>{await f.getMessageList().then(({data:i})=>{m.value=i.data}).catch(()=>{})}),(i,a)=>{const r=F,k=T;return N(),S(A,null,[s("div",j,[q,s("div",z,[b(s("input",{class:"input","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),onKeyup:M(_,["enter"]),placeholder:"说点什么吧"},null,40,E),[[y,o.value]]),c(r,{class:"send",onClick:_},{default:g(()=>[V("发送")]),_:1})])]),s("div",J,[c(w(K),{ref_key:"danmaku",ref:u,class:"danmaku",danmus:m.value,"onUpdate:danmus":a[1]||(a[1]=e=>m.value=e),"use-slot":"","is-suspend":"","random-channel":"",loop:""},{dm:g(({danmu:e})=>[s("span",R,[c(k,{circle:"",size:"medium",src:e.avatar},null,8,["src"]),s("span",$,v(e.nickname)+" :",1),s("span",G,v(e.messageContent),1)])]),_:1},8,["danmus"])])],64)}}});const Ls=D(H,[["__scopeId","data-v-66102ad2"]]);export{Ls as default};
