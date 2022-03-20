import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import communityData from '../../data/communityData'

export default function CropTypes(props) {
  return (
    <ScrollView horizontal={true} style={{  }}>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
          {communityData.map((crop, index) => {
              return (
                <View key={index} style={{ paddingHorizontal: 10 }}>
                  <CropType cropName={crop.cropType} img={crop.image} setSelected={props.setSelectedCrop} />
                </View>
            )})
          }
        </View>
      </ScrollView>
  )
}

const CropType = (props) => {

    return (
        <TouchableOpacity 
          style={{ marginTop: 20, width: 141, height: 71, borderRadius: 12 }}
          onPress={() => {
            props.setSelected(props.cropName)
          }}
        >
            <Image style={{ position: 'relative' }} source={props.img} />
            <View style={{ backgroundColor: '#FFFFFF', width: 161, height: 71, marginTop: 10, borderRadius: 12, opacity: 0.50, top: -81}}></View>
            <Text style={{ color: '#68752A', fontWeight: '800', top: -130, fontSize: 25, alignSelf: 'center', justifyContent: 'center' }}>{props.cropName}</Text>
        </TouchableOpacity>
    )
}