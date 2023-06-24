import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import {COLORS, icons, images, SIZES } from '../../../../constants';

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({userid, description, propic, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.postContainer} onPress={handleNavigate}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Image source={propic} style={{height: 30, width: 30, borderRadius: 15, marginBottom: 10}}/>
        <Text style={{marginBottom: 10, marginTop: 5, marginLeft: 10}}>{userid}</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image 
            source={images.tempLocation}
            style={styles.sizeImg('100%')}
            resizeMode='stretch'
          />
        </View>
      </ScrollView>
      <View>
        <Text>{userid}: {description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard