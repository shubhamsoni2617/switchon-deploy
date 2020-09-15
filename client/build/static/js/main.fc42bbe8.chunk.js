(this["webpackJsonpswitchon-client"]=this["webpackJsonpswitchon-client"]||[]).push([[0],{106:function(e,t){},109:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),s=(a(69),a(70),a(4)),l=(a(71),a(1)),i=Object(l.h)((function(e){var t=e.history;return r.a.createElement("div",{className:"topnav"},r.a.createElement("div",{className:"left-nav"},r.a.createElement(s.c,{to:"/form"},"Form"),r.a.createElement(s.c,{to:"/pending"},"Pending"),r.a.createElement(s.c,{to:"/approved"},"Approved"),r.a.createElement(s.c,{to:"/rejected"},"Rejected"),r.a.createElement(s.c,{to:"/request"},"Request(for Approval)")),r.a.createElement("div",{className:"right-nav"},r.a.createElement(s.c,{to:"/notifications"},r.a.createElement("img",{src:"".concat("","/bell.svg"),alt:"notification-icon"})),"/signup"===t.location.pathname||"/login"===t.location.pathname?r.a.createElement(r.a.Fragment,null,"/login"===t.location.pathname&&r.a.createElement(s.c,{className:"auth",to:"/signup"},"Signup"),"/signup"===t.location.pathname&&r.a.createElement(s.c,{className:"auth",to:"/login"},"Login")):r.a.createElement("span",{onClick:function(){sessionStorage.clear(),t.push("/login")}},"Logout")))})),u=a(9),m=a.n(u),p=a(12),d=a(2),f=a(23),E=a.n(f),v=a(24),g=a.n(v),h=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(e){e.addEventListener("mouseenter",g.a.stopTimer),e.addEventListener("mouseleave",g.a.resumeTimer)}}),b=function(e,t){h.fire({icon:e,title:t})},O=(a(52),a(109),document.getElementById("modal")),j=function(e){var t=e.isLoading,a=e.children,o=document.createElement("div");return Object(n.useEffect)((function(){return O.appendChild(o),function(){return O.removeChild(o)}}),[o]),t?Object(c.createPortal)(r.a.createElement("div",{className:"modal"},a),o):null},N=function(e){var t=e.isLoading;return r.a.createElement(j,{isLoading:t},r.a.createElement("img",{src:"".concat("","/loading.svg"),alt:"loader"}))},y=a(62),S=function(){return sessionStorage.getItem("CC_Token")},T=a.n(y).a.create({baseURL:"/"}),_=Object(l.h)((function(e){var t=e.history,a=e.dispatch,c=e.setupSocket,o=Object(n.useState)(""),l=Object(d.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),f=p[0],E=p[1],v=Object(n.useState)(!1),g=Object(d.a)(v,2),h=g[0],O=g[1];return r.a.createElement("div",{className:"card"},r.a.createElement(N,{isLoading:h}),r.a.createElement("div",{className:"cardHeader"},"Login"),r.a.createElement("div",{className:"cardBody"},r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"abc@example.com",value:i,onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Your Password",value:f,onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("button",{onClick:function(){O(!0),T.post("/login",{email:i,password:f}).then((function(e){b("success",e.data.message),a({type:"SET_USER_DATA",payload:e.data}),O(!1),sessionStorage.setItem("CC_Token",e.data.token),t.push("/form"),c()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.message&&(O(!1),b("error",e.response.data.message))}))}},"Login")),r.a.createElement(s.b,{to:"/signup"},"Signup Instead"))})),k=(a(126),function(e){var t=e.state,a=e.dispatch,c=e.socket,o=t.user,s=void 0===o?{}:o,i=t.departments,u=void 0===i?[]:i,f=t.usersOfOtherDepartment,E=void 0===f?[]:f,v=Object(n.useState)("Select"),g=Object(d.a)(v,2),h=g[0],O=g[1],j=Object(n.useState)(""),y=Object(d.a)(j,2),_=y[0],k=y[1],A=Object(n.useState)(!1),R=Object(d.a)(A,2),D=R[0],P=R[1],w=Object(n.useState)(!1),U=Object(d.a)(w,2),x=U[0],I=U[1],q=Object(l.g)(),C=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,T.post("/form",{message:_,department:u.find((function(e){return e!==s.department})),approverId:h,approverName:E.find((function(e){return e.approverId===h})).username},{headers:{Authorization:"Bearer "+S()}});case 4:t=e.sent,c.emit("formSubmit",{response:t.data.formData}),a({type:"UPDATE_PENDING_REQUESTS",payload:t.data.formData}),k(""),O("Select"),I(!1),b("success",t.data.message),q.push("/pending"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message&&(I(!1),b("error",e.t0.response.data.message));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card form"},r.a.createElement(N,{isLoading:x}),r.a.createElement("div",{className:"cardHeader"},"Form"),r.a.createElement("div",{className:"cardBody"},r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"name"},"Created By"),s.username&&r.a.createElement("input",{name:"name",value:s.username,disabled:!0,placeholder:"John Doe"})),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"department"},"Department To Assign"),s.department&&r.a.createElement("input",{name:"department",value:u.find((function(e){return e!==s.department})),disabled:!0,placeholder:"John Doe"})),r.a.createElement("div",{className:"select"},r.a.createElement("label",{htmlFor:"department"},"Assign To"),r.a.createElement("select",{value:h,placeholder:"select",onChange:function(e){var t=e.target;return O(t.value)}},r.a.createElement("option",{disabled:!0},"Select"),E.map((function(e){return r.a.createElement("option",{key:e.approverId,value:e.approverId},e.username)})))),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",null,"Message"),r.a.createElement("textarea",{onChange:function(e){var t=e.target;return k(t.value)},value:_,placeholder:"Type your message here..."})),D&&r.a.createElement("p",{className:"error"},"All fields are required"),r.a.createElement("button",{onClick:function(){("Select"===h?P(!0):_?(P(!1),1):P(!0))&&C()}},"Submit")))}),A=a(63),R=function(e){var t=e.component,a=e.compProps,n=Object(A.a)(e,["component","compProps"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return S()?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},D=function(e){e.socket;var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),f=u[0],v=u[1],g=Object(n.useState)(""),h=Object(d.a)(g,2),O=h[0],j=h[1],y=Object(n.useState)("Department 1"),S=Object(d.a)(y,2),_=S[0],k=S[1],A=Object(n.useState)(!1),R=Object(d.a)(A,2),D=R[0],P=R[1],w=Object(l.g)(),U=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,T.post("/register",{username:c,email:f,password:O,department:_});case 4:t=e.sent,E()("http://localhost:8000",{query:{username:c,department:_,approverId:t.data.approverId}}),P(!1),b("success",t.data.message),w.push("/login"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message&&(P(!1),b("error",e.t0.response.data.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"card"},r.a.createElement(N,{isLoading:D}),r.a.createElement("div",{className:"cardHeader"},"Singup"),r.a.createElement("div",{className:"cardBody"},r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"name"},"Username"),r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"John Doe",value:c,onChange:function(e){var t=e.target;return o(t.value)}})),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"abc@example.com",value:f,onChange:function(e){var t=e.target;return v(t.value)}}))),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Your Password",value:O,onChange:function(e){var t=e.target;return j(t.value)}})),r.a.createElement("div",{className:"inputGroup"},r.a.createElement("p",{className:"department-label",htmlFor:"department"},"Department"),r.a.createElement("select",{value:_,placeholder:"select",onChange:function(e){var t=e.target;return k(t.value)}},["Department 1","Department 2"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("button",{onClick:U},"Register"),r.a.createElement(s.b,{to:"/login"},"Login Instead"))},P=a(18),w=a(15),U=a(5),x={user:{},departments:[],usersOfOtherDepartment:[],pending:[],approved:[],rejected:[],approvalRequest:[],notifications:[]},I=function(e,t){var a,n=t.type,r=t.payload;switch(n){case"SET_USER_DATA":return{user:r.user,departments:r.departments,usersOfOtherDepartment:r.usersOfOtherDepartment,pending:r.userForms.pending,approved:r.userForms.approved,rejected:r.userForms.rejected,approvalRequest:r.approvalRequest,notifications:r.notifications};case"UPDATE_PENDING_REQUESTS":return Object(U.a)(Object(U.a)({},e),{},{pending:[].concat(Object(w.a)(e.pending),[r])});case"UPDATE_APPROVAL_REQUESTS":return Object(U.a)(Object(U.a)({},e),{},{approvalRequest:[].concat(Object(w.a)(e.approvalRequest),[r])});case"UPDATE_REQUEST":return Object(U.a)(Object(U.a)({},e),{},{approvalRequest:e.approvalRequest.filter((function(e){return e._id!==r}))});case"UPDATE_USER_FORMS":var c=e.pending.find((function(e){return e._id===r._id}));return c?(c.state=r.state,Object(U.a)(Object(U.a)({},e),{},(a={},Object(P.a)(a,r.state,[].concat(Object(w.a)(e[r.state]),[c])),Object(P.a)(a,"pending",e.pending.filter((function(e){return e._id!==r._id}))),a))):e;case"UPDATE_NOTIFICATIONS":return Object(U.a)(Object(U.a)({},e),{},{notifications:[].concat(Object(w.a)(e.notifications),[r])});case"UPDATE_OTHER_DEPARTMENT_USER":return Object(U.a)(Object(U.a)({},e),{},{usersOfOtherDepartment:[].concat(Object(w.a)(e.usersOfOtherDepartment),[r])});default:return e}},q=function(e){var t=e.pending;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("p",{className:"user-form",key:e._id},"A new request ",r.a.createElement("span",{className:"form-id"},"#",e._id)," has been submitted by you to ",e.approverName,' having message "',e.message,'"')})),!t.length&&r.a.createElement("h3",null,"No results found"))},C=function(e){var t=e.approved;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("p",{className:"user-form",key:e._id},"The request ",r.a.createElement("span",{className:"form-id"},"#",e._id)," from you has been approved by ",e.approverName,' having message "',e.message,'"')})),!t.length&&r.a.createElement("h3",null,"No results found"))},F=function(e){var t=e.rejected;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("p",{className:"user-form",key:e._id},"The request ",r.a.createElement("span",{className:"form-id"},"#",e._id)," from you has been rejected by ",e.approverName,' having message "',e.message,'"')})),!t.length&&r.a.createElement("h3",null,"No results found"))},L=(a(127),function(e){var t=e.approvalRequest,a=e.userId,c=e.socket,o=e.dispatch,s=Object(n.useState)(!1),l=Object(d.a)(s,2),i=l[0],u=l[1],f=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,T.patch("/form",{payload:t},{headers:{Authorization:"Bearer "+S()}});case 4:a=e.sent,c.emit("stateUpdate",{response:{payload:t}}),u(!1),o({type:"UPDATE_REQUEST",payload:t._id}),b("success",a.data.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message&&(u(!1),b("error",e.t0.response.data.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(N,{isLoading:i}),t.map((function(e){return r.a.createElement("div",{className:"user-form",key:e._id},r.a.createElement("p",null,"A new request ",r.a.createElement("span",{className:"form-id"},"#",e._id)," has been submitted by ",e.requestor," to"," ",e.approverId===a?"you":e.approverName," ",'having message "',e.message,'"'),e.approverId===a&&r.a.createElement("div",{className:"approval-button"},r.a.createElement("button",{onClick:function(){var t=Object(U.a)(Object(U.a)({},e),{},{state:"approved"});f(t)}},"Approve"),r.a.createElement("button",{onClick:function(){var t=Object(U.a)(Object(U.a)({},e),{},{state:"rejected"});f(t)}},"Reject")))})),!t.length&&r.a.createElement("h3",null,"No results found"))}),B=function(e){var t=e.notifications,a=e.username;return r.a.createElement("div",null,t.map((function(e){return"pending"===e.state?r.a.createElement("p",{className:"user-form",key:e.formId},"A new request"," ",r.a.createElement("span",{className:"form-id"},"#",e.formId)," has been submitted by"," ",e.requestor===a?"you":e.requestor," ","to"," ",e.approverName===a?"you":e.approverName," ",'having message "',e.message,'"'):r.a.createElement("p",{className:"user-form",key:e.formId},"The request ",r.a.createElement("span",{className:"form-id"},"#",e.formId)," ","from"," ",e.requestor===a?"you":e.requestor," ","has been ",e.state," by"," ",e.approverName===a?"you":e.approverName," ",'having message "',e.message,'"')})),!t.length&&r.a.createElement("h3",null,"No results found"))},G=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),i=s[0],u=s[1],f=Object(l.g)(),v=Object(n.useReducer)(I,x),g=Object(d.a)(v,2),h=g[0],O=g[1],j=function e(){if(!a){var t=E()("http://localhost:8000",{query:{token:S()}});t.on("disconnect",(function(){c(null),setTimeout(e,3e3)})),t.on("connect",(function(){})),c(t)}};return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,u(!0),e.next=6,T.get("/userdata",{headers:{Authorization:"Bearer "+S()}});case 6:t=e.sent,O({type:"SET_USER_DATA",payload:t.data}),j(),u(!1),e.next=21;break;case 12:if(e.prev=12,e.t0=e.catch(2),u(!1),console.log(111,f.location.pathname),sessionStorage.clear(),"/login"!==f.location.pathname&&"/signup"!==f.location.pathname){e.next=19;break}return e.abrupt("return");case 19:b("error","User not authenticated"),f.push("/login");case 21:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){a&&(a.on("approvalDepartment",(function(e){O({type:"UPDATE_APPROVAL_REQUESTS",payload:e})})),a.on("stateUpdated",(function(e){O({type:"UPDATE_USER_FORMS",payload:e})})),a.on("notification",(function(e){O({type:"UPDATE_NOTIFICATIONS",payload:e}),b("info","New Notification")})),a.on("newUser",(function(e){b("info","New user registered"),O({type:"UPDATE_OTHER_DEPARTMENT_USER",payload:e})})))}),[a]),r.a.createElement("div",{className:"container"},r.a.createElement(N,{isLoading:i}),r.a.createElement(l.d,null,r.a.createElement(l.a,{from:"/",to:"/".concat(S()?"form":"login"),exact:!0}),r.a.createElement(l.b,{path:"/login",render:function(e){return r.a.createElement(_,Object.assign({setupSocket:j,dispatch:O},e))},exact:!0}),r.a.createElement(l.b,{path:"/signup",render:function(e){return r.a.createElement(D,Object.assign({},e,{socket:a,exact:!0}))}}),r.a.createElement(R,{path:"/form",component:k,compProps:{state:h,dispatch:O,socket:a},exact:!0}),r.a.createElement(R,{path:"/pending",component:q,compProps:{pending:h.pending},exact:!0}),r.a.createElement(R,{path:"/rejected",component:F,compProps:{rejected:h.rejected},exact:!0}),r.a.createElement(R,{path:"/approved",component:C,compProps:{approved:h.approved},exact:!0}),r.a.createElement(R,{path:"/request",component:L,compProps:{approvalRequest:h.approvalRequest,userId:h.user._id,socket:a,dispatch:O},exact:!0}),r.a.createElement(R,{path:"/notifications",component:B,compProps:{notifications:h.notifications,username:h.user.username},exact:!0})))},Q=function(){return r.a.createElement(s.a,null,r.a.createElement(i,null),r.a.createElement(G,null))};o.a.render(r.a.createElement(Q,null),document.getElementById("root"))},52:function(e,t,a){},64:function(e,t,a){e.exports=a(128)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.fc42bbe8.chunk.js.map