import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texts}>Pedro Henrique Rampinelli</Text>
        <Text style={styles.texts}>RA: 1840028-2</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.title}>Itens do pedido:</Text>
            <View style={styles.itens}>
              <Text style={styles.itensText}>1x Coca 1L</Text>
              <Text style={styles.itensText}>1x Temaki Salmão G</Text>
              <Text style={styles.itensText}>6x Sushi de Salmão</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Entrega:</Text>
            <View style={styles.entrega}>
              <Text style={styles.itensText}>Rua Fluminense - 2157</Text>
              <Text style={styles.itensText}>Previsão para entrega: 30min a 50min</Text>
              <Text style={styles.itensText}>Tipo: Retirar na loja</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Pagamento:</Text>
              <View style={styles.itens}>
                <Text style={styles.itensText}>Pagamento na loja:  -------</Text>
                <Text style={styles.itensText}>Valor do pedido: R$ 53,90</Text>
                <Text style={styles.itensText}>Taxa de entrega: R$ 0,00</Text>
                <Text style={styles.itensText}>Valor Total: R$ 53,90</Text>
              </View>
          </View>
        </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  itens: {
    backgroundColor: '#ff0000',
    padding: 10,
  },
  entrega: {
    padding: 10,
    backgroundColor: '#ff0000',
  },
  container: {
     flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  header: {
    backgroundColor: '#ff0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  body: {
    backgroundColor: '#fff',
    flex: 7,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
  texts: {
    color: '#fff',
    fontSize: 15,
  },
  itensText: {
    color: '#000',
    fontSize: 17,
  },
  bodyTexts: {
    color: '#000',
    fontSize: 17,
  }
 });
