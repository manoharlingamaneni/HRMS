import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native';
import { AntDesign, EvilIcons, Entypo } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function PendingLeaves() {
    
    const navigation = useNavigation();

    const [expandedCards, setExpandedCards] = useState(false);
    const [showWithdrawPopup, setShowWithdrawPopup] = useState(false);
    const [reason, setReason] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleCard = (cardIndex) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [cardIndex]: !prevState[cardIndex],
        }));
    };

    const handleWithdraw = () => {
        setShowWithdrawPopup(true);
    };

    const handleSubmit = () => {
        setShowWithdrawPopup(false);
        setReason('');
        setIsSubmitted(true);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate("leaves")}>
                            <AntDesign name="left" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: 18, paddingLeft: 5, fontWeight: 400}}>Pending Leaves</Text>
                    </View>
                    <TouchableOpacity>
                        <EvilIcons name="bell" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={styles.leaveCard}>
                        <View style={styles.leaveHeader}>
                            <Text style = {{fontSize: 18, fontWeight: 400, }}>Leave</Text>
                            <TouchableOpacity style={styles.cardHeader} onPress={() => toggleCard(1)}>
                                <AntDesign name={expandedCards[1] ? "up" : "down"} size={16} color="rgba(99, 102, 255, 1)" />
                            </TouchableOpacity>
                        </View>
                        <Text style = {{fontSize: 14, fontWeight: 400, paddingTop: 1 }}>Work From Home</Text>
                        {expandedCards[1] && (
                            <View>
                                <View style={styles.leaveDates}>
                                    <Text>17 May 2024</Text>
                                    <View>
                                        <Text style={styles.dateText}>3 days</Text>
                                        <Text>---------------------</Text>
                                    </View>
                                    <Text>20 May 2024</Text>
                                </View>
                            </View>
                        )}
                    </View>
                    <View style={styles.leaveCard}>
                        <View style={styles.leaveHeader}>
                            <Text style = {{fontSize: 18, fontWeight: 400, }}>Leave</Text>
                            <TouchableOpacity style={styles.cardHeader} onPress={() => toggleCard(2)}>
                                <AntDesign name={expandedCards[2] ? "up" : "down"} size={16} color="rgba(99, 102, 255, 1)" />
                            </TouchableOpacity>
                        </View>
                        <Text style = {{fontSize: 14, fontWeight: 400,}}>Sick Leave</Text>
                        <View>
                            <View style={styles.leaveDates}>
                                <Text>17 May 2024</Text>
                                <View>
                                    <Text style={styles.dateText}>3 days</Text>
                                    <Text>---------------------</Text>
                                </View>
                                <Text>20 May 2024</Text>
                            </View>
                            <View style={styles.leaveDetails}>
                                <Text style={[styles.leaveInfo, {paddingTop: 10}]}>Start Session</Text>
                                <Text style={[styles.leaveInfo, {paddingTop: 10}]}>End Session</Text>
                            </View>
                            <View style={styles.leaveDetails}>
                                <Text>Sick Leave</Text>
                                <Text>Rajkumar</Text>
                            </View>

                            {expandedCards[2] && <View style={styles.divider} />}

                            {expandedCards[2] && (
                                <View>
                                    <View style={styles.leaveDetails}>
                                        <Text style={[styles.leaveInfo, {paddingTop: 10}]}>Applied to </Text>
                                        <Text style={{paddingTop: 10}}>Nagaraju Mengani </Text>
                                    </View>
                                    <View style={styles.leaveDetails}>
                                        <Text style={styles.leaveInfo}>Applied on </Text>
                                        <Text>Tue, 20 Apr, 2024 </Text>
                                    </View>
                                    <View style={styles.leaveDetails}>
                                        <Text style={styles.leaveInfo}>Contact </Text>
                                        <Text>9848245891 </Text>
                                    </View>
                                    <View style={styles.leaveDetails}>
                                        <Text style={styles.leaveInfo}>CC to </Text>
                                        <Text>Bhavani Yerrola </Text>
                                    </View>
                                    <View>
                                        <Text style={{marginTop: 10}}>Dear Sir,</Text>
                                        <Text>is simply dummy text of the printing and typesetting industry. also to have</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingTop: 10 }}>
                                        <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
                                            <Text style={styles.buttonText}>Withdraw</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                </ScrollView>

                {showWithdrawPopup && (
                    <Modal
                        transparent={true}
                        visible={showWithdrawPopup}
                        onRequestClose={() => setShowWithdrawPopup(false)}
                    >
                        <View style={styles.withdrawContainer}>
                            <View style={styles.popupContainer}>
                                <TouchableOpacity style={styles.closeButton} onPress={() => setShowWithdrawPopup(false)}>
                                    <Entypo name="circle-with-cross" size={24} color="rgba(214, 40, 29, 1)" />
                                </TouchableOpacity>
                                <Text style={styles.title}>Withdraw Leave</Text>
                                <Text style={styles.label}>Reason</Text>
                                <TextInput
                                    style={styles.textInput}
                                    multiline={true}
                                    numberOfLines={10}
                                    placeholder='Write Here'
                                    value={reason}
                                    onChangeText={setReason}
                                />
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                                        <Text style={styles.submitButtonText}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}

                {isSubmitted && (
                    <View style={styles.successContainer}>
                        <Text style={styles.successText}>Submitted Successfully!</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(99, 102, 255, 1)",
        height: 45,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 6,
    },
    leaveHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingTop: -10,
        marginTop: -8,
        marginBottom: -5,
        // paddingBottom: -20,
    },
    leaveCard: {
        borderWidth: 1,
        borderColor: "#6366FF",
        borderRadius: 4,
        padding: 10,
        margin: 10,
    },
    leaveDates: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
        paddingTop: 15,
    },
    leaveDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    dateText: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 14,
        color: "#888888",
        marginBottom: -10,
    },
    withdrawButton: {
        backgroundColor: "rgba(99, 102, 255, 1)",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "#fff",
        textAlign: "center",
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    successContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    successText: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
    },
    withdrawContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: "2%",
    },
    popupContainer: {
        backgroundColor: "#fff",
        // padding: 20,
        // borderRadius: 10,
        paddingBottom: 50,
        width: '100%',
        margin: "2%",
    },
    closeButton: {
        alignItems: "center",
        marginBottom: 10,
        top: -12,
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        marginBottom: 1,
        margin: "4%",
    },
    textInput: {
        height: 80,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        borderRadius: 4,
        // paddingTop: 1,
        marginTop: 2,
        paddingLeft: 8,
        textAlignVertical: 'top',
        marginBottom: 15,
        margin: "4%",
    },
    buttonContainer: {
        alignItems: "center",
        paddingTop: 15,
    },
    submitButton: {
        backgroundColor: "rgba(99, 102, 255, 1)",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    leaveInfo: {
        color: "rgba(96, 96, 96, 1)",
    }
}); 