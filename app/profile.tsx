import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, EvilIcons, FontAwesome6, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <View style={styles.profileContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <AntDesign name="left" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: 18, paddingLeft: 20 }}>Profile</Text>
                    </View>
                    <TouchableOpacity>
                        <EvilIcons name="bell" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.card}>
                    <Text style={styles.header}>KANDUKURI RAJKUMAR</Text>
                    <Text style={styles.subHeader}>UX Engineer, 100093</Text>
                    <Text style={styles.contact}>9848243892, 9902568956</Text>
                    <Text style={styles.email}>rajkumar@micronsure.com, Hyderabad</Text>

                    <View style={styles.divider} />
                    <TouchableOpacity style={styles.item}>
                        <FontAwesome6 name="user" size={20} color="#000" />
                        <Text style={styles.itemText}>Personal Details</Text>
                        <AntDesign name="right" size={20} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <View style={styles.item}>
                        <Ionicons name="bag-remove-outline" size={20} color="#000" />
                        <Text style={styles.itemText}>Experience Details</Text>
                        <AntDesign name="right" size={20} color="#000" />
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.item}>
                        <SimpleLineIcons name="graduation" size={24} color="#000" />
                        <Text style={styles.itemText}>Education Details</Text>
                        <AntDesign name="right" size={20} color="#000" />
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.item}>
                        <MaterialCommunityIcons name="certificate" size={24} color="black" />
                        <Text style={styles.itemText}>Education Details</Text>
                        <AntDesign name="right" size={20} color="#000" />
                    </View>
                    <View style={styles.divider} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: "#fff",
    },
    card: {
        backgroundColor: "#fff",
        width: "100%",
        alignItems: 'center',
        padding: 20,
        height: "auto",
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
        paddingTop: 50,
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 10,
    },
    contact: {
        fontSize: 16,
        marginTop: -7,
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        marginBottom: 20,
        paddingBottom: 50,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    itemText: {
        fontSize: 18,
        flex: 1,
        marginLeft: 10,
    },
    profileContainer: {
        fontSize: 24,
        fontWeight: 'bold',
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#1e81b0",
        height: 45,
        alignItems: "center",
        padding: 5,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        width: '100%',
        alignSelf: 'center',
    },
});
