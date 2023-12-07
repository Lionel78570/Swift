import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardPage = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Votre logique de déconnexion ici

    // Naviguer vers la page de connexion après la déconnexion
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require("./assets/background_accueil.png")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require("./assets/logo_swing.png")} style={styles.logo} />
      </View>
      <Image source={require("./assets/flou_home.png")} style={styles.flou}/>
      <View style={styles.allbtn}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Live</Text>
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
  flou: {
    width: '100%',
    height: '45%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allbtn: {
    position: 'absolute',
    bottom: 5,
    left: '35%',
    right: '35%',
  },
  button: {
    width: 361,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 21,
    marginBottom: 16,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default DashboardPage;
