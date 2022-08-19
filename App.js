/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {View, StyleSheet, Text, FlatList, TouchableOpacity, Switch} from 'react-native';
 import Sound from 'react-native-sound';  
 Sound.setCategory('Playback');

 var a = new Sound('a.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load a', error);
    return;
  }
 });


 var ab = new Sound('ab.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load ab', error);
    return;
  }
});

var b = new Sound('b.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load b', error);
    return;
  }
});
 

var bb = new Sound('bb.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load b', error);
    return;
  }
});

var c = new Sound('c.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load c', error);
    return;
  }
});

var d = new Sound('d.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load d', error);
    return;
  }
});

var db = new Sound('db.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load db', error);
    return;
  }
});

var e = new Sound('e.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load e', error);
    return;
  }
});

var eb = new Sound('eb.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load eb', error);
    return;
  }
});

var f = new Sound('f.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load f', error);
    return;
  }
});

var g = new Sound('g.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load g', error);
    return;
  }
});

var gb = new Sound('gb.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load gb', error);
    return;
  }
});

var cva = new Sound('cva.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('Failed to load cva', error);
    return;
  }
});

 
const App = () => {
  const whiteKeys = [
    {note: 'C', sound: c},
    {note: 'D', sound: d},
    {note: 'E', sound: e},
    {note: 'F', sound: f},
    {note: 'G', sound: g},
    {note: 'A', sound: a},
    {note: 'B', sound: b},
    {note: 'C', sound: cva},
  ]

  const blackKeys = [
    {note: 'Db\nC#', sound: db, position: 45},
    {note: 'Eb\nD#', sound: eb, position: 60},
    {note: 'Gb\nF#', sound: gb, position: 150},    
    {note: 'Ab\nG#', sound: ab, position: 165},
    {note: 'Bb\nA#', sound: bb, position: 180},
  ]

  const [showNotes, setShowNotes] = useState(false)

  const WhiteKey = ({note, sound}) => {
  return(
    <TouchableOpacity style = {styles.whiteKey} onPress = {() =>sound.setSpeed(1).play()}>
      <Text style = {[styles.whiteKeyText, {color: showNotes ? "black" : "white"}]}>{note}</Text>
    </TouchableOpacity>
  )
}

  const BlackKey = ({note, sound, position}) => {
    return(
      <TouchableOpacity style = {[styles.blackKey, {transform: [{translateY: 200}, {translateX: position}]}]} onPress = {() => sound.setSpeed(1).play()}>
        <Text style = {[styles.blackKeyText, {color: showNotes ? "white" : "black"}]}>{note}</Text>
      </TouchableOpacity>
    )
  }

   return (
     <View style={styles.container}>

      
      <Switch
        style = {styles.switch}
        trackColor={{ false: "teal", true: "white" }}
        thumbColor={showNotes ? "teal" : "white"}
        onValueChange={() => setShowNotes(!showNotes)}
        value={showNotes}
      />

      <View style = {styles.keyboard}>

        <View style = {styles.blackkeys}>
          <BlackKey note = {blackKeys[0].note} sound = {blackKeys[0].sound} position = {45}/>
          <BlackKey note = {blackKeys[1].note} sound = {blackKeys[1].sound} position = {60}/>
          <BlackKey note = {blackKeys[2].note} sound = {blackKeys[2].sound} position = {150}/>
          <BlackKey note = {blackKeys[3].note} sound = {blackKeys[3].sound} position = {165}/>
          <BlackKey note = {blackKeys[4].note} sound = {blackKeys[4].sound} position = {180}/>
        </View> 

          <FlatList
            data={whiteKeys}
            renderItem={({item}) => <WhiteKey note = {item.note} sound = {item.sound} />}
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15
   },
   blackKey: {
    width: 75,
    height: 200,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
   },
   blackkeys:{
    flexDirection: 'row'
   },
   switch:{
    transform: [{translateY: -150}, {translateX: -300}],
    zIndex: 1
   },
   whiteKeyText:{
    fontSize: 30,
    fontWeight: 'bold',
   },
   blackKeyText:{
    color: 'white',
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
   }
 });
 
 export default App;
 