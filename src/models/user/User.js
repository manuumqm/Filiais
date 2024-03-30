export default class User {
  constructor(name, email, fundacao, funcionarios, telefone, endereco, responsavel) {
    this.id = this.generateId();
    this.name = name;
    this.email = email;
    this.fundacao = fundacao;
    this.funcionarios = funcionarios;
    this.telefone = telefone;
    this.endereco = endereco;
    this.responsavel = responsavel;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
