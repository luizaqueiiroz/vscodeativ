"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[50257,51699],{106398:(e,o,t)=>{var l;t.r(o),t.d(o,{default:()=>a});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FollowButton_pin",selections:[{alias:null,args:null,concreteType:"Domain",kind:"LinkedField",name:"linkDomain",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"officialUser",plural:!1,selections:l=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nativeCreator",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:l,storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:l,storageKey:null}],type:"Pin",abstractKey:null};i.hash="cabaa35ed7d59dee006897bf3ef32e3d";let a=i},297134:(e,o,t)=>{t.d(o,{Z:()=>a});var l=t(883119),i=t(785893);let a=({text:e})=>(0,i.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{textOverflow:"ellipsis",whiteSpace:"nowrap"}},"data-test-id":"line-clamp-wrapper",fit:!0,overflow:"hidden",children:e})},877457:(e,o,t)=>{t.d(o,{g:()=>n,t:()=>a});var l=t(667294);let i=(0,l.createContext)(null),a=i.Provider,n=()=>(0,l.useContext)(i)},757017:(e,o,t)=>{t.d(o,{Z:()=>n});var l=t(188349),i=t(140017),a=t(339001);function n(){let e=(0,i.ZP)();return function(o,t){let i=new Date(o).getTime(),n=Date.now()-i,r=Math.floor(n/l.FS),s=Math.floor(n/l.UK),d=Math.floor(n/l.F4),c=Math.floor(n/l.VL),_=Math.floor(n/l.N9),u=Math.floor(n/l.N1),h=e.nbt(["Há {{ minutes }} minuto", "Há {{ minutes }} minutos"], r, " - ", true),m=e.nbt(["Há {{ hours }} hora", "Há {{ hours }} horas"], s, " - ", true),g=e.nbt(["Há {{ days }} dia", "Há {{ days }} dias"], d, " - ", true),x=e.nbt(["Há {{ weeks }} semana", "Há {{ weeks }} semanas"], c, " - ", true),f=e.nbt(["há {{ months }} mês", "há {{ months }} meses"], _, "useGetHumanizedTimeSince.monthsString", true),b=e.nbt(["Há {{ years }} ano", "Há {{ years }} anos"], u, " - ", true),p=e.nbt(["{{ minutes }}min", "{{ minutes }}min"], r, "minutes ago abbreviated", true),v=e.nbt(["{{ hours }}h", "{{ hours }}h"], s, "hours ago abbreviated", true),y=e.nbt(["{{ days }}d", "{{ days }}d"], d, "days ago abbreviated", true),w=e.nbt(["{{ weeks }}s", "{{ weeks }}s"], c, "weeks ago abbreviated", true),P=e.nbt(["{{ months }}mês", "{{ months }}meses"], _, "months ago abbreviated", true),A=e.nbt(["{{ years }}a", "{{ years }}a"], u, "years ago abbreviated", true);return u>0?(0,a.nk)(t?A:b,{years:u}).join(""):_>0?(0,a.nk)(t?P:f,{months:_}).join(""):c>0?(0,a.nk)(t?w:x,{weeks:c}).join(""):d>0?(0,a.nk)(t?y:g,{days:d}).join(""):s>0?(0,a.nk)(t?v:m,{hours:s}).join(""):r>0?(0,a.nk)(t?p:h,{minutes:r}).join(""):e.bt("Agora", "Just now", " - ", undefined, true)}}},72461:(e,o,t)=>{t.d(o,{Z:()=>d});var l=t(140017),i=t(427514);let a=(e,o)=>{let t=o||0,l=10**t,i=+(t?e*l:e).toFixed(8),a=Math.floor(i),n=i-a,r=n>.49999999&&n<.50000001?a%2==0?a:a+1:Math.round(i);return t?r/l:r},n=({maximumFractionDigits:e,minimumFractionDigits:o,style:t,currency:l})=>{let i={maximumFractionDigits:e,minimumFractionDigits:o};return t?{...i,style:t,..."currency"===t?{currency:l,currencyDisplay:"symbol"}:{}}:i},r=e=>{try{0..toLocaleString([e])}catch(e){return!1}return!0},s=(e,o)=>{if(o){let{minimumFractionDigits:t,maximumFractionDigits:l}=new Intl.NumberFormat(e,{style:"currency",currency:o}).resolvedOptions();if(void 0!==t&&void 0!==l)return{minimumFractionDigits:t,maximumFractionDigits:l}}return{minimumFractionDigits:2,maximumFractionDigits:2}};function d(){let e=(0,l.ZP)();return(o,t,l)=>{let d=0,c=0,_=l&&l.style||void 0,u=l&&l.shortform||!1,h=l&&l.uplimit||void 0,m=l&&l.currency||void 0,g=!!h&&t>=h,x=h&&g?h:t;if("currency"===_){let{minimumFractionDigits:e,maximumFractionDigits:t}=s(o,m);d=void 0===l||void 0===l.maximum_fraction_digits?t:l.maximum_fraction_digits,c=void 0===l||void 0===l.minimum_fraction_digits?e:l.minimum_fraction_digits}else d=void 0===l||void 0===l.maximum_fraction_digits?0:l.maximum_fraction_digits,c=void 0===l||void 0===l.minimum_fraction_digits?0:l.minimum_fraction_digits;if(u&&x>999&&(d=void 0===l||void 0===l.shortform_maximum_fraction_digits?2:l.shortform_maximum_fraction_digits,c=0),d<c)return String(x);let f=x,b="",p=[{"100M":{value:1e8,localeKey:e.bt("億", "億", "Abbreviation for one hundred millions. This abbreviation is only used in Chinese, Japanese and Korean.", undefined, true)}},{"10k":{value:1e4,localeKey:e.bt("万", "万", "Abbreviation for ten thousand. This abbreviation is only used in Chinese, Japanese and Korean.", undefined, true)}}],v=[{b:{value:1e9,localeKey:e.bt("B", "B", "Abbreviation for one billion.", undefined, true)}},{m:{value:1e6,localeKey:e.bt("M", "M", "Abbreviation for one million.", undefined, true)}},{k:{value:1e3,localeKey:e.bt("mil", "k", "Abbreviation for one thousand.", undefined, true)}}],y=/^zh|ja|ko/.test(o);if(u&&x>999){let e=y?p:v;for(let o=0;o<e.length;o+=1){let t=Object.keys(e[o])[0],l=e[o][t].value;if(x>=l){f=a(x/l*Math.pow(10,d))/Math.pow(10,d),b=e[o][t].localeKey;break}}}if(null==f)return"";let w=f.toLocaleString([r(o)&&"ar-SA"!==o?o:"en-US"],n({maximumFractionDigits:d,minimumFractionDigits:c,currency:m,style:_}));return b&&b.length>0?(0,i.Z)(e.bt("{{formattedNumber}}{{numberSuffix}}", "{{formattedNumber}}{{numberSuffix}}", "i18n.usePrettyNumberFormat.prettyNumberFormat", undefined, true),{formattedNumber:w,numberSuffix:b})+(g?"+":""):w+(g?"+":"")}}},317540:(e,o,t)=>{t.d(o,{Z:()=>l});let l={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},241552:(e,o,t)=>{t.d(o,{l:()=>a,r:()=>n});var l=t(667294);let i=(0,l.createContext)(null),a=()=>(0,l.useContext)(i),n=i.Provider},48481:(e,o,t)=>{t.d(o,{Z:()=>a});var l=t(877457),i=t(241552);let a=()=>{let e=(0,l.g)(),o=(0,i.l)();return t=>{let{mobileOptions:l,desktopOptions:i,reason:a,attributionLabel:n,pinId:r}=t;e?e.showDesktopSignupModal({signupFlow:i?.modalType==="login"?{type:"login"}:{type:"signup"},reason:a,attributionLabel:n,...i?.modalOptions}):o&&o.showMobileSignupModal({reason:a,attributionLabel:n,headingType:l?.headingType??"none",pinId:r})}}},55202:(e,o,t)=>{t.d(o,{U:()=>n,Z:()=>r});var l=t(317540),i=t(785893);let a=()=>{},n=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function r({allowClickAndDrag:e,allowEsc:o,allowMediaPlay:t,allowScroll:r,children:s}){let d=e=>{o&&e.keyCode===l.Z.ESCAPE||n(e)};return(0,i.jsx)("div",{onAbort:n,onAnimationEnd:n,onAnimationIteration:n,onAnimationStart:n,onBlur:a,onCanPlay:t?a:n,onCanPlayThrough:n,onChange:n,onClick:e?a:n,onCompositionEnd:n,onCompositionStart:n,onCompositionUpdate:n,onContextMenu:n,onCopy:n,onCut:n,onDoubleClick:n,onDurationChange:n,onEmptied:n,onEncrypted:n,onEnded:n,onError:n,onFocus:a,onInput:n,onInvalid:n,onKeyDown:d,onKeyPress:d,onKeyUp:d,onLoad:n,onLoadedData:n,onLoadedMetadata:n,onLoadStart:n,onMouseDown:n,onMouseEnter:n,onMouseLeave:n,onMouseMove:e?a:n,onMouseOut:n,onMouseOver:n,onMouseUp:e?a:n,onPaste:n,onPause:n,onPlay:n,onPlaying:n,onProgress:n,onRateChange:n,onScroll:r?a:n,onSeeked:n,onSeeking:n,onSelect:n,onStalled:n,onSubmit:n,onSuspend:n,onTimeUpdate:n,onTouchCancel:n,onTouchEnd:e?a:n,onTouchMove:e?a:n,onTouchStart:e?a:n,onTransitionEnd:n,onVolumeChange:n,onWaiting:n,onWheel:n,children:s})}},623409:(e,o,t)=>{t.d(o,{Z:()=>s});var l=t(667294),i=t(616550),a=t(96157),n=t(217058);let r=e=>(0,a.L6)(e)?"pin":(0,a.am)(e)?"board":(0,a.Xn)(e)?"login":(0,a.C$)(e)?"home":(0,a.cD)(e)?"profile":(0,a.dr)(e)?"ideas":(0,a.gT)(e)?"ideas-root":(0,a.tZ)(e)?"videos":(0,a.Q0)(e)?"videos-category":(0,a.$Y)(e)?"article":(0,a.E0)(e)?"shopping-spotlight":(0,a.Zz)(e)?"today":(0,a.j8)(e)?"unauth-profile":(0,a.f1)(e)?"shopping-root":(0,a.OX)(e)?"shopping-category":"other";function s(){let e=(0,i.TH)();return(0,l.useCallback)(({action:o,item:t,within:l})=>{let i=r(e);(0,n.My)(`logged_out_product.interaction.${i}.${o}`,{item:t||"none",within:l||"none"})},[e])}},316667:(e,o,t)=>{t.d(o,{U:()=>a,Z:()=>n});var l=t(883119),i=t(785893);let a=", ";function n(){return(0,i.jsx)(l.xu,{display:"visuallyHidden",children:a})}},213503:(e,o,t)=>{t.d(o,{Z:()=>A}),t(167912);var l,i=t(883119),a=t(587703),n=t(207012),r=t(140017),s=t(340523),d=t(48481),c=t(217058),_=t(623409),u=t(13848),h=t(554786),m=t(494125),g=t(149722),x=t(735728),f=t(358589),b=t(386008),p=t(155087),v=t(155117),y=t(785893);let w=({children:e,pulsar:o,testId:t})=>o.show?(0,y.jsx)(i.xu,{"data-test-id":t,position:"relative",children:(0,y.jsxs)(i.iP,{onTap:o.onClick,tapStyle:"none",children:[(0,y.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},marginTop:-5,position:"absolute",children:e}),(0,y.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},marginTop:-12,position:"absolute",children:(0,y.jsx)(i.o3,{})})]})}):(0,y.jsx)(i.xu,{"data-test-id":t,children:e}),P=void 0!==l?l:l=t(106398);function A({auxData:e,disabled:o,disableLog:t,followEventType:l,id:A,inline:j,invertColors:z,isFollowed:C,isIdeaPin:k,isLegoEnabled:S,isSecondaryButton:Z,isUserFollowButton:T,isUserMe:E,onFollow:I,onUnfollow:F,pinKey:D,shouldUseLegoColors:B,showPulsar:M,size:U,textType:L="FollowFollowing",unfollowEventType:H,viewParameter:N,viewType:O,clientTrackingParams:R}){let K;let G=(0,r.ZP)(),W=(0,h.HG)(),{showToast:$}=(0,u.F9)(),J=(0,_.Z)(),V=(0,a.Z)(),X=(0,d.Z)(),{checkExperiment:Y}=(0,s.F)(),q=(0,f.Z)(),Q=(0,g.Z)(),ee=Q&&Q.isAuth,{unauthFollowUserId:eo,setUnauthFollowUserId:et}=(0,v.f)(),el=(0,b.mN)()(A),ei=el&&{imageMediumUrl:el.image_medium_url,username:el.username},ea=(0,n.Z)(P,D),en=ea?.linkDomain,er=ea?.nativeCreator,es=ea?.originPinner,ed=ea?.pinner;K=er||(en?en.officialUser:es||ed);let ec=ei??K;(0,m.Z)(()=>{!W&&ee&&eo&&A&&eo===A&&I(A)});let e_=q({fn:()=>{ee?C?(F(A),t||V({event_type:H,view_type:O,view_parameter:N,object_id_str:A,aux_data:e,clientTrackingParams:R})):(I(A),T&&$(({hideToast:e})=>{let o=ec?.username?`/${ec.username}/`:"";return(0,y.jsx)(p.Z,{handleHide:e,href:o,imageUrl:ec?.imageMediumUrl||"",text:(0,y.jsx)(i.xv,{lineClamp:4,children:G.bt("A seguir! Os seus Pins criados serão apresentados no teu feed da página principal!", "Following! Their created Pins will show up in your home feed!", "followButton.follow.informationalToastText", undefined, true)}),userId:A})}),t||V({event_type:l,view_type:O,view_parameter:N,object_id_str:A,aux_data:e,clientTrackingParams:R})):((0,c.NC)(C?"press_profile_unfollow":"press_profile_follow"),J({action:"click",item:C?"unfollow-button":"follow-button"}),X({reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP",attributionLabel:k?"click_idea_pin_follow":"click_follow",desktopOptions:{modalType:"signup",modalOptions:W&&Y("pcons_dweb_contextual_follow_modal").anyEnabled?{source:"followButton",container:"follow"}:void 0},mobileOptions:!W&&Y("pcons_mweb_contextual_follow_modal").anyEnabled?{headingType:"follow"}:void 0}),W||et(A??""),(0,c.NC)("clickthrough"))},modalHeader:(0,x.N4)({i18n:G,toFollow:!C})}),eu=!C&&!!M,eh=()=>{if(E)return G.bt("És tu!", "That's you!", "Follow button is disabled because this is you", undefined, true);if("AddRemove"===L)return C?G.bt("Remover", "Remove", "unfollowButton.removeText", undefined, true):G.bt("Adicionar", "Add", "followButton.addText", undefined, true);let e="FollowUnfollow"===L?G.bt("Deixar de seguir", "Unfollow", "unfollowButton.unfollowText", undefined, true):G.bt("A seguir", "Following", "Follow button label - followed state", undefined, true);return C?e:G.bt("Seguir", "Follow", "Follow button label - unfollowed state", undefined, true)};return(0,y.jsx)(w,{pulsar:eu?{show:!0,onClick:e_}:{show:!1},testId:E||C?"board-unfollow-button":"board-follow-button",children:(0,y.jsx)(i.zx,{accessibilityLabel:eh(),color:B||"AddRemove"===L||!S&&Z||z?"gray":"red",disabled:E||o,fullWidth:j,onClick:eu?void 0:({event:o})=>{o.preventDefault(),o.stopPropagation(),t||V({event_type:101,component:13672,element:11951,object_id_str:A,view_type:O,view_parameter:N,aux_data:e,clientTrackingParams:R}),e_()},selected:C||!1,size:U,text:eh()})})}},761203:(e,o,t)=>{t.d(o,{bn:()=>r,fJ:()=>d,gC:()=>s});var l=t(545007),i=t(342513),a=t(785893);let{Provider:n,useHook:r}=(0,i.Z)("Boards");function s(){let e=r();return o=>e[o]}function d({children:e}){let o=(0,l.v9)(({boards:e})=>e,l.wU);return(0,a.jsx)(n,{value:o,children:e})}},155117:(e,o,t)=>{t.d(o,{f:()=>r,w:()=>s});var l=t(667294),i=t(342513),a=t(785893);let{Provider:n,useHook:r}=(0,i.Z)("Session");function s({children:e}){let[o,t]=(0,l.useState)(void 0),i=(0,l.useCallback)(()=>t(void 0),[]),r=(0,l.useMemo)(()=>({unauthFollowUserId:o,setUnauthFollowUserId:t,removeUnauthFollowUserId:i}),[o,i]);return(0,a.jsx)(n,{value:r,children:e})}},583130:(e,o,t)=>{t.d(o,{Z:()=>k});var l=t(667294),i=t(616550),a=t(883119),n=t(587703),r=t(205841),s=t(757017),d=t(140017),c=t(72461),_=t(339001),u=t(340523),h=t(5859),m=t(217058),g=t(316667),x=t(274262),f=t(554786),b=t(149722),p=t(464593),v=t(724009),y=t(168477),w=t(304431),P=t(572345),A=t(213503),j=t(939809),z=t(785893);let C=({children:e,isBoardsActualizationRepsExp:o})=>(0,f.HG)()?(0,z.jsx)(a.X6,{accessibilityLevel:2,lineClamp:o?2:1,size:o?"300":"400",children:e}):(0,z.jsx)(a.xv,{lineClamp:o?2:1,size:o?"200":void 0,weight:"bold",children:e});function k({archivedDate:e,boardId:o,boardUrl:t,canEdit:k,collaboratingUsers:S,containerBackgroundColor:Z,coverPhoto:T,followedByMe:E,fullSizeDrawer:I,sensitivityScreen:F,handleInviteResponse:D,hideMeta:B,id:M,invite:U,imagesLego:L=[],isBoardInviteAccepted:H,isActive:N,isAuthenticated:O,isCollaborative:R,isCollaborator:K,isCollaboratorsAttributionVisible:G=!1,isNoBoardTitleStyle:W=!1,isOwner:$,isProtected:J,isSecret:V,isSectionCountVisible:X=!1,isTemporarilyDisabled:Y,lastModifiedDate:q,layout:Q,locale:ee,name:eo,numCols:et,onEditClick:el,onFollow:ei,onUnfollow:ea,owner:en,pinCount:er=0,sectionCount:es,showFollowButton:ed,viewParameter:ec,viewType:e_,slotIndex:eu}){let eh=(0,d.ZP)(),em=(0,s.Z)(),eg=(0,c.Z)(),ex=(0,n.Z)(),ef=(0,f.HG)(),{isRTL:eb}=(0,h.B)(),{username:ep}=(0,b.Z)(),{checkExperiment:ev}=(0,u.F)(),{username:ey}=(0,i.UO)(),ew=ef&&O,eP="square"===Q?y.M0:y.z9,eA=!(ep&&ep===ey)&&(ef?ev("dweb_presence_boards_reps_actualization").anyEnabled:ev("mweb_presence_boards_reps_actualization").anyEnabled),ej=ey&&y.sN.includes(ey.toLowerCase()),ez=e=>{O||(0,m.NC)("press_follow_board"),ei&&ei(e)},eC=e=>{O||(0,m.NC)("press_unfollow_board"),ea&&ea(e)},ek=L.map(e=>({url:e.url,name:eo})),eS=!!en&&!k&&ed,eZ=en?.is_verified_merchant,eT=en?.verified_identity?.verified,eE=eZ||eT,eI=eA?ey&&!ej&&R:R,eF=!$&&!K&&!!F?.show_warning,eD={board_id:M,reason:F?.reason},eB=ew?void 0:y.s0;return eA&&(ef&&!O?eB=y.RQ:ef||(eB=y.Y_)),(0,l.useEffect)(()=>{eF&&ex({event_type:13,component:13861,view_type:215,aux_data:eD})},[]),(0,z.jsx)(j.fS,{auxData:{board_id:M,board_pin_count:er??0,board_section_count:es??0},impressionData:{imageURL:T?.url},loggingId:M,slotIndex:eu||0,viewParameter:ec,viewType:e_,children:({impressionTrackerRef:i})=>(0,z.jsxs)(a.xu,{ref:i,"data-test-id":`boardCard-${eo}`,height:eS?`max(calc(25vh + 10px), calc(210px + ${eA?5:0}vh))`:"100%",position:"relative",width:ew?eP:"100%",children:[(0,z.jsx)(w.Z,{canEdit:k,containerBackgroundColor:Z,coverPhoto:T,fullSize:I,images:ek,isActive:N,isProtected:J,isSecret:V,isTemporarilyDisabled:Y,layout:Q,onEditClick:el,renderAsImage:!0,showSensitivityScreen:eF}),!B&&(0,z.jsx)(l.Fragment,{children:U&&!Y?(0,z.jsxs)(l.Fragment,{children:[(0,z.jsxs)(a.xu,{alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",padding:2,children:[(0,z.jsxs)(a.xu,{width:"100%",children:[(0,z.jsx)(a.rU,{href:t??"",children:(0,z.jsx)(a.xu,{marginBottom:1,marginTop:0,children:(0,z.jsx)(C,{isBoardsActualizationRepsExp:eA,children:eo})})}),H?(0,z.jsx)(a.xv,{lineClamp:1,size:"200",children:eh.bt("Aderiste", "You’ve joined", "boardRep.invite.invitationAcceptedText", undefined, true)}):(0,z.jsx)(a.xv,{size:"200",children:function(e,o){let{full_name:t,username:l}=e,i=(0,z.jsx)(a.rU,{display:"inlineBlock",href:`/${l}`,underline:"hover",children:t},"linkToUser");return(0,_.nk)(o.bt("{{ linkToUser }} convidou-te para participar no seu álbum", "{{ linkToUser }} invited you to join this board", "boardRep.invite.invitationText", undefined, true),{linkToUser:i})}(U.invited_by_user,eh)})]}),(0,z.jsx)(v.Z,{boardId:o})]}),H?(0,z.jsx)(a.xu,{direction:"row",display:"flex",paddingX:2,children:(0,z.jsx)(a.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,z.jsx)(a.ZP,{fullWidth:!0,href:t??"",size:"lg",text:eh.bt("Ver álbum", "See board", "boardRep.invite.seeBoardButton", undefined, true)})})}):(0,z.jsxs)(a.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,z.jsx)(a.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,z.jsx)(a.zx,{fullWidth:!0,onClick:()=>{D?.(!1)},size:"lg",text:eh.bt("Recusar", "Decline", "boardRep.invite.declineButton", undefined, true)})}),(0,z.jsx)(a.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,z.jsx)(a.zx,{color:"red",fullWidth:!0,onClick:()=>{D?.(!0)},size:"lg",text:eh.bt("Aceitar", "Accept", "boardRep.invite.acceptButton", undefined, true)})})]})]}):(0,z.jsxs)(a.xu,{height:eB,marginTop:ew?0:1,paddingX:2,paddingY:ew?2:0,children:[W&&(0,z.jsxs)(a.xu,{alignContent:"center",alignItems:"center",display:"flex",justifyContent:"start",marginEnd:2,paddingY:1,children:[(0,z.jsx)(a.xu,{marginEnd:2,marginStart:1,children:(0,z.jsx)(r.qE,{accessibilityLabel:eh.bt("Avatar", "Avatar", "User`s Avatar", undefined, true),name:en?.full_name??"",size:"xs",src:en?.image_medium_url??""})}),(0,z.jsxs)(a.kC,{direction:"column",children:[(0,z.jsxs)(a.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",children:[(0,z.jsxs)(a.xv,{inline:!0,lineClamp:1,size:"100",children:[(0,z.jsx)(a.xv,{inline:!0,size:"100",children:eh.bt("Por", "By", "boardRep.boardCard.userAttribution", undefined, true)})," ",(0,z.jsx)(a.xv,{inline:!0,size:"100",weight:"bold",children:en?.full_name})]}),eE&&(0,z.jsx)(a.xu,{marginStart:1,children:(0,z.jsx)(P.Z,{isVerifiedIdentity:eT,isVerifiedMerchant:eZ,size:"xs"})})]}),(0,z.jsxs)(a.xu,{alignItems:ef?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,z.jsxs)(a.xv,{color:"subtle",lineClamp:1,size:"100",children:[(0,z.jsx)(g.Z,{}),(0,_.nk)(eh.nbt(["{{ count }} Pin", "{{ count }} Pins"], er, "profile.ProfilePage.board.BoardCard.pinsCount", true),{count:eg(ee,er,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),(0,z.jsx)(a.xv,{color:"subtle",size:"100",children:(0,z.jsx)(x.Z,{ariaHidden:!0,size:"100"})}),!e&&(0,z.jsx)(a.xu,{display:"inlineBlock",marginEnd:eb?2:0,children:(0,z.jsxs)(a.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,z.jsx)(g.Z,{}),em(q,!0)]})})]})]})]}),!W&&(0,z.jsxs)(l.Fragment,{children:[(0,z.jsxs)(a.xu,{alignItems:eA?"start":"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,z.jsx)(C,{isBoardsActualizationRepsExp:eA,children:eo}),eI&&!Y&&(0,z.jsx)(v.Z,{boardId:o})]}),eA&&(!ey||G||ej)&&(0,z.jsx)(a.xu,{marginTop:1,children:(0,z.jsx)(p.Z,{boardCollaboratingUsers:S,boardOwner:en})}),(0,z.jsxs)(a.xu,{alignItems:ef?"center":"start",direction:"row",display:"flex",marginTop:1,children:[(0,z.jsxs)(a.xv,{color:eA?"subtle":void 0,lineClamp:1,size:"100",children:[(0,z.jsx)(g.Z,{}),(0,_.nk)(eh.nbt(["{{ count }} Pin", "{{ count }} Pins"], er, "profile.ProfilePage.board.BoardCard.pinsCount", true),{count:eg(ee,er,{shortform:!0,shortform_maximum_fraction_digits:1})})]}),X&&!!es&&(0,z.jsxs)(a.xv,{color:eA?"subtle":void 0,lineClamp:1,size:"100",children:[(0,z.jsx)(x.Z,{ariaHidden:!0,size:"100"}),(0,z.jsx)(g.Z,{}),(0,_.nk)(eh.nbt(["{{ count }} secção", "{{ count }} secções"], es, "profile.ProfilePage.board.BoardCard.sectionsCount", true),{count:es})]}),eA&&(0,z.jsx)(a.xv,{color:"subtle",size:"100",children:(0,z.jsx)(x.Z,{ariaHidden:!0,size:"100"})}),(0,z.jsx)(a.xu,{display:ew?"flex":"inlineBlock",marginEnd:eb?2:0,marginStart:eA?void 0:2,children:(0,z.jsxs)(a.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,z.jsx)(g.Z,{}),em(q,!0)]})})]}),e&&!ef&&(0,z.jsxs)(a.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,z.jsx)(g.Z,{}),eh.bt("Arquivado", "Archived", "profile.ProfilePage.BoardCard.ArchivedText", undefined, true)]}),eS&&(0,z.jsx)(a.xu,{column:2===et?12:void 0,flex:"none",marginTop:2===et?3:void 0,children:(0,z.jsx)(A.Z,{disabled:en?.blocked_by_me,followEventType:26,id:M,isFollowed:E,onFollow:ez,onUnfollow:eC,pinKey:null,shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:ec,viewType:e_})})]})]})})]})})}},677068:(e,o,t)=>{t.d(o,{Z:()=>b});var l=t(545007),i=t(883119),a=t(587703),n=t(5859),r=t(217058),s=t(623409),d=t(554786),c=t(149722),_=t(583130),u=t(680902),h=t(265326),m=t(321083),g=t(761203),x=t(785893);let f=["thumbnail","imageOnly"];function b({board:e,boardId:o,containerBackgroundColor:t,forwardedRef:b,fullSize:p,isCollaboratorsAttributionVisible:v=!1,isNoBoardTitleStyle:y=!1,isSectionCountVisible:w=!1,showFollowButton:P=!0,showPinCount:A=!0,slotIndex:j,type:z,viewParameter:C,viewType:k}){let S=(0,c.Z)(),Z=S&&S.isAuth,T=(0,l.I0)(),{locale:E}=(0,n.B)(),I=(0,s.Z)(),F=(0,g.gC)()(o),D=e??F,B=(0,u.Z)(),M=(0,a.Z)(),U=(0,d.HG)(),L=S.isAuth?S.id:"";if(!D)return null;let{owner:H}=D,N=H?.id===L,O=[H,...D.collaborating_users||[]].filter(Boolean).filter(({id:e})=>e===L).length>0;if("secret"===D.privacy&&!O)return null;let R="grid"===z||"thumbnail"===z?2:4,K=B(D,R),G={isCustom:D.has_custom_cover,url:K,position:(0,h.Bw)(D.cover_pin)},W=(0,h.Jx)(D,K).map(({url:e})=>({name:(0,h.po)(e),url:e})),$=[44,49].includes(C),J=()=>49===C?N?3106:3107:C,V=(0,x.jsx)(_.Z,{archivedDate:D.archived_by_me_at??void 0,boardId:o,canEdit:!!D.access&&D.access.includes("write"),collaboratingUsers:D.collaborating_users,containerBackgroundColor:t,coverPhoto:K?G:null,followedByMe:D.followed_by_me,fullSizeDrawer:p,hideMeta:f.includes(z),id:D.id,imagesLego:W,isAuthenticated:Z,isCollaborative:D.is_collaborative,isCollaborator:O,isCollaboratorsAttributionVisible:v,isNoBoardTitleStyle:y,isOwner:N,isProtected:"protected"===D.privacy,isSecret:"secret"===D.privacy,isSectionCountVisible:w,isTemporarilyDisabled:!!D.is_temporarily_disabled,lastModifiedDate:D.board_order_modified_at,layout:U?"square":void 0,locale:E,name:D.name??"",numCols:R,onFollow:e=>T((0,m.Z)(e,M)),onUnfollow:e=>T((0,m.f)(e,M)),owner:H,pinCount:A&&D.pin_count?D.pin_count:void 0,sectionCount:D.section_count??0,sensitivityScreen:D.sensitivity_screen,showFollowButton:P,slotIndex:j,viewerId:L,viewParameter:C,viewType:k});return!f.includes(z)&&D.url?(0,x.jsx)(i.Tg,{href:Z?D.url:D.url.toLowerCase(),onTap:()=>{$&&M({aux_data:{board_id:D.id,board_pin_count:D.pin_count??0,board_section_count:D.section_count??0},component:1,element:36,event_type:102,view_parameter:J()}),Z||((0,r.NC)("click_go_to_board"),I({action:"click",item:"board-card"}))},rounding:2,tapStyle:"compress",children:(0,x.jsx)(i.xu,{ref:b,paddingY:U?2:3,children:V})}):V}},464593:(e,o,t)=>{t.d(o,{Z:()=>c});var l=t(883119),i=t(297134),a=t(140017),n=t(72461),r=t(5859),s=t(785893);let d={xs:{icon:12,text:"100",height:15},sm:{icon:16,text:"200",height:17},md:{icon:20,text:"300",height:18},lg:{icon:24,text:"400",height:23}};function c({boardOwner:e,boardCollaboratingUsers:o,size:t="xs"}){let c=(0,a.ZP)(),{locale:_}=(0,r.B)(),u=(0,n.Z)();if(!e)return null;let{full_name:h,is_verified_merchant:m,verified_identity:g}=e,x=!!g?.verified;return(0,s.jsxs)(l.kC,{alignItems:"center",justifyContent:"start",maxHeight:d[t].height,children:[(0,s.jsx)(l.xv,{lineClamp:1,size:d[t].text,children:(0,s.jsx)(i.Z,{text:h})}),(m||x)&&(0,s.jsx)(l.xu,{flex:"none",marginStart:1,children:m?(0,s.jsx)(l.JO,{accessibilityLabel:c.bt("Ícone de emblema de verificação do comerciante", "Merchant verification badge icon", "merchantVerification.badge.icon", undefined, true),color:"shopping",icon:"workflow-status-ok",size:d[t].icon}):(0,s.jsx)(l.JO,{accessibilityLabel:c.bt("Ícone de emblema de verificação de identidade", "Identity verification badge icon", "identityVerification.badge.icon", undefined, true),color:"error",icon:"check-circle",size:d[t].icon})}),o&&o.length>0&&(0,s.jsx)(l.xu,{flex:"none",marginStart:1,children:(0,s.jsx)(l.xv,{size:d[t].text,children:"+ "+u(_,o.length,{shortform:!0,shortform_maximum_fraction_digits:0})})})]})}},724009:(e,o,t)=>{t.d(o,{Z:()=>_});var l=t(883119),i=t(140017),a=t(316667),n=t(554786),r=t(667294),s=t(149722),d=t(761203),c=t(785893);function _({boardId:e}){let o=(0,i.ZP)(),t=(0,s.Z)(),_=(0,n.HG)(),u=(0,d.gC)()(e),h=function(e){let o=(0,s.Z)(),t=(0,n.HG)()&&o&&o.isAuth,l=(0,d.gC)()(e);return(0,r.useMemo)(()=>{if(!l)return[];let{owner:e,collaborating_users:i}=l,[a,n,r]=[new Set,new Set,new Set];for(let t of[...e?[e]:[],...i||[]])t.id===e?.id?a.add(t):t.id===o.id?n.add(t):r.add(t);return[...a,...n,...r].map(e=>({name:(t?e.full_name:e.username)??"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":e.image_medium_url??""}))},[t,l,o])}(e);if(!u)return null;let{collaborator_count:m=0}=u,g=_&&t&&t.isAuth?24:16,x=g/3*((h.length>2?3:h.length)*2+1),f=m>=h.length?m-h.length:0,b=[...h,...Array(f=f>99?100:f).fill({name:"",src:""})];return(0,c.jsx)(l.xu,{height:g,marginStart:2,minWidth:x,width:x,children:(0,c.jsx)(l.HE,{accessibilityLabel:a.U+(o.bt("O álbum tem colaboradores", "Board has collaborators", "boardCard.avatarGroup.collaborators", undefined, true)),collaborators:b})})}},668649:(e,o,t)=>{t.d(o,{Z:()=>r});var l=t(883119),i=t(785893);function a({customCover:e,height:o,imgPos:t,imgUrl:a,width:n}){let r=o/n,s="center center";if(e&&t){let e=1;e=t.height/t.width>r?n/t.width:o/t.height;let l=t.x*e,i=t.y*e;s=`-${l}px -${i}px`}let d={backgroundImage:`url(${a})`,backgroundPosition:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,i.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{height:o,width:n}},"data-test-id":"cover-image-box",children:(0,i.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:d},"data-test-id":"cover-image",children:(0,i.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}function n({alt:e,color:o,height:t,imgUrl:a,width:n}){return(0,i.jsx)(l.zd,{height:t,width:n,children:(0,i.jsx)(l.Ee,{alt:e||"",color:o,fit:"cover",naturalHeight:t,naturalWidth:n,src:a})})}function r(e){let{renderAsImage:o}=e;return o?(0,i.jsx)(n,{...e}):(0,i.jsx)(a,{...e})}},304431:(e,o,t)=>{t.d(o,{Z:()=>h});var l=t(667294),i=t(883119),a=t(140017),n=t(5859),r=t(554786),s=t(168477),d=t(668649),c=t(910777),_=t(785893);let u="100%";function h(e){let o=(0,a.ZP)(),{canEdit:t,containerBackgroundColor:h="white",coverPhoto:m,fullSize:g,images:x,isActive:f,isProtected:b,isSecret:p,isTemporarilyDisabled:v,layout:y,onEditClick:w,renderAsImage:P,showSensitivityScreen:A}=e,j=(0,r.HG)(),z=(0,r.Wb)(),{isRTL:C,isAuthenticated:k}=(0,n.B)(),S=(0,l.useRef)(null),[Z,T]=(0,l.useState)({width:0,height:0});(0,l.useEffect)(()=>{if(z&&S.current){let{offsetWidth:e,offsetHeight:o}=S.current;T({width:e,height:o})}},[z]);let E=x[0],I=!m&&x[0]?.name||o.bt("Imagem de capa", "Cover image", "DrawerImageGroup", undefined, true),F=[,,].fill(),D=new i.Ry(1),B="square"===y?s.M0:s.z9,M="square"===y?s.FP:s.FC,U=E?.url?(0,_.jsx)(i.Ee,{alt:I,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:E.url}):(0,_.jsx)(i.xu,{color:"secondary",height:"100%",width:"100%"}),L=v||A?{filter:"blur(20px)"}:{};return(0,_.jsx)(i.zd,{height:g?"100%":void 0,rounding:4,wash:f,width:"100%",children:(0,_.jsxs)(i.kC,{alignItems:"stretch",direction:"row",height:j?M:"100%",justifyContent:"start",children:[(0,_.jsx)(i.sg,{span:8,children:(0,_.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:L},height:g?"100%":void 0,position:"relative",children:(0,_.jsx)(i.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,_.jsxs)(i.xu,{ref:S,bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},"data-test-id":"drawer-image-group-first-image-container",left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:[(b||p)&&(0,_.jsx)(i.xu,{left:!C,margin:2,position:"absolute",right:C,top:!0,zIndex:D,children:(0,_.jsx)(c.Z,{backgroundColor:"default",iconColor:"default",privacy:p?"secret":"protected",size:j&&k?32:24})}),m?.url?(0,_.jsx)(d.Z,{customCover:m.isCustom,height:z?Z.height:M,imgPos:m.position||{width:0,height:0,x:0,y:0},imgUrl:m.url??"",renderAsImage:P,width:z?Z.width:Math.floor(B/3*2)}):U]})})})}),(0,_.jsx)(i.sg,{span:4,children:(0,_.jsxs)(i.xu,{dangerouslySetInlineStyle:{__style:L},height:"100%",children:[t&&f&&(0,_.jsx)(i.xu,{bottom:!0,left:C,margin:2,position:"absolute",right:!C,zIndex:D,children:(0,_.jsx)(i.hU,{accessibilityLabel:o.bt("Editar", "Edit", "DrawerImageGroup.edit", undefined, true),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>w?.(e),size:"sm"})}),F.map((e,o)=>{let t=m?x[o]:x[o+1];return(0,_.jsx)(i.xu,{height:g?"50%":void 0,position:"relative",children:(0,_.jsx)(i.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,_.jsx)(i.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:0===o?1:"0 1px 1px 1px"}},left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:t?.url?(0,_.jsx)(i.Ee,{alt:"",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:t.url}):(0,_.jsx)(i.xu,{color:"secondary",height:"100%",width:"100%"})})})},o)})]})}),(v||A)&&(0,_.jsx)(i.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:v?(0,_.jsx)(i.xu,{maxWidth:188,children:(0,_.jsx)(i.xv,{align:"center",color:"light",size:"200",weight:"bold",children:o.bt("De momento, este álbum está indisponível", "This board is currently unavailable", "drawerImageGroup.unavailableBoard.heading", undefined, true)})}):(0,_.jsx)(i.X6,{align:"center",color:"light",size:"400",children:o.bt("Este álbum pode conter conteúdo sensível", "This board may contain sensitive content", "drawerImageGroup.sensitivityScreen.heading", undefined, true)})})]})})}},910777:(e,o,t)=>{t.d(o,{Z:()=>n});var l=t(883119),i=t(140017),a=t(785893);function n({backgroundColor:e="darkGray",iconColor:o="inverse",iconSize:t,privacy:n,size:r=20}){let s=(0,i.ZP)();return(0,a.jsx)(l.xu,{alignItems:"center",color:e,direction:"column",display:"flex",height:r,justifyContent:"center",rounding:"circle",width:r,children:(0,a.jsx)(l.JO,{accessibilityLabel:s.bt("Ícone de álbum secreto", "Secret board icon", "Icon indicating that a board is secret", undefined, true),color:o,icon:"secret"===n?"lock":"security",size:t??r/2})})}},680902:(e,o,t)=>{t.d(o,{Z:()=>a});var l=t(554786),i=t(149722);function a(){let e=(0,l.HG)(),o=(0,i.Z)(),t=o&&o.isAuth;return e&&t?e=>{let o=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,t=e.cover_pin?.image_url??o,l=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return t||l}:(e,o)=>{let t=e.image_cover_hd_url||e.image_cover_url||"";if(!t)return"";let l=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,i=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,a=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,n=l??i??a??"",r=e.image_cover_url||"";return t||(o&&o>2&&n?n:"")||r}}},265326:(e,o,t)=>{t.d(o,{Bw:()=>r,Jx:()=>n,po:()=>l});let l=(e="")=>(e??"").substring((e??"").lastIndexOf("/")+1),i=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),a=e=>{if(!e)return()=>!0;let o=l(e);return e=>"string"==typeof e?l(e)!==o:l(e.url??"")!==o},n=(e,o)=>e.images&&e.images["170x"]?e.images["170x"].filter(a(o)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(a(o)).map(i):[],r=e=>(e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})??{x:0,y:0,width:0,height:0}},735728:(e,o,t)=>{t.d(o,{N4:()=>a,Wh:()=>l,hr:()=>i});let l=e=>e.bt("Inicia sessão para continuares", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),i=e=>e.bt("Está quase! Inicia sessão para aceder a todas as funcionalidades do Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),a=({i18n:e,toFollow:o})=>o?e.bt("Inicia sessão para seguir", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Inicia sessão para deixar de seguir", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},358589:(e,o,t)=>{t.d(o,{Z:()=>r});var l=t(140017),i=t(554786),a=t(166770),n=t(735728);let r=()=>{let e=(0,l.ZP)(),o=(0,i.HG)(),{viewer:t,loginForMore:r,limitedLoginModalSubheader:s,limitedLoginModalNextLocation:d}=(0,a.H)();return"LIMITED_LOGIN"===t.type?({modalHeader:t,nextLocation:l})=>i=>{let a=null;i&&(i.nativeEvent&&i.nativeEvent instanceof Event?a=i:i.event&&(a=i.event)),a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation()),r?.setVisible(!0),s?.setText(t||(o?n.hr(e):n.Wh(e))),l&&d?.setRoute(l)}:({fn:e})=>e}},321083:(e,o,t)=>{t.d(o,{Z:()=>a,f:()=>n});var l=t(372085),i=t(821419);function a(e,o){return async t=>{t((0,i.md)(e,!0));try{await (0,l.Z)({url:`/v3/boards/${e}/follow/`,method:"PUT"}),o({event_type:26,object_id_str:e})}catch(o){t((0,i.md)(e,!1))}}}function n(e,o){return async t=>{t((0,i.md)(e,!1));try{await (0,l.Z)({url:`/v3/boards/${e}/follow/`,method:"DELETE"}),o({event_type:27,object_id_str:e})}catch(o){t((0,i.md)(e,!0))}}}},155087:(e,o,t)=>{t.d(o,{Z:()=>c});var l=t(883119),i=t(454514),a=t(140017),n=t(757640),r=t(554786),s=t(785893);function d({ideaPinImages:e}){let o=e.map((e,o)=>(0,s.jsx)(l.xu,{borderStyle:"sm",color:"default",dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:o}},height:48,overflow:"hidden",rounding:2,width:28,children:(0,s.jsx)(l.Ee,{alt:"",color:"#696969",fit:"cover",naturalHeight:e?.height??1,naturalWidth:e?.width??1,src:e?.url??""})},o));return(0,s.jsx)(l.kC,{justifyContent:"center",children:(0,s.jsx)(l.kC,{justifyContent:"start",width:{1:28,2:40,3:48}[e.length],children:o})})}function c({handleHide:e,text:o,userId:t,href:c,imageUrl:_}){let u=(0,a.ZP)(),h=(0,r.HG)(),m=(0,n.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:t}}),g=Array.isArray(o)?o.join(" "):o;if(0===(m.data||[]).length)return(0,s.jsx)(i.ZP,{duration:5e3,href:c,onHide:e,text:g,thumbnail:_?{image:(0,s.jsx)(l.Ee,{alt:u.bt("Imagem de quem seguiste", "Image of who you followed", "userFollowingToast.thumbnail.userImage", undefined, true),fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}:void 0});let x=(m.data||[]).slice(0,3).map(e=>e.images?.[h?"236x":"170x"]),f=(0,s.jsx)(d,{ideaPinImages:x});return(0,s.jsx)(i.ZP,{_dangerouslySetThumbnail:f,duration:5e3,href:c,onHide:e,text:g})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/50257.pt_PT-3982de9d879a5f57.mjs.map