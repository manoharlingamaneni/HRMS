import { StyleSheet, Text, TouchableOpacity, View, fieldset, legend, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';

export default function HistoryLeaves() {

    const [expandedCards, setExpandedCards] = useState(false);

    const [casualLeave, setCasualLeave] = useState(false);
    const [sickLeave, setSickLeave] = useState(false);
    const [specialLeave, setSpecialLeave] = useState(false);
    const [comfortLeave, setComfortLeave] = useState(false);
    const [workFromHome, setWorkFromHome] = useState(false);

    const toggleCard = (cardIndex) => {
        setExpandedCards(prevState => ({
            ...prevState,
            [cardIndex]: !prevState[cardIndex],
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ color: "#fff", fontSize: 18, paddingLeft: 5, fontWeight: 400 }}> Leaves History</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="bell" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={[styles.checkboxContainer, { marginTop: 20 }]}>
                    <View style={styles.leaveOption}>
                        <CheckBox
                            value={casualLeave}
                            onValueChange={setCasualLeave}
                            style={styles.checkBox}
                        />
                        <Text style={styles.leaveOptionText}>Casual Leave</Text>
                        <CheckBox
                            value={sickLeave}
                            onValueChange={setSickLeave}
                            style={styles.checkBox}
                        />
                        <Text style={styles.leaveOptionText}>Sick Leave</Text>
                        <CheckBox
                            value={specialLeave}
                            onValueChange={setSpecialLeave}
                            style={styles.checkBox}
                        />
                        <Text style={styles.leaveOptionText}>Special Leave</Text>

                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <View style={styles.leaveOption}>
                        <CheckBox
                            value={comfortLeave}
                            onValueChange={setComfortLeave}
                            style={styles.checkBox}

                        />
                        <Text style={styles.leaveOptionText}>Comfort Leave</Text>
                        <CheckBox
                            value={workFromHome}
                            onValueChange={setWorkFromHome}
                            style={styles.checkBox}
                        />
                        <Text style={styles.leaveOptionText}>Work From Home</Text>
                    </View>
                </View>

                <fieldset style={styles.leaveDetails}>
                    <legend style={styles.legend}>Approved</legend>
                    <View>
                        <View style={styles.leaveHeader}>
                            <Text style={{ fontSize: 18, fontWeight: 400, }}>Leave</Text>
                            <TouchableOpacity style={styles.cardHeader} onPress={() => toggleCard(1)}>
                                <AntDesign name={expandedCards[1] ? "up" : "down"} size={20} color="rgba(99, 102, 255, 1)" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 400, paddingTop: 1 }}>Work From Home</Text>
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
                </fieldset>

                <fieldset style={styles.leaveDetails1}>
                    <legend style={styles.legend1}>WithDrawn</legend>
                    <View style={styles.leaveHeader}>
                        <Text style={{ fontSize: 18, fontWeight: 400, }}>Leave</Text>
                        <TouchableOpacity style={styles.cardHeader} onPress={() => toggleCard(2)}>
                            <AntDesign name={expandedCards[2] ? "up" : "down"} size={20} color="rgba(99, 102, 255, 1)" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.leaveType}>
                        <Text style={styles.leaveTypeName}>Sick Leave</Text>
                    </View>
                    <View style={styles.leaveDates}>
                        <Text style={styles.leaveDate}>17 May 2023</Text>
                        <View>
                            <Text style={styles.leaveDays}>2 days</Text>
                            <Text style={styles.dotedLine}>------------------</Text>
                        </View>
                        <Text style={styles.leaveDate}>20 May 2023</Text>
                    </View>

                    {expandedCards[2] && <View style={styles.divider} />}
                    {expandedCards[2] && (
                        <View style={styles.leaveInfo}>
                            <Text style={styles.leaveInfoText}>Dear Sir,</Text>
                            <Text style={styles.leaveInfoText}>is simply dummy text of the printing and typesetting industry. also to have</Text>
                            <View style={styles.leaveInfoItem}>
                                <Text style={styles.leaveInfoItemLabel}>Applied to</Text>
                                <Text style={styles.leaveInfoItemValue}>Nagaraju</Text>
                            </View>
                            <View style={styles.leaveInfoItem}>
                                <Text style={styles.leaveInfoItemLabel}>Applied on</Text>
                                <Text style={styles.leaveInfoItemValue}>Tue, 20 Jan, 2023</Text>
                            </View>
                            <View style={styles.leaveInfoItem}>
                                <Text style={styles.leaveInfoItemLabel}>Approved by</Text>
                                <Text style={styles.leaveInfoItemValue}>Nagaraju</Text>
                            </View>
                            <View style={styles.leaveInfoItem}>
                                <Text style={styles.leaveInfoItemLabel}>Approved on</Text>
                                <Text style={styles.leaveInfoItemValue}>Tue, 28 Feb, 2023</Text>
                            </View>
                        </View>
                    )}
                </fieldset>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: "auto",
        width: "auto",
    },
    profileContainer: {
        backgroundColor: '#6699FF',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    headerText: {
        fontSize: 24,

    },
    leaveOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        marginLeft: 10,
        // paddingTop: 4,
        marginTop: 4,
    },
    checkboxContainer: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // padding: 5,
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leaveCard: {
        borderWidth: 1,
        borderColor: "#6366FF",
        borderRadius: 4,
        padding: 10,
        margin: 10,
    },
    leaveOptionText: {
        fontSize: 16,
        paddingLeft: 5,
        fontFamily: "Roboto",
        marginTop: 8,

    },
    leaveDetails: {
        backgroundColor: '#fff',
        // padding: 20,
        borderRadius: 4,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#6366FF",
        margin: 10,
        marginTop: 25,
    },
    leaveDetails1: {
        backgroundColor: '#fff',
        // padding: 20,
        borderRadius: 4,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#6366FF",
        margin: 10,
        marginTop: 5,
    },
    leaveHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -5
    },
    leaveHeaderText: {
        fontSize: 20,
        marginTop: -9,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    leaveType: {
        marginBottom: 10,
    },
    leaveTypeName: {
        fontSize: 16,

    },
    leaveDates: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    leaveDate: {
        fontSize: 16,
    },
    leaveDays: {
        fontSize: 16,
        color: '#ccc',
        textAlign: "center"
    },
    leaveDays1: {
        fontSize: 16,
        color: '#ccc',
        textAlign: "center"
    },
    dotedLine: {
        marginTop: -10
    },
    leaveInfo: {
        marginBottom: 10,
    },
    leaveInfoText: {
        fontSize: 14,
        marginBottom: 5,
        color: "#3D395C"
    },
    leaveInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: "space-between",
        marginTop: 5,
    },
    leaveInfoItemLabel: {
        fontSize: 14,
        marginRight: 10,
    },
    leaveInfoItemValue: {
        fontSize: 14,
        marginRight: "30%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        direction: "row"
    },
    legend: {
        flex: 1,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: "#04DA33",
        borderRadius: 70,
        // padding: 5,
        marginLeft: "65%",
    },
    legend1: {
        flex: 1,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#FFFFFF',
        backgroundColor: "#F5AC03",
        borderRadius: 50,
        // padding: 5,
        marginLeft: '60%',
    },
});