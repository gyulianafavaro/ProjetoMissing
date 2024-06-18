import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import Detalhes from '../Components/Detalhes';

import Pessoa from '../Components/Pessoa';
import Inserir from './Inserir';
import Observacao from '../Components/Detalhes'


export default function Home() {
  const [pessoa, setPessoa] = useState([]);
  const [error, setError] = useState(false)
  const [detalhes, setDetalhes] = useState(false);
  const [observacao, setObservacao] = useState(false);
  const [item, setItem] = useState();



  async function getPessoa() {
    try {
      const response = await fetch('http://10.139.75.27:5251/api/Pessoas/GetAllPessoas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const json = await response.json();
        setPessoa(json);

      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  }



  useEffect(() => {
    getPessoa();
  }, []);

  function exibirdetalhes(item) {
    setItem(item);
    setDetalhes(true);
  }





  function renderPessoas({ item }) {
    return (
      <View>

        <Pessoa
          nome={item.pessoaNome}
          roupa={item.pessoaRoupa}
          cor={item.pessoaCor}
          sexo={item.pessoaSexo}
          observacao={item.pessoaObservacao}
          foto={item.pessoaFoto}
          dtdesaparecimento={item.pessoaDtDesaperecimento}
          dtencontro={item.pessoaDtEncontro}
          status={item.pessoaStatus}
          local={item.pessoaLocalDesaparecimento}
          exibirdetalhes={() =>exibirdetalhes(item)}
        />
       
          
          
          
        </View>
      
    )
  }

  return (
    <View style={css.container}>
      {pessoa.length > 0 && !detalhes &&
        <>
          <FlatList style={css.flatlist}
            data={pessoa}
            renderItem={renderPessoas}
            keyExtractor={(item) => item.pessoaId}
            contentContainerStyle={css.listContainer}
          />
        </>
      }
      {!pessoa && !detalhes &&
        <Text style={css.text}>Nenhum Pessoa encontrado.</Text>
      }
      {detalhes && <Detalhes handle={setDetalhes} item={item} />}
      {observacao && <Observacao handle={setObservacao} item={item} />}

    </View>
  )
}


const css = StyleSheet.create({
  container: {
    backgroundColor: "#C60000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  caixa: {
  backgroundColor: "#fff",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 10,
  paddingVertical: 20,
  marginBottom: 20,
  height:460,
  marginTop:115
  },
  text: {
    color: "#000",
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
  stories: {
    width: "100%",
    height: 100,
  },
  foto:{
    width:300,
    height:300,
    borderRadius:3
  },
  nome:{
    fontWeight:"bold",
  }
})