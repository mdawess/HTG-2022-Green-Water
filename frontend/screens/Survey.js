import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/survey/Header'
import Location from '../components/survey/Location'
import Size from '../components/survey/Size'
import Crops from '../components/survey/Crops'
import Fertilizer from '../components/survey/Fertilizer'


export default function Survey() {
  const [location, setLocation] = useState('')
  const [range, setRange] = useState('0')

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header name='João.'/>
    <SafeAreaView style={{}}>
      <Location locationHandler={setLocation} />
      <Size range={range} handleRange={setRange} />
      <Crops />
      <Fertilizer />
    </SafeAreaView>
    </View>
  )
}