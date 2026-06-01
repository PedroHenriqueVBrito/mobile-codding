import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function ConfigScreen() {

  const [notificacao, setNotificacao] =
    useState(true);

  const [modoEscuro, setModoEscuro] =
    useState(true);

  const [som, setSom] =
    useState(false);

  const [wifi, setWifi] =
    useState(true);

  function salvarConfiguracoes() {

    Alert.alert(
      'Configurações',
      'Configurações salvas com sucesso'
    );

  }

  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Configurações
      </Text>

      {/* NOTIFICAÇÕES */}

      <View style={styles.card}>

        <Text style={styles.texto}>
          Notificações
        </Text>

        <Switch
          value={notificacao}
          onValueChange={setNotificacao}
        />

      </View>

      {/* MODO ESCURO */}

      <View style={styles.card}>

        <Text style={styles.texto}>
          Modo Escuro
        </Text>

        <Switch
          value={modoEscuro}
          onValueChange={setModoEscuro}
        />

      </View>

      {/* SOM */}

      <View style={styles.card}>

        <Text style={styles.texto}>
          Sons do App
        </Text>

        <Switch
          value={som}
          onValueChange={setSom}
        />

      </View>

      {/* WIFI */}

      <View style={styles.card}>

        <Text style={styles.texto}>
          Usar Apenas Wi-Fi
        </Text>

        <Switch
          value={wifi}
          onValueChange={setWifi}
        />

      </View>

      {/* BOTÃO */}

      <TouchableOpacity
        style={styles.botao}
        onPress={salvarConfiguracoes}
      >

        <Text style={styles.textoBotao}>
          Salvar Configurações
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#101820',
    padding: 20
  },

  titulo: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#1c2833',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  texto: {
    color: '#fff',
    fontSize: 18
  },

  botao: {
    backgroundColor: '#1e90ff',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 20
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});