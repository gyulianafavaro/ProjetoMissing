import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
import Cadastro from './Inserir';


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
   
    const{Login, error} = useContext( AuthContext );

    const [cadastro,setCadastro] = useState(false);

    function realizalogin()
    {
        Login( email, senha );
    }

    function Voltar()
    { 
        setCadastro(false)
    }

    if(cadastro){
        return(
            <>
            
            <Cadastro/>
            <TouchableOpacity style={css.botaos} onPress={Voltar}>
            <Text style={css.btnLoginText}>VOLTAR</Text>
            </TouchableOpacity>

            </>
        )
    }


    

    return (
        <ScrollView contentContainerStyle={css.tudo}>
            <Image style={css.imagem} source={require('../../src/img/logotipohome.png')}></Image>
            <View><Text style={css.texto}>Entre ou faça o cadastro</Text></View>
            <View style={css.caixa}>
                <TextInput style={css.input} placeholder="E-mail" value={email} onChangeText={ (digitado) => setEmail( digitado )} />
                <TextInput style={css.input} placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={ (digitado) => setSenha( digitado )} />
                
                <TouchableOpacity onPress={() => setCadastro(!cadastro)}>
                    <Text style={css.cadastro}>Ainda não tem uma conta? Cadastre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.btn} onPress={realizalogin}>
                    <Text style={css.btnText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
            {error &&
            <View style={css.error}>
                <Text style={css.errorText}>Revise os campos. Tente novamente</Text>
            </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    input: {
        width: "83%",
        height: 40,
        marginBottom: 5,
        marginLeft: '8%',
        borderRadius: 6,
        padding: 8,
        marginTop: 25,
        borderWidth: 2,
        fontSize: 15,
        borderColor: '#DEDEDE',
        color: '#7C7C7C'
    },
    btn: {
        width: "83%",
        marginTop: 20,
        marginLeft: '8%',
        height: 45,
        backgroundColor: '#C60000',
        borderRadius: 5,
        color: 'white'
    },
    tudo: {
        backgroundColor: 'white',
        flexGrow: 1
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        lineHeight: 37,
        fontSize: 15,
        fontWeight: "bold"
    },
    caixa: {
        width: '80%',
        height: '28%',
        borderRadius: 7,
        marginLeft: '10%',
        
        backgroundColor: '#F2F2F2'
    },
    imagem: {
        width: 220,
        height: 250,
        resizeMode: 'contain',
        marginLeft: '22%',
        marginTop: '15%',

    },
    texto: {
        marginLeft: '23%',
        marginTop: '15%',
        fontWeight: "bold",
        color: "#C60000",
        fontSize: 20
    },
    cadastro: {
        marginLeft: '11%',
        marginTop:12
    },
    btnLoginText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    botaos:{
        backgroundColor: "#C60000",
        width: "30%",
        height: 50,
        borderRadius: 8,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:"15%",
        marginLeft:"35%"
    }

});
