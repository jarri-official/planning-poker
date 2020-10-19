(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9Q/O":function(e,t,o){"use strict";var c;o.d(t,"a",(function(){return c})),function(e){class t{}t.type="[GuestActions] Initialize guest room number validation",e.GuestRoomNumberValidationInit=t;class o{}o.type="[GuestActions] Guest name init",e.GuestNameInit=o;class c{}c.type="[GuestActions] Initialize guest game",e.GuestGameInit=c;class s{constructor(e){this.roomNumber=e}}s.type="[GuestActions] Room number validation",e.RoomNumberValidation=s;class n{constructor(e){this.name=e}}n.type="[GuestActions] Join room",e.JoinRoom=n;class i{constructor(e){this.payload=e}}i.type="[GuestActions] Set room info",e.SetRoomInfo=i;class r{constructor(e){this.card=e}}r.type="[GuestActions] Choose card",e.ChooseCard=r;class a{}a.type="[GuestActions] Get game state",e.GetGameState=a;class u{}u.type="[GuestActions] Get room remove",e.GetRoomRemove=u;class b{}b.type="[GuestActions] Remove room",e.RemoveRoom=b;class m{}m.type="[GuestActions] Close room",e.CloseRoom=m}(c||(c={}))},AzuZ:function(e,t,o){"use strict";var c;o.d(t,"a",(function(){return c})),function(e){class t{}t.type="[HostActions] Host board initialization",e.HostBoardInit=t;class o{}o.type="[HostActions] Create room",e.CreateRoom=o;class c{}c.type="[HostActions] Toggle Game State",e.ToggleGameState=c;class s{}s.type="[HostActions] Join room",e.JoinRoom=s;class n{}n.type="[HostActions] Get players",e.GetPlayers=n;class i{}i.type="[HostActions] Get game state",e.GetGameState=i;class r{}r.type="[HostActions] Copy room link",e.CopyRoomLink=r;class a{}a.type="[HostActions] Close room",e.CloseRoom=a}(c||(c={}))},BwBJ:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var c=o("Efrr"),s=o("5uGe"),n=o("ryP2");function i(e,t=c.a){var o;const s=(o=e)instanceof Date&&!isNaN(+o)?+e-t.now():Math.abs(e);return e=>e.lift(new r(s,t))}class r{constructor(e,t){this.delay=e,this.scheduler=t}call(e,t){return t.subscribe(new a(e,this.delay,this.scheduler))}}class a extends s.a{constructor(e,t,o){super(e),this.delay=t,this.scheduler=o,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const t=e.source,o=t.queue,c=e.scheduler,s=e.destination;for(;o.length>0&&o[0].time-c.now()<=0;)o.shift().notification.observe(s);if(o.length>0){const t=Math.max(0,o[0].time-c.now());this.schedule(e,t)}else this.unsubscribe(),t.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(a.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const t=this.scheduler,o=new u(t.now()+this.delay,e);this.queue.push(o),!1===this.active&&this._schedule(t)}_next(e){this.scheduleNotification(n.a.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(n.a.createComplete()),this.unsubscribe()}}class u{constructor(e,t){this.time=e,this.notification=t}}},Efrr:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var c=o("EWqr");const s=new(o("DG/E").a)(c.a)},IOsE:function(e,t,o){"use strict";o.d(t,"a",(function(){return f}));var c=o("D57K"),s=o("yDe4"),n=o("IdLP"),i=o("8j5Y"),r=o("cJ9h"),a=o("kuMc"),u=o("l3rL"),b=o("PJjB"),m=o("EM62");let p=(()=>{class e{constructor(e){this.pokerService=e}createRoom(){return this.pokerService.createRoom()}joinRoom(e){this.pokerService.joinRoom(e,u.d.HOST)}getUsers(){return this.pokerService.getUsers()}getGameState(){return this.pokerService.getGameState()}toggleGameState(e){return this.pokerService.toggleGameState(e)}}return e.\u0275fac=function(t){return new(t||e)(m.Tb(b.a))},e.\u0275prov=m.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=o("AzuZ"),l=o("PKRn"),g=d.a.CloseRoom,j=d.a.CreateRoom,O=d.a.GetGameState,y=d.a.GetPlayers,h=d.a.JoinRoom,v=d.a.ToggleGameState,S=d.a.HostBoardInit,R=d.a.CopyRoomLink;let f=(()=>{let e=class{constructor(e,t,o){this.hostService=e,this.$gaService=t,this.actions$=o}static gameState(e){return e.gameState}static roomNumber(e){return e.roomNumber}static players(e){return e.players}hostBoardInit(){this.$gaService.pageView("/host/board")}createRoom(e){return this.hostService.createRoom().pipe(Object(i.a)((t=>{const o=e.getState();e.setState(Object.assign(Object.assign({},o),{roomNumber:t.id,gameState:t.gameState}))})),Object(r.a)((()=>e.dispatch(new h))))}toggleHostState(e){this.$gaService.event("toggle_game_state","host","Toggle game state");const t=e.getState();this.hostService.toggleGameState(t.roomNumber)}joinRoom(e){const t=e.getState();this.hostService.joinRoom(t.roomNumber)}getUsers(e){this.hostService.getUsers().pipe(Object(a.a)(this.actions$.pipe(Object(s.j)(g)))).subscribe((t=>{e.patchState({players:t})}))}getGameState(e){this.hostService.getGameState().pipe(Object(a.a)(this.actions$.pipe(Object(s.j)(g)))).subscribe((t=>{e.patchState({gameState:t})}))}copyRoomLink(){this.$gaService.event("copy_room_link","host","Copy room link")}closeRoom(){this.$gaService.event("close_room","host","Close room")}};return e.\u0275fac=function(t){return new(t||e)(m.Tb(p),m.Tb(l.a),m.Tb(s.b))},e.\u0275prov=m.Gb({token:e,factory:e.\u0275fac}),Object(c.b)([Object(s.a)(S),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[]),Object(c.c)("design:returntype",void 0)],e.prototype,"hostBoardInit",null),Object(c.b)([Object(s.a)(j),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",n.a)],e.prototype,"createRoom",null),Object(c.b)([Object(s.a)(v),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"toggleHostState",null),Object(c.b)([Object(s.a)(h),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"joinRoom",null),Object(c.b)([Object(s.a)(y),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"getUsers",null),Object(c.b)([Object(s.a)(O),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"getGameState",null),Object(c.b)([Object(s.a)(R),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[]),Object(c.c)("design:returntype",void 0)],e.prototype,"copyRoomLink",null),Object(c.b)([Object(s.a)(g),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[]),Object(c.c)("design:returntype",void 0)],e.prototype,"closeRoom",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",String)],e,"gameState",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",String)],e,"roomNumber",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",Array)],e,"players",null),e=Object(c.b)([Object(s.g)({name:"host",defaults:{roomNumber:null,gameState:u.b.IN_PROGRESS,players:[]}})],e),e})()},PJjB:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var c=o("YtkY"),s=o("l3rL"),n=o("EM62"),i=o("d7Fm"),r=o("vobO");let a=(()=>{class e{constructor(e,t){this.socket=e,this.httpClient=t}createRoom(){return this.httpClient.post("/api/create-room",{clientId:this.socket.ioSocket.id})}chooseCard(e){this.socket.emit(s.e.VOTE,e)}toggleGameState(e){this.socket.emit(s.e.STATE,e)}getGameState(){return this.socket.fromEvent(s.e.STATE).pipe(Object(c.a)((e=>e.state)))}getUsers(){return this.socket.fromEvent(s.e.PLAYERS).pipe(Object(c.a)((e=>e.players)))}joinRoom(e,t,o){this.socket.emit(s.e.JOIN,{name:o,room:e,type:t})}validateRoomCode(e){return this.httpClient.post("/api/join-room-code",{id:e})}getRoomInfo(e){return this.httpClient.post("/api/room-info",{id:e})}roomRemove(){return this.socket.fromEvent(s.e.ROOM_REMOVED)}}return e.\u0275fac=function(t){return new(t||e)(n.Tb(i.a),n.Tb(r.a))},e.\u0275prov=n.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},PdGU:function(e,t,o){"use strict";o.d(t,"a",(function(){return N}));var c=o("D57K"),s=o("yDe4"),n=o("IdLP"),i=o("YtkY"),r=o("8j5Y"),a=o("kuMc"),u=o("l3rL"),b=o("lQSW"),m=o("9Q/O"),p=o("EM62"),d=o("PKRn"),l=m.a.JoinRoom,g=m.a.ChooseCard,j=m.a.GuestGameInit,O=m.a.RoomNumberValidation,y=m.a.GuestRoomNumberValidationInit,h=m.a.GuestNameInit,v=m.a.GetGameState,S=m.a.CloseRoom,R=m.a.RemoveRoom,f=m.a.SetRoomInfo,G=m.a.GetRoomRemove;let N=(()=>{let e=class{constructor(e,t,o){this.$gaService=e,this.guestService=t,this.actions$=o}static isRoomNumberValid(e){return e.isRoomNumberValid}static roomNumber(e){return e.roomNumber}static hasRoomNumber(e){return!!e.roomNumber}static card(e){return e.card}static gameState(e){return e.gameState}static availableCards(e){return e.availableCards}guestRoomNumberValidationInit(){this.$gaService.pageView("/guest/room-code")}guestNameInit(){this.$gaService.pageView("/guest/your-name")}guestGameInit(){this.$gaService.pageView("/guest/game")}roomCode(e,{roomNumber:t}){return this.guestService.validateRoomNumber(t).pipe(Object(i.a)((e=>e.valid)),Object(r.a)((o=>{const c=e.getState();o?(this.$gaService.event("code_enter_valid","guest","Enter code valid"),e.setState(Object.assign(Object.assign({},c),{roomNumber:t,isRoomNumberValid:o}))):(this.$gaService.event("code_enter_invalid","guest","Enter code invalid"),e.setState(Object.assign(Object.assign({},c),{isRoomNumberValid:o})))})))}joinRoom(e,{name:t}){const o=e.getState();this.guestService.joinRoom(t,o.roomNumber),e.setState(Object.assign(Object.assign({},o),{name:t}))}setRoomInfo(e,{payload:t}){const o=e.getState();e.setState(Object.assign(Object.assign({},o),{gameState:t.gameState,availableCards:this.guestService.availableCards}))}getGameState(e){this.guestService.getGameState().pipe(Object(a.a)(this.actions$.pipe(Object(s.j)(S,R)))).subscribe((t=>{const o=e.getState();e.setState(Object.assign(Object.assign({},o),t===u.b.IN_PROGRESS?{gameState:t,card:null}:{gameState:t}))}))}getRoomRemove(e){this.guestService.roomRemove().pipe(Object(a.a)(this.actions$.pipe(Object(s.j)(S,R)))).subscribe((()=>{e.dispatch(new R)}))}chooseCard(e,{card:t}){this.$gaService.event("user_voted","guest","User voted");const o=e.getState();o.gameState!==u.b.REVIEW&&(this.guestService.chooseCard(t,o.roomNumber),e.patchState({card:t}))}resetRoom(e){e.setState({name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[]})}};return e.\u0275fac=function(t){return new(t||e)(p.Tb(d.a),p.Tb(b.a),p.Tb(s.b))},e.\u0275prov=p.Gb({token:e,factory:e.\u0275fac}),Object(c.b)([Object(s.a)(y),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[]),Object(c.c)("design:returntype",void 0)],e.prototype,"guestRoomNumberValidationInit",null),Object(c.b)([Object(s.a)(h),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[]),Object(c.c)("design:returntype",void 0)],e.prototype,"guestNameInit",null),Object(c.b)([Object(s.a)(j),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[]),Object(c.c)("design:returntype",void 0)],e.prototype,"guestGameInit",null),Object(c.b)([Object(s.a)(O),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object,Object]),Object(c.c)("design:returntype",n.a)],e.prototype,"roomCode",null),Object(c.b)([Object(s.a)(l),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object,Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"joinRoom",null),Object(c.b)([Object(s.a)(f),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object,Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"setRoomInfo",null),Object(c.b)([Object(s.a)(v),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"getGameState",null),Object(c.b)([Object(s.a)(G),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"getRoomRemove",null),Object(c.b)([Object(s.a)(g),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object,Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"chooseCard",null),Object(c.b)([Object(s.a)([R,S]),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",void 0)],e.prototype,"resetRoom",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",Boolean)],e,"isRoomNumberValid",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",String)],e,"roomNumber",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",Boolean)],e,"hasRoomNumber",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",Object)],e,"card",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",String)],e,"gameState",null),Object(c.b)([Object(s.f)(),Object(c.c)("design:type",Function),Object(c.c)("design:paramtypes",[Object]),Object(c.c)("design:returntype",Array)],e,"availableCards",null),e=Object(c.b)([Object(s.g)({name:"guest",defaults:{name:null,card:null,gameState:null,isRoomNumberValid:null,roomNumber:null,availableCards:[]}})],e),e})()},QvUv:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));var c=o("ZTXN"),s=o("kuMc");function n(e="ngOnDestroy"){return t=>{const o=t.prototype[e];return t.prototype[e]=function(){this.takeUntilDestroy$.next(!0),this.takeUntilDestroy$.complete(),o&&o.apply(this,arguments)},class extends t{constructor(){super(...arguments),this.takeUntilDestroy$=new c.a}get destroyed$(){return this.takeUntilDestroy$=this.takeUntilDestroy$||new c.a,this.takeUntilDestroy$.asObservable()}}}}const i=e=>t=>"destroyed$"in e?t.pipe(Object(s.a)(e.destroyed$)):(console.warn("'destroyed$' property does not exist on "+e.constructor.name),t)},jJz7:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var c=o("9YbD"),s=o("EM62");let n=(()=>{class e{constructor(e){this.environment=e}get production(){return this.environment.production}}return e.\u0275fac=function(t){return new(t||e)(s.Tb(c.a))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},lQSW:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var c=o("C05f"),s=o("BwBJ"),n=o("l3rL"),i=o("PJjB"),r=o("EM62");let a=(()=>{class e{constructor(e){this.pokerService=e,this.guestRoomSubject$=new c.a(null)}get guestRoom(){return this.guestRoomSubject$.getValue()}set guestRoom(e){this.guestRoomSubject$.next(e)}get availableCards(){return[n.a.ZERO,n.a.HALF,n.a.ONE,n.a.TWO,n.a.THREE,n.a.FIVE,n.a.EIGHT,n.a.THIRTEEN,n.a.TWENTY,n.a.FORTY,n.a.HUNDRED,n.a.QUESTION_MARK,n.a.COFFEE,n.a.INFINITE]}validateRoomNumber(e){return this.pokerService.validateRoomCode(e).pipe(Object(s.a)(500))}chooseCard(e,t){this.pokerService.chooseCard({card:e,roomNumber:t})}getGameState(){return this.pokerService.getGameState()}joinRoom(e,t){this.pokerService.joinRoom(t,n.d.VOTER,e)}getRoomInfo(e){return this.pokerService.getRoomInfo(e)}roomRemove(){return this.pokerService.roomRemove()}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(i.a))},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);