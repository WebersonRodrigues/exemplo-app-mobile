import React from "react";

import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const MeuInput = (props) => {

    return (
        <SafeAreaView>
            <Text>
                { props.label }
            </Text>
            <TextInput
            style={style.input}
            placeholder={props.placeholder}>

            </TextInput>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    input:{
        borderWidth:1,
        // height:12,
        marginBottom: 15,
        marginTop:3,
        paddingTop:3,
        padding:10,
        width:300,
        fontSize:18,
        color: "#1a1a1a"
    }
});

export default MeuInput;