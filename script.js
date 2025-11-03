//your JS code here. If required.

function  promis(str) {
let op = document.getElementById("output");
return new Promis ((resolve)=>{
	setTimeout(()=>{
		
		op.innerHTML =`<p>${str}</p>`;
		resolve("Hello, world!");
	},1000)
})	
}
promis("Hello, world!");

