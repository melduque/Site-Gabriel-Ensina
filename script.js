async function carregarComentarios() {
    try {
        const response = await fetch('comentarios.json');
        const reviews = await response.json();
        const container = document.getElementById('reviews-container');
        
        container.innerHTML = ''; // Limpa o container
        reviews.forEach(r => {
            container.innerHTML += `
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm p-3 h-100 bg-light">
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