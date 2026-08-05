// Menu Responsivo

const menu = document.querySelector(".ul");
const menuImg = document.querySelector(".menu-icon img");

// Botão de Menu para Responsivos - Celulares e Tablets

function abrirMenu() {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        menuImg.src = "./img/close.png";
    } else {
        menuImg.src = "./img/menu.png";
    }
}


// Clica no Home, Sobre, Projetos, etc, e Depois fecha a aba

const links = document.querySelectorAll(".ul a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        menuImg.src = "./img/menu.png";
    });
});




// Animação Dos Pixels de Fundo

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

const colors = [
    "#ffffff",
    "#BFDBFE",
    "#93C5FD",
    "#C4B5FD"
];

for (let i = 0; i < 150; i++) {
    stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 7 + 2,
    color: colors[Math.floor(Math.random() * colors.length)]
});

}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

    // Rastro
    ctx.strokeStyle = star.color;
    ctx.lineWidth = star.r;
    ctx.beginPath();
    ctx.moveTo(star.x - star.speed * 8, star.y);
    ctx.lineTo(star.x, star.y);
    ctx.stroke();

    // Estrela
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    // Movimento
    star.x += star.speed;

    if (star.x > canvas.width) {
        star.x = 0;
        star.y = Math.random() * canvas.height;
    }
});

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

     stars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
    });
});


