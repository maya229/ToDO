import { useAppContext } from '../component/context';
import { StyleSheet, View, TextInput, Button, Modal, Image, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import ModelPage from './modelPage';
import { useState } from 'react';
import { IconButton, RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


function Home() {
    const { openModal, closeModal, showModal, data, deleteHandler } = useAppContext();
    const [click, setClick] = useState(false);
    const [done, setDone] = useState(false);
    const [doneItems, setDoneItems] = useState(Array(data.length).fill(false));
    const [selectedItem, setSelectedItem] = useState(null);
    const currentDate = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    }).format(currentDate);

    const clickHandler = (index) => {
        setSelectedItem(index);
        setClick(true);
    }
    const deleteHandlerr = (index) => {
        deleteHandler(index);
        setClick(false);
    }
    const doneHandler = (index) => {
        setDoneItems((prevDoneItems) => {
            const newDoneItems = [...prevDoneItems];
            newDoneItems[index] = true;
            return newDoneItems;
        });
        setSelectedItem(index);
        setClick(false);
    };

    return (
        <SafeAreaView style={styles.container} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 70 }}>
                <Text style={{ fontWeight: '800', fontSize: 20 }}>{formattedDate}</Text>
                <IconButton
                    icon="plus"
                    iconColor='#fff'
                    size={40}
                    onPress={openModal}
                    mode='contained'
                    style={{ backgroundColor: '#90B9F5' }}
                />
            </View>
            {data.length == 0 ? (
                <View style={{ width: 350, height: 650 }}>
                    <Image source={require('../assets/images/Nodata.png')} style={styles.image} />
                </View>
            ) : (
                <View>
                    <Text style={{ fontSize: 15 }}>{data.length} Tasks</Text>
                    <FlatList
                        style={styles.flatList}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => clickHandler(index)}>
                                <View style={styles.listItemContainer}>
                                    {doneItems[index] ? (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                                <Icon name="check" size={20} color='#90B9F5' />
                                            </TouchableOpacity>
                                            <Text style={{ color: 'gray', textDecorationLine: 'line-through' }}>{item}</Text>
                                        </View>
                                    ) : (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <RadioButton
                                                value={selectedItem === index}
                                                status={selectedItem === index ? 'checked' : 'unchecked'}
                                                onPress={() => doneHandler(index)}
                                                color='#90B9F5'
                                            />
                                            <Text>{item}</Text>
                                        </View>
                                    )}
                                    {selectedItem === index && click ? (
                                        <View style={styles.buttonContainer}>
                                            <IconButton
                                                icon={() => <Icon name="check" size={20} color='green' />}
                                                iconColor='green'
                                                size={20}
                                                onPress={() => doneHandler(index)}
                                                mode='outlined'
                                            // style={{ backgroundColor: 'green' }}
                                            />
                                            <IconButton
                                                icon={() => <Icon name="trash" size={20} color='red' />}
                                                iconColor='red'
                                                size={20}
                                                onPress={() => deleteHandlerr(index)}
                                                mode='outlined'
                                            />
                                        </View>
                                    ) : null}
                                </View>
                            </TouchableOpacity>

                        )}
                    />
                </View>
            )}


            {
                showModal ? (
                    <View>
                        <ModelPage />
                    </View>
                ) : null
            }
        </SafeAreaView >
    );
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF4FA',
        marginHorizontal: 30

    },
    flatList: {
        width: '100%', 
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        backgroundColor: '#fff',
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
