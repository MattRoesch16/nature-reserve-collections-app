import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch 
  ('search', {
    query: "React Native developer",
    num_pages: 1
  });

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.cardsContainer}>
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
      </View>
    </View>
  )
}

export default Nearbyjobs