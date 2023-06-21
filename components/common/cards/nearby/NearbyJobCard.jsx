import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import {COLORS, icons, images, SIZES } from '../../../../constants';

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ post, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.postContainer} onPress={handleNavigate}>
      <View>
        <Text style={{marginBottom: 10}}>User Name</Text>
      </View>
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
        <Text>{post.postName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard