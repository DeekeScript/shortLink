"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{95530:function(e,t,a){a.d(t,{Z:function(){return Z}});var n,s=a(57437),i=a(32902),o=a(2265),l=a(16463),r=a(79225),c=a(4410);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(null,arguments)}var d=function(e){return c.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",className:"logo_svg__icon",viewBox:"0 0 1024 1024"},e),n||(n=c.createElement("path",{fill:"#333",d:"M938.667 313.643v220.245a85.333 85.333 0 0 1-86.187 85.333l-55.723-.554L585.6 318.613a85.33 85.33 0 0 0-105.195-28.522L384 334.059a54.6 54.6 0 0 1-33.28 3.882c-49.067-9.749-65.557-26.709-49.408-50.944 15.637-23.466 82.176-70.634 199.659-141.589 3.072-1.877 6.25-3.477 9.514-4.757 49.344-22.955 105.643-14.678 168.896 24.853 29.056 18.197 93.995 40 194.774 65.387a85.33 85.33 0 0 1 64.512 82.752M85.333 566.699V320a85.333 85.333 0 0 1 85.334-85.333h109.098c-5.205 5.162-12.416 12.224-21.589 21.184-13.781 13.44-18.176 23.808-17.621 44.053a68.82 68.82 0 0 0 26.005 51.904 146.48 146.48 0 0 0 140.821 23.147l60.032-21.632a85.33 85.33 0 0 1 98.88 31.402l170.432 243.968a85.333 85.333 0 0 1-26.368 122.24L511.467 869.12a54.3 54.3 0 0 1-34.56 4.48l8.81-8.832a105.856 105.856 0 0 0 0-150.059l-172.8-172.821a81.5 81.5 0 0 0-57.642-23.787 81.5 81.5 0 0 0-57.622 23.766L122.197 617.3A53.44 53.44 0 0 1 85.333 566.7m206.208 27.669 153.28 153.237c13.44 13.44 18.688 32.939 13.76 51.2l-7.722 28.907a41.34 41.34 0 0 1-26.411 28.267 42.05 42.05 0 0 1-38.507-5.675L188.864 707.072a53.013 53.013 0 0 1-6.4-80.512l32.213-32.235a54.34 54.34 0 0 1 38.4-15.85c14.464 0 28.288 5.696 38.443 15.85v.043z"})))},h=()=>{let{Footer:e}=i.Layout;return(0,s.jsx)(e,{style:{display:"flex",justifyContent:"space-between",padding:"20px",color:"var(--semi-color-text-2)",backgroundColor:"rgba(var(--semi-grey-0), 1)"},children:(0,s.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(d,{size:"large",style:{marginRight:"8px"}}),(0,s.jsx)("span",{children:"Copyright \xa9 2024 壹择科技. All Rights Reserved. "})]})})},p=a(37006),y=a(15268),x=a(20894),g=a(14892);async function m(e){return await (0,r.v)("user/passwordUpdate",e)}var j=e=>{let[t,a]=(0,o.useState)(!1),[n,l]=(0,o.useState)();return console.log(e),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.u_,{title:"密码修改",keepDOM:!0,visible:!0,confirmLoading:t,onOk:()=>{null==n||n.validate().then(async t=>{if(t.password!==t.password2)return i.FN.error("两次密码输入不一致");a(!0);let n=await m(t);a(!1),0===n.code?await e.refresh():i.FN.error(n.msg)}).catch(e=>{console.log(e)})},style:{width:600},onCancel:()=>{e.setVisible(!1)},children:(0,s.jsxs)(i.l0,{getFormApi:e=>{l(e)},labelPosition:"left",children:[(0,s.jsx)(i.l0.Input,{showClear:!0,field:"old_password",label:"原密码"}),(0,s.jsx)(i.l0.Input,{showClear:!0,type:"password",field:"password",label:"新密码"}),(0,s.jsx)(i.l0.Input,{showClear:!0,type:"password",field:"password2",label:"重复密码"})]})})})},v=e=>{var t;let{Header:a}=i.Layout,[n,r]=(0,o.useState)(!1),c=(0,l.useRouter)();return(0,s.jsxs)(a,{style:{backgroundColor:"var(--semi-color-bg-1)"},children:[n&&(0,s.jsx)(j,{refresh:()=>{localStorage.removeItem("access_token"),c.push("/Login")},setVisible:()=>r(!1)}),(0,s.jsx)(i.JL,{mode:"horizontal",footer:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.zx,{theme:"borderless",icon:(0,s.jsx)(p.Z,{size:"large"}),style:{color:"var(--semi-color-text-2)",marginRight:"12px"}}),(0,s.jsx)(i.Lt,{position:"bottomLeft",render:(0,s.jsxs)(i.Lt.Menu,{children:[(0,s.jsx)(i.Lt.Item,{onClick:()=>r(!n),icon:(0,s.jsx)(y.Z,{}),children:"修改密码"}),(0,s.jsx)(i.Lt.Item,{onClick:()=>{let e=i.FN.info({icon:(0,s.jsx)(x.Z,{}),content:"正在退出\xb7\xb7\xb7"});localStorage.removeItem("access_token"),c.push("/Login"),i.FN.close(e)},icon:(0,s.jsx)(g.Z,{}),children:"退出登录"})]}),children:(0,s.jsx)(i.qE,{color:"orange",size:"small",children:null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.name})})]})})]})},f=a(62509),w=a(17863),b=a(7931),k=a(49256),_=a(73600),S=a(20211),L=a(42132),C=a(20357),I=e=>{let{Sider:t}=i.Layout,a=(0,l.useRouter)(),n=(0,l.usePathname)(),[r,c]=(0,o.useState)(n.substring(1)||"Home");return(0,s.jsx)(t,{style:{backgroundColor:"rgb(242, 242, 244)"},children:(0,s.jsx)(i.JL,{defaultSelectedKeys:[r],selectedKeys:[r],style:{maxWidth:220,height:"100%",backgroundColor:"var(--color-fill-0)"},items:[{itemKey:"Home",text:"首页",icon:(0,s.jsx)(f.Z,{size:"large"})},{itemKey:"Data",text:"基础数据",icon:(0,s.jsx)(w.Z,{size:"large"})},{itemKey:"Project",text:"广告管理",icon:(0,s.jsx)(b.Z,{size:"large"})},{itemKey:"Custom",text:"客户管理",icon:(0,s.jsx)(k.Z,{size:"large"})},{itemKey:"ShortLink",text:"短链管理",icon:(0,s.jsx)(_.Z,{size:"large"})},{itemKey:"Account",text:"账号管理",icon:(0,s.jsx)(S.Z,{size:"large"})},{itemKey:"Setting",text:"系统设置",icon:(0,s.jsx)(L.Z,{size:"large"})}],header:{logo:(0,s.jsx)(d,{style:{fontSize:36}}),text:C.env.NEXT_PUBLIC_TITLE,style:{paddingBottom:"12px"}},footer:{collapseButton:!0},onSelect:e=>{a.push("/"+e.itemKey)}})})},Z=e=>{let{children:t}=e,{Content:a}=i.Layout,n=function(e,t){let[a,n]=(0,o.useState)(null),[s,i]=(0,o.useState)(!1),c=(0,l.useRouter)();return(0,o.useEffect)(()=>{let a=localStorage.getItem("user");a&&n(JSON.parse(a));let o=async()=>{let{data:a,code:o}=await (0,r.U)("user/current",{}),l=!!a;n(0===o?a:null),0===o&&localStorage.setItem("user",JSON.stringify(a)),i(!0),e&&s&&(e&&!t&&!l||t&&l)&&c.push(e)};a||o()},[e,t,s,c]),a}("/Login",!1);return(0,s.jsxs)(i.Layout,{style:{height:"100%"},children:[(0,s.jsx)(I,{user:n}),(0,s.jsxs)(i.Layout,{children:[(0,s.jsx)(v,{user:n}),(0,s.jsx)(a,{style:{padding:"12px",backgroundColor:"#f9f9fa"},children:(0,s.jsx)("div",{style:{borderRadius:"10px",border:"1px solid var(--semi-color-border)",height:"auto",backgroundColor:"var(--semi-color-bg-0)",padding:"24px"},children:t})}),(0,s.jsx)(h,{})]})]})}},27274:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(57437),s=a(2265),i=a(95530),o=a(37721),l=a(32902),r=a(20283),c=a(79225);async function u(e){return await (0,c.U)("shortLinkView/statistic",e)}async function d(e){return await (0,c.U)("project/idTitle",e)}async function h(e){return await (0,c.U)("shortLink/idTitle",e)}var p=()=>{let[e,t]=(0,s.useState)(0),[a,c]=(0,s.useState)(0),[p,y]=(0,s.useState)([]),[x,g]=(0,s.useState)([]),[m,j]=(0,s.useState)(),[v,f]=(0,s.useState)([{key:"30日展示量",value:0},{key:"30日点击量",value:0},{key:"30日咨询量",value:0}]),[w,b]=(0,s.useState)([{key:"7日展示量",value:0},{key:"7日点击量",value:0},{key:"7日咨询量",value:0}]),[k,_]=(0,s.useState)([{key:"今日展示量",value:0},{key:"今日点击量",value:0},{key:"今日咨询量",value:0}]),S=(e,t)=>(e[0].value=(null==t?void 0:t.show_count)||0,e[1].value=(null==t?void 0:t.click_count)||0,e[2].value=(null==t?void 0:t.chat_count)||0,e),L=async()=>{let e=await d({});0==e.code&&y(e.data)},C=async()=>{let t=await h({project_id:e});0==t.code&&g(t.data)},I=async()=>{let t=await u({project_id:e,short_link_id:a});if(0==t.code){let e={show_count:[],click_count:[],chat_count:[]};for(let a in _(S(k,t.monthData)),b(S(w,t.sevenData)),f(S(v,t.todayData)),t.data)e.show_count.push({x:a.substring(5,10),type:"展示量",y:t.data[a].show_count}),e.click_count.push({x:a.substring(5,10),type:"点击量",y:t.data[a].click_count}),e.chat_count.push({x:a.substring(5,10),type:"咨询量",y:t.data[a].chat_count});let a={type:"common",seriesField:"color",data:[{id:"id1",values:e.show_count},{id:"id2",values:e.click_count},{id:"id3",values:e.chat_count}],series:[{type:"line",dataIndex:0,seriesField:"type",xField:"x",yField:"y",stack:!1,animationAppear:{point:{type:"moveIn",options:{direction:"y"},easing:"bounceOut",duration:1e3},line:{duration:1500,delay:1e3,easing:"cubicOut"}}},{type:"line",dataIndex:1,seriesField:"type",xField:"x",yField:"y",stack:!1,animationAppear:{point:{type:"moveIn",options:{direction:"y"},easing:"bounceOut",duration:1e3},line:{duration:1500,delay:1e3,easing:"cubicOut"}}},{type:"line",dataIndex:2,seriesField:"type",xField:"x",yField:"y",stack:!1,animationAppear:{point:{type:"moveIn",options:{direction:"y"},easing:"bounceOut",duration:1e3},line:{duration:1500,delay:1e3,easing:"cubicOut"}}}],axes:[{orient:"left"},{orient:"bottom",label:{visible:!0},type:"band"}],legends:{visible:!0,orient:"bottom"}};if(m)console.log(22),m.updateSpec(a);else{let e=new o.ZPm(a,{dom:"chart"});j(e),e.renderSync(),console.log(11)}}},Z=!1;(0,s.useEffect)(()=>{Z||(L(),C(),I(),Z=!0)},[a]);let z={marginRight:"10px"},F=async e=>{t(e),c(0),await C(),await I()};return(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(l.Ph,{value:e,onChange:F,children:[(0,n.jsx)(r.Z,{value:0,children:"全部广告"}),p.map(e=>(0,n.jsx)(r.Z,{value:e.id,children:e.title},e.id))]}),(0,n.jsxs)(l.Ph,{value:a,style:{marginLeft:"12px"},onChange:e=>{c(e)},children:[(0,n.jsx)(r.Z,{value:0,children:"全部短链"}),x.map(e=>(0,n.jsx)(r.Z,{value:e.id,children:e.title},e.id))]})]}),(0,n.jsx)("div",{style:{marginTop:"12px"},children:(0,n.jsxs)(l.T,{children:[(0,n.jsx)(l.Zb,{shadows:"always",style:z,children:(0,n.jsx)(l.w5,{align:"center",data:v})}),(0,n.jsx)(l.Zb,{shadows:"always",style:z,children:(0,n.jsx)(l.w5,{align:"justify",data:w})}),(0,n.jsx)(l.Zb,{shadows:"always",style:z,children:(0,n.jsx)(l.w5,{align:"left",data:k})})]})}),(0,n.jsx)("div",{id:"chart",style:{height:"500px",marginTop:"12px"}})]})}},79225:function(e,t,a){a.d(t,{U:function(){return s},v:function(){return i}});var n=a(32902);async function s(e,t){let a="";if(t){for(let e in t)a+="&"+e+"="+t[e];a="?"+a.substring(1)}let s={"Content-Type":"application/json",Accept:"application/json"};localStorage.getItem("access_token")&&(s.Authorization=localStorage.getItem("access_token"));let i=await fetch("https://crm.yizetech.com.cn/api/"+e+a,{method:"GET",headers:s}),o=i.json();return 429===i.status?n.P_.open({title:"系统通知",content:"频率限制，请稍后再试"}):401===i.status?window.location.href="/Login":200!==i.status&&n.P_.open({title:"系统通知",content:"接口异常"}),o}async function i(e,t){let a={"Content-Type":"application/json",Accept:"application/json"};localStorage.getItem("access_token")&&(a.Authorization=localStorage.getItem("access_token"));let s=await fetch("https://crm.yizetech.com.cn/api/"+e,{method:"POST",headers:a,body:JSON.stringify({...t})}),i=await s.json();return 429===s.status?n.P_.open({title:"系统通知",content:"频率限制，请稍后再试"}):401===s.status?window.location.href="/Login":200!==s.status&&n.P_.open({title:"系统通知",content:"接口异常"}),i}}}]);