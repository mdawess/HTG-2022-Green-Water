import { View, Text, Image } from 'react-native'
import React from 'react'
import FarmerInsightDataCotton from '../../data/farmerInsightDataCotton'
import FarmerInsightDataSoy from '../../data/farmerInsightDataSoy'
import FarmerInsightDataSugar from '../../data/farmerInsightDataSugar'

export default function FarmerInsight(props) {

    return (
        <View style={{ position: 'relative', paddingHorizontal: 30, justifyContent: 'space-around', marginBottom: 35 }}>
            {props.selectedCrop === 'Cotton' ?
            
                FarmerInsightDataCotton.map((insight, index) => {
                    return (
                        <View key={index}>
                            <InsightWindow img={insight.image} text={insight.insight}  />
                        </View>
                    )
                }) : props.selectedCrop === 'Soy' ?  FarmerInsightDataSoy.map((insight, index) => {
                    return (
                        <View key={index}>
                            <InsightWindow img={insight.image} text={insight.insight}  />
                        </View>
                    )
                }) : FarmerInsightDataSugar.map((insight, index) => {
                    return (
                        <View key={index}>
                            <InsightWindow img={insight.image} text={insight.insight}  />
                        </View>
                    )
                })
            }
        </View>
    )
}

const InsightWindow = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10}}>
            <Image source={props.img}  style={{ width: 90, height: 90, alignSelf: 'center', marginRight: 10 }} />
            <View style={{ width: 10, height: 120, backgroundColor: '#5BA8A0', borderRadius: 4 }} ></View>
            <View style={{ width: 210, height: 120, backgroundColor: 'white', borderRadius: 12, shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3 }}>
                {/* Add icon from API here */}
                <Text style={{ width: 200, marginLeft: 10, marginTop: 30, fontSize: 17, fontWeight: '600', color: '#5BA8A0'}}>{props.text}</Text>
            </View>
        </View>
    )
}