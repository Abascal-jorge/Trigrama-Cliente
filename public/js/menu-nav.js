const btnmovil = document.querySelector(".btn-movil");
const navmenu = document.querySelector(".ul-nav");
const conocenos = document.querySelector("#conocenos");
const solicitar = document.querySelectorAll(".solicitar");
//Agregando evento al logo de la page
const logo = document.querySelector(".logo");

myApp();


function myApp(){

    btnmovil.addEventListener("click", agregarClasses);

    //Manda a la pagina principal
    logo.addEventListener("click", () => {
        window.location.href="/";
    });

    if( conocenos ){
        conocenos.addEventListener("click", () => {
            window.location.href="/conocenos.html";
        });
    }

    solicitar.forEach( elemnt => {
        elemnt.addEventListener( "click", () => {
            window.location.href="/contactanos.html";
        });;
    });
}


function agregarClasses(){

    if( navmenu.classList.contains("active") ){
        navmenu.classList.remove("active");
    }else{
        navmenu.classList.add("active");
    }
}