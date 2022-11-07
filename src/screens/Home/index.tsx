import React, { useState, useEffect} from 'react'
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert, Keyboard } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';

export default function Home() {

    const [participantes, setParticipantes] = useState<string[]>([]);

    const [participanteNome, setParticipanteNome] = useState('');
    
    function handleParticipantAdd(){

        if(participanteNome===''){
            return Alert.alert('Atenção!', 'Nome deve ser espeficicado')
        }
        if(participantes.includes(participanteNome)){
            return Alert.alert('Atenção!', 'Participante já cadastrado')
        }

        setParticipantes(prevState => [...prevState, participanteNome])
        setParticipanteNome('');
        
        //participantes.push('Ana')
        //console.log(participantes)

    }    

    function handleParticipantRemove(nome:string){
        Alert.alert('Atenção!',`Remover o participante ${nome}?`,[
            {
                text:'Sim',
                onPress:() => setParticipantes(prevState => prevState.filter(participantes => participantes !== nome))
            },
            {
                text:'Não',
                style: 'cancel'
            }
        ])
    }

  return (
    <View style={styles.container}>
        <Text key="1" style={styles.eventName}>Nome do Evento</Text>
        <Text key="2" style={styles.eventDate}>Sexta, 4 de Novembro de 2022 </Text>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor={"#6b6b6b"}
                onChangeText={setParticipanteNome}
                value = {participanteNome}
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>  
        <FlatList 
            data={participantes}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant 
                    key={item}
                    name={item} 
                    onRemove={()=>handleParticipantRemove(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={()=>(
                <Text style={styles.listEmptyText}>
                    Ninguem chegou no evento ainda? Adicione participantes à sua lista de presença.
                </Text>
            )}
        />
        
        
        
        
    </View>
  );
}