// v0.2
document.querySelectorAll('.obra-card').forEach((card) => {
  const sinopse = card.querySelector('.obra-sinopse');

  if (!sinopse) {
    return;
  }

  const container = document.createElement('div');
  const botao = document.createElement('button');

  container.className = 'obra-sinopse-container';
  botao.className = 'obra-expandir';
  botao.type = 'button';
  botao.textContent = 'ver mais';
  botao.hidden = true;
  botao.setAttribute('aria-expanded', 'false');

  sinopse.parentNode.insertBefore(container, sinopse);
  container.appendChild(sinopse);
  container.appendChild(botao);

  requestAnimationFrame(() => {
    if (sinopse.scrollHeight > sinopse.clientHeight) {
      botao.hidden = false;
    }
  });

  botao.addEventListener('click', () => {
    const expandida = sinopse.classList.toggle('expandida');

    botao.textContent = expandida ? 'ver menos' : 'ver mais';
    botao.setAttribute('aria-expanded', String(expandida));
  });
});

document.querySelectorAll('.obras-carrossel').forEach((carrossel) => {
  const lista = carrossel.querySelector('.obras-lista');
  const anterior = carrossel.querySelector('.carrossel-anterior');
  const proximo = carrossel.querySelector('.carrossel-proximo');

  if (!lista || !anterior || !proximo) {
    return;
  }

  const atualizarBotoes = () => {
    const limiteFinal = lista.scrollWidth - lista.clientWidth;
    const temRolagem = limiteFinal > 1;

    carrossel.classList.toggle('tem-rolagem', temRolagem);
    anterior.disabled = !temRolagem || lista.scrollLeft <= 1;
    proximo.disabled = !temRolagem || lista.scrollLeft >= limiteFinal - 1;
  };

  anterior.addEventListener('click', () => {
    lista.scrollBy({
      left: -lista.clientWidth,
      behavior: 'smooth'
    });
  });

  proximo.addEventListener('click', () => {
    lista.scrollBy({
      left: lista.clientWidth,
      behavior: 'smooth'
    });
  });

  lista.addEventListener('scroll', atualizarBotoes);
  window.addEventListener('resize', atualizarBotoes);
  window.addEventListener('load', atualizarBotoes);

  requestAnimationFrame(atualizarBotoes);
});