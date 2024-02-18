let codigo="";
let url="https://api.unsplash.com/search/photos?page=1&query=category&client_id=PdJcmXctwT5CNahoKlmiP7lBK4nx6HwkYdF9VtLf6pM";


//let Arregloimagenes=[];
let buscarInput=document.querySelector("#buscar-input");
let contenedorImagenesGlobal=document.querySelector("#contenedor-imagenes"); 
let limpiarInput=document.querySelector("#input-limpiar");

console.log(limpiarInput);


buscarInput.addEventListener('keypress',(e)=>{
    let valor=e.target.value;
    if(e.key==='Enter'){
        readPhotos(valor);
        limpiarInput.value="";
    }


});



async function  readPhotos(busqueda){
    const  response=  await fetch(`https://api.unsplash.com/search/photos?page=1&query=${busqueda}&client_id=PdJcmXctwT5CNahoKlmiP7lBK4nx6HwkYdF9VtLf6pM`);


    const data=  await response.json();
    let resultado=data.results;
   // console.log(resultado);
   //resultado.forEach(imagen => {
   //        imagen=imagen.links.download;
   //          Arregloimagenes.push(imagen);       
   //     });
   //     console.log(Arregloimagenes);
   printHTML(resultado);
   
 

}
let contenedorImagenes;

function  printHTML(resultado){
    limpiarHTML();
    console.log(resultado);
    contenedorImagenes="";

    resultado.forEach(imagenes=>{
        contenedorImagenes+=`<div class="imagen">
                <img
                  class="bg-image"
                 src="${imagenes.links.download}"
                alt=""
                />
                <div class="capa">
               <button>Guardar</button>    
             </div>
            <div class="contenedor-iconos-imagenes">
             <div class="icono-1">
             <img src="img/descargas-_1_.svg">
             </div>
            <div class="icono-2">
                 <img src="img/cinematografia.svg">
                 </div>       
                 </div>
                </div>
            `
        });

        contenedorImagenesGlobal.innerHTML=contenedorImagenes;
    }

        // contenedorImagenes.innerHTML=` 
                        // <div class="imagen">
                                // <img
                                    //   class="bg-image"
                                    //  src="${imagenes.links.download}"
                                    // alt=""
                                    // />
                                // <div class="capa">
                            //    <button>Guardar</button>    
                                //  </div>
                                // <div class="contenedor-iconos-imagenes">
                                //  <div class="icono-1">
                                //  <img src="img/descargas.svg">
                                //  </div>
                                // <div class="icono-2">
                                // <img src="img/cinematografia.svg">
                                // </div>       
                            //  </div>
                    // </div> 
                    // `
   





function limpiarHTML(){
    contenedorImagenesGlobal.innerHTML="";
}