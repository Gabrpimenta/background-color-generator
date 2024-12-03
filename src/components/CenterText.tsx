import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/styles'

interface CenterTextProps {
  text: string
  isDarkTheme: boolean
}

const CenterText: React.FC<CenterTextProps> = ({ text, isDarkTheme }) => (
  <View style={styles.centerBox}>
    <Text style={[styles.text, isDarkTheme && styles.darkText]}>{text}</Text>
  </View>
)

export default CenterText
