import{_ as q,b as E,c as ae,h as O,r as oe,a as ie,f as F,m as ne}from"./index-46ecffbd.js";import{a as le,w as ce}from"./@vueuse-4d6fb19c.js";import{l as H,r as k,b as W,n as re,R as n,S as r,aa as e,ah as s,j as f,F as S,aO as J,aD as A,u as l,H as I,b0 as i,e as _e,a9 as T,bl as d,aP as M,aQ as de,D as me,a8 as L,aL as ue,aJ as pe}from"./@vue-2d0ddfb4.js";import{_ as ve}from"./index-84ce85d4.js";import{_ as he}from"./Waves-1fa3c9bf.js";import{a as V}from"./index-50d10994.js";import{u as ge}from"./vue-router-2a5450bb.js";import{s as fe,h as ye,o as ke,j as xe,m as Ce}from"./naive-ui-b87942d2.js";import"./pinia-948ba97c.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./nprogress-29a3b628.js";import"./@babel-061b4810.js";import"./axios-aba6f0e0.js";import"./js-cookie-cf83ad76.js";import"./dayjs-aaaa0bae.js";import"./swiper-d1934b6f.js";import"./ssr-window-c9202916.js";import"./@kangc-6220f0f5.js";import"./vue-a1bd1397.js";import"./markdown-it-emoji-4f1b57fa.js";import"./prismjs-08ac3f6b.js";import"./v-viewer-8afc779e.js";import"./viewerjs-3fd8af48.js";import"./vueuc-27e3b830.js";import"./evtd-b614532e.js";import"./seemly-76b7b838.js";import"./@css-render-c34b42f4.js";import"./vooks-d838407f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-0dc9900e.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./index-d0648fd6.js";const Te={class:"catalog-header"},we={class:"catalog-content"},be=["onClick"],Ae=H({__name:"Catalog",props:{domRef:{type:Object,default:null}},setup(x){const p=x,{y:C}=le(window),g=k([]),y=k(0),w=()=>{const h=p.domRef.$el.querySelectorAll("h1,h2,h3"),o=Array.from(h).filter(c=>!!c.innerText.trim());o.length||(g.value=[]);const u=Array.from(new Set(o.map(c=>c.tagName))).sort();g.value=o.map(c=>({title:c.innerText,lineIndex:c.getAttribute("data-v-md-line"),indent:u.indexOf(c.tagName)}))},v=h=>{const o=p.domRef.$el.querySelector(`[data-v-md-line="${h.lineIndex}"]`);o&&window.scrollTo({behavior:"smooth",top:o.offsetTop-20})};return W(()=>{re(()=>{setTimeout(w,500)})}),ce(C,()=>{g.value.forEach((h,o)=>{const u=p.domRef.$el.querySelector(`[data-v-md-line="${h.lineIndex}"]`);C.value>=u.offsetTop-30&&(y.value=o)})},{throttle:100}),(h,o)=>{const u=q;return n(),r(S,null,[e("div",Te,[s(u,{"icon-class":"category"}),f(" 目录 ")]),e("div",we,[(n(!0),r(S,null,J(l(g),(c,t)=>(n(),r("div",{class:A(["catalog-item",l(y)===t?"active":""]),key:t,style:I({paddingLeft:`${5+c.indent*15}px`}),onClick:z=>v(c)},[e("a",null,i(c.title),1)],14,be))),128))])],64)}}});const Se=E(Ae,[["__scopeId","data-v-8de4d6b7"]]),m=x=>(ue("data-v-371b756f"),x=x(),pe(),x),$e={class:"page-header"},Ne={class:"page-title"},Le={class:"article-title"},Ie={key:0,class:"article-time"},ze={class:"first-meta"},Re={class:"meta-item"},De={class:"text"},je={key:0,class:"meta-item"},Be={class:"text"},Oe={key:1,class:"meta-item"},Fe={class:"text"},Me={class:"second-meta"},Ve={class:"meta-item"},qe={class:"text"},Ee={class:"meta-item"},He={class:"text"},We={class:"meta-item"},Je=["src"],Pe={class:"bg"},Qe={class:"main-container"},Ye={class:"article-container"},Ge={class:"tag-container"},Ke={key:0,class:"article-footer"},Ue={class:"meta"},Xe={key:0,class:"like"},Ze=m(()=>e("p",null,"觉得本篇文章还不错的话，就点个赞叭(●'◡'●)",-1)),et={class:"copyright"},tt={class:"author"},st=m(()=>e("strong",null,"本文作者： ",-1)),at={class:"link"},ot=m(()=>e("strong",null,"本文链接：",-1)),it=["href"],nt={class:"license"},lt=m(()=>e("strong",null,"版权声明： ",-1)),ct=m(()=>e("a",{class:"underline-a",href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",target:"_blank"}," BY-NC-SA ",-1)),rt={class:"article-nav"},_t={class:"nav-item"},dt=m(()=>e("span",{class:"nav-action"},"上一篇",-1)),mt={class:"nav-title"},ut={key:1,class:"nav-cover"},pt=m(()=>e("span",{class:"nav-action"},"上一篇",-1)),vt=m(()=>e("h3",{class:"nav-title"},"没有了",-1)),ht=[pt,vt],gt={class:"nav-item"},ft=m(()=>e("span",{class:"nav-action"},"下一篇",-1)),yt={class:"nav-title"},kt={key:1,class:"nav-cover"},xt=m(()=>e("span",{class:"nav-action"},"下一篇",-1)),Ct=m(()=>e("h3",{class:"nav-title"},"没有了",-1)),Tt=[xt,Ct],wt={class:"side-card"},bt=H({__name:"index",setup(x){const p=k(0),C=window.location.href,g=ge(),{userStore:y,blogStore:w,appStore:v}=ae(),h=k(),o=k(0),u=k(0),c=1,t=k({id:0,articleCover:"",articleTitle:"",articleContent:"",articleType:0,viewCount:0,likeCount:0,category:{},tagList:[],createTime:"",lastArticle:{},nextArticle:{},updateTime:""}),z=_e(()=>a=>y.articleLikeSet.indexOf(a)===-1?"":"active"),$=a=>a===""?w.siteConfig.articleCover:a,P=a=>a>=1e3?(a/1e3).toFixed(1)+"k":a,R=a=>a.replace(/<\/?[^>]*>/g,"").replace(/[|]*\n/,"").replace(/&npsp;/gi,""),Q=()=>{if(!y.id){ne.msgError("请先登录！");return}let a=t.value.id;V.likeArticle(a).then(()=>{y.articleLikeSet.indexOf(a)!==-1?t.value.likeCount-=1:t.value.likeCount+=1,y.articleLike(a)}).catch(()=>{})};return W(()=>{if(v.local){if(Number(g.params.id)>O.value.length-1){oe.push("/404");return}t.value=O.value.at(Number(g.params.id)),document.title=t.value.articleTitle,o.value=R(t.value.articleContent).length,u.value=Math.round(o.value/400),p.value=1;return}V.getArticle(Number(g.params.id)).then(({data:a})=>{t.value=a.data,document.title=t.value.articleTitle,o.value=R(t.value.articleContent).length,u.value=Math.round(o.value/400),p.value=1}).catch(()=>{p.value=-1,t.value.createTime="2023-1-1",t.value.articleTitle="文章",t.value.category={id:0,categoryName:"分类"},o.value=0,u.value=0})}),(a,D)=>{const _=q,Y=he,G=M("v-md-preview"),K=fe,N=M("router-link"),U=ye,X=ve,Z=Se,j=ke,B=xe,ee=Ce,te=ie,se=de("viewer");return n(),r(S,null,[e("div",$e,[e("div",Ne,[e("h1",Le,i(t.value.articleTitle),1),p.value===1?(n(),r("div",Ie,[e("div",ze,[e("span",Re,[s(_,{"icon-class":"calendar",style:{"margin-right":"0.15rem"}}),e("span",De,"发表于 "+i(l(F)(t.value.createTime)),1)]),t.value.updateTime&&!l(v).local?(n(),r("span",je,[s(_,{"icon-class":"update",style:{"margin-right":"0.15rem"}}),e("span",Be,"更新于 "+i(l(F)(t.value.updateTime)),1)])):T("",!0),l(v).local?T("",!0):(n(),r("span",Oe,[s(_,{"icon-class":"eye",style:{"margin-right":"0.15rem"}}),e("span",Fe,"阅读量 "+i(t.value.viewCount),1)]))]),e("div",Me,[e("span",Ve,[s(_,{"icon-class":"edit",style:{"margin-right":"0.15rem"}}),e("span",qe,"字数统计： "+i(P(o.value))+"字",1)]),e("span",Ee,[s(_,{"icon-class":"clock",style:{"margin-right":"0.15rem"}}),e("span",He,"预计阅读时长： "+i(u.value)+" 分钟",1)]),e("span",We,[s(_,{"icon-class":"category",style:{"margin-right":"0.15rem"}}),f(" "+i(t.value.category.categoryName),1)])])])):T("",!0)]),e("img",{class:"page-cover",src:$(t.value.articleCover),alt:""},null,8,Je),s(Y)]),e("div",Pe,[s(te,{status:p.value},{data:d(()=>[e("div",Qe,[e("div",{class:A(["left-container",l(v).rightContainer?"":"width-100"])},[e("div",Ye,[me(s(G,{ref_key:"articleRef",ref:h,class:"md",text:t.value.articleContent},null,8,["text"]),[[se]]),e("div",Ge,[(n(!0),r(S,null,J(t.value.tagList,b=>(n(),L(N,{to:`/tag/${b.id}`,class:"article-tag-category",key:b.id},{default:d(()=>[s(K,{style:{"max-width":"8rem"}},{default:d(()=>[s(_,{"icon-class":"tag",size:"0.8rem"}),f(" "+i(b.tagName),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),l(v).local?T("",!0):(n(),r("footer",Ke,[e("div",Ue," 阅读次数 "+i(t.value.viewCount)+" 次 ",1),l(v).local?T("",!0):(n(),r("div",Xe,[s(U,{class:A(["like-btn",l(z)(t.value.id)]),onClick:D[0]||(D[0]=b=>Q())},{default:d(()=>[s(_,{"icon-class":"like",size:"0.9rem",style:{"margin-right":"0.5rem"}}),f(" 点赞 "+i(t.value.likeCount),1)]),_:1},8,["class"]),Ze])),e("div",et,[e("ul",null,[e("li",tt,[s(_,{"icon-class":"author",size:"0.9rem",style:{"margin-right":"0.3rem"}}),st,f(i(l(w).siteConfig.siteAuthor),1)]),e("li",at,[s(_,{"icon-class":"article_link",size:"0.9rem",style:{"margin-right":"0.3rem"}}),ot,e("a",{class:"underline-a",href:l(C)},i(l(C)),9,it)]),e("li",nt,[s(_,{"icon-class":"article_share",size:"0.8rem",style:{"margin-right":"0.3rem"}}),lt,f(" 本站所有文章除特别声明外，均采用 "),ct,f(" 许可协议。转载请注明文章出处！ ")])])])])),e("div",rt,[e("div",_t,[t.value.lastArticle?(n(),L(N,{key:0,to:`/article/${t.value.lastArticle.id}`,class:"nav-cover",style:I({"background-image":"url("+$(t.value.lastArticle.articleCover)+")"})},{default:d(()=>[dt,e("h3",mt,i(t.value.lastArticle.articleTitle),1)]),_:1},8,["to","style"])):(n(),r("div",ut,ht))]),e("div",gt,[t.value.nextArticle?(n(),L(N,{key:0,to:`/article/${t.value.nextArticle.id}`,class:"nav-cover",style:I({"background-image":"url("+$(t.value.nextArticle.articleCover)+")"})},{default:d(()=>[ft,e("h3",yt,i(t.value.nextArticle.articleTitle),1)]),_:1},8,["to","style"])):(n(),r("div",kt,Tt))])]),s(X,{"comment-type":c})])],2),e("div",{class:A(["right-container",l(v).rightContainer?"":"display-none"])},[e("div",wt,[s(Z,{"dom-ref":h.value},null,8,["dom-ref"])])],2)])]),loading:d(()=>[s(B,{justify:"start",vertical:"",style:{margin:"1rem"}},{default:d(()=>[s(j,{round:"",size:"large",width:"40%"}),s(j,{text:"",round:"",width:"100%",repeat:10})]),_:1})]),fail:d(()=>[s(B,{justify:"center",align:"center",style:{height:"30vh"}},{default:d(()=>[s(ee,{type:"error",size:"30",style:{"font-weight":"bold"}},{default:d(()=>[f(" 文章加载失败 ")]),_:1})]),_:1})]),_:1},8,["status"])])],64)}}});const _s=E(bt,[["__scopeId","data-v-371b756f"]]);export{_s as default};