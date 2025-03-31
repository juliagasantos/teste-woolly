//cnpj
document.getElementById('cnpj').addEventListener('input', function (e) {
  let cnpj = e.target.value;


  cnpj = cnpj.replace(/\D/g, '');

  if (cnpj.length <= 2) {
    cnpj = cnpj.replace(/^(\d{2})/, '$1');
  } else if (cnpj.length <= 5) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})/, '$1.$2');
  } else if (cnpj.length <= 8) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
  } else if (cnpj.length <= 12) {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4');
  } else {
    cnpj = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }


  e.target.value = cnpj;
});


//tel
document.getElementById('telefone').addEventListener('input', function (e) {
  let telefone = e.target.value;

  telefone = telefone.replace(/\D/g, '');

  if (telefone.length <= 2) {
    telefone = telefone.replace(/^(\d{2})/, '($1');
  } else if (telefone.length <= 6) {
    telefone = telefone.replace(/^(\d{2})(\d{5})/, '($1) $2');
  } else {
    telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  e.target.value = telefone;
});


//video
function loadVideo() {
  document.querySelector(".videoContainer").innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/Oa0ZHfcalCM?autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&autohide=0&start=0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            style="width: 80vw; height: 50vw; display: block; margin: 0 auto;">
        </iframe>`;
}

