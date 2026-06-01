import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView
} from 'react-native';

export default function ContatoScreen() {

  function abrirLink(url) {
    Linking.openURL(url);
  }

  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Contatos & Redes
      </Text>

      {/* EMAIL */}

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          abrirLink('mailto:contato@email.com')
        }
      >

        <Text style={styles.nome}>
          📧 Email
        </Text>

        <Text style={styles.info}>
          contato@email.com
        </Text>

      </TouchableOpacity>

      {/* INSTAGRAM */}

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          abrirLink('https://instagram.com')
        }
      >

        <Text style={styles.nome}>
          📸 Instagram
        </Text>

        <Text style={styles.info}>
          @seuinstagram
        </Text>

      </TouchableOpacity>

      {/* WHATSAPP */}

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          abrirLink('https://wa.me/5500000000000')
        }
      >

        <Text style={styles.nome}>
          💬 WhatsApp
        </Text>

        <Text style={styles.info}>
          (00) 00000-0000
        </Text>

      </TouchableOpacity>

      {/* YOUTUBE */}

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          abrirLink('https://youtube.com')
        }
      >

        <Text style={styles.nome}>
          ▶ YouTube
        </Text>

        <Text style={styles.info}>
          Canal Oficial
        </Text>

      </TouchableOpacity>

      {/* DISCORD */}

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          abrirLink('https://discord.com')
        }
      >

        <Text style={styles.nome}>
          🤖 Discord
        </Text>

        <Text style={styles.info}>
          Comunidade Tech
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
    padding: 20
  },

  titulo: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#1c2833',
    padding: 20,
    borderRadius: 18,
    marginBottom: 18
  },

  nome: {
    color: '#1e90ff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5
  },

  info: {
    color: '#fff',
    fontSize: 16
  }

});