function cart(){
    document.getElementById("cartbox").style.visibility='inherit';
}
function exit(){
    document.getElementById("cartbox").style.visibility='hidden';
}
function addtemptations(){
    var addtemptaions=document.getElementById("addtemptations").parentElement
    addtemptaions.innerHTML=`<div class="plusminus"><button class="minus" id="minus" onclick="minus1()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitytemptations">0</span>
    <button class="plus" id="plus" onclick="plus1()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus1(){
    var quantitycadbury = document.getElementById("quantitytemptations")
    var cadbury = Number(quantitycadbury.textContent)
    if(cadbury>0){
    quantitycadbury.textContent = cadbury - 1
    }
}
function plus1(){
    var quantitycadbury = document.getElementById("quantitytemptations")
    var cadbury = Number(quantitycadbury.textContent)
    quantitycadbury.textContent = cadbury + 1
}
function addrost(){
    var addrost=document.getElementById("addrost").parentElement
    addrost.innerHTML=`<div class="plusminus"><button class="minus" id="minus2" onclick="minus2()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityrost">0</span>
    <button class="plus" id="plus2" onclick="plus2()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus2(){
    var quantityrost = document.getElementById("quantityrost")
    var rost = Number(quantityrost.textContent)
    if(rost>0){
    quantityrost.textContent = rost - 1
    }
}
function plus2(){
    var quantityrost = document.getElementById("quantityrost")
    var rost = Number(quantityrost.textContent)
    quantityrost.textContent = rost + 1
}
function addrost(){
    var addrost=document.getElementById("addrost").parentElement
    addrost.innerHTML=`<div class="plusminus"><button class="minus" id="minus2" onclick="minus2()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityrost">0</span>
    <button class="plus" id="plus2" onclick="plus2()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus2(){
    var quantityrost = document.getElementById("quantityrost")
    var rost = Number(quantityrost.textContent)
    if(rost>0){
    quantityrost.textContent = rost - 1
    }
}
function plus2(){
    var quantityrost = document.getElementById("quantityrost")
    var rost = Number(quantityrost.textContent)
    quantityrost.textContent = rost + 1
}
function addkitkat(){
    var addkitkat=document.getElementById("addkitkat").parentElement
    addkitkat.innerHTML=`<div class="plusminus"><button class="minus" id="minus3" onclick="minus3()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykitkat">0</span>
    <button class="plus" id="plus3" onclick="plus3()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus3(){
    var quantitykitkat = document.getElementById("quantitykitkat")
    var rost = Number(quantitykitkat.textContent)
    if(rost>0){
        quantitykitkat.textContent = rost - 1
    }
}
function plus3(){
    var quantitykitkat = document.getElementById("quantitykitkat")
    var rost = Number(quantitykitkat.textContent)
    quantitykitkat.textContent = rost + 1
}
function addmilkybar(){
    var addmilkybar=document.getElementById("addmilkybar").parentElement
    addmilkybar.innerHTML=`<div class="plusminus"><button class="minus" id="minus14" onclick="minus14()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitymilkybar">0</span>
    <button class="plus" id="plus14" onclick="plus14()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus14(){
    var quantitymilkybar = document.getElementById("quantitymilkybar")
    var milkybar = Number(quantitymilkybar.textContent)
    if(milkybar>0){
        quantitymilkybar.textContent = milkybar- 1
    }
}
function plus14(){
    var quantitymilkybar = document.getElementById("quantitymilkybar")
    var milkybar = Number(quantitymilkybar.textContent)
    quantitymilkybar.textContent = milkybar + 1
}
function addlays(){
    var addlays=document.getElementById("addlays").parentElement
    addlays.innerHTML=`<div class="plusminus"><button class="minus" id="minus4" onclick="minus4()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitylays">0</span>
    <button class="plus" id="plus4" onclick="plus4()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus4(){
    var quantitylays = document.getElementById("quantitylays")
    var lays = Number(quantitylays.textContent)
    if(lays>0){
        quantitylays.textContent = lays - 1
    }
}
function plus4(){
    var quantitylays = document.getElementById("quantitylays")
    var lays = Number(quantitylays.textContent)
    quantitylays.textContent = lays + 1
}
function addpringles(){
    var addpringles=document.getElementById("addpringles").parentElement
    addpringles.innerHTML=`<div class="plusminus"><button class="minus" id="minus5" onclick="minus5()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitylays">0</span>
    <button class="plus" id="plus5" onclick="plus5()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus5(){
    var quantitylays = document.getElementById("quantitylays")
    var rost = Number(quantitylays.textContent)
    if(rost>0){
        quantitylays.textContent = rost - 1
    }
}
function plus5(){
    var quantitylays = document.getElementById("quantitylays")
    var rost = Number(quantitylays.textContent)
    quantitylays.textContent = rost + 1
}
function addkerelachips(){
    var addkerelachips=document.getElementById("addkerelachips").parentElement
    addkerelachips.innerHTML=`<div class="plusminus"><button class="minus" id="minus6" onclick="minus6()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykerelachips">0</span>
    <button class="plus" id="plus6" onclick="plus6()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus6(){
    var quantitykerelachips = document.getElementById("quantitykerelachips")
    var kerelachips = Number(quantitykerelachips.textContent)
    if(kerelachips>0){
        quantitykerelachips.textContent = kerelachips - 1
    }
}
function plus6(){
    var quantitykerelachips = document.getElementById("quantitykerelachips")
    var kerelachips = Number(quantitykerelachips.textContent)
    quantitykerelachips.textContent = kerelachips + 1
}
function addkurkure(){
    var addkurkure=document.getElementById("addkurkure").parentElement
    addkurkure.innerHTML=`<div class="plusminus"><button class="minus" id="minus7" onclick="minus7()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitykurkure">0</span>
    <button class="plus" id="plus7" onclick="plus7()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus7(){
    var quantitykurkure = document.getElementById("quantitykurkure")
    var kurkure = Number(quantitykurkure.textContent)
    if(kurkure>0){
        quantitykurkure.textContent = kurkure - 1
    }
}
function plus7(){
    var quantitykurkure = document.getElementById("quantitykurkure")
    var kurkure = Number(quantitykurkure.textContent)
    quantitykurkure.textContent = kurkure + 1
}
function addpepsi(){
    var addpepsi=document.getElementById("addpepsi").parentElement
    addpepsi.innerHTML=`<div class="plusminus"><button class="minus" id="minus8" onclick="minus8()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypepsi">0</span>
    <button class="plus" id="plus8" onclick="plus8()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus8(){
    var quantitypepsi = document.getElementById("quantitypepsi")
    var pepsi = Number(quantitypepsi.textContent)
    if(pepsi>0){
        quantitypepsi.textContent = pepsi - 1
    }
}
function plus8(){
    var quantitypepsi = document.getElementById("quantitypepsi")
    var pepsi = Number(quantitypepsi.textContent)
    quantitypepsi.textContent = pepsi + 1
}
function addpulpy(){
    var addpulpy=document.getElementById("addpulpy").parentElement
    addpulpy.innerHTML=`<div class="plusminus"><button class="minus" id="minus9" onclick="minus9()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypulpy">0</span>
    <button class="plus" id="plus9" onclick="plus9()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus9(){
    var quantitypulpy = document.getElementById("quantitypulpy")
    var pulpy = Number(quantitypulpy.textContent)
    if(pulpy>0){
        quantitypulpy.textContent = pulpy - 1
    }
}
function plus9(){
    var quantitypulpy = document.getElementById("quantitypulpy")
    var pulpy = Number(quantitypulpy.textContent)
    quantitypulpy.textContent = pulpy + 1
}
function addpomegranate(){
    var addpomegranate=document.getElementById("addpomegranate").parentElement
    addpomegranate.innerHTML=`<div class="plusminus"><button class="minus" id="minus10" onclick="minus10()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantitypomegranate">0</span>
    <button class="plus" id="plus10" onclick="plus10()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus10(){
    var quantitypomegranate = document.getElementById("quantitypomegranate")
    var pomegranate = Number(quantitypomegranate.textContent)
    if(pomegranate>0){
        quantitypomegranate.textContent = pomegranate - 1
    }
}
function plus10(){
    var quantitypomegranate = document.getElementById("quantitypomegranate")
    var pomegranate = Number(quantitypomegranate.textContent)
    quantitypomegranate.textContent = pomegranate + 1
}
function addvanilla(){
    var addvanilla=document.getElementById("addvanilla").parentElement
    addvanilla.innerHTML=`<div class="plusminus"><button class="minus" id="minus11" onclick="minus11()">
    <i class="fa-solid fa-minus"></i></button>
    <span id="quantityvanilla">0</span>
    <button class="plus" id="plus11" onclick="plus11()"><i class="fa-solid fa-plus"></i></button></div>`
}
function minus11(){
    var quantityvanilla = document.getElementById("quantityvanilla")
    var vanilla = Number(quantityvanilla.textContent)
    if(vanilla>0){
        quantityvanilla.textContent = vanilla - 1
    }
}
function plus11(){
    var quantityvanilla = document.getElementById("quantityvanilla")
    var vanilla = Number(quantityvanilla.textContent)
    quantityvanilla.textContent = vanilla + 1
}


