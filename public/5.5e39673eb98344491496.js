(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GM61:function(e,t,n){"use strict";n.r(t),n.d(t,"GuestModule",(function(){return je}));var o,a=n("2kYt"),c=n("nIj0"),r=n("yDe4"),s=n("PCNd"),i=n("sEIs"),b=n("D57K"),u=n("IdLP"),l=n("YtkY"),d=n("l3rL"),m=n("QvUv"),p=n("jJz7");!function(e){class t{}t.type="[GuestActions] Initialize guest room number validation",e.GuestRoomNumberValidationInit=t;class n{}n.type="[GuestActions] Guest name init",e.GuestNameInit=n;class o{}o.type="[GuestActions] Initialize guest game",e.GuestGameInit=o;class a{constructor(e){this.roomNumber=e}}a.type="[GuestActions] Room number validation",e.RoomNumberValidation=a;class c{constructor(e){this.name=e}}c.type="[GuestActions] Join room",e.JoinRoom=c;class r{constructor(e){this.payload=e}}r.type="[GuestActions] Set room info",e.SetRoomInfo=r;class s{constructor(e){this.card=e}}s.type="[GuestActions] Choose card",e.ChooseCard=s;class i{}i.type="[GuestActions] Get game state",e.GetGameState=i;class b{}b.type="[GuestActions] Get room remove",e.GetRoomRemove=b;class u{}u.type="[GuestActions] Get players results",e.GetPlayersResults=u;class l{}l.type="[GuestActions] Remove room",e.RemoveRoom=l;class d{}d.type="[GuestActions] Leave room",e.LeaveRoom=d}(o||(o={}));var g=n("8j5Y"),O=n("kuMc"),j=n("lQSW"),h=n("EM62"),y=n("PKRn"),v=o.JoinRoom,f=o.ChooseCard,S=o.GuestGameInit,R=o.RoomNumberValidation,C=o.GuestRoomNumberValidationInit,P=o.GuestNameInit,G=o.GetGameState,N=o.LeaveRoom,$=o.RemoveRoom,I=o.SetRoomInfo,w=o.GetRoomRemove,k=o.GetPlayersResults;let _=(()=>{let e=class{constructor(e,t,n){this.$gaService=e,this.guestService=t,this.actions$=n}static isRoomNumberValid(e){return e.isRoomNumberValid}static roomNumber(e){return e.roomNumber}static hasRoomNumber(e){return!!e.roomNumber}static card(e){return e.card}static gameState(e){return e.gameState}static availableCards(e){return e.availableCards}static players(e){return e.players}guestRoomNumberValidationInit(){this.$gaService.pageView("/guest/room-code")}guestNameInit(){this.$gaService.pageView("/guest/your-name")}guestGameInit(){this.$gaService.pageView("/guest/game"),this.guestService.roomJoined()}roomCode(e,{roomNumber:t}){return this.guestService.validateRoomNumber(t).pipe(Object(l.a)((e=>e.valid)),Object(g.a)((n=>{const o=e.getState();n?(this.$gaService.event("code_enter_valid","guest","Enter code valid"),e.setState(Object.assign(Object.assign({},o),{roomNumber:t,isRoomNumberValid:n}))):(this.$gaService.event("code_enter_invalid","guest","Enter code invalid"),e.setState(Object.assign(Object.assign({},o),{isRoomNumberValid:n})))})))}joinRoom(e,{name:t}){const n=e.getState();this.guestService.joinRoom(t,n.roomNumber),e.setState(Object.assign(Object.assign({},n),{name:t}))}setRoomInfo(e,{payload:t}){const n=e.getState();e.setState(Object.assign(Object.assign({},n),{gameState:t.gameState,availableCards:this.guestService.availableCards}))}getGameState(e){this.guestService.getGameState().pipe(Object(O.a)(this.actions$.pipe(Object(r.j)(N,$)))).subscribe((t=>{const n=e.getState();e.setState(Object.assign(Object.assign({},n),t===d.b.IN_PROGRESS?{gameState:t,card:null}:{gameState:t}))}))}getPlayersResults(e){this.guestService.getResults().pipe(Object(O.a)(this.actions$.pipe(Object(r.j)(N,$)))).subscribe((t=>{const n=Object.keys(t).map((e=>({id:e,name:t[e].name,card:t[e].card})));e.patchState({players:n})}))}getRoomRemove(e){this.guestService.roomRemove().pipe(Object(O.a)(this.actions$.pipe(Object(r.j)(N,$)))).subscribe((()=>{e.dispatch(new $)}))}chooseCard(e,{card:t}){this.$gaService.event("user_voted","guest","User voted");const n=e.getState();n.gameState!==d.b.REVIEW&&(this.guestService.chooseCard(t,n.roomNumber),e.patchState({card:t}))}leaveRoom(){this.$gaService.event("user_leave_room","guest","User leved room"),this.guestService.leaveRoom()}resetRoom(e){e.setState({name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[],players:[]})}};return e.\u0275fac=function(t){return new(t||e)(h.Tb(y.a),h.Tb(j.a),h.Tb(r.b))},e.\u0275prov=h.Gb({token:e,factory:e.\u0275fac}),Object(b.b)([Object(r.a)(C),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"guestRoomNumberValidationInit",null),Object(b.b)([Object(r.a)(P),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"guestNameInit",null),Object(b.b)([Object(r.a)(S),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"guestGameInit",null),Object(b.b)([Object(r.a)(R),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",u.a)],e.prototype,"roomCode",null),Object(b.b)([Object(r.a)(v),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"joinRoom",null),Object(b.b)([Object(r.a)(I),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"setRoomInfo",null),Object(b.b)([Object(r.a)(G),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"getGameState",null),Object(b.b)([Object(r.a)(k),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"getPlayersResults",null),Object(b.b)([Object(r.a)(w),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"getRoomRemove",null),Object(b.b)([Object(r.a)(f),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"chooseCard",null),Object(b.b)([Object(r.a)(N),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"leaveRoom",null),Object(b.b)([Object(r.a)([$,N]),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"resetRoom",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Boolean)],e,"isRoomNumberValid",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",String)],e,"roomNumber",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Boolean)],e,"hasRoomNumber",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Object)],e,"card",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",String)],e,"gameState",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Array)],e,"availableCards",null),Object(b.b)([Object(r.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Array)],e,"players",null),e=Object(b.b)([Object(r.g)({name:"guest",defaults:{name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[],players:[]}})],e),e})();var M=n("CjZh"),A=n("rdFE"),F=n("UJG0"),V=n("guRg"),L=o.ChooseCard,E=o.GuestGameInit,T=o.GetGameState,x=o.RemoveRoom,B=o.LeaveRoom,K=o.GetRoomRemove,J=o.GetPlayersResults;function U(e,t){if(1&e){const e=h.Qb();h.Nb(0),h.Pb(1,"planning-poker-card-container"),h.Pb(2,"button",4),h.Wb("click",(function(){h.ic(e);const n=t.$implicit;return h.Yb().onCardClick(n)})),h.Ob(),h.Pb(3,"planning-poker-card-item"),h.Zb(4,"async"),h.Zb(5,"async"),h.Lb(6,"planning-poker-card-symbol",5),h.Ob(),h.Ob(),h.Mb()}if(2&e){const e=t.$implicit,n=h.Yb();h.Ab(3),h.Cb("card-selected",h.ac(4,5,n.isCardSelected(e)))("card-not-selected",h.ac(5,7,n.isCardNotSelected(e))),h.Ab(3),h.ec("card",e)}}function W(e,t){if(1&e&&(h.Pb(0,"div",6),h.Lb(1,"div",7),h.Pb(2,"div",8),h.Pb(3,"h1"),h.mc(4,"Voting results"),h.Ob(),h.Lb(5,"planning-poker-table",9),h.Ob(),h.Ob()),2&e){const e=h.Yb();h.Ab(5),h.ec("gameState$",e.gameState$)("cardsInRow",7)("players$",e.players$)}}let Y=(()=>{let e=class{constructor(e,t,n,o){this.router=e,this.actions$=t,this.store=n,this.environmentService=o}get isInReview$(){return this.gameState$.pipe(Object(l.a)((e=>e===d.b.REVIEW)))}ngOnInit(){this.store.dispatch([new E,new T,new K,new J]),this.cards=this.store.selectSnapshot(_.availableCards),this.actions$.pipe(Object(r.k)(x),Object(m.b)(this)).subscribe((()=>this.navigateToLadingPage()))}ngOnDestroy(){this.store.dispatch(B),this.navigateToLadingPage()}onCardClick(e){this.store.selectSnapshot(_.gameState)!==d.b.REVIEW&&this.store.dispatch(new L(e))}isCardSelected(e){return this.card$.pipe(Object(l.a)((t=>t===e)))}isCardNotSelected(e){return this.card$.pipe(Object(l.a)((t=>null!==t&&t!==e)))}beforeUnloadHandler(){if(this.environmentService.production)return!1}navigateToLadingPage(){this.router.navigateByUrl("/")}};return e.\u0275fac=function(t){return new(t||e)(h.Kb(i.c),h.Kb(r.b),h.Kb(r.h),h.Kb(p.a))},e.\u0275cmp=h.Eb({type:e,selectors:[["planning-poker-game"]],hostBindings:function(e,t){1&e&&h.Wb("beforeunload",(function(){return t.beforeUnloadHandler()}),!1,h.hc)},decls:8,vars:7,consts:[[1,"header"],[1,"cards"],[4,"ngFor","ngForOf"],["class","modal-container",4,"ngIf"],[3,"click"],[3,"card"],[1,"modal-container"],[1,"modal-overlay"],[1,"modal-content"],[3,"gameState$","cardsInRow","players$"]],template:function(e,t){1&e&&(h.Pb(0,"div",0),h.Pb(1,"h1"),h.mc(2),h.Zb(3,"async"),h.Ob(),h.Ob(),h.Pb(4,"div",1),h.lc(5,U,7,9,"ng-container",2),h.Ob(),h.lc(6,W,6,3,"div",3),h.Zb(7,"async")),2&e&&(h.Ab(2),h.oc("Room ",h.ac(3,3,t.roomNumber$),""),h.Ab(3),h.ec("ngForOf",t.cards),h.Ab(1),h.ec("ngIf",h.ac(7,5,t.isInReview$)))},directives:[a.j,a.k,M.a,A.a,F.a,V.a],pipes:[a.b],styles:['[_nghost-%COMP%]{padding:1.6666666667em;display:flex;align-items:flex-start;flex-direction:column;width:100%;height:100%}.header[_ngcontent-%COMP%]{margin:0 1% 1%}.cards[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:row;flex-wrap:wrap}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]{width:12.2857142857%}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;cursor:pointer;-webkit-appearance:none;border-style:none;opacity:0}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]   planning-poker-card-item.card-selected[_ngcontent-%COMP%]{transform:scale(1.075)}.cards[_ngcontent-%COMP%]   planning-poker-card-container[_ngcontent-%COMP%]   planning-poker-card-item.card-not-selected[_ngcontent-%COMP%]{opacity:.4}.sidebar[_ngcontent-%COMP%]{width:35%;padding:1.3888888889em}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:1.1111111111em 0;display:block}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;padding:.1111111111em 0;display:block;list-style:none}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"- "}.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{height:90%;width:90%;background-color:#1b1c2a}.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:0 1% 1%;align-self:flex-start;font-size:38.4}']}),Object(b.b)([Object(r.e)(_.card),Object(b.c)("design:type",u.a)],e.prototype,"card$",void 0),Object(b.b)([Object(r.e)(_.roomNumber),Object(b.c)("design:type",u.a)],e.prototype,"roomNumber$",void 0),Object(b.b)([Object(r.e)(_.gameState),Object(b.c)("design:type",u.a)],e.prototype,"gameState$",void 0),Object(b.b)([Object(r.e)(_.players),Object(b.c)("design:type",u.a)],e.prototype,"players$",void 0),e=Object(b.b)([Object(m.a)()],e),e})(),q=(()=>{class e{constructor(e,t,n){this.store=e,this.guestService=t,this.router=n}canActivate(){return this.store.select(_.hasRoomNumber).pipe(Object(g.a)((e=>{e||this.router.navigateByUrl("/")})))}}return e.\u0275fac=function(t){return new(t||e)(h.Tb(r.h),h.Tb(j.a),h.Tb(i.c))},e.\u0275prov=h.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var z=o.SetRoomInfo;let D=(()=>{class e{constructor(e,t){this.guestService=e,this.store=t}resolve(){return this.guestService.getRoomInfo(this.store.selectSnapshot(_.roomNumber)).pipe(Object(g.a)((e=>this.store.dispatch(new z(e)))))}}return e.\u0275fac=function(t){return new(t||e)(h.Tb(j.a),h.Tb(r.h))},e.\u0275prov=h.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Q=n("C05f"),H=n("ruxD"),Z=n("cJ9h"),X=n("BwBJ"),ee=n("ur7N"),te=n("rqBn"),ne=n("6EaX"),oe=n("hi3J"),ae=o.RoomNumberValidation,ce=o.GuestRoomNumberValidationInit;let re=(()=>{let e=class{constructor(e,t,n,o){this.router=e,this.store=t,this.$gaService=n,this.activatedRoute=o,this.queryRoomCode=null,this.loadingSubject$=new Q.a(!1),this.successSubject$=new Q.a(!1),this.errorSubject$=new Q.a(!1),this.loading$=this.loadingSubject$.asObservable(),this.success$=this.successSubject$.asObservable(),this.error$=this.errorSubject$.asObservable()}ngOnInit(){this.store.dispatch(new ce),this.handleQueryParams()}onRoomNumberSubmit(e){this.loadingSubject$.getValue()||(this.loadingSubject$.next(!0),this.store.dispatch(new ae(e)).pipe(Object(H.a)((()=>this.loadingSubject$.next(!1))),Object(Z.a)((()=>this.store.select(_.isRoomNumberValid))),Object(g.a)((e=>{e?this.successSubject$.next(!0):this.errorSubject$.next(!0)})),Object(X.a)(1e3),Object(g.a)((()=>this.errorSubject$.next(!1))),Object(m.b)(this)).subscribe((e=>this.handleRoomNumberValidation(e))))}handleRoomNumberValidation(e){e?this.router.navigateByUrl("/guest/your-name"):this.codeComponent.reset()}handleQueryParams(){const e=this.activatedRoute.snapshot.queryParams;e.code&&(this.queryRoomCode=e.code)}};return e.\u0275fac=function(t){return new(t||e)(h.Kb(i.c),h.Kb(r.h),h.Kb(y.a),h.Kb(i.a))},e.\u0275cmp=h.Eb({type:e,selectors:[["planning-poker-room-code"]],viewQuery:function(e,t){var n;1&e&&h.pc(ee.a,!0),2&e&&h.fc(n=h.Xb())&&(t.codeComponent=n.first)},decls:6,vars:5,consts:[[3,"codeLength","value","isLoading$","isSuccess$","isError$","codeSubmit"]],template:function(e,t){1&e&&(h.Pb(0,"planning-poker-layout"),h.Pb(1,"planning-poker-header"),h.Pb(2,"h1"),h.mc(3,"Join to exsiting room"),h.Ob(),h.Ob(),h.Pb(4,"planning-poker-content"),h.Pb(5,"planning-poker-code",0),h.Wb("codeSubmit",(function(e){return t.onRoomNumberSubmit(e)})),h.Ob(),h.Ob(),h.Ob()),2&e&&(h.Ab(5),h.ec("codeLength",5)("value",t.queryRoomCode)("isLoading$",t.loading$)("isSuccess$",t.success$)("isError$",t.error$))},directives:[te.a,ne.a,oe.a,ee.a],styles:[""],changeDetection:0}),e=Object(b.b)([Object(m.a)()],e),e})(),se=(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(_.hasRoomNumber).pipe(Object(l.a)((e=>!e||(this.router.navigateByUrl("/"),!1))))}}return e.\u0275fac=function(t){return new(t||e)(h.Tb(r.h),h.Tb(i.c))},e.\u0275prov=h.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var ie=n("dN4T"),be=n("sRyt"),ue=n("d7z7"),le=n("M0Hd"),de=n("W79N"),me=o.JoinRoom,pe=o.GuestNameInit;const ge=[{path:"room-code",component:re,canActivate:[se],data:{animation:"RoomCodeComponent"}},{path:"your-name",component:(()=>{let e=class{constructor(e,t,n){this.formBuilder=e,this.router=t,this.store=n,this.userNameLocalStorageItemKey="user-name"}ngOnInit(){this.store.dispatch(new pe);const e=localStorage.getItem(this.userNameLocalStorageItemKey);this.formGroup=this.formBuilder.group({name:this.formBuilder.control(e||null,[c.j.required])})}get nameFormControl(){return this.formGroup.get("name")}submit(){this.formGroup.valid&&(localStorage.setItem(this.userNameLocalStorageItemKey,this.nameFormControl.value),this.store.dispatch(new me(this.nameFormControl.value)).pipe(Object(m.b)(this)).subscribe((()=>this.router.navigateByUrl("/guest/game"))))}};return e.\u0275fac=function(t){return new(t||e)(h.Kb(c.b),h.Kb(i.c),h.Kb(r.h))},e.\u0275cmp=h.Eb({type:e,selectors:[["planning-poker-your-name"]],decls:11,vars:1,consts:[[3,"formGroup"],["type","text","formControlName","name","planningPokerFocus","","planningPokerInput",""],["planningPokerButton","",3,"click"]],template:function(e,t){1&e&&(h.Pb(0,"planning-poker-layout"),h.Pb(1,"planning-poker-header"),h.Pb(2,"h1"),h.mc(3,"Introduce yourself"),h.Ob(),h.Ob(),h.Pb(4,"planning-poker-content"),h.Pb(5,"planning-poker-form-container"),h.Pb(6,"form",0),h.Lb(7,"input",1),h.Pb(8,"button",2),h.Wb("click",(function(){return t.submit()})),h.Pb(9,"planning-poker-icon"),h.mc(10," arrow_forward "),h.Ob(),h.Ob(),h.Ob(),h.Ob(),h.Ob(),h.Ob()),2&e&&(h.Ab(6),h.ec("formGroup",t.formGroup))},directives:[te.a,ne.a,oe.a,ie.a,c.k,c.h,c.e,c.a,c.g,c.d,be.a,ue.a,le.a,de.a],styles:[""],changeDetection:0}),e=Object(b.b)([Object(m.a)()],e),e})(),canActivate:[(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(_.hasRoomNumber).pipe(Object(g.a)((e=>{e||this.router.navigateByUrl("/")})))}}return e.\u0275fac=function(t){return new(t||e)(h.Tb(r.h),h.Tb(i.c))},e.\u0275prov=h.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],data:{animation:"YourNameComponent"}},{path:"game",component:Y,canActivate:[q],resolve:{data:D},data:{animation:"GameComponent"}},{path:"**",redirectTo:"room-code"}];let Oe=(()=>{class e{}return e.\u0275mod=h.Ib({type:e}),e.\u0275inj=h.Hb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(ge)],i.d]}),e})(),je=(()=>{class e{}return e.\u0275mod=h.Ib({type:e}),e.\u0275inj=h.Hb({factory:function(t){return new(t||e)},imports:[[a.c,Oe,s.a,c.i,r.d.forFeature([_])]]}),e})()}}]);