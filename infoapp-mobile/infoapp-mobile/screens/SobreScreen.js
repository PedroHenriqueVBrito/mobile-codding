import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function SobreScreen() {

  return (

    <ScrollView contentContainerStyle={styles.container}>

      {/* TÍTULO */}

      <Text style={styles.titulo}>
        Sobre o Aplicativo
      </Text>

      {/* CARD */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Quem criou?
        </Text>

        <Text style={styles.texto}>
          Aplicativo desenvolvido por
          Pedro Henrique Vieira de Brito utilizando React Native
          no Snack Expo.
        </Text>

      </View>

      {/* CARD */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Objetivo do App
        </Text>

        <Text style={styles.texto}>
          Este aplicativo foi criado para
          demonstrar navegação entre telas,
          criação de perfil, sistema de
          configurações e área de contatos.
        </Text>

      </View>

      {/* CARD */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Tecnologias Utilizadas
        </Text>

        <Text style={styles.texto}>
          • React Native{"\n"}
          • Expo{"\n"}
          • JavaScript{"\n"}
          • React Navigation
        </Text>

      </View>

      {/* CARD */}

      <View style={styles.card}>

        <Text style={styles.subtitulo}>
          Versão
        </Text>

        <Text style={styles.texto}>
          Versão 1.0.0
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#101820',
    padding: 20,
    alignItems: 'center'
  },

  titulo: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30
  },

  card: {
    width: '100%',
    backgroundColor: '#1c2833',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20
  },

  subtitulo: {
    color: '#1e90ff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  texto: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24
  }

});