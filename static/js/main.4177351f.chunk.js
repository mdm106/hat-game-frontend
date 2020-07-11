(this["webpackJsonphat-game-frontend"]=this["webpackJsonphat-game-frontend"]||[]).push([[0],{52:function(e,t,a){e.exports=a.p+"static/media/air-horn.95897491.mp3"},59:function(e,t,a){e.exports=a(92)},64:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(19),l=a.n(c),o=(a(64),a(10)),m=Object(o.a)(),i=a(6),u=a(15),s=a(5),b=a(20),d=a(21),h=a(18),E=a(23),g=a(22),y=a(17),p=a(29),f=a(14),v=a(9),_=a(30),j=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(e){var r;Object(b.a)(this,a),r=t.call(this,e);var n=e.team_1,c=e.team_2;return r.state={team_1:n,team_2:c},r.handleTeam1=r.handleTeam1.bind(Object(h.a)(r)),r.handleTeam2=r.handleTeam2.bind(Object(h.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(h.a)(r)),r.handleResetClicked=r.handleResetClicked.bind(Object(h.a)(r)),r}return Object(d.a)(a,[{key:"handleTeam1",value:function(e){this.setState({team_1:e.currentTarget.value})}},{key:"handleTeam2",value:function(e){this.setState({team_2:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleStartGame(Object(s.a)({},this.state))}},{key:"handleResetClicked",value:function(){this.setState({team_1:"",team_2:""}),this.props.handleReset()}},{key:"render",value:function(){var e=this.state,t=e.team_1,a=e.team_2;return n.a.createElement("div",{style:{backgroundColor:"#84BCDA",minHeight:"100vh",overflowY:"hidden"}},n.a.createElement("div",{className:"container text-right"},n.a.createElement(y.a,{to:"/game-history"},n.a.createElement("button",{className:"btn btn-info m-1"},"View previous game results"))),n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{className:"text-center",style:{backgroundColor:"#067BC2",color:"white"}},n.a.createElement("h1",null,"The Great Hat Game"),n.a.createElement("h3",null,"Enter team names to start the game!")),n.a.createElement(f.a,{onSubmit:this.handleSubmit,style:{fontSize:"1.3rem"}},n.a.createElement(f.a.Group,{controlId:"formBasicTeamOne"},n.a.createElement(f.a.Label,null,"Team 1 Name:"),n.a.createElement(f.a.Control,{type:"text",onChange:this.handleTeam1,value:t})),n.a.createElement(f.a.Group,{controlId:"formBasicTeamOne"},n.a.createElement(f.a.Label,null,"Team 2 Name:"),n.a.createElement(f.a.Control,{type:"text",onChange:this.handleTeam2,value:a})),n.a.createElement(v.a,{variant:"primary",type:"submit",disabled:""===t||""===a||t===a,style:{fontSize:"1.3rem",backgroundColor:"#067BC2"}},"Submit"),""!==t&&t===a?n.a.createElement(_.a,{variant:"danger",className:"mt-3"},"Duplicate team names, please amend"):null),n.a.createElement(v.a,{className:"mt-2",variant:"danger",type:"click",style:{fontSize:"1.3rem"},onClick:this.handleResetClicked},"Reset")))}}]),a}(r.Component),O=a(51),N=a.n(O).a.create({baseURL:"https://immense-earth-89289.herokuapp.com/api",headers:{Accept:"application/json"}}),C=function(e){for(var t,a,r=e.length;0!==r;)a=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[a],e[a]=t;return e},S=function(e){return function(t,a){var r=a().categories.find((function(t){return t===e}));r||N.get("/categories/".concat(e,"/words")).then((function(a){var r=a.data;t(function(e,t){return{type:"CATEGORY_SET",words:C(e.map((function(e,t){return e.word}))),category:t}}(r.data,e))})),r&&t(function(e){return{type:"CATEGORY_UPDATE",category:e}}(e))}},T=Object(u.b)((function(e){return{team_1:e.team_1,team_2:e.team_2}}),(function(e){return{handleStartGame:function(t){e(function(e){var t=e.team_1,a=e.team_2;return function(e){N.post("/games",{team_1:t,team_2:a,score_1:0,score_2:0,complete:!1}).then((function(t){var a,r=t.data;e({type:"START_GAME",team_1:(a=r.data).team_1,team_2:a.team_2,id:a.id})}))}}(t)),m.push("/round")},handleReset:function(){e({type:"RESET_GAME"})}}}))(j),k=a(25),G=a(16),w=a(54),x=a(52),R=a.n(x),A=a(53),I=function(){var e=Object(r.useState)(0),t=Object(k.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(!1),o=Object(k.a)(l,2),m=o[0],i=o[1],u=Object(A.a)(R.a),s=Object(k.a)(u,1)[0];Object(r.useEffect)((function(){var e=null;return m&&a<45?e=setInterval((function(){c((function(e){return e+1}))}),1e3):m&&45===a?(s(),i(!1),clearInterval(e)):m||0===a||clearInterval(e),function(){return clearInterval(e)}}),[m,a,s]);return n.a.createElement("div",{className:"container text-center mt-4",style:{fontSize:"3rem"}},n.a.createElement("h3",null,"Timer"),n.a.createElement("div",null,function(e){return e<10?"0:0".concat(e):e<59?"0:".concat(e):"01:00"}(a)),n.a.createElement("div",null,45===a?n.a.createElement("p",null,"Time's Up!"):n.a.createElement(v.a,{variant:"success",onClick:function(){i(!m)}},m?"Pause":"Start")," ",n.a.createElement(v.a,{variant:"info",onClick:function(){c(0),i(!1)}},"Reset")))},M=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(b.a)(this,a),(r=t.call(this,e)).state={category:""},r.handleCategory=r.handleCategory.bind(Object(h.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(h.a)(r)),r}return Object(d.a)(a,[{key:"handleCategory",value:function(e){this.setState({category:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleGameSetUp(Object(s.a)({},this.state))}},{key:"render",value:function(){var e=this.state.category;return n.a.createElement("div",{className:"container mt-2",style:{padding:"1rem",border:"4px solid lightGrey",borderRadius:"5px",marginBottom:"1rem"}},n.a.createElement(f.a,{onSubmit:this.handleSubmit},n.a.createElement(f.a.Group,{controlId:"exampleForm.ControlSelect1"},n.a.createElement(f.a.Label,null,"Select subject:"),n.a.createElement(f.a.Control,{as:"select",value:e,onChange:this.handleCategory,style:{backgroundColor:"lightGrey"}},n.a.createElement("option",{value:""}),n.a.createElement("option",{value:"1"},"Science"),n.a.createElement("option",{value:"2"},"Celebrities"),n.a.createElement("option",{value:"3"},"Geography"),n.a.createElement("option",{value:"4"},"Object"))),n.a.createElement(v.a,{variant:"primary",type:"submit",disabled:""===e},"Submit")))}}]),a}(r.Component),B=Object(u.b)(null,(function(e){return{handleGameSetUp:function(t){e(S(+t.category))}}}))(M),P=function(e){var t=e.id,a=e.team_1,c=e.team_2,l=e.score_1,o=e.score_2,m=e.science,i=e.celebrities,u=e.geography,s=e.object,b=e.scienceNumber,d=e.celebrityNumber,h=e.geographyNumber,E=e.objectNumber,g=e.category,p=e.handleIncrement,f=e.handlePass,j=e.handleComplete,O=e.completeError,N=function(e){switch(e){case 1:return"#0bb0ec";case 2:return"#60d5d1";case 3:return"#06c24e";case 4:return"#48e2f3";default:return"grey"}},C=Object(r.useState)(!1),S=Object(k.a)(C,2),T=S[0],x=S[1];return n.a.createElement("div",{style:{backgroundColor:function(e){switch(e){case 1:return"#ECC30B";case 2:return"#D56062";case 3:return"#067BC2";case 4:return"#F37748";default:return"#84BCDA"}}(g),minHeight:"100vh",display:"flex",alignItems:"center",overflowY:"hidden"}},n.a.createElement("div",{className:"container"},""===t?n.a.createElement("div",{className:"container text-center"},n.a.createElement("h3",null,"You have reached the Great Hat Game"),n.a.createElement("h5",null,"Team name registration is required to play the game"),n.a.createElement(y.a,{to:"/"},n.a.createElement("h6",null,"Not registered? Go back to register your teams")),n.a.createElement("h6",null,"If you have registered, please wait whilst game loads")):n.a.createElement(n.a.Fragment,null,n.a.createElement(B,null),""===g?n.a.createElement("h5",null,"Pick a subject to start the game!"):n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",{style:{textAlign:"center",marginBottom:"1rem"}},"Subject: "+function(e){switch(e){case 1:return"Science";case 2:return"Celebrities";case 3:return"Geography";case 4:return"Object";default:return""}}(g)),n.a.createElement("div",{className:"text-center mb-4"},n.a.createElement(v.a,{variant:"danger",onClick:function(){return x(!T)}},T?"Hide words!":"Reveal words!")),T?n.a.createElement(_.a,{style:{backgroundColor:N(g)}},n.a.createElement("h3",{style:{textAlign:"center",textTransform:"capitalize"}},function(e,t,a,r,n,c,l,o,m){switch(e){case 1:return t[c];case 2:return a[l];case 3:return r[o];case 4:return n[m];default:return""}}(g,m,i,u,s,b,d,h,E))):null,n.a.createElement(w.a,null,n.a.createElement(G.a,null,n.a.createElement(G.a.Body,{style:{backgroundColor:"lightGrey"}},n.a.createElement(G.a.Title,null,a),n.a.createElement(G.a.Text,{className:"display-1"},l)),n.a.createElement(G.a.Footer,{style:{backgroundColor:N(g)}},n.a.createElement(v.a,{variant:"primary",onClick:function(){return p(1)}},"Correct")," ",n.a.createElement(v.a,{variant:"danger",onClick:f},"Pass"))),n.a.createElement(G.a,null,n.a.createElement(G.a.Body,{style:{backgroundColor:"lightGrey"}},n.a.createElement(G.a.Title,null,c),n.a.createElement(G.a.Text,{className:"display-1"},o)),n.a.createElement(G.a.Footer,{style:{backgroundColor:N(g)}},n.a.createElement(v.a,{variant:"primary",onClick:function(){return p(2)}},"Correct")," ",n.a.createElement(v.a,{variant:"danger",onClick:f},"Pass")))),n.a.createElement("div",{className:"container"},n.a.createElement(I,null)),n.a.createElement("div",{className:"container text-center mb-4"},n.a.createElement(v.a,{variant:"dark",onClick:j},"Complete Game!"),O?n.a.createElement("h6",null,"Error submitting game, please try again."):null)))))},H=Object(u.b)((function(e){return{id:e.id,team_1:e.team_1,team_2:e.team_2,score_1:e.score_1,score_2:e.score_2,scienceNumber:e.scienceNumber,celebrityNumber:e.celebrityNumber,geographyNumber:e.geographyNumber,objectNumber:e.objectNumber,category:e.category,science:e.science,celebrities:e.celebrities,geography:e.geography,object:e.object}}),(function(e){return{handleIncrement:function(t){e(function(e){return function(t,a){N.patch("games/".concat(a().id,"/score"),{team:e}).then((function(e){var a,r=e.data;t({type:"INCREMENT_SCORE",score_1:(a=r.data).score_1,score_2:a.score_2})}))}}(t))},handlePass:function(){e({type:"PASS"})},handleComplete:function(){e((function(e,t){N.patch("games/".concat(t().id,"/complete"),{finish:!0}).then((function(t){var a=t.data;e({type:"COMPLETE_GAME",complete:a.data.complete}),m.push("/results")})).catch((function(t){e({type:"ERROR_COMPLETING"})}))}))}}}))(P),D=function(e){e.id;var t=e.team_1,a=e.team_2,r=e.score_1,c=e.score_2,l=e.complete,o=function(e,t,a,r){return e>t?a:t>e?r:"draw"}(r,c,t,a);return n.a.createElement("div",{style:{backgroundColor:"#84BCDA",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",overflowY:"hidden"}},l?n.a.createElement("div",{className:"container text-center mb-4"},"draw"===o?n.a.createElement("h1",null,"It's a draw! Well done to both teams!"):n.a.createElement("h1",null,"".concat(o," are the winners! Great job!"))):n.a.createElement("div",{className:"container text-center mb-4"},n.a.createElement("h1",null,"Opps, your game isn't complete!")),n.a.createElement("div",{className:"container text-center"},n.a.createElement(y.a,{to:"/"},n.a.createElement("button",{className:"btn btn-danger m-1"},"Go back to home")),n.a.createElement(y.a,{to:"/game-history"},n.a.createElement("button",{className:"btn btn-info m-1"},"View previous game results"))))},L=Object(u.b)((function(e){return{id:e.id,team_1:e.team_1,team_2:e.team_2,score_1:e.score_1,score_2:e.score_2,complete:e.complete}}))(D),Y=a(55),F=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children;return e.loaded?t:n.a.createElement(Y.a,{animation:"border",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))}}]),a}(r.Component),U=a(56),z=function(e){var t=e.gameHistory,a=e.handleLoad;return Object(r.useEffect)((function(){a()}),[a]),n.a.createElement("div",{style:{backgroundColor:"#84BCDA",minHeight:"100vh",overflowY:"hidden"}},n.a.createElement("div",{className:"container mt-3"},n.a.createElement(p.a,{className:"text-center",style:{backgroundColor:"#067BC2",color:"white"}},n.a.createElement("h1",null,"The Great Hat Game"),n.a.createElement("h3",null,"Previous game results")),n.a.createElement(F,{loaded:t.length},n.a.createElement(U.a,{responsive:!0,striped:!0,bordered:!0,variant:"light"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Team 1 Name"),n.a.createElement("th",{scope:"col"},"Team 2 Name"),n.a.createElement("th",{scope:"col"},"Score"),n.a.createElement("th",{scope:"col"},"Winner"))),n.a.createElement("tbody",null,t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.team_1),n.a.createElement("td",null,e.team_2),n.a.createElement("td",null,"".concat(e.score_1," | ").concat(e.score_2)),n.a.createElement("td",null,e.complete?"1"===e.winner?e.team_1:"2"===e.winner?e.team_2:"Game drawn":"Game not finished"))})))),n.a.createElement("div",{className:"container text-center"},n.a.createElement(y.a,{to:"/"},n.a.createElement("button",{className:"btn btn-danger mb-2"},"Go back to home"))))))},V=Object(u.b)((function(e){return{gameHistory:e.gameHistory}}),(function(e){return{handleLoad:function(){return e((function(e){return N.get("/games").then((function(t){var a=t.data;e(function(e){return{type:"SAVE_GAMES",gameHistory:e}}(a.data))}))}))}}}))(z),J=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.b,{history:m},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(T,null)),n.a.createElement(i.a,{exact:!0,path:"/round"},n.a.createElement(H,null)),n.a.createElement(i.a,{exact:!0,path:"/results"},n.a.createElement(L,null)),n.a.createElement(i.a,{exact:!0,path:"/game-history"},n.a.createElement(V,null)))))},W=a(24),X=a(57),q=a(58),K=a.n(q),Q={id:"",team_1:"",team_2:"",score_1:0,score_2:0,complete:!1,science:[],celebrities:[],geography:[],object:[],scienceNumber:0,celebrityNumber:0,geographyNumber:0,objectNumber:0,category:"",categories:[],completeError:!1,gameHistory:[]},Z=function(e,t){switch(t.type){case"START_GAME":return function(e,t){var a=t.team_1,r=t.team_2,n=t.id;return Object(s.a)(Object(s.a)({},e),{},{team_1:a,team_2:r,id:n})}(e,t);case"CATEGORY_SET":return function(e,t){var a=t.words,r=t.category,n=e.categories;return n.push(r),1===r?Object(s.a)(Object(s.a)({},e),{},{science:a,categories:n,category:r}):2===r?Object(s.a)(Object(s.a)({},e),{},{celebrities:a,categories:n,category:r}):3===r?Object(s.a)(Object(s.a)({},e),{},{geography:a,categories:n,category:r}):4===r?Object(s.a)(Object(s.a)({},e),{},{object:a,categories:n,category:r}):void 0}(e,t);case"CATEGORY_UPDATE":return function(e,t){var a=t.category;return Object(s.a)(Object(s.a)({},e),{},{category:a})}(e,t);case"INCREMENT_SCORE":return function(e,t){var a=t.score_1,r=t.score_2;return 1===e.category?Object(s.a)(Object(s.a)({},e),{},{score_1:a,score_2:r,scienceNumber:e.scienceNumber+1<e.science.length?e.scienceNumber+1:0}):2===e.category?Object(s.a)(Object(s.a)({},e),{},{score_1:a,score_2:r,celebrityNumber:e.celebrityNumber+1<e.celebrities.length?e.celebrityNumber+1:0}):3===e.category?Object(s.a)(Object(s.a)({},e),{},{score_1:a,score_2:r,geographyNumber:e.geographyNumber+1<e.geography.length?e.geographyNumber+1:0}):4===e.category?Object(s.a)(Object(s.a)({},e),{},{score_1:a,score_2:r,objectNumber:e.objectNumber+1<e.object.length?e.objectNumber+1:0}):void 0}(e,t);case"PASS":return function(e){return 1===e.category?Object(s.a)(Object(s.a)({},e),{},{scienceNumber:e.scienceNumber+1<e.science.length?e.scienceNumber+1:0}):2===e.category?Object(s.a)(Object(s.a)({},e),{},{celebrityNumber:e.celebrityNumber+1<e.celebrities.length?e.celebrityNumber+1:0}):3===e.category?Object(s.a)(Object(s.a)({},e),{},{geographyNumber:e.geographyNumber+1<e.geography.length?e.geographyNumber+1:0}):4===e.category?Object(s.a)(Object(s.a)({},e),{},{objectNumber:e.objectNumber+1<e.object.length?e.objectNumber+1:0}):void 0}(e);case"COMPLETE_GAME":return function(e,t){var a=t.complete;return Object(s.a)(Object(s.a)({},e),{},{complete:a,completeError:!1})}(e,t);case"ERROR_COMPLETING":return function(e){return Object(s.a)(Object(s.a)({},e),{},{completeError:!0})}(e);case"SAVE_GAMES":return function(e,t){var a=t.gameHistory;return Object(s.a)(Object(s.a)({},e),{},{gameHistory:a})}(e,t);case"RESET_GAME":return Object(s.a)({},Q);default:return e}},$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,ee=Object(W.d)(Z,Q,$(Object(W.a)(X.a),K()()));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,{store:ee},n.a.createElement(J,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4177351f.chunk.js.map