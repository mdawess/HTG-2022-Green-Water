import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/survey/Header'
import FarmerCrops from '../components/home/FarmerCrops'
import Recommendations from '../components/home/Recommendations'
import Navbar from '../components/home/Navbar'

export default function Home({ navigation }) {
  const [selectedCrop, setSelectedCrop] = useState('Soy')

  


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header name='João.' />
      <FarmerCrops setCrop={setSelectedCrop} />
      <Recommendations selectedCrop={selectedCrop} />
      <Navbar navigation={navigation} />
    </View>
  )
}