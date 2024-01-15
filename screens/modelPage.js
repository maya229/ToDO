import { useAppContext } from '../component/context';
import { StyleSheet, View, TextInput, Button, Modal, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { IconButton, } from 'react-native-paper';

function ModelPage() {
    const { openModal, closeModal, showModal, addHandler } = useAppContext();
    const [list, setList] = useState('');
    return (
        <SafeAreaView >
            <Modal isVisible={showModal} animationType='slide' style={styles.modal}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <IconButton
                        icon="close"
                        iconColor='black'
                        size={30}
                        onPress={closeModal}
                        mode='contained'
                        style={{ backgroundColor: '#fff' }}
                    />
                </View>
                <View style={styles.InputContainer}>
                    <View style={{ width: 350, height: 350 }}>
                        <Image source={require('../assets/images/modal.png')} style={styles.image} />
                    </View>

                    <TextInput
                        placeholder='Enter your goal'
                        value={list}
                        onChangeText={(newValue) => setList(newValue)}
                        style={styles.TextInput}
                    />
                    <View >
                        <TouchableOpacity style={styles.btn} onPress={() => addHandler(list)}>
                            <Text style={styles.btnText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </SafeAreaView >
    )
}
export default ModelPage;
const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-start',
        marginHorizontal: 60,
        backgroundColor: '#EFF4FA',
    },
    TextInput: {
        borderColor: 'gray',
        backgroundColor: '#fff',
        color: '#120438',
        borderRadius: 15,
        borderWidth: 1,
        width: '100%',
        marginHorizontal: 28,
        padding: 16,
        marginBottom: 30
    },
    InputContainer: {
        justifyContent: "center",
        alignItems: 'center',
        paddingBottom: 24,
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    btn: {
        borderRadius: 15,
        backgroundColor: '#90B9F5',
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 16,
        color: '#fff'
    },
});