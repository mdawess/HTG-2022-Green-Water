import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/survey/Header'
import Navbar from '../components/home/Navbar'
import CropTypes from '../components/community/CropTypes'
import FarmerInsight from '../components/community/FarmerInsight'
import Referral from '../components/community/Referral'

export default function Community({ navigation }) {
  const [selectedCrop, setSelectedCrop] = useState('Cotton')
  const [phoneNumber, setPhonePlaceholder] = useState('+55 21# #### ')

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header name='João.'/>
      <CropTypes setSelectedCrop={setSelectedCrop} />
      <View style={{  }}>
        <FarmerInsight selectedCrop={selectedCrop} />
      </View>
      <Referral phonePlaceholder={phoneNumber} setPhonePlaceholder={setPhonePlaceholder} />
      <Navbar navigation={navigation} />
    </View>
  )
}