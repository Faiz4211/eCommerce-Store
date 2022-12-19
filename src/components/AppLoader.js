import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';

const AppLoader = () => {
    useEffect(() => {
        setTimeout(() => {
            <LottieView />
        }, 7000);
    }, [])
    const [modalVisible, setModalVisible] = useState(true);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <LottieView
                            source={require('../assets/loader.json')} autoPlay loop />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default AppLoader;