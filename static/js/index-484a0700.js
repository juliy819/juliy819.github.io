import{_ as W}from"./WebInfo-853f8604.js";import{u as D,f as F,_ as T,a as I,b as k,c as B,d as X,r as Y}from"./index-15414ed8.js";import{c as Z}from"./index-9bfe1da5.js";import{l as tt,s as R,o as N,h as et,n as st}from"./naive-ui-b87942d2.js";import{l as L,r as w,b as j,u as m,R as c,S as d,aa as e,ah as t,j as y,bl as o,F as b,aO as C,b0 as h,a9 as z,H as V,f as ot,aL as nt,aJ as at,a8 as S,e as ct,aP as U,w as it,aQ as _t,D as J}from"./@vue-2d0ddfb4.js";import{_ as lt}from"./Waves-e4859cde.js";import{E as rt}from"./easy-typer-js-e6b30bed.js";import{S as Q,a as q,A as G,P as dt,N as pt,M as ut}from"./swiper-d1934b6f.js";import{t as mt}from"./index-44553baa.js";import{a as O}from"./index-b5bbc619.js";import{M as vt}from"./MyImage-3d8873bc.js";import{_ as gt}from"./Pagination.vue_vue_type_script_setup_true_lang-c22c867b.js";import"./dayjs-aaaa0bae.js";import"./@babel-061b4810.js";import"./pinia-948ba97c.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persist-4bd0ee57.js";import"./nprogress-29a3b628.js";import"./@vueuse-4d6fb19c.js";import"./js-cookie-cf83ad76.js";import"./axios-aba6f0e0.js";import"./vue-router-2a5450bb.js";import"./@kangc-6220f0f5.js";import"./vue-a1bd1397.js";import"./markdown-it-emoji-4f1b57fa.js";import"./prismjs-08ac3f6b.js";import"./v-viewer-8afc779e.js";import"./viewerjs-3fd8af48.js";import"./vueuc-27e3b830.js";import"./evtd-b614532e.js";import"./seemly-76b7b838.js";import"./@css-render-c34b42f4.js";import"./vooks-d838407f.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-0dc9900e.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./ssr-window-c9202916.js";const ft={key:0,class:"side-card"},ht={class:"card-title"},yt={class:"comment-content"},wt={class:"info"},$t={class:"nickname"},bt=["innerHTML"],kt={class:"comment-item"},xt={class:"comment-content"},Ct={class:"info"},St=L({__name:"RecentComment",setup(f){const l=w([]),r=w(0);return j(()=>{Z.getRecentComments().then(({data:i})=>{l.value=i.data,l.value.length>0?r.value=1:r.value=2}).catch(()=>{r.value=-1})}),(i,n)=>{const a=T,s=tt,v=R,_=N,$=I;return m(D)().local?z("",!0):(c(),d("div",ft,[e("div",ht,[t(a,{"icon-class":"comment",size:"1.1875rem"}),y(" 最新评论 ")]),t($,{status:r.value,"no-data-msg":"暂时还没有评论哦~","failed-msg":"评论加载失败"},{data:o(()=>[(c(!0),d(b,null,C(l.value,u=>(c(),d("div",{class:"comment-item",key:u.id},[t(s,{class:"comment-avatar",circle:"",size:55,src:u.avatar,alt:""},null,8,["src"]),e("div",yt,[e("div",wt,[e("div",$t,h(u.nickname),1),e("div",null,h(m(F)(u.createTime)),1)]),t(v,{class:"content","line-clamp":2},{default:o(()=>[e("span",{innerHTML:u.commentContent},null,8,bt)]),_:2},1024)])]))),128))]),loading:o(()=>[(c(),d(b,null,C([1,2,3,4,5],u=>e("div",{key:u},[e("div",kt,[t(_,{circle:"",width:"55px"}),e("div",xt,[e("div",Ct,[t(_,{class:"mb5",text:"",width:"5rem",height:"0.8rem"}),t(_,{class:"mb8",width:"2rem"})]),t(_,{class:"content"})])])])),64))]),_:1},8,["status"])]))}}});const Lt=k(St,[["__scopeId","data-v-32031c54"]]),Tt={class:"side-card"},It={class:"card-title"},Nt=["innerHTML"],jt=L({__name:"Notice",setup(f){const{blogStore:l}=B();return(r,i)=>{const n=T,a=N,s=I;return c(),d("div",Tt,[e("div",It,[t(n,{class:"trumpet","icon-class":"trumpet",size:"1.1875rem",color:"red"}),y(" 公告 ")]),t(s,{status:m(l).status,"failed-msg":"公告加载失败"},{data:o(()=>[e("div",{class:"notice-content",innerHTML:m(l).siteConfig.siteNotice},null,8,Nt)]),loading:o(()=>[t(a,{text:"",round:"",repeat:3})]),_:1},8,["status"])])}}});const Mt=k(jt,[["__scopeId","data-v-01f3374f"]]),At={};function zt(f,l){const r=X,i=Mt,n=Lt,a=W;return c(),d("div",null,[t(r),t(i),t(n),t(a)])}const Bt=k(At,[["render",zt]]),Ht="/static/jpg/bg-1-e4cca6ab.jpg",Dt="/static/jpg/bg-2-962489c2.jpg",Ot="/static/jpg/bg-3-a683f479.jpg",Ft="/static/jpg/bg-4-86a814a7.jpg",Et="/static/jpg/bg-5-d10469d8.jpg",Jt="/static/jpg/bg-6-74dbd32e.jpg",Pt={class:"imgs"},Rt=L({__name:"ImageCarousel",setup(f){const l=[Ht,Dt,Ot,Ft,Et,Jt];return(r,i)=>(c(),d("div",Pt,[e("ul",null,[(c(),d(b,null,C(l,(n,a)=>e("li",{class:"item",key:a,style:V({"background-image":"url("+n+")"})},null,4)),64))])]))}});const Vt=k(Rt,[["__scopeId","data-v-d7cab0ec"]]),P=["未来可期,人生值得。","别否定自己你特别好特别温柔特别值得。","要善良，要勇敢，要像星星一样努力发光。","前路浩浩荡荡,万物皆可期待。","总不能还没努力就向生活妥协吧。","人生路遥,值得爱的东西很多,不要因为一个不满意就灰心。","不管任何时候都希望我可以做到,做任何事情前,都能以「自己开心」为主。","所谓爱好，不光是你「喜欢」做的事，而是你「愿意付代价」去做的事。","往後的日子都是崭新的了,別再回头看了。","我只想做自己喜欢的事，保护自己想要保护的人。","没有什么能感同身受,越处于崩溃越要勇敢。","希望你朝着自己向往的方向走,至少你是快乐的。","喜欢胜过所有道理,原则抵不过我乐意。","生活在阴沟里，依然有仰望星空的权利。","日益努力而后风生水起。","我当然不会试图摘月，我要月亮奔我而来。","要做什么梦是每个人的自由。","如果自己不想积极认真地生活，不管得到什么样的回答都没有用。","人生总有不期而遇的温暖,和生生不息的希望。","我是个正儿八经的女孩子,我会快乐的。","我在追逐的不是别人啊，是我自己满怀期待的心。","睡前原谅一切，醒来便是新生。","不走心的努力都是敷衍自己。","别急，会有始料不及的运气，会有突如其来的惊喜。","不是因为有希望才去努力，而是努力了，才看到希望。","没有谁天生倔强，只是为了梦想寸步不让。","当所有都做到心甘情愿,一切也都将理所当然。","相信自己不要放弃,梦想终归有天会实现。","尽管去努力吧,剩下的就交给时间。","你看我越是穷途末路，就越是势如破竹。","你来人间一趟，你要看看太阳。","如果你有梦想的话，就要去捍卫它。","你生而有翼，为何甘愿匍匐前进，形如蝼蚁。","没关系,天空越黑星星越亮。","要相信,一切你所期盼的,都会如期而至。","不想失去,所以就要懂得往上走。","每个整装待发的重新开始在这年少的岁月里都是为时不晚。","你不扬帆，没人替你起航。","每一个不曾起舞的日子,都是对生命的辜负。","在爱与梦灭的时分，愿你成为一束光，照亮这世界的一角。","每条被堵住的路，都一定会有一个出口。","风平浪静的大海锻造不出一个熟练的水手。","人生本来就是一场即兴演出，没有做不成的梦，只有不早醒的人。","人不断地成长，就是为了超越环境的限制。","明天太阳依旧会升起,不会有事的。","路途很远，脚步更长。","妈妈说,人永远不可能为梦想活着,更多的是现实。","别总是自卑你永远比你自己想象得更好。","如果事与愿违,就相信上帝一定另有安排。","怕有一天,现实太饿,吃了梦想。","成长可能就是无数次直视人性然后坦然接受。","喜欢天黑,喜欢傍晚,喜欢看星星在夜空中闪光。","放轻松点生活,你没那么多观众。","愿所有微风都安定,所有月夜有群星。","你本来就是独一无二,也注定会成为某人的心头好。","愿你我成功的速度超过父母老去的速度。","我想攒一口袋希望,把它寄给身边每一个人。","谁不曾浑身是伤,谁不曾彷徨迷惘。","努力到一定程度幸运自会不期而遇。","你要相信,这世上,没有到不了的明天。","生活原本沉闷但跑起来就会有风。","有人迷途知返,必是苦尽甘来。","没有谁会一直陪着你,就连影子也会在阴天缺席。","今天想告诉你三件事：你已经很棒了,都会过去的,你是被爱的。","别畏畏缩缩不敢往前，不经意间惊喜会来到。","汹涌的海涛中，传来一缕希望。","一个细胞里，却分裂出了两种截然不同的命运。","山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝。","我们所爱之物昭示着我们究竟是谁。","爱情不是一个拼图，是一个圆碰到另一个圆。","野蛮人之间人吃人，文明人之间人骗人。","哪一场仗不难打，越难打，就更要打。","为众人抱薪者，不可使其冻毙于风雪。","爱与友情以及勇气改变不了一个人，只有受伤才能让人成长。","这个世纪疯狂，没人性，腐败；你却一直清醒，温柔，一尘不染。","一点星光，在心上就能反射出太阳。","我的心是生命的禁区，总有人无意闯进来，然后自杀。","如果你执意追逐我的幻影，迟早会被真正的我打败。","我的人生没有彩排，每天都是现场直播。","冬天之所以那么冷是为了告诉大家身边人的温暖有多重要。","未来不是被给予的，而是自己争取的","浅情终似，行云无定，犹到梦魂中。","有三秋桂子，十里荷花。","学而不厌，诲人不倦。","在凄惨的处境中回忆幸福，是世间最大的痛苦","没有一个世界会比活在这个世界痛苦","我们没有相见，却是此刻最好的相聚。","如果必须要失去，那么不如一开始就不曾拥有。","他会找到别的月光，你也会拥有你的月亮。","若是你所期望的，那定会得到强烈的回应。","墙角数枝梅，凌寒独自开。","世间好物不坚牢，彩云易散琉璃脆。","美好的事情，现在才开始呐。","人言落日是天涯，望极天涯不见家。","若要断酒法，醒眼看醉人。","两个人从监狱的窗户往外看，一个看见了土地，一个看见了星星。","路难终乘鹏风起，瑶琴不歇为君啼。","芝兰生于深林，不以无人而不芳；君子修道立德，不为穷困而改节。","明天，不是你想要就能有的。","然而，夜晚将包容一切，月光也将一如往常的挥洒在我们身上。","爱与友情以及勇气改变不了一个人，只有受伤才能让人成长。","我想，左肩有你，右肩微笑。","愿时光能缓，愿故人不散！","跌跌撞撞的成长，又美又疼才是本质。","其实美丽的故事都是没有结局的，只因为它没有结局所以才会美丽。","对友谊来说，笑声确实是个不错的开端，同时也是最好的结局。","虽然人生在世有种种不如意，但你仍可以在幸福与不幸中做选择。","最折磨人的或许不是一场惨烈战争，而是烦琐的日常生活。","宁可枝头抱香死，何曾吹落北风中。","未经审视的人生是不值得过的。","只是，想要做些什么而已。 觉得不做些什么就会死掉而已。","臣心一片磁针石，不指南方不肯休。","声起立华乐独奏，曲末音无心结弦。","正因为生来什么都没有，因此我们能拥有一切。","学而不厌，诲人不倦。","我们登上并非我们所选择的舞台，演出并非我们所选择的剧本。","为什么要担心？如果努力了，担心不会让结果变得更好。","十年磨一剑，霜刃未曾试。","风吹柳叶遮黄雀，薄翅不觉已落蝉。","风乍起。合当奋意向人生。","出入相友，守望相助。","人言落日是天涯，望极天涯不见家。","青青园中葵，朝露待日晞。","理性的人追求的并非快乐，而只是避免痛苦。","看似美好的东西，往往藏着陷阱。","看朱成碧思纷纷，憔悴支离为忆君。","夜来幽梦忽还乡。小轩窗。正梳妆。相顾无言，惟有泪千行。","不愿勾起相思，不敢出门看月；偏偏月进窗来，害我相思一夜。","万事到头都是梦，休休。明日黄花蝶也愁。","越想贴近事实，不明白的事情就越多。"],Ut=f=>(nt("data-v-7972a36f"),f=f(),at(),f),Qt={class:"brand"},qt={class:"site-name"},Gt={class:"typer"},Kt=Ut(()=>e("span",{class:"typer-cursor"},"|",-1)),Wt=L({__name:"Brand",setup(f){const l=ot({output:"",isEnd:!1,speed:120,singleBack:!1,sleep:5e3,type:"rollback",backSpeed:50,sentencePause:!1}),{blogStore:r}=B(),i=s=>{let v=s.length;for(;v>1;){let _=Math.floor(Math.random()*v--);[s[_],s[v]]=[s[v],s[_]]}return s};let n=i(JSON.parse(JSON.stringify(P)));const a=()=>{new rt(l,n,()=>{n=i(JSON.parse(JSON.stringify(P))),a()},()=>{})};return j(()=>{a()}),(s,v)=>(c(),d("div",Qt,[e("p",qt,h(m(r).siteConfig.siteName),1),e("div",Gt,[y(h(m(l).output)+" ",1),Kt])]))}});const Xt=k(Wt,[["__scopeId","data-v-7972a36f"]]),Yt={class:"talk-swiper flex-space-between"},Zt=["innerHTML"],te={class:"talk-swiper flex-space-between"},ee=L({__name:"TalkSwipper",setup(f){const l=[G],r=w(0),i=w([]),n=a=>{let s="/talk";typeof a=="number"&&(s+=`/${a}`),Y.push({path:s})};return j(()=>{mt.getTalkHomeList().then(({data:a})=>{i.value=a.data,i.value.length>0?r.value=1:r.value=2}).catch(()=>{r.value=-1})}),(a,s)=>{const v=T,_=et,$=st,u=N,g=I;return c(),S(g,{status:r.value,"display-when-failed":!1,"display-when-empty":!1},{data:o(()=>[e("div",Yt,[t(v,{"icon-class":"horn",size:"1.25rem"}),t(m(Q),{class:"swiper-container",direction:"vertical",modules:l,speed:2e3,loop:!0,"slides-per-view":1,autoplay:{delay:3e3,disableOnInteraction:!1}},{default:o(()=>[(c(!0),d(b,null,C(i.value,(x,M)=>(c(),S(m(q),{key:M},{default:o(()=>[t(_,{text:"",onClick:A=>n(x.id)},{default:o(()=>[e("div",{class:"slide-content",innerHTML:x.talkContent},null,8,Zt)]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}),t($,{trigger:"hover"},{trigger:o(()=>[t(_,{text:"",onClick:s[0]||(s[0]=x=>n(void 0))},{default:o(()=>[t(v,{"icon-class":"right-arrow",class:"arrow"})]),_:1})]),default:o(()=>[y(" 前往说说页面 ")]),_:1})])]),loading:o(()=>[e("div",te,[t(u,{circle:"",width:"20px"}),t(u,{round:"",width:"90%"}),t(u,{circle:"",width:"20px"})])]),_:1},8,["status"])}}});const se=k(ee,[["__scopeId","data-v-5eacdfa0"]]),oe={class:"slide-time"},ne={class:"swiper-container bg-gray"},ae={class:"slide-content"},ce=L({__name:"FeaturedSwiper",setup(f){const{blogStore:l}=B(),r=[dt,pt,ut,G],i=w([]),n=w(0),a=ct(()=>s=>(s===""&&(s=l.siteConfig.articleCover),"background:url("+s+")"));return j(()=>{O.getArticleFeatured().then(({data:s})=>{i.value=s.data,i.value.length>0?n.value=1:n.value=2}).catch(()=>{n.value=-1})}),(s,v)=>{const _=U("router-link"),$=N,u=I;return c(),S(u,{status:n.value,"display-when-empty":!1,"display-when-failed":!1},{data:o(()=>[t(m(Q),{autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,modules:r,pagination:{clickable:!0},"slides-per-view":1,class:"swiper-container",mousewheel:"",navigation:""},{default:o(()=>[(c(!0),d(b,null,C(i.value,g=>(c(),S(m(q),{key:g.id},{default:o(()=>[e("div",{style:V(m(a)(g.articleCover)),class:"slide-content"},[t(_,{to:`/article/${g.id}`,class:"slide-title"},{default:o(()=>[y(h(g.articleTitle),1)]),_:2},1032,["to"]),e("span",oe,"发布时间:"+h(m(F)(g.createTime)),1)],4)]),_:2},1024))),128))]),_:1})]),loading:o(()=>[e("div",ne,[e("div",ae,[t($,{round:"",class:"slide-title",width:"200px"}),t($,{round:"",class:"slide-time",width:"200px"})])])]),_:1},8,["status"])}}});const ie=k(ce,[["__scopeId","data-v-8e745441"]]),_e={class:"article-info"},le={class:"article-time"},re={key:0,class:"top"},de={class:"article-title"},pe={class:"article-content"},ue={class:"article-footer"},me={class:"create-time"},ve={class:"article-info"},ge=L({__name:"ArticleList",setup(f){const{blogStore:l,appStore:r}=B(),i=w([]),n=w({current:1,size:5}),a=w(0),s=w(0),v=_=>_===""?l.siteConfig.articleCover:_;return it(()=>n.value.current,()=>{O.getArticleList(n.value).then(({data:_})=>{i.value=_.data.recordList,a.value=_.data.count}).catch(()=>{i.value=[]})}),j(async()=>{await O.getArticleList(n.value).then(({data:_})=>{i.value=_.data.recordList,a.value=_.data.count,a.value>0?s.value=1:s.value=2}).catch(()=>{s.value=-1})}),(_,$)=>{const u=vt,g=U("router-link"),x=T,M=R,A=N,K=I,E=_t("animate");return c(),S(K,{status:s.value,"no-data-msg":"暂时还没有发布过文章哦~","failed-msg":"文章加载失败"},{data:o(()=>[(c(!0),d(b,null,C(i.value,p=>J((c(),d("div",{class:"article-item",key:p.id},[t(g,{to:`/article/${p.id}`,class:"article-cover"},{default:o(()=>[t(u,{src:v(p.articleCover)},null,8,["src"])]),_:2},1032,["to"]),e("div",_e,[e("div",le,[p.isTop===1?(c(),d("span",re,[t(x,{"icon-class":"top",size:"0.85rem",style:{"margin-right":"0.15rem"}}),y(" 置顶 ")])):z("",!0),(c(!0),d(b,null,C(p.tagList,H=>(c(),S(g,{class:"article-tag-category",key:H.id,to:`/tag/${H.id}`},{default:o(()=>[t(x,{"icon-class":"tag",size:"0.9rem",style:{"margin-right":"0.15rem"}}),t(M,{style:{"max-width":"4rem"}},{default:o(()=>[y(h(H.tagName),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),e("h3",de,[t(g,{to:`/article/${p.id}`},{default:o(()=>[y(h(p.articleTitle),1)]),_:2},1032,["to"])]),e("div",pe,h(p.articleContent),1),e("div",ue,[e("div",me,[t(x,{"icon-class":"calendar",size:"0.9rem"}),e("span",null,h(m(F)(p.createTime)),1)]),t(g,{class:"article-category",to:`/category/${p.category.id}`},{default:o(()=>[t(x,{"icon-class":"flag",size:"0.85rem"}),t(M,{style:{"max-width":"6rem"}},{default:o(()=>[y(h(p.category.categoryName),1)]),_:2},1024)]),_:2},1032,["to"])]),t(g,{class:"article-btn",to:`/article/${p.id}`},{default:o(()=>[y("more...")]),_:2},1032,["to"])])])),[[E,["fadeInUpBig"]]])),128)),t(gt,{current:n.value.current,"onUpdate:current":$[0]||($[0]=p=>n.value.current=p),total:Math.ceil(a.value/5)},null,8,["current","total"])]),loading:o(()=>[(c(),d(b,null,C([1,2,3,4,5],p=>J(e("div",{class:"article-item",key:p},[t(A,{class:"article-cover"}),e("div",ve,[t(A,{class:"article-title",width:"12rem",height:"2rem",round:""}),t(A,{class:"article-content",width:"100%",round:"",text:"",repeat:4})])]),[[E,["fadeInUpBig"]]])),64))]),_:1},8,["status"])}}});const fe=k(ge,[["__scopeId","data-v-9abd6fb3"]]),he={class:"home-header"},ye={class:"bg"},we={class:"main-container"},$e={class:"left-container"},be=L({__name:"index",setup(f){const l=()=>{window.scrollTo({behavior:"smooth",top:document.documentElement.clientHeight})};return(r,i)=>{const n=lt,a=T,s=Bt;return c(),d(b,null,[t(Vt),e("div",he,[t(Xt),t(n),t(a,{class:"arrow-down","icon-class":"down",size:"32px",onClick:l})]),e("div",ye,[e("div",we,[e("div",$e,[m(D)().local?z("",!0):(c(),S(se,{key:0})),m(D)().local?z("",!0):(c(),S(ie,{key:1})),t(fe)]),t(s,{class:"right-container"})])])],64)}}});const ds=k(be,[["__scopeId","data-v-19d021fe"]]);export{ds as default};