import{l as V,r,e as P,D as B,v as U,u as a,R as n,S as p,aa as t,b0 as j,a9 as T,F as A,aO as D,aD as O,a8 as Q,bl as z,ah as l,bf as dt,H as X,j as $,w as tt,n as rt,b as mt,aL as ut,aJ as _t}from"./@vue-2d0ddfb4.js";import{b as G,_ as ot,c as nt,m as W,u as gt,o as et}from"./index-46ecffbd.js";import{n as ht,l as at,h as it,s as vt}from"./naive-ui-b87942d2.js";import{c as E}from"./index-d0648fd6.js";import{u as st}from"./vue-router-2a5450bb.js";const kt={class:"view-more-pagination"},yt={class:"pagination-page-count"},wt=["onClick"],jt=V({__name:"Paging",props:{total:{type:Number,default:0},index:{type:Number},commentId:{type:Number}},emits:["getCurrentPage"],setup(h,{expose:R,emit:C}){const c=h,s=r(1),w=r(5),f=r(!1),o=P(()=>Math.ceil(c.total/w.value)),v=P(()=>o.value<=5?o.value:s.value<=4?[1,2,3,4,5,"...",o.value]:s.value>=o.value-4?[1,"...",o.value-5,o.value-4,o.value-3,o.value-2,o.value-1,o.value]:[1,"...",s.value-2,s.value-1,s.value,s.value+1,s.value+2,"...",o.value]),m=()=>{s.value-=1,C("getCurrentPage",s.value,c.index,c.commentId)},b=k=>{s.value=k,C("getCurrentPage",k,c.index,c.commentId)},u=()=>{s.value+=1,C("getCurrentPage",s.value,c.index,c.commentId)};return R({current:s,setPaging:k=>{f.value=k}}),(k,I)=>B((n(),p("div",kt,[t("span",yt,"共"+j(a(o))+"页",1),a(s)!==1?(n(),p("span",{key:0,class:"pagination-btn",onClick:m},"上一页")):T("",!0),(n(!0),p(A,null,D(a(v),(x,y)=>(n(),p(A,null,[typeof x=="number"?(n(),p("span",{key:y,onClick:S=>b(x),class:O(["pagination-page-number",a(s)==x?"current-page":""])},j(x),11,wt)):(n(),p("span",{class:"pagination-page-do",key:x},"..."))],64))),256)),a(s)!==a(o)?(n(),p("span",{key:1,class:"pagination-btn",onClick:u},"下一页")):T("",!0)],512)),[[U,a(f)]])}});const ft=G(jt,[["__scopeId","data-v-51dda978"]]),Y={"[热]":"https://static.ttkwsd.top/emoji/re.png","[冷]":"https://static.ttkwsd.top/emoji/leng.png","[脱单doge]":"https://static.ttkwsd.top/emoji/doge.png","[微笑]":"https://static.ttkwsd.top/emoji/simle.png","[笑]":"https://static.ttkwsd.top/emoji/xiao.png","[呆]":"https://static.ttkwsd.top/emoji/dai.png","[灵魂出窍]":"https://static.ttkwsd.top/emoji/lhcq.png","[星星眼]":"https://static.ttkwsd.top/emoji/xxy.png","[脸红]":"https://static.ttkwsd.top/emoji/lianhong.png","[偷笑]":"https://static.ttkwsd.top/emoji/touxiao.png","[吐]":"https://static.ttkwsd.top/emoji/tu.png","[惊喜]":"https://static.ttkwsd.top/emoji/jingxi.png","[囧]":"https://static.ttkwsd.top/emoji/jiong.png","[抠鼻]":"https://static.ttkwsd.top/emoji/koubi.png","[哈欠]":"https://static.ttkwsd.top/emoji/hqian.png","[大哭]":"https://static.ttkwsd.top/emoji/daku.png","[辣眼睛]":"https://static.ttkwsd.top/emoji/lyj.png","[吃瓜]":"https://static.ttkwsd.top/emoji/chigua.png","[滑稽]":"https://static.ttkwsd.top/emoji/guaji.png","[呲牙]":"https://static.ttkwsd.top/emoji/ciya.png","[打call]":"https://static.ttkwsd.top/emoji/dacall.png","[傲娇]":"https://static.ttkwsd.top/emoji/aojiao.png","[嘟嘟]":"https://static.ttkwsd.top/emoji/dudu.png","[翻白眼]":"https://static.ttkwsd.top/emoji/fanby.png","[尴尬]":"https://static.ttkwsd.top/emoji/ganga.png","[给心心]":"https://static.ttkwsd.top/emoji/geixx.png","[嗑瓜子]":"https://static.ttkwsd.top/emoji/kgz.png","[笑哭]":"https://static.ttkwsd.top/emoji/xiaoku.png","[大笑]":"https://static.ttkwsd.top/emoji/daxiao.png","[喜欢]":"https://static.ttkwsd.top/emoji/xihuan.png","[疑惑]":"https://static.ttkwsd.top/emoji/yihuo.png","[生气]":"https://static.ttkwsd.top/emoji/shengqi.png","[阴险]":"https://static.ttkwsd.top/emoji/yinxian.png","[doge]":"https://static.ttkwsd.top/emoji/doge.png","[点赞]":"https://static.ttkwsd.top/emoji/dianzan.png","[难过]":"https://static.ttkwsd.top/emoji/nanguo.png","[嘘声]":"https://static.ttkwsd.top/emoji/xusheng.png","[惊讶]":"https://static.ttkwsd.top/emoji/jingya.png","[喜极而泣]":"https://static.ttkwsd.top/emoji/xjeq.png","[思考]":"https://static.ttkwsd.top/emoji/sikao.png","[鼓掌]":"https://static.ttkwsd.top/emoji/guzhang.png","[酸了]":"https://static.ttkwsd.top/emoji/suanle.png","[委屈]":"https://static.ttkwsd.top/emoji/weiqu.png","[捂脸]":"https://static.ttkwsd.top/emoji/wulian.png","[捂眼]":"https://static.ttkwsd.top/emoji/wuyan.png","[哦呼]":"https://static.ttkwsd.top/emoji/ohu.png","[无语]":"https://static.ttkwsd.top/emoji/wuyu.png","[吓]":"https://static.ttkwsd.top/emoji/xia.png","[疼]":"https://static.ttkwsd.top/emoji/teng.png","[歪嘴]":"https://static.ttkwsd.top/emoji/waizui.png","[抓狂]":"https://static.ttkwsd.top/emoji/zhuakuang.png","[生病]":"https://static.ttkwsd.top/emoji/shengbing.png","[调皮]":"https://static.ttkwsd.top/emoji/tiaopi.png","[妙啊]":"https://static.ttkwsd.top/emoji/miaoa.png","[撇嘴]":"https://static.ttkwsd.top/emoji/piezui.png","[再见]":"https://static.ttkwsd.top/emoji/zaijian.png","[嫌弃]":"https://static.ttkwsd.top/emoji/xianqi.png","[奋斗]":"https://static.ttkwsd.top/emoji/fendou.png","[墨镜]":"https://static.ttkwsd.top/emoji/mojing.png","[OK]":"https://static.ttkwsd.top/emoji/ok.png","[干杯]":"https://static.ttkwsd.top/emoji/ganbei.png","[爱心]":"https://static.ttkwsd.top/emoji/aixin.png","[支持]":"https://static.ttkwsd.top/emoji/zhichi.png","[抱拳]":"https://static.ttkwsd.top/emoji/baoquan.png","[保佑]":"https://static.ttkwsd.top/emoji/baoyou.png","[胜利]":"https://static.ttkwsd.top/emoji/shengli.png","[加油]":"https://static.ttkwsd.top/emoji/jiayou.png","[拥抱]":"https://static.ttkwsd.top/emoji/yongbao.png","[原神_欸嘿]":"https://static.ttkwsd.top/emoji/aihei.png","[原神_哇]":"https://static.ttkwsd.top/emoji/wa.png","[原神_嗯]":"https://static.ttkwsd.top/emoji/en.png","[原神_哼]":"https://static.ttkwsd.top/emoji/heng.png","[原神_喝茶]":"https://static.ttkwsd.top/emoji/hecha.png","[原神_生气]":"https://static.ttkwsd.top/emoji/kqsq.png","[电视_微笑]":"https://static.ttkwsd.top/emoji/tvwx.png","[电视_斜眼笑]":"https://static.ttkwsd.top/emoji/tvxyx.png"},Ct={class:"emoji-content"},bt=["onClick"],xt=["src","title"],$t=V({__name:"Emoji",emits:["addEmoji"],setup(h,{emit:R}){const C=c=>{R("addEmoji",c)};return(c,s)=>{const w=ot,f=ht;return n(),Q(f,{trigger:"click",placement:"bottom-start",style:{"max-height":"200px"},"content-style":"padding: 0.5rem;",width:250,scrollable:""},{trigger:z(()=>[t("span",null,[l(w,{"icon-class":"emoji",size:"1.2rem"})])]),default:z(()=>[t("div",Ct,[(n(!0),p(A,null,D(a(Y),(o,v,m)=>(n(),p("span",{class:"emoji-item",key:m,onClick:b=>C(v)},[t("img",{src:o,title:v,class:"emoji",width:"24",height:"24",alt:""},null,8,xt)],8,bt))),128))])]),_:1})}}});const zt=G($t,[["__scopeId","data-v-0a470925"]]),Rt={key:0,class:"reply-box"},Lt={class:"box-normal"},It={class:"reply-avatar"},Tt={class:"reply-box-wrap"},Nt=["placeholder"],Et={class:"box-extend"},Pt=V({__name:"ReplyBox",props:{commentType:{type:Number},show:{type:Boolean,default:!0},typeId:{type:Number}},emits:["reload"],setup(h,{expose:R,emit:C}){const c=h,{userStore:s,blogStore:w}=nt(),f={lineHeight:"normal",borderColor:"#ed6ea0",backgroundColor:"var(--grey-0)"},o=r(""),v=r(c.show),m=r(""),b=r({typeId:c.typeId,commentType:c.commentType,parentId:void 0,replyId:void 0,toUid:void 0,commentContent:""}),u=P(()=>o.value?`回复 @${o.value}：`:"发一条友善的评论"),L=P(()=>m.value.length===0),k=y=>{m.value+=y},I=()=>{if(!s.id){W.msgError("请先登录！");return}if(m.value.trim()==""){W.msgError("评论不能为空");return}b.value.commentContent=m.value.replace(/\[.+?]/g,y=>y in Y?"<img src= '"+Y[y]+`' width='21' height='21' style='margin: 0 1px;vertical-align: text-bottom' alt=""/>`:y),E.addComment(b.value).then(()=>{m.value="",w.siteConfig.commentCheck?W.msgWarning("评论成功，正在审核中"):W.msgSuccess("评论成功"),C("reload")}).catch(()=>{})};return R({commentForm:b,nickname:o,setReply:y=>{v.value=y}}),(y,S)=>{const F=at,M=it,J=zt;return v.value?(n(),p("div",Rt,[t("div",Lt,[t("div",It,[l(F,{size:"large",round:"",src:a(s).avatar?a(s).avatar:a(w).siteConfig.touristAvatar},null,8,["src"])]),t("div",Tt,[B(t("textarea",{class:"reply-box-textarea","onUpdate:modelValue":S[0]||(S[0]=K=>m.value=K),style:X(a(L)?"":f),placeholder:a(u)},null,12,Nt),[[dt,m.value]])]),l(M,{size:"large",class:O(["reply-box-send",a(L)?"":"send-active"]),onClick:I},{default:z(()=>[$(" 评论 ")]),_:1},8,["class"])]),t("div",Et,[l(J,{onAddEmoji:k})])])):T("",!0)}}});const St=G(Pt,[["__scopeId","data-v-1bbb27bb"]]),Mt=h=>(ut("data-v-0fceaa47"),h=h(),_t(),h),qt={key:0,id:"comment-container"},Wt={class:"comment-title"},Bt={key:0},At={class:"comment-avatar"},Ft={class:"comment-main"},Ht={class:"user-info"},Ut={class:"nickname"},Dt=["innerHTML"],Ot={class:"comment-info"},Vt={class:"comment-time"},Gt=["onClick"],Jt={class:"reply-user-info"},Kt={class:"reply-nickname"},Qt={class:"comment-content"},Xt={style:{color:"#008ac5"}},Yt=["innerHTML"],Zt={class:"comment-info"},te={class:"comment-time"},ee=["onClick"],se=Mt(()=>t("div",{class:"bottom-line"},null,-1)),oe={key:0,class:"loading-wrap"},ne={key:1,style:{padding:"1.25rem","text-align":"center",color:"var(--grey-5)"}},ae=V({__name:"index",props:{commentType:{type:Number}},emits:["getCommentCount"],setup(h,{emit:R}){const C=h,{userStore:c}=nt(),s=r([]),w=r([]),f=r([]),o=r(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),v=r("30rem"),m=P(()=>Number(st().params.id)?Number(st().params.id):void 0),b=P(()=>e=>c.commentLikeSet.indexOf(e)!==-1?"active":""),u=r([]),L=r(!0),k=r(0),I=r({current:1,size:5,commentType:C.commentType,typeId:m.value}),x=e=>{if(!c.id){W.msgError("请先登录！");return}let d=e.id;E.likeComment(d).then(()=>{c.commentLikeSet.indexOf(d)!==-1?e.likeCount-=1:e.likeCount+=1,c.commentLike(d)}).catch(()=>{})},y=(e,d)=>{E.getReplyList(d.id,{current:1,size:5}).then(({data:_})=>{d.replyList=_.data,d.replyCount>5&&w.value[e].setPaging(!0),f.value[e].style.display="none"}).catch(()=>{})},S=(e,d,_)=>{E.getReplyList(_,{current:e,size:5}).then(({data:N})=>{u.value[d].replyList=N.data}).catch(()=>{})},F=(e,d)=>{s.value.forEach(N=>{N.setReply(!1)});const _=s.value[e];_.nickname=d.fromNickname,_.commentForm.replyId=d.id,_.commentForm.toUid=d.fromUid,_.commentForm.parentId=u.value[e].id,_.setReply(!0)},M=()=>{E.getCommentList(I.value).then(({data:e})=>{I.value.current==1?u.value=e.data.recordList:u.value.push(...e.data.recordList),I.value.current++,k.value=e.data.count,R("getCommentCount",k.value)}).catch(()=>{})},J=()=>{I.value.current=1,M()},K=e=>{E.getReplyList(u.value[e].id,{current:w.value[e].current,size:5}).then(({data:d})=>{u.value[e].replyList=d.data,u.value[e].replyCount++,s.value[e].setReply(!1),u.value[e].replyCount>5&&w.value[e].setPaging(!0),f.value[e].style.display="none"}).catch(()=>{})};return tt(u,()=>{L.value=!1,rt(()=>{L.value=!0})},{deep:!1}),tt(o,()=>{o.value<768?v.value="15rem":v.value="30rem"}),mt(()=>{M(),window.onresize=()=>(()=>{o.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()}),(e,d)=>{const _=ot,N=St,Z=at,ct=vt,H=it,pt=ft;return a(gt)().local?T("",!0):(n(),p("div",qt,[t("div",Wt,[l(_,{"icon-class":"comment",size:"1.4rem",class:"mr5"}),$(" 评论 ")]),l(N,{onReload:J,"comment-type":h.commentType,"type-id":a(m)},null,8,["comment-type","type-id"]),k.value>0&&L.value?(n(),p("div",Bt,[(n(!0),p(A,null,D(u.value,(i,q)=>(n(),p("div",{class:"comment-item",key:i.id},[t("div",At,[l(Z,{lazy:"","intersection-observer-options":{root:"#comment-container"},size:"large",round:"",src:i.avatar},null,8,["src"])]),t("div",Ft,[t("div",Ht,[t("div",Ut,[l(ct,{style:X({"max-width":v.value})},{tooltip:z(()=>[t("div",{style:X({"max-width":v.value})},j(i.fromNickname),5)]),default:z(()=>[$(j(i.fromNickname)+" ",1)]),_:2},1032,["style"])]),i.fromUid===1?(n(),Q(_,{key:0,"icon-class":"badge"})):T("",!0)]),t("div",{class:"comment-content",innerHTML:i.commentContent},null,8,Dt),t("div",Ot,[t("span",Vt,j(a(et)(i.createTime)),1),t("span",{class:"comment-like",onClick:g=>x(i)},[l(_,{class:O(["like mr5",a(b)(i.id)]),"icon-class":"like",size:"0.8rem"},null,8,["class"]),B(t("span",null,j(i.likeCount),513),[[U,i.likeCount]])],8,Gt),l(H,{class:"reply-btn",onClick:g=>F(q,i),text:""},{default:z(()=>[$("回复")]),_:2},1032,["onClick"])]),(n(!0),p(A,null,D(i.replyList,g=>(n(),p("div",{class:"reply-item",key:g.id},[t("div",Jt,[l(Z,{class:"reply-avatar",lazy:"","intersection-observer-options":{root:"#comment-container"},size:"small",round:"",src:i.avatar},null,8,["src"]),t("div",Kt,j(g.fromNickname),1),g.fromUid==1?(n(),Q(_,{key:0,class:"ml5","icon-class":"badge"})):T("",!0)]),t("span",Qt,[$(" 回复 "),t("span",Xt,"@ "+j(g.toNickname),1),$(" : "),t("span",{innerHTML:g.commentContent},null,8,Yt)]),t("div",Zt,[t("span",te,j(a(et)(g.createTime)),1),t("span",{class:"comment-like",onClick:lt=>x(g)},[l(_,{class:O(["like mr5",a(b)(g.id)]),"icon-class":"like",size:"0.8rem"},null,8,["class"]),B(t("span",null,j(g.likeCount),513),[[U,g.likeCount>0]])],8,ee),l(H,{class:"reply-btn",onClick:lt=>F(q,i),text:""},{default:z(()=>[$("回复")]),_:2},1032,["onClick"])])]))),128)),B(t("div",{ref_for:!0,ref_key:"readMoreRef",ref:f,class:"view-more"},[t("span",null,"共"+j(i.replyCount)+"条回复, ",1),l(H,{text:"",class:"view-more-btn",onClick:g=>y(q,i)},{default:z(()=>[$("点击查看")]),_:2},1032,["onClick"])],512),[[U,i.replyCount>3]]),l(pt,{ref_for:!0,ref_key:"pageRef",ref:w,total:i.replyCount,index:q,commentId:i.id,onGetCurrentPage:S},null,8,["total","index","commentId"]),l(N,{ref_for:!0,ref_key:"replyRef",ref:s,class:"mt-4",show:!1,"comment-type":h.commentType,"type-id":a(m),onReload:g=>K(q)},null,8,["comment-type","type-id","onReload"]),se])]))),128)),k.value>u.value.length?(n(),p("div",oe,[l(H,{class:"loading-btn",color:"#e9546b",onClick:M},{default:z(()=>[$(" 加载更多... ")]),_:1})])):T("",!0)])):(n(),p("div",ne," 暂时还没有评论，来发表第一个评论吧~ "))]))}}});const re=G(ae,[["__scopeId","data-v-0fceaa47"]]);export{re as _};
