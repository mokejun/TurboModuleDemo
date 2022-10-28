import React, {useState} from "react";
import {View, Text, TextInput, Button, ToastAndroid, Keyboard, StyleSheet, Dimensions, Touchable, TouchableOpacity, TouchableHighlight} from "react-native";
import RTNCalculator from "rtn-calculator/js/NativeCalculator";
import RTNHelloWorld from "rtn-helloworld/js/NativeHelloWorld";

const Login = ({navigation}) => {
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");

    const handleSubmitPress = () => {
        console.log("handleSubmitPress");
        if (!userName) {
            ToastAndroid.show("请输入用户名", 100);
            return;
        }
        if (!userPwd) {
            ToastAndroid.show("请输入密码", 100);
            return;
        }
        navigation.push("TaskList");
    };

    const handleTurboModuleOne = () => {
        console.log(`print-->${RTNHelloWorld?.print("hello world!!!")}`);
    };

    const handleTurboModuleTwo = () => {
        const value = RTNCalculator?.add(3, 7);
        if (value) {
            ToastAndroid.show(`3+7 的结果是${value}`, 300);
        }
    };

    return (
        <View style={styles.mainBody}>
            <TextInput
                style={styles.inputStyle}
                placeholder="请输入账户"
                value={userName}
                placeholderTextColor={"#b3b3b3"}
                onChangeText={userName => {
                    setUserName(userName);
                }}
                autoCapitalize="none"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
            />
            <TextInput
                style={styles.inputStyle}
                secureTextEntry={true}
                placeholder="请输入密码"
                value={userPwd}
                placeholderTextColor={"#b3b3b3"}
                onChangeText={userPwd => {
                    setUserPwd(userPwd);
                }}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                underlineColorAndroid="#f000"
                returnKeyType="next"
            />

            <TouchableHighlight style={styles.buttonStyle} onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>登陆</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={handleTurboModuleOne}>
                <Text style={styles.buttonTextStyle}>测试 turbo module1</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={handleTurboModuleTwo}>
                <Text style={styles.buttonTextStyle}>测试 turbo module2</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Login;

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
});
