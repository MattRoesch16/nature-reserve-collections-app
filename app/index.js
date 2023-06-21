import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

import styles from '../components/home/welcome/welcome.style'

function LogoTitle() {
    return (
      <Image
        style={{ width: 215, height: 100}}
        source={images.NRClogo}
      />
    );
  }

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>

            <Stack.Screen 
            options={{
                headerStyle: {backgroundColor: COLORS.primary, alignItems: 'center'},
                headerShadowVisible: true,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="102%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerTitle: (props) => <LogoTitle {...props}/>,
                headerTitleAlign: 'center',
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex:1, padding: SIZES.medium }}>
                    <Welcome/>
                    <Popularjobs />
                    <Nearbyjobs />

                </View>
            </ScrollView>

            <View style={{backgroundColor: COLORS.primary, alignItems: 'center', height: 75, justifyContent: 'space-around', flexDirection: 'row',}}>
                <ScreenHeaderBtn iconUrl={icons.HomeIcon} dimension="125%"/>
                <ScreenHeaderBtn iconUrl={icons.CameraIcon} dimension="95%"/>
                <ScreenHeaderBtn iconUrl={icons.ReserveIcon} dimension="75%"/>
                <ScreenHeaderBtn iconUrl={icons.AnimalIcon} dimension="90%"/>
            </View>

        </SafeAreaView>
    )
}

export default Home;