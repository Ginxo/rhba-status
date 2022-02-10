"use strict";(self.webpackChunkchain_status_webpage=self.webpackChunkchain_status_webpage||[]).push([[896],{4896:function(e,t,n){n.r(t),n.d(t,{CurrentStatusListItem:function(){return q},default:function(){return z}});var l=n(4157),r=n(8332),c=n(2042),s=n(9932),a=n(4066),i=n(969),u=n(7798),o=n(3679),d=n(7574),p=i.lazy((function(){return n.e(612).then(n.bind(n,4612))})),f=function(e){return(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(r.ZP,{header:(0,d.jsx)("h3",{children:"Pull Request List"}),loading:!0}),children:(0,d.jsx)(r.ZP,{header:(0,d.jsx)("h3",{children:"Pull Request List"}),className:"demo-loadmore-list",itemLayout:"vertical",dataSource:e.pullRequests,renderItem:function(e){return(0,d.jsx)(p,{pullRequest:e},e.number)}})})},h=n(3028),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"},x=n(4874),m=function(e,t){return i.createElement(x.Z,(0,h.Z)((0,h.Z)({},e),{},{ref:t,icon:j}))};m.displayName="LinkOutlined";var Z=i.forwardRef(m),g=n(9920),v=n(6391),k=n(4995),y=n(9629),S=n(5221),b=n(7389),R=function(e){var t,n,r,c={fontSize:20};return(0,d.jsx)(g.Z,{className:"site-page-header",title:(0,d.jsx)(v.Z,{type:"link",href:null!==(t=e.project.html_url)&&void 0!==t?t:"https://github.com/".concat(e.project.key),target:"_blank",icon:(0,d.jsx)(Z,{}),style:{padding:0,fontSize:20,fontWeight:"bold"},children:null!==(n=e.project.name)&&void 0!==n?n:e.project.key}),subTitle:e.project.description,extra:[],children:(0,d.jsxs)(u.Z,{gutter:16,children:[(0,d.jsx)(o.Z,{children:(0,d.jsx)(k.Z,{title:"Number of Pull Requests",prefix:(0,d.jsx)(l.Z,{}),value:e.project.pullRequests.length,valueStyle:c,suffix:(0,d.jsx)(v.Z,{type:"link",href:"".concat(null!==(r=e.project.html_url)&&void 0!==r?r:"https://github.com/".concat(e.project.key),"/pulls"),target:"_blank",icon:(0,d.jsx)(Z,{}),style:{padding:0}})})}),(0,d.jsx)(o.Z,{children:(0,d.jsx)(b.Z,{pullRequests:e.project.pullRequests})}),(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(k.Z,{title:"Language",valueStyle:(0,h.Z)((0,h.Z)({},c),{},{display:"none"})}),(0,d.jsx)(a.Z,{style:{marginTop:5},children:e.project.language})]}),(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(k.Z,{title:"Default Branch",valueStyle:(0,h.Z)((0,h.Z)({},c),{},{display:"none"})}),(0,d.jsx)(a.Z,{style:{marginTop:5},children:e.project.default_branch})]}),(0,d.jsx)(o.Z,{children:e.project.updated_at?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(y.Z,{size:16}),children:(0,d.jsx)(S.Z,{date:new Date(Date.parse(e.project.updated_at)),text:"Since Last Updating",intervalSeconds:1})}):null})]})})},C=function(e){var t;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{children:(0,d.jsx)(o.Z,{span:24,children:(0,d.jsx)(R,{project:e.project})})}),(0,d.jsx)(u.Z,{children:(0,d.jsx)(o.Z,{span:24,style:{padding:24},children:(0,d.jsx)(f,{pullRequests:null===(t=e.project)||void 0===t?void 0:t.pullRequests})})})]})},L=n(1089),N=n(1308),w=n(6692),q=function(e){return(0,d.jsx)(r.ZP.Item,{id:e.project.key.replace("/","_"),style:{marginTop:0,marginBottom:12,padding:0,scrollMarginTop:L.G},children:(0,d.jsx)(c.Z,{title:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N.Z,{title:"Number of pull requests",value:e.project.pullRequests.length,color:"default",icon:(0,d.jsx)(l.Z,{}),showZero:!0}),e.project.key]}),extra:[(0,d.jsx)(s.Z,{title:"Affected Branches",children:Array.from(new Set(e.project.pullRequests.map((function(e){var t;return null===(t=e.base)||void 0===t?void 0:t.ref})))).filter((function(e){return e})).sort((function(e,t){return e&&t?e<t?-1:e>t?1:0:0})).map((function(e){return(0,d.jsx)(a.Z,{children:e})}))}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(y.Z,{size:16}),children:(0,d.jsx)(w.Z,{pullRequests:e.project.pullRequests})})],style:{width:"100%",marginTop:0,paddingTop:0,marginBottom:12},children:(0,d.jsx)(C,{project:e.project})},e.project.key)})},z=q},1308:function(e,t,n){var l=n(9932),r=n(4066),c=(n(969),n(7574));t.Z=function(e){return e.showZero||e.value>0?(0,c.jsx)(l.Z,{placement:"top",title:e.title,children:(0,c.jsx)(r.Z,{color:e.color,icon:e.icon,children:e.value})}):null}},6692:function(e,t,n){n.d(t,{Z:function(){return k}});var l=n(3028),r=n(969),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},s=n(4874),a=function(e,t){return r.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:c}))};a.displayName="CheckCircleOutlined";var i=r.forwardRef(a),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"},o=function(e,t){return r.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:u}))};o.displayName="CloseCircleOutlined";var d=r.forwardRef(o),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},f=function(e,t){return r.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:p}))};f.displayName="SyncOutlined";var h=r.forwardRef(f),j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},x=function(e,t){return r.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:j}))};x.displayName="MinusCircleOutlined";var m=r.forwardRef(x),Z=n(1308),g=n(1089),v=n(7574),k=function(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Z.Z,{title:"Number of success checks",value:e.pullRequests.flatMap((function(e){return e.checks})).filter((function(e){return e.conclusion===g.B.CONCLUSION.SUCCESS})).length,color:"success",icon:(0,v.jsx)(i,{})}),(0,v.jsx)(Z.Z,{title:"Number of failure checks",value:e.pullRequests.flatMap((function(e){return e.checks})).filter((function(e){return e.conclusion===g.B.CONCLUSION.FAILURE})).length,color:"error",icon:(0,v.jsx)(d,{})}),(0,v.jsx)(Z.Z,{title:"Number of running checks",value:e.pullRequests.flatMap((function(e){return e.checks})).filter((function(e){return e.status===g.B.STATUS.IN_PROGRESS})).length,color:"processing",icon:(0,v.jsx)(h,{spin:!0})}),(0,v.jsx)(Z.Z,{title:"Number of skipped/aborted checks",value:e.pullRequests.flatMap((function(e){return e.checks})).filter((function(e){var t;return[g.B.CONCLUSION.SKIPPED,g.B.CONCLUSION.CANCELLED].includes(null!==(t=e.conclusion)&&void 0!==t?t:"")})).length,color:"warning",icon:(0,v.jsx)(m,{})})]})}}}]);
//# sourceMappingURL=896.b5798591.chunk.js.map