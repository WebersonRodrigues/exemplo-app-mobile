import React from "react";
import { Text, StyleSheet, View, Button, Alert} from "react-native";
import Titulo from "../../components/Titulo";
import MeuInput from "../../components/MeuInput";
import { MeuText, MeuButton } from "../../styles/style-geral";

const Login = ({navigation}) => {
    
    const logar = () => {
    // 1° Verificar se email e senha estão informados
    // 1.1 Se não tiver, mandar mensagem ao usuario.
    
    // 2° Fazer uma requsição para verificar se o email e senha podem acessar o app.
    // 2.1 Se não puder, mandar uma mensagem "Usuário ou senha inválidos."
    // 2.2 Se sim, salvar o token e direcionar para dentro do app.
        
    // Direcionar para a tela de Home.
    let email ='Fulano@gmail.com';

       navigation.navigate('Home', {email, doritos: "Doritos gosto muito!!!!"}); 
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


                {/* <MeuButton title="Entrar"></MeuButton> */}

            <View style={style.esqueciSenha}>
                <MeuText cor="red">Esqueci minha senha</MeuText>
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
