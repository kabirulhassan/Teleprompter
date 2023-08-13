import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import ScrollerComponent from './components/ScrollerComponent'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollerComponent />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})