//your JS code here. If required.

function  promis() {

return new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)
})	
}
promis().
	then((data)=>{
		let op = document.getElementById("output");
		op.textContent=data;
	})

