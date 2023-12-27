import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Modal, Portal } from 'react-native-paper';
import { styles } from "./style";
import BackButton from '../../../../shared/BackButton/BackButton';

export default function CameraModal(props) {
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        sair();
        props.abrirInfoProduto(data);
    };

    function sair() {
        props.setVisibleScan(false);
    }

    return (
        <Portal>
            <Modal
                visible={props.visible}
                style={{ backgroundColor: "rgba(0, 0, 0, 1)", marginTop: 0 }}>
                <View style={styles.container}>
                    {hasPermission && (
                        <BarCodeScanner
                            onBarCodeScanned={handleBarCodeScanned}
                            style={StyleSheet.absoluteFillObject}
                        />
                    )}
                    <View style={{ width: 100, marginTop: 0, paddingTop: 10, height: 550, marginLeft: 10 }}>
                        <BackButton onPress={sair}>Sair</BackButton>
                    </View>
                    <View style={{ width: 400, height: 150, marginLeft: 10 }}>
                        <Text style={styles.titulo}>Aponte a câmera para o código de barras do produto</Text>
                    </View>
                </View>
            </Modal>
        </Portal>
    );
}
