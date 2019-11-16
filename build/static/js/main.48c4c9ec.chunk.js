(this["webpackJsonpface-recognition-ai"]=this["webpackJsonpface-recognition-ai"]||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1000}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5}},"opacity":{"value":0.26041872173865,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},34:function(e,t,a){e.exports=a(89)},39:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(30),s=a.n(o),r=(a(39),a(7)),l=a(8),c=a(10),m=a(9),u=a(11),h=a(31),d=a(32),p=a.n(d),g=a(16),b=a.n(g),f=(a(84),function(e){var t=e.imageUrl,a=e.boxes;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),a.map((function(e){return i.a.createElement("div",{key:e.topRow,className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})}))))}),w=(a(85),function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"nav-links"},i.a.createElement("li",{className:"item",onClick:function(){return t("signout")}},i.a.createElement("a",null,"Sign Out")))):i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav-links"},i.a.createElement("li",{className:"item",onClick:function(){return t("signin")}},i.a.createElement("a",null,"Sign In")),i.a.createElement("li",{className:"./image",onClick:function(){return t("register")}},i.a.createElement("a",null,"Register"))))}),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("https://facial-recognition-back.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.handleKeyPress=function(e){"Enter"===e.key&&a.onSubmitSignIn()},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return i.a.createElement("article",{className:"br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 white-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange,onKeyPress:this.handleKeyPress})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,onKeyPress:this.handleKeyPress}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 white input-reset ba b--white bg-transparent grow\r pointer f6 dib",type:"submit",value:"Sign In"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim white db pointer"},"Register")))))}}]),t}(i.a.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("https://facial-recognition-back.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 white ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 white lh-copy f6",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"pa2 input-reset white ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 white lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 white lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset white ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset white ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(i.a.Component),N=(a(86),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"Instructions"},"Instructions: Enter the URL of an image and click Find Face.",i.a.createElement("br",null)," Facial Recognition AI will detect any faces in the picture."),i.a.createElement("div",{className:"form center"},i.a.createElement("div",{className:"form center pa4 br3 shadow-5"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),i.a.createElement("button",{type:"submit",className:"w-30 grow f4 link ph3 pv2 dib white bg-light-red",onClick:a},"Find Face"))))}),y=(a(87),a(33)),C=new b.a.App({apiKey:"3dba087793aa45afa2bf7740b930b086"}),k={input:"",imageUrl:"",boxes:[],route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},S=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),C.models.predict(b.a.FACE_DETECT_MODEL,e.state.input).then((function(t){t&&fetch("https://facial-recognition-back.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.calculateFaceLocation=function(e){var t=document.getElementById("inputimage"),a=Number(t.width),n=Number(t.height);return e.outputs[0].data.regions.map((function(e){var t=e.region_info.bounding_box;return{leftCol:t.left_col*a,topRow:t.top_row*n,rightCol:a-t.right_col*a,bottomRow:n-t.bottom_row*n}}))},e.displayFaceBox=function(t){e.setState({boxes:t})},e.onRouteChange=function(t){"signout"===t?e.setState(k):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=k,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,o=e.boxes;return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{className:"particles",params:y}),i.a.createElement("div",{className:"head"},i.a.createElement(h.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Facial Recognition"))),i.a.createElement(w,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(f,{boxes:o,imageUrl:a})):"signin"===n?i.a.createElement(v,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(E,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(88);s.a.render(i.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");I?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.48c4c9ec.chunk.js.map