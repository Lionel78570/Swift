import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const handleLogin = () => {
    // Votre logique d'authentification ici

    // Naviguer vers la page Dashboard si la connexion réussit
    navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground source={require("./assets/background_login.png")} style={styles.backgroundImage}> 
        <View style={styles.container}>  
            <Image source={require("./assets/logo_swing.png")} style={styles.logo} />
            <Text style={styles.title}>Login</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Mot de passe"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                <View style={styles.separatorContainer}>
                    <View style={styles.separator}></View>
                    <Text style={styles.orText}>or</Text>
                <View style={styles.separator}></View>
                </View>
                <TouchableOpacity style={styles.google} onPress={handleLogin}>
                <Image source={require("./assets/google.png")} style={styles.logogoogle}/>
                    <Text style={styles.buttonText}>login with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebook} onPress={handleLogin}>
                    <Image source={require("./assets/facebook.png")} style={styles.logofb}/>
                    <Text style={styles.buttonText}>login with Facebook</Text>
                </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: 'white',
        alignItems: 'flex-start',
    },
    input: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 21,
        marginBottom: 16,
        padding: 8,
        width: '100%',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    button: {
        borderRadius: 35.83,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: 'rgba(84, 149, 44, 0.42)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 16,
        width: 206,
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'white',
    },
    orText: {
        color: 'white',
        marginHorizontal: 10,
        fontSize: 16,
    },
    google: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 35.83,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 16,
        width: '100%',
        textTransform: 'none',
    },

    facebook: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 35.83,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 16,
        width: '100%',
    },

    logogoogle: {
        marginRight: 35,
        marginLeft: -20,
    },
    logofb: {
        marginRight: 40,
    },
});

export default LoginPage;
