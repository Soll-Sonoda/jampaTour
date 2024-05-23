const botaoLogoHome = document.getElementById('button-logo-home');

botaoLogoHome.addEventListener('click', () => {
  window.location.hash = '#home';
});