import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rodrigo Accioly</Text>

      <Image
        source={require('../fotominha/r.jpeg')}
        style={styles.image}
      />

      <Text style={styles.bio}>
        Olá! Sou Rodrigo, estudante de desenvolvimento mobile e web. Sou apaixonado por tecnologia.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 22,
  },
});
