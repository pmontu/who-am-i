(this["webpackJsonpwho-am-i"]=this["webpackJsonpwho-am-i"]||[]).push([[0],{48:function(e,t,a){e.exports=a(62)},53:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=(a(53),a(5)),i=a(14),u=(Object({NODE_ENV:"production",PUBLIC_URL:"/who-am-i",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).DEV_SERVER_PORT,a(32));u.a.initialize("UA-169321690-1");var m=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("h1",null,"Page Not Found"),c.a.createElement(i.b,{to:"/"},"Go back Home"))},s=a(19),f=a(81),h=a(85),p=a(83),E=a(40),d=a.n(E),v=a(41),b=a.n(v),y=a(42),g=a.n(y);function w(){var e=Object(o.g)(),t=function(){var e=Object(o.h)(),t=0;"/"===e.pathname?t=0:"/face-capture"===e.pathname||"/result"===e.pathname?t=1:"/about"===e.pathname&&(t=2);return t}(),a=c.a.useState(t),r=Object(s.a)(a,2),l=r[0],i=r[1],u=Object(n.useCallback)((function(t){0===t?e.push("/"):1===t?e.push("/face-capture"):2===t&&e.push("/about")}),[e]);Object(n.useEffect)((function(){i(t)}),[t]);return c.a.createElement(f.a,null,c.a.createElement(h.a,{value:l,onChange:function(e,t){i(t),u(t)},indicatorColor:"primary",textColor:"primary",centered:!0},c.a.createElement(p.a,{icon:c.a.createElement(d.a,null)}),c.a.createElement(p.a,{icon:c.a.createElement(b.a,null)}),c.a.createElement(p.a,{icon:c.a.createElement(g.a,null)})))}var x=function(){return c.a.createElement("div",{className:"center",style:{padding:20}},c.a.createElement("p",null,"This project is a proof of concept to integrate face recognition machine learning service that is provided by a cloud service such as azure with our application."),c.a.createElement("p",null,"This application estimates your age and emotions using azure face api."," ",c.a.createElement(i.b,{to:"/face-capture"},"Click here to try.")))},O=function(){return c.a.createElement("div",{className:"center"},c.a.createElement("a",{href:"https://github.com/pmontu/who-am-i"},"View Source Code on Github"),c.a.createElement("br",null),c.a.createElement("a",{href:"http://www.pythoncoach.in/"},"Visit my blog"))},j=a(43),S=a.n(j),_=(a(59),a(26));var k=function(e){var t=Object(o.g)();return c.a.createElement(_.a,null,(function(e){var a=e.height,n=e.width;return c.a.createElement("div",{style:{width:n,height:a}},c.a.createElement(S.a,{onTakePhoto:function(e){!function(e){t.push("/result",{b64_img:e})}(e)}}))}))};var C=a(84);var T=function(){return c.a.createElement("div",{className:"center"},c.a.createElement(C.a,null))},N=a(44);a(60);function D(e){var t=e.value,a=e.text;return c.a.createElement("div",{style:{padding:"20px 20px 20px 20px",width:"125px"}},c.a.createElement(N.a,{value:t,text:a}))}var P={emotionBar:{flex:1,display:"flex",overflowX:"scroll"}},B=function(){var e=(Object(o.h)().state||{}).b64_img,t=Object(o.g)(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),l=r[0],i=r[1],u=Object(n.useState)([]),m=Object(s.a)(u,2),f=m[0],h=m[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),d=E[0],v=E[1];return Object(n.useEffect)((function(){var a;e?(i(!0),v(""),(a=e,new Promise((function(e,t){fetch("".concat("https://hari-student.azurewebsites.net","/api/face"),{method:"POST",headers:{accept:"application/json"},body:JSON.stringify({b64_img:a})}).then((function(e){if(!e.ok)throw Error("failed to fetch");return e.json()})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}))).then((function(e){i(!1),h(e)})).catch((function(e){i(!1),v(e.message)}))):t.push("/face-capture")}),[e,t]),d?c.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column"}},c.a.createElement("h1",null,d)):c.a.createElement("div",{style:{flex:1,display:"flex",flexDirection:"column"}},l?c.a.createElement(T,null):f.length>0?c.a.createElement("div",{style:{display:"flex",width:"100%",scrollX:"auto"}},f.map((function(e,t){var a=function(e){return Object.entries(e.faceAttributes.emotion).map((function(e){return[e[0],Math.round(100*e[1],0)]})).filter((function(e){return 0!==e[1]})).sort((function(e,t){return t[1]-e[1]}))}(e),n=e.faceAttributes.age;return c.a.createElement("div",{key:t,style:P.emotionBar},c.a.createElement("div",{style:{display:"flex",flex:1,justifyContent:"center"},className:"values"},c.a.createElement(D,{value:n,text:"".concat(n," years"),key:0}),a.map((function(e,t){return c.a.createElement(D,{value:e[1],text:e[0],key:t+1})}))))}))):"No data available.",c.a.createElement("div",{style:{display:"flex",flex:1}},c.a.createElement(_.a,null,(function(t){var a=t.height,n=t.width;return c.a.createElement("img",{src:e,alt:"selfi",style:{width:n,height:a,objectFit:"contain"}})}))))};a(61);function R(e){return function(){var e=Object(o.h)();Object(n.useEffect)((function(){var t="".concat(e.pathname).concat(e.search);u.a.pageview(t)}),[e])}(),c.a.createElement("div",{style:V.root},c.a.createElement(w,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/"},c.a.createElement(x,null)),c.a.createElement(o.b,{path:"/face-capture"},c.a.createElement(k,null)),c.a.createElement(o.b,{path:"/result"},c.a.createElement(B,null)),c.a.createElement(o.b,{path:"/about"},c.a.createElement(O,null)),c.a.createElement(o.b,{path:"/404",component:m}),c.a.createElement(o.a,{to:"/404"})))}var V={root:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"fixed",overflowY:"scroll"}},W=function(){return c.a.createElement(i.a,{basename:"/who-am-i"},c.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.bef5bb93.chunk.js.map