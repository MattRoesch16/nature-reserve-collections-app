import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch({
    
  })

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? (
        <ActivityIndicator size="large" colors={COLORS.primary}/>
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        data?.map((post) => (
          <NearbyJobCard 
            post={post}
            key={`nearby-post-${post?.post_id}`}
            handleNavigate={() => router.push(`/post-details/${post.post_id}`)}
          />
        ))
      )}
      <NearbyJobCard>

      </NearbyJobCard>
      <NearbyJobCard>
        
      </NearbyJobCard>
    </View>
  )
}

export default Nearbyjobs