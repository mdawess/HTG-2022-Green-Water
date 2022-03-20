import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import farmer1 from '../../assets/images/farmer1.png'

export default function Header(props) {
  return (
    <View style={{ backgroundColor: '#BBD5FF', borderRadius: 12, height: 128, shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, }}>
        <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
            <View style={{ width: 75, height: 75, backgroundColor: '#3B5284', alignItems: 'center', justifyContent: 'center', borderRadius: 40}}>
                <Image source={farmer1}/>
            </View>
            <Text style={{ marginLeft: 30, fontSize: 25, fontWeight: '400'}}>{'Welcome, ' + props.name}</Text>
        </SafeAreaView>
    </View>
  )
}