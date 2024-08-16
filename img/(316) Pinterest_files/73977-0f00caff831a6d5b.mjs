"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73977],{499041:(e,t,r)=>{r.d(t,{b:()=>o,t:()=>u});var a=r(667294),n=r(342513),s=r(785893);let{Provider:i,useHook:u}=(0,n.Z)("LensContext");function o({children:e}){let[t,r]=(0,a.useState)(),[n,u]=(0,a.useState)(),[o,l]=(0,a.useState)([]),[c,d]=(0,a.useState)(),[p,E]=(0,a.useState)(),[_,S]=(0,a.useState)(!1);return(0,s.jsx)(i,{value:{heroImageUrl:n,historyData:o,image:t,imageData:p,isLensModalOpen:_,setHeroImageUrl:u,setHistoryData:l,setImage:r,setImageData:E,setIsLensModalOpen:S,setUpdatedCropArea:d,updatedCropArea:c},children:e})}},552341:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(149722);let n=()=>{let e=(0,a.Z)();return!!e.isAuth&&e.isPartner}},354500:(e,t,r)=>{r.d(t,{Oz:()=>a,mo:()=>i,nt:()=>s,v8:()=>n});let a={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},n="BUSINESS_PANEL",s="ASSET_PANEL",i=500},135987:(e,t,r)=>{r.d(t,{FE:()=>T,lG:()=>v,d9:()=>w});var a=r(667294),n=r(545007),s=r(616550),i=r(552341),u=r(516018),o=r(340523),l=r(149722),c=r(953565);let d=()=>{let e=(0,l.Z)(),{checkExperiment:t}=(0,o.F)(),r=(0,i.Z)()&&t("web_m10n_business_reporting_business_entity_service").anyEnabled,[n,s]=(0,a.useState)({isReady:!1}),d=(0,a.useCallback)(async({entityId:e,actingBusinessId:t,favorites:a})=>{r&&(await (0,u.yo)({entityId:e,actingBusinessId:t,favorites:a}),s(e=>{let r={...e,actingBusinessId:t};return a&&(r.favoriteAdAccounts={favoriteAdAccountsMap:{...e.favoriteAdAccounts?.favoriteAdAccountsMap||{},[a.actingBusinessId]:{advertiserId:a.adAccounts}}}),r}))},[r]);return(0,a.useEffect)(()=>{r&&e.isAuth&&!n.isReady&&(async()=>{let t=!1;try{let t=await (0,u.SF)({entityId:e.id});s(e=>({...e,...t}))}catch{t=!0}finally{(0,c.nP)("globalAccountSwitcher.getFavoriteAdAccounts",{sampleRate:1,tags:{businessId:e.id,hasError:t}}),s(e=>({...e,isReady:!0}))}})()},[n.isReady,r,e]),{accountSwitcherConfig:n,setConfig:d}};var p=r(354500),E=r(214877),_=r(342513),S=r(96157),m=r(624797),A=r(938927),f=r(442279),y=r(575333);let h=(0,f.P1)(y.Z,({viewerIsProfileOwnerOrProfileManager:e})=>e??void 0);var g=r(454535),I=r(785893);let{Provider:R,useHook:w}=(0,_.Z)("AccountSwitcherContext"),v=e=>e.search&&(0,m.mB)(e.search).advertiserId,T=({children:e})=>{let t=(0,s.TH)(),{params:{userBizId:r,businessHierarchyId:o,advertiserId:c,username:_}}=(0,s.$B)(),m=v(t),f=(0,l.Z)(),y=n.v9(h)?.data||void 0,w=(0,g.rc)(y),[T,P]=(0,a.useState)(""),[N,O]=(0,a.useState)(null),[C,b]=(0,a.useState)(!1),[U,D]=(0,a.useState)(null),L=new URLSearchParams(t.search),[$,B]=(0,a.useState)(L.has("actingBusinessId")?null:{id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||""}),[M,Z]=(0,a.useState)(!1),H=(0,i.Z)(),{logContextEvent:k}=(0,E.v)(),{accountSwitcherConfig:F,setConfig:G}=d();(0,a.useEffect)(()=>{o?P(o):P("")},[o]);let V=(0,a.useCallback)(async({id:e,username:t})=>{let r=await (0,u.bG)({user_id:e,username:t});r&&D({type:e?p.Oz.BUSINESS_ACCOUNT:p.Oz.PROFILE,id:e||r.id,name:r.full_name,img:r.image_medium_url,username:t}),Z(!1)},[]),j=(0,g.rc)(_);(0,a.useEffect)(()=>{(0,S.cD)(t)&&U&&j!==_&&_===f.username&&(V({username:f.username}),B({id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||""}),O({type:p.nt,id:f.id}))},[t,j,V,U,_,f.fullName,f.id,f.imageMediumUrl,f.username]),(0,a.useEffect)(()=>{let e=async({businessId:e,assetId:t})=>{if(!e){Z(!1);return}try{let e={asset:{name:""},type:"AD_ACCOUNT"};if(f.isAuth){let{data:{data:r={[t]:e}}={}}=await (0,A.pI)({businessId:f.id,assetIds:[t],resourceType:"AD_ACCOUNT"})||{},{asset:a,type:n}=r[t]||e;D({id:t,name:a.name,img:"",type:n})}}catch{D({id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||"",type:p.Oz.BUSINESS_ACCOUNT})}Z(!1)},a=async({id:e})=>{let t=await (0,u.p)({hierarchyId:e});D({id:e,name:t?.data?t.data.name:"",img:t?.data?t.data.img_medium_url:"",type:p.Oz.BUSINESS_HIERARCHY}),Z(!1)};if(f.isAuth&&H){let n=U&&U.username&&U.username!==_,s=!0===y&&y!==w;if((!U||n||s)&&!M){let n=(0,S.TI)(t)||(0,S.h3)(t),s=c||!!m&&!n;Z(!0),o?a({id:o}):r?V({id:r}):(0,S.cD)(t)&&_&&y?V({username:_}):s?e({businessId:f.id,assetId:c||m||""}):U&&U.id===f.id||(D({type:p.Oz.BUSINESS_ACCOUNT,id:f.id||"",name:f.fullName||"",img:f.imageMediumUrl||""}),Z(!1))}}},[U,f,o,r,_,c,m,$,H,t,V,M,y,w]);let x=(0,a.useMemo)(()=>({activePanel:N,selectedHierarchyId:T,switcherOpen:C,openAccountSwitcher:()=>{if(k({event_type:101,view_type:608,component:14346}),!N){if((0,S.TI)(t))O({type:p.v8});else{let e=new URLSearchParams(t.search).get("actingBusinessId");O({type:p.nt,id:e??$?.id})}}b(!0)},closeAccountSwitcher:()=>b(!1),openAssetPanel:e=>{O({type:p.nt,id:e})},closeAssetPanel:()=>{O({type:p.v8})},actingBusiness:$,selectedAccount:U,setSelectedAccount:D,setActingBusiness:B,accountSwitcherConfig:F,setConfig:G}),[N,T,C,$,U,F,G,k,t]);return(0,I.jsx)(R,{value:x,children:e})}},593882:(e,t,r)=>{r.d(t,{C:()=>A,H:()=>f});var a=r(667294),n=r(552341),s=r(354500),i=r(516018),u=r(29156),o=r(250304),l=r(24691),c=r(342513),d=r(372085),p=r(244413),E=r(149722),_=r(186966),S=r(785893);let{Provider:m,useHook:A}=(0,c.Z)("BusinessHierarchyContext"),f=({children:e})=>{let[t,r]=(0,a.useState)([]),[c,A]=(0,a.useState)(!1),[f,y]=(0,a.useState)(!1),[h,g]=(0,a.useState)({}),[I,R]=(0,a.useState)(null),[w,v]=(0,a.useState)([]),[T,P]=(0,a.useState)({}),N=(0,_.Z)(),O=(0,a.useRef)(N),C=(0,E.Z)(),b=(0,n.Z)(),U=(0,a.useRef)({}),D=(0,a.useCallback)((e,t)=>{let r;t===s.Oz.BUSINESS_HIERARCHY?r=(0,l.Z)(o.Q6.DASHBOARD,"","",e):t===s.Oz.BUSINESS_ACCOUNT&&(r=(0,l.Z)(o.Q6.DASHBOARD,e));let a=(0,p.Z)({site:"www",path:r});(0,u.Z)(a)},[]),L=(0,a.useCallback)(async e=>{if(!b)return[];if(y(!0),U.current[e])return y(!1),U.current[e];{let{data:t}=(await (0,d.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:e}})).resource_response,r=t&&t.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=s.Oz.USER_ACCOUNT,e))),e))||[],a=/^\d+$/.test(e),n=RegExp(e.toLowerCase(),"g"),u=[];I||R(u=await O.current());let o=(I??u).filter(t=>a?t.id.includes(e):t.user.full_name.toLowerCase().match(n)).map(i.IT),l=[...r.map(e=>e.id),...o.map(e=>e.id)],c=a?(C.id||"").includes(e):(C.fullName||"").toLowerCase().match(n);return C.isAuth&&c&&l.push(C.id),U.current[e]=l,y(!1),l}},[b,O,C.id,C.fullName,C.isAuth,I]),{id:$="",username:B="",email:M="",fullName:Z="",imageSmallUrl:H="",imageMediumUrl:k="",isAuth:F}=C,G=async e=>{if((!F||!b||I)&&!e)return;A(!0);let t=[];try{let{data:e}=(await (0,d.Z)({url:"ads/v4/business_access/business_hierarchies/"})).resource_response;t=e&&e.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=s.Oz.USER_ACCOUNT,e))),e))||[],r(t)}catch{r([])}try{let e=[];I||(e=await O.current(),R(e));let r=I??e;v(r.map(i.IT)),P(r.reduce((e,t)=>(e[t.id]=t.business_roles||[],e),{})),g((0,i.WP)({id:$,username:B,email:M,fullName:Z,imageSmallUrl:H,imageMediumUrl:k})),U.current[""]=[...t.map(e=>e.id),...r.map(i.IT).map(e=>e.id),$],A(!1)}catch{A(!1)}},V=(0,a.useCallback)(G,[$,B,M,Z,H,k,F,b,I]),j=(0,a.useCallback)(e=>t.some(t=>t.id===e||t.children.some(t=>t.id===e||t.user.id===e)),[t]),x=(0,a.useCallback)(e=>t.map(e=>"BUSINESS_HIERARCHY"===e.entity_type?e:null).find(t=>!!t&&t.children.some(t=>t.user.id===e)),[t]),z=(0,a.useMemo)(()=>({businessHierarchies:[...h.id&&!j(h.id)?[h]:[],...t,...w.filter(e=>!j(e.id))],switchAccount:D,searchAccounts:L,loadingAccounts:c,isSearchingAccounts:f,fetchData:V,getParentHierarchyForIdIfExists:x,viewerRolesOfEachEmployer:T}),[t,D,L,w,c,f,h,V,j,x,T]);return(0,S.jsx)(m,{value:z,children:e})}},106622:(e,t,r)=>{r.d(t,{r:()=>A,K:()=>S});var a=r(667294),n=r(372085),s=r(783122);let i=async(e,t)=>{let{statsLog:r}=(0,s.t)();try{let a=new Date,s=await (0,n.Z)({url:"/ads/v4/business_entities",data:e,method:"POST"}),i=new Date;return r&&(r.success("getMultipleBizEntityProperties",t),r.latency("getMultipleBizEntityProperties",i.getTime()-a.getTime(),t)),s.resource_response.data}catch(e){throw r&&r.failure("getMultipleBizEntityProperties",t),e}},u=async(e,t,r="PUT")=>{let{statsLog:a}=(0,s.t)();try{let s=new Date,i=await (0,n.Z)({url:"/ads/v4/business_entities",data:e,method:r}),u=new Date;return a&&(a.success("setMultipleBizEntityPropertiesFullUpdate",t),a.latency("setMultipleBizEntityPropertiesFullUpdate",u.getTime()-s.getTime(),t)),i.resource_response.data}catch(e){throw a&&a.failure("setMultipleBizEntityPropertiesFullUpdate",t),e}};var o=r(342513),l=r(288673),c=r(340523),d=r(149722),p=r(953565),E=r(785893);let{Provider:_,useHook:S}=(0,o.Z)("CustomShortcutsContext"),m=()=>Object.freeze(["business.pinterest.com","create.pinterest.com","about.pinterest.com","support.pinterest.com","developers.pinterest.com","newsroom.pinterest.com"]),A=({children:e})=>{let t=(0,d.Z)(),r=(0,c.F)(),[n,s]=(0,a.useState)({}),o=(0,a.useCallback)(async()=>{let{anyEnabled:e}=r.checkExperiment("exp_ia_navigation_mega_nav_m2"),{anyEnabled:a}=r.checkExperiment("aid_exp_use_fetch_api_in_custom_shortcut_context"),n=m().every(e=>!window.location.href?.includes(e));if(e&&t.isAuth&&!t.isLimitedLogin&&n)try{let e;e=a?i:l.FO;let r=(await e([{entity_id:t.id,entity_type:"BIZ_USER",property_keys:["NAVBAR_CONFIG"]}]))[0];if(!(r&&r.properties))return;let n=r.properties.NAVBAR_CONFIG;s(n?.customShortcuts||{})}catch(e){(0,p.nP)("pro_partner_header.dynamic_menu.shortcuts.get_error",{sampleRate:1,tags:{entity_id:t.id,error:e.message}})}},[t.isAuth,t.id,t.isLimitedLogin,r]),S=(e,t)=>({entity_id:e,entity_type:"BIZ_USER",properties:{NAVBAR_CONFIG:{customShortcuts:t}}}),A=(0,a.useCallback)(async e=>{let{anyEnabled:a}=r.checkExperiment("exp_ia_navigation_mega_nav_m2"),{anyEnabled:n}=r.checkExperiment("aid_exp_use_fetch_api_in_custom_shortcut_context");if(!(t.isAuth&&a))return(0,p.nP)("pro_partner_header.dynamic_menu.shortcuts.upsert_error",{sampleRate:1,tags:{entity_id:t.id,error:"Auth_Error"}}),{error:"Auth_Error"};try{let r;r=n?u:l.VW;let a=S(t.id,e);return await r([a]),o(),{error:null}}catch(e){return(0,p.nP)("pro_partner_header.dynamic_menu.shortcuts.upsert_error",{sampleRate:1,tags:{entity_id:t.id,error:e.message}}),{error:"Upsert_Error"}}},[t.isAuth,t.id,r,o]);(0,a.useEffect)(()=>{o()},[o]);let f=(0,a.useMemo)(()=>({shortcuts:n,upsertShortcuts:A}),[n,A]);return(0,E.jsx)(_,{value:f,children:e})}},214274:(e,t,r)=>{r.d(t,{Z:()=>a});let a='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif'},263032:(e,t,r)=>{r.d(t,{YS:()=>i,eF:()=>u,m_:()=>s});var a=r(934378),n=r(953565);function s(e,t,r,s,i){let u=new URLSearchParams,o=t.reduce((e,t)=>{if(null!=t){let r=function(e){let t;try{t=decodeURIComponent(e)}catch(r){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(a){let r=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(r&&r.length>1)return r[1];return e}}(t);return e.add(r)}return e},new Set);u.append(a.NR.SOURCE_EVENT_ID,e??"0"),u.append(a.NR.DESTINATION,JSON.stringify([...o])),u.append(a.NR.EXPIRY,r?a.uV:a.ug),u.append(a.NR.PRIORITY,r?a.NR.CLICK_PRIORITY:a.NR.VIEW_PRIORITY),i&&u.append(a.NR.ADVERTISER_ID,i),s&&u.append(a.NR.CAMPAIGN_ID,s),u.append(a.NR.SOURCE_EVENT_TYPE,r?a.bC:a.Cu);try{let{hostname:e}=new URL(window.location.href);"www.pinterest.com"!==e&&u.append(a.NR.HOSTNAME,e)}catch(e){(0,n.nP)("webapp.arapi.generateARASourceEventURL",{sampleRate:.1,tags:{status:"failed",href:window&&window.location&&window.location.href}})}return"https://www.pinterest.com/attribution_source/?"+u.toString()}async function i(e,t,r,a,i,u,o,l,c){let d;let{appType:p,osType:E}=u||{},_="",S="";if(["Pin","pinImpressions"].includes(e)&&t&&(a||l||c)){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:p,osType:E}});try{if(!window.document.featurePolicy?.allowsFeature("attribution-reporting")){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:p,osType:E}});return}_=s(r,[a,l,c],!1,i,o);try{S=new URL(window.location.href).hostname}catch(e){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"hostname_parse_failed",href:window&&window.location&&window.location.href}})}if(S&&"www.pinterest.com"!==S)document.createElement("img").setAttribute("attributionsrc",_),(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"international",appType:p,osType:E,hostname:S}});else if(!(d=await window.fetch(_,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}})).ok)throw Error("server request failed.");(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:p,osType:E}})}catch(e){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:e.name,message:e.message,appType:p,osType:E,hostname:S,responseStatus:d&&d.status}})}}else(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:p,osType:E}})}function u(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},24691:(e,t,r)=>{r.d(t,{Z:()=>s});let a="/business/business-manager/",n="/business/business-hierarchy/",s=(e,t,r,s)=>{switch(e){case"DASHBOARD":return s?`${n}${String(s)}/dashboard/`:`${a}${String(t)}/dashboard/`;case"PEOPLE":return`${a}${String(t)}/employees/`;case"PARTNERS":return`${a}${String(t)}/partners/`;case"AD_ACCOUNTS":return`${a}${String(t)}/ad-accounts/`;case"HISTORY":return`${a}${String(t)}/history/`;case"PEOPLE_DETAIL":return`${a}${String(t)}/employees/${String(r)}/details/`;case"PARTNERS_DETAIL":return`${a}${String(t)}/partners/${String(r)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${a}${String(t)}/shared/${String(r)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${a}${String(t)}/ad-accounts/${String(r)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${a}${String(t)}/ad-accounts/pending/${String(r)}/details/`;case"PEOPLE_INVITES":return`${a}${String(t)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${a}${String(t)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${a}${String(t)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${a}${String(t)}/ad-accounts/pending`;case"AD_ACCOUNTS_CEE_MIGRATION":return`${a}${String(t)}/ad-accounts/cee-migration`;case"PARTNERS_INVITE_PAGE":return`${a}${String(t)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${a}${String(t)}/partners/requests/`;case"PROFILES":return`${a}${String(t)}/profiles/`;case"PROFILES_DETAIL":return`${a}${String(t)}/profiles/${String(r)}/details/`;case"BUSINESS_SECURITY":return`${a}${String(t)}/security/`;case"SUPPORT_TOOL":return`${a}${String(t)}/support/`;case"ASSET_GROUPS":return r?`${a}${String(t)}/asset-groups/?asset_group_id=${String(r)}`:`${a}${String(t)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${a}${String(t)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${n}${String(s)}/hierarchy/`;case"BUSINESS_HIERARCHY_BUSINESS_SECURITY":return`${n}${String(s)}/business_security/`;case"MANAGERS":return`${n}${String(s)}/managers/`;case"AUDIENCES":return`${a}${String(t)}/audiences/`;case"SHARED_TAGS":return`${a}${String(t)}/shared-tags/`;case"CATALOGS":return`${a}${String(t)}/catalogs/`;case"BRAND_SAFETY":return`${a}${String(t)}/brand-safety/`;default:return a}}},259866:(e,t,r)=>{r.d(t,{Z:()=>a});function a(e){return function e(t,r){let a;if(null==t||"object"!=typeof t&&"function"!=typeof t)return t;let n=r.find(e=>e.value===t);if(n)return n.result;let s=Object.prototype.toString.call(t);switch(s){case"[object Array]":a=Array(t.length);break;case"[object Set]":a=new Set;break;case"[object Object]":case"[object Arguments]":a={};break;case"[object Map]":a=new Map;break;default:return t}let i=[...r,{value:t,result:a}];switch(s){case"[object Array]":t.forEach((t,r)=>{a[r]=e(t,i)});break;case"[object Set]":t.forEach(t=>{a.add(e(t,i))});break;case"[object Object]":case"[object Arguments]":Object.entries(t).forEach(([t,r])=>{a[t]=e(r,i)});break;case"[object Map]":t.forEach((t,r)=>{a.set(r,e(t,i))})}return a}(e,[])}},705895:(e,t,r)=>{function a(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:()=>i});let n=new class{constructor(){a(this,"onResumeListeners",[]),a(this,"onPauseListeners",[]),a(this,"inExp",!1),a(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},s=e=>{if(e.isHidden){let{reason:t}=e;n.windowInFocus=!1,n.onPauseListeners.forEach(e=>e(t))}else n.windowInFocus=!0,n.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>s({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>s({isHidden:!1})),window.addEventListener("blur",()=>s({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>s({isHidden:!1})),window.addEventListener("pagehide",()=>s({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>s(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>s(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let i=n},308548:(e,t,r)=>{r.d(t,{Z:()=>a});let a=e=>Array.from(e)[0].toUpperCase()+Array.from(e).slice(1).join("")},487487:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(689390),n=r(139655);let s=e=>{let t=/^\/pin\/([a-zA-Z0-9-]+)/,r=(0,n.Z)(e);if(t.test(r.path)){let e=r.path.match(t);if(e)return(0,a.Z)(e[1]).pinId||void 0}}},998449:(e,t,r)=>{r.d(t,{Z:()=>s});let a=(e,t)=>0===e.lastIndexOf(t,0);var n=r(885896);let s=({url:e})=>{let t=(0,n.Z)("/");return a(e,t)?e.substr(t.length-1):e}},477458:(e,t,r)=>{r.d(t,{Z:()=>i,q:()=>s});var a=r(667294);let n=()=>{let[e,t]=(0,a.useState)(!1),[r,n]=(0,a.useState)(!1),[s,i]=(0,a.useState)(!1);return{active:e,focused:r,hovered:s,onBlur:()=>{n(!1),t(!1)},onFocus:()=>n(!0),onMouseDown:()=>t(!0),onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),t(!1)},onMouseUp:()=>t(!1)}};function s({children:e}){return e(n())}let i=n},369708:(e,t,r)=>{r.d(t,{Wr:()=>c,rG:()=>l});var a=r(667294),n=r(214877),s=r(342513),i=r(340523),u=r(785893);let{Provider:o,useHook:l}=(0,s.Z)("VideoPlayer");function c({children:e}){let{logContextEvent:t,logImpression:r}=(0,n.v)(),{checkExperiment:s}=(0,i.F)(),[l,c]=(0,a.useState)(!1),[d,p]=(0,a.useState)([]),[E,_]=(0,a.useState)([]),[S,m]=(0,a.useState)({}),A=s("web_ads_mrc_video_impression").anyEnabled,f=e=>{m(t=>({...t,[e]:!0}))},y=(0,a.useCallback)(e=>{if(18===e.event_type&&e.event_data?.pinImpressions?.length){let{isNativeVideoAndWatchable:t}=e.event_data.pinImpressions[0],r=(e.aux_data?.commerce_data||"").includes("story_pin_id");A&&(t||r)&&p(t=>[...t,e].slice(-1e3))}},[A]),h=(0,a.useCallback)(e=>{18===e.eventType&&A&&_(t=>[...t,e].slice(-1e3))},[A]),g=e=>{let{renderDuration:t,time:r}=e.event_data.pinImpressions[0],a=Math.max(t,15e8);return{...e,event_data:{...e.event_data,pinImpressions:[{...e.event_data.pinImpressions[0],isMrcBtr:!0,endTime:r+a,renderDuration:a}]}}},I=e=>{if(e.eventData){let{time:t,endTime:r}=e.eventData,a=Math.max((r??0)-(t??0),15e8);return{...e,eventData:{...e.eventData,isMrcBtr:!0,endTime:(t??0)+a}}}return null};(0,a.useEffect)(()=>{let e=d.filter(e=>{let{pinIdStr:r}=e.event_data.pinImpressions[0];return!S[r]||!A||(t(g(e)),!1)});e.length!==d.length&&p(e)},[d,A,t,S]),(0,a.useEffect)(()=>{let e=E.filter(e=>{let t=e.eventData?.pinIdStr;if(!t)return!1;if(S[t]&&A){let t=I(e);return t&&r(t),!1}return!0});e.length!==E.length&&_(e)},[E,A,r,S]);let R=(0,a.useMemo)(()=>({captionsEnabled:l,logMrcVideoAdImpressionOnPlay:h,logMrcVideoAdEventOnPlay:y,setCaptionsEnabled:c,setVideoPlayed:f,videosPlayed:S}),[l,y,h,S]);return(0,u.jsx)(o,{value:R,children:e})}},186966:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(372085);function n(){return async()=>{let e=await (0,a.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),t=e.resource_response?e.resource_response.data:{data:[]};return await Promise.all(t&&t.data||[])}}},575333:(e,t,r)=>{r.d(t,{Z:()=>a});let a=({businessAccess:e})=>e??{}},474708:(e,t,r)=>{r.d(t,{q:()=>p,y:()=>E});var a=r(667294),n=r(340523),s=r(5859),i=r(238299),u=r(372085);function o(e,t){(0,i.TT)(t)&&(0,u.Z)({method:"PUT",url:`/ads/v4/preferences/${e}/`,data:{level:"ADVERTISER",key:"CAMPAIGN_TOOL_PREFERENCE",preferences:t}})}var l=r(897295),c=r(785893);let d=(0,a.createContext)({campaignToolPreference:null,updateCampaignToolPreference:o}),p=({children:e})=>{let[t,r]=(0,a.useState)(null),u=(0,n.F)(),{advertiser:p}=(0,s.B)(),E=async(e,t)=>{o(e,t),r(t)};(0,a.useEffect)(()=>{(0,i.UM)(u,{skipActivation:!0})&&(async()=>{p&&r(await (0,l.f)(p.id))})()},[p,u]);let _=(0,a.useMemo)(()=>({campaignToolPreference:t,updateCampaignToolPreference:E}),[t]);return(0,c.jsx)(d.Provider,{value:_,children:e})},E=()=>(0,a.useContext)(d)},897295:(e,t,r)=>{r.d(t,{Z:()=>d,f:()=>c});var a=r(667294),n=r(372085),s=r(340523),i=r(5859),u=r(238299);let o="ADVERTISER",l=(e,t)=>e&&e[t]&&e[t][0]&&e[t][0].preferences,c=async e=>{let t;try{let r=(await (0,n.Z)({method:"GET",url:`/ads/v4/preferences/${e}/`,data:{level:o,key:"CAMPAIGN_TOOL_PREFERENCE"}})).resource_response.data;t=l(r,o)}catch{return null}return t&&(0,u.TT)(t)?t:null},d=()=>{let[e,t]=(0,a.useState)(null),r=(0,s.F)(),{advertiser:n}=(0,i.B)();return(0,a.useEffect)(()=>{(0,u.UM)(r,{skipActivation:!0})&&(async()=>{n&&t(await c(n.id))})()},[n,r]),e}},454535:(e,t,r)=>{r.d(t,{XI:()=>n,YZ:()=>i,rc:()=>s,sU:()=>l});var a=r(667294);function n(e){let[t,r]=(0,a.useState)(!1),n=()=>r(!0),s=()=>r(!1);return(0,a.useEffect)(()=>{let{current:t}=e;return t&&(t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",s)),()=>{t&&(t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",s))}}),t}let s=e=>{let t=(0,a.useRef)(e);return(0,a.useEffect)(()=>{t.current=e}),t.current};function i(){let e=(0,a.useRef)(!0);return(0,a.useEffect)(()=>{e.current=!1},[]),e.current}function u(e,t){return Object.is(e,t)}let o=Symbol("pre-initial value");function l(e,{equal:t=u,delta:r}={equal:u}){let n=(0,a.useRef)(o),s=n.current;return(0,a.useEffect)(()=>{n.current=e}),{previousValue:s,changed:s===o||!t(s,e),delta:r?.(s,e)}}},239821:(e,t,r)=>{r.d(t,{g:()=>p,I:()=>d});var a=r(667294),n=r(342513),s=r(705895),i=r(259866);let u={appInFocus:!0,footerPlusButtonVisible:!0,isAutoplay:!1,showTypeaheadOverlay:!1,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,organicVideosAutoplaying:{},promotedVideosAutoplaying:{}},viewportSize:"lg"},o=(e=u,t)=>{if("TOGGLE_TYPEAHEAD_OVERLAY"===t.type&&e.showTypeaheadOverlay!==t.payload)return{...e,showTypeaheadOverlay:t.payload};if("SET_CURRENT_VIDEO"===t.type){let{payload:r}=t,{pinId:a,isPromoted:n,currentTime:s}=r,{videosAutoplaying:u}=e,{currentlyPlayingOrganicVideoId:o,promotedVideosAutoplaying:l,organicVideosAutoplaying:c}=u,d=(0,i.Z)(l),p=(0,i.Z)(c);return!n&&o?e:(n?d[a]={pinId:a,currentTime:s,paused:!1}:p[a]={pinId:a,currentTime:s,paused:!1},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:n?o:a,promotedVideosAutoplaying:d,organicVideosAutoplaying:p}})}if("SET_IS_AUTOPLAY"===t.type&&e.isAutoplay!==t.payload)return{...e,isAutoplay:t.payload};if("PAUSE_CURRENT_VIDEO"===t.type){let{payload:r}=t,{pinId:a,isPromoted:n,currentTime:s}=r,{videosAutoplaying:u}=e,{promotedVideosAutoplaying:o,organicVideosAutoplaying:l}=u,c=(0,i.Z)(o),d=(0,i.Z)(l);return n?c[a]={...c[a],paused:!0,currentTime:s}:d[a]={...d[a],paused:!0,currentTime:s},{...e,videosAutoplaying:{currentlyPlayingOrganicVideoId:null,promotedVideosAutoplaying:c,organicVideosAutoplaying:d}}}if("SET_APP_FOCUS_STATE"===t.type&&e.appInFocus!==t.payload)return{...e,appInFocus:t.payload};if("SET_VIEWPORT_SIZE"===t.type&&e.viewportSize!==t.payload)return{...e,viewportSize:t.payload};if("SET_FOOTER_VISIBILITY_STATE"===t.type&&e.footerPlusButtonVisible!==t.payload)return{...e,footerPlusButtonVisible:t.payload};return e};var l=r(785893);let{Provider:c,useHook:d}=(0,n.Z)("AppUI");function p({children:e}){let[t,r]=(0,a.useReducer)(o,u),n=(0,a.useCallback)(e=>r({type:"PAUSE_CURRENT_VIDEO",payload:e}),[]),i=(0,a.useCallback)(e=>r({type:"SET_APP_FOCUS_STATE",payload:e}),[]),d=(0,a.useCallback)(e=>r({type:"SET_CURRENT_VIDEO",payload:e}),[]),p=(0,a.useCallback)(e=>r({type:"SET_FOOTER_VISIBILITY_STATE",payload:e}),[]),E=(0,a.useCallback)(e=>r({type:"SET_IS_AUTOPLAY",payload:e}),[]),_=(0,a.useCallback)(e=>r({type:"SET_VIEWPORT_SIZE",payload:e}),[]),S=(0,a.useCallback)(e=>r({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:e}),[]),m=(0,a.useMemo)(()=>({pauseAutoplay:n,setCurrentVideo:d,setFooterPlusButtonVisible:p,setIsAutoplay:E,setViewportSize:_,toggleTypeaheadOverlay:S,setAppFocusState:i,appUI:t}),[n,d,p,E,_,S,i,t]);return(0,a.useEffect)(()=>{s.Z.onSessionResume(()=>{i(!0)}).onSessionPause(()=>{i(!1)})},[i]),(0,l.jsx)(c,{value:m,children:e})}},136359:(e,t,r)=>{r.d(t,{c:()=>n,t:()=>s});var a=r(514810);function n({children:e}){let{height:t}=(0,a.Z)();return e(t)}function s(){let{height:e}=(0,a.Z)();return e}},514810:(e,t,r)=>{r.d(t,{C:()=>a,Z:()=>s});let{Provider:a,useHook:n}=(0,r(342513).Z)("Header"),s=n},483169:(e,t,r)=>{r.d(t,{_:()=>c,j:()=>d});var a=r(667294),n=r(700280),s=r(342513),i=r(288673),u=r(149722),o=r(785893);let{Provider:l,useHook:c}=(0,s.Z)("SosInfo");function d({children:e}){let[t,r]=(0,a.useState)("0"),{is_sterling_on_steroids:s}=(0,n.u)(),c=(0,u.Z)(),d=c?.id;(0,a.useEffect)(()=>{!async function(){if(s){let e=await (0,i.gE)({entity_id:d});e&&e.sos_user_type&&r(e.sos_user_type)}}()},[d,s]);let p=(0,a.useMemo)(()=>({adminPermissionType:t}),[t]);return(0,o.jsx)(l,{value:p,children:e})}},520719:(e,t,r)=>{r.d(t,{$o:()=>i,GW:()=>a,Jo:()=>s,MS:()=>A,Q8:()=>S,VX:()=>E,Zo:()=>o,aD:()=>l,b2:()=>d,g2:()=>p,s4:()=>u,tK:()=>m,ym:()=>c,zQ:()=>_});let a="/business/hub/?show_vmp=true",n=["FR"],s=["US","GB","CA","AU","DE","FR"].concat(["ES","IT","AT","CH","NL","BR","MX"]).filter(e=>!n.includes(e)),i={APPROVED:"approved",PENDING:"pending",DISAPPROVED:"declined",APPEAL_PENDING:"appeal_pending"},u=Object.freeze({APPLIED:"APPLIED",ACCEPTED:"ACCEPTED",NON_COMPLIANT:"NON_COMPLIANT",SUSPENDED:"SUSPENDED",CANCELLED:"CANCELLED"}),o=Object.freeze({UNSTARTED:"workflow-status-unstarted",IN_PROGRESS:"workflow-status-in-progress",ACCEPTED:"check-circle",ATTENTION:"workflow-status-warning",REJECTED:"workflow-status-problem",RECOMMENDED:"info-circle"}),l=Object.freeze({UNSTARTED:"dark",IN_PROGRESS:"success",ACCEPTED:"success",ATTENTION:"warning",REJECTED:"error",RECOMMENDED:"subtle"}),c="Verified merchant program not yet available in this country",d=2e3,p={can_appeal:!0,is_appeal:!1,appeal_count:0,appeal_comment:"",shipping_policy_url:"",return_policy_url:"",review_status:2,review_reasons:[]},E=Object.freeze({ACCOUNT_AGE:"ACCOUNT_AGE",DOMAIN_AGE:"DOMAIN_AGE",PROFILE_IMAGE:"PROFILE_IMAGE",PROFILE_COVER_IMAGE:"PROFILE_COVER_IMAGE",BIO:"BIO",SHOP_TAB:"SHOP_TAB",PINNER_FEEDBACK:"PINNER_FEEDBACK"}),_=[E.ACCOUNT_AGE,E.DOMAIN_AGE,E.PROFILE_IMAGE,E.PROFILE_COVER_IMAGE,E.BIO,E.SHOP_TAB,E.PINNER_FEEDBACK],S=Object.freeze({PASS:"PASS",FAIL:"FAIL"}),m=30,A=.5},563366:(e,t,r)=>{r.d(t,{L:()=>a,Z:()=>n});let a=506467,n="_self-profile"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73977-0f00caff831a6d5b.mjs.map