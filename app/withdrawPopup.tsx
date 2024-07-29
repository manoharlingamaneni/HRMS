import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function WithdrawPopup() {
    return (
        <View style={styles.container}>
            <View style={styles.popupContainer}>
                <TouchableOpacity style={styles.closeButton}>
                    <Entypo name="circle-with-cross" size={24} color="rgba(214, 40, 29, 1)" />
                </TouchableOpacity>
                <Text style={styles.title}>Withdraw Leave</Text>
                <Text style={styles.label}>Reason</Text>
                <TextInput 
                    style={styles.textInput}
                    multiline={true}
                    numberOfLines={10}
                    placeholder='Write Here'
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0",
        paddingTop: "40%",
        paddingBottom: "40%",
    },
    popupContainer: {
        backgroundColor: "#fff",
        height: "auto",
        paddingBottom: "15%",
    },
    closeButton: {
        alignItems: "center",
        top: -11,
    },
    title: {
        textAlign: "center",
        paddingTop: "1%",
    },
    label: {
        margin: "3%",
        paddingTop: "10%",
    },
    textInput: {
        height: 80,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        borderRadius: 4,
        margin: 10,
        paddingLeft: "2%",
        paddingTop: 1,
        paddingBottom: "5%",
        textAlignVertical: 'top',
    },
    buttonContainer: {
        alignItems: "center",
        width: "100%",
        marginTop: "8%",
    },
    submitButton: {
        alignItems: "center",
        width: "20%",
        backgroundColor: "rgba(99, 102, 255, 1)",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    submitButtonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "#fff",
        textAlign: "center",
    },
});
