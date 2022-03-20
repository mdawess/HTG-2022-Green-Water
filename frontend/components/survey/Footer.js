import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import farmer1 from '../../assets/images/farmer1.png'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Footer(props) {
  return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginTop: 30 }}>
            <View style={{ width: 55, height: 55, backgroundColor: '#3B5284', alignItems: 'center', justifyContent: 'center', borderRadius: 40}}>
                <Image source={farmer1} style={{ width: 50, height: 50}} />
            </View>
            <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: '400', width: 200}}>{'Recommendations on ' + props.selectedCrop + ' are informed by farmers in your area like ' + props.name}</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                <AntDesign name="arrowright" size={30} style={{ color: '#3B5284', marginLeft: 30}} />
            </TouchableOpacity>
        </View>
  )
}