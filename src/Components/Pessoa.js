import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Pessoa({ nome, roupa, cor, sexo, dtdesaparecimento, dtencontro, status, foto, observacao, local, exibirdetalhes }) {
    
    
    return (
        <View style={css.caixa}>
            <View style={css.caixatexto}>
                <View style={css.avatar}></View>
                <Text style={css.titulo}>{nome}</Text>
            </View>
            
            <View style={css.caixaimagem}>
                <Image source={{ uri: foto }} style={css.imagem}/>
            </View>
            
            
            <View>
            <TouchableOpacity onPress={exibirdetalhes}>
              <Text style={css.botao}>Detalhes</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}
const css = StyleSheet.create({
    caixa: {
        backgroundColor:"#fff",
        height: 490,
        
        borderRadius: 10,
        borderWidth: 3,
        padding: 15,
        marginTop: 30,
        width: 370,
        margin: '0 auto',
    },
    caixatexto: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 5
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "white",
        marginRight: 10
    },
    titulo: {
        color: "#000",
        textAlign: "center",
        fontWeight:"bold"
    },
    caixaimagem: {
        width: "100%",
        height: 390,
        
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        
        
    },
    categoriacaixa: {
        width: "100%",
        marginTop: 15
    },
    descricaocaixa: {
        width: "100%",
        marginTop: 15,
        padding: 10
    },
    descricaotexto: {
        color: "#000",
        textAlign: "justify",
        fontWeight:"bold",
    },
    categoriacaixa: {
        width: "100%",
        padding: 10
    },
    categoryText: {
        color: "#000",
        
    },
    caixapessoa:{
        
        width: "95%",
        height: 500,
        borderRadius:2,
        marginLeft:9
    },
    botao:{
        color:"#000"
    }

})