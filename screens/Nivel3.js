import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [tarefa, setTarefa] = useState(""); 
  const [lista, setLista] = useState([]);   

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setLista([...lista, { texto: tarefa, feito: false }]);
      setTarefa(""); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini App de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa..."
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Button title="Adicionar" onPress={adicionarTarefa} />

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text
              style={[
                styles.item,
                item.feito ? styles.concluida : styles.pendente,
              ]}
            >
              {item.texto}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    marginTop: 40 
  },
  title: { 
    fontSize: 24,
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 10 
  },
  item: { 
    fontSize: 18, 
    padding: 10, 
    borderRadius: 8, 
    marginTop: 5 
  },
  pendente: { 
    backgroundColor: "#fff" 
 },
  concluida: { 
    backgroundColor: "#d4edda", 
    textDecorationLine: "line-through", 
    color: "#6c757d" 
 },
});
