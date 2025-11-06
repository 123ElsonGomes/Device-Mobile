import react, { useEffect }  from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";



export default function LoginScreen({navigation}) {

    const [username, setUsername] = react.useState('');
    const [password, setPassword] = react.useState('');
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="User"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChange={setPassword}
            secureTextEntry
            />
            

            <Button 
                title="To Go In"   
                onPress={() => alert('Login Clicked!')}
            />

            <Text 
                style={styles.link}
                onPress={()=> navigation.navigate('Register')}
            > 
            Don't have an account? Register!
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
    },
    input: {

    }
});