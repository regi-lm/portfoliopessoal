//function enviarWhats(event) {
    //event.preventDefault()

    //const nome = document.getElementById("nome").value;
    //const mensagem = document.getElementById("mensagem").value;
    //const telefone = "5591984536649";

    //const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    //const msgFormatada = encodeURIComponent(texto);

    //const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    //window.open(url, "_blank");
//}

function enviarWhats(event) {
    event.preventDefault(); // Impede envio direto

    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");

    // Reset estilos
    [nome, mensagem].forEach((campo) => {
      campo.classList.remove("alerta");
      campo.placeholder = campo.getAttribute("data-placeholder-original");
    });

    let erro = false;

    if (!nome.value.trim()) {
      nome.classList.add("alerta");
      nome.placeholder = "Preencha o campo";
      erro = true;
    }

    if (!mensagem.value.trim()) {
      mensagem.classList.add("alerta");
      mensagem.placeholder = "Preencha o campo";
      erro = true;
    }

    if (erro) return;

    // Aqui você pode colocar seu envio pro WhatsApp, por exemplo:
    const telefone = "5591984536649";
    const texto = `Olá! Me chamo ${nome.value}, ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");

    document.getElementById("formulario").reset();
  }

  // Salva os placeholders originais ao carregar
  window.addEventListener("DOMContentLoaded", () => {
    const campos = document.querySelectorAll(".campo-form");
    campos.forEach((campo) => {
      campo.setAttribute("data-placeholder-original", campo.placeholder);
    });
  });