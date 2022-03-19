import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import cropDataA from '../../data/cropDataA'
import cropDataB from '../../data/cropDataB'


export default function Crops() {
  return (
    <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 15 }}>
      <Text style={{ fontSize: 20, color: '#94B447', fontWeight: '600' }}>Crops</Text>
      <Text style={{ fontSize: 15, color: '#94B447', marginTop: 5 }} >What crops do you grow?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          {cropDataA.map((cropInfo, index) => {
              return (
                  <View key={index}>
                      <CropType cropName={cropInfo.cropType} img={cropInfo.image} />
                  </View>
              )
          })}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          {cropDataB.map((cropInfo, index) => {
              return (
                  <View key={index}>
                      <CropType cropName={cropInfo.cropType} img={cropInfo.image} />
                  </View>
              )
          })}
      </View>
    </View>
  )
}

const CropType = (props) => {

    return (
        <View style={{ marginTop: 10, width: 87, height: 71 }}>
                <Image style={{ position: 'relative'}} source={props.img} />
                <View style={{ backgroundColor: '#FFFFFF', width: 87, height: 71, marginTop: 10, borderRadius: 12, opacity: 0.75, top: -81 }}></View>
                <BouncyCheckbox 
                    style={{ marginTop: 5, marginLeft: 5, position: 'relative', top: -150}} 
                    fillColor='#94B447' 
                    iconStyle={{ borderRadius: 9, borderWidth: 2 }}    
                    // Add the onpress handler to allow us to see whats checked
                /> 
                <Text style={{ top: -130, alignSelf: 'center', color: '#68752A', fontWeight: '800' }}>{props.cropName}</Text>
        </View>
    )
}