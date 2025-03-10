/*.carousel-inner(.conteiner-sobre) .carousel(.Sobre-nos)*/
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Draggable);
  
    Draggable.create(".conteiner-sobre", {
      type: "x",
      bounds: ".Sobre-nos",
      inertia: true, // Faz o arrasto continuar com inércia
      edgeResistance: 0.5, // Reduz a velocidade ao chegar no final
      cursor: "grab"
    });
});