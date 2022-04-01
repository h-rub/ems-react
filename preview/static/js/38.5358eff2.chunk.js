(window["webpackJsonpstar-admin-pro-react"]=window["webpackJsonpstar-admin-pro-react"]||[]).push([[38],{1191:function(e,a,t){"use strict";t.r(a),t.d(a,"Login",(function(){return d}));var l=t(11),s=t(12),r=t(14),i=t(13),c=t(0),n=t.n(c),o=t(3),m=t(228),d=function(e){Object(r.a)(c,e);var a=Object(i.a)(c);function c(){return Object(l.a)(this,c),a.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"d-flex align-items-center auth px-0"},n.a.createElement("div",{className:"row w-100 mx-0"},n.a.createElement("div",{className:"col-lg-4 mx-auto"},n.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},n.a.createElement("div",{className:"brand-logo"},n.a.createElement("img",{src:t(103),alt:"logo"})),n.a.createElement("h4",null,"Hello! let's get started"),n.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),n.a.createElement(m.a,{className:"pt-3"},n.a.createElement(m.a.Group,{className:"d-flex search-field"},n.a.createElement(m.a.Control,{type:"email",placeholder:"Username",size:"lg",className:"h-auto"})),n.a.createElement(m.a.Group,{className:"d-flex search-field"},n.a.createElement(m.a.Control,{type:"password",placeholder:"Password",size:"lg",className:"h-auto"})),n.a.createElement("div",{className:"mt-3"},n.a.createElement(o.b,{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",to:"/dashboard"},"SIGN IN")),n.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label text-muted"},n.a.createElement("input",{type:"checkbox",className:"form-check-input"}),n.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),n.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-black"},"Forgot password?")),n.a.createElement("div",{className:"mb-2"},n.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},n.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook")),n.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",n.a.createElement(o.b,{to:"/user-pages/register",className:"text-primary"},"Create"))))))))}}]),c}(c.Component);a.default=d},135:function(e,a,t){"use strict";var l=t(0),s=t.n(l).a.createContext({controlId:void 0});a.a=s},141:function(e,a,t){"use strict";var l=t(2),s=t(4),r=t(5),i=t.n(r),c=t(0),n=t.n(c),o=t(6),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=n.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,c=e.className,o=e.type,m=Object(s.a)(e,["as","className","type"]);return n.a.createElement(r,Object(l.a)({},m,{ref:a,className:i()(c,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"},a.a=u},152:function(e,a,t){"use strict";var l=t(2),s=t(4),r=t(5),i=t.n(r),c=t(0),n=t.n(c),o=t(7),m=["xl","lg","md","sm","xs"],d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.as,d=void 0===c?"div":c,u=Object(s.a)(e,["bsPrefix","className","as"]),b=Object(o.b)(t,"col"),f=[],v=[];return m.forEach((function(e){var a,t,l,s=u[e];if(delete u[e],null!=s&&"object"===typeof s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var i="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+b+i:""+b+i+"-"+a),null!=l&&v.push("order"+i+"-"+l),null!=t&&v.push("offset"+i+"-"+t)})),f.length||f.push(b),n.a.createElement(d,Object(l.a)({},u,{ref:a,className:i.a.apply(void 0,[r].concat(f,v))}))}));d.displayName="Col",a.a=d},155:function(e,a,t){"use strict";var l=t(2),s=t(4),r=t(5),i=t.n(r),c=(t(95),t(0)),n=t.n(c),o=(t(56),t(141)),m=t(135),d=t(7),u=n.a.forwardRef((function(e,a){var t,r,o=e.bsPrefix,u=e.bsCustomPrefix,b=e.type,f=e.size,v=e.id,p=e.className,N=e.isValid,x=e.isInvalid,h=e.plaintext,O=e.readOnly,y=e.custom,j=e.as,E=void 0===j?"input":j,P=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),w=Object(c.useContext)(m.a).controlId,g=y?[u,"custom"]:[o,"form-control"],C=g[0],I=g[1];if(o=Object(d.b)(C,I),h)(r={})[o+"-plaintext"]=!0,t=r;else if("file"===b){var k;(k={})[o+"-file"]=!0,t=k}else if("range"===b){var F;(F={})[o+"-range"]=!0,t=F}else if("select"===E&&y){var R;(R={})[o+"-select"]=!0,R[o+"-select-"+f]=f,t=R}else{var V;(V={})[o]=!0,V[o+"-"+f]=f,t=V}return n.a.createElement(E,Object(l.a)({},P,{type:b,ref:a,readOnly:O,id:v||w,className:i()(p,t,N&&"is-valid",x&&"is-invalid")}))}));u.displayName="FormControl",u.Feedback=o.a,a.a=u},228:function(e,a,t){"use strict";var l=t(2),s=t(4),r=t(5),i=t.n(r),c=t(0),n=t.n(c),o=(t(95),t(141)),m=t(135),d=t(7),u=n.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,b=e.isValid,f=e.isInvalid,v=e.isStatic,p=e.as,N=void 0===p?"input":p,x=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),h=Object(c.useContext)(m.a),O=h.controlId,y=h.custom?[o,"custom-control-input"]:[r,"form-check-input"],j=y[0],E=y[1];return r=Object(d.b)(j,E),n.a.createElement(N,Object(l.a)({},x,{ref:a,id:t||O,className:i()(u,r,b&&"is-valid",f&&"is-invalid",v&&"position-static")}))}));u.displayName="FormCheckInput",u.defaultProps={type:"checkbox"};var b=u,f=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,u=e.htmlFor,b=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(c.useContext)(m.a),v=f.controlId,p=f.custom?[r,"custom-control-label"]:[t,"form-check-label"],N=p[0],x=p[1];return t=Object(d.b)(N,x),n.a.createElement("label",Object(l.a)({},b,{ref:a,htmlFor:u||v,className:i()(o,t)}))}));f.displayName="FormCheckLabel";var v=f,p=n.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,u=e.bsCustomPrefix,f=e.inline,p=e.disabled,N=e.isValid,x=e.isInvalid,h=e.feedback,O=e.className,y=e.style,j=e.title,E=e.type,P=e.label,w=e.children,g=e.custom,C=e.as,I=void 0===C?"input":C,k=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),F="switch"===E||g,R=F?[u,"custom-control"]:[r,"form-check"],V=R[0],L=R[1];r=Object(d.b)(V,L);var S=Object(c.useContext)(m.a).controlId,G=Object(c.useMemo)((function(){return{controlId:t||S,custom:F}}),[S,F,t]),z=null!=P&&!1!==P&&!w,T=n.a.createElement(b,Object(l.a)({},k,{type:"switch"===E?"checkbox":E,ref:a,isValid:N,isInvalid:x,isStatic:!z,disabled:p,as:I}));return n.a.createElement(m.a.Provider,{value:G},n.a.createElement("div",{style:y,className:i()(O,r,F&&"custom-"+E,f&&r+"-inline")},w||n.a.createElement(n.a.Fragment,null,T,z&&n.a.createElement(v,{title:j},P),(N||x)&&n.a.createElement(o.a,{type:N?"valid":"invalid"},h))))}));p.displayName="FormCheck",p.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},p.Input=b,p.Label=v;var N=p,x=n.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,o=e.bsCustomPrefix,u=e.className,b=e.isValid,f=e.isInvalid,v=e.lang,p=e.as,N=void 0===p?"input":p,x=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(c.useContext)(m.a),O=h.controlId,y=h.custom?[o,"custom-file-input"]:[r,"form-control-file"],j=y[0],E=y[1];return r=Object(d.b)(j,E),n.a.createElement(N,Object(l.a)({},x,{ref:a,id:t||O,type:"file",lang:v,className:i()(u,r,b&&"is-valid",f&&"is-invalid")}))}));x.displayName="FormFileInput";var h=x,O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,o=e.className,u=e.htmlFor,b=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(c.useContext)(m.a),v=f.controlId,p=f.custom?[r,"custom-file-label"]:[t,"form-file-label"],N=p[0],x=p[1];return t=Object(d.b)(N,x),n.a.createElement("label",Object(l.a)({},b,{ref:a,htmlFor:u||v,className:i()(o,t),"data-browse":b["data-browse"]}))}));O.displayName="FormFileLabel";var y=O,j=n.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,u=e.bsCustomPrefix,b=e.disabled,f=e.isValid,v=e.isInvalid,p=e.feedback,N=e.className,x=e.style,O=e.label,j=e.children,E=e.custom,P=e.lang,w=e["data-browse"],g=e.as,C=void 0===g?"div":g,I=e.inputAs,k=void 0===I?"input":I,F=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),R=E?[u,"custom"]:[r,"form-file"],V=R[0],L=R[1];r=Object(d.b)(V,L);var S=Object(c.useContext)(m.a).controlId,G=Object(c.useMemo)((function(){return{controlId:t||S,custom:E}}),[S,E,t]),z=null!=O&&!1!==O&&!j,T=n.a.createElement(h,Object(l.a)({},F,{ref:a,isValid:f,isInvalid:v,disabled:b,as:k,lang:P}));return n.a.createElement(m.a.Provider,{value:G},n.a.createElement(C,{style:x,className:i()(N,r,E&&"custom-file")},j||n.a.createElement(n.a.Fragment,null,E?n.a.createElement(n.a.Fragment,null,T,z&&n.a.createElement(y,{"data-browse":w},O)):n.a.createElement(n.a.Fragment,null,z&&n.a.createElement(y,null,O),T),(f||v)&&n.a.createElement(o.a,{type:f?"valid":"invalid"},p))))}));j.displayName="FormFile",j.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},j.Input=h,j.Label=y;var E=j,P=t(155),w=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.children,u=e.controlId,b=e.as,f=void 0===b?"div":b,v=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(d.b)(t,"form-group");var p=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return n.a.createElement(m.a.Provider,{value:p},n.a.createElement(f,Object(l.a)({},v,{ref:a,className:i()(r,t)}),o))}));w.displayName="FormGroup";var g=w,C=(t(56),t(152)),I=n.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,o=e.bsPrefix,u=e.column,b=e.srOnly,f=e.className,v=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),N=Object(c.useContext)(m.a).controlId;o=Object(d.b)(o,"form-label");var x="col-form-label";"string"===typeof u&&(x=x+"-"+u);var h=i()(f,o,b&&"sr-only",u&&x);return v=v||N,u?n.a.createElement(C.a,Object(l.a)({as:"label",className:h,htmlFor:v},p)):n.a.createElement(r,Object(l.a)({ref:a,className:h,htmlFor:v},p))}));I.displayName="FormLabel",I.defaultProps={column:!1,srOnly:!1};var k=I,F=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.as,o=void 0===c?"small":c,m=e.muted,u=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(d.b)(t,"form-text"),n.a.createElement(o,Object(l.a)({},u,{ref:a,className:i()(r,t,m&&"text-muted")}))}));F.displayName="FormText";var R=F,V=n.a.forwardRef((function(e,a){return n.a.createElement(N,Object(l.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=N.Input,V.Label=N.Label;var L=V,S=t(57),G=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,c=e.className,o=e.validated,m=e.as,u=void 0===m?"form":m,b=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(d.b)(t,"form"),n.a.createElement(u,Object(l.a)({},b,{ref:a,className:i()(c,o&&"was-validated",r&&t+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=Object(S.a)("form-row"),G.Group=g,G.Control=P.a,G.Check=N,G.File=E,G.Switch=L,G.Label=k,G.Text=R;a.a=G}}]);
//# sourceMappingURL=38.5358eff2.chunk.js.map