import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorDarkFontGithub = '#4f56se';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/98976962?v=4';
const urlToMyGithub = 'https://github.com/pripia'
const app = ()=>{
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
      const res = await Linking.canOpenURL(urlToMyGithub);
      if(res) { 
          console.log('Link aprovado');
          console.log('Abrindo o link...');
        await Linking.openURL(urlToMyGithub);
      }
    }
        return (
            <SafeAreaView style={style.container}>
                <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
        <View style={style.content}>
            <Image 
            accessibilityLabel='Priscila em um local iluminado'
            style={style.avatar} source={{uri: imageProfileGithub}} 
            />
            <Text accessibilityLabel='Nome Priscil Paiva' style={[style.defaultText, style.name]}>Priscila Paiva</Text>
            <Text accessibilityLabel='Nome de usuário pripia' style={[style.defaultText, style.nickname]}>pripia</Text>
            <Text accessibilityLabel='descrição: young padawan on coding' style={[style.defaultText, style.descricao]}>Young padawan on coding.</Text>
        
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
        </View>
        </Pressable>
        </View>
            </SafeAreaView>
        );
};

export default app;

const style = StyleSheet.create({
    container: { //column
        backgroundColor: colorGithub,
        flex: 1, //expandir p tela inteira 
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20, 
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: 'white',
    },
    name: {
        marginTop: 20, 
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    descricao: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});