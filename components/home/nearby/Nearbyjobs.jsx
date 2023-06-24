import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native'
import axios from 'axios';

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../../hook/useFetch'
import { images } from '../../../constants';

const Nearbyjobs = () => {
  const router = useRouter();
  const [userName, setUserName] = useState();
  const [ID , setID] = useState();
  const [post, setPost] = useState([]);

  const persons = [
    {
    id: "1",
    name: "Earnest Green",
    description: "Look at this pretty place",
    propic: images.profile,
    },
    {
    id: "2",
    name: "Winston Orn",
    description: "Just found a new reserve!",
    propic: images.profile,
    },
    {
    id: "3",
    name: "Carlton Collins",
    description: "Holy cow look at this!",
    propic: images.profile,
    },
    {
    id: "4",
    name: "Malcolm Labadie",
    description: "My new peace place <3",
    propic: images.profile,
    },
    {
    id: "5",
    name: "Michelle Dare",
    description: "Shoutout to EHT Nature Reserve! Best place to kayake",
    propic: images.profile,
    },
    {
    id: "6",
    name: "Carlton Zieme",
    description: "The flora and fauna of this reserve are unmatched",
    propic: images.profile,
    },
  ];

  useEffect (() => {
    axios.get('http://localhost:3000/profile')
    .then(response => setUserName(response.data.firstName))
    .catch(error => console.log(error))
  })

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {persons.map((person) => {
        return (
          <NearbyJobCard 
            userid = {person.name}
            description={person.description}
            propic = {person.propic}
            key={person.id}
          />
        );
      })}
    </View>
  )
}

export default Nearbyjobs