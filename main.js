function cart() {
    if(totalItems==0){
        alert("Please Choose Alteast One Product!")
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
  addtemptaions.innerHTML = `<div class="plusminus"><button class="minus" id="minus" onclick="minus1()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitytemptations">0</span>
    <button class="plus" id="plus" onclick="plus1()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus1() {
  var quantitycadbury = document.getElementById("quantitytemptations");
  var stock1 = document.getElementById("stock1");
  var numstock1 = Number(stock1.textContent);
  var cadbury = Number(quantitycadbury.textContent);
  if (cadbury > 0) {
    totalItems--;
    updateNoItems();
    quantitycadbury.textContent = cadbury - 1;
    stock1.textContent = numstock1 + 1;
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
  }
}
function addrost() {
  var addrost = document.getElementById("addrost").parentElement;
  addrost.innerHTML = `<div class="plusminus"><button class="minus" id="minus2" onclick="minus2()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityrost">0</span>
    <button class="plus" id="plus2" onclick="plus2()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addkitkat() {
  var addkitkat = document.getElementById("addkitkat").parentElement;
  addkitkat.innerHTML = `<div class="plusminus"><button class="minus" id="minus3" onclick="minus3()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykitkat">0</span>
    <button class="plus" id="plus3" onclick="plus3()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addmilkybar() {
  var addmilkybar = document.getElementById("addmilkybar").parentElement;
  addmilkybar.innerHTML = `<div class="plusminus"><button class="minus" id="minus14" onclick="minus14()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitymilkybar">0</span>
    <button class="plus" id="plus14" onclick="plus14()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addlays() {
  var addlays = document.getElementById("addlays").parentElement;
  addlays.innerHTML = `<div class="plusminus"><button class="minus" id="minus4" onclick="minus4()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitylays">0</span>
    <button class="plus" id="plus4" onclick="plus4()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addpringles() {
  var addpringles = document.getElementById("addpringles").parentElement;
  addpringles.innerHTML = `<div class="plusminus"><button class="minus" id="minus5" onclick="minus5()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitylays">0</span>
    <button class="plus" id="plus5" onclick="plus5()"><i class="fa-solid fa-plus"></i></button></div>`;
}
function minus5() {
  var stock6 = document.getElementById("stock6");
  var numstock6 = Number(stock6.textContent);
  var quantitylays = document.getElementById("quantitylays");
  var pringles = Number(quantitylays.textContent);
  if (pringles > 0) {
    totalItems--;
    updateNoItems();
    stock6.textContent = numstock6 + 1;
    quantitylays.textContent = pringles - 1;
  }
}
function plus5() {
  var stock6 = document.getElementById("stock6");
  var numstock6 = Number(stock6.textContent);
  var quantitylays = document.getElementById("quantitylays");
  var pringles = Number(quantitylays.textContent);
  if (pringles < 10) {
    totalItems++;
    updateNoItems();
    quantitylays.textContent = pringles + 1;
    stock6.textContent = numstock6 - 1;
  }
}
function addkerelachips() {
  var addkerelachips = document.getElementById("addkerelachips").parentElement;
  addkerelachips.innerHTML = `<div class="plusminus"><button class="minus" id="minus6" onclick="minus6()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykerelachips">0</span>
    <button class="plus" id="plus6" onclick="plus6()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addkurkure() {
  var addkurkure = document.getElementById("addkurkure").parentElement;
  addkurkure.innerHTML = `<div class="plusminus"><button class="minus" id="minus7" onclick="minus7()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykurkure">0</span>
    <button class="plus" id="plus7" onclick="plus7()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addpepsi() {
  var addpepsi = document.getElementById("addpepsi").parentElement;
  addpepsi.innerHTML = `<div class="plusminus"><button class="minus" id="minus8" onclick="minus8()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypepsi">0</span>
    <button class="plus" id="plus8" onclick="plus8()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addpulpy() {
  var addpulpy = document.getElementById("addpulpy").parentElement;
  addpulpy.innerHTML = `<div class="plusminus"><button class="minus" id="minus9" onclick="minus9()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypulpy">0</span>
    <button class="plus" id="plus9" onclick="plus9()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addpomegranate() {
  var addpomegranate = document.getElementById("addpomegranate").parentElement;
  addpomegranate.innerHTML = `<div class="plusminus"><button class="minus" id="minus10" onclick="minus10()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypomegranate">0</span>
    <button class="plus" id="plus10" onclick="plus10()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
function addvanilla() {
  var addvanilla = document.getElementById("addvanilla").parentElement;
  addvanilla.innerHTML = `<div class="plusminus"><button class="minus" id="minus11" onclick="minus11()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityvanilla">0</span>
    <button class="plus" id="plus11" onclick="plus11()"><i class="fa-solid fa-plus"></i></button></div>`;
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
  }
}
