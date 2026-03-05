// Carrega os comentários do arquivo JSON e os exibe na página
async function carregarComentarios() {
    try {
        const response = await fetch('comentarios.json');
        const reviews = await response.json();
        const container = document.getElementById('reviews-container');
        
        container.innerHTML = ''; // Limpa o container
        reviews.forEach(r => {
            container.innerHTML += `
                <div class="col-md-4">
                    <div class="card-comentario card border-0 shadow-sm p-3 h-100 bg-light">
                        <div class="text-warning mb-2">
                            ${'<i class="fas fa-star"></i>'.repeat(r.estrelas)}
                        </div>
                        <p class="fst-italic text-muted text-dark">"${r.texto}"</p>
                        <h6 class="fw-bold text-dark">- ${r.nome}</h6>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Erro ao carregar comentários:", error);
    }
}

carregarComentarios();

// Função para montar o menu dinamicamente
function montarMenu() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark sticky top" id="navbar">
            <div class="container-fluid px-4 py-2">
                <a class="navbar-brand" href="index.html">
                    <img src="./images/logo.png" alt="Gabriel Ensina" height="35">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto px-2 py-2">
                        <li class="nav-item"><a class="nav-link" href="sobre.html">Sobre Mim</a></li>
                        <li class="nav-item"><a class="nav-link" href="metodologia.html">Metodologia</a></li>
                        <li class="nav-item"><a class="btn btn-warning ms-lg-3 fw-bold" href="contato.html">Aula Experimental</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}   
montarMenu();

// Função para montar o rodapé dinamicamente
function montarRodape() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer class="py-4 bg-dark text-white text-center">
            <div class="container">
            <p class="mb-0">Gabriel Ensina | gabriel-ensina.com.br </p>
            </div>
        </footer>
    `;
}
montarRodape();

// Carrega a seção de cta dinamicamente
function montarCTA() {
    const cta = document.getElementById('cta-section');
    cta.innerHTML = `
        <section class="py-5 bg-warning text-dark text-center">
            <div class="container">
                <h2 class="mb-4">Quer aprender de verdade?</h2>
                <p class="mb-4">Agende uma aula experimental gratuita e descubra como posso te ajudar a dominar o inglês de forma rápida e eficaz!</p>
                <a href="contato.html" class="btn btn-dark btn-lg fw-bold">Agendar Aula Experimental</a>
            </div>
        </section>
    `;
}   
montarCTA();

// Função para adicionar botão Whatsapp flutuante
function adicionarBotaoWhatsapp() {
    const botaowpp = document.getElementById('whatsapp-direto');
    botaowpp.innerHTML = `
        <a href="https://wa.me/5535984180364" class="whatsapp-fixed shadow-lg text-decoration-none" target="_blank" aria-label="Falar no WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
    `;
}
adicionarBotaoWhatsapp();