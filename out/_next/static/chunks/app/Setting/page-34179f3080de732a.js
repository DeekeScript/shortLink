(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{44913:function(e,t,s){Promise.resolve().then(s.bind(s,33279))},95530:function(e,t,s){"use strict";s.d(t,{Z:function(){return I}});var o,n=s(57437),r=s(32902),l=s(2265),a=s(16463),i=s(79225),c=s(4410);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var o in s)({}).hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e}).apply(null,arguments)}var d=function(e){return c.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",className:"logo_svg__icon",viewBox:"0 0 1024 1024"},e),o||(o=c.createElement("path",{fill:"#333",d:"M938.667 313.643v220.245a85.333 85.333 0 0 1-86.187 85.333l-55.723-.554L585.6 318.613a85.33 85.33 0 0 0-105.195-28.522L384 334.059a54.6 54.6 0 0 1-33.28 3.882c-49.067-9.749-65.557-26.709-49.408-50.944 15.637-23.466 82.176-70.634 199.659-141.589 3.072-1.877 6.25-3.477 9.514-4.757 49.344-22.955 105.643-14.678 168.896 24.853 29.056 18.197 93.995 40 194.774 65.387a85.33 85.33 0 0 1 64.512 82.752M85.333 566.699V320a85.333 85.333 0 0 1 85.334-85.333h109.098c-5.205 5.162-12.416 12.224-21.589 21.184-13.781 13.44-18.176 23.808-17.621 44.053a68.82 68.82 0 0 0 26.005 51.904 146.48 146.48 0 0 0 140.821 23.147l60.032-21.632a85.33 85.33 0 0 1 98.88 31.402l170.432 243.968a85.333 85.333 0 0 1-26.368 122.24L511.467 869.12a54.3 54.3 0 0 1-34.56 4.48l8.81-8.832a105.856 105.856 0 0 0 0-150.059l-172.8-172.821a81.5 81.5 0 0 0-57.642-23.787 81.5 81.5 0 0 0-57.622 23.766L122.197 617.3A53.44 53.44 0 0 1 85.333 566.7m206.208 27.669 153.28 153.237c13.44 13.44 18.688 32.939 13.76 51.2l-7.722 28.907a41.34 41.34 0 0 1-26.411 28.267 42.05 42.05 0 0 1-38.507-5.675L188.864 707.072a53.013 53.013 0 0 1-6.4-80.512l32.213-32.235a54.34 54.34 0 0 1 38.4-15.85c14.464 0 28.288 5.696 38.443 15.85v.043z"})))},p=()=>{let{Footer:e}=r.Layout;return(0,n.jsx)(e,{style:{display:"flex",justifyContent:"space-between",padding:"20px",color:"var(--semi-color-text-2)",backgroundColor:"rgba(var(--semi-grey-0), 1)"},children:(0,n.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(d,{size:"large",style:{marginRight:"8px"}}),(0,n.jsx)("span",{children:"Copyright \xa9 2024 壹择科技. All Rights Reserved. "})]})})},g=s(37006),h=s(15268),x=s(20894),m=s(14892);async function f(e){return await (0,i.v)("user/passwordUpdate",e)}var y=e=>{let[t,s]=(0,l.useState)(!1),[o,a]=(0,l.useState)();return console.log(e),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.u_,{title:"密码修改",keepDOM:!0,visible:!0,confirmLoading:t,onOk:()=>{null==o||o.validate().then(async t=>{if(t.password!==t.password2)return r.FN.error("两次密码输入不一致");s(!0);let o=await f(t);s(!1),0===o.code?await e.refresh():r.FN.error(o.msg)}).catch(e=>{console.log(e)})},style:{width:600},onCancel:()=>{e.setVisible(!1)},children:(0,n.jsxs)(r.l0,{getFormApi:e=>{a(e)},labelPosition:"left",children:[(0,n.jsx)(r.l0.Input,{showClear:!0,field:"old_password",label:"原密码"}),(0,n.jsx)(r.l0.Input,{showClear:!0,type:"password",field:"password",label:"新密码"}),(0,n.jsx)(r.l0.Input,{showClear:!0,type:"password",field:"password2",label:"重复密码"})]})})})},j=e=>{var t;let{Header:s}=r.Layout,[o,i]=(0,l.useState)(!1),c=(0,a.useRouter)();return(0,n.jsxs)(s,{style:{backgroundColor:"var(--semi-color-bg-1)"},children:[o&&(0,n.jsx)(y,{refresh:()=>{localStorage.removeItem("access_token"),c.push("/Login")},setVisible:()=>i(!1)}),(0,n.jsx)(r.JL,{mode:"horizontal",footer:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.zx,{theme:"borderless",icon:(0,n.jsx)(g.Z,{size:"large"}),style:{color:"var(--semi-color-text-2)",marginRight:"12px"}}),(0,n.jsx)(r.Lt,{position:"bottomLeft",render:(0,n.jsxs)(r.Lt.Menu,{children:[(0,n.jsx)(r.Lt.Item,{onClick:()=>i(!o),icon:(0,n.jsx)(h.Z,{}),children:"修改密码"}),(0,n.jsx)(r.Lt.Item,{onClick:()=>{let e=r.FN.info({icon:(0,n.jsx)(x.Z,{}),content:"正在退出\xb7\xb7\xb7"});localStorage.removeItem("access_token"),c.push("/Login"),r.FN.close(e)},icon:(0,n.jsx)(m.Z,{}),children:"退出登录"})]}),children:(0,n.jsx)(r.qE,{color:"orange",size:"small",children:null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.name})})]})})]})},v=s(62509),b=s(17863),w=s(7931),L=s(49256),S=s(73600),_=s(20211),k=s(42132),C=s(20357),z=e=>{let{Sider:t}=r.Layout,s=(0,a.useRouter)(),o=(0,a.usePathname)(),[i,c]=(0,l.useState)(o.substring(1)||"Home");return(0,n.jsx)(t,{style:{backgroundColor:"rgb(242, 242, 244)"},children:(0,n.jsx)(r.JL,{defaultSelectedKeys:[i],selectedKeys:[i],style:{maxWidth:220,height:"100%",backgroundColor:"var(--color-fill-0)"},items:[{itemKey:"Home",text:"首页",icon:(0,n.jsx)(v.Z,{size:"large"})},{itemKey:"Data",text:"基础数据",icon:(0,n.jsx)(b.Z,{size:"large"})},{itemKey:"Project",text:"广告管理",icon:(0,n.jsx)(w.Z,{size:"large"})},{itemKey:"Custom",text:"客户管理",icon:(0,n.jsx)(L.Z,{size:"large"})},{itemKey:"ShortLink",text:"短链管理",icon:(0,n.jsx)(S.Z,{size:"large"})},{itemKey:"Account",text:"账号管理",icon:(0,n.jsx)(_.Z,{size:"large"})},{itemKey:"Setting",text:"系统设置",icon:(0,n.jsx)(k.Z,{size:"large"})}],header:{logo:(0,n.jsx)(d,{style:{fontSize:36}}),text:C.env.NEXT_PUBLIC_TITLE,style:{paddingBottom:"12px"}},footer:{collapseButton:!0},onSelect:e=>{s.push("/"+e.itemKey)}})})},I=e=>{let{children:t}=e,{Content:s}=r.Layout,o=function(e,t){let[s,o]=(0,l.useState)(null),[n,r]=(0,l.useState)(!1),c=(0,a.useRouter)();return(0,l.useEffect)(()=>{let s=localStorage.getItem("user");s&&o(JSON.parse(s));let l=async()=>{let{data:s,code:l}=await (0,i.U)("user/current",{}),a=!!s;o(0===l?s:null),0===l&&localStorage.setItem("user",JSON.stringify(s)),r(!0),e&&n&&(e&&!t&&!a||t&&a)&&c.push(e)};s||l()},[e,t,n,c]),s}("/Login",!1);return(0,n.jsxs)(r.Layout,{style:{height:"100%"},children:[(0,n.jsx)(z,{user:o}),(0,n.jsxs)(r.Layout,{children:[(0,n.jsx)(j,{user:o}),(0,n.jsx)(s,{style:{padding:"12px",backgroundColor:"#f9f9fa"},children:(0,n.jsx)("div",{style:{borderRadius:"10px",border:"1px solid var(--semi-color-border)",height:"auto",backgroundColor:"var(--semi-color-bg-0)",padding:"24px"},children:t})}),(0,n.jsx)(p,{})]})]})}},33279:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var o=s(57437),n=s(32902),r=s(95530),l=s(2265),a=s(79225);async function i(e){return await (0,a.U)("system/list",e)}async function c(e){return await (0,a.v)("system/update",e)}var u=s(87114),d=()=>{let[e,t]=(0,l.useState)(void 0);(0,l.useEffect)(()=>{(async()=>{let e=await i({});0==e.code&&t(e.data)})()},[]);let s=async e=>{console.log(e);let t=await c(e);0==t.code&&n.FN.success(t.msg)};return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)("h3",{style:{paddingBottom:"12px"},children:"系统设置"}),(0,o.jsx)(n.iz,{}),e?(0,o.jsxs)(n.l0,{onSubmit:s,labelPosition:"left",initValues:e,children:[(0,o.jsx)(n.l0.Input,{field:"corpid",label:"corpid"}),(0,o.jsx)(n.l0.Input,{field:"secret",label:"secret"}),(0,o.jsx)(u.Z,{type:"primary",htmlType:"submit",children:"保存"})]}):null]})}},79225:function(e,t,s){"use strict";s.d(t,{U:function(){return n},v:function(){return r}});var o=s(32902);async function n(e,t){let s="";if(t){for(let e in t)s+="&"+e+"="+t[e];s="?"+s.substring(1)}let n={"Content-Type":"application/json",Accept:"application/json"};localStorage.getItem("access_token")&&(n.Authorization=localStorage.getItem("access_token"));let r=await fetch("https://crm.yizetech.com.cn/api/"+e+s,{method:"GET",headers:n}),l=r.json();return 429===r.status?o.P_.open({title:"系统通知",content:"频率限制，请稍后再试"}):401===r.status?window.location.href="/Login":200!==r.status&&o.P_.open({title:"系统通知",content:"接口异常"}),l}async function r(e,t){let s={"Content-Type":"application/json",Accept:"application/json"};localStorage.getItem("access_token")&&(s.Authorization=localStorage.getItem("access_token"));let n=await fetch("https://crm.yizetech.com.cn/api/"+e,{method:"POST",headers:s,body:JSON.stringify({...t})}),r=await n.json();return 429===n.status?o.P_.open({title:"系统通知",content:"频率限制，请稍后再试"}):401===n.status?window.location.href="/Login":200!==n.status&&o.P_.open({title:"系统通知",content:"接口异常"}),r}}},function(e){e.O(0,[966,311,971,23,744],function(){return e(e.s=44913)}),_N_E=e.O()}]);