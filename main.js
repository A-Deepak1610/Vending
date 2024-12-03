let quantity1=0;
let quantity2=0;
let quantity3=0;
let quantity4=0;
let quantity5=0;
let quantity6=0;
let quantity7=0;
let quantity8=0;
let quantity9=0;
let quantity10=0;
let quantity11=0;
let quantity12=0;
function cart(event) {
  if(totalItems==0){
    event.preventDefault();
    alert("Plese Choose Atleat One Item!");
  }
  else{
      document.getElementById("cartbox").style.visibility = "inherit";
  }
}
function exit() {
  document.getElementById("cartbox").style.visibility = "hidden";
}
function cartt() {
  if(totalItems==0){
    alert("Plese Choose Atleat One Item!");
  }
  else{
      document.getElementById("cartbox").style.visibility = "inherit";
  }
}
function exit() {
  document.getElementById("cartbox").style.visibility = "hidden";
}
let totalItems = 0;
function updateNoItems() {
  var noitems = document.getElementById("noitems");
  var noitemss = document.getElementById("noitemss");
  if (totalItems > 0) {
    noitems.textContent = totalItems;
    noitemss.textContent = totalItems;
  } else {
    noitems.textContent = "";
    noitemss.textContent = "";
  }
}
function addtemptations() {
  var addtemptaions = document.getElementById("addtemptations").parentElement;
  addtemptaions.innerHTML = `<div class="plusminus"><button class="minus" id="minus" onclick="minus1();buynow();addselectedproducts()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitytemptations">0</span>
    <button class="plus" id="plus" onclick="plus1();buynow();addselectedproducts()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus1() {
  var quantitycadbury = document.getElementById("quantitytemptations");
  var cadbury = Number(quantitycadbury.textContent);
  var stock1 = document.getElementById("stock1");
  var numstock1 = Number(stock1.textContent);
  if (cadbury > 0) {
    totalItems--;
    updateNoItems();
    quantitycadbury.textContent = cadbury - 1;
    stock1.textContent = numstock1 + 1;
    quantity1--
  }
}
function plus1() {
  var stock1 = document.getElementById("stock1");
  var numstock1 = Number(stock1.textContent);
  var quantitycadbury = document.getElementById("quantitytemptations");
  var cadbury = Number(quantitycadbury.textContent);
  if (cadbury < 10) {
    totalItems++;
    updateNoItems();
    quantitycadbury.textContent = cadbury + 1;
    stock1.textContent = numstock1 - 1;
    quantity1++
  }
}
function addrost() {
  var addrost = document.getElementById("addrost").parentElement;
  addrost.innerHTML = `<div class="plusminus"><button class="minus" id="minus2" onclick="minus2();addproduct2();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityrost">0</span>
    <button class="plus" id="plus2" onclick="plus2();addproduct2();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus2() {
  var quantityrost = document.getElementById("quantityrost");
  var rost = Number(quantityrost.textContent);
  var stock2 = document.getElementById("stock2");
  var numstock2 = Number(stock2.textContent);
  if (rost > 0) {
    totalItems--;
    updateNoItems();
    quantityrost.textContent = rost - 1;
    stock2.textContent = numstock2 + 1;
    quantity2--
  }
}
function plus2() {
  var stock2 = document.getElementById("stock2");
  var numstock2 = Number(stock2.textContent);
  var quantityrost = document.getElementById("quantityrost");
  var rost = Number(quantityrost.textContent);
  if (rost < 10) {
    totalItems++;
    updateNoItems();
    quantityrost.textContent = rost + 1;
    stock2.textContent = numstock2 - 1;
    quantity2++
  }
}
function addkitkat() {
  var addkitkat = document.getElementById("addkitkat").parentElement;
  addkitkat.innerHTML = `<div class="plusminus"><button class="minus" id="minus3" onclick="minus3();addpoduct3();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykitkat">0</span>
    <button class="plus" id="plus3" onclick="plus3();addpoduct3();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus3() {
  var quantitykitkat = document.getElementById("quantitykitkat");
  var kitkat = Number(quantitykitkat.textContent);
  var stock3 = document.getElementById("stock3");
  var numstock3 = Number(stock3.textContent);
  if (kitkat > 0) {
    totalItems--;
    updateNoItems();
    quantitykitkat.textContent = kitkat - 1;
    stock3.textContent = numstock3 + 1;
    quantity3--
  }
}
function plus3() {
  var quantitykitkat = document.getElementById("quantitykitkat");
  var kitkat = Number(quantitykitkat.textContent);
  var stock3 = document.getElementById("stock3");
  var numstock3 = Number(stock3.textContent);
  if (kitkat < 10) {
    totalItems++;
    updateNoItems();
    quantitykitkat.textContent = kitkat + 1;
    stock3.textContent = numstock3 - 1;
    quantity3++
  }
}
function addmilkybar() {
  var addmilkybar = document.getElementById("addmilkybar").parentElement;
  addmilkybar.innerHTML = `<div class="plusminus"><button class="minus" id="minus14" onclick="minus14();addproduct4();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitymilkybar">0</span>
    <button class="plus" id="plus14" onclick="plus14();addproduct4();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus14() {
  var stock4 = document.getElementById("stock4");
  var numstock4 = Number(stock4.textContent);
  var quantitymilkybar = document.getElementById("quantitymilkybar");
  var milkybar = Number(quantitymilkybar.textContent);
  if (milkybar > 0) {
    totalItems--;
    updateNoItems();
    stock4.textContent = numstock4 + 1;
    quantitymilkybar.textContent = milkybar - 1;
    quantity4--
  }
}
function plus14() {
  var stock4 = document.getElementById("stock4");
  var numstock4 = Number(stock4.textContent);
  var quantitymilkybar = document.getElementById("quantitymilkybar");
  var milkybar = Number(quantitymilkybar.textContent);
  if (milkybar < 10) {
    totalItems++;
    updateNoItems();
    stock4.textContent = numstock4 - 1;
    quantitymilkybar.textContent = milkybar + 1;
    quantity4++
  }
}
function addlays() {
  var addlays = document.getElementById("addlays").parentElement;
  addlays.innerHTML = `<div class="plusminus"><button class="minus" id="minus4" onclick="minus4();addproduct5();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitylays">0</span>
    <button class="plus" id="plus4" onclick="plus4();addproduct5();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus4() {
  var stock5 = document.getElementById("stock5");
  var numstock5 = Number(stock5.textContent);
  var quantitylays = document.getElementById("quantitylays");
  var lays = Number(quantitylays.textContent);
  if (lays > 0) {
    totalItems--;
    updateNoItems();
    stock5.textContent = numstock5 + 1;
    quantitylays.textContent = lays - 1;
    quantity5--
  }
}
function plus4() {
  var stock5 = document.getElementById("stock5");
  var numstock5 = Number(stock5.textContent);
  var quantitylays = document.getElementById("quantitylays");
  var lays = Number(quantitylays.textContent);
  if (lays < 10) {
    totalItems++;
    updateNoItems();
    stock5.textContent = numstock5 - 1;
    quantitylays.textContent = lays + 1;
    quantity5++
  }
}
function addpringles() {
  var addpringles = document.getElementById("addpringles").parentElement;
  addpringles.innerHTML = `<div class="plusminus"><button class="minus" id="minus5" onclick="minus5();addproduct6();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypringles">0</span>
    <button class="plus" id="plus5" onclick="plus5();addproduct6();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus5() {
  var stock6 = document.getElementById("stock6");
  var numstock6 = Number(stock6.textContent);
  var quantitypringles = document.getElementById("quantitypringles");
  var pringles = Number(quantitypringles.textContent);
  if (pringles > 0) {
    totalItems--;
    updateNoItems();
    stock6.textContent = numstock6 + 1;
    quantitypringles.textContent = pringles - 1;
    quantity6--
  }
}
function plus5() {
  var stock6 = document.getElementById("stock6");
  var numstock6 = Number(stock6.textContent);
  var quantitypringles = document.getElementById("quantitypringles");
  var pringles = Number(quantitypringles.textContent);
  if (pringles < 10) {
    totalItems++;
    updateNoItems();
    quantitypringles.textContent = pringles + 1;
    stock6.textContent = numstock6 - 1;
    quantity6++
  }
}
function addkerelachips() {
  var addkerelachips = document.getElementById("addkerelachips").parentElement;
  addkerelachips.innerHTML = `<div class="plusminus"><button class="minus" id="minus6" onclick="minus6();addproduct7();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykerelachips">0</span>
    <button class="plus" id="plus6" onclick="plus6();addproduct7();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus6() {
  var stock7 = document.getElementById("stock7");
  var numstock7 = Number(stock7.textContent);
  var quantitykerelachips = document.getElementById("quantitykerelachips");
  var kerelachips = Number(quantitykerelachips.textContent);
  if (kerelachips > 0) {
    totalItems--;
    updateNoItems();
    stock7.textContent = numstock7 + 1;
    quantitykerelachips.textContent = kerelachips - 1;
    quantity7--
  }
}
function plus6() {
  var stock7 = document.getElementById("stock7");
  var numstock7 = Number(stock7.textContent);
  var quantitykerelachips = document.getElementById("quantitykerelachips");
  var kerelachips = Number(quantitykerelachips.textContent);
  if (kerelachips < 10) {
    totalItems++;
    updateNoItems();
    quantitykerelachips.textContent = kerelachips + 1;
    stock7.textContent = numstock7 - 1;
    quantity7++
  }
}
function addkurkure() {
  var addkurkure = document.getElementById("addkurkure").parentElement;
  addkurkure.innerHTML = `<div class="plusminus"><button class="minus" id="minus7" onclick="minus7();addproduct8();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykurkure">0</span>
    <button class="plus" id="plus7" onclick="plus7();addproduct8();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus7() {
  var stock8 = document.getElementById("stock8");
  var numstock8 = Number(stock8.textContent);
  var quantitykurkure = document.getElementById("quantitykurkure");
  var kurkure = Number(quantitykurkure.textContent);
  if (kurkure > 0) {
    totalItems--;
    updateNoItems();
    stock8.textContent = numstock8 + 1;
    quantitykurkure.textContent = kurkure - 1;
    quantity8--
  }
}
function plus7() {
  var stock8 = document.getElementById("stock8");
  var numstock8 = Number(stock8.textContent);
  var quantitykurkure = document.getElementById("quantitykurkure");
  var kurkure = Number(quantitykurkure.textContent);
  if (kurkure < 10) {
    totalItems++;
    updateNoItems();
    stock8.textContent = numstock8 - 1;
    quantitykurkure.textContent = kurkure + 1;
    quantity8++
  }
}
function addpepsi() {
  var addpepsi = document.getElementById("addpepsi").parentElement;
  addpepsi.innerHTML = `<div class="plusminus"><button class="minus" id="minus8" onclick="minus8();addproduct9();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypepsi">0</span>
    <button class="plus" id="plus8" onclick="plus8();addproduct9();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus8() {
  var stock9 = document.getElementById("stock9");
  var numstock9 = Number(stock9.textContent);
  var quantitypepsi = document.getElementById("quantitypepsi");
  var pepsi = Number(quantitypepsi.textContent);
  if (pepsi > 0) {
    totalItems--;
    updateNoItems();
    stock9.textContent = numstock9 + 1;
    quantitypepsi.textContent = pepsi - 1;
    quantity9--
  }
}
function plus8() {
  var stock9 = document.getElementById("stock9");
  var numstock9 = Number(stock9.textContent);
  var quantitypepsi = document.getElementById("quantitypepsi");
  var pepsi = Number(quantitypepsi.textContent);
  if (pepsi < 10) {
    totalItems++;
    updateNoItems();
    stock9.textContent = numstock9 - 1;
    quantitypepsi.textContent = pepsi + 1;
    quantity9++
  }
}
function addpulpy() {
  var addpulpy = document.getElementById("addpulpy").parentElement;
  addpulpy.innerHTML = `<div class="plusminus"><button class="minus" id="minus9" onclick="minus9();addproduct10();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypulpy">0</span>
    <button class="plus" id="plus9" onclick="plus9();addproduct10();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus9() {
  var stock10 = document.getElementById("stock10");
  var numstock10 = Number(stock10.textContent);
  var quantitypulpy = document.getElementById("quantitypulpy");
  var pulpy = Number(quantitypulpy.textContent);
  if (pulpy > 0) {
    totalItems--;
    updateNoItems();
    quantitypulpy.textContent = pulpy - 1;
    stock10.textContent = numstock10 + 1;
    quantity10--
  }
}
function plus9() {
  var stock10 = document.getElementById("stock10");
  var numstock10 = Number(stock10.textContent);
  var quantitypulpy = document.getElementById("quantitypulpy");
  var pulpy = Number(quantitypulpy.textContent);
  if (pulpy < 10) {
    totalItems++;
    updateNoItems();
    stock10.textContent = numstock10 - 1;
    quantitypulpy.textContent = pulpy + 1;
    quantity10++
  }
}
function addpomegranate() {
  var addpomegranate = document.getElementById("addpomegranate").parentElement;
  addpomegranate.innerHTML = `<div class="plusminus"><button class="minus" id="minus10" onclick="minus10();addproduct11();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypomegranate">0</span>
    <button class="plus" id="plus10" onclick="plus10();addproduct11();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus10() {
  var stock11 = document.getElementById("stock11");
  var numstock11 = Number(stock11.textContent);
  var quantitypomegranate = document.getElementById("quantitypomegranate");
  var pomegranate = Number(quantitypomegranate.textContent);
  if (pomegranate > 0) {
    totalItems--;
    updateNoItems();
    quantitypomegranate.textContent = pomegranate - 1;
    stock11.textContent = numstock11 + 1;
    quantity11--
  }
}
function plus10() {
  var stock11 = document.getElementById("stock11");
  var numstock11 = Number(stock11.textContent);
  var quantitypomegranate = document.getElementById("quantitypomegranate");
  var pomegranate = Number(quantitypomegranate.textContent);
  if (pomegranate < 10) {
    totalItems++;
    updateNoItems();
    stock11.textContent = numstock11 - 1;
    quantitypomegranate.textContent = pomegranate + 1;
    quantity11++
  }
}
function addvanilla() {
  var addvanilla = document.getElementById("addvanilla").parentElement;
  addvanilla.innerHTML = `<div class="plusminus"><button class="minus" id="minus11" onclick="minus11();addproduct12();buynow()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityvanilla">0</span>
    <button class="plus" id="plus11" onclick="plus11();addproduct12();buynow()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus11() {
  var stock12 = document.getElementById("stock12");
  var numstock12 = Number(stock12.textContent);
  var quantityvanilla = document.getElementById("quantityvanilla");
  var vanilla = Number(quantityvanilla.textContent);
  if (vanilla > 0) {
    totalItems--;
    updateNoItems();
    stock12.textContent = numstock12 + 1;
    quantityvanilla.textContent = vanilla - 1;
    quantity12--
  }
}
function plus11() {
  var stock12 = document.getElementById("stock12");
  var numstock12 = Number(stock12.textContent);
  var quantityvanilla = document.getElementById("quantityvanilla");
  var vanilla = Number(quantityvanilla.textContent);
  if (vanilla < 10) {
    totalItems++;
    updateNoItems();
    
    quantityvanilla.textContent = vanilla + 1;
    stock12.textContent = numstock12 - 1;
    quantity12++
  }
}
function addselectedproducts(){
  var quantitycadbury = document.getElementById("quantitytemptations");
  var cadbury = Number(quantitycadbury.textContent);
  var product1=document.createElement("li")
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct=document.getElementById("selectedproduct");
  if(cadbury>0){
    let price1=cadbury*109
    if(!selectedproduct){
    product1.innerHTML=`
    <div class="selectedproduct" id="selectedproduct">
     <img src="img/temptaion.png"   title="Cadbury Temptations">
      <div class="cartinside"><p class="qunatity">Quantity:${cadbury}<br>Price:₹${price1}</p></div> </div> `
      selectedproducts.append(product1)
    }
    else{
      selectedproduct.querySelector(".qunatity").innerHTML = `Quantity: ${cadbury}<br>Price: ₹${price1}`;
    }
  }
  else if(cadbury==0){
    selectedproduct.remove()
  }
}
function addproduct2(){
  var quantityrost=document.getElementById("quantityrost")
  var rost = Number(quantityrost.textContent);
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct2=document.getElementById("selectedproduct2");
  var product2=document.createElement("li")
  if(rost>0){
    let price2=rost*152
    if(!selectedproduct2){
    product2.innerHTML=`<div class="selectedproduct2" id="selectedproduct2">
     <img src="img/dairy milk.webp" alt="" title="Dairy Milk">
      <div class="cartinside"><p class="qunatity2">Quantity:${rost}<br>Price:₹${price2}</p></div> </div> `
      selectedproducts.append(product2)
    }
    else{
      selectedproduct2.querySelector(".qunatity2").innerHTML = `Quantity: ${rost}<br>Price: ₹${price2}`;
    }
  }
  else if(rost==0){
    selectedproduct2.remove()
  }
}
function addpoduct3(){
  var quantitykitkat = document.getElementById("quantitykitkat");
  var kitkat = Number(quantitykitkat.textContent);
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct3=document.getElementById("selectedproduct3");
  var product3=document.createElement("li")
  if(kitkat>0){
    let price3=kitkat*70
    if(!selectedproduct3){
    product3.innerHTML=`<div class="selectedproduct3" id="selectedproduct3">
     <img src="img/kit kat.jpg" title="Kit-Kat">
      <div class="cartinside"><p class="qunatity3">Quantity:${kitkat}<br>Price:₹${price3}</p></div> </div> `
      selectedproducts.append(product3)
    }
    else{
      selectedproduct3.querySelector(".qunatity3").innerHTML = `Quantity: ${kitkat}<br>Price:₹${price3}`;
    }
  }
  else if(kitkat==0){
    selectedproduct3.remove()
  }
}
function addproduct4(){
  var quantitymilkybar=document.getElementById("quantitymilkybar")
  var  milkybar=Number(quantitymilkybar.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct4=document.getElementById("selectedproduct4");
  var product4=document.createElement("li")
  if(milkybar>0){
    let price4=milkybar*35
    if(!selectedproduct4){
    product4.innerHTML=`<div class="selectedproduct4" id="selectedproduct4">
     <img src="img/milkybar.webp" title="Milky Bar">
      <div class="cartinside"><p class="qunatity4">Quantity:${milkybar}<br>Price:₹${price4}</p></div> </div> `
      selectedproducts.append(product4)
    }
    else{
      selectedproduct4.querySelector(".qunatity4").innerHTML = `Quantity: ${milkybar}<br>Price:₹${price4}`;
    }
  }
  else if(milkybar==0){
    selectedproduct4.remove()
  } 
}

function addproduct5(){
  var quantitylays=document.getElementById("quantitylays");
  var lays=Number(quantitylays.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct5=document.getElementById("selectedproduct5");
  var product5=document.createElement("li")
  if(lays>0){
    let price5=lays*20
    if(!selectedproduct5){
    product5.innerHTML=`<div class="selectedproduct5" id="selectedproduct5">
     <img src="img/lays.jpg" title="Lays">
      <div class="cartinside"><p class="qunatity5">Quantity:${lays}<br>Price:₹${price5}</p></div> </div> `
      selectedproducts.append(product5)
    }
    else{
      selectedproduct5.querySelector(".qunatity5").innerHTML = `Quantity: ${lays}<br>Price:₹${price5}`;
    }
  }
  else if(lays==0){
    selectedproduct5.remove()
  }
}
function addproduct6(){
  var quantitypringles=document.getElementById("quantitypringles")
  var pringles=Number(quantitypringles.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct6=document.getElementById("selectedproduct6");
  var product6=document.createElement("li")
  if(pringles>0){
    let price6=pringles*12
    if(!selectedproduct6){
    product6.innerHTML=`<div class="selectedproduct6" id="selectedproduct6">
     <img src="img/pringles.webp" title="Pringles">
      <div class="cartinside"><p class="qunatity6">Quantity:${pringles}<br>Price:₹${price6}</p></div> </div> `
      selectedproducts.append(product6)
    }
    else{
      selectedproduct6.querySelector(".qunatity6").innerHTML = `Quantity: ${pringles}<br>Price:₹${price6}`;
    }
  }
  else if(pringles==0){
    selectedproduct6.remove()
  }
}
function addproduct7(){
  var quantitykerelachips = document.getElementById("quantitykerelachips");
  var kerelachips = Number(quantitykerelachips.textContent);
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct7=document.getElementById("selectedproduct7");
  var product7=document.createElement("li")
  if(kerelachips>0){
    let price7=kerelachips*10
    if(!selectedproduct7){
    product7.innerHTML=`<div class="selectedproduct7" id="selectedproduct7">
     <img src="img/kerelachips.jpg" title="Kerela Chips">
      <div class="cartinside"><p class="qunatity7">Quantity:${kerelachips}<br>Price: ₹${price7}</p></div> </div> `
      selectedproducts.append(product7)
    }
    else{
      selectedproduct7.querySelector(".qunatity7").innerHTML = `Quantity: ${kerelachips}<br>Price: ₹${price7}`;
    }
    }
  else if(kerelachips==0){
    selectedproduct7.remove()
  }
}
function addproduct8(){
  var quantitykurkure= document.getElementById("quantitykurkure")
  var kurkure=Number(quantitykurkure.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct8=document.getElementById("selectedproduct8");
  var product8=document.createElement("li")
  if(kurkure>0){
    let price8=kurkure*10
    if(!selectedproduct8){
    product8.innerHTML=`<div class="selectedproduct8" id="selectedproduct8">
     <img src="img/kurkure.webp" title="Kurkure">
      <div class="cartinside"><p class="qunatity8">Quantity:${kurkure}<br>Price:₹${price8}</p></div> </div> `
      selectedproducts.append(product8)
    }
    else{
      selectedproduct8.querySelector(".qunatity8").innerHTML = `Quantity: ${kurkure}<br>Price:₹${price8}`;
    }
  
    }
  else if(kurkure==0){
    selectedproduct8.remove()
  }
}
function addproduct9(){
  var quantitypepsi= document.getElementById("quantitypepsi")
  var pepsi=Number(quantitypepsi.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct10=document.getElementById("selectedproduct10");
  var product10=document.createElement("li")
  if(pepsi>0){
    let price10=pepsi*150
    if(!selectedproduct10){
    product10.innerHTML=`<div class="selectedproduct10" id="selectedproduct10">
     <img src="img/pepsi.jpg" title="Pepsi">
      <div class="cartinside"><p class="qunatity10">Quantity:${pepsi}<br>Price:₹${price10}</p></div> </div>`
      selectedproducts.append(product10)
    }
    else{
      selectedproduct10.querySelector(".qunatity10").innerHTML = `Quantity: ${pepsi}<br>Price:₹${price10}`;
    }
    }
    else if(pepsi==0){
    selectedproduct10.remove()
  }
}

function addproduct10(){
  var quantitypulpy=document.getElementById("quantitypulpy")
  var pulpy=Number(quantitypulpy.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct11=document.getElementById("selectedproduct11");
  var product11=document.createElement("li")
  if(pulpy>0){
    let price11=pulpy*150
    if(!selectedproduct11){
    product11.innerHTML=`<div class="selectedproduct11" id="selectedproduct11">
     <img src="img/pulpy.webp" title="Pulpy">
      <div class="cartinside"><p class="qunatity11">Quantity:${pulpy}<br>Price:₹${price11}</p></div> </div> `
      selectedproducts.append(product11)
    }
    else{
      selectedproduct11.querySelector(".qunatity11").innerHTML = `Quantity: ${pulpy}<br>Price:₹${price11}`;
    }
    }
    else if(pulpy==0){
    selectedproduct11.remove()
  }
}

function addproduct11(){
  var quantitypomegranate=document.getElementById("quantitypomegranate")
  var pomegranate=Number(quantitypomegranate.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct12=document.getElementById("selectedproduct12");
  var product12=document.createElement("li")
  if(pomegranate>0){
    let price12=pomegranate*111
    if(!selectedproduct12){
    product12.innerHTML=`<div class="selectedproduct12" id="selectedproduct12">
     <img src="img/pomegranatejuce.jpg" title="Pomegranate">
      <div class="cartinside"><p class="qunatity12">Quantity:${pomegranate}<br>Price:₹${price12}</p></div> </div> `
      selectedproducts.append(product12)
    }
    else{
      selectedproduct12.querySelector(".qunatity12").innerHTML = `Quantity: ${pomegranate}<br>Price:₹${price12}`;
    }
    }
    else if(pomegranate==0){
    selectedproduct12.remove()
  }
}
function addproduct12(){
  var quantityvanilla = document.getElementById("quantityvanilla")
  var vanilla = Number(quantityvanilla.textContent)
  var selectedproducts=document.getElementById("selectedproducts");
  var selectedproduct13=document.getElementById("selectedproduct13");
  var product13=document.createElement("li")
  if(vanilla>0){
    let price13=vanilla*32
    if(!selectedproduct13){
    product13.innerHTML=`<div class="selectedproduct13" id="selectedproduct13">
     <img src="img/milkshake.webp" title="Vanilla">
      <div class="cartinside"><p class="qunatity13">Quantity:${vanilla}<br>Price:₹${price13}</p></div> </div> `
      selectedproducts.append(product13)
    }
    else{
      selectedproduct13.querySelector(".qunatity13").innerHTML = `Quantity: ${vanilla}<br>Price:₹${price13}`;
    }
    }
    else if(vanilla==0){
    selectedproduct13.remove()
  } 
}
function buynow(){
  let totalprice=quantity1*109+quantity2*152+quantity3*70+quantity4*35+quantity5*20+quantity6*170+quantity7*70+quantity8*10+quantity9*150+quantity10*66+quantity11*111+quantity12*32;
  if(totalprice==0){
    document.getElementById("cartbox").style.visibility = "hidden";
  }
  else{
  var total=document.getElementById("total")
  total.innerHTML=`Total:₹${totalprice}`
  totalamt=document.getElementById("totalamt")
  totalamt.innerHTML=`Amount:₹${totalprice}`
  let beforediscount=quantity1*109+quantity2*152+quantity3*70+quantity4*35+quantity5*20+quantity6*170+quantity7*70+quantity8*10+quantity9*150+quantity10*66+quantity11*111+quantity12*32;
  var finalprice=document.getElementById("finalprice")
  finalprice.innerHTML=`Total Amount:₹${beforediscount}`
  }
}
function payments(){
  var payments=document.getElementById("payments")
  payments.style.visibility = "inherit"
  document.documentElement.scrollTop = 0
  let beforediscount=quantity1*109+quantity2*152+quantity3*70+quantity4*35+quantity5*20+quantity6*170+quantity7*70+quantity8*10+quantity9*150+quantity10*66+quantity11*111+quantity12*32;
   var finalprice=document.getElementById("finalprice")
  finalprice.innerHTML=`Total Amount:₹${beforediscount}`
}
function exitpayments(){
  var payments=document.getElementById("payments")
  payments.style.visibility = "hidden" 
}
function discount(){
  let beforediscount=quantity1*109+quantity2*152+quantity3*70+quantity4*35+quantity5*20+quantity6*170+quantity7*70+quantity8*10+quantity9*150+quantity10*66+quantity11*111+quantity12*32;
  var input=document.getElementById("inputdiscount").value
  var finalprice=document.getElementById("finalprice")
  finalprice.innerHTML=`Total Amount:₹${beforediscount}`
  if (input === "DISCOUNT30" || input === "discount30") {
    var discountedprice=beforediscount-(beforediscount*0.30)
    discountedprice=Math.round(discountedprice)
    var discounted=document.getElementById("discounted")
    var finalprice=document.getElementById("finalprice")
    discounted.style.color="green"
    discounted.innerHTML='Congratulations! You saved 30% on your order'
    document.getElementById("inputdiscount").value=''
    finalprice.innerHTML=`Total Amount:₹${discountedprice}`
  }
  else if(input==''){
    var discounted=document.getElementById("discounted")
    discounted.innerHTML=''
  }
  else{
    var discounted=document.getElementById("discounted")
    discounted.style.color="red"
    discounted.innerHTML="Sorry!discounted code had experied"
    document.getElementById("inputdiscount").value=''
  }
}
function clearr() {
  window.location.reload();
}
window.onload = function() {
  window.scrollTo(0,0)
}

function cash(){
  exitpayments()
  var cashpage=document.getElementById("cashpage")
  cashpage.style.visibility="inherit"
  // setTimeout(exitloading,4000)
  setTimeout(load,1000)
  setTimeout(load1,2000)
  setTimeout(load2,3000)
  setTimeout(thankyou,4000)
  setInterval(timer,1000)
}
function exitloading(){
  var loading=document.getElementById("loading")
  loading.style.visibility="hidden"
}
function load(){
  var load=document.getElementById("load")
  load.textContent="Loading."
}
function load1(){
  var load=document.getElementById("load")
  load.textContent="Loading.."
}
function load2(){
  var load=document.getElementById("load")
  load.textContent="Loading..."
}
function thankyou(){
  var load=document.getElementById("load")
  load.style.visibility="hidden"
  var loading=document.getElementById("loading")
  loading.style.visibility="hidden"
  var thankyou=document.getElementById("thankyou")
  thankyou.style.visibility="inherit"
}
function star1(star){
  var star1=document.getElementById("star1")
  var star2=document.getElementById("star2")
  var star3=document.getElementById("star3")
  var star4=document.getElementById("star4")
  var star5=document.getElementById("star5")
  if(star=='star1'){
    if(star1.innerHTML==`<i class="fa-solid fa-star" id="starfilled"></i>`){
      star1.innerHTML=`<i class="fa-regular fa-star"></i>`
      star2.innerHTML=`<i class="fa-regular fa-star"></i>`
      star3.innerHTML=`<i class="fa-regular fa-star"></i>`
      star4.innerHTML=`<i class="fa-regular fa-star"></i>`
      star5.innerHTML=`<i class="fa-regular fa-star"></i>`
    }
    else{
       star1.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
       
    }
  }
  else if(star=='star2'){
    if(star2.innerHTML==`<i class="fa-regular fa-star"></i>`){
    star1.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star2.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    }
    else{
      star1.innerHTML=`<i class="fa-regular fa-star"></i>`
      star2.innerHTML=`<i class="fa-regular fa-star"></i>`
      star3.innerHTML=`<i class="fa-regular fa-star"></i>`
      star4.innerHTML=`<i class="fa-regular fa-star"></i>`
      star5.innerHTML=`<i class="fa-regular fa-star"></i>`
    }
  }
  else if(star=='star3'){
    if(star3.innerHTML==`<i class="fa-regular fa-star"></i>`){
    star1.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star2.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star3.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    }
    else{
      star1.innerHTML=`<i class="fa-regular fa-star"></i>`
      star2.innerHTML=`<i class="fa-regular fa-star"></i>`
      star3.innerHTML=`<i class="fa-regular fa-star"></i>`
       star4.innerHTML=`<i class="fa-regular fa-star"></i>`
      star5.innerHTML=`<i class="fa-regular fa-star"></i>`
    }
  }
  else if(star=='star4'){
    if(star4.innerHTML==`<i class="fa-regular fa-star"></i>`){
    star1.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star2.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star3.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star4.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    }
    else{
      star1.innerHTML=`<i class="fa-regular fa-star"></i>`
      star2.innerHTML=`<i class="fa-regular fa-star"></i>`
      star3.innerHTML=`<i class="fa-regular fa-star"></i>`
      star4.innerHTML=`<i class="fa-regular fa-star"></i>`
      star5.innerHTML=`<i class="fa-regular fa-star"></i>`
    }
  }  else if(star=='star5'){
    if(star4.innerHTML==`<i class="fa-regular fa-star"></i>`){
    star1.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star2.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star3.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star4.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    star5.innerHTML=`<i class="fa-solid fa-star" id="starfilled"></i>`
    }
    else{
      star1.innerHTML=`<i class="fa-regular fa-star"></i>`
      star2.innerHTML=`<i class="fa-regular fa-star"></i>`
      star3.innerHTML=`<i class="fa-regular fa-star"></i>`
      star4.innerHTML=`<i class="fa-regular fa-star"></i>`
      star5.innerHTML=`<i class="fa-regular fa-star"></i>`
    }
  }
  
}
let a=34
function timer(){
  var closecash=document.getElementById("closecash")
  a--
  if(a>0){
    closecash.textContent=`Close(${a})`
  }
  else(
    paymentscash()
  )
}
function paymentscash(){
  var cashpage=document.getElementById("cashpage")
  cashpage.style.visibility="hidden"
}
function gpay(){  
  var gpaypage=document.getElementById("gpaypage")
  gpaypage.style.visibility="inherit"
  exitpayments()
  setInterval(paywithin,1000)
  setInterval(gpaythanks,5000)
}
let b=5
let c=-1
function paywithin(){
  var closegpayqrcode=document.getElementById("closegpayqrcode")
  b--
  c++
  if(b>=0){
    closegpayqrcode.textContent=`Pay with in (${b})`
  }

}
function gpaythanks(){
  var gpaypage=document.getElementById("gpaypage")
  gpaypage.style.visibility="hidden"
  var cashpage=document.getElementById("cashpage")
  cashpage.style.visibility="inherit"
  // setTimeout(exitloading,4000)
  setTimeout(load,1000)
  setTimeout(load1,2000)
  setTimeout(load2,3000)
  setTimeout(thankyou,4000)
  setInterval(timer,1000)
}


