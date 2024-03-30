import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Desenvolvedora() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title title="Desenvolvedora" />

        <View>
          <Image style={styles.img} source={require('../../../assets/manu.jpeg')} />
          <Text style={styles.titulo}>Manuela Queiroz Machado</Text>
          <View style={styles.txt}>
            <Text>Sou aluna do curso de Desenvolvimento de Sistemas do SENAI-Valinhos, tenho 16 anos e uma das coisa que mais gosto de fazer é ler e ouvir música. </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}