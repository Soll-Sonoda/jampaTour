const botaoIrHome = document.getElementById('button-logo-home');
const homeDestino = document.getElementById('home');

const botaoIrServicos = document.getElementById('header-servicos');
const servicosDestino = document.getElementById('servicos');

const botaoIrSobreNos = document.getElementById('header-sobre-nos');
const sobreNosDestino = document.getElementById('sobre-nos');

const botaoIrContato = document.getElementById('header-contato');
const contatoDestino = document.getElementById('contato');


botaoIrHome.addEventListener('click', function() {
  homeDestino.scrollIntoView({
    behavior: 'smooth', // Rolagem suave
    block: 'start' // Alinhar o topo da seção com o topo da tela
  });
});

botaoIrServicos.addEventListener('click', function() {
  servicosDestino.scrollIntoView({
    behavior: 'smooth', // Rolagem suave
    block: 'start' // Alinhar o topo da seção com o topo da tela
  });
});

botaoIrSobreNos.addEventListener('click', function() {
  sobreNosDestino.scrollIntoView({
    behavior: 'smooth', // Rolagem suave
    block: 'start' // Alinhar o topo da seção com o topo da tela
  });
});

botaoIrContato.addEventListener('click', function() {
  contatoDestino.scrollIntoView({
    behavior: 'smooth', // Rolagem suave
    block: 'start' // Alinhar o topo da seção com o topo da tela
  });
});


