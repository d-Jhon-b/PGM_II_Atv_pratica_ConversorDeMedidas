import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { kmhParaMph, mphParaKmh } from './src/utils/conversores/quilometragem';
import { litrosParaGaloes,galoesParaLitros } from './src/utils/conversores/liquido';
import { celsiusParaFahrenheit, fahrenheitParaCelsius } from './src/utils/conversores/temperatura';
import { metrosParaPolegadas, polegadasParaMetros } from './src/utils/conversores/metragem';

export default function App() {
  const [valVelocidade, setValVelocidade] = useState('');
  const [resVelocidade, setResVelocidade] = useState('');

  const [valLiquido, setValLiquido] = useState('');
  const [resLiquido, setResLiquido] = useState('');

  const [valTemp, setValTemp] = useState('');
  const [resTemp, setResTemp] = useState('');

  const [valMetragem, setValMetragem] = useState('');
  const [resMetragem, setResMetragem] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>App Conversor de Medidas</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Velocidade (km/h ↔ mph)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={valVelocidade}
          onChangeText={setValVelocidade}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => setResVelocidade(`${kmhParaMph(Number(valVelocidade)).toFixed(2)} mph`)}>
            <Text style={styles.buttonText}>Para mph</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setResVelocidade(`${mphParaKmh(Number(valVelocidade)).toFixed(2)} km/h`)}>
            <Text style={styles.buttonText}>Para km/h</Text>
          </TouchableOpacity>
        </View>
        {resVelocidade ? <Text style={styles.result}>Resultado: {resVelocidade}</Text> : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Volume (Litros ↔ Galões EUA)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={valLiquido}
          onChangeText={setValLiquido}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => setResLiquido(`${litrosParaGaloes(Number(valLiquido)).toFixed(2)} gal`)}>
            <Text style={styles.buttonText}>Para Galão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setResLiquido(`${galoesParaLitros(Number(valLiquido)).toFixed(2)} L`)}>
            <Text style={styles.buttonText}>Para Litros</Text>
          </TouchableOpacity>
        </View>
        {resLiquido ? <Text style={styles.result}>Resultado: {resLiquido}</Text> : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Temperatura (°C ↔ °F)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={valTemp}
          onChangeText={setValTemp}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => setResTemp(`${celsiusParaFahrenheit(Number(valTemp)).toFixed(2)} °F`)}>
            <Text style={styles.buttonText}>Para °F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setResTemp(`${fahrenheitParaCelsius(Number(valTemp)).toFixed(2)} °C`)}>
            <Text style={styles.buttonText}>Para °C</Text>
          </TouchableOpacity>
        </View>
        {resTemp ? <Text style={styles.result}>Resultado: {resTemp}</Text> : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Comprimento (Metros ↔ Polegadas)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite o valor"
          value={valMetragem}
          onChangeText={setValMetragem}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => setResMetragem(`${metrosParaPolegadas(Number(valMetragem)).toFixed(2)} in`)}>
            <Text style={styles.buttonText}>Para in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setResMetragem(`${polegadasParaMetros(Number(valMetragem)).toFixed(2)} m`)}>
            <Text style={styles.buttonText}>Para m</Text>
          </TouchableOpacity>
        </View>
        {resMetragem ? <Text style={styles.result}>Resultado: {resMetragem}</Text> : null}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
    textAlign: 'center',
  },
});