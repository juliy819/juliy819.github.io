import{c as e,e as c}from"./index-15414ed8.js";const r={getTagList:()=>{const{appStore:t}=e();return t.local?g():n()},getTagArticleList:t=>{const{appStore:s}=e();return s.local?d(t):l(t)},countTagArticles:t=>{const{appStore:s}=e();return s.local?L(t):u(t)}},n=()=>c({url:"/tag/list",method:"get"}),g=()=>new Promise(t=>{const{localStore:s}=e();t({status:200,statusText:"OK",headers:{},config:{},data:{code:200,msg:"success",flag:!0,data:s.tagList}})}),l=t=>c({url:"/tag/article",method:"get",params:t}),d=t=>new Promise((s,o)=>{const{localStore:i}=e(),a=i.getArticlesByTagId(t.tagId);a||o(),a.articleConditionList=a.articleConditionList.slice((t.current-1)*t.size,t.current*t.size),s({status:200,statusText:"OK",headers:{},config:{},data:{code:200,msg:"success",flag:!0,data:a}})}),u=t=>c({url:"/tag/article/count",method:"get",params:t}),L=t=>new Promise(s=>{const{localStore:o}=e();s({status:200,statusText:"OK",headers:{},config:{},data:{code:200,msg:"success",flag:!0,data:o.getArticlesByTagId(t.tagId).articleConditionList.length}})}),m=r;export{m as t};