(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{qmMC:function(t,e,n){"use strict";n.r(e),n.d(e,"BookingModule",function(){return j});var i=n("ofXK"),o=n("tyNb"),r=n("R0Ic");const a=Object(r.l)("triggerName",[Object(r.k)("One => Two, Two => Three, One => Three",[Object(r.j)({position:"relative"}),Object(r.h)(":enter, :leave",[Object(r.j)({position:"absolute",top:0,right:0,width:"100%"})]),Object(r.h)(":enter",[Object(r.j)({right:"-100%",opacity:0})]),Object(r.h)(":leave",Object(r.f)()),Object(r.g)([Object(r.h)(":leave",[Object(r.e)("1s ease-out",Object(r.j)({right:"100%",opacity:0}))]),Object(r.h)(":enter",[Object(r.e)("1s ease-out",Object(r.j)({right:"0%",opacity:1}))])]),Object(r.h)(":enter",Object(r.f)())]),Object(r.k)("Three => Two, Two => One, Three => One",[Object(r.j)({position:"relative"}),Object(r.h)(":enter, :leave",[Object(r.j)({position:"absolute",top:0,left:0,width:"100%"})]),Object(r.h)(":enter",[Object(r.j)({left:"-100%",opacity:0})]),Object(r.h)(":leave",Object(r.f)()),Object(r.g)([Object(r.h)(":leave",[Object(r.e)("1s ease-out",Object(r.j)({left:"100%",opacity:0}))]),Object(r.h)(":enter",[Object(r.e)("1s ease-out",Object(r.j)({left:"0%",opacity:1}))])]),Object(r.h)(":enter",Object(r.f)())])]);var c=n("fXoL");const s=function(){return["./date"]},b=function(){return["./seat"]},l=function(){return["./payment"]};let d=(()=>{class t{constructor(t){this.router=t,this.path=[],this.url=""}ngOnInit(){this.url=this.router.url,this.router.events.forEach(t=>{t instanceof o.a&&(this.url=t.url)})}setDateActive(){return"/booking/date"==this.url?"active":""}setSeatActive(){return"/booking/seat"==this.url?"active":""}setPaymentActive(){return"/booking/payment"==this.url?"active":""}}return t.\u0275fac=function(e){return new(e||t)(c.Cb(o.b))},t.\u0275cmp=c.wb({type:t,selectors:[["app-order-completation"]],decls:14,vars:9,consts:[["src","../../../assets/img/headingux.svg","alt","",1,"heading"],[1,"circle",3,"ngClass"],[3,"routerLink"],[1,"line"]],template:function(t,e){1&t&&(c.Fb(0,"section"),c.Db(1,"img",0),c.Fb(2,"ul"),c.Fb(3,"li",1),c.Fb(4,"a",2),c.Ub(5,"1"),c.Eb(),c.Eb(),c.Db(6,"li",3),c.Fb(7,"li",1),c.Fb(8,"a",2),c.Ub(9,"2"),c.Eb(),c.Eb(),c.Db(10,"li",3),c.Fb(11,"li",1),c.Fb(12,"a",2),c.Ub(13,"3"),c.Eb(),c.Eb(),c.Eb(),c.Eb()),2&t&&(c.tb(3),c.Nb("ngClass",e.setDateActive()),c.tb(1),c.Nb("routerLink",c.Ob(6,s)),c.tb(3),c.Nb("ngClass",e.setSeatActive()),c.tb(1),c.Nb("routerLink",c.Ob(7,b)),c.tb(3),c.Nb("ngClass",e.setPaymentActive()),c.tb(1),c.Nb("routerLink",c.Ob(8,l)))},directives:[i.h,o.c],styles:["section[_ngcontent-%COMP%]{display:flex;justify-content:center}section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:10rem}ul[_ngcontent-%COMP%]{flex-grow:2;justify-content:flex-start;padding:2rem}.circle[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{display:flex}.circle[_ngcontent-%COMP%]{align-items:center;justify-content:center;width:4em;height:4em;border-radius:100%;background:#1e90ff;color:#fff;border:2px transparent;transition:transform .5s ease,background 1s ease,border 1s ease-in}.circle[_ngcontent-%COMP%], .line[_ngcontent-%COMP%]{align-self:center}.line[_ngcontent-%COMP%]{min-width:calc(15%);border-top:2px solid #1e90ff}.active[_ngcontent-%COMP%]{background:#1e90ff}.circle.done[_ngcontent-%COMP%]{background:green}.circle.active[_ngcontent-%COMP%]{border:2px solid #fff}.border.aktive[_ngcontent-%COMP%]{height:1px;width:1px}a[_ngcontent-%COMP%]{font-weight:bolder;font-size:2rem}.heading[_ngcontent-%COMP%]{width:30rem}"]}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}prepareRoute(t){return t&&t.activatedRouteData&&t.activatedRouteData.animationState}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.wb({type:t,selectors:[["app-booking"]],decls:5,vars:1,consts:[[1,"background"],["outlet","outlet"]],template:function(t,e){if(1&t&&(c.Fb(0,"section",0),c.Db(1,"app-order-completation"),c.Fb(2,"div"),c.Db(3,"router-outlet",null,1),c.Eb(),c.Eb()),2&t){const t=c.Qb(4);c.tb(2),c.Nb("@triggerName",e.prepareRoute(t))}},directives:[d,o.e],styles:[".background[_ngcontent-%COMP%]{background-image:url(map.e42c76486b4a1675fe20.png);background-repeat:no-repeat,repeat;background-size:contain;background-position:50%;background-color:#ccc;background-attachment:fixed;min-height:calc(100vh - 3rem);overflow-y:hidden}"],data:{animation:[a]}}),t})(),u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.wb({type:t,selectors:[["app-date"]],decls:42,vars:0,consts:[[1,"destination"],[1,"search-container"],[1,"h2-destination"],[1,"typeof-travel"],["value","0"],["value","1"],["value","2"],["value","3"],[1,"search-destination"],[1,"searchbox"],["type","text"]],template:function(t,e){1&t&&(c.Fb(0,"section",0),c.Fb(1,"div",1),c.Fb(2,"h2",2),c.Ub(3,"Whats your next destination"),c.Eb(),c.Fb(4,"form"),c.Fb(5,"div",3),c.Fb(6,"select"),c.Fb(7,"option",4),c.Ub(8,"Return"),c.Eb(),c.Fb(9,"option",5),c.Ub(10,"One way"),c.Eb(),c.Fb(11,"option",6),c.Ub(12,"return trip"),c.Eb(),c.Fb(13,"option",7),c.Ub(14,"Multi-city"),c.Eb(),c.Eb(),c.Fb(15,"select"),c.Fb(16,"option",4),c.Ub(17,"Economy"),c.Eb(),c.Fb(18,"option",5),c.Ub(19,"Budget"),c.Eb(),c.Fb(20,"option",6),c.Ub(21,"Business"),c.Eb(),c.Fb(22,"option",7),c.Ub(23,"First Class"),c.Eb(),c.Eb(),c.Fb(24,"select"),c.Fb(25,"option",4),c.Ub(26,"Direct flight"),c.Eb(),c.Fb(27,"option",5),c.Ub(28,"1 Stop"),c.Eb(),c.Fb(29,"option",6),c.Ub(30,"2+ Stops"),c.Eb(),c.Fb(31,"option",7),c.Ub(32,"No limit"),c.Eb(),c.Eb(),c.Eb(),c.Fb(33,"div",8),c.Fb(34,"div",9),c.Fb(35,"label"),c.Ub(36,"Departure"),c.Eb(),c.Db(37,"input",10),c.Eb(),c.Fb(38,"div",9),c.Fb(39,"label"),c.Ub(40,"Destination"),c.Eb(),c.Db(41,"input",10),c.Eb(),c.Eb(),c.Eb(),c.Eb(),c.Eb())},styles:[".destination[_ngcontent-%COMP%]{display:flex}.search-container[_ngcontent-%COMP%]{height:20rem;width:40rem;margin-left:2rem;align-items:center;background-color:#eee;border-radius:1rem;display:flex;flex-direction:column}.h2-destination[_ngcontent-%COMP%]{margin:2rem 0 0;font-size:1.5rem;font-weight:bolder}form[_ngcontent-%COMP%]{width:80%}.search-destination[_ngcontent-%COMP%]{margin:1rem 0 0;display:flex;justify-content:space-between}.typeof-travel[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{margin:2rem 2rem 0 0;height:1.5rem;border-radius:5px}.searchbox[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:45%}.searchbox[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem}.searchbox[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{height:2rem;border-radius:5px}"]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.wb({type:t,selectors:[["app-payment"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Fb(0,"p"),c.Ub(1,"payment works!"),c.Eb())},styles:[""]}),t})();class h{constructor(t,e){this.seatNumber=t,this.seatPlacment=e}}function m(t,e){if(1&t&&(c.Fb(0,"div"),c.Fb(1,"div",8),c.Ub(2),c.Eb(),c.Eb()),2&t){const t=e.$implicit;c.tb(2),c.Vb(" ",t.seatNumber," ")}}function f(t,e){if(1&t&&(c.Fb(0,"div",8),c.Ub(1),c.Eb()),2&t){const t=e.$implicit;c.tb(1),c.Vb(" ",t.seatNumber," ")}}function O(t,e){if(1&t&&(c.Fb(0,"div",8),c.Ub(1),c.Eb()),2&t){const t=e.$implicit;c.tb(1),c.Vb(" ",t.seatNumber," ")}}const w=[{path:"",component:g,children:[{path:"date",component:u,data:{animationState:"One"}},{path:"seat",component:(()=>{class t{constructor(){this.chairs=[],this.windowLeft=[],this.aisle=[],this.windowRight=[]}ngOnInit(){this.generateSeats(42),this.rowSorter()}generateSeats(t){for(let e=0;e<t;e++){let t=new h(e,e%7);this.chairs.push(t)}}rowSorter(){this.windowLeft=this.chairs.filter(t=>0===t.seatPlacment||1===t.seatPlacment),this.aisle=this.chairs.filter(t=>2===t.seatPlacment||3===t.seatPlacment||4===t.seatPlacment),this.windowRight=this.chairs.filter(t=>5===t.seatPlacment||6===t.seatPlacment)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.wb({type:t,selectors:[["app-seat"]],decls:13,vars:3,consts:[[1,"plane"],[1,"plane-seats"],[1,"window-left"],[4,"ngFor","ngForOf"],[1,"aisle"],["class","seat-outline",4,"ngFor","ngForOf"],[1,"window-right"],[1,"seat-order"],[1,"seat-outline"]],template:function(t,e){1&t&&(c.Fb(0,"section",0),c.Fb(1,"div",1),c.Fb(2,"div",2),c.Tb(3,m,3,1,"div",3),c.Eb(),c.Fb(4,"div",4),c.Tb(5,f,2,1,"div",5),c.Eb(),c.Fb(6,"div",6),c.Tb(7,O,2,1,"div",5),c.Eb(),c.Eb(),c.Fb(8,"div",7),c.Fb(9,"h2"),c.Ub(10,"Orders and needs"),c.Eb(),c.Fb(11,"h3"),c.Ub(12,"travling passagers"),c.Eb(),c.Eb(),c.Eb()),2&t&&(c.tb(3),c.Nb("ngForOf",e.windowLeft),c.tb(2),c.Nb("ngForOf",e.aisle),c.tb(2),c.Nb("ngForOf",e.windowRight))},directives:[i.i],styles:[".plane[_ngcontent-%COMP%]{display:flex;justify-content:center}.plane[_ngcontent-%COMP%]   .plane-seats[_ngcontent-%COMP%], .plane[_ngcontent-%COMP%]   .seat-order[_ngcontent-%COMP%]{width:30rem;background-color:#aaa;margin:0 1rem 0 0;border-radius:10px;text-align:center}.plane[_ngcontent-%COMP%]   .plane-seats[_ngcontent-%COMP%]{padding:3rem 0 2rem;display:grid;justify-content:space-between;align-items:start;grid-template-columns:auto auto auto}.window-left[_ngcontent-%COMP%]{justify-items:start;grid-template-columns:1fr 1fr}.aisle[_ngcontent-%COMP%], .window-left[_ngcontent-%COMP%]{display:grid;align-items:start;gap:.3rem;grid-row-gap:1rem}.aisle[_ngcontent-%COMP%]{justify-items:center;grid-template-columns:auto auto auto}.window-right[_ngcontent-%COMP%]{display:grid;align-items:start;justify-items:end;grid-template-columns:1fr 1fr;gap:.3rem;grid-row-gap:1rem}.seat-outline[_ngcontent-%COMP%]{border:1px solid #000;height:4rem;width:3rem}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;margin:.5rem}h3[_ngcontent-%COMP%]{font-size:1.2rem}"]}),t})(),data:{animationState:"Two"}},{path:"payment",component:p,data:{animationState:"Three"}}]},{path:"**",redirectTo:"",component:g}];let v=(()=>{class t{}return t.\u0275mod=c.Ab({type:t}),t.\u0275inj=c.zb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(w)],o.d]}),t})(),j=(()=>{class t{}return t.\u0275mod=c.Ab({type:t}),t.\u0275inj=c.zb({factory:function(e){return new(e||t)},imports:[[i.b,v]]}),t})()}}]);