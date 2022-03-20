import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Recommendations(props) {
  return (
    <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 25 }}>
        <Text style={{ fontSize: 20, color: '#3B5284', fontWeight: '600' }}>Recommendations</Text>
        {props.selectedCrop === 'Soy' ? 
            <RecommendationWindow recoText='30mm of rain is forcasted this week. No need to irrigate' text='Soy crops only require 14mm to fully grow' weather={props.weather} /> : props.selectedCrop === 'Sugar' ?
            <RecommendationWindow recoText='30mm of rain is forcasted this week. No need to irrigate' text='Sugar crops only require 9mm to fully grow' weather={props.weather} />  : props.selectedCrop === 'Cotton' ?
            <RecommendationWindow recoText='30mm of rain is forcasted this week. No need to irrigate' text='Cotton crops only require 16mm to fully grow' weather={props.weather} /> :
            <RecommendationWindow recoText='30mm of rain is forcasted this week. No need to irrigate' text='Maize crops only require 5mm to fully grow' weather={props.weather} />
        }
    </View>
  )
}

const RecommendationWindow = (props) => {
    return (
        <View style={{ marginTop: 25, flexDirection: 'row'}}>
            <View style={{ width: 10, height: 170, backgroundColor: '#3B5284', borderRadius: 4 }} ></View>
            <View style={{ width: 300, height: 170, backgroundColor: 'white', borderRadius: 12, shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3 }}>
                {/* Add icon from API here */}
                <Image source={{ uri: props.weather }} style={{ width: 70, height: 70, position: 'relative', top: 4, left: 3 }} />
                <Text style={{ width: 280, marginLeft: 10, marginTop: 5, fontSize: 18, fontWeight: '600'}}>{props.recoText}</Text>
                <Text style={{ width: 280, marginLeft: 10, marginTop: 5, fontSize: 12, fontWeight: '600'}}>{props.text}</Text>
            </View>
        </View>
    )
}