import{g as j,a as z,f as M,_ as V,b as R}from"./index-15414ed8.js";import{_ as D}from"./Waves-e4859cde.js";import{t as y}from"./index-b46a78ec.js";import{M as F}from"./MyImage-3d8873bc.js";import{_ as S}from"./Pagination.vue_vue_type_script_setup_true_lang-c22c867b.js";import{u as E}from"./vue-router-2a5450bb.js";import{l as O,r as l,w as P,b as Q,S as d,aa as o,b0 as _,u as N,ah as t,bl as a,F as g,aP as U,R as r,aO as w,a8 as k,j as v,a9 as q}from"./@vue-2d0ddfb4.js";import{j as G,v as H,w as J,o as K}from"./naive-ui-b87942d2.js";import"./pinia-948ba97c.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./nprogress-29a3b628.js";import"./@babel-061b4810.js";import"./@vueuse-4d6fb19c.js";import"./js-cookie-cf83ad76.js";import"./axios-aba6f0e0.js";import"./dayjs-aaaa0bae.js";import"./swiper-d1934b6f.js";import"./ssr-window-c9202916.js";import"./@kangc-6220f0f5.js";import"./vue-a1bd1397.js";import"./markdown-it-emoji-4f1b57fa.js";import"./prismjs-08ac3f6b.js";import"./v-viewer-8afc779e.js";import"./viewerjs-3fd8af48.js";import"./vueuc-27e3b830.js";import"./evtd-b614532e.js";import"./seemly-76b7b838.js";import"./@css-render-c34b42f4.js";import"./vooks-d838407f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-0dc9900e.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const W={class:"page-header"},X={class:"page-title"},Y=["src"],Z={class:"bg"},tt={class:"page-container"},et={class:"article-cover"},at={class:"article-info"},ot={class:"article-title"},st={class:"tag-info"},rt={class:"article-info"},nt=O({__name:"ArticleList",setup(it){const I=j(),T=E(),m=l(0),u=l(0),L=l("标签"),c=l([]),n=l({current:1,size:8,categoryId:0,tagId:Number(T.params.id)});return P(()=>n.value.current,()=>{y.getTagArticleList(n.value).then(({data:s})=>{c.value=s.data.articleConditionList}).catch(()=>{c.value=[]})}),Q(()=>{y.countTagArticles(n.value).then(({data:s})=>{u.value=s.data}).catch(()=>{u.value=0}),y.getTagArticleList(n.value).then(({data:s})=>{c.value=s.data.articleConditionList,L.value=s.data.name,c.value.length>0?m.value=1:m.value=2}).catch(()=>{m.value=-1})}),(s,b)=>{const $=D,p=U("router-link"),f=V,x=G,A=H,C=J,i=K,B=z;return r(),d(g,null,[o("div",W,[o("h1",X,_(L.value),1),o("img",{class:"page-cover",src:N(I),alt:""},null,8,Y),t($)]),o("div",Z,[o("div",tt,[t(B,{status:m.value,"no-data-msg":"该标签下暂时还没有文章哦~","failed-msg":"文章列表加载失败"},{data:a(()=>[t(C,{"x-gap":"20","y-gap":"20",cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:a(()=>[(r(!0),d(g,null,w(c.value,e=>(r(),k(A,{class:"article-item",key:e.id},{default:a(()=>[o("div",et,[t(p,{to:`/article/${e.id}`},{default:a(()=>[t(F,{src:e.articleCover},null,8,["src"])]),_:2},1032,["to"])]),o("div",at,[o("div",ot,[t(p,{to:`/article/${e.id}`},{default:a(()=>[v(_(e.articleTitle),1)]),_:2},1032,["to"])]),t(x,{justify:"space-between",class:"article-meta"},{default:a(()=>[o("span",null,[t(f,{"icon-class":"calendar",size:"0.95rem"}),v(" "+_(N(M)(e.createTime)),1)]),t(p,{to:`/category/${e.category.id}`},{default:a(()=>[t(f,{"icon-class":"flag",size:"0.9rem"}),v(" "+_(e.category.categoryName),1)]),_:2},1032,["to"])]),_:2},1024),o("div",st,[(r(!0),d(g,null,w(e.tagList,h=>(r(),k(p,{to:`/tag/${h.id}`,class:"article-tag-category",key:h.id},{default:a(()=>[t(f,{"icon-class":"tag",size:"0.8rem"}),v(" "+_(h.tagName),1)]),_:2},1032,["to"]))),128))])])]),_:2},1024))),128))]),_:1}),u.value>8?(r(),k(S,{key:0,current:n.value.current,"onUpdate:current":b[0]||(b[0]=e=>n.value.current=e),total:Math.ceil(u.value/8)},null,8,["current","total"])):q("",!0)]),loading:a(()=>[t(C,{"x-gap":"20","y-gap":"20",cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:a(()=>[(r(),d(g,null,w([1,2,3,4,5,6],e=>t(A,{class:"article-item",key:e},{default:a(()=>[t(i,{class:"article-cover"}),o("div",rt,[t(i,{round:"",class:"article-title",style:{width:"12rem"}}),t(i,{round:"",class:"article-meta mb10",style:{width:"6rem"}}),t(x,{justify:"start"},{default:a(()=>[t(i,{round:"",style:{width:"4rem"}}),t(i,{round:"",style:{width:"4rem"}}),t(i,{round:"",style:{width:"4rem"}})]),_:1})])]),_:2},1024)),64))]),_:1})]),_:1},8,["status"])])])],64)}}});const Gt=R(nt,[["__scopeId","data-v-9c85d21a"]]);export{Gt as default};