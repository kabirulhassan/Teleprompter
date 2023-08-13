import { FlatList, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'

const dummyString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl."

const ScrollerComponent = () => {

  const scrollRef = useRef<ScrollView>(null)

  let endOffset = 0;


  const handleScroll = () => {
    if(scrollRef.current){
      console.log("scroll to", endOffset)
      for(let i = 0; i < endOffset; i++){
        setTimeout(() => {
          scrollToPosition(scrollRef, i)
        }, i*10)
      }
    }
  }

  const scrollToPosition = (objectRef: any, position: number) => {
    if(objectRef.current){
      objectRef.current.scrollTo({x: 0, y: position, animated: true})
    }
  }

  useEffect(() => {
    if(scrollRef.current){
    }
  }, [])
  return (
    <ScrollView>
      <ScrollView ref={scrollRef} style={styles.container} onLayout={(layoutObject) => {
        console.log(layoutObject.nativeEvent.layout)
      }}>
        <Text onLayout={(layoutObject)=>{
          endOffset = layoutObject.nativeEvent.layout.y+layoutObject.nativeEvent.layout.height;
          console.log("endOffset", endOffset)
          console.log("layoutObject", layoutObject.nativeEvent.layout)
        }} style={styles.text}>{dummyString}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.primaryButton} onPress={handleScroll}>
        <Text>Start scrolling</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ScrollerComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  primaryButton:{
    backgroundColor: '#00c6ff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  }
})