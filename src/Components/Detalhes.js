import { View, Text, TouchableOpacity, Image, StyleSheet,ScrollView,TextInput } from 'react-native'
import React,{useState} from 'react'


export default function Detalhes({ handle, item, pessoa, pessoafoto }) {

    const [observacao, setObservacao] = useState(false);
    const [observacaoId, setObservacaoId] = useState(0);
    const [observacaoDescricao, setObservacaoDescricao] = useState('');
    const [observacaoLocal, setObservacaoLocal] = useState('');
    const [observacaoData, setObservacaoData] = useState('');
    const [pessoaId, setPessoaId] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [error, setError] = useState(false);

    async function SalvarObservacao() {
        await fetch('http://10.139.75.27:5251/api/Observacoes/InsertObservacoes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            observacaoId: observacaoId,
            observacaoDescricao: observacaoDescricao,
            observacaoLocal: observacaoLocal,
            observacaoData: observacaoData,
            pessoaId: pessoaId,
            usuarioId: usuarioId
          })
        })
      .then(res => res.json())
      .then(json => {
       
        setObservacaoDescricao(json.ObservacaoDescricao);
        setObservacaoLocal(json.ObservacaoLocal);
        setObservacaoData(json.ObservacaoData);
        setPessoaId(json.pessoaId);
        setUsuarioId(json.usuarioId);
      })
      .catch(err => console.log(err));
  }
        
    return (
        <ScrollView>
        <Text style={css.nome}>{item.pessoaNome}</Text>
        <Image style={css.foto} source={{ uri: item.pessoaFoto }}></Image>
        <Text style={css.campo}>{item.pessoaRoupa}</Text>
        <Text style={css.campo}>{item.pessoaTipo}</Text>
        <Text style={css.campo}>{item.pessoaCor}</Text>
        <Text style={css.campo}>{item.pessoaSexo}</Text>
        <Text style={css.campo}>{item.pessoaObservacao}</Text>
        <Text style={css.campo}>{item.pessoaDtDesaparecimento}</Text>
        <Text style={css.campo}>{item.pessoaLocalDesaparecimento}</Text>
        <Text style={css.campo}>{item.pessoaDtEncontro}</Text>
        <Text style={css.campo}>{item.pessoaStatus}</Text>
        
        <TouchableOpacity onPress={() => handle(false)}>
        <Text style={css.voltar}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setObservacao(true)}>
        <Text style={css.observacao}>Nova Observação</Text>
      </TouchableOpacity>

      {observacao && 
        <View style={css.campo}>
          <TextInput
            inputMode="text"
            style={css.input}
            value={observacaoDescricao}
            onChangeText={(digitado) => setObservacaoDescricao(digitado)}
            placeholderTextColor="black"
            placeholder='Descrição da pessoa'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={observacaoLocal}
            onChangeText={(digitado) => setObservacaoLocal(digitado)}
            placeholderTextColor="black"
            placeholder='Local da descrição da Pessoa'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={observacaoData}
            onChangeText={(digitado) => setObservacaoData(digitado)}
            placeholderTextColor="black"
            placeholder='Data da descrição da Pessoa'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={pessoaId}
            onChangeText={(digitado) => setPessoaId(digitado)}
            placeholderTextColor="black"
            placeholder='Pessoa'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={usuarioId}
            onChangeText={(digitado) => setUsuarioId(digitado)}
            placeholderTextColor="black"
            placeholder='Usuário'
          />
          <TouchableOpacity onPress={SalvarObservacao}>
            <Text style={css.observacao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      }
    </ScrollView>
  )
}



const css = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    voltar: {
        backgroundColor: "white",
        height: 40,
        padding: 10,
        alignItems: "center",
        width: "30%",
        marginLeft: 100,
        marginBottom: 15,
        elevation: 15,
        textAlign: "center",
        marginTop: 10,
        borderRadius: 10,
        width: 70,

    },
    obs:{
        backgroundColor: "white",
        height: 40,
        padding: 10,
        alignItems: "center",
        width: 80,
        marginLeft: 20,
        marginBottom: 15,
        elevation: 15,
        textAlign: "center",
        marginTop: 10,
        borderRadius: 10,
        width: 70,
    },

    campo: {
        backgroundColor: "white",
        borderRadius: 4,
        marginBottom: 5,
        marginTop: 4,
        padding: 5
    },

});