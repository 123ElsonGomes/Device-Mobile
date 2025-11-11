import React, { useState } from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";

export default function Nivel0({navigation}){
    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nivel - 0</Text>

            <TextInput
                placeholder= 'Name'
                value={name}
                onChange={setName}
                autoCapitalize='none'
                style={styles.input}
            />

            <Button title="Click here!" onPress={() => setCounter (counter + 1)}/>

            <Text style={styles.counter}>Contador: {counter}</Text>

            {name.length > 0 && (
                <Text style={styles.message}>You, {name}!</Text>
            )}

            {counter === 0 && (
                <Text style={styles.message}>Start by clicking the button!</Text>
            )}

            {counter > 0 && counter < 5 && (
                <Text style={styles.message}>Keep clicking! </Text>
            )}

            {counter >= 5 && (
                <Text style={styles.message}>Nice!</Text>
            )}

            <Button title="Back!" onPress={()=> navigation.navigate('DashBoard')}/>
        </View>
    );
}
const styles =StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d3d3dff',
        padding: 50
   },
    title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 8,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  counter: {
    fontSize: 16,
    marginTop: 10,
  },
    message: {
        fontSize: 16,
        color: "#be9b9bff",
        marginTop: 5,
        marginBottom: 15
  },
});