(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{blj4:function(t,e,n){"use strict";n.r(e),n.d(e,"MypagesModule",function(){return K});var r=n("ofXK"),o=n("3Pt+"),c=n("tyNb"),i=n("fXoL"),b=n("Zdek"),a=n("h5Rr");function s(t,e){if(1&t&&(i.Mb(0,"tr"),i.Kb(1),i.Mb(2,"td"),i.jc(3),i.Lb(),i.Mb(4,"td"),i.jc(5),i.Lb(),i.Mb(6,"td"),i.jc(7),i.Lb(),i.Mb(8,"td"),i.jc(9),i.Lb(),i.Mb(10,"td"),i.jc(11),i.Lb(),i.Mb(12,"td"),i.jc(13),i.Lb(),i.Mb(14,"td"),i.jc(15,"Open"),i.Lb(),i.Jb(),i.Lb()),2&t){const t=e.$implicit;i.wb(3),i.kc(t.firstName),i.wb(2),i.kc(t.lastName),i.wb(2),i.lc(" ",t.email,""),i.wb(2),i.lc(" ",t.password,""),i.wb(2),i.lc(" ",t.roles,""),i.wb(2),i.kc(t.travelOrders.length)}}let l=(()=>{class t{constructor(t,e){this.loginAuth=t,this.state=e,this.customer$=null,this.customers=[],this.getAllBoolean=!1}ngOnInit(){this.state.customer$.subscribe(t=>{this.customer$=t,this.getAllBoolean||this.getAllCustomers()})}getAllCustomers(){null!=this.customer$&&this.customer$.jwt.length>5&&(this.loginAuth.httpGetAllCustomers(this.customer$.jwt).subscribe(t=>{console.log(t),this.customers=t},t=>{console.log(t.status)}),this.getAllBoolean=!0)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(b.a),i.Hb(a.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-customers-admin"]],decls:19,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(i.Mb(0,"table"),i.Mb(1,"thead"),i.Mb(2,"tr"),i.Mb(3,"th"),i.jc(4,"First name"),i.Lb(),i.Mb(5,"th"),i.jc(6,"Surname"),i.Lb(),i.Mb(7,"th"),i.jc(8,"E-mail"),i.Lb(),i.Mb(9,"th"),i.jc(10,"Password"),i.Lb(),i.Mb(11,"th"),i.jc(12,"Roles"),i.Lb(),i.Mb(13,"th"),i.jc(14,"Number of orders"),i.Lb(),i.Mb(15,"th"),i.jc(16,"Show"),i.Lb(),i.Lb(),i.Lb(),i.Mb(17,"tbody"),i.ic(18,s,16,6,"tr",0),i.Lb(),i.Lb()),2&t&&(i.wb(18),i.ac("ngForOf",e.customers))},directives:[r.j],styles:["table[_ngcontent-%COMP%]{background:#fff;border-radius:6px;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5rem 1rem 1rem}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:3rem;background:#00e;color:#fff;font-size:1.2rem;font-weight:lighter;text-align:center}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]{border-left:1px solid #000}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%]:nth-child(3n){border-right:1px solid #000}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:48px;border-bottom:1px solid #e3f1d5}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#bbb}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border:0}"]}),t})();var u=n("hj3O");function d(t,e){1&t&&(i.Mb(0,"th"),i.jc(1,"Paid"),i.Lb())}function m(t,e){1&t&&(i.Mb(0,"th"),i.jc(1,"Remove"),i.Lb())}const g=function(t,e){return{not:t,true:e}};function h(t,e){if(1&t&&(i.Kb(0),i.Mb(1,"td",9),i.jc(2),i.Lb(),i.Jb()),2&t){const t=i.Xb(2).index,e=i.Xb(2);i.wb(1),i.ac("ngClass",i.cc(2,g,!e.customer$.orders[t].paid,e.customer$.orders[t].paid)),i.wb(1),i.lc(" ",e.isPaid(e.customer$.orders[t].paid),"")}}function M(t,e){1&t&&i.Ib(0,"td",10)}function f(t,e){if(1&t){const t=i.Nb();i.Kb(0),i.Mb(1,"td"),i.jc(2),i.Lb(),i.Mb(3,"td"),i.jc(4),i.Lb(),i.Mb(5,"td"),i.jc(6),i.Lb(),i.Mb(7,"td"),i.jc(8),i.Lb(),i.Mb(9,"td"),i.jc(10),i.Lb(),i.Mb(11,"td"),i.jc(12),i.Lb(),i.Mb(13,"td"),i.jc(14),i.Lb(),i.Mb(15,"td"),i.jc(16),i.Yb(17,"json"),i.Lb(),i.Mb(18,"td"),i.jc(19),i.Lb(),i.ic(20,h,3,5,"ng-container",2),i.ic(21,M,1,0,"td",6),i.Mb(22,"td",7),i.Tb("click",function(){i.fc(t);const e=i.Xb(),n=e.$implicit,r=e.index,o=i.Xb(2);return o.removeDeal(n,o.customer$.orders[r])}),i.Lb(),i.Mb(23,"td",8),i.Tb("click",function(){i.fc(t);const e=i.Xb().index,n=i.Xb(2);return n.paySeat(n.customer$.orders[e])}),i.jc(24,"PAY"),i.Lb(),i.Jb()}if(2&t){const t=i.Xb(),e=t.$implicit,n=t.index,r=i.Xb(2);i.wb(2),i.kc(e.fromAirport.name),i.wb(2),i.kc(e.fromAirport.country),i.wb(2),i.lc(" ",e.fromAirport.city,""),i.wb(2),i.kc(e.toAirport.name),i.wb(2),i.kc(e.toAirport.country),i.wb(2),i.lc(" ",e.toAirport.city,""),i.wb(2),i.lc(" ",r.createDate(e.depatureDate),""),i.wb(2),i.kc(i.Zb(17,11,r.customer$.orders[n].seatNumber)),i.wb(3),i.lc("",e.price," kr "),i.wb(1),i.ac("ngIf",null!=r.customer$&&"CUSTOMER"==r.customer$.roles),i.wb(1),i.ac("ngIf",null!=r.customer$&&"ADMIN"==r.customer$.roles)}}function p(t,e){if(1&t&&(i.Mb(0,"tr"),i.ic(1,f,25,13,"ng-container",2),i.Lb()),2&t){const t=e.$implicit;i.wb(1),i.ac("ngIf",null!=t.fromAirport&&null!=t.toAirport)}}function O(t,e){if(1&t&&(i.Kb(0),i.ic(1,p,2,1,"tr",5),i.Jb()),2&t){const t=i.Xb();i.wb(1),i.ac("ngForOf",t.customer$.travelOrders)}}let C=(()=>{class t{constructor(t,e){this.state=t,this.travelService=e,this.customer$=null}ngOnInit(){this.state.customer$.subscribe(t=>this.customer$=t)}createDate(t){if(null==t)return null;let e=new Date(t);return e.getFullYear()+"-"+this.pad(e.getMonth()+1,2)+"-"+this.pad(e.getDate(),2)+" "+e.getHours()+":"+this.pad(e.getMinutes(),2)}pad(t,e){let n=Math.floor(e),r=""+t,o=r.length;return o>=n?r:"0".repeat(n-o)+r}isPaid(t){return console.log(t),t?"DONE":t?"":"Pending"}paySeat(t){null!=this.customer$&&this.travelService.payeSeat(t.id,this.customer$.jwt).subscribe(()=>{t.paid=!0,console.log(t)})}removeDeal(t,e){var n;if(console.log(t),console.log(e),console.log(),null!=this.customer$&&null!=e.id&&null!=t.id&&null!=this.customer$.email&&null!=this.customer$.jwt){let r=this.customer$.email,o=this.customer$.jwt,c=[],i=[];this.travelService.removeSeatFromCustomerAndTravel(null===(n=this.customer$)||void 0===n?void 0:n.email,t.id,e.id,this.customer$.jwt).subscribe(()=>{console.log("SENT"),this.travelService.getCustomersOrderId(r,o).subscribe(t=>{t.forEach(t=>{c.push({id:t.id,seatNumber:t.seatNumber,paid:t.paid}),i.push(t.travel)}),null!=this.customer$&&(this.customer$.travelOrders=i,this.customer$.orders=c)})},t=>{console.log(t)})}}calculateTotal(){if(null!=this.customer$){let t=0;return this.customer$.travelOrders.forEach(e=>{null!=e.price&&(t+=e.price)}),t}return 0}calculateToPaye(){if(null!=this.customer$){let t=0;for(let e=0;e<this.customer$.travelOrders.length;e++)this.customer$.orders[e].paid||(t=this.customer$.travelOrders[e].price+t);return t}return 0}calculatePayed(){if(null!=this.customer$){let t=0;for(let e=0;e<this.customer$.travelOrders.length;e++)this.customer$.orders[e].paid&&(t=this.customer$.travelOrders[e].price+t);return t}return 0}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(a.a),i.Hb(u.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-my-orders"]],decls:42,vars:6,consts:[["colspan","3"],["colspan","6"],[4,"ngIf"],[1,"payed"],[1,"topaye"],[4,"ngFor","ngForOf"],["class","remove",4,"ngIf"],[1,"remove",3,"click"],[3,"click"],[1,"paid",3,"ngClass"],[1,"remove"]],template:function(t,e){1&t&&(i.Mb(0,"table"),i.Mb(1,"thead"),i.Mb(2,"tr"),i.Mb(3,"th",0),i.jc(4,"Travling from"),i.Lb(),i.Mb(5,"th",0),i.jc(6,"Travling to"),i.Lb(),i.Mb(7,"th",1),i.jc(8,"Your price"),i.Lb(),i.Lb(),i.Mb(9,"tr"),i.Mb(10,"th"),i.jc(11,"Airport"),i.Lb(),i.Mb(12,"th"),i.jc(13,"Country"),i.Lb(),i.Mb(14,"th"),i.jc(15,"City"),i.Lb(),i.Mb(16,"th"),i.jc(17,"Airport"),i.Lb(),i.Mb(18,"th"),i.jc(19,"Country"),i.Lb(),i.Mb(20,"th"),i.jc(21,"City"),i.Lb(),i.Mb(22,"th"),i.jc(23,"Date"),i.Lb(),i.Mb(24,"th"),i.jc(25,"seat"),i.Lb(),i.Mb(26,"th"),i.jc(27,"price"),i.Lb(),i.ic(28,d,2,0,"th",2),i.ic(29,m,2,0,"th",2),i.Mb(30,"th"),i.jc(31,"Remove"),i.Lb(),i.Ib(32,"th"),i.Lb(),i.Lb(),i.Mb(33,"tbody"),i.ic(34,O,2,1,"ng-container",2),i.Lb(),i.Lb(),i.Mb(35,"div",3),i.Mb(36,"div",4),i.jc(37),i.Lb(),i.Mb(38,"div",4),i.jc(39),i.Lb(),i.Mb(40,"div",4),i.jc(41),i.Lb(),i.Lb()),2&t&&(i.wb(28),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles),i.wb(5),i.ac("ngIf",null!=e.customer$),i.wb(3),i.lc(" To Paye: ",e.calculateToPaye()," kr "),i.wb(2),i.lc(" Payed: ",e.calculatePayed()," kr "),i.wb(2),i.lc(" Total: ",e.calculateTotal()," kr "))},directives:[r.k,r.j,r.i],pipes:[r.e],styles:["table[_ngcontent-%COMP%]{background:#fff;border-radius:6px;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5rem 1rem 1rem}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:3rem;background:#00e;color:#fff;font-size:1.2rem;font-weight:lighter;text-align:center}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]{border-left:1px solid #000}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%]:nth-child(6){border-right:1px solid #000}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:48px;border-bottom:1px solid #e3f1d5}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#bbb}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border:0}.remove[_ngcontent-%COMP%]{background-image:url(trash.7be8565e0d482c6f2807.svg);background-repeat:no-repeat;background-position:50%;background-size:1.5rem;background-color:#f23}.paid[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.paid.not[_ngcontent-%COMP%]{background-color:red}.paid.true[_ngcontent-%COMP%]{background-color:green}.payed[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.payed[_ngcontent-%COMP%]   .topaye[_ngcontent-%COMP%]{width:30%;margin-top:.5rem;font-weight:700}"]}),t})();var v=n("7HOx");class L{constructor(){this.seatNumber=null,this.passanger=null}}function P(t,e){1&t&&(i.Mb(0,"th"),i.jc(1,"seat's"),i.Lb())}function _(t,e){1&t&&(i.Mb(0,"th"),i.jc(1,"Buy"),i.Lb())}function w(t,e){1&t&&(i.Mb(0,"th"),i.jc(1,"Remove"),i.Lb())}function j(t,e){if(1&t&&(i.Mb(0,"td"),i.jc(1),i.Lb()),2&t){const t=i.Xb(2).$implicit;i.wb(1),i.lc(" ",null==t.plane?null:t.plane.numberOfSeats," ")}}function y(t,e){if(1&t){const t=i.Nb();i.Mb(0,"td",7),i.Tb("click",function(){i.fc(t);const e=i.Xb(2).$implicit;return i.Xb().addTravelToList(e)}),i.jc(1,"Add"),i.Lb()}}function $(t,e){if(1&t){const t=i.Nb();i.Mb(0,"td",8),i.Tb("click",function(){i.fc(t);const e=i.Xb(2).$implicit;return i.Xb().delteOffer(e)}),i.Lb()}}function A(t,e){if(1&t&&(i.Kb(0),i.Mb(1,"td"),i.jc(2),i.Lb(),i.Mb(3,"td"),i.jc(4),i.Lb(),i.Mb(5,"td"),i.jc(6),i.Lb(),i.Mb(7,"td"),i.jc(8),i.Lb(),i.Mb(9,"td"),i.jc(10),i.Lb(),i.Mb(11,"td"),i.jc(12),i.Lb(),i.Mb(13,"td"),i.jc(14),i.Lb(),i.Mb(15,"td"),i.jc(16),i.Lb(),i.ic(17,j,2,1,"td",2),i.ic(18,y,2,0,"td",5),i.ic(19,$,1,0,"td",6),i.Jb()),2&t){const t=i.Xb().$implicit,e=i.Xb();i.wb(2),i.kc(t.fromAirport.name),i.wb(2),i.kc(t.fromAirport.country),i.wb(2),i.lc(" ",t.fromAirport.city,""),i.wb(2),i.kc(t.toAirport.name),i.wb(2),i.kc(t.toAirport.country),i.wb(2),i.lc(" ",t.toAirport.city,""),i.wb(2),i.lc(" ",e.createDate(t.depatureDate),""),i.wb(2),i.lc("",t.price," kr "),i.wb(1),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles)}}function k(t,e){if(1&t&&(i.Mb(0,"tr"),i.ic(1,A,20,11,"ng-container",2),i.Lb()),2&t){const t=e.$implicit;i.wb(1),i.ac("ngIf",null!=t.fromAirport&&null!=t.toAirport)}}function x(t,e){if(1&t){const t=i.Nb();i.Mb(0,"div",9),i.Mb(1,"h3"),i.jc(2,"Where do you want to site when travling from "),i.Lb(),i.Mb(3,"div",10),i.jc(4),i.Lb(),i.Mb(5,"h3"),i.jc(6," to "),i.Lb(),i.Mb(7,"div",11),i.jc(8),i.Lb(),i.Mb(9,"h3",12),i.jc(10," seat number: "),i.Lb(),i.Mb(11,"form",13),i.Ib(12,"input",14),i.Lb(),i.Mb(13,"button",15),i.Tb("click",function(){i.fc(t);const e=i.Xb();return e.buyTravel(e.travelToBuy)}),i.jc(14,"add to order"),i.Lb(),i.Lb()}if(2&t){const t=i.Xb();i.wb(4),i.lc(" ",null==t.travelToBuy||null==t.travelToBuy.fromAirport?null:t.travelToBuy.fromAirport.name," "),i.wb(4),i.lc(" ",null==t.travelToBuy||null==t.travelToBuy.toAirport?null:t.travelToBuy.toAirport.name," "),i.wb(3),i.ac("formGroup",t.seatForm)}}let I=(()=>{class t{constructor(t,e,n,r){this.travelService=t,this.state=e,this.router=n,this.fb=r,this.customer$=null,this.offers=[],this.offersCall=!1,this.travelToBuy=null,this.seatForm=this.fb.group({seatNumber:[]})}ngOnInit(){this.state.customer$.subscribe(t=>{this.customer$=t,!this.offersCall&&this.customer$.jwt.length>6&&(this.offersCall=!0,this.getOffers(),console.log("SENT: ",t))})}getOffers(){var t,e;console.log("get offers ",null===(t=this.customer$)||void 0===t?void 0:t.jwt),(null===(e=this.customer$)||void 0===e?void 0:e.jwt)&&this.travelService.getAllTravelOffers(this.customer$.jwt).subscribe(t=>{console.log(t),this.offers=[...this.offers,...t],console.log(this.offers)},t=>{console.log(t),this.logout()})}logout(){const t=new v.a("");this.state.setCustomer(t),sessionStorage.removeItem("travelux"),this.router.navigate(["/login"])}createDate(t){if(null==t)return null;let e=new Date(t);return e.getFullYear()+"-"+this.pad(e.getMonth()+1,2)+"-"+this.pad(e.getDate(),2)+" "+e.getHours()+":"+this.pad(e.getMinutes(),2)}pad(t,e){let n=Math.floor(e),r=""+t,o=r.length;return o>=n?r:"0".repeat(n-o)+r}delteOffer(t){var e;(null===(e=this.customer$)||void 0===e?void 0:e.jwt)&&null!=(null==t?void 0:t.id)&&this.travelService.deleteTravelOffer(t,this.customer$.jwt,t.id).subscribe(()=>{this.offers=[],this.getOffers()},t=>{console.log(t)})}addTravelToList(t){this.travelToBuy=t}buyTravel(t){var e,n,r,o,c;null==(null===(e=this.customer$)||void 0===e?void 0:e.orders)&&null!=this.customer$&&(this.customer$.orders=[]);let i=new L;if(i.passanger=this.customer$,i.seatNumber=this.seatForm.value.seatNumber,null!=(null===(n=this.customer$)||void 0===n?void 0:n.jwt)&&null!=(null===(r=this.customer$)||void 0===r?void 0:r.email)&&null!=(null===(o=this.customer$)||void 0===o?void 0:o.jwt)&&null!=t&&null!=t.id){let e=this.customer$.jwt,n=this.customer$.email,r=[],o=[];this.travelService.buyTravelSeat(i,null===(c=this.customer$)||void 0===c?void 0:c.jwt,null==t?void 0:t.id).subscribe(t=>{this.travelService.getCustomersOrderId(n,e).subscribe(t=>{console.log(t),t.forEach(t=>{r.push({id:t.id,seatNumber:t.seatNumber,paid:t.paid}),o.push(t.travel)}),null!=this.customer$&&(this.customer$.travelOrders=o,this.customer$.orders=r,this.router.navigate(["/mypages/myorders"]))})})}}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(u.a),i.Hb(a.a),i.Hb(c.b),i.Hb(o.b))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-mypage-offer"]],decls:32,vars:5,consts:[["colspan","3"],["colspan","4"],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","create-seat",4,"ngIf"],[3,"click",4,"ngIf"],["class","remove",3,"click",4,"ngIf"],[3,"click"],[1,"remove",3,"click"],[1,"create-seat"],[1,"from"],[1,"to"],[1,"choose-seat"],[3,"formGroup"],["type","number","formControlName","seatNumber"],[1,"btn-sign-in",3,"click"]],template:function(t,e){1&t&&(i.Mb(0,"table"),i.Mb(1,"thead"),i.Mb(2,"tr"),i.Mb(3,"th",0),i.jc(4,"Travling from"),i.Lb(),i.Mb(5,"th",0),i.jc(6,"Travling to"),i.Lb(),i.Mb(7,"th",1),i.jc(8,"Your price"),i.Lb(),i.Lb(),i.Mb(9,"tr"),i.Mb(10,"th"),i.jc(11,"Airport"),i.Lb(),i.Mb(12,"th"),i.jc(13,"Country"),i.Lb(),i.Mb(14,"th"),i.jc(15,"City"),i.Lb(),i.Mb(16,"th"),i.jc(17,"Airport"),i.Lb(),i.Mb(18,"th"),i.jc(19,"Country"),i.Lb(),i.Mb(20,"th"),i.jc(21,"City"),i.Lb(),i.Mb(22,"th"),i.jc(23,"Date"),i.Lb(),i.Mb(24,"th"),i.jc(25,"price"),i.Lb(),i.ic(26,P,2,0,"th",2),i.ic(27,_,2,0,"th",2),i.ic(28,w,2,0,"th",2),i.Lb(),i.Lb(),i.Mb(29,"tbody"),i.ic(30,k,2,1,"tr",3),i.Lb(),i.Lb(),i.ic(31,x,15,3,"div",4)),2&t&&(i.wb(26),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles),i.wb(2),i.ac("ngForOf",e.offers),i.wb(1),i.ac("ngIf",null!=e.travelToBuy))},directives:[r.k,r.j,o.j,o.g,o.d,o.h,o.a,o.f,o.c],styles:["table[_ngcontent-%COMP%]{background:#fff;border-radius:6px;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5rem 1rem 1rem}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:3rem;background:#00e;color:#fff;font-size:1.2rem;font-weight:lighter;text-align:center}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child   th[_ngcontent-%COMP%]{border-left:1px solid #000}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%]:nth-child(3), table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%]:nth-child(6){border-right:1px solid #000}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:48px;border-bottom:1px solid #e3f1d5}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#bbb}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border:0}.remove[_ngcontent-%COMP%]{background-image:url(trash.7be8565e0d482c6f2807.svg);background-repeat:no-repeat;background-position:50%;background-size:1.5rem;background-color:#f23}.create-seat[_ngcontent-%COMP%]{margin-top:1rem;display:flex}.create-seat[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%], .create-seat[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{margin:0 .3rem;font-weight:700}.create-seat[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:2.5rem;margin-left:.5rem}.btn-sign-in[_ngcontent-%COMP%]{width:8rem;margin:-.5rem 1rem 0;padding:.5rem;border:none;border-radius:5px;background-color:#00e;font-weight:700;font-size:1.2rem;color:#fff}"]}),t})();function T(t,e){1&t&&(i.Mb(0,"h2",5),i.jc(1,"Admin board"),i.Lb())}function N(t,e){if(1&t&&(i.Mb(0,"h2",5),i.jc(1),i.Lb()),2&t){const t=i.Xb();i.wb(1),i.lc(" Welcome ",t.customer$.firstName,"")}}const S=function(){return["/mypages/newoffer"]};function F(t,e){1&t&&(i.Mb(0,"li",6),i.Mb(1,"a",7),i.jc(2," Create an offer "),i.Lb(),i.Lb()),2&t&&(i.wb(1),i.ac("routerLink",i.bc(1,S)))}const D=function(){return["/mypages/customer"]};function X(t,e){1&t&&(i.Mb(0,"li",6),i.Mb(1,"a",7),i.jc(2," Customers "),i.Lb(),i.Lb()),2&t&&(i.wb(1),i.ac("routerLink",i.bc(1,D)))}const B=function(){return["/mypages/orders"]};function E(t,e){1&t&&(i.Mb(0,"li",6),i.Mb(1,"a",7),i.jc(2," View travelorders "),i.Lb(),i.Lb()),2&t&&(i.wb(1),i.ac("routerLink",i.bc(1,B)))}function R(t,e){1&t&&(i.Mb(0,"li",6),i.Mb(1,"a",7),i.jc(2," Buy a flight "),i.Lb(),i.Lb()),2&t&&(i.wb(1),i.ac("routerLink",i.bc(1,B)))}const H=function(){return["/mypages/myorders"]};function z(t,e){1&t&&(i.Mb(0,"li",6),i.Mb(1,"a",7),i.jc(2," My orders "),i.Lb(),i.Lb()),2&t&&(i.wb(1),i.ac("routerLink",i.bc(1,H)))}function U(t,e){if(1&t){const t=i.Nb();i.Mb(0,"tr"),i.Mb(1,"td"),i.jc(2),i.Lb(),i.Mb(3,"td"),i.jc(4),i.Lb(),i.Mb(5,"td"),i.jc(6),i.Lb(),i.Mb(7,"td",28),i.Tb("click",function(){i.fc(t);const n=e.$implicit;return i.Xb().setDepartureAirport(n)}),i.jc(8,"Add"),i.Lb(),i.Mb(9,"td",28),i.Tb("click",function(){i.fc(t);const n=e.$implicit;return i.Xb().setArrivalAirport(n)}),i.jc(10,"Add"),i.Lb(),i.Lb()}if(2&t){const t=e.$implicit;i.wb(2),i.kc(t.name),i.wb(2),i.kc(t.country),i.wb(2),i.lc(" ",t.city,"")}}function G(t,e){if(1&t){const t=i.Nb();i.Mb(0,"tr"),i.Mb(1,"td"),i.jc(2),i.Lb(),i.Mb(3,"td"),i.jc(4),i.Lb(),i.Mb(5,"td",28),i.Tb("click",function(){i.fc(t);const n=e.$implicit;return i.Xb().setAirplaneOfChoice(n)}),i.jc(6," add"),i.Lb(),i.Lb()}if(2&t){const t=e.$implicit;i.wb(2),i.kc(t.name),i.wb(2),i.kc(t.numberOfSeats)}}const J=[{path:"",component:(()=>{class t{constructor(t,e){this.ts=t,this.state=e,this.headingsAdmin="New travel destination",this.customer$=null}ngOnInit(){this.state.customer$.subscribe(t=>this.customer$=t)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(u.a),i.Hb(a.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-mypages"]],decls:16,vars:8,consts:[[1,"admin-pages"],[1,"sidebar"],["class","adminboard",4,"ngIf"],["class","nav-view",4,"ngIf"],[1,"heading"],[1,"adminboard"],[1,"nav-view"],[3,"routerLink"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.ic(2,T,2,0,"h2",2),i.ic(3,N,2,1,"h2",2),i.Mb(4,"ul"),i.ic(5,F,3,2,"li",3),i.ic(6,X,3,2,"li",3),i.ic(7,E,3,2,"li",3),i.ic(8,R,3,2,"li",3),i.ic(9,z,3,2,"li",3),i.Lb(),i.Lb(),i.Mb(10,"section",4),i.Mb(11,"h2"),i.jc(12),i.Lb(),i.Mb(13,"h3"),i.jc(14,"Setup destinations"),i.Lb(),i.Ib(15,"router-outlet"),i.Lb(),i.Lb()),2&t&&(i.wb(2),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(2),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"ADMIN"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(1),i.ac("ngIf",null!=e.customer$&&"CUSTOMER"==e.customer$.roles),i.wb(3),i.kc(e.headingsAdmin))},directives:[r.k,c.e,c.c],styles:[".admin-pages[_ngcontent-%COMP%]{display:flex;background-color:#eee}.admin-pages[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]{min-height:calc(100vh - 4rem)}.sidebar[_ngcontent-%COMP%]{width:20rem;background-color:#4e73df}.sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-top:4rem;margin-bottom:2rem;text-align:center;font-size:1.5rem;font-weight:700}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:4rem;display:flex;justify-content:center;align-items:center;color:#fff;border-bottom:1px solid #fff}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#4e73ff}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:2rem;letter-spacing:3px;font-size:large;height:100%}.heading[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.heading[_ngcontent-%COMP%]{flex-direction:column;justify-content:flex-start}.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2rem;font-size:2rem;letter-spacing:2px}"]}),t})(),children:[{path:"newoffer",component:(()=>{class t{constructor(t,e,n,r){this.fb=t,this.travelService=e,this.state=n,this.router=r,this.customer$=null,this.airports$=[],this.planes$=[],this.planesRecieved=!1,this.departureAirport={name:"",country:"",city:""},this.arrivalAirport={name:"",country:"",city:""},this.thePlaneOfchoice={name:"",numberOfSeats:0},this.departureDate=Date.now(),this.arrivalDate=Date.now(),this.price=0,this.airportForm=this.fb.group({airportName:[""],country:[""],city:[""],price:[0],departureDate:["2021-01-17T20:00"]}),this.planeForm=this.fb.group({name:[""],numberOfSeats:[300]})}ngOnInit(){this.state.customer$.subscribe(t=>{this.customer$=t}),this.state.airports$.subscribe(t=>this.airports$=t),this.state.airPlanes$.subscribe(t=>this.planes$=t)}createPlane(){null!=this.customer$&&this.travelService.createAirplane({name:this.planeForm.value.name,numberOfSeats:this.planeForm.value.numberOfSeats},this.customer$.jwt).subscribe(t=>{this.state.addPlane(t),this.planeForm.reset()})}createAirport(){var t;if(null!=this.customer$){const e={name:this.airportForm.value.airportName,country:this.airportForm.value.country,city:this.airportForm.value.city};(null===(t=this.customer$)||void 0===t?void 0:t.jwt.length)>5&&this.travelService.newAirport(e,this.customer$.jwt).subscribe(t=>{this.state.addAirport(t),this.airportForm.reset()})}}setDepartureAirport(t){this.departureAirport=t}setArrivalAirport(t){this.arrivalAirport=t}setAirplaneOfChoice(t){this.thePlaneOfchoice=t}setPlaneText(){return this.thePlaneOfchoice.numberOfSeats>0?this.thePlaneOfchoice.name+", "+this.thePlaneOfchoice.numberOfSeats+" seats":""}resetTravelAirports(){this.departureAirport={name:"",country:"",city:""},this.arrivalAirport={name:"",country:"",city:""}}registerTravel(){null!=this.customer$?this.travelService.createTravelOffer({plane:this.thePlaneOfchoice,fromAirport:this.departureAirport,toAirport:this.arrivalAirport,depatureDate:this.airportForm.value.departureDate,price:this.airportForm.value.price},this.customer$.jwt).subscribe(t=>console.log(t)):this.logout()}logout(){const t=new v.a("");this.state.setCustomer(t),sessionStorage.removeItem("travelux"),this.router.navigate(["/login"])}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(o.b),i.Hb(u.a),i.Hb(a.a),i.Hb(c.b))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-setup-destination"]],decls:124,vars:17,consts:[[1,"container-destinations"],[1,"box-destinations"],[1,"travel-h3"],[3,"formGroup"],[1,"input-box"],["for","name"],["id","name","name","name","type","text","formControlName","airportName","placeholder","Airport"],["for","country"],["id","country","name","country","type","text","formControlName","country","placeholder","country"],["for","city"],["id","city","name","city","type","text","formControlName","city","placeholder","city"],[1,"btn-new",3,"click"],["id","name","name","name","type","text","formControlName","name","placeholder","Airport"],["id","country","name","country","type","number","formControlName","numberOfSeats","placeholder","country"],[4,"ngFor","ngForOf"],[1,"plane-table"],[1,"radio-row"],[1,"input-box","radio"],["type","radio","id","oneway","name","oneway","value","oneway"],["for","oneway"],["type","radio","id","return","name","oneway","value","return"],["for","return"],[1,"airport-travel"],[1,"from"],[1,"airportname"],["type","datetime-local","formControlName","departureDate"],[1,"to"],["type","number","formControlName","price"],[3,"click"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Mb(2,"h3",2),i.jc(3,"Register an airport"),i.Lb(),i.Mb(4,"form",3),i.Mb(5,"div",4),i.Mb(6,"label",5),i.jc(7,"Airport Name"),i.Lb(),i.Ib(8,"input",6),i.Lb(),i.Mb(9,"div",4),i.Mb(10,"label",7),i.jc(11,"Country"),i.Lb(),i.Ib(12,"input",8),i.Lb(),i.Mb(13,"div",4),i.Mb(14,"label",9),i.jc(15,"City"),i.Lb(),i.Ib(16,"input",10),i.Lb(),i.Lb(),i.Mb(17,"button",11),i.Tb("click",function(){return e.createAirport()}),i.jc(18,"SEND"),i.Lb(),i.Mb(19,"h3",2),i.jc(20,"Register a plane"),i.Lb(),i.Mb(21,"form",3),i.Mb(22,"div",4),i.Mb(23,"label",5),i.jc(24,"Airport Name"),i.Lb(),i.Ib(25,"input",12),i.Lb(),i.Mb(26,"div",4),i.Mb(27,"label",7),i.jc(28,"Passanger seats"),i.Lb(),i.Ib(29,"input",13),i.Lb(),i.Lb(),i.Mb(30,"button",11),i.Tb("click",function(){return e.createPlane()}),i.jc(31,"SEND"),i.Lb(),i.Lb(),i.Mb(32,"div",1),i.Mb(33,"table"),i.Mb(34,"thead"),i.Mb(35,"tr"),i.Mb(36,"th"),i.jc(37,"Airport"),i.Lb(),i.Mb(38,"th"),i.jc(39,"Country"),i.Lb(),i.Mb(40,"th"),i.jc(41,"City"),i.Lb(),i.Mb(42,"th"),i.jc(43,"From"),i.Lb(),i.Mb(44,"th"),i.jc(45,"To"),i.Lb(),i.Lb(),i.Lb(),i.Mb(46,"tbody"),i.ic(47,U,11,3,"tr",14),i.Lb(),i.Lb(),i.Mb(48,"table",15),i.Mb(49,"thead"),i.Mb(50,"tr"),i.Mb(51,"th"),i.jc(52,"Plane"),i.Lb(),i.Mb(53,"th"),i.jc(54,"max number of passanger"),i.Lb(),i.Mb(55,"th"),i.jc(56,"add"),i.Lb(),i.Lb(),i.Lb(),i.Mb(57,"tbody"),i.ic(58,G,7,2,"tr",14),i.Lb(),i.Lb(),i.Lb(),i.Mb(59,"div",1),i.Mb(60,"h3",2),i.jc(61,"Create an offer"),i.Lb(),i.Mb(62,"div",16),i.Mb(63,"div",17),i.Ib(64,"input",18),i.Mb(65,"label",19),i.jc(66,"One way"),i.Lb(),i.Lb(),i.Mb(67,"div",17),i.Ib(68,"input",20),i.Mb(69,"label",21),i.jc(70,"Return"),i.Lb(),i.Ib(71,"br"),i.Lb(),i.Lb(),i.Mb(72,"div",22),i.Mb(73,"div",23),i.Mb(74,"div",4),i.Mb(75,"h3"),i.jc(76," Departure Airport "),i.Lb(),i.Mb(77,"div",24),i.jc(78),i.Lb(),i.Lb(),i.Mb(79,"div",4),i.Mb(80,"h3"),i.jc(81," From City "),i.Lb(),i.Mb(82,"div",24),i.jc(83),i.Lb(),i.Lb(),i.Mb(84,"div",4),i.Mb(85,"h3"),i.jc(86," In Country "),i.Lb(),i.Mb(87,"div",24),i.jc(88),i.Lb(),i.Lb(),i.Mb(89,"form",3),i.Mb(90,"div",4),i.Mb(91,"h3"),i.jc(92," Departure date "),i.Lb(),i.Ib(93,"input",25),i.Lb(),i.Lb(),i.jc(94),i.Yb(95,"json"),i.Lb(),i.Mb(96,"div",26),i.Mb(97,"div",4),i.Mb(98,"h3"),i.jc(99," Arrival Airport "),i.Lb(),i.Mb(100,"div",24),i.jc(101),i.Lb(),i.Lb(),i.Mb(102,"div",4),i.Mb(103,"h3"),i.jc(104," From City "),i.Lb(),i.Mb(105,"div",24),i.jc(106),i.Lb(),i.Lb(),i.Mb(107,"div",4),i.Mb(108,"h3"),i.jc(109," In Country "),i.Lb(),i.Mb(110,"div",24),i.jc(111),i.Lb(),i.Lb(),i.Mb(112,"div",4),i.Mb(113,"h3"),i.jc(114," Plane type "),i.Lb(),i.Mb(115,"div",24),i.jc(116),i.Lb(),i.Lb(),i.Mb(117,"form",3),i.Mb(118,"div",4),i.Mb(119,"h3"),i.jc(120),i.Lb(),i.Ib(121,"input",27),i.Lb(),i.Lb(),i.Mb(122,"button",11),i.Tb("click",function(){return e.registerTravel()}),i.jc(123,"Register"),i.Lb(),i.Lb(),i.Lb(),i.Lb(),i.Lb()),2&t&&(i.wb(4),i.ac("formGroup",e.airportForm),i.wb(17),i.ac("formGroup",e.planeForm),i.wb(26),i.ac("ngForOf",e.airports$),i.wb(11),i.ac("ngForOf",e.planes$),i.wb(20),i.lc(" ",e.departureAirport.name," "),i.wb(5),i.lc(" ",e.departureAirport.city," "),i.wb(5),i.lc(" ",e.departureAirport.country," "),i.wb(1),i.ac("formGroup",e.airportForm),i.wb(5),i.lc(" ",i.Zb(95,15,e.airportForm.value.departureDate)," "),i.wb(7),i.lc(" ",e.arrivalAirport.name," "),i.wb(5),i.lc(" ",e.arrivalAirport.city," "),i.wb(5),i.lc(" ",e.arrivalAirport.country," "),i.wb(5),i.lc(" ",e.setPlaneText()," "),i.wb(1),i.ac("formGroup",e.airportForm),i.wb(3),i.lc(" Price ",e.airportForm.value.price," "))},directives:[o.j,o.g,o.d,o.a,o.f,o.c,o.h,r.j],pipes:[r.e],styles:[".container-destinations[_ngcontent-%COMP%]{margin:2rem 0 0;display:flex}.container-destinations[_ngcontent-%COMP%]   .box-destinations[_ngcontent-%COMP%]{padding:0 2rem}.container-destinations[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-direction:column}.container-destinations[_ngcontent-%COMP%]   .input-box.radio[_ngcontent-%COMP%]{flex-direction:row;justify-content:start;padding-right:3rem}.container-destinations[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.3rem}.radio-row[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.btn-new[_ngcontent-%COMP%]{width:100%;margin:2rem 0 1rem;padding:.5rem;border:none;border-radius:5px;background-color:#00e;font-weight:700;font-size:1.2rem;color:#fff}table[_ngcontent-%COMP%]{background:#fff;border-radius:6px;width:100%}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5rem 1rem 1rem}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:3rem;background:#00e;color:#fff;font-size:1.2rem;font-weight:lighter;text-align:center}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:48px;border-bottom:1px solid #e3f1d5}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#bbb}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border:0}.box-destinations[_ngcontent-%COMP%]   .travel-h3[_ngcontent-%COMP%]{text-align:center;font-weight:bolder;font-size:1.2rem}.airport-travel[_ngcontent-%COMP%]{display:flex}.airport-travel[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%], .airport-travel[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{margin:1rem}.airport-travel[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%], .airport-travel[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{height:3rem;justify-content:space-between}.airport-travel[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .airport-travel[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.airport-travel[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%]   .airportname[_ngcontent-%COMP%], .airport-travel[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]   .airportname[_ngcontent-%COMP%]{border-bottom:1px solid #000}.plane-table[_ngcontent-%COMP%]{margin-top:2rem}"]}),t})()},{path:"customer",component:l},{path:"orders",component:I},{path:"myorders",component:C}]}];let Y=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[c.d.forChild(J)],c.d]}),t})(),K=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[r.b,Y,o.e,o.i]]}),t})()}}]);