import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

export default function Size(props) {

    return (
        <View>
            <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 15 }}>
                <Text style={{ fontSize: 20, color: '#5BA8A0', fontWeight: '600' }}>Size</Text>
                <FarmSize range={props.range} handleRange={props.handleRange} />
            </View>
        </View>
  )
}

const FarmSize = (props) => {

     return (
         <View style={{ alignItems: 'center', marginTop: 15}}>
             <Text style={{ fontSize: 18, fontWeight: '600'}}>{props.range}</Text>
             <Slider 
                style={{ width: 300, height: 40}}
                minimumValue={0}
                maximumValue={20}
                minimumTrackTintColor='#5BA8A0'
                thumbTintColor='#5BA8A0'
                value={0.5}
                onValueChange={value => props.handleRange(() => {
                    const num = parseInt(value)
                    if (num < 20) {
                        return num + ' ha'
                    } else {
                        return num + '+' + ' ha'
                    }
                })}
             />
         </View>
     )
}