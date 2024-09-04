document.addEventListener('DOMContentLoaded', () => {
    const carrinhoLink = document.getElementById('carrinho-link');
    const carrinhoSection = document.getElementById('carrinho');

    carrinhoLink.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão do link
        carrinhoSection.classList.toggle('hidden');
    });
});
