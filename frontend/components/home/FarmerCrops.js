import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import farmerCropData from '../../data/farmerCropData'

export default function FarmerCrops(props) {
  return (
    <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 25 }}>
        <Text style={{ fontSize: 20, color: '#94B447', fontWeight: '600' }}>Your Crops</Text>
        <Text style={{ fontSize: 15, color: '#94B447', marginTop: 5}}>Click on the crop to grow more</Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
            {/* Add mapping to allow for extendability */}
            <CropType img={farmerCropData[0].image} cropName={farmerCropData[0].cropType} setSelected={props.setCrop} />
            <CropType img={farmerCropData[1].image} cropName={farmerCropData[1].cropType} setSelected={props.setCrop} />
        </View>
    </View>
  )
}



const CropType = (props) => {

    return (
        <TouchableOpacity 
          style={{ marginTop: 20, width: 141, height: 71 }}
          onPress={() => {
            props.setSelected(props.cropName)
          }}
        >
                <Image style={{ position: 'relative' }} source={props.img} />
                <View style={{ backgroundColor: '#FFFFFF', width: 141, height: 71, marginTop: 10, borderRadius: 11, opacity: 0.50, top: -81}}></View>
                <Text style={{ alignSelf: 'center', color: '#68752A', fontWeight: '800', top: -130, fontSize: 25 }}>{props.cropName}</Text>
        </TouchableOpacity>
    )
}