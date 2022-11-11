import React from "react";
import { Text, StyleSheet, View, Button, Alert} from "react-native";
import Titulo from "../../components/Titulo";
import MeuInput from "../../components/MeuInput";

const Login = () => {
    
    const logar = () => {
        // Esse cara eu uso no mobile
        // Alert.alert("Haahahahaha")

        // Esse cara eu uso na Web
        alert("Fui clicado!!")
    }

    return (
        <View>
            <Titulo valor="Login"/> 

            <MeuInput label="Email" placeholder="exemplo@gmail.com"/>
            <MeuInput label="Senha" placeholder="123456"/>

            <Button 
                color="#1976D2"
                title="Entrar"
                onPress={logar}/>

            <View style={style.esqueciSenha}>
                <Text style={style.textoEsqueciSenha}>Esqueci minha senha</Text>
            </View>
            
        </View>
   
    )
    
};

const style = StyleSheet.create({

    esqueciSenha:{
       textAlign:"right",
       marginTop:12
    },
    textoEsqueciSenha:{
        fontStyle:"italic",
        color:"#1976D2"
    }
});

export default Login;
