import react from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function RegisterScreen({navigation}){
    const [name, setName] = react.useState('');
    const [email, setEmail] = react.useState('');
    const [password, setPassword] = react.useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Register Now</Text>

            <TextInput
                placeholder="Your Name"
                value={name}
                onChange={setName}
                autoCapitalize="none"
                style={styles.input}
            />
            
            <TextInput
                placeholder="Your Email"
                value={email}
                onChange={setEmail}
                autoCapitalize="none"
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChange={setPassword}
                secureTextEntry = {true}
                style={styles.input}
            />

            <Button title="Sigin Up" onPress={() => navigation.navigate('DashBoard')}/>
        </View>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#3b1010ff',
        padding:50
    },
    title: {
        fontSize: 30,
        color: '#9c5757ff',
        marginBottom: 50
    },
    input:{
        borderRadius:10,
        borderWidth:1,
        marginBottom: 15,
        width:'100%',
        borderColor: '#694949ff'
    }
});