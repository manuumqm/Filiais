import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import usersRepository from "../../models/user/UserRepository";
import { ScrollView } from "react-native-gesture-handler";

export default function Users() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = usersRepository.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="Filiais" />
      <Text style={styles.txt}>Tela de listagem de todas as filiais</Text>

      {allUsers.length > 0 ? (
        <ScrollView>
          <View style={styles.userList}>
            {allUsers.map((user) => (
              <View style={styles.box}>
                <View key={user.id} style={styles.userItem}>
                  <View>
                    <Text style={styles.userName}>{user.name}</Text>
                  </View>

                  <View style={styles.userActions}>
                    <TouchableOpacity
                      style={styles.detailsButton}
                      onPress={() => navigation.navigate("Profile", { data: user })}
                    >
                      <Text>Detalhes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text>Não há filiais cadastrados</Text>
      )}
    </View>
  );
}
