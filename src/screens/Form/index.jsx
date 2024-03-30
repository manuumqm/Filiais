import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";
import { ScrollView } from "react-native-gesture-handler";

export default function Form({ route }) {
  let { user, edit } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fundacao, setFundacao] = useState("");
  const [funcionarios, setFuncionarios] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(user.name);
      setEmail(user.email);
      setFundacao(user.fundacao);
      setFuncionarios(user.funcionarios);
      setTelefone(user.telefone);
      setEndereco(user.endereco);
      setResponsavel(user.responsavel);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      usersRepository.update(user.id, name, email, fundacao, funcionarios, telefone, endereco, responsavel);
      clearInputs();
    } else {
      const newUser = new User(name, email, fundacao, funcionarios, telefone, endereco, responsavel);
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setEmail("");
    setFundacao("");
    setFuncionarios("");
    setTelefone("");
    setEndereco("");
    setResponsavel("");
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Title style={styles.titulo} title={isUpdate ? "Editar Filial" : "Nova Filial"} />
      <TextInput
        placeholder="Digite o nome da filial"
        style={styles.userInput}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Digite o email da filial"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite o ano de fundação da filial"
        style={styles.userInput}
        onChangeText={setFundacao}
        value={fundacao}
        keyboardType="numeric"
      />
       <TextInput
        placeholder="Digite a quantidade de funcionários da filial"
        style={styles.userInput}
        onChangeText={setFuncionarios}
        value={funcionarios}
        keyboardType="numeric"
      />
       <TextInput
        placeholder="Digite o telefone da filial"
        style={styles.userInput}
        onChangeText={setTelefone}
        value={telefone}
        keyboardType="numeric"
      />
       <TextInput
        placeholder="Digite o endereço da filial"
        style={styles.userInput}
        onChangeText={setEndereco}
        value={endereco}
      />
       <TextInput
        placeholder="Digite o nome do responsável pela filial"
        style={styles.userInput}
        onChangeText={setResponsavel}
        value={responsavel}
      />

      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Filial"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
    </ScrollView>
  );
}
