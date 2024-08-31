(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{78479:function(e,t,a){Promise.resolve().then(a.bind(a,30205))},30205:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(57437),i=a(78833),l=a(20798),r=a(44900),s=a(32902),d=a(7893),c=a(2265),o=a(95530),u=a(15268),x=a(63993),h=a(79225);async function m(e){return await (0,h.U)("user/list",e)}async function p(e){return await (0,h.v)("user/add",e)}async function f(e){return await (0,h.v)("user/update",e)}async function g(e){return await (0,h.v)("user/remove",e)}var j=e=>{let[t,a]=(0,c.useState)(!1),[i,l]=(0,c.useState)(!1),[r,d]=(0,c.useState)(),[o,h]=(0,c.useState)(e.values),m=()=>{a(!0)};return(0,n.jsxs)(n.Fragment,{children:[(null==o?void 0:o.id)?(0,n.jsx)(s.zx,{onClick:m,type:"secondary",icon:(0,n.jsx)(u.Z,{}),"aria-label":"编辑"}):(0,n.jsx)(s.zx,{onClick:m,theme:"outline",type:"primary",icon:(0,n.jsx)(x.Z,{}),children:"添加账号"}),(0,n.jsx)(s.u_,{title:"编辑账号",keepDOM:!0,visible:t,onOk:()=>{null==r||r.validate().then(async n=>{let i;l(!0),i=o&&o.id?await f(n):await p(n),l(!1),0===i.code?(await e.refresh(),a(!t)):s.FN.error(i.msg)}).catch(e=>{console.log(e)})},confirmLoading:i,style:{width:600},onCancel:()=>{a(!1)},children:(0,n.jsxs)(s.l0,{getFormApi:e=>{d(e)},labelPosition:"left",initValues:o,children:[(0,n.jsx)(s.l0.Input,{field:"name",label:"姓名",initValue:o?o.name:""}),(0,n.jsx)(s.l0.Input,{field:"mobile",label:"手机号",initValue:o?o.mobile:""}),(0,n.jsx)(s.l0.Input,{field:"email",label:"邮箱",initValue:o?o.email:""}),(0,n.jsxs)(s.l0.Select,{initValue:o?""+o.type:"-1",field:"type",label:{text:"类型",optional:!1},children:[(0,n.jsx)(s.l0.Select.Option,{value:"-1",children:"--请选择--"}),(0,n.jsx)(s.l0.Select.Option,{value:"0",children:"管理员账号"}),(0,n.jsx)(s.l0.Select.Option,{value:"1",children:"普通账号"})]}),(0,n.jsx)(s.l0.TextArea,{field:"remark",initValue:o?o.remark:"",label:"备注"})]})})]})},v=a(15578),y=()=>{let[e,t]=(0,c.useState)({}),a=[{title:"姓名",dataIndex:"name",search:!0,render:(e,t)=>"".concat(e),onFilter:(e,t)=>t.name.includes(e)},{title:"邮箱",dataIndex:"email",search:!0,render:e=>"".concat(e)},{title:"手机号",dataIndex:"mobile",search:!0,render:e=>"".concat(e)},{title:"状态",dataIndex:"type",render:e=>{let t={1:{color:"pink",prefixIcon:(0,n.jsx)(i.Z,{}),text:"管理员"},0:{color:"cyan",prefixIcon:(0,n.jsx)(l.Z,{}),text:"普通用户"}}[e]||{};return(0,n.jsx)(s.Vp,{shape:"circle",...t,style:{userSelect:"text"},children:t.text})}},{title:"备注",dataIndex:"remark",search:!0,render:e=>"".concat(e)},{title:"所有者",dataIndex:"user_name",render:(e,t,a)=>{var i;return(0,n.jsx)(s.T,{children:(0,n.jsx)(s.qE,{size:"small",color:"red",style:{marginRight:4},children:(null==t?void 0:null===(i=t.user)||void 0===i?void 0:i.name)||"-"})})}},{title:"更新日期",dataIndex:"updated_at",sorter:(e,t)=>e.updateTime-t.updateTime>0?1:-1,render:e=>d.Z(new Date(e),"yyyy-MM-dd")},{title:"创建日期",search:!0,type:"dateRange",dataIndex:"created_at",sorter:(e,t)=>e.updateTime-t.updateTime>0?1:-1,render:e=>d.Z(new Date(e),"yyyy-MM-dd")},{title:"操作",width:120,dataIndex:"id",render:(e,t)=>(0,n.jsxs)(s.T,{children:[(0,n.jsx)(j,{values:t,refresh:()=>I(y)}),(0,n.jsx)(s.gn,{title:"确认删除吗？",onConfirm:async()=>await Z(e),position:"leftBottom",children:(0,n.jsx)("div",{children:(0,n.jsx)(s.zx,{type:"danger",icon:(0,n.jsx)(r.Z,{}),"aria-label":"删除"})})})]})}],u=async e=>await m(e),[x,h]=(0,c.useState)([]),[p,f]=(0,c.useState)(!1),[y,w]=(0,c.useState)(1),[C,b]=(0,c.useState)(0),S=async e=>{f(!0),w(e.page||1);let t=await u(e);b(t.total),h(t.data),f(!1)},I=t=>{e.page=t,S(e)},Z=async e=>{let t=await g({id:e});0===t.code?(s.FN.success(t.msg),I(y)):s.FN.error(t.msg)};return(0,c.useEffect)(()=>{S({})},[]),(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(v.Z,{fields:a,onSubmit:e=>{e.page=1,console.log(e),S(e)}}),(0,n.jsx)("div",{style:{textAlign:"right",paddingBottom:"12px"},children:(0,n.jsx)(j,{values:void 0,refresh:()=>I(y)})}),(0,n.jsx)(s.iA,{columns:a,dataSource:x,pagination:{currentPage:y,pageSize:10,total:C,onPageChange:I},loading:p})]})}},78833:function(e,t,a){"use strict";var n=a(2265);let i=(0,a(26018).A)(function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),n.createElement("path",{d:"M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23ZM19.857 12C19.8568 13.5605 19.392 15.0855 18.5217 16.3808C17.6515 17.676 16.4153 18.6828 14.9706 19.2728C13.526 19.8628 11.9384 20.0093 10.4103 19.6936C8.88208 19.3778 7.48253 18.6142 6.39 17.5L12 12V4.143C14.0838 4.143 16.0823 4.97079 17.5557 6.44426C19.0292 7.91774 19.857 9.91619 19.857 12Z",fill:"currentColor"}))},"duration");t.Z=i},63993:function(e,t,a){"use strict";var n=a(2265);let i=(0,a(26018).A)(function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",focusable:!1,"aria-hidden":!0},e),n.createElement("path",{d:"M20.5 13.5C21.3284 13.5 22 12.8284 22 12C22 11.1716 21.3284 10.5 20.5 10.5L13.5 10.5L13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5L10.5 10.5L3.5 10.5C2.67157 10.5 2 11.1716 2 12C2 12.8284 2.67157 13.5 3.5 13.5L10.5 13.5V20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5V13.5L20.5 13.5Z",fill:"currentColor"}))},"plus");t.Z=i}},function(e){e.O(0,[293,990,966,311,146,971,23,744],function(){return e(e.s=78479)}),_N_E=e.O()}]);