(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GM61:function(e,t,o){"use strict";o.r(t),o.d(t,"GuestModule",(function(){return me}));var n,a=o("2kYt"),r=o("nIj0"),c=o("yDe4"),s=o("PCNd"),i=o("sEIs"),b=o("D57K"),u=o("IdLP"),m=o("l3rL"),l=o("QvUv"),d=o("jJz7");!function(e){class t{}t.type="[GuestActions] Initialize guest room number validation",e.GuestRoomNumberValidationInit=t;class o{}o.type="[GuestActions] Guest name init",e.GuestNameInit=o;class n{}n.type="[GuestActions] Initialize guest game",e.GuestGameInit=n;class a{constructor(e){this.roomNumber=e}}a.type="[GuestActions] Room number validation",e.RoomNumberValidation=a;class r{constructor(e){this.name=e}}r.type="[GuestActions] Join room",e.JoinRoom=r;class c{constructor(e){this.payload=e}}c.type="[GuestActions] Set room info",e.SetRoomInfo=c;class s{constructor(e){this.card=e}}s.type="[GuestActions] Choose card",e.ChooseCard=s;class i{}i.type="[GuestActions] Get game state",e.GetGameState=i;class b{}b.type="[GuestActions] Get room remove",e.GetRoomRemove=b;class u{}u.type="[GuestActions] Remove room",e.RemoveRoom=u;class m{}m.type="[GuestActions] Close room",e.CloseRoom=m}(n||(n={}));var p=o("YtkY"),g=o("8j5Y"),O=o("kuMc"),h=o("lQSW"),j=o("EM62"),y=o("PKRn"),v=n.JoinRoom,f=n.ChooseCard,S=n.GuestGameInit,R=n.RoomNumberValidation,C=n.GuestRoomNumberValidationInit,G=n.GuestNameInit,N=n.GetGameState,I=n.CloseRoom,w=n.RemoveRoom,P=n.SetRoomInfo,$=n.GetRoomRemove;let k=(()=>{let e=class{constructor(e,t,o){this.$gaService=e,this.guestService=t,this.actions$=o}static isRoomNumberValid(e){return e.isRoomNumberValid}static roomNumber(e){return e.roomNumber}static hasRoomNumber(e){return!!e.roomNumber}static card(e){return e.card}static gameState(e){return e.gameState}static availableCards(e){return e.availableCards}guestRoomNumberValidationInit(){this.$gaService.pageView("/guest/room-code")}guestNameInit(){this.$gaService.pageView("/guest/your-name")}guestGameInit(){this.$gaService.pageView("/guest/game")}roomCode(e,{roomNumber:t}){return this.guestService.validateRoomNumber(t).pipe(Object(p.a)((e=>e.valid)),Object(g.a)((o=>{const n=e.getState();o?(this.$gaService.event("code_enter_valid","guest","Enter code valid"),e.setState(Object.assign(Object.assign({},n),{roomNumber:t,isRoomNumberValid:o}))):(this.$gaService.event("code_enter_invalid","guest","Enter code invalid"),e.setState(Object.assign(Object.assign({},n),{isRoomNumberValid:o})))})))}joinRoom(e,{name:t}){const o=e.getState();this.guestService.joinRoom(t,o.roomNumber),e.setState(Object.assign(Object.assign({},o),{name:t}))}setRoomInfo(e,{payload:t}){const o=e.getState();e.setState(Object.assign(Object.assign({},o),{gameState:t.gameState,availableCards:this.guestService.availableCards}))}getGameState(e){this.guestService.getGameState().pipe(Object(O.a)(this.actions$.pipe(Object(c.j)(I,w)))).subscribe((t=>{const o=e.getState();e.setState(Object.assign(Object.assign({},o),t===m.b.IN_PROGRESS?{gameState:t,card:null}:{gameState:t}))}))}getRoomRemove(e){this.guestService.roomRemove().pipe(Object(O.a)(this.actions$.pipe(Object(c.j)(I,w)))).subscribe((()=>{e.dispatch(new w)}))}chooseCard(e,{card:t}){this.$gaService.event("user_voted","guest","User voted");const o=e.getState();o.gameState!==m.b.REVIEW&&(this.guestService.chooseCard(t,o.roomNumber),e.patchState({card:t}))}resetRoom(e){e.setState({name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[]})}};return e.\u0275fac=function(t){return new(t||e)(j.Tb(y.a),j.Tb(h.a),j.Tb(c.b))},e.\u0275prov=j.Gb({token:e,factory:e.\u0275fac}),Object(b.b)([Object(c.a)(C),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"guestRoomNumberValidationInit",null),Object(b.b)([Object(c.a)(G),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"guestNameInit",null),Object(b.b)([Object(c.a)(S),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[]),Object(b.c)("design:returntype",void 0)],e.prototype,"guestGameInit",null),Object(b.b)([Object(c.a)(R),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",u.a)],e.prototype,"roomCode",null),Object(b.b)([Object(c.a)(v),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"joinRoom",null),Object(b.b)([Object(c.a)(P),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"setRoomInfo",null),Object(b.b)([Object(c.a)(N),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"getGameState",null),Object(b.b)([Object(c.a)($),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"getRoomRemove",null),Object(b.b)([Object(c.a)(f),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object,Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"chooseCard",null),Object(b.b)([Object(c.a)([w,I]),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",void 0)],e.prototype,"resetRoom",null),Object(b.b)([Object(c.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Boolean)],e,"isRoomNumberValid",null),Object(b.b)([Object(c.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",String)],e,"roomNumber",null),Object(b.b)([Object(c.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Boolean)],e,"hasRoomNumber",null),Object(b.b)([Object(c.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Object)],e,"card",null),Object(b.b)([Object(c.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",String)],e,"gameState",null),Object(b.b)([Object(c.f)(),Object(b.c)("design:type",Function),Object(b.c)("design:paramtypes",[Object]),Object(b.c)("design:returntype",Array)],e,"availableCards",null),e=Object(b.b)([Object(c.g)({name:"guest",defaults:{name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[]}})],e),e})();var F=o("M8cf"),V=n.ChooseCard,A=n.GuestGameInit,M=n.GetGameState,_=n.RemoveRoom,T=n.CloseRoom,B=n.GetRoomRemove;function K(e,t){if(1&e){const e=j.Qb();j.Nb(0),j.Pb(1,"planning-poker-card",3),j.Wb("cardClick",(function(){j.ic(e);const o=t.$implicit;return j.Yb().onCardClick(o)})),j.Zb(2,"async"),j.Ob(),j.Mb()}if(2&e){const e=t.$implicit,o=j.Yb();j.Ab(1),j.ec("card",e)("selectedCard",j.ac(2,2,o.card$))}}let E=(()=>{let e=class{constructor(e,t,o,n){this.router=e,this.actions$=t,this.store=o,this.environmentService=n}ngOnInit(){this.store.dispatch([new A,new M,new B]),this.cards=this.store.selectSnapshot(k.availableCards),this.actions$.pipe(Object(c.k)(_),Object(l.b)(this)).subscribe((()=>this.navigateToLadingPage()))}ngOnDestroy(){this.store.dispatch(T),this.navigateToLadingPage()}onCardClick(e){this.store.selectSnapshot(k.gameState)!==m.b.REVIEW&&this.store.dispatch(new V(e))}beforeUnloadHandler(){if(this.environmentService.production)return!1}navigateToLadingPage(){this.router.navigateByUrl("/")}};return e.\u0275fac=function(t){return new(t||e)(j.Kb(i.c),j.Kb(c.b),j.Kb(c.h),j.Kb(d.a))},e.\u0275cmp=j.Eb({type:e,selectors:[["planning-poker-game"]],hostBindings:function(e,t){1&e&&j.Wb("beforeunload",(function(){return t.beforeUnloadHandler()}),!1,j.hc)},decls:4,vars:1,consts:[[1,"cards"],[4,"ngFor","ngForOf"],[1,"sidebar"],[3,"card","selectedCard","cardClick"]],template:function(e,t){1&e&&(j.Pb(0,"div",0),j.lc(1,K,3,4,"ng-container",1),j.Ob(),j.Pb(2,"div",2),j.mc(3," TODO :)\n"),j.Ob()),2&e&&(j.Ab(1),j.ec("ngForOf",t.cards))},directives:[a.j,F.a],pipes:[a.b],styles:['[_nghost-%COMP%]{padding:1.6666666667em;display:flex;align-items:flex-start;width:100%;height:100%}.cards[_ngcontent-%COMP%]{display:flex;width:65%;flex-direction:row;flex-wrap:wrap}.cards[_ngcontent-%COMP%]   planning-poker-card[_ngcontent-%COMP%]{margin:1%}.sidebar[_ngcontent-%COMP%]{width:35%;padding:1.3888888889em}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:1.1111111111em 0;display:block}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0;padding:.1111111111em 0;display:block;list-style:none}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"- "}']}),Object(b.b)([Object(c.e)(k.card),Object(b.c)("design:type",u.a)],e.prototype,"card$",void 0),e=Object(b.b)([Object(l.a)()],e),e})(),x=(()=>{class e{constructor(e,t,o){this.store=e,this.guestService=t,this.router=o}canActivate(){return this.store.select(k.hasRoomNumber).pipe(Object(g.a)((e=>{e||this.router.navigateByUrl("/")})))}}return e.\u0275fac=function(t){return new(t||e)(j.Tb(c.h),j.Tb(h.a),j.Tb(i.c))},e.\u0275prov=j.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var L=n.SetRoomInfo;let J=(()=>{class e{constructor(e,t){this.guestService=e,this.store=t}resolve(){return this.guestService.getRoomInfo(this.store.selectSnapshot(k.roomNumber)).pipe(Object(g.a)((e=>this.store.dispatch(new L(e)))))}}return e.\u0275fac=function(t){return new(t||e)(j.Tb(h.a),j.Tb(c.h))},e.\u0275prov=j.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=o("C05f"),W=o("ruxD"),D=o("cJ9h"),Y=o("BwBJ"),q=o("ur7N"),Q=o("rqBn"),H=o("6EaX"),z=o("hi3J"),X=n.RoomNumberValidation,Z=n.GuestRoomNumberValidationInit;let ee=(()=>{let e=class{constructor(e,t,o,n){this.router=e,this.store=t,this.$gaService=o,this.activatedRoute=n,this.queryRoomCode=null,this.loadingSubject$=new U.a(!1),this.successSubject$=new U.a(!1),this.errorSubject$=new U.a(!1),this.loading$=this.loadingSubject$.asObservable(),this.success$=this.successSubject$.asObservable(),this.error$=this.errorSubject$.asObservable()}ngOnInit(){this.store.dispatch(new Z),this.handleQueryParams()}onRoomNumberSubmit(e){this.loadingSubject$.getValue()||(this.loadingSubject$.next(!0),this.store.dispatch(new X(e)).pipe(Object(W.a)((()=>this.loadingSubject$.next(!1))),Object(D.a)((()=>this.store.select(k.isRoomNumberValid))),Object(g.a)((e=>{e?this.successSubject$.next(!0):this.errorSubject$.next(!0)})),Object(Y.a)(1e3),Object(g.a)((()=>this.errorSubject$.next(!1))),Object(l.b)(this)).subscribe((e=>this.handleRoomNumberValidation(e))))}handleRoomNumberValidation(e){e?this.router.navigateByUrl("/guest/your-name"):this.codeComponent.reset()}handleQueryParams(){const e=this.activatedRoute.snapshot.queryParams;e.code&&(this.queryRoomCode=e.code)}};return e.\u0275fac=function(t){return new(t||e)(j.Kb(i.c),j.Kb(c.h),j.Kb(y.a),j.Kb(i.a))},e.\u0275cmp=j.Eb({type:e,selectors:[["planning-poker-room-code"]],viewQuery:function(e,t){var o;1&e&&j.pc(q.a,!0),2&e&&j.fc(o=j.Xb())&&(t.codeComponent=o.first)},decls:6,vars:5,consts:[[3,"codeLength","value","isLoading$","isSuccess$","isError$","codeSubmit"]],template:function(e,t){1&e&&(j.Pb(0,"planning-poker-layout"),j.Pb(1,"planning-poker-header"),j.Pb(2,"h1"),j.mc(3,"Join to exsiting room"),j.Ob(),j.Ob(),j.Pb(4,"planning-poker-content"),j.Pb(5,"planning-poker-code",0),j.Wb("codeSubmit",(function(e){return t.onRoomNumberSubmit(e)})),j.Ob(),j.Ob(),j.Ob()),2&e&&(j.Ab(5),j.ec("codeLength",5)("value",t.queryRoomCode)("isLoading$",t.loading$)("isSuccess$",t.success$)("isError$",t.error$))},directives:[Q.a,H.a,z.a,q.a],styles:[""],changeDetection:0}),e=Object(b.b)([Object(l.a)()],e),e})(),te=(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(k.hasRoomNumber).pipe(Object(p.a)((e=>!e||(this.router.navigateByUrl("/"),!1))))}}return e.\u0275fac=function(t){return new(t||e)(j.Tb(c.h),j.Tb(i.c))},e.\u0275prov=j.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var oe=o("dN4T"),ne=o("sRyt"),ae=o("d7z7"),re=o("M0Hd"),ce=o("W79N"),se=n.JoinRoom,ie=n.GuestNameInit;const be=[{path:"room-code",component:ee,canActivate:[te],data:{animation:"RoomCodeComponent"}},{path:"your-name",component:(()=>{let e=class{constructor(e,t,o){this.formBuilder=e,this.router=t,this.store=o,this.userNameLocalStorageItemKey="user-name"}ngOnInit(){this.store.dispatch(new ie);const e=localStorage.getItem(this.userNameLocalStorageItemKey);this.formGroup=this.formBuilder.group({name:this.formBuilder.control(e||null,[r.j.required])})}get nameFormControl(){return this.formGroup.get("name")}submit(){this.formGroup.valid&&(localStorage.setItem(this.userNameLocalStorageItemKey,this.nameFormControl.value),this.store.dispatch(new se(this.nameFormControl.value)).pipe(Object(l.b)(this)).subscribe((()=>this.router.navigateByUrl("/guest/game"))))}};return e.\u0275fac=function(t){return new(t||e)(j.Kb(r.b),j.Kb(i.c),j.Kb(c.h))},e.\u0275cmp=j.Eb({type:e,selectors:[["planning-poker-your-name"]],decls:11,vars:1,consts:[[3,"formGroup"],["type","text","formControlName","name","planningPokerFocus","","planningPokerInput",""],["planningPokerButton","",3,"click"]],template:function(e,t){1&e&&(j.Pb(0,"planning-poker-layout"),j.Pb(1,"planning-poker-header"),j.Pb(2,"h1"),j.mc(3,"Introduce yourself"),j.Ob(),j.Ob(),j.Pb(4,"planning-poker-content"),j.Pb(5,"planning-poker-form-container"),j.Pb(6,"form",0),j.Lb(7,"input",1),j.Pb(8,"button",2),j.Wb("click",(function(){return t.submit()})),j.Pb(9,"planning-poker-icon"),j.mc(10," arrow_forward "),j.Ob(),j.Ob(),j.Ob(),j.Ob(),j.Ob(),j.Ob()),2&e&&(j.Ab(6),j.ec("formGroup",t.formGroup))},directives:[Q.a,H.a,z.a,oe.a,r.k,r.h,r.e,r.a,r.g,r.d,ne.a,ae.a,re.a,ce.a],styles:[""],changeDetection:0}),e=Object(b.b)([Object(l.a)()],e),e})(),canActivate:[(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(k.hasRoomNumber).pipe(Object(g.a)((e=>{e||this.router.navigateByUrl("/")})))}}return e.\u0275fac=function(t){return new(t||e)(j.Tb(c.h),j.Tb(i.c))},e.\u0275prov=j.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],data:{animation:"YourNameComponent"}},{path:"game",component:E,canActivate:[x],resolve:{data:J},data:{animation:"GameComponent"}},{path:"**",redirectTo:"room-code"}];let ue=(()=>{class e{}return e.\u0275mod=j.Ib({type:e}),e.\u0275inj=j.Hb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(be)],i.d]}),e})(),me=(()=>{class e{}return e.\u0275mod=j.Ib({type:e}),e.\u0275inj=j.Hb({factory:function(t){return new(t||e)},imports:[[a.c,ue,s.a,r.i,c.d.forFeature([k])]]}),e})()}}]);