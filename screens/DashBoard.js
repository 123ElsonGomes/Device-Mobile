import React from "react";
import { View, TextImput, Button, Text, StyleSheet} from "react-native";

export default function DashBoard({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Choose your level!</Text>
            <Button title='Nivel - 0' onPress={()=> navigation.navigate ('Nivel0')}/>
            
            <Button title='Nivel - 1' onPress={()=> navigation.navigate ('Nivel1')}/>

            <Button title='Nivel - 2' onPress={()=> navigation.navigate ('Nivel2')}/>

            <Button title='Nivel - 3' onPress={()=> navigation.navigate ('Nivel3')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#682424ff'
    },
    title: {
        fontSize: 30,
        color: '#9e8f8fff',
        marginBottom: 28,
        
    }
});