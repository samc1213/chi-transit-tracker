(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){t.exports=n(21)},18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r,i=n(0),a=n.n(i),s=n(10),o=n.n(s),c=(n(18),n(19),n(1)),u=n(2),l=n(4),h=n(3),p=n(5),d=n(6),f=n.n(d),v=n(8),m=n(7),b=n(11),y=function t(e,n,r,i){Object(c.a)(this,t),this.StopName=void 0,this.Destination=void 0,this.Line=void 0,this.Prediction=void 0,this.StopName=e,this.Destination=n,this.Line=r,this.Prediction=i};!function(t){t[t.Unknown=0]="Unknown",t[t.Purple=1]="Purple",t[t.Brown=2]="Brown",t[t.Red=3]="Red",t[t.SeventyFour=4]="SeventyFour",t[t.Bus=5]="Bus"}(r||(r={}));var j=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"fetchViaProxy",value:function(t){return fetch(t)}}]),t}(),w=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"getPredictions",value:function(t){return new Promise(function(e){var n=t.join(","),i="http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=nGRcA3p5MLFbSUrbDbtuKiiik&format=json&stpid=".concat(n);j.fetchViaProxy(i).then(function(t){return t.json()}).then(function(t){var n=new Array;t["bustime-response"].prd.forEach(function(t){n.push(new y(t.stpnm,t.des,r.Bus,"DUE"!==t.prdctdn?parseInt(t.prdctdn):null))}),e(n)})})}}]),t}(),O=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"getPredictions",value:function(t){return new Promise(function(e){var n=t.join(","),i="http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=46c79bfa6f474db4a8d82638fc4584a7&outputType=JSON&stpid=".concat(n);j.fetchViaProxy(i).then(function(t){return t.json()}).then(function(t){var n=new Array;t.ctatt.eta.forEach(function(t){var i=(Date.parse(t.arrT)-Date.parse(t.prdt))/6e4,a=r.Unknown;"P"===t.rt?a=r.Purple:"Brn"===t.rt?a=r.Brown:"Red"===t.rt&&(a=r.Red),n.push(new y(t.staNm,t.destNm,a,i)),e(n)})})})}}]),t}(),k=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=null!==this.props.predictionResponse.Prediction?this.props.predictionResponse.Prediction+" mins":"DUE";return a.a.createElement("div",{className:"arrival",style:{background:this.getcolor(this.props.predictionResponse.Line)}},a.a.createElement("li",{className:"arrival-detail arrival-destination"},this.props.predictionResponse.Destination)," ",a.a.createElement("li",{className:"arrival-detail arrival-mins"},t))}},{key:"getcolor",value:function(t){switch(t){case r.Purple:return"Purple";case r.Brown:return"Sienna";case r.Red:return"Crimson";case r.Bus:return"Gray";default:return"Black"}}}]),e}(i.Component),S=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).timer=void 0,n.timer=0,n.state={isFetching:!1,predictionResponses:new Array},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=new Array,e=new Array,n=!0,r=!1,i=void 0;try{for(var s,o=this.state.predictionResponses.entries()[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value,u=Object(b.a)(c,2),l=u[0],h=u[1];l%4===0&&0!==l&&(t.push(e),e=new Array),e.push(a.a.createElement(k,{key:l,predictionResponse:h}))}}catch(d){r=!0,i=d}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var p=this.props.dataIndex%t.length;return a.a.createElement("ul",{className:"arrivals-container"},t[p])}},{key:"componentDidMount",value:function(){var t=this;this.fetchData(),this.timer=setInterval(function(){return t.fetchData()},3e4)}},{key:"fetchData",value:function(){var t=Object(m.a)(f.a.mark(function t(){var e=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState(Object(v.a)({},this.state,{isFetching:!0})),t.next=3,Promise.all([w.getPredictions([1345,1227]),O.getPredictions([30233,30236,30235,30234])]).then(function(t){var n=t[0].concat(t[1]);n.sort(function(t,e){return null==t.Prediction||null==e.Prediction||t.Prediction<e.Prediction?-1:1}),e.setState(Object(v.a)({},e.state,{isFetching:!1,predictionResponses:n}))}).catch(function(t){console.log("Error fetching: "+t),e.setState(Object(v.a)({},e.state,{isFetching:!1}))});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(i.Component),g=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).timer=void 0,n.timer=0,n.state={isFetching:!1},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,"WEATHER")}},{key:"componentDidMount",value:function(){var t=this;this.fetchData(),this.timer=setInterval(function(){return t.fetchData()},3e4)}},{key:"fetchData",value:function(){var t=Object(m.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({isFetching:!0}),this.setState({isFetching:!1});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(i.Component),P=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).timer=void 0,n.transitionStates=["Arrival0","Arrival1","Arrival2","Weather"],n.timer=0,n.state={arrivalsDataIndex:0,transitionState:0},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.transitionStates[this.state.transitionState];return t.startsWith("Arrival")?a.a.createElement(S,{dataIndex:this.state.arrivalsDataIndex}):"Weather"===t?a.a.createElement(g,null):void 0}},{key:"update",value:function(){var t=this.transitionStates[(this.state.transitionState+1)%this.transitionStates.length];t.startsWith("Arrival")?this.setState({arrivalsDataIndex:Number.parseInt(t.split("Arrival")[1]),transitionState:(this.state.transitionState+1)%this.transitionStates.length}):this.setState({transitionState:(this.state.transitionState+1)%this.transitionStates.length})}},{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval(function(){return t.update()},1e4)}}]),e}(i.Component);var D=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.d490a196.chunk.js.map