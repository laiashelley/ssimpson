document.addEventListener("DOMContentLoaded", function() {
    let aparicionPag1 = document.querySelector(".pagina1");
    let aparicionPag2 = document.querySelector(".pagina2");
    let aparicionPag3 = document.querySelector(".pagina3");
    let aparicionPag4 = document.querySelector(".pagina4");
    let aparicionPag5 = document.querySelector(".pagina5");
    let aparicionPag6 = document.querySelector(".pagina6");
    let aparicionPag7 = document.querySelector(".pagina7");

    setTimeout(() => {
        aparicionPag1.classList.remove("oculto");
    }, 2000);

    document.getElementById("next1").addEventListener('click', function() {
        aparicionPag1.classList.add("oculto");
        aparicionPag2.classList.remove("oculto");
    });
    
 
    document.getElementById("next2").addEventListener('click', function() {
        aparicionPag2.classList.add("oculto");
        aparicionPag3.classList.remove("oculto");
    });

    document.getElementById("next3").addEventListener('click', function() {
        aparicionPag3.classList.add("oculto");
        aparicionPag4.classList.remove("oculto");
    });

    document.getElementById("startPlay").addEventListener('click', function() {
        aparicionPag4.classList.add("oculto");
        aparicionPag5.classList.remove("oculto");
    });

    
    document.addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            document.getElementById("donuts").style.animationPlayState = "running";
            document.querySelector(".pagina5").style.animationPlayState = "running";
            document.getElementById("homer").style.animationPlayState = "running";
        }

        if (event.code === 'Space') {
            let distancia = calcularDistancia(document.getElementById("homer"), document.getElementById("donuts"));
            console.log("Calculated distance: " + distancia);

            if (distancia > 300) {
                colisionHomerDonutBad();
                let audio = new Audio("doh_r4RZcVw.mp3");
                audio.play();
            } else {
                colisionHomerDonutGood();
                let audio = new Audio("rosquilla-sound.wav");
                audio.play();
            }
        }
    });

    function colisionHomerDonutGood() {
        let contador1 = document.getElementById("contadorGOOD");
        let puntos1 = parseInt(contador1.innerText.split(": ")[1]) + 1;
        contador1.innerText = "Points to win: " + puntos1;

        if (puntos1 >= 10) {
            aparicionPagina6();
        }
    }

    function colisionHomerDonutBad() {
        let contador2 = document.getElementById("contadorBAD");
        let puntos2 = parseInt(contador2.innerText.split(": ")[1]) + 1;
        contador2.innerText = "Points to lose: " + puntos2;

        if (puntos2 >= 10) {
            aparicionPagina7();
        }
    }

    function calcularDistancia(elemento1, elemento2) {
        const rect1 = elemento1.getBoundingClientRect();
        const rect2 = elemento2.getBoundingClientRect();

        const centro1X = rect1.left + rect1.width / 2;
        const centro1Y = rect1.top + rect1.height / 2;

        const centro2X = rect2.left + rect2.width / 2;
        const centro2Y = rect2.top + rect2.height / 2;

        return Math.sqrt(Math.pow(centro2X - centro1X, 2) + Math.pow(centro2Y - centro1Y, 2));
    }


    function aparicionPagina6() {
        aparicionPag5.classList.add("oculto");
        aparicionPag6.classList.remove("oculto");
    }


    function aparicionPagina7() {
        aparicionPag5.classList.add("oculto");
        aparicionPag7.classList.remove("oculto");
    }


    document.getElementById("reinicioPag6").addEventListener('click', function() {
        location.reload();
    });
    
    document.getElementById("reinicioPag7").addEventListener('click', function() {
        location.reload(); 
    });
});