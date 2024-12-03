import React from 'react'
import { View, Pressable, Text } from 'react-native'
import ColorHistory from './ColorHistory'
import { styles } from '../styles/styles'

interface BottomSectionProps {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
  resetBackgroundColor: () => void
  colorHistory: string[]
}

const BottomSection: React.FC<BottomSectionProps> = ({
  isDarkTheme,
  setIsDarkTheme,
  resetBackgroundColor,
  colorHistory,
}) => (
  <View style={styles.bottomContainer}>
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, isDarkTheme && styles.darkButton]}
        onPress={() => setIsDarkTheme((prev) => !prev)}
      >
        <Text style={[styles.buttonText, isDarkTheme && styles.darkButtonText]}>
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.resetButton]}
        onPress={resetBackgroundColor}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
    <Text style={[styles.historyTitle, isDarkTheme && styles.darkText]}>
      Color History
    </Text>
    <ColorHistory colorHistory={colorHistory} />
  </View>
)

export default BottomSection
