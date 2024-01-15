import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { AppProvider } from './component/context';


export default function App() {
  const [openModel, setOpenModel] = useState(false);
  function OpenModelHandler() {
    setOpenModel(true);

  }
  return (
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#EFF4FA', }} >
        {openModel ? (
          <Home />
        ) : (
          <View style={styles.container}>
            <View style={{ width: 350, height: 650 }}>
              <Image source={require('./assets/images/Completed-amico.png')} style={styles.image} />
            </View>
            <View style={styles.txtv}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Welcome to ToDo </Text>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#9EA1A5', fontSize: 15, textAlign: 'center' }}>ToDo will help you stay organized and perform your tasks much better</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={OpenModelHandler}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FA',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    position: 'absolute',
    bottom: 70,
    borderRadius: 50,
    backgroundColor: '#90B9F5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: '#fff'
  },
  txtv: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 200,
  }
});


