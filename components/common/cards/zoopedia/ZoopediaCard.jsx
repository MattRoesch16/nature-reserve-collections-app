import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import {COLORS, icons, images, SIZES } from '../../../../constants';

import styles from './zoopediacard.style'

const ZoopediaCard = ({ post, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.animalContainer} onPress={handleNavigate}>
        <View style={styles.imageContainer}>
          <Image 
            source={images.mallard}
            style={styles.sizeImg('100%')}
            resizeMode='stretch'
          />
        </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 20}}>Mallard</Text>
        <Text>Description</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ZoopediaCard