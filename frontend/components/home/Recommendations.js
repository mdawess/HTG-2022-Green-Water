import { View, Text, VirtualizedList } from 'react-native'
import React from 'react'

export default function Recommendations(props) {
  return (
    <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 25 }}>
        <Text style={{ fontSize: 20, color: '#3B5284', fontWeight: '600' }}>Recommendations</Text>
        {props.selectedCrop === 'Soy' ? 
            <RecommendationWindow recoText='30mm of rain is forcasted this week. No need to irrigate' text='Soy crops only require 14mm to fully grow' /> :
            <RecommendationWindow recoText='30mm of rain is forcasted this week. No need to irrigate' text='Sugar crops only require 9mm to fully grow' />
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
                <Text style={{ width: 280, marginLeft: 10, marginTop: 30, fontSize: 18, fontWeight: '600'}}>{props.recoText}</Text>
                <Text style={{ width: 280, marginLeft: 10, marginTop: 5, fontSize: 12, fontWeight: '600'}}>{props.text}</Text>
            </View>
        </View>
    )
}