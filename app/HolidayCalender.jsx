import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Card } from 'react-native-paper';

export default function HolidayCalendar() {

    const data = [
        { label: 'June 2024 - July 2024', value: '1' },
        { label: 'July 2024 - Aug 2024', value: '2' },
        { label: 'Aug 2024 - Sep 2024', value: '3' },
        { label: 'Sep 2024 - Oct 2024', value: '4' },
        { label: 'Oct 2024 - Nov 2024', value: '5' },
        { label: 'Nov 2024 - Dec 2024', value: '6' },
        { label: 'Dec 2024 - Jan 2025', value: '7' },
        { label: 'Jan 2025 - Feb 2025', value: '8' },
    ];

    const DropdownComponent = () => {
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);

        return (
            <View style={styles.dropdownContainer}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    maxHeight={100}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(value);
                        setIsFocus(false);
                    }}
                    placeholder="Jan 2025 - Feb 2025"
                />
            </View>
        );
    };

    const holidayData = [
        { date: '12 Wed', description: 'Poongal' },
        { date: '26 Thu', description: 'Republic Day' },
        { date: 'FEB', description: 'No holidays' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("leaves")}>
                        <AntDesign name="left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{ color: "#fff", fontSize: 18, paddingLeft: 5, fontWeight: 400 }}>Holiday Calender</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="bell" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <DropdownComponent />
                <View style={styles.timelineWrapper}>
                    {holidayData.map((item, index) => (
                        <View key={index} style={styles.timelineItem}>
                            <View style={styles.timelineContentWrapper}>
                                <Text style={styles.dateLabel}>{item.date}</Text>
                                <View style={styles.contentWrapper}>
                                    <View style={styles.lineContainer}>
                                        <View style={styles.circleWrapper}>
                                            <View style={styles.dot} />
                                        </View>
                                        {index !== holidayData.length - 1 && <View style={styles.line}></View>}
                                    </View>
                                    <Card style={styles.card}>
                                        <View style={styles.descriptionContainer}>
                                            <Text style={styles.textDescription}>{item.description}</Text>
                                        </View>
                                    </Card>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
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
        backgroundColor: "#1e81b0",
        height: 45,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
    },
    dropdownContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginRight: "50%",
        margin: "2%",
    },
    dropdown: {
        height: 40,
        paddingVertical: 1,
        // paddingTop: 1,
        borderColor: '#6366FF',
        backgroundColor: "#F8F8FF",
        borderWidth: 1,
        borderRadius: 35,
        paddingHorizontal: 20,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    scrollView: {
        flex: 1,
    },
    timelineWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    timelineItem: {
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timelineContentWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    dateLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 0,
        width: 40,
    },
    contentWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },
    lineContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 10,
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        marginLeft: 1,
        flexGrow: 1,
        position: "absolute",
        top: -5,
        bottom: "-300%",
    },
    circleWrapper: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        borderRadius: 8,
        borderColor: "rgba(217, 217, 217, 1)",
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    descriptionContainer: {
        padding: 10,
        borderLeftColor: 'red',
        borderLeftWidth: 3,
    },
    textDescription: {
        fontSize: 16,
        color: '#000',
    },
});
