import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Nivel1({navigation}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleShowMessage = () => {
    if (!name || !age) {
      setMessage("Please, preencha todos os campos!");
      return;
    }

    const idadeNum = parseInt(age); 

    if (idadeNum < 18) {
      setMessage(`You ${name}, ainda é menor de idade.`);
    } else {
      setMessage(`Bem-vindo(a), ${name}!`);
    }

    setName("");
    setAge("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nivel 1</Text>

      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Button title="Display Message" onPress={handleShowMessage} />
      
      <Button title="Back!" onPress={()=> navigation.navigate('DashBoard')}/>
      

      {message.length > 0 && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    width: 220,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: "#2c3e50",
    fontWeight: "bold",
  },
});
