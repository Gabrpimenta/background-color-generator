import React, { useRef, useState, useEffect } from 'react'
import {
  Animated,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native'
import CenterText from './src/components/CenterText'
import BottomSection from './src/components/BottomSection'
import { styles } from './src/styles/styles'

const generateRandomColor = (): string => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)})`
  return randomColor
}

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] =
    useState<string>('rgb(255, 255, 255)')
  const [colorHistory, setColorHistory] = useState<string[]>([])
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const animatedColor = useRef(new Animated.Value(0)).current

  useEffect(() => {
    setBackgroundColor('rgb(255, 255, 255)')
  }, [])

  const handlePress = () => {
    const newColor = generateRandomColor()
    setBackgroundColor(newColor)
    setColorHistory((prev) => [newColor, ...prev])

    Animated.timing(animatedColor, {
      toValue: Math.random(),
      duration: 500,
      useNativeDriver: false,
    }).start()
  }

  const resetBackgroundColor = () => {
    setBackgroundColor('rgb(255, 255, 255)')
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { backgroundColor }]}>
        <CenterText text="Hello there" isDarkTheme={isDarkTheme} />
        <BottomSection
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          resetBackgroundColor={resetBackgroundColor}
          colorHistory={colorHistory}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default App
