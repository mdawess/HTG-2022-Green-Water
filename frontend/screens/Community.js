import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/survey/Header'
import Navbar from '../components/home/Navbar'
import CropTypes from '../components/community/CropTypes'
import FarmerInsight from '../components/community/FarmerInsight'

export default function Community({ navigation }) {
  const [selectedCrop, setSelectedCrop] = useState('Soy')

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header name='João.'/>
      <CropTypes setSelectedCrop={setSelectedCrop} />
      <FarmerInsight />

      <Navbar navigation={navigation} />
    </View>
  )
}