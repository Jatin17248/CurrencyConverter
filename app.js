const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  const nameOfCurr = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
    const dropdowns = document.querySelectorAll('select');
  let sbmt = document.querySelector('#sbmt');
  let fromCur = dropdowns[0];
  let toCur = dropdowns[1];
  let msg1 = document.querySelector('.msg1');
  let msg  = document.querySelector('.msg');
  sbmt.addEventListener('click', async (evt) =>{
	evt.preventDefault();
	let amt = document.querySelector('#amt');
	let amount = amt.value;
	if (amount === '' || amount <= 0){
		amount = 1;
		amt.value = 1;
	}
  const URL = `${BASE_URL}/${fromCur.value.toLowerCase()}/${toCur.value.toLowerCase()}.json`;
	let response = await fetch(URL);
	let data = await response.json();
	let rate = data[toCur.value.toLowerCase()];
	let AsPer = data['date'];
	
	let response1 = await fetch(nameOfCurr);
	let data1 = await response1.json();
	
  msg1.innerText = `From ${data1[fromCur.value.toLowerCase()]} To ${data1[toCur.value.toLowerCase()]} \n As On ${AsPer}`;
	msg.innerText = `${amount} ${fromCur.value} = ${amount*rate} ${toCur.value}`;
	console.log(rate);
  });
  
  
  
  <div style="text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;"><a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&amp;utm_campaign=000_logo&amp;utm_medium=website&amp;utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com"></a></div>
  
  
  
  



  
  for( select of dropdowns){
	  select.addEventListener("change", (evt) => {
		flagChange(evt.target);
	});
	for(code in countryList ) {
	
	let newOption = document.createElement("option");
	newOption.innerText = code;
	newOption.value = code;
	select.append(newOption);
	if(select.name === "from" && code === "INR"){
		newOption.selected = "selected";
	}
	if(select.name === "to" && code === "RUB"){
		newOption.selected = "selected";
	}
	
	}
  }
  
 
	
	
	
	const flagChange = (element) => {
		let code = element.value;
		let CountryCode = countryList[code];
		let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`;
		
		let img = element.parentElement.querySelector('img');
		img.src = newSrc;
	}
	
	
	document.addEventListener('DOMContentLoaded', () => {
  var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
   if(disclaimer){
       disclaimer.remove();
   }  
 });
 