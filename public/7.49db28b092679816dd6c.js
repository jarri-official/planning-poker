(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Tnap:function(t,n,e){"use strict";e.r(n),e.d(n,"LandingModule",(function(){return k}));var o=e("2kYt"),i=e("PCNd"),a=e("sEIs"),r=e("D57K"),s=e("yDe4"),c=e("QvUv"),p=e("67b8"),b=e("lQSW"),g=e("EM62"),l=e("PKRn"),h=e("rqBn"),d=e("6EaX"),u=e("hi3J"),m=e("M0Hd");const P=[{path:"",component:(()=>{let t=class{constructor(t,n,e,o){this.router=t,this.store=n,this.guestService=e,this.$gaService=o}ngOnInit(){this.$gaService.pageView("/"),this.resetStates()}goToGuestPath(){this.router.navigateByUrl("/guest")}goToHostPath(){this.router.navigateByUrl("/host")}resetStates(){const t=this.store.snapshot();this.store.reset(Object.assign(Object.assign({},t),{[p.a.HOST]:{},[p.a.GUEST]:{}}))}};return t.\u0275fac=function(n){return new(n||t)(g.Kb(a.c),g.Kb(s.h),g.Kb(b.a),g.Kb(l.a))},t.\u0275cmp=g.Eb({type:t,selectors:[["planning-poker-landing"]],decls:17,vars:0,consts:[["planningPokerButton","","buttonColor","secondary",3,"click"],[1,"hidden-on-mobile"],["planningPokerButton","",1,"hidden-on-mobile",3,"click"],[1,"poker-footer"],["href","http://haxit.pl/","target","_blank"]],template:function(t,n){1&t&&(g.Pb(0,"planning-poker-layout"),g.Pb(1,"planning-poker-header"),g.Pb(2,"h1"),g.mc(3,"Planning Poker"),g.Ob(),g.Pb(4,"h2"),g.mc(5,"Probably the easiest one to use"),g.Ob(),g.Ob(),g.Pb(6,"planning-poker-content"),g.Pb(7,"button",0),g.Wb("click",(function(){return n.goToGuestPath()})),g.mc(8,"Join existing room "),g.Ob(),g.Pb(9,"span",1),g.mc(10,"or"),g.Ob(),g.Pb(11,"button",2),g.Wb("click",(function(){return n.goToHostPath()})),g.mc(12,"Create new one "),g.Ob(),g.Ob(),g.Ob(),g.Pb(13,"div",3),g.mc(14," Created by\xa0"),g.Pb(15,"a",4),g.mc(16,"haxit"),g.Ob(),g.Ob())},directives:[h.a,d.a,u.a,m.a],styles:["planning-poker-content[_ngcontent-%COMP%]{font-weight:700}planning-poker-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .8333333333em}planning-poker-header[_ngcontent-%COMP%]{position:relative}planning-poker-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;width:100%;padding-top:.5555555556em}@media (min-width:576px){planning-poker-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;top:2.5em;padding-top:0}}.poker-footer[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;text-align:center;text-transform:uppercase;display:flex;align-items:center;justify-content:center;font-size:.7777777778em;color:#717171;padding-bottom:.8333333333em;margin-top:auto;margin-bottom:0}"],changeDetection:0}),t=Object(r.b)([Object(c.a)()],t),t})(),data:{animation:"LandingComponent"}}];let O=(()=>{class t{}return t.\u0275mod=g.Ib({type:t}),t.\u0275inj=g.Hb({factory:function(n){return new(n||t)},imports:[[a.d.forChild(P)],a.d]}),t})(),k=(()=>{class t{}return t.\u0275mod=g.Ib({type:t}),t.\u0275inj=g.Hb({factory:function(n){return new(n||t)},imports:[[o.c,O,i.a]]}),t})()}}]);