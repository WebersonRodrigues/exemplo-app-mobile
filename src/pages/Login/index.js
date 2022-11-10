import React from "react";
import { Text, StyleSheet, View} from "react-native";
import Titulo from "../../components/Titulo";
import MeuInput from "../../components/MeuInput";

const Login = () => {
        
    return (
        <View>
            <Titulo valor="Login"/> 

            <MeuInput label="Email" placeholder="exemplo@gmail.com"/>
            <MeuInput label="Senha" placeholder="123456"/>
        </View>
   
    )
    
};

export default Login;
