import { user } from "../../data/Profile";
import User from "./User";

class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, name, email, fundacao, funcionarios, telefone, endereco, responsavel) {
    const user = this.get(id);

    if (user) {
      user.name = name;
      user.email = email;
      user.fundacao = fundacao;
      user.funcionarios = funcionarios;
      user.telefone = telefone;
      user.endereco = endereco;
      user.responsavel = responsavel;
    }
    return user;
  }
}

const usersRepository = new UsersRepository();
const newUser = new User(user.name, user.email, user.fundacao, user.funcionarios, user.telefone, user.endereco, user.responsavel);

usersRepository.add(newUser);

export default usersRepository;
