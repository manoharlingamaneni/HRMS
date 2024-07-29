import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Entypo, EvilIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { VictoryChart } from 'victory-chart';
import { VictoryGroup } from 'victory-group';
import { VictoryBar } from 'victory-bar';
import { VictoryLegend } from 'victory-legend';
import { VictoryAxis } from 'victory-axis';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

export default function LeavesDashboard() {

    const percentage1 = 50;
    const navigation = useNavigation();

    const data = {
        casual: [
            { x: 'Apr', y: 1 },
            { x: 'May', y: 3 },
            { x: 'June', y: 1 },
        ],
        sick: [
            { x: 'Apr', y: 3 },
            { x: 'May', y: 2 },
            { x: 'June', y: 1 },
        ],
        comfort: [
            { x: 'Apr', y: 2 },
            { x: 'May', y: 1 },
            { x: 'June', y: 1 },
        ],
        special: [
            { x: 'Apr', y: 0 },
            { x: 'May', y: 0 },
            { x: 'June', y: 6 },
        ],
    };

    const LeavesChart = () => {
        return (
            <View style={styles.barGraph}>
                <VictoryChart
                    domainPadding={{ x: [20, 20], y: [20, 20] }}
                    padding={{ top: 40, bottom: 50, left: 50, right: 30 }}
                >
                    <VictoryGroup offset={10} colorScale={["blue", "orange", "green", "red"]}>
                        <VictoryBar
                            data={data.casual}
                            barWidth={10}
                            cornerRadius={{ top: 5, bottom: 5 }}
                            style={{
                                data: {
                                    fill: 'rgba(218, 4, 4, 1)',
                                    stroke: '#000',
                                    strokeWidth: 1
                                }
                            }}
                        />
                        <VictoryBar
                            data={data.sick}
                            barWidth={10}
                            cornerRadius={{ top: 5, bottom: 5 }}
                            style={{
                                data: {
                                    fill: 'rgba(214, 4, 218, 1)',
                                    stroke: '#000',
                                    strokeWidth: 1
                                }
                            }}
                        />
                        <VictoryBar
                            data={data.comfort}
                            barWidth={10}
                            cornerRadius={{ top: 5, bottom: 5 }}
                            style={{
                                data: {
                                    fill: 'rgba(255, 168, 0, 1)',
                                    stroke: '#000',
                                    strokeWidth: 1
                                }
                            }}
                        />
                        <VictoryBar
                            data={data.special}
                            barWidth={10}
                            cornerRadius={{ top: 5, bottom: 5 }}
                            style={{
                                data: {
                                    fill: 'rgba(9, 4, 255, 1)',
                                    stroke: '#000',
                                    strokeWidth: 1
                                }
                            }}
                        />
                    </VictoryGroup>
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis: { stroke: 'none' },
                            grid: { stroke: 'grey', strokeDasharray: '4,4' },
                            ticks: { padding: 10 },
                            tickLabels: { fontSize: 10, padding: 5 }
                        }}
                    />
                    <VictoryAxis
                        style={{
                            grid: { stroke: 'none' },
                            tickLabels: { fontSize: 10 }
                        }}
                    />
                    {/* <VictoryLegend
                        style={{marginLeft: "10%"}}
                        orientation="horizontal"
                        gutter={30}
                        data={[
                            { name: 'Casual', symbol: { fill: 'rgba(218, 4, 4, 1)' } },
                            { name: 'Sick', symbol: { fill: 'rgba(214, 4, 218, 1)' } },
                            { name: 'Comfort', symbol: { fill: 'rgba(255, 168, 0, 1)' } },
                            { name: 'Special', symbol: { fill: 'rgba(9, 4, 255, 1)' } },
                        ]}
                    /> */}
                </VictoryChart>
            </View>
        );
    };

    const holidaysData = [
        { date: 'July 4', name: 'Independence Day' },
        { date: 'July 14', name: 'Bastille Day' },
        { date: 'July 20', name: 'Moon Landing Day' },
        { date: 'July 25', name: 'National Hot Dog Day' },
        // { date: 'August 1', name: 'Summer Festival' },
        // { date: 'August 15', name: 'Victory Day' }
    ];

    const renderHoliday = (item) => {
        return (
            <View style={styles.holidayCard}>
                <Text style={styles.holidayDateText}>{item.date}</Text>
                <Text style={styles.holidayNameText}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity>
                        <Entypo name="menu" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Leaves Dashboard</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="bell" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    <View style={styles.cardHeader}>
                        <Text>Overview</Text>
                    </View>
                    <View>
                        <View style={styles.circularProgressContainer}>
                            <View style={styles.circularProgressCard}>
                                <AnimatedCircularProgress
                                    size={50}
                                    width={6}
                                    fill={percentage1}
                                    tintColor="rgba(255, 168, 74, 1)"
                                    backgroundColor="rgba(4, 218, 51, 1)"
                                >
                                    {
                                        (fill) => (
                                            <Text style={styles.circularProgressLabel}>
                                                3/06
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text>Casual Leave</Text>
                            </View>
                            <View style={styles.circularProgressCard}>
                                <AnimatedCircularProgress
                                    size={50}
                                    width={6}
                                    fill={percentage1}
                                    tintColor="rgba(255, 168, 74, 1)"
                                    backgroundColor="rgba(4, 218, 51, 1)"
                                >
                                    {
                                        (fill) => (
                                            <Text style={styles.circularProgressLabel}>
                                                3/06
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text>Sick Leave</Text>
                            </View>
                            <View style={styles.circularProgressCard1}>
                                <AnimatedCircularProgress
                                    size={50}
                                    width={6}
                                    fill={percentage1}
                                    tintColor="rgba(255, 168, 74, 1)"
                                    backgroundColor="rgba(4, 218, 51, 1)"
                                >
                                    {
                                        (fill) => (
                                            <Text style={styles.circularProgressLabel}>
                                                3/06
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text>Comfort Leave</Text>
                            </View>
                        </View>

                        <View style={styles.circularProgressContainer}>
                            <View style={styles.circularProgressCard}>
                                <AnimatedCircularProgress
                                    size={50}
                                    width={6}
                                    fill={percentage1}
                                    tintColor="rgba(255, 168, 74, 1)"
                                    backgroundColor="rgba(4, 218, 51, 1)"
                                >
                                    {
                                        (fill) => (
                                            <Text style={styles.circularProgressLabel}>
                                                3/06
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text>Special Leave</Text>
                            </View>
                            <View style={styles.circularProgressCard}>
                                <AnimatedCircularProgress
                                    size={50}
                                    width={6}
                                    fill={percentage1}
                                    tintColor="rgba(255, 168, 74, 1)"
                                    backgroundColor="rgba(4, 218, 51, 1)"
                                >
                                    {
                                        (fill) => (
                                            <Text style={styles.circularProgressLabel}>
                                                3/06
                                            </Text>
                                        )
                                    }
                                </AnimatedCircularProgress>
                                <Text>WFH</Text>
                            </View>
                            <View style={styles.applyButtonContainer}>
                                <TouchableOpacity style={styles.applyButton} onPress={() => navigation.navigate("ApplyLeave")}>
                                    <Text style={styles.applyButtonText}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.divider} />

                    <View style={styles.holidaysSection}>
                        <Text style={styles.sectionTitle}>Holidays</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.holidaysStrip}>
                                {holidaysData.map(holiday => renderHoliday(holiday))}
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.performanceContainer}>
                        <Text>My Performance</Text>
                        <Text>July 2024</Text>
                    </View>
                    <View style = {styles.legendContainer}>
                        <VictoryLegend
                            orientation="horizontal"
                            gutter={30}
                            data={[
                                { name: 'Casual', symbol: { fill: 'rgba(218, 4, 4, 1)' } },
                                { name: 'Sick', symbol: { fill: 'rgba(214, 4, 218, 1)' } },
                                { name: 'Comfort', symbol: { fill: 'rgba(255, 168, 0, 1)' } },
                                { name: 'Special', symbol: { fill: 'rgba(9, 4, 255, 1)' } },
                            ]}
                        />
                    </View>

                    <View style={styles.calendarContainer}>
                        <Calendar
                            style={styles.calendar}
                            calendarHeaderStyle={{ display: 'none', backgroundColor: "#FAFAFF" }}
                            renderHeader={() => null}
                            theme={{
                                'stylesheet.calendar.header': {
                                    header: {
                                        height: 0,
                                        backgroundColor: "#FAFAFF"
                                    },
                                    arrow: {
                                        display: 'none',
                                        backgroundColor: "#FAFAFF"
                                    },
                                },
                            }}
                            dateNameStyle={{ color: 'black', fontSize: 10, backgroundColor: "#FAFAFF" }}
                            dateNumberStyle={{ color: 'black', fontSize: 20 }}
                            highlightDateNumberStyle={{ color: 'black', backgroundColor: '#FAFAFF', borderRadius: 20, padding: 5 }}
                            highlightDateContainerStyle={{ borderRadius: 10, backgroundColor: "#FAFAFF" }}
                            iconContainer={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', tintColor: 'lightblue', height: 24, width: 24 }}
                        />
                    </View>
                </View>
                <View style={styles.divider} />
                <View>
                    <View style={styles.threeMonthsPerformanceContainer}>
                        <Text>3 Months Performance</Text>
                    </View>
                    <View style = {styles.legendContainer}>
                        <VictoryLegend
                            orientation="horizontal"
                            gutter={30}
                            data={[
                                { name: 'Casual', symbol: { fill: 'rgba(218, 4, 4, 1)' } },
                                { name: 'Sick', symbol: { fill: 'rgba(214, 4, 218, 1)' } },
                                { name: 'Comfort', symbol: { fill: 'rgba(255, 168, 0, 1)' } },
                                { name: 'Special', symbol: { fill: 'rgba(9, 4, 255, 1)' } },
                            ]}
                        />
                    </View>
                    <View>
                    <LeavesChart />
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="home" size={30} color="grey" onPress={() => navigation.navigate("leavesDashboard")}/>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("leaves")}>
                    <FontAwesome5 name="calendar-alt" size={30} color="grey" />
                    <Text>Leaves</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="person" size={30} color="grey" />
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#1e81b0",
        height: 45,
        alignItems: "center",
        padding: 5,
    },
    headerLeft: {
        flexDirection: "row",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        paddingLeft: 20,
    },
    cardHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "2%",
        backgroundColor: "darkwhite",
        margin: "3%",
    },
    circularProgressContainer: {
        flexDirection: "row",
        backgroundColor: "darkwhite",
        height: "auto",
        justifyContent: "space-between",
        paddingTop: "2%",
        marginLeft: "5%",
    },
    circularProgressContainer1: {
        flexDirection: "row",
        backgroundColor: "darkwhite",
        height: "auto",
        justifyContent: "space-between",
        paddingTop: "2%",
        marginLeft: "2%",
    },
    circularProgressCard: {
        alignItems: "center",
    },
    circularProgressLabel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -7.5 }],
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    applyButtonContainer: {
        paddingTop: "5%",
        paddingRight: "-2%",
    },
    applyButton: {
        alignItems: "center",
        width: "20%",
        backgroundColor: "rgba(99, 102, 255, 1)",
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 15,
    },
    applyButtonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "#fff",
        textAlign: "center",
    },
    divider: {
        height: 8,
        backgroundColor: '#e0e0e0',
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    holidaysSection: {
        margin: "3%",
        padding: 5,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    holidaysStrip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
    },
    holidayCard: {
        width: 100,
        height: 100,
        margin: 5,
        backgroundColor: 'rgba(4, 218, 196, 0.10)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(4, 218, 196, 0.10)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    holidayDateText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    holidayNameText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    performanceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "darkwhite",
        margin: "3%",
    },
    legendContainer: {
        marginHorizontal: "3%",
    },
    calendarContainer: {
        marginHorizontal: "3%",
        marginTop: "-50%",
        backgroundColor: "#FAFAFF"
    },
    calendar: {
        backgroundColor: '#FAFAFF',
        borderWidth: 0,
    },
    barGraph:{
        marginTop: "-65%",
    },
    threeMonthsPerformanceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "darkwhite",
        margin: "3%",
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        height: 50,
        alignItems: "center",
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: 'grey',
    },
    iconButton: {
        flex: 1,
        alignItems: "center",
    },
});