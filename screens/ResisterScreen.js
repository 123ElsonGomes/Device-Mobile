import react from "react";
import {View, Text, Button, StyleSheet} from 'react-native';


export default function ResisterScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Go to Gogin</Text>
            <Button
                title="Back to screenn"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});