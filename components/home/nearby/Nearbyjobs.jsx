import React from 'react'
import { View, Text } from 'react-native'

import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const Nearbyjobs = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <NearbyJobCard>

      </NearbyJobCard>
      <NearbyJobCard>
        
      </NearbyJobCard>
    </View>
  )
}

export default Nearbyjobs