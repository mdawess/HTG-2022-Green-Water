import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Navbar(props) {
  return (
    <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 'auto', backgroundColor: '#F2FFFE', paddingVertical: 25, borderRadius: 12, borderWidth: 1, borderColor: '#C5DBFF' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Icon name='location-outline' navigation={props.navigation}/>
        <Icon name='home-outline' navigation={props.navigation} />
        <Icon name='earth-outline' navigation={props.navigation} />
      </View>
    </View>
  )
}

const Icon = (props) => (
  <TouchableOpacity onPress={
    () => {
      if (props.name === 'location-outline') {
        props.navigation.goBack()
      } else if (props.name === 'earth-outline') {
        props.navigation.navigate('Community')
      } else {
        props.navigation.navigate('Home')
      }
    }
  }>
    <View>
      <Ionicons name={props.name} size={25}
      />
    <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
)