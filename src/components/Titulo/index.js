import React from "react";
import { Text, StyleSheet } from "react-native";


const Titulo = (props) => {

    return (
        <Text style={style.titulo}> {props.valor} </Text>
    )
}

const style = StyleSheet.create({
    titulo:{
        color:"#1976D2",
        fontSize: 38,
        fontWeight:"700"
    }
});

export default Titulo;