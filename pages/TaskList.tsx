import React, {useEffect, useState} from "react";
import {View, Text, TextInput, Button, ToastAndroid, Keyboard, StyleSheet, Dimensions, Touchable, TouchableOpacity, FlatList} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {toJS} from "mobx";

const employees = [
    {id: 1, name: "Alice", country: "Austria"},
    {id: 2, name: "Bob", country: "Belgium"},
    {id: 3, name: "Carl", country: "Canada"},
    {id: 4, name: "Alice1", country: "Austria"},
    {id: 5, name: "Bob2", country: "Belgium"},
    {id: 6, name: "Carl3", country: "Canada"},
];

const TaskList = ({navigation}) => {
    const [serverData, serverDataLoaded] = useState([]);

    const requestToServer = () => {
        serverDataLoaded(employees);
    };

    useEffect(() => {
        requestToServer();
    }, []);

    const handleItemClick = item => {
        navigation.push("TaskDetail", {item});
    };

    const _renderItem = ({item, index, separators}) => {
        return (
            <TouchableOpacity style={index % 2 == 1 ? styles.itemStyle : styles.itemOtherStyle} onPress={() => handleItemClick(item)}>
                <Text style={{color: "red"}}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const _keyExtractor = (item, index) => index;

    return (
        <View style={styles.mainBody}>
            <Text>项目列表</Text>
            <FlatList keyExtractor={_keyExtractor} data={toJS(serverData)} renderItem={_renderItem} />
        </View>
    );
};

export default TaskList;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignContent: "center",
        alignItems: "center",
    },
    SectionStyle: {
        flexDirection: "row",
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: "#7DE24E",
        borderWidth: 0,
        color: "#FFFFFF",
        borderColor: "#7DE24E",
        height: 40,
        alignItems: "center",
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
        width: 120,
    },
    buttonTextStyle: {
        color: "#FFFFFF",
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        height: 40,
        width: 120,
        color: "black",
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#dadae8",
    },
    registerTextStyle: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
        alignSelf: "center",
        padding: 10,
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
    itemStyle: {
        height: 80,
        width: 250,
        backgroundColor: "yellow",
    },
    itemOtherStyle: {
        height: 80,
        width: 250,
        backgroundColor: "white",
    },
});
