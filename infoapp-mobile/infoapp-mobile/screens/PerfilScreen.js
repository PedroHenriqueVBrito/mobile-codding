import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';

export default function PerfilScreen() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function criarPerfil() {

    if (
      nome === '' ||
      idade === '' ||
      email === '' ||
      senha === ''
    ) {
      Alert.alert(
        'Erro',
        'Preencha todos os campos'
      );

      return;
    }

    Alert.alert(
      'Perfil Criado',
      `Bem-vindo ${nome}`
    );
  }

  return (

    <ScrollView
      contentContainerStyle={styles.container}
    >

      <Text style={styles.titulo}>
        Criar Perfil
      </Text>

      {/* NOME */}

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      {/* IDADE */}

      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      {/* EMAIL */}

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* SENHA */}

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      {/* BOTÃO */}

      <TouchableOpacity
        style={styles.botao}
        onPress={criarPerfil}
      >

        <Text style={styles.textoBotao}>
          Criar Perfil
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#101820',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold'
  },

  input: {
    width: '100%',
    backgroundColor: '#1c2833',
    color: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    fontSize: 16
  },

  botao: {
    width: '100%',
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});