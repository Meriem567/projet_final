import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { auth } from '../services/firebase';
import { signOut } from 'firebase/auth';

export default function HomeScreen({ navigation }) {
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Bienvenue 👋</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      {/* À PROPOS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>À propos de CampusUni</Text>
        <Text style={styles.cardText}>
          CampusUni est une application universitaire dédiée aux étudiants EMSI.
          Elle permet d’accéder aux informations académiques, aux filières,
          aux actualités et aux services étudiants depuis un seul endroit.
        </Text>
      </View>

      {/* OBJECTIFS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Objectifs de l’application</Text>
        <Text style={styles.cardText}>• Centraliser les informations universitaires</Text>
        <Text style={styles.cardText}>• Faciliter la communication étudiant–administration</Text>
        <Text style={styles.cardText}>• Offrir une expérience numérique moderne</Text>
      </View>

      {/* DÉCONNEXION */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f5f6fa',
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  email: {
    marginTop: 5,
    color: '#666',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
