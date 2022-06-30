import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

const colorGithub = '#010409';
const app = ()=>{
        return (
            <SafeAreaView style={style.container}>
                <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
        <View>
            <Text style={style.text}>Olá humana!</Text>
        </View>
            </SafeAreaView>
        );
};

export default app;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir p tela inteira 
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
    }

});