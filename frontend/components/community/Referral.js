import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Referral(props) {
  return (
    <View style={{ paddingHorizontal: 30, flexDirection: 'row', alignItems: 'center' }}>
        <Icon name='call-outline' />
        <Input phonePlaceholder={props.phoneNumber} setPhonePlaceholder={props.setPhonePlaceholder} />
    </View>
  )
}

const Icon = (props) => (
      <View>
        <Ionicons name={props.name} size={25}
        />
      </View>
)

const Input = (props) => (
        <View>
            <TextInput
                style={{ 
                    color: 'black',
                    height: 40,
                    width: 280,
                    backgroundColor: '#F6F7F9',
                    marginLeft: 10,
                    marginBottom: 10,
                    borderRadius: 6,
                    paddingHorizontal: 10,
                    fontSize: 16
                }}
                onChangeText={text => 
                    props.setPhonePlaceholder(text)
                }
                value={props.phoneNumber}
                placeholder='+55 ### ####'
                placeholderTextColor={'black'}
            />
         </View>
)