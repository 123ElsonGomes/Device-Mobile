import React from "react";
import {View, Text, Button, TextInput, StyleSheet} from "react-native";


export default function LoginScreen({navigation}){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.title}>WELCOME</Text>

            <TextInput
            placeholder="User Name"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            style={styles.input}
            />

            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry = {true}
            style={styles.input}
            />

            <Button title="login" onPress={() =>navigation.navigate('Register')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201212ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    title:{
        fontSize: 30,
        color: '#d8b6b6ff',
        marginBottom: 50
    },
    input:{
        borderColor:'#575b80ff',
        borderWidth:1,
        width: '100%',
        borderRadius: 10,
        marginBottom:15,
    },
});