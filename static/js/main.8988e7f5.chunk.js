(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),u=r(4),i=r(3),l=r(5),c=r(0),o=r.n(c),m=r(7),h=r.n(m);r(16);function d(e){return o.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}var b=function(e){function t(){return Object(n.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(c.Component),p=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r.url="public/omegalul.mp3",r.audio=new Audio(r.url),r.audio.loop=!0,r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();f(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){0===e&&this.setState({history:this.state.history.slice(0,1)}),this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=f(a.squares),s=r.map(function(e,r){var a=r?"Ir al turno #"+r:"Reiniciar juego",n=r?"btn btn-primary btn-sm":"btn btn-secondary btn-sm";return o.a.createElement("li",{key:r},o.a.createElement("button",{className:n,onClick:function(){return t.jumpTo(r)}},a))});return n?(e=n,this.audio.play()):e="Turno del jugador : "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(b,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ul",null,s)),o.a.createElement("audio",{src:"https://instaud.io/32xs",autoPlay:!0}))}}]),t}(c.Component);function f(e){if(!e.includes(null))return" \xa1 EMPATE !";for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],u=n[1],i=n[2];if(e[s]&&e[s]===e[u]&&e[s]===e[i])return"Ganador :  ".concat(e[s])}return null}h.a.render(o.a.createElement(p,null),document.getElementById("root"))},16:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,2,1]]]);
//# sourceMappingURL=main.8988e7f5.chunk.js.map