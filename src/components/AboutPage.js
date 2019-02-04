import React from 'react'
import { View, Text, Button } from 'react-native'

const AboutPage = ({ navigation }) => (
    <View>
        <Text>AboutPage</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('HomePage')}
        />
    </View>
)

export default AboutPage