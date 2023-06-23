import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native'
import axios from 'axios';

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();
  const [userName, setUserName] = useState();
  const [ID , setID] = useState();
  const [post, setPost] = useState([]);

  const { data, isLoading, error } = useFetch({
    
  })

  useEffect (() => {
    axios.get('http://localhost:3000/profile')
    .then(response => setUserName(response.data.firstName))
    .catch(error => console.log(error))
  })
  useEffect (() => {
    axios.get('http://localhost:3000/employees')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
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
      <NearbyJobCard post={userName} handleNavigate={() => router.push(`/post-details`)}/>
      <NearbyJobCard />
    </View>
  )
}

export default Nearbyjobs