import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';
import ZoopediaCard from '../components/common/cards/zoopedia/ZoopediaCard';

function LogoTitle() {
    return (
      <Image
        style={{ width: 215, height: 100}}
        source={images.NRClogo}
      />
    );
  }

const Zoopedia = () => {
    const router = useRouter();
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
                headerBackVisible: false
            }}
            />

            <View style={{ flex:1, padding: SIZES.medium }}>
                <ZoopediaCard>
                    
                </ZoopediaCard>
            </View>

            <View style={{backgroundColor: COLORS.primary, alignItems: 'center', height: 75, justifyContent: 'space-around', flexDirection: 'row',}}>
                <ScreenHeaderBtn iconUrl={icons.HomeIcon} dimension="125%" onPress={() => router.back()}/>
                <ScreenHeaderBtn iconUrl={icons.CameraIcon} dimension="95%" onPress={() => router.push('/camera')}/>
                <ScreenHeaderBtn iconUrl={icons.ReserveIcon} dimension="75%" onPress={() => router.push('/reserve')}/>
                <ScreenHeaderBtn iconUrl={icons.AnimalIcon} dimension="90%" handlePress= {() => router.push(`/Zoopedia`)}/>
            </View>

        </SafeAreaView>
    )
}

export default Zoopedia