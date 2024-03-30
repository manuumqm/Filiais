import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title title="Home" />

        <View>
          <Image style={styles.img} source={require('../../../assets/avante.png')} />
          <Text style={styles.titulo}>ESCOLA AVANTE</Text>
          <View style={styles.txt}>
            <Text>A Escola Avante é uma instituição de ensino que se destaca por sua abordagem educacional inovadora e centrada no aluno. Localizada em uma área urbana, a escola tem como missão promover o desenvolvimento integral de seus estudantes, enfatizando não apenas o conhecimento acadêmico, mas também o desenvolvimento socioemocional e as habilidades para a vida.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
