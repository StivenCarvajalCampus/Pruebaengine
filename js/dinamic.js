// script llenado dinamico
function carga() {
    document.querySelector('#products'); 
    let datos = []
    datos = {
        title: "Papas",
        price : "$2000",
    }
    localStorage.setItem("carga",JSON.stringify(carga))
}
function productos() {
    let productos= ""
    let carga= JSON.parse(localStorage.getItem("carga"));

    productos = `  <div class="carts">
    <img src="../images/papasmargarita.jpg" alt="" srcset="">
    <p class="carts">${title}</p>
    <p>$2000</p>
    <div>
        <a href="">Añadir al carrito</a>
    </div>
</div>
<div class="carts">
    <img src="../images/Pastel-de-Pollo7.jpg" alt="" srcset="">
    <p class="carts">Pasteles</p>
    <p>$2300</p>
    <div>
        <a href="">Añadir al carrito</a>
    </div>
</div>
<div class="carts">
    <img src="../images/Color-del-cafe-filtrado-y-su-parecido-con-el-color-de-un-vino-tinto.-scaled.jpg" alt="" srcset="">
    <p class="carts">Cafe</p>
    <p>$800</p>
    <div>
        <a href="">Añadir al carrito</a>
    </div>
</div>  `
}
document.querySelector("#products").insertAdjacentHTML("beforeend", productos);
// script accordion