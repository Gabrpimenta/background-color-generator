import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from '../styles/styles'

interface ColorHistoryProps {
  colorHistory: string[]
}

const ColorHistory: React.FC<ColorHistoryProps> = ({ colorHistory }) => (
  <FlatList
    data={colorHistory}
    keyExtractor={(_, index) => index.toString()}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.historyContainer}
    renderItem={({ item }) => (
      <View style={[styles.colorBox, { backgroundColor: item }]} />
    )}
  />
)

export default ColorHistory
