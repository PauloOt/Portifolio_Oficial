// Mostrar botão ao descer
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    // Usa 'block' se o scroll for maior que 300px, senão 'none'
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

// Subir suave
btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- ANIMAÇÃO DE ROLAGEM (INTERSECTION OBSERVER) ---
const sections = document.querySelectorAll('section');

// Configurações do Observador
const observerOptions = {
    root: null, // O viewport
    threshold: 0.1 // Executa quando 10% da seção estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe de animação ('visible') à seção visível
            entry.target.classList.add('visible');
            
            // Se você quiser que a animação só ocorra na primeira vez que a seção é vista,
            // descomente a linha abaixo:
            // observer.unobserve(entry.target); 
        } 
        /* Para reverter a animação quando sair da tela, use o 'else' 
        else {
            entry.target.classList.remove('visible');
        }
        */
    });
}, observerOptions);

// Aplica o observador a todas as seções
sections.forEach(section => {
    // A classe 'animate-on-scroll' deve estar definida no CSS para o estado inicial
    section.classList.add('animate-on-scroll');
    observer.observe(section);
});
// ----------------------------------------


// Inicialização do Particles.js (CONFIGURADO PARA CIANO NEON)
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Número de partículas
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00FFFF" // Cor das partículas (Cor de Detalhe: Ciano Neon)
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#36627f", // Cor das linhas (Cor de Detalhe Escura: Azul Ciano Mais Escuro)
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Efeito ao passar o mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_number": 4
            },
            "remove": {
                "particles_number": 2
            }
        }
    },
    "retina_detect": true
});