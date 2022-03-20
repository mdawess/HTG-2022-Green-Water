import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/survey/Header'
import FarmerCrops from '../components/home/FarmerCrops'
import Recommendations from '../components/home/Recommendations'
import Navbar from '../components/home/Navbar'
import apiKeys from '../components/home/apiKeys'

const WEATHER_API_KEY = apiKeys.weather

export default function Home({ navigation, route }) {
  
  const { location } = route.params

  const [selectedCrop, setSelectedCrop] = useState('Soy')
  const [endpoint, setEndpoint] = useState('current')
  const [weather, setWeather] = useState('https://cutewallpaper.org/24/black-and-white-sun/260322015.jpg')

  const getWeather = () => {
    const weatherUrl = `http://api.weatherapi.com/v1/${endpoint}.json?key=${WEATHER_API_KEY}&q=Vancouver`

    return fetch(weatherUrl).then((res) => res.json()).then((json) => setWeather('http:' + json.current.condition.icon))
  }

  useEffect(() => {
    getWeather()
  }, [endpoint, location])

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header name='João.' />
      <FarmerCrops setCrop={setSelectedCrop} />
      <Recommendations selectedCrop={selectedCrop} weather={weather} />
      <Navbar navigation={navigation} />
    </View>
  )
}