import React from "react";
import { Text } from "react-native";


export default function Home({route}){

    return (
        <Text> {route.params?.email || "Não veio o email" }
        
            <Text> {route.params?.doritos || "Não veio o doritos" }</Text>
        
        </Text>
    )
} 

// export default Home;