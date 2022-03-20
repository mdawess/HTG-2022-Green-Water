import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import apiKeys from '../home/apiKeys';

const GOOGLE_API_KEY = apiKeys.google

export default function Location(props) {
    return (
        <View style={{ position: 'relative', paddingHorizontal: 30, marginTop: 25 }}>
            <Text style={{ fontSize: 20, color: '#3B5284', fontWeight: '600' }}>Location</Text>
            <SearchBar locationHandler={props.locationHandler} />
        </View>
    )
}

const SearchBar = (props) => {
    return (
        <View style={{ marginTop: -20, flexDirection: "row" }}>
          <GooglePlacesAutocomplete
            query={{ key: GOOGLE_API_KEY }}
            onPress={(data, details = null) => {
              const city = data.description.split(",")[0];
              props.locationHandler(city);
            }}
            placeholder="Please enter your location"
            textInputProps={{
              placeholderTextColor: '#3B5284'
            }} 
            styles={{
              textInput: {
                  fontWeight: 'bold',
                  fontSize: 16,
                  backgroundColor: '#E2E5ED',
                  borderRadius: 10,
                  marginTop: 30,
                  height: 40
                  
              },
              textInputContainer: {
                  borderRadius: 10,
                  width: 320,
                  alignSelf: 'center'
              }
            }}
          />
        </View>
      )
}