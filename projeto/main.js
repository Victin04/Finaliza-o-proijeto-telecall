// Localstorage vou manter ele por aqui até então
function savelocalstorage() {
  var nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);

  var senha = document.getElementById("senha").value;
  localStorage.setItem("senha", senha);
};

// Botão que ativa e desatica o Night-mode
const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
  document.body.classList.toggle('night-mode')
});

function fazlogout() {
  localStorage.clear()
};

function redirectToAdminPage() {
  // Simulando uma requisição ao servidor para autenticação
  var usuario = prompt("Digite o nome de usuário:");
  var senha = prompt("Digite a senha:");

  // Verificando se as credenciais são válidas
  if (usuario === "adm" && senha === "123") {
      // Redireciona para a página de administração
      window.location.href = "sistema.php";
  } else {
      alert("Credenciais inválidas. Você não tem permissão para acessar.");
  }
}