import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {

  const [hora, setHora] = useState('');

  useEffect(() => {

    const atualizarHora = () => {

      const agora = new Date();

      const horaFormatada =
        agora.toLocaleTimeString('pt-BR');

      setHora(horaFormatada);
    };

    atualizarHora();

    const intervalo =
      setInterval(atualizarHora, 1000);

    return () => clearInterval(intervalo);

  }, []);

  return (

    <View style={styles.container}>

      {/* RELÓGIO */}

      <View style={styles.relogioContainer}>

        <Text style={styles.textoHora}>
          {hora}
        </Text>

      </View>

      {/* BOTÕES */}

      <View style={styles.botoesContainer}>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={styles.textoBotao}>
            Perfil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Config')}
        >
          <Text style={styles.textoBotao}>
            Config
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Sobre')}
        >
          <Text style={styles.textoBotao}>
            Sobre
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Contato')}
        >
          <Text style={styles.textoBotao}>
            Contato
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101820',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50
  },

  relogioContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoHora: {
    fontSize: 55,
    color: '#ffffff',
    fontWeight: 'bold'
  },

  botoesContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30
  },

  botao: {
    width: '80%',
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 15,
    marginVertical: 8,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});