import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';
import { useNavigation } from '@react-navigation/native';

export default function LeaveCalendar() {
  
  const navigation = useNavigation();

  return (

    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.navigate("leaves")}>
            <AntDesign name="left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Leave Calendar</Text>
        </View>
        <TouchableOpacity>
          <EvilIcons name="bell" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.calendarContainer}>
          <View style={styles.calendarWrapper}>
            <CalendarStrip
              style={styles.calendarStrip}
              calendarHeaderStyle={{ display: 'none' }}
              dateNameStyle={styles.dateName}
              dateNumberStyle={styles.dateNumber}
              highlightDateNumberStyle={styles.highlightDateNumber}
              highlightDateContainerStyle={styles.highlightDateContainer}
              iconLeft={require('@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Entypo.json').chevronSmallLeft}
              iconRight={require('@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Entypo.json').chevronSmallRight}
              iconContainer={styles.iconContainer}
            />
          </View>
        </View>
        
        <View style={styles.leaveSummaryHeader}>
          <Text>Rajkumar Kandukuri (#100093)</Text>
          <Text style = {{color: "rgba(94, 94, 94, 1)"}}>3 days</Text>
        </View>
        <View style={styles.leaveDateRange}>
          <Text>17 Jan 2023</Text>
          <View>
            <Text>----------To-----------</Text>
          </View>
          <Text>20 Jan 2023</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.leaveSummaryHeader1}>
          <Text>Rochis Palavalasa (#100134)</Text>
          <Text style = {{color: "rgba(94, 94, 94, 1)"}}>3 days</Text>
        </View>
        <Text style={styles.employeePosition}>Trainee Software Employee</Text>
        <View style={styles.leaveDateRange}>
          <Text>17 Jan 2023</Text>
          <View>
            <Text>----------To-----------</Text>
          </View>
          <Text>20 Jan 2023</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.leaveSummaryHeader1}>
          <Text>Kalyan (#100104)</Text>
          <Text style = {{color: "rgba(94, 94, 94, 1)"}}>1 day</Text>
        </View>
        <Text style={styles.employeePosition}>Senior Software Employee</Text>
        <View style={styles.leaveDateRange}>
          <Text>19 Jan 2023</Text>
          <View>
            <Text>----------To-----------</Text>
          </View>
          <Text>20 Jan 2023</Text>
        </View>
        <View style={styles.divider} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 45,
    backgroundColor: "#1e81b0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  headerContent: {
    flexDirection: "row",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 5,
    fontWeight: "400"
  },
  calendarContainer: {
    paddingTop: "4%",
    marginHorizontal: "2%",
    borderRadius: 90,
  },
  calendarWrapper: {
    width: "100%",
    height: "auto",
    borderRadius: 90,
    backgroundColor: "rgba(136, 136, 136, 1)",
  },
  calendarStrip: {
    backgroundColor: "#F8F8FF",
    borderRadius: 90,
  },
  dateName: {
    color: 'black',
    fontSize: 10,
  },
  dateNumber: {
    color: 'black',
    fontSize: 20,
  },
  highlightDateNumber: {
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  highlightDateContainer: {
    borderRadius: 10,
  },
  iconContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: 'lightblue',
    height: 24,
    width: 24,
  },
  leaveSummaryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    paddingTop: 15,
    color: "rgba(13, 7, 51, 1)",
    fontSize: 16,
    fontWeight: "400"
  },
  leaveSummaryHeader1: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    paddingTop: 8,
    color: "rgba(13, 7, 51, 1)",
    fontSize: 16,
    fontWeight: "400"
  },
  leaveDateRange: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2%",
    // paddingTop: -80,
    marginTop: -5,
  },
  employeePosition: {
    margin: "2%",
    // paddingTop: -30,
    marginTop: -5,
    color: "rgba(94, 94, 94, 1)"
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});