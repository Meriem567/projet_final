import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔐 Domaine universitaire autorisé
  const emsiEmailRegex = /^[a-zA-Z0-9._-]+@emsi-edu\.ma$/;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez renseigner tous les champs');
      return;
    }

    if (!emsiEmailRegex.test(email)) {
      Alert.alert(
        'Email invalide',
        'Veuillez utiliser votre email universitaire (@emsi-edu.ma)'
      );
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Redirection après connexion
        navigation.replace('Main');
    } catch (error) {
      Alert.alert(
        'Erreur de connexion',
        'Email ou mot de passe incorrect'
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusUni</Text>

      <Text style={styles.subtitle}>
        Connexion avec votre compte universitaire
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email universitaire"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.link}>
          Activer mon compte universitaire
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    color: '#1e90ff',
    textAlign: 'center',
  },
});
