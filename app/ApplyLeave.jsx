import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Alert } from "react-native";
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import validate from 'validate.js';

const formDataConstraints = {
    comments: {
        presence: {
            allowEmpty: false,
            message: " is required",
        },
        length: {
            minimum: 5,
            message: " must be at least 5 characters",
        },
    },
    contact: {
        presence: {
            allowEmpty: false,
            message: " is required",
        },
        format: {
            pattern: /^\d{10}$/,
            message: " must be a valid 10-digit number",
        },
    },
    file: {
        presence: {
            allowEmpty: false,
            message: " is required",
        },
    },
};

const data = [
    { label: 'Casual Leave', value: '1' },
    { label: 'Sick Leave', value: '2' },
    { label: 'Work from Home', value: '3' },
    { label: 'Special Leave', value: '4' },
    { label: 'Comfort Leave', value: '5' },
];

const personData = [
    { label: 'Kamalakar Palavalasa(100001)', value: '1', icon: <AntDesign name="user" size={24} color="black" /> },
    { label: 'Kishna Kishore Koganti(100002)', value: '2', icon: <AntDesign name="user" size={24} color="black" /> },
    { label: 'Nagaraju Mengani(100003)', value: '3', icon: <AntDesign name="user" size={24} color="black" /> },
];

const ccData = [
    { label: 'Bhavani', value: '1', icon: <Entypo name="cross" size={20} color="black" /> },
    { label: 'Akhil', value: '2', icon: <Entypo name="cross" size={20} color="black" /> },
    { label: 'Naveen', value: '3', icon: <Entypo name="cross" size={20} color="black" /> },
    { label: 'Swathi', value: '4', icon: <Entypo name="cross" size={20} color="black" /> },
    { label: 'Kalyan', value: '5', icon: <Entypo name="cross" size={20} color="black" /> },
];

