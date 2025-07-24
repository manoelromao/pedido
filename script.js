// === CONTADOR DE TEMPO DESDE 14/06/2025 ===
const contadorEl = document.getElementById('contador');
const dataInicio = new Date('2025-06-14T00:00:00');

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  contadorEl.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// === CORAÇÕES CAINDO ===
const heartsContainer = document.getElementById("hearts-container");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 4}s`; 

  // Tamanho e rotação inicial aleatórios
  const scale = Math.random() * 0.5 + 0.7;
  heart.style.transform = `scale(${scale}) rotate(${Math.random() * 360}deg)`;

  heartsContainer.appendChild(heart);

  // Remover após a animação
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Coração novo a cada 300ms
setInterval(criarCoracao, 200);

// Botões
const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseenter', () => {
  const container = document.querySelector('.botoes');
  const maxWidth = container.clientWidth - botaoNao.offsetWidth;
  const maxHeight = container.clientHeight - botaoNao.offsetHeight;

  const randX = Math.random() * maxWidth;
  const randY = Math.random() * maxHeight;

  botaoNao.style.left = `${randX}px`;
  botaoNao.style.top = `${randY}px`;
});

const botaoSim = document.querySelector('.botao-romantico');
const botoes = document.querySelector('.botoes');
const modalMensagem = document.getElementById('modalMensagem');
const fecharMensagem = document.getElementById('fecharMensagem');

botaoSim.addEventListener('click', () => {
  modalMensagem.classList.remove('escondido');
  botoes.style.display = 'none';
});

fecharMensagem.addEventListener('click', () => {
  modalMensagem.classList.add('escondido');
});

document.querySelector('.botao-romantico').addEventListener('click', () => {
    const modal = document.getElementById('modalMensagem');
    modal.classList.remove('escondido');
    modal.classList.add('fade-in');
  });

  document.getElementById('fecharMensagem').addEventListener('click', () => {
    const modal = document.getElementById('modalMensagem');
    modal.classList.add('escondido');
    modal.classList.remove('fade-in');
  });
    

