import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Entypo, EvilIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function Leaves() {
  
  const percentage1 = 100;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Entypo name="menu" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Leaves</Text>
        </View>
        <TouchableOpacity>
          <EvilIcons name="bell" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.navigationCard}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText} onPress={() => navigation.navigate("leaveCalender")}>Leave Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText} onPress={() => navigation.navigate("HolidayCalender")}>Holiday Calendar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>My Pending Leaves</Text>
            <Text style={styles.summaryValue}>04</Text>
            <TouchableOpacity style={styles.summaryButton} onPress={() => navigation.navigate("PendingLeaves")}>
              <Text style={styles.summaryButtonText}>View</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.summaryCard1}>
            <Text style={styles.summaryTitle}>My History Leaves</Text>
            <Text style={styles.summaryValue}>10</Text>
            <TouchableOpacity style={styles.summaryButton}>
              <Text style={styles.summaryButtonText} onPress={() => navigation.navigate("LeavesHistory")}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />

        <View>
          <View style={styles.leaveCard}>
            <View style={styles.leaveHeader}>
              <Text style = {styles.cardHeading}>Casual Leave</Text>
              <TouchableOpacity>
                <Text style={styles.applyButtonText} onPress={() => navigation.navigate("ApplyLeave")}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.leaveDetails}>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Annual</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                  {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>12</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Used</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>02</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Balance</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(4, 218, 51, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>10</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>

          <View style={styles.leaveCard}>
            <View style={styles.leaveHeader}>
              <Text style = {styles.cardHeading}>Sick Leave</Text>
              <TouchableOpacity>
                <Text style={styles.applyButtonText} onPress={() => navigation.navigate("ApplyLeave")}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.leaveDetails}>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Annual</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>12</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Used</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>01</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Balance</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(4, 218, 51, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>11</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>

          <View style={styles.leaveCard}>
            <View style={styles.leaveHeader}>
              <Text style = {styles.cardHeading}>Work from Home</Text>
              <TouchableOpacity>
                <Text style={styles.applyButtonText} onPress={() => navigation.navigate("ApplyLeave")}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.leaveDetails}>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Annual</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>12</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Used</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>03</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Balance</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(4, 218, 51, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>09</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>

          <View style={styles.leaveCard}>
            <View style={styles.leaveHeader}>
              <Text style = {styles.cardHeading}>Special Leave</Text>
              <TouchableOpacity>
                <Text style={styles.applyButtonText} onPress={() => navigation.navigate("ApplyLeave")}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.leaveDetails}>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Annual</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>12</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Used</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>05</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Balance</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(4, 218, 51, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>07</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>

          <View style={styles.leaveCard}>
            <View style={styles.leaveHeader}>
              <Text style = {styles.cardHeading}>Comfort Leave</Text>
              <TouchableOpacity>
                <Text style={styles.applyButtonText} onPress={() => navigation.navigate("ApplyLeave")}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.leaveDetails}>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Annual</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>12</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Used</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(255, 168, 74, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>06</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.leaveDetail}>
                <Text style = {{color: "rgba(162, 162, 162, 1)"}}>Balance</Text>
                <AnimatedCircularProgress
                  size={40}
                  width={6}
                  fill={percentage1}
                  tintColor="rgba(4, 218, 51, 1)"
                  backgroundColor="#DCDDE1"
                  style = {{margin: 5}}
                >
                    {(fill) => (
                    <View style={styles.circularProgressContent}>
                      <Text style={styles.circularProgressText}>06</Text>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="home" size={30} color="grey" onPress={() => navigation.navigate("leavesDashboard")}/>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <FontAwesome5 name="calendar-alt" size={30} color="grey" />
          <Text>Leaves</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="person" size={30} color="grey" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    // paddingTop: "5%",
  },
  headerLeft: {
    flexDirection: "row",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    paddingLeft: 20,
  },
  navigationCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "2%",
    backgroundColor: "#e0e0e0",
  },
  navButton: {
    backgroundColor: "rgba(99, 102, 255, 1)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    margin: "2%",
    justifyContent: "center",
  },
  navButtonText: {
    fontSize: 14,
    // fontFamily: "Roboto",
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  cardHeading:{
    fontSize: 16,
    fontWeight: "400",
  },
  summaryCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "2%",
    backgroundColor: "darkwhite",
    margin: 10,
  },
  summaryCard1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "1%",
    marginTop: 1,
    backgroundColor: "darkwhite",
    margin: 10,
  },
  summaryTitle: {
    margin: "2%",
    fontWeight: "400",
    fontSize: 16,
    // fontFamily: "Inter",
  },
  summaryValue: {
    paddingTop: "2%",
    fontSize: 16,
    fontWeight: "500",
    // fontFamily: "Bold",
    marginRight: 50,
  },
  summaryButton: {
    backgroundColor: "rgba(99, 102, 255, 1)",
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 15,
    margin: "2%",
    justifyContent: "center",
  },
  summaryButtonText: {
    fontSize: 14,
    // fontFamily: "Roboto",
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    marginTop: -1,
  },
  divider: {
    height: 5,
    backgroundColor: '#e0e0e0',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  leaveCard: {
    borderWidth: 2,
    borderColor: "rgba(238, 238, 238, 1)",
    borderRadius: 1,
    paddingLeft: 10,
    margin: 10,
    marginTop: 1,
    paddingBottom: 4,
  },
  leaveHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "2%",
    paddingRight: 20,
    backgroundColor: "darkwhite",
    paddingBottom: "2%",
  },
  leaveDetails: {
    flexDirection: "row",
    backgroundColor: "darkwhite",
    height: "auto",
  },
  leaveDetail: {
    marginLeft: "2%",
    width: 80,
  },
  applyButtonText: {
    fontSize: 14,
    // fontFamily: "Roboto",
    fontWeight: "500",
    color: "rgba(99, 102, 255, 1)",
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 50,
    alignItems: "center",
    padding: 5,
    margin: "3%",
  },
  iconWrapper: {
    flex: 1,
    alignItems: "center",
  },
  circularProgressContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularProgressText: {
    position: 'relative',
    top: '25%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -7.5 }],
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    textAlign: "center",
    alignItems: "center",
  },
});