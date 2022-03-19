import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/survey/Header'
import Location from '../components/survey/Location'


export default function Survey() {
  const [location, setLocation] = useState('')


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header name='João.'/>
    <SafeAreaView style={{}}>
      <Location locationHandler={setLocation} />
    </SafeAreaView>
    </View>
  )
}