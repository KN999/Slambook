(this.webpackJsonpslambook=this.webpackJsonpslambook||[]).push([[0],{29:function(e,a,t){e.exports=t(65)},34:function(e,a,t){},35:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),o=t.n(l),c=(t(34),t(25));t(35);var m=function(){return r.a.createElement("div",{id:"homepage"},r.a.createElement("header",{id:"home-header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Slambook"),r.a.createElement("h3",null,"Nothing like a Book. More than a Book"))),r.a.createElement("main",{id:"home-content"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,r.a.createElement("a",{href:"/Register"},"Register with us")),r.a.createElement("legend",null,"Or"),r.a.createElement("h3",null,r.a.createElement("a",{href:"/Login"},"Manage your slambook")))))},s=t(1),u=t(6),i=t.n(u);t(53);var d=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),u=m[0],d=m[1];return r.a.createElement("div",{id:"login"},r.a.createElement("div",{id:"form-login"},r.a.createElement("div",{className:"form-head"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Login"))),r.a.createElement("div",{className:"form-body"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),i.a.post("/user/login",{username:l,password:u}).then((function(a){102===a.data.code?(console.log("result : ",a),localStorage.setItem("Token",a.data.token),e.history.push("/Dashboard")):(console.log("ERROR : ",a.data.message),alert("Username or Password is incorrect"))})).catch((function(e){alert("Something went wrong :("),console.log(e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",className:"form-field",autoComplete:"off",value:l,onChange:function(e){return o(e.target.value)},required:!0}),r.a.createElement("span",{"data-placeholder":""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"form-field",autoComplete:"off",value:u,onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("span",{"data-placeholder":""})),r.a.createElement("input",{type:"submit",value:"Log in",className:"form-btn"})))),r.a.createElement("div",{className:"form-tail"},r.a.createElement("div",{className:"container"},"Don't have a account? ",r.a.createElement("a",{href:"/Register"},"Register")))))};t(54);var f=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),u=m[0],d=m[1],f=Object(n.useState)(""),p=Object(s.a)(f,2),E=p[0],g=p[1],h=Object(n.useState)(""),v=Object(s.a)(h,2),b=v[0],N=v[1];return r.a.createElement("div",{id:"register"},r.a.createElement("div",{id:"form-register"},r.a.createElement("div",{className:"form-head"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Register"))),r.a.createElement("div",{className:"form-body"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),b===E?i.a.post("/user/register",{name:l,username:u,password:E}).then((function(a){303===a.data.code?(console.log("result : ",a),localStorage.setItem("Token",a.data.token),e.history.push("/Dashboard")):(alert("User already exist!"),console.log("ERROR: "+a.data.message))})).catch((function(e){alert("Something went wrong! :("),console.log(e)})):alert("Password and Confirm Password are not same.")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Username",name:"username",className:"form-field",autoComplete:"off",value:u,onChange:function(e){return d(e.target.value)},required:!0}),r.a.createElement("span",{"data-placeholder":""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"form-field",autoComplete:"off",value:l,onChange:function(e){return o(e.target.value)},required:!0}),r.a.createElement("span",{"data-placeholder":""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"form-field",autoComplete:"off",value:E,onChange:function(e){return g(e.target.value)},required:!0}),r.a.createElement("span",{"data-placeholder":""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"confirm-password",className:"form-field",autoComplete:"off",value:b,onChange:function(e){return N(e.target.value)},required:!0}),r.a.createElement("span",{"data-placeholder":""})),r.a.createElement("input",{type:"submit",value:"Register",className:"form-btn"})))),r.a.createElement("div",{className:"form-tail"},r.a.createElement("div",{className:"container"},"already have a account?",r.a.createElement("a",{href:"/Login"},"Log in")))))};t(55);var p=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(),m=Object(s.a)(c,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){console.log(u)}),[u]),r.a.createElement("div",{id:"dash-search"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),i.a.get("actions/search",{params:{username:l}}).then((function(a){405===a.data.code?(d(a.data.user),e.props.history.push({pathname:"/addpage",state:{username:a.data.data}})):(console.log("ERROR : ",a.data.message),alert("Username not found"))})).catch((function(e){console.log(e),alert("Something went wrong!")}))},className:"search-form"},r.a.createElement("div",{className:"form-group input-search"},r.a.createElement("input",{type:"text",name:"username",className:"search form-field",autoComplete:"off",placeholder:"Search",onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Go",className:"form-btn"})))))};t(56);var E=function(){var e,a=Object(n.useState)([]),t=Object(s.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(localStorage.getItem("Token")),m=Object(s.a)(c,2),u=m[0];return m[1],Object(n.useEffect)((function(){i.a.get("/actions/slampages",{params:{username:u}}).then((function(e){404===e.data.code?(o(e.data.slambook),console.log(e)):(alert("can't Retrieve Data"),console.log("can't Retrieve Data : "+e))})).catch((function(e){console.log("Erroe : "+e),alert("Something went wrong!")}))}),[]),r.a.createElement("div",{id:"slam-pages"},r.a.createElement("div",{className:"container"},0!=l.length?(e=l,r.a.createElement("div",{className:"display-flex"},e.map((function(e){return r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,": ",e.writer)),r.a.createElement("tr",null,r.a.createElement("td",null,"My biggest dream"),r.a.createElement("td",null,": ",e.Q1)),r.a.createElement("tr",null,r.a.createElement("td",null,"I have a crush on"),r.a.createElement("td",null,": ",e.Q2)),r.a.createElement("tr",null,r.a.createElement("td",null,"About you I feel"),r.a.createElement("td",null,": ",e.Q3)),r.a.createElement("tr",null,r.a.createElement("td",null,"Something I like about you"),r.a.createElement("td",null,": ",e.Q4)),r.a.createElement("tr",null,r.a.createElement("td",null,"Something I like about you"),r.a.createElement("td",null,": ",e.Q5)),r.a.createElement("tr",null,r.a.createElement("td",null,"Something I hate about you"),r.a.createElement("td",null,": ",e.Q6)))})))):r.a.createElement("div",{className:"alternate-text"},"Try spreading your slam username to your friend.")))};t(57);var g=function(e){return r.a.createElement("div",{id:"dashboard"},r.a.createElement("div",{className:"dash-head"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"SlamBoard")),r.a.createElement("div",{className:"Logout"},r.a.createElement("a",{className:"Logout-Button",onClick:function(){localStorage.setItem("Token",""),e.history.push("/")}},"Logout"))),r.a.createElement(p,{props:e}),r.a.createElement(E,null))};t(58);function h(){return r.a.createElement("div",{className:"sidediv-addpage"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"sidediv-title"},"Add Page"))))}var v=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),u=m[0],d=m[1],f=Object(n.useState)(""),p=Object(s.a)(f,2),E=p[0],g=p[1],v=Object(n.useState)(""),b=Object(s.a)(v,2),N=b[0],w=b[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),O=S[0],j=S[1],C=Object(n.useState)(""),k=Object(s.a)(C,2),x=k[0],R=k[1];function q(a){a.preventDefault(),i.a.post("/actions/addpage",{username:e.location.state.username,writer:localStorage.getItem("Token"),Q1:l,Q2:u,Q3:E,Q4:N,Q5:O,Q6:x}).then((function(a){403===a.data.code?(console.log("Success in writing slampage"),e.history.push("/Dashboard")):(alert("failed to write"),console.log("ERROR: "+a.data.message))})).catch((function(e){alert("Something went wrong! :("),console.log(e)}))}return r.a.createElement("div",{id:"addpage"},r.a.createElement("div",{id:"form-addpage"},r.a.createElement(h,null),r.a.createElement("div",{className:"form-body addpage-formbody"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:q},r.a.createElement("div",{className:"form-group question"},r.a.createElement("label",{className:"width-200px"},"My biggest dream : "),r.a.createElement("input",{type:"text",name:"Q1",className:"form-field",autoComplete:"off",value:l,onChange:function(e){return o(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group question"},r.a.createElement("label",{className:"width-200px"},"I have a crush on : "),r.a.createElement("input",{type:"text",name:"Q2",className:"form-field",autoComplete:"off",value:u,onChange:function(e){return d(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group question"},r.a.createElement("label",{className:"width-200px"},"About you I feel : "),r.a.createElement("input",{type:"text",name:"Q3",className:"form-field",autoComplete:"off",value:E,onChange:function(e){return g(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group question"},r.a.createElement("label",{className:"width-480px"},"Relationship between you and me : "),r.a.createElement("input",{type:"text",name:"Q4",className:"form-field",autoComplete:"off",value:N,onChange:function(e){return w(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group question"},r.a.createElement("label",{className:"width-345px"},"Something I like about you : "),r.a.createElement("input",{type:"text",name:"Q5",className:"form-field",autoComplete:"off",value:O,onChange:function(e){return j(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group question"},r.a.createElement("label",{className:"width-345px"},"Something I hate about you : "),r.a.createElement("input",{type:"text",name:"Q6",className:"form-field",autoComplete:"off",value:x,onChange:function(e){return R(e.target.value)},required:!0}))))),r.a.createElement("div",{className:"sidediv-submit"},r.a.createElement("a",{className:"AddPage-Submit-Button",onClick:q},r.a.createElement("i",{class:"fa fa-arrow-right"})))))},b=(t(59),t(26)),N=t(9);function w(e){var a=e.component,t=(e.authed,Object(c.a)(e,["component","authed"]));return r.a.createElement(N.b,Object.assign({},t,{render:function(e){return Boolean(localStorage.getItem("Token"))?r.a.createElement(a,e):r.a.createElement(N.a,{to:{pathname:"/Login",state:{from:e.location}}})}}))}var y=function(){return r.a.createElement(b.a,null,r.a.createElement(N.b,{exact:!0,path:"/",component:m}),r.a.createElement(N.b,{path:"/Login",component:d}),r.a.createElement(N.b,{path:"/Register",component:f}),r.a.createElement(w,{authed:Boolean(localStorage.getItem("Token")),exact:!0,path:"/Addpage",component:v}),r.a.createElement(w,{authed:Boolean(localStorage.getItem("Token")),exact:!0,path:"/Dashboard",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.hydrate(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.96e40259.chunk.js.map