const botao    = document.querySelector('#botao')
var point      = document.querySelector('#point')
const url      = "https://economia.awesomeapi.com.br/"
var  nick      = document.querySelector('#nome')
var  nick0     = document.querySelector('#alto')
var  nick1     = document.querySelector('#baixo')
var  nick2     = document.querySelector('#variacao')

function mudar(e) {
   var ss = e.target.selectionStart;
   var se = e.target.selectionEnd;
   e.target.value = e.target.value.toUpperCase();
   e.target.selectionStart = ss;
   e.target.selectionEnd = se;
}


botao.addEventListener('click', function pv(){
	if(point.value == "USD" || point.value =="CAD" || point.value == "EUR" || point.value == "AUD" || point.value =="GBP" || point.value == "ARS" || point.value == "JPY" || point.value =="CHF" || point.value == "CNY" || point.value =="BTC" || point.value == "LTC" || point.value =="ETH" || point.value == "XRP"){
		fetch(`${url}${point.value}`)
			.then((response =>{
				return response.json()
			
			}))
			.then((data =>{
				
			data.forEach( (value) => {
				for(var nomes of data){
					nick.innerHTML  = nomes.name
					nick0.innerHTML = nomes.bid
					nick1.innerHTML = nomes.ask
					nick2.innerHTML = nomes.varBid
					
				}
			})
				
			
			}))
		
	}
	else{
		alert("Codigo Errado")
	}
}
)