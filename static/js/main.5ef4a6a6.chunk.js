(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(25)},20:function(t,e,n){},21:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a,r=n(0),i=n.n(r),s=n(12),o=n.n(s),c=(n(20),n(21),n(1)),u=n(2),h=n(4),l=n(3),p=n(5),d=n(6),f=n.n(d),v=n(8),m=n(7),b=n(14),w=function t(e,n,a,r){Object(c.a)(this,t),this.StopName=void 0,this.Destination=void 0,this.Line=void 0,this.Prediction=void 0,this.StopName=e,this.Destination=n,this.Line=a,this.Prediction=r};!function(t){t[t.Unknown=0]="Unknown",t[t.Purple=1]="Purple",t[t.Brown=2]="Brown",t[t.Red=3]="Red",t[t.SeventyFour=4]="SeventyFour",t[t.Bus=5]="Bus"}(a||(a={}));var j=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"fetchViaProxy",value:function(t){return fetch("https://blooming-chamber-35209.herokuapp.com/"+t,{credentials:"omit",headers:{accept:"*/*","accept-language":"en-US,en;q=0.9","cache-control":"no-cache",pragma:"no-cache","sec-fetch-mode":"cors","x-requested-with":"XMLHttpRequest","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",body:null,method:"GET",mode:"cors"})}}]),t}(),y=n(13),O=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"getPredictions",value:function(t){return new Promise(function(e){var n=t.join(","),r="http://www.ctabustracker.com/bustime/api/v2/getpredictions?key=nGRcA3p5MLFbSUrbDbtuKiiik&format=json&stpid=".concat(n);j.fetchViaProxy(r).then(function(t){return t.json()}).then(function(t){var n=new Array;t["bustime-response"].prd.forEach(function(t){n.push(new w(t.stpnm,t.des,a.Bus,"DUE"!==t.prdctdn?parseInt(t.prdctdn):null))}),e(n)}).catch(function(t){return Object(y.reject)(t)})})}}]),t}(),g=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"getPredictions",value:function(t){return new Promise(function(e){var n=t.join(","),r="https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=46c79bfa6f474db4a8d82638fc4584a7&outputType=JSON&stpid=".concat(n);j.fetchViaProxy(r).then(function(t){return t.json()}).then(function(t){var n=new Array;t.ctatt.eta.forEach(function(t){var r=(Date.parse(t.arrT)-Date.parse(t.prdt))/6e4,i=a.Unknown;"P"===t.rt?i=a.Purple:"Brn"===t.rt?i=a.Brown:"Red"===t.rt&&(i=a.Red),n.push(new w(t.staNm,t.destNm,i,r)),e(n)})})})}}]),t}(),S=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=null!==this.props.predictionResponse.Prediction?this.props.predictionResponse.Prediction:"DUE";return i.a.createElement("div",{className:"arrival",style:{background:this.getcolor(this.props.predictionResponse.Line)}},i.a.createElement("li",{className:"arrival-detail arrival-destination"},this.props.predictionResponse.Destination)," ",i.a.createElement("li",{className:"arrival-detail arrival-mins"},t))}},{key:"getcolor",value:function(t){switch(t){case a.Purple:return"Purple";case a.Brown:return"Sienna";case a.Red:return"Crimson";case a.Bus:return"Gray";default:return"Black"}}}]),e}(r.Component),k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(l.a)(e).call(this,t))).timer=void 0,n.timer=0,n.state={isFetching:!1,predictionResponses:new Array},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=new Array,e=new Array,n=!0,a=!1,r=void 0;try{for(var s,o=this.state.predictionResponses.entries()[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value,u=Object(b.a)(c,2),h=u[0],l=u[1];h%4===0&&0!==h&&(t.push(e),e=new Array),e.push(i.a.createElement(S,{key:h,predictionResponse:l}))}}catch(d){a=!0,r=d}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}var p=this.props.dataIndex%t.length;return i.a.createElement("ul",{className:"arrivals-container"},t[p])}},{key:"componentDidMount",value:function(){var t=this;this.fetchData(),this.timer=setInterval(function(){return t.fetchData()},3e4)}},{key:"fetchData",value:function(){var t=Object(m.a)(f.a.mark(function t(){var e=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState(Object(v.a)({},this.state,{isFetching:!0})),t.next=3,Promise.all([O.getPredictions([1345,1227]),g.getPredictions([30233,30236,30235,30234])]).then(function(t){var n=t[0].concat(t[1]);n.sort(function(t,e){return null==t.Prediction||null==e.Prediction||t.Prediction<e.Prediction?-1:1}),e.setState(Object(v.a)({},e.state,{isFetching:!1,predictionResponses:n}))}).catch(function(t){console.log("Error fetching: "+t),e.setState(Object(v.a)({},e.state,{isFetching:!1}))});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(r.Component),P=function t(e){Object(c.a)(this,t),this.Forecasts=void 0,this.Forecasts=e},D=function t(e,n,a,r,i){Object(c.a)(this,t),this.TimePeriodName=void 0,this.Temperature=void 0,this.DetailedForecast=void 0,this.ShortForecast=void 0,this.IconUrl=void 0,this.TimePeriodName=e,this.Temperature=n,this.ShortForecast=a,this.DetailedForecast=r,this.IconUrl=i},E=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,null,[{key:"getWeather",value:function(t,e){return new Promise(function(n){var a="https://api.weather.gov/gridpoints/LOT/".concat(t+","+e,"/forecast");j.fetchViaProxy(a).then(function(t){return t.json()}).then(function(t){console.log(t);var e=new Array;t.properties.periods.forEach(function(t){var n=new D(t.name,Number.parseFloat(t.temperature),t.shortForecast,t.detailedForecast,t.icon);e.push(n)}),n(new P(e))})})}}]),t}(),x=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return console.log(this.props.forecast),null!==this.props.forecast?i.a.createElement("div",null,i.a.createElement("div",{className:"weather-header"},this.props.forecast.TimePeriodName),i.a.createElement("img",{className:"weather-img",src:this.props.forecast.IconUrl}),i.a.createElement("div",{className:"weather-temp"},this.props.forecast.Temperature+"\xb0F"),i.a.createElement("div",{className:"weather-detailed"},this.props.forecast.DetailedForecast)):i.a.createElement("div",{className:"weather-header"},"Missing Weather Data")}}]),e}(r.Component),F=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(l.a)(e).call(this,t))).timer=void 0,n.timer=0,n.state={isFetching:!1,forecasts:new Array},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement(x,{forecast:this.state.forecasts.length>this.props.dataIndex?this.state.forecasts[this.props.dataIndex]:null})}},{key:"componentDidMount",value:function(){var t=this;this.fetchData(),this.timer=setInterval(function(){return t.fetchData()},3e4)}},{key:"fetchData",value:function(){var t=Object(m.a)(f.a.mark(function t(){var e=this;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({isFetching:!0}),E.getWeather(73,70).then(function(t){e.setState({forecasts:t.Forecasts})}),this.setState({isFetching:!1});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(r.Component),I=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(l.a)(e).call(this,t))).timer=void 0,n.transitionStates=["Arrival0","Arrival1","Arrival2","Weather0","Weather1"],n.timer=0,n.state={arrivalsDataIndex:0,weatherDataIndex:0,transitionState:0},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.transitionStates[this.state.transitionState];return t.startsWith("Arrival")?i.a.createElement(k,{dataIndex:this.state.arrivalsDataIndex}):"Weather0"===t?i.a.createElement(F,{dataIndex:this.state.weatherDataIndex}):void 0}},{key:"update",value:function(){var t=this.transitionStates[(this.state.transitionState+1)%this.transitionStates.length];t.startsWith("Arrival")&&this.setState({arrivalsDataIndex:Number.parseInt(t.split("Arrival")[1]),transitionState:(this.state.transitionState+1)%this.transitionStates.length}),t.startsWith("Weather")?this.setState({weatherDataIndex:Number.parseInt(t.split("Weather")[1]),transitionState:(this.state.transitionState+1)%this.transitionStates.length}):this.setState({transitionState:(this.state.transitionState+1)%this.transitionStates.length})}},{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval(function(){return t.update()},1e4)}}]),e}(r.Component);var N=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.5ef4a6a6.chunk.js.map