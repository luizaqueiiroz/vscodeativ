"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42068],{481177:(e,t,a)=>{a.d(t,{Z:()=>s});let s={AMP_TRACKING_DOMAIN:"amp.pinterest.com",BoardPrivacy:{SECRET:"secret",PUBLIC:"public",PROTECTED:"protected"},BoardType:{PROTECTED:"protected"},BulkAction:{MOVE:"bulkMove",COPY:"bulkCopy",CREATE_SECTION:"bulkCreateSection",DELETE:"bulkDelete"},MAX_CHARS_FOR_BOARD_PIN_DESCRIPTION:500,MAX_CHARS_FOR_BOARD_TITLE:50,MAX_CHARS_FOR_FIRST_NAME:30,MAX_FETCH_NUM_FOLLOWERS_PER_PAGE:50,MAX_STORED_VISITED_PIN_PAGES:10,VIDEO_IFRAME_ID:"video-iframe"}},901855:(e,t,a)=>{a.d(t,{Hv:()=>l,aX:()=>p,nK:()=>d});var s=a(667294),n=a(616550),i=a(342513),r=a(785893);let{Provider:o,useHook:l}=(0,i.Z)("HistoryStackContext",{previous:[],current:null,forward:[]}),c=e=>e&&e.pathname?e.pathname+(e.search||""):"";function u(e,t){let a={action:t.type,location:t.location,match:t.match};if(t.location===e.current?.location)return e;switch(t.type){case"POP":if(e.forward.length>0&&c(e.forward[0].location)===c(a.location))return{...e,forward:e.forward.slice(1),current:{...e.forward[0],action:t.type},previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};return{...e,forward:e.current?[{action:e.current.action,location:e.current.location,match:e.current.match},...e.forward]:e.forward,current:{...e.previous.slice(-1)[0],action:t.type},previous:e.previous.slice(0,-1)};case"PUSH":return{...e,forward:e.forward.length>0?[]:e.forward,current:a,previous:e.current?[...e.previous,{action:e.current.action,location:e.current.location,match:e.current.match}]:e.previous};case"REPLACE":return{...e,current:a};default:return e}}function p(){let{current:e,previous:t}=l();return(0,s.useMemo)(()=>e?t.concat(e):t,[e,t])}function d({children:e}){let t=(0,n.k6)(),a=(0,n.TH)(),i=(0,n.$B)(),l={forward:[],current:{action:t.action,location:a,match:i},previous:[]},[c,p]=(0,s.useReducer)(u,l);return(0,s.useEffect)(()=>{let{action:e}=t;p({type:e,location:a,match:i})},[a]),(0,r.jsx)(o,{value:c,children:e})}},406893:(e,t,a)=>{a.d(t,{Z:()=>i}),a(441143);var s=a(785893);class n{static factory(e){return e instanceof n?e:new n(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function i(e){let{css:t,unsafeCSS:a,...i}=e,r=String(t||"")||a||"";return r?(0,s.jsx)("style",{...i,dangerouslySetInnerHTML:{__html:String(n.factory(r))}}):null}},922719:(e,t,a)=>{a.d(t,{CC:()=>n,Ll:()=>r,XF:()=>i});let s=(e,t,a)=>({x:Math.floor(e*Math.cos(a)),y:Math.floor(t*Math.sin(a))}),n=(e,t)=>s(t/2,e/2,2*Math.random()*Math.PI),i=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,r=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},587703:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(214877);let n=()=>(0,s.v)().logContextEvent},847160:(e,t,a)=>{a.d(t,{Bx:()=>n,N4:()=>r,is:()=>o,lt:()=>s,oM:()=>i});let s=e=>e.bt("Está quase! Inicia sessão para aceder a todas as funcionalidades do Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),n=e=>e.bt("Inicia sessão para guardar este Pin", "Log in to save this Pin", "limitedLogin.modalHeader.repin", undefined, true),i=e=>e.bt("Inicia sessão para editar este Pin", "Log in to edit this Pin", "limitedLogin.modalHeader.editPin", undefined, true),r=({i18n:e,toFollow:t})=>t?e.bt("Inicia sessão para seguir", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Inicia sessão para deixar de seguir", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true),o=e=>e.bt("Inicia sessão para criar um Pin ou álbum", "Log in to create a Pin or board", "limitedLogin.modalHeader.create", undefined, true)},515278:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(847160),n=a(140017),i=a(166770);let r=()=>{let{loginForMore:e,viewer:t,limitedLoginModalSubheader:a}=(0,i.H)(),r=(0,n.ZP)();return"AUTH"===t.type?null:t=>{e?.setVisible(!0),a?.setText(t?.loginModalHeader||s.lt(r))}}},103322:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(667294),n=a(701785),i=a(953565);function r(e,t,a){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class o extends s.Component{constructor(...e){super(...e),r(this,"state",{error:null,info:null}),r(this,"resetError",()=>{this.setState({error:null,info:null})})}componentDidCatch(e,t){try{let{name:t}=this.props,a=this.props.type||"secondary";(0,n.T)({extraData:e.extraData??{},errorBoundary:t,errorBoundaryType:a,message:e.message,name:e.name,stack:e.stack}),(0,i.nP)("react.error_boundary",{sampleRate:.1,tags:{component:void 0,name:this.props.name}})}catch(e){(0,i.nP)("react.error_boundary.error",{sampleRate:1,tags:{name:this.props.name}})}this.setState({error:e,info:t})}render(){let{renderErrorState:e}=this.props,{error:t,info:a}=this.state;return t&&a?e?e({error:t,info:a,resetError:this.resetError}):null:this.props.children}}},25919:(e,t,a)=>{let s;a.d(t,{Am:()=>f,Ig:()=>b,N:()=>v,Sd:()=>_,YX:()=>y,be:()=>g,fO:()=>d,kd:()=>x,pz:()=>m});var n=a(667294),i=a(216167),r=a(587703),o=a(703404),l=a(957753),c=a(372085),u=a(953565);let p=(e,t,a={})=>(0,u.nP)(`${e}.${t}`,{sampleRate:1,tags:a}),d=(e,t)=>a=>i.Z.create("UserExperiencePlatformResource",t?{extra_context:e,targeting:t}:{extra_context:e}).callGet().then(e=>e.resource_response?a((0,l.OD)(e.resource_response.data)):void 0),m=(e,t,a,n)=>(r,c)=>{if(t)return Promise.resolve();if(n&&(s=n),1===e.length){let t=e[0],s=c().experiences[t];if(JSON.stringify(s?.extraContext||null)===JSON.stringify(a)||(0,o.E3)(s)&&!(a&&Object.keys(a).length>0))return Promise.resolve()}return i.Z.create("UserExperienceResource",{placement_ids:e,extra_context:a||null,targeting:n}).callGet().then(e=>e.resource_response?r((0,l.cL)(e.resource_response.data)):void 0)},h=(e,t,a,n)=>(r,o,c,u=!1,p,m)=>(h,b)=>{let{experiences:g,experiencesMulti:f}=b(),_=null,x=!0;if(u||(_=(x=g[r]&&g[r].experience_id===o)?g[r]:Array.isArray(f[r])&&f[r]?.find(e=>e.experience_id===o)),_&&_.experience_id===o||u&&r&&o){let u=i.Z.create(e,{placed_experience_id:`${r}%3A${o}`,extra_context:p??{},targeting:m}),b=x?l.Yb:l.xW;switch(t){case"dismissed":return u.callDelete().then(()=>{h(b(r,o,t)),h(d(void 0,s)),a&&n&&a({event_type:n,object_id_str:o.toString()})});case"completed":return u.callUpdate().then(()=>{!c&&(h(b(r,o,t)),h(d(void 0,s)),a&&n&&a({event_type:n,object_id_str:o.toString()}))});case"viewed":return h(b(r,o,t)),u.callUpdate().then(()=>{1000162===r&&h(d()),a&&n&&a({event_type:n,object_id_str:o.toString()})});case"completedWithoutHomefeed":return u.callUpdate().then(()=>{c||h(b(r,o,t)),a&&n&&a({event_type:n,object_id_str:o.toString()})})}}return Promise.resolve()},b=()=>{let e=(0,r.Z)();return(0,n.useCallback)(h("UserExperienceViewedResource","viewed",e,4503),[e])},g=()=>{let e=(0,r.Z)();return(0,n.useCallback)(h("UserExperienceCompletedResource","completed",e,6567),[e])},f=()=>{let e=(0,r.Z)();return(0,n.useCallback)(h("UserExperienceResource","dismissed",e,6568),[e])},_=()=>{let e=(0,r.Z)();return(0,n.useCallback)(h("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e])},x=(e,t)=>(a,s)=>{let{experiences:n}=s(),i=n[e];i&&i.triggerable_placed_exps&&i.triggerable_placed_exps.length&&i.triggerable_placed_exps.forEach(a=>{let[,s]=a.split(":"),n=t;i.metadata&&i.metadata[s]&&(n={...t,...i.metadata[s]}),(0,c.Z)({url:`/v3/experiences/${a.replace(":","%3A")}/trigger/`,method:"PUT",data:n?{extra_context:JSON.stringify(n,null,1)}:{}}).then(()=>{p("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:s})})})},y=e=>(t,a)=>{t(x(e));let{experiences:s}=a();return s[e]},v=(e,t,a)=>n=>{a&&(s=a),n(x(e,t)),t&&Object.keys(t).length>0&&n(m([e],!1,t,a))}},703404:(e,t,a)=>{a.d(t,{A0:()=>l,E3:()=>r,MQ:()=>o,fL:()=>c});var s=a(883119),n=a(862249),i=a(785893);function r(e){return!!e&&0!==e.type}let o=(e,t,a)=>{let s=e[a];return t[a]&&r(s)?s:null};function l(e){return e.display_data?.anchor}let c=e=>{let t=new DOMParser().parseFromString(e,"text/html"),a=[...t.body?.childNodes||[]].map(e=>{if("A"!==e.nodeName)return(0,i.jsx)(s.xv,{inline:!0,children:e.textContent});{let t=e.href||"",a=(0,n.Z)({url:t});return(0,i.jsx)(s.rU,{display:"inline",externalLinkIcon:a?"default":"none",href:t,rel:a?"nofollow":"none",target:"blank",children:e.textContent})}});return(0,i.jsx)(s.xv,{inline:!0,children:a})}},26616:(e,t,a)=>{a.d(t,{$S:()=>s,V$:()=>n,_4:()=>r,iY:()=>o,mR:()=>i});let s="REFRESH_ALL_EXPERIENCES_MULTI",n="UPDATE_EXPERIENCE_MULTI",i="FETCH_EXPERIENCES",r="REFRESH_ALL_EXPERIENCES",o="UPDATE_EXPERIENCE"},957753:(e,t,a)=>{a.d(t,{NW:()=>o,OD:()=>c,Yb:()=>l,cL:()=>u,xW:()=>r});var s=a(216167),n=a(26616);let i=e=>({type:n.$S,payload:{experiencesMulti:e}}),r=(e,t,a)=>({type:n.V$,payload:{placementId:e,experienceId:t,status:a}}),o=e=>t=>s.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(i(e.resource_response.data)):void 0),l=(e,t,a)=>({type:n.iY,payload:{placementId:e,experienceId:t,status:a}}),c=e=>({type:n._4,payload:{experiences:e}}),u=e=>({type:n.mR,payload:{experiences:e}})},372085:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(216167);function n({url:e,method:t,data:a,ignoreBookmark:n,callOptions:i}){let r={url:e,data:a,...null!=n?{ignore_bookmark:n}:{},..."PATCH"===t?{patchInsteadOfPut:!0}:{}},o=s.Z.create("ApiResource",r);switch(t){case"POST":return o.callCreate(i);case"PUT":case"PATCH":return o.callUpdate(i);case"DELETE":return o.callDelete(i);default:return o.callGet(i)}}},215245:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var s=a(667294),n=a(883119),i=a(214877),r=a(103322);function o(e,t,a){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let l={};function c(e){let t=l[e];return t&&t.screenWidth===window.innerWidth||(l[e]={screenWidth:window.innerWidth}),l[e]}let u=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class p{constructor(){o(this,"idMap",new Map),o(this,"objMap",new WeakMap)}get(e){let t=u(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=u(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let a=u(e);a&&this.idMap.set(a,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}var d=a(876594),m=a(922719),h=a(406893),b=a(785893);let g=`shimmer {
  0% {
    background-position: -100vw 0;
  }

  100% {
    background-position: 100vw 0;
  }
}`,f={display:"flex",flexDirection:"column",position:"relative",backgroundColor:`${d.BfK}`,background:`linear-gradient(
    to right,
    lightgrey 45%,
    #f5f5f5 50%,
    lightgrey 55%
  )`,content:"",animation:"shimmer 2s infinite linear",backgroundSize:"200vw 100%",backgroundAttachment:"fixed",width:"100%",borderRadius:"16px"},_=()=>200*Math.random()+200,x=[void 0,void 0,void 0,void 0].map(()=>[{height:_()},{height:_()},{height:_()},{height:_()},{height:_()},{height:_()}]).flat();function y({data:e}){let{height:t}=e;return(0,b.jsxs)(s.Fragment,{children:[(0,b.jsx)(h.Z,{unsafeCSS:(0,m.Ll)([g])}),(0,b.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:f},children:(0,b.jsx)(n.xu,{height:t})})]})}var v=a(547643),w=a(213377),L=a(340523),I=a(5859),E=a(554786),C=a(953565),X=a(84768);function S({analyticsData:e,children:t,idx:a,isMeasuring:n,masonryV2ExpName:i,masonryV2ExpGroup:o}){let l=(0,E.ZP)(),{isAuthenticated:c}=(0,I.B)(),u=(0,X.MM)();return(0,s.useEffect)(()=>{if(e.current[a]){let{fetchTimestamp:t,measureTimestamp:s,hasRendered:r,pageCount:p}=e.current[a]??{},d={deviceType:l,experimentName:i,experimentGroup:o,handlerId:u,isAuthenticated:c,pageCount:p};n&&!s&&(e.current[a].measureTimestamp=Date.now(),(0,C.LY)("webapp.masonry.itemMeasureStart",Date.now()-t,{tags:d})),n||r||((0,C.LY)("webapp.masonry.itemRenderStart",Date.now()-s,{tags:d}),e.current[a].hasRendered=!0)}},[n]),(0,b.jsx)(r.Z,{name:"MasonryItem",children:t})}function P(e){let{align:t,cacheKey:a,id:o,isGridCentered:l=!0,items:u,layout:d,loadItems:m,masonryRef:g,renderItem:f,scrollContainerRef:_,virtualize:P=!0,_getColumnSpanConfig:A,useLoadingState:W}=e,M=(0,E.ZP)(),{isAuthenticated:T,isRTL:j}=(0,I.B)(),{logContextEvent:R}=(0,i.v)(),D=(0,L.F)(),$="desktop"===M,k=(0,X.MM)(),O=(0,s.useRef)(u.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),Z=e.columnWidth??w.yF,F=e.gutterWidth??($?w.oX:1),H=e.minCols??w.yc,N=e.serverRender??!!$,B="flexible"===d||"desktop"!==M,U=N?"serverRenderedFlexible":"flexible",z=(0,s.useRef)(0),Y=Z+F,V=function(e){if(null==e)return;let t=c(e);return t.positionCache||(t.positionCache=new p),t.positionCache}(a),G=function(e){if(null==e)return;let t=c(e);return t.measurementCache||(t.measurementCache=new p),t.measurementCache}(a),K=(0,s.useCallback)(()=>_?.current||window,[_]),J=(0,s.useRef)(!0),{anyEnabled:Q}=D.checkExperiment("web_masonry_ssr_container_query"),q=l&&J.current?"gridCentered":"",{className:ee,styles:et}=function(e){let t=`m_${Object.keys(e).reduce((t,a)=>{let s=e[a];return null==s||"object"==typeof s||"function"==typeof s?t:"boolean"==typeof s?t+(s?"t":"f"):t+s},"").replace(/\:/g,"\\:")}`,{flexible:a,gutterWidth:s,isRTL:n,itemWidth:i,maxColumns:r,minColumns:o,items:l,_getColumnSpanConfig:c}=e,u=c?l.map((e,t)=>({index:t,columnSpanConfig:c(e)??1})).filter(e=>1!==e.columnSpanConfig):[],p=i+s,d=Array.from({length:r+1-o},(e,t)=>t+o).map(e=>{let l=e===o?0:e*p,c=e===r?null:(e+1)*p-1,{styles:d,numberOfVisibleItems:m}=u.reduce((n,r)=>{let{columnSpanConfig:o}=r,l=Math.min(function({columnCount:e,columnSpanConfig:t}){return"number"==typeof t?t:t[e<=2?"sm":e<=4?"md":e<=8?"lg":"xl"]??1}({columnCount:e,columnSpanConfig:o}),e),c=null!=r.index&&n.numberOfVisibleItems>=l+r.index,u=a?100/e*l:i*l+s*(l-1),{numberOfVisibleItems:p}=n;return c?p-=l-1:r.index<p&&(p+=1),{styles:n.styles.concat(function({className:e,index:t,columnSpanConfig:a,visible:s,width:n,flexible:i}){let r="number"==typeof a?a:btoa(JSON.stringify(a));return i?`
      .${e} .static[data-column-span="${r}"]:nth-child(${t+1}) {
        visibility: ${s?"visible":"hidden"} !important;
        position: ${s?"inherit":"absolute"} !important;
        width: ${n}% !important;
      }`:`
      .${e} .static[data-column-span="${r}"]:nth-child(${t+1}) {
        visibility: ${s?"visible":"hidden"} !important;
        position: ${s?"inherit":"absolute"} !important;
        width: ${n}px !important;
      }`}({className:t,index:r.index,columnSpanConfig:o,visible:c,width:u,flexible:a})),numberOfVisibleItems:p}},{styles:"",numberOfVisibleItems:e}),h=a?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*p}px;
      }

      .${t} .static {
        width: ${i}px !important;
      }
    `;return{minWidth:l,maxWidth:c,styles:`
      .${t} .static:nth-child(-n+${m}) {
        position: static !important;
        visibility: visible !important;
        float: ${n?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${s/2}px;
      }

      ${h}

      ${d}
    `}}),m=d.map(({minWidth:e,maxWidth:t,styles:a})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${a}
    }
  `),h=d.map(({minWidth:e,maxWidth:t,styles:a})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${a}
    }
  `),b=e.enableContainerQuery?`
    ${m.join("")}
    @supports not (container-type: inline-size) {
      ${h.join("")}
    }
  `:h.join("");return{className:t,styles:`
    .masonryContainer {
      container-type: inline-size;
    }

    .gridCentered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${b}
  `}}({gutterWidth:F,flexible:B,items:u,isRTL:j,itemWidth:Z,maxColumns:e.maxColumns??Math.max(u.length,w.g5),minColumns:H,enableContainerQuery:Q,_getColumnSpanConfig:A}),ea=`${q} ${ee}`.trim(),{anyEnabled:es,expName:en,group:ei,isMeasureAllEnabled:er}=(0,v.Z)(),eo=(0,s.useMemo)(()=>!G||u.every(e=>!G.has(e)),[]),el=ei&&eo,ec=(0,s.useRef)(),eu=(0,s.useRef)(u.length),ep=(0,s.useRef)(0);(0,s.useEffect)(()=>{el&&u.forEach((e,t)=>{O.current[t]||(O.current[t]={fetchTimestamp:Date.now(),measureTimestamp:0,hasRendered:!1,pageCount:ep.current})}),eu.current=u.length,ep.current+=1},[u]),(0,s.useEffect)(()=>{J.current&&(J.current=!1)},[]),(0,s.useEffect)(()=>{let e=()=>z.current+=1;return el&&(ec.current=Date.now(),window.addEventListener("scroll",e)),()=>{if(el){let t=O.current;window.removeEventListener("scroll",e);let a=t.filter(e=>!!e.measureTimestamp).length,s=t.filter(e=>e.hasRendered).length,n=eu.current,i={deviceType:M,experimentName:en,experimentGroup:ei,handlerId:k,isAuthenticated:T};(0,C.LY)("webapp.masonry.timeSpent",ec.current?Date.now()-ec.current:0,{tags:i}),(0,C.S0)("webapp.masonry.itemsFetched",n,{tags:i}),(0,C.S0)("webapp.masonry.itemsMeasured",a,{tags:i}),(0,C.S0)("webapp.masonry.itemsMeasuredPercentage",Math.floor(a/n*100),{tags:i}),(0,C.S0)("webapp.masonry.itemsRendered",s,{tags:i}),(0,C.S0)("webapp.masonry.itemsRenderedPercentage",Math.floor(s/n*100),{tags:i}),(0,C.S0)("webapp.masonry.scrollCount",z.current,{tags:i})}}},[]);let ed=(0,s.useCallback)(e=>el?(0,b.jsx)(S,{analyticsData:O,idx:e.itemIdx,isMeasuring:e.isMeasuring,masonryV2ExpGroup:ei,masonryV2ExpName:en,children:(0,b.jsx)(r.Z,{name:"MasonryItem",children:f(e)})}):(0,b.jsx)(r.Z,{name:"MasonryItem",children:f(e)}),[f]);return(0,b.jsx)("div",{className:"masonryContainer","data-test-id":"masonry-container",id:o,children:(0,b.jsxs)("div",{className:ea,children:[N&&J.current?(0,b.jsx)(h.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:et}):null,(0,b.jsx)(n.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?Y*e.maxColumns:void 0,children:es?(0,b.jsx)(n.GX,{ref:e=>{g&&(g.current=e)},_getColumnSpanConfig:A,_logTwoColWhitespace:e=>{(0,C.S0)("webapp.masonry.twoColWhitespace",e,{sampleRate:1,tags:{columnWidth:Z,minCols:H}}),R({event_type:14705,component:14468,aux_data:{whitespace_px:e}})},_measureAll:er,align:t,columnWidth:Z,gutterWidth:F,items:u,layout:B?U:d??"basic",loadItems:m,measurementStore:G,minCols:H,positionStore:V,renderItem:ed,scrollContainer:K,virtualBufferFactor:.3,virtualize:P}):(0,b.jsx)(n.Rk,{ref:e=>{g&&(g.current=e)},_getColumnSpanConfig:A,_loadingStateItems:W?x:void 0,_logTwoColWhitespace:e=>{(0,C.S0)("webapp.masonry.twoColWhitespace",e,{sampleRate:1,tags:{columnWidth:Z,minCols:H}}),R({event_type:14705,component:14468,aux_data:{whitespace_px:e}})},_renderLoadingStateItems:W?({data:e})=>(0,b.jsx)(y,{data:e}):void 0,align:t,columnWidth:Z,gutterWidth:F,items:u,layout:B?U:d??"basic",loadItems:m,measurementStore:G,minCols:H,positionStore:V,renderItem:ed,scrollContainer:K,virtualBufferFactor:.3,virtualize:P})})]})})}},339001:(e,t,a)=>{a.d(t,{Wc:()=>c,XB:()=>l,bF:()=>p,nk:()=>o,r7:()=>d});var s=a(667294),n=a(785893);function i(e,t,a){return e.split(a).map(e=>{if(e.match(a)){let a=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,a))return t[a]}return e})}let r=/(\{\{\s*\w+\s*\}\})/g;function o(e,t){return i(e,t,r)}function l({text:e,markers:t,jsxReplacements:a}){let s=["strong","a","em"],n=/(\{\{\s*\w+\s*\}\})/g,r=/<\s*(strong|a|em)\b[^>]*>.*?<\s*\/\s*\1\s*>/g,o=/<(strong|a|em)\s+[^>]*id\s*=\s*["']([^"']+)["'][^>]*>/,l=/<(strong|a|em)\b[^>]*>(.*?)<\/\1>/,c=e.match(r)?.map(e=>{let s=e.match(o),r=(s&&s[2])??0,c=e.match(l),u=(c&&c[2])??"",p=t?i(u,t,n):[u];return r&&a&&a[r]?.({innerHtmlStrings:p})});return e.split(r)?.map(e=>s.some(t=>e===t)?c?.shift():t?i(e,t,n):e)}function c(e,t){return i(e,t,r).join("")}let u=/(\{\s*\w+\s*\})/g;function p(e,t){return i(e,t,u)}let d=({text:e})=>Array.isArray(e)?e.map((e,t)=>(0,n.jsx)(s.Fragment,{children:e},t)):e},96157:(e,t,a)=>{a.d(t,{Fw:()=>ex,ey:()=>eg,dt:()=>x,bo:()=>ec,oF:()=>eI,bW:()=>f,Lj:()=>M,AX:()=>d,Fy:()=>p,XE:()=>u,am:()=>r,pD:()=>m,OJ:()=>l,LO:()=>eM,f8:()=>X,z6:()=>j,Gl:()=>eE,Y8:()=>I,Y_:()=>C,lY:()=>v,N6:()=>S,Ur:()=>L,dK:()=>w,h3:()=>eD,PY:()=>D,QD:()=>W,or:()=>R,TI:()=>A,dm:()=>P,Ni:()=>y,H_:()=>T,Q8:()=>E,pV:()=>J,L6:()=>K,bb:()=>eR,b0:()=>g,jC:()=>ep,O7:()=>eC,LM:()=>eu,q_:()=>Y,OK:()=>z,Ep:()=>V,mP:()=>$,hd:()=>k,HV:()=>Z,C$:()=>O,dr:()=>et,mk:()=>eS,gT:()=>ee,Fr:()=>eb,Xn:()=>F,Ou:()=>ek,l4:()=>G,b_:()=>eL,J:()=>o,dZ:()=>c,Tw:()=>ef,FO:()=>B,re:()=>N,RU:()=>eX,Ui:()=>h,KY:()=>b,fY:()=>e_,uM:()=>eh,x7:()=>ey,X$:()=>q,rk:()=>eT,cD:()=>ed,XU:()=>ev,wg:()=>_,dW:()=>ej,En:()=>Q,ej:()=>eW,OX:()=>ei,f1:()=>en,E0:()=>el,gf:()=>U,nU:()=>e$,mY:()=>eP,cY:()=>ew,$Y:()=>eo,Zz:()=>H,$V:()=>er,j8:()=>em,Q0:()=>ea,tZ:()=>es,YW:()=>eA});var s=a(616550);let n=new RegExp(/^\/(?!(?:pin|categories|report|search|password|terms|discover|help|email|topics|explore|pw|login|signup|about|business|source|ideas|today|tv|shopping|videos|age-apeal|oauth)\/)[\w\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+\/(?!(?:following|followers|_tools|_created|_saved|tried))[\w\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+(?=\/|$)/),i=["/BingSiteAuth.xml","/about","/add-account","/ads","/ads.txt","/age_verification","/all","/app-ads.txt","/apple-app-site-association","/apple-app-site-association.p7m","/attribution_source","/bot.html","/branded-pins","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-linked-business","/create-personal","/creation-inspiration","/creative-studio","/creative-studio-outpainting","/creator-onboarding-landing","/csrf_error","/ct.html","/deactivate-account","/deed6a3ef3a44d41bb3ae2bad137db84.txt","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/flyup-instant-loading-indicator-app-shell.html","/following","/getWebPushKey","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-ads-tool","/idea-pin-builder","/ideas","/inbox","/install-shuffles","/invited","/jobs","/lens-search","/login","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/app-factory-oauth","/appealed-pin","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/parental-passcode","/pin-builder","/pin-creation-tool","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/public-beta","/quick-instant-loading-indicator-app-shell.html","/recently-viewed","/refresh_stored_accounts","/refresh_token","/report","/reports-and-violations","/request-data","/robots.txt","/safe-redirect","/search","/settings","/shopping","/signup","/socialmanager","/story-pin-builder","/story_feed","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/unauth-profile","/unlink","/upload-image","/upload-image-lens-history","/upload-lens-image","/upload-profile-image","/verified","/verify","/videos","/web-custom-svg","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"],r=e=>n.test(e.pathname),o=(e,t)=>{let{pathname:a}=e;return r(e)&&a.match(t||"?")},l=e=>{let{pathname:t}=e;return!!(0,s.LX)(t,{path:"/:username/:boardId/:boardSectionId",exact:!0})&&!t.match(/^\/.+\/.+\/(_tools)/i)},c=(e,t)=>{let{pathname:a}=e;return l(e)&&a.match(t||"?")},u=e=>!!(0,s.LX)(e.pathname,{path:"/board/:id/edit",exact:!0}),p=e=>!!(0,s.LX)(e.pathname,{path:"/board/:id/edit/collaborators",exact:!0}),d=e=>!!(0,s.LX)(e.pathname,{path:"/board/:id/edit/add_collaborators",exact:!0}),m=e=>!!(0,s.LX)(e.pathname,{path:"/boardsection/:id/edit",exact:!0}),h=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/comments",exact:!0}),b=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/edit",exact:!0}),g=e=>!!(0,s.LX)(e.pathname,{path:"/conversation/:id",exact:!0}),f=e=>!!(0,s.LX)(e.pathname,{path:"/appealed-pin/",exact:!0}),_=e=>!!(0,s.LX)(e.pathname,{path:"/reports-and-violations/",exact:!0}),x=e=>e.pathname.startsWith("/age-appeal"),y=e=>e.pathname.startsWith("/business/"),v=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/dashboard",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/dashboard",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/dashboard",exact:!0}),w=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/hierarchy",exact:!0}),L=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/dashboard",exact:!0}),I=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/asset-groups",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/asset-groups",exact:!0}),E=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/shared-tags",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/shared-tags",exact:!0}),C=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/brand-safety",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/brand-safety",exact:!0}),X=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/employees/:userBizId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/employees/:userBizId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/partners/:partnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/partners/:partnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/shared/:sharedPartnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/shared/:sharedPartnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts/pending/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/pending/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/profiles/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/profiles/:detailId/details",exact:!0}),S=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/business_security",exact:!0}),P=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/managers",exact:!0}),A=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/"})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/"})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/"})||!!(0,s.LX)(e.pathname,"/business/business-manager"),W=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/invoice-management",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/invoice-management",exact:!0}),M=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/audiences",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/audiences",exact:!0}),T=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/security",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/security",exact:!0}),j=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/employees",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/employees",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/employees/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/employees/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/partners",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/partners",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/partners/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/partners/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/cee-migration",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/history",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/history",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/profiles",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/profiles",exact:!0}),R=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/cee-migration",exact:!0}),D=e=>e.pathname.startsWith("/business/invite/"),$=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/visual-search/",exact:!0}),k=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/visual-search/products/",exact:!0}),O=e=>"/"===e.pathname,Z=e=>"/"===e.pathname||"/homefeed/"===e.pathname,F=e=>e.pathname.startsWith("/login"),H=e=>!!(0,s.LX)(e.pathname,{path:"/today",exact:!0}),N=e=>e.pathname.startsWith("/password/reset")||!!(0,s.LX)(e.pathname,{path:"/pw/:username",exact:!0}),B=e=>e.pathname.startsWith("/secure/panic"),U=e=>e.pathname.startsWith("/signup"),z=e=>e.pathname.startsWith("/email/subscription"),Y=e=>e.pathname.startsWith("/email/user_survey"),V=e=>e.pathname.startsWith("/email_verification_error"),G=e=>e.pathname.startsWith("/notifications/"),K=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id",exact:!0}),J=e=>e.pathname.startsWith("/pin_redirect"),Q=e=>e.pathname.startsWith("/search"),q=e=>e.pathname.startsWith("/search/pins"),ee=e=>!!(0,s.LX)(e.pathname,{path:"/ideas",exact:!0}),et=e=>!!(0,s.LX)(e.pathname,{path:"/ideas/:interest/:id",exact:!0}),ea=e=>!!(0,s.LX)(e.pathname,{path:"/videos/:category/:id",exact:!0}),es=e=>!!(0,s.LX)(e.pathname,{path:"/videos/",exact:!0}),en=e=>!!(0,s.LX)(e.pathname,{path:"/shopping/",exact:!0}),ei=e=>!!(0,s.LX)(e.pathname,{path:"/shopping/:category/:id",exact:!0}),er=e=>e.pathname.startsWith("/topics"),eo=e=>e.pathname.startsWith("/today/article/")||e.pathname.startsWith("/today/best/")||e.pathname.startsWith("/today/trending/"),el=e=>e.pathname.startsWith("/today/shop/"),ec=e=>H(e)||eo(e)||e.pathname.startsWith("/today/popular/"),eu=e=>/^\/discover\/article\/\S+\/?/i.test(e.pathname),ep=e=>e.pathname.startsWith("/pin/create/"),ed=e=>!!(0,s.LX)(e.pathname,{path:"/:username/",exact:!0})&&!i.includes(e.pathname.replace(/\/$/,"")),em=e=>e.pathname.startsWith("/unauth-profile"),eh=e=>e.pathname.startsWith("/pin/"),eb=e=>"#imgViewer"===e.hash,eg=e=>/invite_code/.test(e.search),ef=e=>/utm_pai/.test(e.search),e_=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id",exact:!1})&&(e.pathname.includes("/sent/")||e.pathname.includes("/feedback/")),ex=e=>eg(e)&&(e_(e)&&"pin"||r(e)&&"board"||ed(e)&&"profile")||null,ey=e=>e.pathname.includes("/repin/x"),ev=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/repin"})&&!ey(e),ew=e=>e.pathname.startsWith("/_/storyboard"),eL=e=>e.pathname.startsWith("/oauth"),eI=e=>e.pathname.startsWith("/app-factory-oauth"),eE=e=>e.pathname.startsWith("/business/convert"),eC=e=>e.pathname.startsWith("/pin-editor"),eX=e=>e.pathname.startsWith("/pin-builder"),eS=e=>e.pathname.startsWith("/idea-ads-tool"),eP=e=>e.pathname.startsWith("/story-pin-builder")||e.pathname.startsWith("/idea-pin-builder")||e.pathname.startsWith("/pin-creation-tool")||eS(e),eA=e=>e.pathname.startsWith("/advertiser/quick-promote"),eW=e=>e.pathname.startsWith("/settings"),eM=e=>void 0!==e.pathname&&(e.pathname.startsWith("/business/business-access/")||e.pathname.startsWith("/business/business-manager/"))&&e.pathname.includes("/dashboard/"),eT=e=>void 0!==e.pathname&&e.pathname.startsWith("/tv/studio"),ej=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/schedule_call/"),eR=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/commerce-integrations/"),eD=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/hub"),e$=e=>void 0!==e.pathname&&e.pathname.startsWith("/signup/sso-business-account/"),ek=e=>O(e)||K(e)||G(e)||r(e)||Q(e)||er(e)||H(e)||ed(e)||y(e)},493538:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(760890),n=a(667294),i=a(107860),r=a(906623),o=a(438555);function l({children:e,isAtEndOfFeed:t,pinData:a,itemCount:l,includeBackgroundImages:c=!1,includeVideos:u=!1,includeSections:p=!1}){return o.Z()?.isAuthenticated||(p=!0),(0,s.Z)({pinData:a,isAtEndOfFeed:t,includeBackgroundImages:c,includeVideos:u,includeSections:p}),!function(e){let t=(0,r.E)(),a=(0,n.useRef)(null);(0,n.useEffect)(()=>{e!==a.current&&(a.current=e,t&&(0,i.ZP)(i.at))},[!!t,e])}(l),e}},760890:(e,t,a)=>{a.d(t,{Z:()=>_,v:()=>m});var s=a(667294),n=a(685679),i=a(608029),r=a(367180),o=a(297329),l=a(107860),c=a(906623),u=a(279600),p=a(748058);let d=(0,i.XV)("GridProfiler"),m=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,r.VZ)(),h=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,b=(e,t)=>{if(!t){let t=(0,r.LM)();if(t===e)return d("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,r.F9)())return d("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},g=(e,t)=>{let a=0,s=0,n=0,i=0,r=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,o)=>{let l;let c=t.fileName.split(".")[0];l=e[o],c!==l?.image_signature&&(l=e.find(e=>c===e?.image_signature)),void 0===l?r+=1:l.is_promoted||l.recommendation_reason?.reason==="PROMOTED_PIN"||l?.promoter?.length?n+=1:null!==l.story_pin_data_id&&void 0!==l.story_pin_data_id?a+=1:l?.videos?.video_list?s+=1:i+=1}),{storyPinCount:a,videoCount:s,adCount:n,imageCount:i,unknownCount:r}},f=(e,t)=>{let a=()=>{window.removeEventListener(e,a),t()};return window.addEventListener(e,a),()=>window.removeEventListener(e,a)};function _({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:a,includeVideos:m=!1,includeSections:_}){let x=(0,c.E)(),y=x?.getId(),v=x?.setVisuallyCompleteResult,[w,L]=(0,s.useState)({status:"DISABLED"});(0,s.useEffect)(()=>{v?L({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):L({status:"DISABLED"})},[y,v]),(0,s.useEffect)(()=>{if("DISABLED"!==w.status&&(0,l.ZP)(`GridVisuallyCompleteProfiler_${w.status}`),d("new status",w),"LAYOUT"===w.status){let e=f("scroll",()=>{(0,l.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[w.status]),(0,p.Z)(()=>{if(!x||!v)return;let{abort:s,getMetricId:l}=x,c=l();switch(w.status){case"LAYOUT":{let t=b(w.numOfItemsChecked,e);t.complete?L({status:"TIMING",failedCount:0,pinElements:(0,r.cQ)(a,m,_)}):500*w.failedCount>6e4?((0,o.A9)(`images.${(0,n.KJ)(c)}.visuallyComplete.maxLayoutAttempt`),s("visuallyComplete_layoutTimeout"),L({status:"DISABLED"})):L({...w,failedCount:w.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,u.Cg)(),a=w.pinElements.length,r=[],l=0,p=0,m=0;if(w.pinElements.forEach(({element:t,fileName:a})=>{let s=e.find(e=>e.name.endsWith(a));s?s.responseEnd?(r.push(s),(0,i.v5)(t,"green")):(m+=1,(0,i.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(p+=1,(0,i.v5)(t,"red")):(l+=1,(0,i.v5)(t,"greenyellow"))}),l||m)100*w.failedCount>6e4?((0,o.A9)(`images.${(0,n.KJ)(c)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:a,incompleteCount:l,noTimingCount:p,noTimingResponseEndCount:m}}),s("visuallyComplete_timingTimeout"),L({status:"DISABLED"})):L({...w,failedCount:w.failedCount+1});else{if(d(`All ${r.length} images are fetched`),t&&t.length){let e=g(t,w.pinElements);Object.entries(e).forEach(([e,t])=>{x.addBinaryAnnotation(e,t,"I16")}),(0,o.A9)(`${(0,n.KJ)(c)}.pinTypes`,{tags:e})}v({imageTimings:r}),L({status:"DISABLED"}),(0,o.A9)(`images.${(0,n.KJ)(c)}.visuallyComplete.complete`,{tags:{totalImageCount:a,noTimingCount:p}})}}}},h(w))}},984571:(e,t,a)=>{a.d(t,{Z:()=>r});var s=a(958881);let n=/\{\s*(\w+)\s*\}/g,i=(e,t)=>(0,s.Z)(n,e,t);function r({args:e,format:t}){return i(t,(e||[]).reduce((e,t,a)=>({...e,[a]:t.text}),{}))}},325362:(e,t,a)=>{a.d(t,{Z:()=>s});function s(e){return e.replace(/[_.-](\w|$)/g,(e,t)=>t.toUpperCase())}},13848:(e,t,a)=>{a.d(t,{F9:()=>n,Zo:()=>s});let{Provider:s,useHook:n}=(0,a(342513).Z)("toastManagerContext")},862249:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(968946);let n=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,s.Z)(e))},748058:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(667294);let n=(e,t)=>{let a=(0,s.useRef)(()=>{});(0,s.useEffect)(()=>{a.current=e},[e]),(0,s.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>a.current(),t);return()=>clearInterval(e)},[t])}},180338:(e,t,a)=>{a.d(t,{H:()=>s,W:()=>n});let{Provider:s,useMaybeHook:n}=(0,a(342513).Z)("PinCreateDeleteContext")},282008:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(883119),n=a(214877),i=a(213377),r=a(666472),o=a(984571),l=a(575742),c=a(818385),u=a(785893);let p=i.yF;function d({contextLogData:e,bubbles:t,id:a,referringSource:i,slotIndex:d,storyType:m,title:h,titleIcon:b,viewType:g,viewParameter:f}){let{logContextEvent:_}=(0,n.v)(),x=t.map(({type:e,id:t})=>e+":"+t).join("|"),y={story_type:m,...e,content_ids:x};return(0,u.jsx)(r.F,{componentType:200,contextLogData:y,impressionType:"Story",loggingId:a,objectIdStr:a,slotIndex:d,viewParameter:f,viewType:g,children:({impressionTrackerRef:e})=>(0,u.jsxs)(s.xu,{ref:e,children:[h&&(0,u.jsxs)(s.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginBottom:1,children:["number"==typeof b&&b!==l.J&&(0,u.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{paddingTop:1}},marginEnd:2,children:(0,u.jsx)(s.JO,{accessibilityLabel:"",color:"default",icon:(0,l.Z)(b),size:14})}),(0,u.jsx)(s.xv,{weight:"bold",children:(0,o.Z)(h)})]}),t.map((e,t)=>(0,u.jsx)(s.xu,{flex:"none",paddingY:1,children:(0,u.jsx)(c.Z,{bubble:e,contextLogData:y,height:103,onClick:e=>{_({event_type:101,object_id_str:e,view_type:g,view_parameter:f,component:200,aux_data:y})},referringSource:i,slotIndex:t,storyId:a,viewParameter:f,viewType:g,width:p})},`bubble-${e.id}`))]})})}},166770:(e,t,a)=>{a.d(t,{H:()=>n,o:()=>s});let{Provider:s,useHook:n}=(0,a(342513).Z)("LimitedLogin")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/42068.pt_PT-3af711d173d03232.mjs.map