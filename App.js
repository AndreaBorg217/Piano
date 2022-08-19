/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect, useRef} from 'react';
 import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
 
 
 
 const App = () => {

  const whiteKeys = [
    {note: 'C', sound: 'C.mp3'},
    {note: 'D', sound: 'D.mp3'},
    {note: 'E', sound: 'E.mp3'},
    {note: 'F', sound: 'F.mp3'},
    {note: 'G', sound: 'G.mp3'},
    {note: 'A', sound: 'A.mp3'},
    {note: 'B', sound: 'B.mp3'},
    {note: 'C', sound: 'C_va.mp3'},
  ]

  const blackKeys = [
    {note: 'Db\nC#', sound: 'Db.mp3', position: 55},
    {note: 'Eb\nD#', sound: 'Eb.mp3', position: 80},
    {note: 'Gb\nF#', sound: 'Gb.mp3', position: 190},    
    {note: 'Ab\nG#', sound: 'Ab.mp3', position: 215},
    {note: 'Bb\nA#', sound: 'Bb.mp3', position: 240},
  ]

const WhiteKey = ({note, sound}) => {
  return(
    <TouchableOpacity style = {styles.whiteKey} onPress = {console.log(sound)}>
      <Text style = {styles.whiteKeyText}>{note}</Text>
    </TouchableOpacity>
  )
}

const BlackKey = ({note, sound, position}) => {
  return(
    <TouchableOpacity style = {[styles.blackKey, {transform: [{translateY: 200}, {translateX: position}]}]} onPress = {console.log(sound)}>
      <Text style = {styles.blackKeyText}>{note}</Text>
    </TouchableOpacity>
  )
}

   return (
     <View style={styles.container}>
      <View style = {styles.keyboard}>

      <View style = {styles.blackkeys}>
        <BlackKey note = {blackKeys[0].note} sound = {blackKeys[0].sound} position = {55}/>
        <BlackKey note = {blackKeys[1].note} sound = {blackKeys[1].sound} position = {80}/>
        <BlackKey note = {blackKeys[2].note} sound = {blackKeys[2].sound} position = {190}/>
        <BlackKey note = {blackKeys[3].note} sound = {blackKeys[3].sound} position = {215}/>
        <BlackKey note = {blackKeys[4].note} sound = {blackKeys[4].sound} position = {240}/>
      </View> 
      
        <FlatList
          data={whiteKeys}
          renderItem={(item) => <WhiteKey note = {item.note} sound = {item.sound} />}
          keyExtractor={(item, index) => index}
          scrollEnabled={false}
          numColumns = {8}
        />
      </View>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '100%',
     flex: 1,
     backgroundColor: '#123',
     alignItems: 'center',
     justifyContent: 'center'
   },
   keyboard: {
    position: 'absolute',
    transform: [{translateY: -70}]
   },
   whiteKey: {
    width: 85,
    height: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
   },
   blackKey: {
    width: 60,
    height: 200,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    zIndex: 1
   },
   blackkeys:{
    flexDirection: 'row'
   }
 });
 
 export default App;
 