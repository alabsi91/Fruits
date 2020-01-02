(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(6),i=a(5),c=a(11),s=a(7),u=a(0),o=a.n(u),m=a(17),d=a.n(m);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(10);var h=function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i))},g=[],E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={isPhone:h()},a.detailRender=function(){return D?a.props.cal+" \u0633\u0639\u0631\u0629 \u2022 "+a.props.gram+"\u063a ":a.props.cal+" kcal \u2022  "+a.props.gram+" g"},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.state.isPhone&&(document.getElementById("itemsContainerPc").id="itemsContainerPhone")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"itemsContainerPc"},o.a.createElement("p",{className:"itemNamePc"},this.props.name),o.a.createElement("button",{id:"deleteButtonPc",className:"material-icons",onClick:function(){var t=g.findIndex((function(t){return t.id===e.props.id}));g.splice(t,1),F(),0===g.length&&!1===e.state.isPhone&&(document.getElementById("sumPc").style.display="none",document.getElementById("cardsContainer").style.margin="0"),0===g.length&&e.state.isPhone&&(document.getElementById("sumPhone").style.display="none")}},"clear"),o.a.createElement("p",{id:"itemDetailsPc"},this.detailRender()))}}]),t}(u.Component);function b(e){return o.a.createElement(u.Fragment,null,o.a.createElement("option",{value:e.value},e.dis))}var f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={phone:h(),grams:100,garmInput:1,servingInput:100},a.gramHandle=function(e){e.target.value<1?a.setState({garmInput:""}):e.target.value>1e3?a.setState({garmInput:e.target.max}):a.setState({garmInput:e.target.value,grams:a.state.servingInput*e.target.value})},a.servingHandle=function(e){return a.setState({servingInput:e.target.value,grams:e.target.value*a.state.garmInput})},a.calc=function(e){return Number((e*a.state.grams/100).toFixed(1).toString())},a.calcKcal=function(e){return Number((e*a.state.grams/100).toFixed(0))},a.percentProtein=function(){return Math.floor(400*Number(a.props.protein)/Number(a.props.cal))},a.percentFat=function(){return Math.floor(900*Number(a.props.fat)/Number(a.props.cal))},a.percentCarb=function(){return 100-(a.percentProtein()+a.percentFat())},a.servingMap=function(e){if(void 0!==e)return e.map((function(e,t){return o.a.createElement(b,{key:t,dis:e.dis[0],value:e.value})}))},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"PhoneView",value:function(){var e=this;return o.a.createElement("div",{className:"cardPhone",style:{backgroundImage:this.props.img}},o.a.createElement("button",{id:"addButtonPc",className:"material-icons",onClick:function(){var t=Object(p.a)({},e.props,{},{gram:e.state.grams});g.push(t),F(),document.getElementById("sumPhone").style.display="inline-flex",window.scrollTo(0,0)}},"add"),o.a.createElement("div",{className:"kcalDetailsPhoneEn"},o.a.createElement("div",{className:"percentNumsPhone"},o.a.createElement("b",{className:"b1"},this.percentCarb(),"%"),o.a.createElement("b",{className:"b2"},this.percentProtein(),"%"),o.a.createElement("b",{className:"b3"},this.percentFat(),"%"),o.a.createElement("br",null)),o.a.createElement("div",{id:"bars"},o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"carbBar",style:{width:.75*this.percentCarb()}}),o.a.createElement("b",null,"CARBS")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"proteinBar",style:{width:.75*this.percentProtein()}}),o.a.createElement("b",null,"PROTEIN")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"fatBar",style:{width:.75*this.percentFat()}}),o.a.createElement("b",null,"FAT"))),o.a.createElement("h3",null,"Fat: ",o.a.createElement("p",null,this.calc(this.props.fat)," g"),o.a.createElement("br",null),"Carbohydrate: ",o.a.createElement("p",null,this.calc(this.props.carb)," g"),o.a.createElement("br",null),"Dietary fiber: ",o.a.createElement("p",null,this.calc(this.props.fiber)," g"),o.a.createElement("br",null),"Sugar: ",o.a.createElement("p",null,this.calc(this.props.sugar)," g"),o.a.createElement("br",null),"Protein: ",o.a.createElement("p",null,this.calc(this.props.protein)," g"))),o.a.createElement("div",{className:"titlePhoneEn"},o.a.createElement("h2",null,this.props.name),o.a.createElement("h5",null,"Calories: ",this.calcKcal(this.props.cal)," kcal"),o.a.createElement("h6",null,"Per ",Number(this.state.grams.toFixed(1).toString())," gram"),o.a.createElement("input",{id:"gram",type:"number",min:"1",max:"1000",onChange:this.gramHandle,value:this.state.garmInput}),o.a.createElement("select",{id:"servingPcEn",defaultValue:"100",onChange:this.servingHandle},o.a.createElement("option",{value:"1"},"gram"),o.a.createElement("option",{value:"100"},"standart serving (100 g)"),this.servingMap(this.props.serving))))}},{key:"PcView",value:function(){var e=this;return o.a.createElement("div",{className:"cardPc",style:{backgroundImage:this.props.img}},o.a.createElement("button",{id:"addButtonPc",className:"material-icons",onClick:function(){var t=Object(p.a)({},e.props,{},{gram:e.state.grams});g.push(t),F(),0!==g.length&&(document.getElementById("cardsContainer").style.marginLeft="200px"),document.getElementById("sumPc").style.display="inline-flex"}},"add"),o.a.createElement("div",{className:"kcalDetailsPcEn"},o.a.createElement("div",{className:"percentNumsPc"},o.a.createElement("b",{className:"b1"},this.percentCarb(),"%"),o.a.createElement("b",{className:"b2"},this.percentProtein(),"%"),o.a.createElement("b",{className:"b3"},this.percentFat(),"%"),o.a.createElement("br",null)),o.a.createElement("div",{id:"bars"},o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"carbBar",style:{width:.75*this.percentCarb()}}),o.a.createElement("b",null,"CARBS")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"proteinBar",style:{width:.75*this.percentProtein()}}),o.a.createElement("b",null,"PROTEIN")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"fatBar",style:{width:.75*this.percentFat()}}),o.a.createElement("b",null,"FAT"))),o.a.createElement("h3",null,"Fat: ",o.a.createElement("p",null,this.calc(this.props.fat)," g"),o.a.createElement("br",null),"Carbohydrate: ",o.a.createElement("p",null,this.calc(this.props.carb)," g"),o.a.createElement("br",null),"Dietary fiber: ",o.a.createElement("p",null,this.calc(this.props.fiber)," g"),o.a.createElement("br",null),"Sugar: ",o.a.createElement("p",null,this.calc(this.props.sugar)," g"),o.a.createElement("br",null),"Protein: ",o.a.createElement("p",null,this.calc(this.props.protein)," g"))),o.a.createElement("div",{className:"titlePcEn"},o.a.createElement("h4",null,this.props.name),o.a.createElement("h5",null,"Calories: ",this.calcKcal(this.props.cal)," kcal"),o.a.createElement("h6",null,"Per ",Number(this.state.grams.toFixed(1).toString())," gram"),o.a.createElement("input",{id:"gram",type:"number",min:"1",max:"1000",onChange:this.gramHandle,value:this.state.garmInput}),o.a.createElement("select",{id:"servingPcEn",defaultValue:"100",onChange:this.servingHandle},o.a.createElement("option",{value:"1"},"gram"),o.a.createElement("option",{value:"100"},"standart serving (100 g)"),this.servingMap(this.props.serving))))}},{key:"render",value:function(){return this.state.phone?this.PhoneView():this.PcView()}}]),t}(u.Component),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={phone:h(),grams:100,garmInput:1,servingInput:100},a.gramHandle=function(e){e.target.value<1?a.setState({garmInput:""}):e.target.value>1e3?a.setState({garmInput:e.target.max}):a.setState({garmInput:e.target.value,grams:a.state.servingInput*e.target.value})},a.servingHandle=function(e){return a.setState({servingInput:e.target.value,grams:e.target.value*a.state.garmInput})},a.calc=function(e){return Number((e*a.state.grams/100).toFixed(1).toString())},a.calcKcal=function(e){return Number((e*a.state.grams/100).toFixed(0))},a.percentProtein=function(){return Math.floor(400*Number(a.props.protein)/Number(a.props.cal))},a.percentFat=function(){return Math.floor(900*Number(a.props.fat)/Number(a.props.cal))},a.percentCarb=function(){return 100-(a.percentProtein()+a.percentFat())},a.servingMap=function(e){if(void 0!==e)return e.map((function(e,t){return o.a.createElement(b,{key:t,dis:e.dis[1],value:e.value})}))},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"PhoneViewArabic",value:function(){var e=this;return o.a.createElement("div",{className:"cardPhone",style:{backgroundImage:this.props.img}},o.a.createElement("button",{id:"addButtonPc",className:"material-icons",onClick:function(){var t=Object(p.a)({},e.props,{},{gram:e.state.grams});g.push(t),F(),document.getElementById("sumPhone").style.display="inline-flex",window.scrollTo(0,0)}},"add"),o.a.createElement("div",{className:"kcalDetailsPhoneAr"},o.a.createElement("div",{className:"percentNumsPhoneArabic"},o.a.createElement("b",{className:"b1"},this.percentCarb(),"%"),o.a.createElement("b",{className:"b2"},this.percentProtein(),"%"),o.a.createElement("b",{className:"b3"},this.percentFat(),"%"),o.a.createElement("br",null)),o.a.createElement("div",{id:"bars"},o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"carbBar",style:{width:.75*this.percentCarb()}}),o.a.createElement("b",null,"\u0633\u0643\u0631\u064a\u0627\u062a")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"proteinBar",style:{width:.75*this.percentProtein()}}),o.a.createElement("b",null,"\u0628\u0631\u0648\u062a\u064a\u0646")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"fatBar",style:{width:.75*this.percentFat()}}),o.a.createElement("b",null,"\u062f\u0647\u0648\u0646"))),o.a.createElement("h3",null,o.a.createElement("p",null,this.calc(this.props.fat)," \u063a")," \u062f\u0647\u0648\u0646:",o.a.createElement("br",null),"\u0633\u0643\u0631\u064a\u0627\u062a:",o.a.createElement("p",null,this.calc(this.props.carb)," \u063a"),o.a.createElement("br",null),"\u0623\u0644\u064a\u0627\u0641:",o.a.createElement("p",null,this.calc(this.props.fiber)," \u063a"),o.a.createElement("br",null),"\u0633\u0643\u0631:",o.a.createElement("p",null,this.calc(this.props.sugar)," \u063a"),o.a.createElement("br",null),"\u0628\u0631\u0648\u062a\u064a\u0646:",o.a.createElement("p",null,this.calc(this.props.protein)," \u063a"))),o.a.createElement("div",{className:"titlePhoneAr"},o.a.createElement("h2",null,this.props.name),o.a.createElement("h5",null,this.calcKcal(this.props.cal)," \u0633\u0639\u0631\u0629 \u062d\u0631\u0627\u0631\u064a\u0629"),o.a.createElement("h6",null,"\u0643\u0644 ",Number(this.state.grams.toFixed(1).toString())," \u063a\u0631\u0627\u0645"),o.a.createElement("input",{id:"gram",style:{marginRight:0,marginLeft:"5px"},type:"number",min:"1",max:"1000",onChange:this.gramHandle,value:this.state.garmInput}),o.a.createElement("select",{id:"servingPcEn",defaultValue:"100",onChange:this.servingHandle},o.a.createElement("option",{value:"1"},"\u063a\u0631\u0627\u0645"),o.a.createElement("option",{value:"100"},"\u062d\u0635\u0629 \u0642\u064a\u0627\u0633\u064a\u0629 (100 \u063a)"),this.servingMap(this.props.serving))))}},{key:"PcViewArabic",value:function(){var e=this;return o.a.createElement("div",{className:"cardPc",style:{backgroundImage:this.props.img}},o.a.createElement("button",{id:"addButtonPc",className:"material-icons",onClick:function(){var t=Object(p.a)({},e.props,{},{gram:e.state.grams});g.push(t),F(),0!==g.length&&(document.getElementById("cardsContainer").style.marginLeft="200px"),document.getElementById("sumPc").style.display="inline-flex"}},"add"),o.a.createElement("div",{className:"kcalDetailsPcAr"},o.a.createElement("div",{className:"percentNumsPc"},o.a.createElement("b",{className:"b1"},this.percentCarb(),"%"),o.a.createElement("b",{className:"b2"},this.percentProtein(),"%"),o.a.createElement("b",{className:"b3"},this.percentFat(),"%"),o.a.createElement("br",null)),o.a.createElement("div",{id:"bars"},o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"carbBar",style:{width:.75*this.percentCarb()}}),o.a.createElement("b",null,"\u0633\u0643\u0631\u064a\u0627\u062a")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"proteinBar",style:{width:.75*this.percentProtein()}}),o.a.createElement("b",null,"\u0628\u0631\u0648\u062a\u064a\u0646")),o.a.createElement("div",{id:"barContainer"},o.a.createElement("div",{id:"fatBar",style:{width:.75*this.percentFat()}}),o.a.createElement("b",null,"\u062f\u0647\u0648\u0646"))),o.a.createElement("h3",null,"\u062f\u0647\u0648\u0646:",o.a.createElement("p",null,this.calc(this.props.fat)," \u063a"),o.a.createElement("br",null),"\u0633\u0643\u0631\u064a\u0627\u062a:",o.a.createElement("p",null,this.calc(this.props.carb)," \u063a"),o.a.createElement("br",null),"\u0623\u0644\u064a\u0627\u0641:",o.a.createElement("p",null,this.calc(this.props.fiber)," \u063a"),o.a.createElement("br",null),"\u0633\u0643\u0631:",o.a.createElement("p",null,this.calc(this.props.sugar)," \u063a"),o.a.createElement("br",null),"\u0628\u0631\u0648\u062a\u064a\u0646:",o.a.createElement("p",null,this.calc(this.props.protein)," \u063a"))),o.a.createElement("div",{className:"titlePcAr"},o.a.createElement("h4",null,this.props.name),o.a.createElement("h5",null,this.calcKcal(this.props.cal)," \u0633\u0639\u0631\u0629 \u062d\u0631\u0627\u0631\u064a\u0629"),o.a.createElement("h6",null,"\u0643\u0644 ",Number(this.state.grams.toFixed(1).toString())," \u063a\u0631\u0627\u0645"),o.a.createElement("input",{id:"gram",style:{marginRight:0,marginLeft:"5px"},type:"number",min:"1",max:"1000",onChange:this.gramHandle,value:this.state.garmInput}),o.a.createElement("select",{id:"servingPcEn",defaultValue:"100",onChange:this.servingHandle},o.a.createElement("option",{value:"1"},"\u063a\u0631\u0627\u0645"),o.a.createElement("option",{value:"100"},"\u062d\u0635\u0629 \u0642\u064a\u0627\u0633\u064a\u0629 (100 \u063a)"),this.servingMap(this.props.serving))))}},{key:"render",value:function(){return this.state.phone?this.PhoneViewArabic():this.PcViewArabic()}}]),t}(u.Component),y=a(14),C=(a(33),a(25),a(27),a(30),{id:0,img:"",serving:[],name:["",""],cal:0,fat:0,carb:0,fiber:0,sugar:0,protein:0}),P=[],S=[];function I(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",placeholder:"English Description",onChange:function(t){return C.serving[e.id].dis[0]=t.target.value}}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Arabic Description",onChange:function(t){return C.serving[e.id].dis[1]=t.target.value}}),o.a.createElement("br",null),o.a.createElement("input",{type:"number",placeholder:"value",onChange:function(t){return C.serving[e.id].value=Number(t.target.value)}}),o.a.createElement("br",null),o.a.createElement("hr",null))}var B=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={render:"",fetchRender:""},a.mapData=function(e){return e.map((function(e,t){return o.a.createElement(f,{key:t,id:e.id,img:e.img,name:e.name[0],cal:e.cal,fat:e.fat,carb:e.carb,fiber:e.fiber,sugar:e.sugar,protein:e.protein,serving:e.serving})}))},a.fetching=function(e){e>0&&(N.collection("App").doc(e).get().then((function(e){e.exists&&(S.length>0&&S.pop(),S.push(e.data()))})),setTimeout((function(){a.setState({fetchRender:a.mapData(S)})}),500))},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"mapServing",value:function(e){return e.map((function(e,t){return o.a.createElement(I,{key:t,id:e.id})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"secret"},o.a.createElement("div",{id:"secretContainer"},o.a.createElement("p",null,"ID:"),o.a.createElement("input",{type:"number",placeholder:A.length,onChange:function(t){C.id=Number(t.target.value),e.fetching(t.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Image Url:"),o.a.createElement("input",{type:"url",placeholder:"Image URL",onChange:function(e){return C.img="url(".concat(e.target.value,")")}}),o.a.createElement("br",null),o.a.createElement("p",null,"Name:"),o.a.createElement("input",{type:"text",placeholder:"Engish Name",onChange:function(e){return C.name[0]=e.target.value}}),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Arabic Name",onChange:function(e){return C.name[1]=e.target.value}}),o.a.createElement("br",null),o.a.createElement("p",null,"Calories:"),o.a.createElement("input",{type:"number",placeholder:"Calories",onChange:function(e){return C.cal=Number(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Fat:"),o.a.createElement("input",{type:"number",placeholder:"Fat",onChange:function(e){return C.fat=Number(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Carbs:"),o.a.createElement("input",{type:"number",placeholder:"Carbs",onChange:function(e){return C.carb=Number(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Fiber:"),o.a.createElement("input",{type:"number",placeholder:"Fiber",onChange:function(e){return C.fiber=Number(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Sugar:"),o.a.createElement("input",{type:"number",placeholder:"Sugar",onChange:function(e){return C.sugar=Number(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Protein:"),o.a.createElement("input",{type:"number",placeholder:"Protein",onChange:function(e){return C.protein=Number(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("p",null,"Serving:"),o.a.createElement("button",{style:{width:"165px"},onClick:function(){P.push({id:P.length}),C.serving.push({dis:["",""],value:0}),e.setState({render:e.mapServing(P)})}},"+"),o.a.createElement("br",null),o.a.createElement("button",{style:{width:"165px"},onClick:function(){P.pop(),C.serving.pop(),e.setState({render:e.mapServing(P)})}},"-"),o.a.createElement("br",null),this.state.render,o.a.createElement("button",{style:{width:"165px"},onClick:function(){N.collection("App").doc(A.length.toString()).set(C),console.log(C),document.getElementById("info").style.display="inline-block"}},"Submit"),o.a.createElement("button",{style:{width:"165px"},onClick:function(){N.collection("App").doc(C.id.toString()).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)})),console.log(C.id)}},"Delete"),o.a.createElement("br",null),o.a.createElement("p",{id:"info",style:{textAlign:"left",display:"none"}},'"id": ',C.id,",",o.a.createElement("br",null),'"img": ',C.img,",",o.a.createElement("br",null),'"name": ["',C.name[0],'","',C.name[1],'"],',o.a.createElement("br",null),'"cal": ',C.cal,",",o.a.createElement("br",null),'"fat": ',C.fat,",",o.a.createElement("br",null),'"carb": ',C.carb,",",o.a.createElement("br",null),'"fiber": ',C.fiber,",",o.a.createElement("br",null),'"sugar": ',C.sugar,",",o.a.createElement("br",null),'"protein": ',C.protein))),this.state.fetchRender)}}]),t}(u.Component);a.d(t,"isAr",(function(){return D})),a.d(t,"data",(function(){return A})),a.d(t,"db",(function(){return N}));y.initializeApp({apiKey:"AIzaSyAgZxw_Wz_Wzdic0YAP20BPA9KMU6QlRtE",authDomain:"fruitsindex.firebaseapp.com",databaseURL:"https://fruitsindex.firebaseio.com",projectId:"fruitsindex",storageBucket:"fruitsindex.appspot.com",messagingSenderId:"849400942163",appId:"1:849400942163:web:fd8767e79f4f56099440a6",measurementId:"G-ZRV5X48M3Q"});var N=y.firestore(),A=[],D=!1,k=function(){this.setState({fruitAdded:this.mapAdded(g)}),this.setState({sum:this.sumHandel()})},w=function(){this.setState({fruitData:this.mapData(A),ready:!0})},x=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(i.a)(t).call(this))).updateState=function(){return e.setState({fruitData:e.mapData(A),ready:!0})},e.isReady=function(){return e.state.ready?e.state.fruitData:o.a.createElement("h1",null,"Loading...")},e.sumHandel=function(){var t=g.map((function(e){return Number((e.cal*e.gram/100).toFixed(0))}));if(0!==g.length)return e.state.ar?"\u0627\u0644\u0645\u062c\u0645\u0648\u0639 "+(t=t.reduce((function(e,t){return e+t})))+" \u0633\u0639\u0631\u0629":"Total "+(t=t.reduce((function(e,t){return e+t})))+" kcal"},e.Lang=function(){e.state.ar?(D=!1,g.splice(0,g.length),e.setState({fruitData:e.mapData(A),ar:!1,fruitAdded:"",sum:""}),e.state.isPhone?document.getElementById("sumPhone").style.display="none":document.getElementById("sumPc").style.display="none",document.getElementById("cardsContainer").style.marginLeft="0px",document.getElementById("lang").innerHTML="\u0627\u0644\u0639\u0631\u0628\u064a\u0629",document.getElementById("searchInput").value="",document.getElementById("choose").innerHTML="Sort By",document.getElementById("choose").selected="defaultvalue",document.getElementById("AlphaSort").innerHTML="Alphabetical",document.getElementById("CalSort").innerHTML="Kcal",document.getElementById("SugarSort").innerHTML="Sugar",document.getElementById("CarbsSort").innerHTML="Carbs",document.getElementById("FiberSort").innerHTML="Fiber",document.getElementById("ProteinSort").innerHTML="Protein",document.getElementById("searchInput").placeholder="Search",document.getElementById("root").style.direction="ltr"):(D=!0,g.splice(0,g.length),e.setState({fruitData:e.mapDataAR(A),ar:!0,fruitAdded:"",sum:""}),e.state.isPhone?document.getElementById("sumPhone").style.display="none":document.getElementById("sumPc").style.display="none",document.getElementById("cardsContainer").style.marginLeft="0px",document.getElementById("lang").innerHTML="English",document.getElementById("searchInput").value="",document.getElementById("choose").selected="defaultvalue",document.getElementById("choose").innerHTML="\u062a\u0631\u062a\u064a\u0628 \u062d\u0633\u0628",document.getElementById("AlphaSort").innerHTML="\u0627\u0644\u0623\u0628\u062c\u062f\u064a\u0629",document.getElementById("CalSort").innerHTML="\u0627\u0644\u0637\u0627\u0642\u0629",document.getElementById("SugarSort").innerHTML="\u0627\u0644\u0633\u0643\u0631",document.getElementById("CarbsSort").innerHTML="\u0627\u0644\u0633\u0643\u0631\u064a\u0627\u062a",document.getElementById("FiberSort").innerHTML="\u0627\u0644\u0623\u0644\u064a\u0627\u0641",document.getElementById("ProteinSort").innerHTML="\u0627\u0644\u0628\u0631\u0648\u062a\u064a\u0646",document.getElementById("searchInput").placeholder="\u0628\u062d\u062b",document.getElementById("root").style.direction="rtl")},e.changeHandle=function(){var t=document.getElementById("sort").value;if("AlphaSort"===t)if(e.state.ar){var a=A.sort((function(e,t){return e.name[1]>t.name[1]?1:-1}));e.setState({fruitData:e.mapDataAR(a)})}else{var n=A.sort((function(e,t){return e.name[0]>t.name[0]?1:-1}));e.setState({fruitData:e.mapData(n)})}else if("CalSort"===t){var r=A.sort((function(e,t){return e.cal<t.cal?1:-1})),l=e.state.ar?e.mapDataAR(r):e.mapData(r);e.setState({fruitData:l})}else if("SugarSort"===t){var i=A.sort((function(e,t){return e.sugar<t.sugar?1:-1})),c=e.state.ar?e.mapDataAR(i):e.mapData(i);e.setState({fruitData:c})}else if("CarbsSort"===t){var s=A.sort((function(e,t){return e.carb<t.carb?1:-1})),u=e.state.ar?e.mapDataAR(s):e.mapData(s);e.setState({fruitData:u})}else if("FiberSort"===t){var o=A.sort((function(e,t){return e.fiber<t.fiber?1:-1})),m=e.state.ar?e.mapDataAR(o):e.mapData(o);e.setState({fruitData:m})}else if("ProteinSort"===t){var d=A.sort((function(e,t){return e.protein<t.protein?1:-1})),p=e.state.ar?e.mapDataAR(d):e.mapData(d);e.setState({fruitData:p})}},e.search=function(t){var a=t.target.value;if(a.length>1){for(var n,r=[],l=[],i=A.map((function(e){return e.name.length})).reduce((function(e,t){return Math.max(e,t)})),c=function(e){var t=A.filter((function(t){return t.name[e]}));0!==t.length&&r.push(t.filter((function(t){return-1!==t.name[e].toLowerCase().indexOf(a.toLowerCase())})))},s=0;s<i;s++)c(s);l=(n=l).concat.apply(n,r);var u=e.state.ar?e.mapDataAR(l):e.mapData(l);e.setState({fruitData:u}),"134625"===a&&e.setState({fruitData:o.a.createElement(B,null)})}else{var m=e.state.ar?e.mapDataAR(A):e.mapData(A);e.setState({fruitData:m})}},e.state={ar:!1,isPhone:h(),fruitData:"",fruitAdded:"",sum:"",ready:!1},k=k.bind(Object(c.a)(e)),w=w.bind(Object(c.a)(e)),e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.state.isPhone&&(document.getElementById("diaryContainerPc").id="DiaryContainerPhone",document.getElementById("sumPc").id="sumPhone"),N.collection("App").get().then((function(e){return new Promise((function(t){t(e.forEach((function(e){A.push(e.data())})))})).then((function(){A.sort((function(e,t){return e.id>t.id?1:-1})),w()}))}))}},{key:"mapData",value:function(e){return e.map((function(e,t){return o.a.createElement(f,{key:t,id:e.id,img:e.img,name:e.name[0],cal:e.cal,fat:e.fat,carb:e.carb,fiber:e.fiber,sugar:e.sugar,protein:e.protein,serving:e.serving})}))}},{key:"mapDataAR",value:function(e){return e.map((function(e,t){return o.a.createElement(v,{key:t,id:e.id,img:e.img,name:e.name[1],cal:e.cal,fat:e.fat,carb:e.carb,fiber:e.fiber,sugar:e.sugar,protein:e.protein,serving:e.serving})}))}},{key:"mapAdded",value:function(e){return e.map((function(e,t){return o.a.createElement(E,{key:t,id:e.id,gram:e.gram,name:e.name,cal:(e.cal*e.gram/100).toFixed(0),fat:e.fat,carb:e.carb,fiber:e.fiber,sugar:e.sugar,protein:e.protein})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",{id:"navbar",className:"srchConrainer"},o.a.createElement("input",{id:"searchInput",type:"text",placeholder:"search",onChange:this.search,autoComplete:"nope"}),o.a.createElement("br",null),o.a.createElement("select",{id:"sort",defaultValue:"DEFAULT",onChange:this.changeHandle},o.a.createElement("option",{id:"choose",value:"DEFAULT",disabled:!0},"Sort By"),o.a.createElement("option",{id:"AlphaSort",value:"AlphaSort",onClick:this.AlphaSort},"Alphabetical"),o.a.createElement("option",{id:"CalSort",value:"CalSort"},"Kcal"),o.a.createElement("option",{id:"SugarSort",value:"SugarSort"},"Sugar"),o.a.createElement("option",{id:"CarbsSort",value:"CarbsSort"},"Carbs"),o.a.createElement("option",{id:"FiberSort",value:"FiberSort"},"Fiber"),o.a.createElement("option",{id:"ProteinSort",value:"ProteinSort"},"Protein")),o.a.createElement("button",{id:"lang",onClick:this.Lang},"\u0627\u0644\u0639\u0631\u0628\u064a\u0629")),o.a.createElement("div",{id:"diaryContainerPc"},this.state.fruitAdded," ",o.a.createElement("br",null),o.a.createElement("div",{id:"sumPc"},o.a.createElement("p",null,this.state.sum))),o.a.createElement("div",{id:"cardsContainer"},this.isReady()))}}]),t}(u.Component);d.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}));var F=t.default=k}},[[19,1,2]]]);
//# sourceMappingURL=main.741babbb.chunk.js.map