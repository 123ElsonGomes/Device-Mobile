import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Nivel2({navigation}) {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetar = () => setContador(0);

  const corTexto =
    contador > 0 ? styles.verde : contador < 0 ? styles.vermelho : styles.preto;

  return (
    <View style={styles.container}>
      <Text style={[styles.texto, corTexto]}>
        Counter: {contador}
      </Text>

      <View style={styles.botoes}>
        <Button title="+" onPress={incrementar} />
        <Button title="-" onPress={decrementar} />
        <Button title="Reset" onPress={resetar} />
      </View>
      
      <Button title="Back!" onPress={()=> navigation.navigate('DashBoard')}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  texto: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
  },
  botoes: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15
  },
  verde: { color: "green" },
  vermelho: { color: "red" },
  preto: { color: "black" },
});
