"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[20749],{109615:(e,t,i)=>{i.d(t,{Z:()=>d});var a=i(667294),r=i(883119),n=i(587703),l=i(140017),s=i(673020),o=i(785893);let c={sm:12,md:16,lg:20,xl:24};function d({isVerifiedMerchant:e,size:t,showText:i,showVerifiedIdentity:d,inspirationalBadges:_,inspirationalBadgesColor:u}){let p=(0,l.ZP)(),[h,f]=(0,a.useState)(!1),{dangerousInlineStyle:E,iconColor:y}=(0,s.W)(!!e),A=(0,n.Z)();return(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(r.iP,{onTap:()=>{A({component:13534,element:11717,event_type:102}),f(!0)},rounding:"circle",children:(0,o.jsxs)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:E,"data-test-id":"verified-badge-icon",display:"flex",children:[(0,o.jsx)(r.JO,{accessibilityLabel:e?p.bt("Ícone de emblema de verificação do comerciante", "Merchant verification badge icon", "merchantVerification.badge.icon", undefined, true):p.bt("Ícone de distintivo", "Badge icon", "merchantVerification.badge.icon", undefined, true),color:y,icon:"workflow-status-ok",inline:!0,size:c[t]}),i&&!d&&(0,o.jsx)(r.xu,{marginStart:2,children:(0,o.jsx)(r.xv,{color:"shopping",inline:!0,weight:"bold",children:(0,o.jsx)(r.xu,{dangerouslySetInlineStyle:E,children:p.bt("Comerciante verificado", "Verified merchant", "creator.header.verifiedMerchant", undefined, true)})})})]})}),(e||i&&!d)&&(0,o.jsx)(s.Z,{inspirationalBadges:_,inspirationalBadgesColor:u,setShowModal:f,showModal:h})]})}},673020:(e,t,i)=>{i.d(t,{W:()=>_,Z:()=>u});var a=i(667294),r=i(883119),n=i(557226),l=i(587703),s=i(930837),o=i(140017),c=i(702497),d=i(785893);let _=e=>{let t=e?"shopping":"error";return{iconColor:t,dangerousInlineStyle:{__style:{color:t}}}};function u({inspirationalBadges:e=[],inspirationalBadgesColor:t,showModal:i,setShowModal:u}){let p=(0,o.ZP)(),[h,f]=(0,a.useState)(!0),{dangerousInlineStyle:E,iconColor:y}=_(!0),A=(0,l.Z)();return(0,a.useEffect)(()=>{i&&h&&(f(!1),A({event_type:13,component:13534}))},[i]),(0,d.jsx)(s.ZP,{accessibilityModalLabel:p.bt("Informações do comerciante verificado", "Verified merchant information", "creator.verifiedMerchant.accessibilityModalLabel", undefined, true),isOpen:i,mobileAccessibilityCloseIconLabel:p.bt("Fechar", "Close", "Close modal window", undefined, true),onDismiss:()=>{A({component:13534,element:11716,event_type:102}),u(!1)},type:"verified_merchant_modal",children:(0,d.jsx)(r.xu,{padding:3,children:(0,d.jsxs)(r.xu,{"data-test-id":"verified-badge-modal",direction:"column",display:"flex",padding:2,children:[(0,d.jsx)(r.xu,{dangerouslySetInlineStyle:E,display:"flex",justifyContent:"center",children:(0,d.jsx)(r.JO,{accessibilityLabel:p.bt("Ícone de emblema de verificação do comerciante", "Merchant verification badge icon", "creator.verifiedMerchant.modalIcon", undefined, true),color:y,icon:"workflow-status-ok",size:24})}),(0,d.jsx)(r.xu,{marginTop:4,children:(0,d.jsx)(r.xv,{align:"center",color:"shopping",weight:"bold",children:(0,d.jsx)(r.xu,{dangerouslySetInlineStyle:E,children:p.bt("Comerciante verificado", "Verified merchant", "creator.verifiedMerchant.modalHeader", undefined, true)})})}),(0,d.jsx)(r.xu,{marginBottom:4,marginTop:4,children:(0,d.jsx)(r.xv,{align:"center",overflow:"normal",children:p.bt("Este retalhista obedece às Diretrizes para comerciantes do Pinterest", "This retailer meets Pinterest's Merchant Guidelines", "creator.verifiedMerchant.modalText.", undefined, true)})}),e.map(e=>(0,d.jsxs)(r.xu,{direction:"column",display:"flex",marginTop:4,children:[(0,d.jsx)(r.kC,{alignItems:"stretch",justifyContent:"center",children:(0,d.jsx)(r.xv,{overflow:"noWrap",size:"100",weight:"bold",children:(0,d.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:(0,n.ym)(t)},"data-test-id":"verified-badge-modal-inspirational-badge",display:"inlineBlock",paddingX:2,paddingY:2,rounding:1,children:e.label})})}),(0,d.jsx)(r.xu,{marginTop:2,children:(0,d.jsx)(r.xv,{align:"center",overflow:"normal",children:e.description})})]},e.id)),(0,d.jsx)(r.xu,{"data-test-id":"verified-badge-modal-learn-more",display:"flex",justifyContent:"center",marginTop:8,width:"100%",children:(0,d.jsx)(r.ZP,{accessibilityLabel:p.bt("Mais informações", "Learn more", "creator.verifiedMerchant.buttonText", undefined, true),href:c.vBy,size:"lg",target:"blank",text:p.bt("Mais informações", "Learn more", "creator.verifiedMerchant.buttonText", undefined, true)})})]})})})}},32346:(e,t,i)=>{i.d(t,{Z:()=>a});function a(e){return("undefined"==typeof window||!Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame"))&&e&&e(),window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{e&&e()})})}},86785:(e,t,i)=>{i.d(t,{G6:()=>n,i7:()=>l,oi:()=>a,u$:()=>r,un:()=>o,vU:()=>s,w1:()=>c});let a=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),r=e=>e?e.includes("Chrome")?a.CHROME:e.includes("Safari")?a.SAFARI:e.includes("Firefox")?a.FIREFOX:e.includes("Opera")?a.OPERA:e.includes("IE")?a.IE:e.includes("Edge")?a.EDGE:a.OTHER:a.OTHER;function n(e){return r(e)===a.SAFARI}function l(e){return r(e)===a.CHROME}function s(e){return r(e)===a.FIREFOX}function o(e){return r(e)===a.EDGE}function c(e){return r(e)===a.IE}},557226:(e,t,i)=>{i.d(t,{Bu:()=>h,Dm:()=>s,I:()=>y,NG:()=>u,QP:()=>d,S4:()=>c,Xe:()=>_,_f:()=>p,eT:()=>f,hm:()=>E,yQ:()=>o,ym:()=>A});var a=i(743079);let r=Object.freeze({AFRICAN_AMERICAN_OR_BLACK:"african_american_or_black",BLACK_AFRICAN_DIASPORA:"black_african_diaspora",HISPANIC_OR_LATINX:"hispanic_or_latinx",NATIVE_OR_INDIGENOUS:"native_or_indigenous",ABORIGINAL_OR_INDIGENOUS:"aboriginal_or_indigenous",NATIVE_AMERICAN_OR_ALASKA_NATIVE_OR_INDIGENOUS_PEOPLES:"native_american_or_alaska_native_or_indigenous_peoples",ASIAN_OR_PACIFIC_ISLANDERS:"asian_or_pacific_islanders",ASIAN:"asian",LGBTQ:"lgbtq",MIDDLE_EASTERN:"middle_eastern",TURKISH:"turkish",ROMA:"roma",MIDDLE_EASTERN_TURKISH_ROMA:"middle_eastern_turkish_roma",NORTH_AFRICAN:"north_african",MIDDLE_EASTERN_OR_NORTH_AFRICAN:"middle_eastern_or_north_african",NONE:"none"}),n=Object.freeze({PERSON_OF_COLOR:"person_of_color",LGBTQ:"lgbtq",DISABILITY:"disability",WOMAN:"woman",NONE:"none"}),l=Object.freeze({INVESTED_IN_GOOD:"invested_in_good",ECO_FRIENDLY:"eco_friendly",RESPONSIBLY_SOURCED:"responsibly_sourced",INCLUSIVE:"inclusive",PERSONAL_TOUCH:"personal_touch"}),s=[...Object.keys(r).map(e=>r[e]),...Object.keys(n).map(e=>n[e])],o=[...Object.keys(l).map(e=>l[e])],c=3,d=["#EFEFEF","#F8E3D1","#F6F1C1","#DDEEAF","#C9F2EE","#DBD5F4","#EFBCEE"],_={business_diversity_labels:[],created_at:"",disapproval_reasons:[],is_inspirational:!1,review_criteria:[],review_labels:[],updated_at:"",inspirational_badge_selection:{badgeColor:d[0],badgeOptOut:[]},is_eligible_for_storefront_badges:!1,badge_details:[],profile_badges:[]},u="https://help.pinterest.com/article/merchant-details",p="https://help.pinterest.com/business/article/add-merchant-details-to-your-profile";function h({verifiedMerchant:e}){let t=e?.isVerifiedMerchant,i=e?.inspirational_signal?.is_inspirational,a=e?.inspirational_signal?.is_eligible_for_storefront_badges;return!!(t&&i&&a)}function f(e){return e.badge_details?e.badge_details.map(e=>e.id):[]}function E(e){return e?.profile_badges||[]}function y(e,t,i){return t&&i?t.map(e=>i.find(t=>t.id===e.trim())).filter(Boolean):[]}function A(e){let t=e||d[0];return{backgroundColor:t,color:function(e){let t=(0,a.oo)(e);if(!t)return"white";let[i,r,n]=t;return(0,a.DW)(i,r,n)<=a.I?"white":"black"}(t)}}},259866:(e,t,i)=>{i.d(t,{Z:()=>a});function a(e){return function e(t,i){let a;if(null==t||"object"!=typeof t&&"function"!=typeof t)return t;let r=i.find(e=>e.value===t);if(r)return r.result;let n=Object.prototype.toString.call(t);switch(n){case"[object Array]":a=Array(t.length);break;case"[object Set]":a=new Set;break;case"[object Object]":case"[object Arguments]":a={};break;case"[object Map]":a=new Map;break;default:return t}let l=[...i,{value:t,result:a}];switch(n){case"[object Array]":t.forEach((t,i)=>{a[i]=e(t,l)});break;case"[object Set]":t.forEach(t=>{a.add(e(t,l))});break;case"[object Object]":case"[object Arguments]":Object.entries(t).forEach(([t,i])=>{a[t]=e(i,l)});break;case"[object Map]":t.forEach((t,i)=>{a.set(i,e(t,l))})}return a}(e,[])}},695238:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(667294),r=i(14583),n=i(785893);function l({useGraphQLAdapter:e,useLegacyAdapter:t}){let i=({children:t,data:i})=>t({kind:"GraphQL",data:e(i)}),l=({children:e,data:i})=>e({kind:"Legacy",data:t(i)});return function({children:e,input:t}){let s="GraphQL"===t.kind?(0,n.jsx)(i,{data:t.data,children:e}):(0,n.jsx)(l,{data:t.data,children:e}),o=t.suspense?.dangerouslyServerRender?a.Suspense:r.Z;return t.suspense?(0,n.jsx)(o,{fallback:t.suspense.fallback,children:s}):s}}},422210:(e,t,i)=>{i.d(t,{Z:()=>a});function a(e){if(!e)return!1;let t=new Date(e);return t.setDate(t.getDate()+28),new Date().getTime()<t.getTime()}},782005:(e,t,i)=>{i.d(t,{Hd:()=>c,_R:()=>s,gi:()=>n,lw:()=>a,oD:()=>r,wF:()=>o,zh:()=>l});let a={PINS:"pins",PINS_BUYABLE:"buyable_pins",PINS_MINE:"my_pins",PINS_VIDEO:"videos",BOARDS:"boards",USERS:"users",IDEA_PINS:"idea_pins",MY_CONTENT:"my_content"},r=e=>Object.values(a).find(t=>t===e)??void 0,n=e=>{switch(e){case a.PINS:return 0;case a.PINS_MINE:return null;case a.PINS_BUYABLE:return 1;case a.PINS_VIDEO:return 2;case a.BOARDS:return 3;case a.USERS:return 4;default:return null}},l=e=>{switch(e){case 0:return a.PINS;case 1:return a.PINS_BUYABLE;case 2:return a.PINS_VIDEO;case 3:return a.BOARDS;case 4:return a.USERS;default:return null}},s=e=>{switch(e){case a.PINS_MINE:case a.MY_CONTENT:return 107;case a.PINS_BUYABLE:return 254;case a.PINS_VIDEO:return 3306;case a.BOARDS:return 44;case a.USERS:return 45;case a.PINS:default:return 43}},o=e=>{switch(e){case a.PINS:return 60;case a.PINS_MINE:case a.MY_CONTENT:return 63;case a.PINS_BUYABLE:return 3800;case a.PINS_VIDEO:return 64;case a.BOARDS:return 61;case a.USERS:return 62;default:return null}},c=(e,t)=>{if(t)switch(e){case a.USERS:return 1000392;case a.PINS_BUYABLE:return 1000391;case a.PINS:default:return 29}switch(e){case a.USERS:return 1000432;case a.PINS_BUYABLE:return 1000433;case a.PINS:default:return 1000269}}},998449:(e,t,i)=>{i.d(t,{Z:()=>n});let a=(e,t)=>0===e.lastIndexOf(t,0);var r=i(885896);let n=({url:e})=>{let t=(0,r.Z)("/");return a(e,t)?e.substr(t.length-1):e}},239821:(e,t,i)=>{i.d(t,{g:()=>u,I:()=>_});var a=i(667294),r=i(342513),n=i(705895),l=i(259866);let s={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},o=(e=s,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:i}=t,{pinId:a,isPromoted:r,currentTime:n}=i,{videosAutoplaying:s}=e,{currentlyPlayingOrganicVideoId:o,promotedVideosAutoplaying:c,organicVideosAutoplaying:d}=s,_=(0,l.Z)(c),u=(0,l.Z)(d);return!r&&o?e:(r?_[a]={pinId:a,currentTime:n,paused:!1}:u[a]={pinId:a,currentTime:n,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:r?o:a,promotedVideosAutoplaying:_,organicVideosAutoplaying:u}})}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:i}=t,{pinId:a,isPromoted:r,currentTime:n}=i,{videosAutoplaying:s}=e,{promotedVideosAutoplaying:o,organicVideosAutoplaying:c}=s,d=(0,l.Z)(o),_=(0,l.Z)(c);return r?d[a]={...d[a],paused:!0,currentTime:n}:_[a]={..._[a],paused:!0,currentTime:n},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:d,organicVideosAutoplaying:_}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var c=i(785893);let{Provider:d,useHook:_}=(0,r.Z)("AppUI");function u({children:e}){let[t,i]=(0,a.useReducer)(o,s),r=(0,a.useCallback)(e=>i({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),l=(0,a.useCallback)(e=>i({type:"SET_APP_FOCUS_STATE",payload:e}),[]),_=(0,a.useCallback)(e=>i({type:"SET_CURRENT_VIDEO",payload:e}),[]),u=(0,a.useCallback)(e=>i({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),p=(0,a.useCallback)(e=>i({type:"SET_IS_AUTOPLAY",payload:e}),[]),h=(0,a.useCallback)(e=>i({type:"SET_VIEWPORT_SIZE",payload:e}),[]),f=(0,a.useCallback)(e=>i({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),E=(0,a.useMemo)(()=>({pauseAutoplay:r,setCurrentVideo:_,setFooterPlusButtonVisible:u,setIsAutoplay:p,setViewportSize:h,toggleTypeaheadOverlay:f,setAppFocusState:l,appUI:t}),[r,_,u,p,h,f,l,t]);return(0,a.useEffect)(()=>{n.Z.onSessionResume(()=>{l(!0)}).onSessionPause(()=>{l(!1)})},[l]),(0,c.jsx)(d,{value:E,children:e})}},453652:(e,t,i)=>{i.d(t,{Z:()=>a});function a({isDesktop:e}){return e?0:1}},407053:(e,t,i)=>{i.d(t,{AA:()=>n,E9:()=>y,EU:()=>I,IO:()=>S,KH:()=>d,Lg:()=>p,QR:()=>c,Uw:()=>r,ZR:()=>g,dx:()=>h,dy:()=>o,eA:()=>u,eV:()=>f,fo:()=>E,k7:()=>l,rT:()=>A,tz:()=>_,u9:()=>m,zR:()=>s,zu:()=>a});let a="OPEN_UNAUTH",r="openUnauthType",n="_isAfterLogin",l="_lastVisitedPages",s="_lastVisitedPagesBeforeLogin",o="_lastVisitedBoardPages",c="_lastVisitedPagesBeforeNavPage",d="_lastVisitedSessionPages",_="_unauthVisitedPages",u=100,p="_inviteCodeRedemption",h="_inviteCodeRedemptionList",f="_paidTrafficLand",E="_unauthReferrerString",y="unauthTopicsFollowed",A=["US","CA","NZ","AU"],S=new Set(["GB","IE"]),I=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),g=new Set(["BR","MX","AR","CL","CO","PE"]),m="ad_img"},736079:(e,t,i)=>{i.d(t,{Z:()=>_,x:()=>d});var a=i(667294),r=i(217058),n=i(785893);let l=(0,a.createContext)(()=>{}),s=()=>{document&&document.body&&document.body.style&&(document.body.style.overflow="hidden")},o=()=>{document&&document.body&&document.body.style&&(document.body.style.overflow="unset")},c=()=>(0,a.useEffect)(()=>o,[]),d=({children:e})=>{let[t,i]=(0,a.useState)(null);c();let d=(0,a.useCallback)(e=>{(0,r.My)("dweb.unauth.context_menu.open_menu"),s(),i(e)},[]),_=!!t;return(0,a.useEffect)(()=>{let e=()=>{i(null),o(),(0,r.My)("dweb.unauth.context_menu.click_away")};return _&&document.addEventListener("click",e),()=>{_&&document.removeEventListener("click",e)}},[_]),(0,n.jsx)(l.Provider,{value:d,children:(0,n.jsxs)(a.Fragment,{children:[e,t]})})},_=()=>(0,a.useContext)(l)},811768:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(667294),r=i(883119),n=i(109615),l=i(785893);let s=function({badgeSize:e,badgeSpacing:t,fullName:i,verifiedType:s,truncate:o=!1}){let c=i.split(" "),d=c.slice(0,c.length-1).join(" "),_=" ".concat(c[c.length-1]);return o?(0,l.jsxs)(r.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,l.jsx)(r.xv,{lineClamp:1,weight:"bold",children:i}),(0,l.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{top:t}},flex:"none",paddingX:1,position:"relative",children:(0,l.jsx)(n.Z,{isVerifiedMerchant:"verifiedMerchant"===s,showVerifiedIdentity:"verifiedIdentity"===s,size:e})})]}):(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("span",{children:d}),(0,l.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[_," ",(0,l.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{top:t}},display:"inlineBlock",flex:"none",position:"relative",children:(0,l.jsx)(n.Z,{isVerifiedMerchant:"verifiedMerchant"===s,showVerifiedIdentity:"verifiedIdentity"===s,size:e})})]})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/20749.pt_PT-816db69f745dc071.mjs.map