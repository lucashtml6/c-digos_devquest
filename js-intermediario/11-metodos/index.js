let usuario = {
  nome: 'Lucas',
  excluirUsuario: function () {
    console.log('O usuário ' + this.nome + ' foi excluído.');
  }
}

usuario.excluirUsuario();