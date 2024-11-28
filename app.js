


                                //Mensaje "Enviado Con Exito" Formulario

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    const msg = document.getElementById('msg');
    msg.style.display = 'block';

    setTimeout(function() {
        msg.style.display = 'none';
    }, 500);     //Hace que el msg dure unos segundos , porque sino o se queda el msg o desaparece al instante 

    
    this.reset(); //reinicia el formulario a su valor inicial
});



                                // Seccion Sobre mi "Leer mas"

document.getElementById("toggleText").addEventListener("click", function() {
    var moreText = document.getElementById("moreText");
    var toggleText = document.getElementById("toggleText");
    
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        toggleText.innerHTML = "Leer menos"; // Cambiar el texto del enlace
    } else {
        moreText.style.display = "none";
        toggleText.innerHTML = "Leer más"; // Volver a "leer más"
    }
});


