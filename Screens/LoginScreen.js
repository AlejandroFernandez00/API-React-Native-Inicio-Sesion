import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import * as Google from 'expo-google-app-auth'

export default class LoginScreen extends Component{

    // Acuerdense de poner su key de Google Console
    async _signInWithGoogle(){

        try {
            const result = await Google.logInAsync({
                androidClientId: "710265874392-38rn67t9n69clqv7n1cab8udpvag4bu6.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });
    
            if (result.type === 'success') {
                try {
                    this.props.onLogin();
                } catch (error){
                    console.log("Something happened " + error);
                }
            } else {
                return { cancelled: true };
            }

        } catch (e) {
            return { error: true };
        }

    }

    render(){
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this._signInWithGoogle()}
                    title="Iniciar sesión con Google"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});