export default function ApplyLeave() {
    const [screenDetails, setScreenDetails] = useState({
        startDate: null,
        endDate: null,
        comments: "",
        contact: "",
        file: null,
    });

    const [errors, setErrors] = useState({
        startDate: '',
        endDate: '',
        comments: '',
        contact: '',
        file: '',
    });

    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [selectedCc, setSelectedCc] = useState([]);

    const validateForm = () => {
        const validationErrors = validate(screenDetails, formDataConstraints);

        if (!screenDetails.startDate && !screenDetails.endDate) {
            validationErrors.startDate = ["Start date and End Date is required"];
        }

        setErrors(validationErrors || {});
        return !validationErrors;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            Alert.alert('Success', 'Leave application submitted successfully');
        } else {
            Alert.alert('Error', 'Please correct the errors before submitting');
        }
    };

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
                    placeholder="Casual Leave"
                />
            </View>
        );
    };

    

    const PersonDropdown = () => {
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);

        const renderItem = (item) => (
            <View style={styles.item}>
                {item.icon}
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );

        return (
            <View style={styles.dropdownContainer1}>
                <Dropdown
                    style={[styles.dropdown1, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    // iconStyle={styles.iconStyle}
                    data={personData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(value);
                        setIsFocus(false);
                    }}
                    placeholder="Kishna Kishore Koganti(100002)"
                    renderLeftIcon={() => (
                        <AntDesign style={styles.iconStyle} color={isFocus ? 'blue' : 'black'} name="user" size={20} />
                    )}
                // renderItem={renderItem}
                />
            </View>
        );
    };

    const CcDropdown = () => {
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);

        const renderItem = (item) => (
            <View style={styles.item}>
                {item.icon}
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );

        return (
            <View style={styles.ccdropdownContainer}>
                <Dropdown
                    style={[styles.ccdropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={ccData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        if (item) {
                            setSelectedCc(prev => [...prev, item]);
                        }
                        setIsFocus(false);
                    }}
                    placeholder="ADD CC"
                />
                <View style={styles.selectedCcContainer}>
                {selectedCc.map((item, index) => (
                    <View key={index} style={styles.selectedCcItem}>
                        <Text style={styles.textItem}>{item.label}</Text>
                        {item.icon}
                        
                    </View>
                ))}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Apply Leave</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="bell" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollViewContent}>
                <View style={styles.leaveTypeCard}>
                    <Text style={{ color: "rgba(96, 96, 96, 1)" }}>Select Leave Type</Text>
                    <Text>Balance 03</Text>
                </View>
                <View style={styles.dropdownWrapper}>
                    <DropdownComponent />
                </View>
                <View style={styles.dateRangeCard}>
                    <Text style={{ color: "rgba(96, 96, 96, 1)" }}>Select Date Range</Text>
                </View>
                <View style={styles.dateRangeInputCard}>
                    <TouchableOpacity onPress={() => setStartDatePickerVisibility(true)}>
                        <FontAwesome name="calendar" size={24} color="rgba(99, 102, 255, 1)" />
                    </TouchableOpacity>
                    <Text>{screenDetails.startDate ? screenDetails.startDate.toDateString() : 'DD/MM/YYYY'}</Text>
                    {/* <Text>DD/MM/YYYY</Text> */}
                    <Text>To</Text>
                    <Text>{screenDetails.endDate ? screenDetails.endDate.toDateString() : 'DD/MM/YYYY'}</Text>
                    {/* <Text>DD/MM/YYYY</Text> */}
                    <TouchableOpacity onPress={() => setEndDatePickerVisibility(true)}>
                        <FontAwesome name="calendar" size={24} color="rgba(99, 102, 255, 1)" />
                    </TouchableOpacity>
                </View>
                {/* <DatePicker
                    modal
                    open={isStartDatePickerVisible}
                    date={screenDetails.startDate || new Date()}
                    onConfirm={(date) => {
                        setScreenDetails({ ...screenDetails, startDate: date });
                        setStartDatePickerVisibility(false);
                    }}
                    onCancel={() => {
                        setStartDatePickerVisibility(false);
                    }}
                />
                <DatePicker
                    modal
                    open={isEndDatePickerVisible}
                    date={screenDetails.endDate || new Date()}
                    onConfirm={(date) => {
                        setScreenDetails({ ...screenDetails, endDate: date });
                        setEndDatePickerVisibility(false);
                    }}
                    onCancel={() => {
                        setEndDatePickerVisibility(false);
                    }}
                /> */}
                {errors.startDate ? <Text style={styles.errorText}>{errors.startDate[0]}</Text> : null}
                {errors.endDate ? <Text style={styles.errorText}>{errors.endDate[0]}</Text> : null}
                <View style={styles.commentsCard}>
                    <Text style={{ color: "rgba(96, 96, 96, 1)" }}>Comments</Text>
                </View>
                <TextInput
                    style={styles.commentsInput}
                    multiline={true}
                    placeholder='Write here'
                    value={screenDetails.comments}
                    onChangeText={(text) => setScreenDetails({ ...screenDetails, comments: text })}
                />
                {errors.comments ? <Text style={styles.errorText}>{errors.comments[0]}</Text> : null}
                <View style={styles.uploadFileCard}>
                    <Text style={{ color: "rgba(96, 96, 96, 1)" }}>Upload File</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.button} onPress={() => {/* Add file picker logic here */ }}>
                        <Text style={styles.buttonText}>Select File</Text>
                        <Feather name="upload" size={20} color="rgba(99, 102, 255, 1)" />
                    </TouchableOpacity>
                </View>
                {errors.file ? <Text style={styles.errorText}>{errors.file[0]}</Text> : null}
                <View style={styles.contactCard}>
                    <Text style={{ color: "rgba(96, 96, 96, 1)" }}>Contact Details</Text>
                </View>
                <TextInput
                    style={styles.contactInput}
                    placeholder='Contact'
                    keyboardType="phone-pad"
                    value={screenDetails.contact}
                    onChangeText={(text) => setScreenDetails({ ...screenDetails, contact: text })}
                />
                {errors.contact ? <Text style={styles.errorText}>{errors.contact[0]}</Text> : null}
                <View style={styles.applyingToCard}>
                    <Text style={{ color: "rgba(96, 96, 96, 1)" }}>Applying To</Text>
                </View>
                <View style={styles.dropdownWrapper}>
                    <PersonDropdown />
                </View>
                {/* <View style={styles.ccButtonsContainer}> */}
                <View style={styles.ccContainer}>
                    <CcDropdown />
                </View>
                {/* </View> */}
                <View style={styles.submitButtonsContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.applyButton} onPress={handleSubmit}>
                        <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        backgroundColor: "rgba(99, 102, 255, 1)",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        margin: "1%",
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 20,
        marginLeft: 5,
        // paddingLeft: 5,
        fontWeight: "400",
    },
    scrollViewContent: {
        flexGrow: 1,
        // padding: 10,
    },
    leaveTypeCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        margin: "3%",
    },
    dropdownWrapper: {
        // marginHorizontal: 10,
        // paddingTop: -30,
    },
    dropdownContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        // marginRight: "100%",
        margin: -10,
    },
    dropdownContainer1: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginRight: "10%",
        margin: -10,
    },
    ccdropdownContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginRight: "62%",
        margin: -10,
    },
    dropdown: {
        height: 40,
        // paddingVertical: 1,
        // paddingTop: 1,
        borderColor: '#6366FF',
        backgroundColor: "#F8F8FF",
        borderWidth: 1,
        borderRadius: 35,
        paddingHorizontal: 10,
    },
    dropdown1: {
        height: 40,
        borderColor: '#6366FF',
        backgroundColor: "#F8F8FF",
        borderWidth: 1,
        borderRadius: 35,
        paddingHorizontal: 10,
        // Optionally, you may want to adjust padding and margins
    },
    ccdropdown: {
        height: 30,
        borderColor: '#6366FF',
        backgroundColor: "#F8F8FF",
        borderWidth: 1,
        borderRadius: 35,
        paddingHorizontal: 10,
        // Optionally, you may want to adjust padding and margins
    },
    ccContainer: {
        marginBottom: 15,
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
    dateRangeCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        margin: "3%",
    },
    dateRangeInputCard: {
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        borderRadius: 4,
        padding: 10,
        marginTop: 1,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    commentsCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        paddingTop: 5,
        marginTop: 1,
        margin: "3%",
    },
    commentsInput: {
        height: 100,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        borderRadius: 4,
        padding: 10,
        marginTop: 1,
        margin: 10,
        textAlignVertical: "top",

    },
    uploadFileCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        margin: "3%",
        marginTop: 1,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "rgba(99, 102, 255, 1)",
        paddingHorizontal: 10,
        borderRadius: 15,
        margin: "2%",
        borderWidth: 1,
        marginTop: 1
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "rgba(99, 102, 255, 1)",
        marginRight: 10,
    },
    contactCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        margin: "3%",
        marginTop: 1,
    },
    contactInput: {
        height: 30,
        borderWidth: 1,
        borderColor: "rgba(196, 196, 196, 1)",
        borderRadius: 4,
        padding: 5,
        margin: 10,
        marginTop: 1,
    },
    applyingToCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 1,
        margin: "3%",
    },
    applyingToInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5,
        margin: "3%",
    },
    selectedCcContainer: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        backgroundColor: "#F8F8FF"
    },
    selectedCcItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
        padding: 5,
        margin: 5,
    },
    ccButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 1,
        marginRight: "25%",
    },
    ccButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "rgba(99, 102, 255, 1)",
        paddingHorizontal: 5,
        borderRadius: 35,
        margin: "2%",
        borderWidth: 1,
        // marginTop: 1,
    },
    ccCross: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "rgba(99, 102, 255, 1)",
        paddingHorizontal: 5,
        borderRadius: 90,
        // margin: "2%",
        borderWidth: 1,
        marginTop: 1,
    },
    ccButtonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "rgba(99, 102, 255, 1)",
        marginRight: 10,
    },
    submitButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
        margin: "3%",
        marginTop: -10,
    },
    cancelButton: {
        backgroundColor: "#fff",
        borderColor: "rgba(99, 102, 255, 1)",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginRight: 10,
    },
    cancelButtonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "rgba(99, 102, 255, 1)",
    },
    applyButton: {
        backgroundColor: "rgba(99, 102, 255, 1)",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    applyButtonText: {
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "400",
        color: "#fff",
    },
    errorText: {
        color: 'red',
        marginLeft: 10,
        marginTop: -5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        width: 70,
    },
});