import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import fertilizer from '../../data/fertilizer'

export default function Fertilizer() {
  const [selected, setSelected] = useState('')

  return (
    <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 15 }}>
      <Text style={{ fontSize: 20, color: '#5D6E1E', fontWeight: '600' }}>Fertilizer</Text>
      <Text style={{ fontSize: 15, color: '#5D6E1E', marginTop: 5 }} >What type of fertilizer do you use?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
      {fertilizer.map((type, index) => 
        <View key={index} style={{  }}>
          <Options fertilizerType={type.type} selected={selected} setSelected={setSelected}/>
        </View>
      )}
      </View>
    </View>
  )
}

const Options = (props) => {

  const styles = StyleSheet.create({
    lightBackground: {
      backgroundColor: 'white', 
      width: 90, 
      height: 30, 
      borderRadius: 10, 
      justifyContent: 'center', 
      borderColor: '#5D6E1E', 
      borderWidth: 2,
    },
    darkBackground: {
      backgroundColor: '#5D6E1E', 
      width: 90, 
      height: 30, 
      borderRadius: 10, 
      justifyContent: 'center', 
      borderColor: '#5D6E1E', 
      borderWidth: 2,
    },
    lightText: {
      color: '#5D6E1E',
      fontWeight: '600',
      alignSelf: 'center'
    },
    darkText: {
      color: 'white',
      fontWeight: '600',
      alignSelf: 'center'
    }
    })  

    return (
    <TouchableOpacity 
      style={props.fertilizerType === props.selected ? styles.darkBackground : styles.lightBackground}
      onPress={() => {
        props.setSelected(props.fertilizerType)
      }}
    >
      <Text style={props.fertilizerType === props.selected ? styles.darkText : styles.lightText} >{props.fertilizerType}</Text>
    </TouchableOpacity>
  )
}