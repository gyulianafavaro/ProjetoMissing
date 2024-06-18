import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function Inserir() {

    
    const [usuarioNome, setUsuarioNome] = useState("");
    const [usuarioEmail, setUsuarioEmail] = useState("");
    const [usuarioPassword, setUsuarioPassword] = useState("");
    const [usuarioTelefone, setUsuarioTelefone] = useState("");
    const [erro, setErro] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    async function Cadastro() {
        await fetch('http://10.139.75.27:5251/api/Usuarios/InsertUsuario', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                usuarioEmail: usuarioEmail,
                    usuarioPassword:usuarioPassword,
                    usuarioNome:usuarioNome,
                    usuarioTelefone:usuarioTelefone
                    
            })
        })
        .then((response) => response.json())
        .then(json => { 
          setUsuarioTelefone(''); 
          setUsuarioEmail(''); 
          setUsuarioNome('');  
          setUsuarioPassword(''); 
        })
        .catch(err => console.log(err));
    }
    return (
        <ScrollView contentContainerStyle={css.container}>
            {sucesso ?
                <Text style={css.texto}>Obrigado por se cadastrar.Seu cadastro foi realizado com sucesso!</Text>
                :
                <>

                    <TextInput placeholder='Nome'  value={usuarioNome} style={css.input} onChangeText={(digitado) => setUsuarioNome(digitado)} placeholderTextColor={"white"}></TextInput>
                    <TextInput placeholder='Email'value={usuarioEmail} onChangeText={(digitado) => setUsuarioEmail(digitado)} style={css.input} placeholderTextColor={"white"}></TextInput>
                    <TextInput placeholder='Senha'value={usuarioPassword} onChangeText={(digitado) => setUsuarioPassword(digitado)} style={css.input} placeholderTextColor={"white"}></TextInput> 
                    <TextInput placeholder='Telefone'value={usuarioTelefone} onChangeText={(digitado) => setUsuarioTelefone(digitado)} style={css.input} keyboardType="numeric" placeholderTextColor={"white"}></TextInput>

                    <TouchableOpacity style={css.btnCadastrar} onPress={Cadastro}>
                        <Text style={css.btnCadastrarText}>CADASTRAR</Text>
                    </TouchableOpacity>
                    {erro && <Text style={css.texto}>Revise cuidadosamente os campos!</Text>}
                </>
            }
        </ScrollView>

    )
}

const css = StyleSheet.create({
    container: {
        
        flexGrow: 1,
        color: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: "#C60000",
        fontWeight: "bold",
        marginBottom: 18,
        fontSize: 20

    },
    input: {
        width: "90%",
        height: 55,
        backgroundColor: "#C60000",
        borderRadius: 8,
        padding: 10,
        color: "white",
        marginBottom: 30
    },
    btnCadastrar: {
        backgroundColor: "#C60000",
        width: "45%",
        height: 50,
        borderRadius: 8,
        color: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    btnCadastrarText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    }
})