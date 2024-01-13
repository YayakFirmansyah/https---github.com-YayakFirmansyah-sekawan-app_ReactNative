import React from 'react';
import { View, Text, Linking, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={{ marginVertical: 25 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 25,
              textAlign: 'center',
            }}
          >
            Profile
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../assets/profile.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 25,
              textAlign: 'center',
            }}
          >
            Hi 👋, I'm Dhiya'uddin Firmansyah
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            A intermediate backend developer from Indonesia
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            D4 - Informatics Engineering
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            Politeknik Negeri Malang
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              marginTop: 50,
            }}
          >
            🌱 I'm currently learning Flutter, Laravel, Java, React Native
          </Text>

          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
            }}
          >
            👨‍💻 All of my projects are available at :{' '}
            <Text
              onPress={() => Linking.openURL('https://github.com/YayakFirmansyah?tab=repositories')}
              style={{
                color: 'blue',
              }}
            >
              My Github repositories
            </Text>
          </Text>

          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
            }}
          >
            💬 Ask me about Flutter, Laravel, Java, React Native
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
            }}
          >
            📫 How to reach me :{' '}
            <Text
              onPress={() => Linking.openURL('mailto:dhiyauddinf09@gmail.com')}
              style={{
                color: 'blue',
              }}
            >
              dhiyauddinf09@gmail.com
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 50,
              marginBottom: 30,
            }}
          >
            Contact Me :
          </Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <Ionicons name="logo-github" color={COLORS.secondary} size={50} marginHorizontal={10} marginVertical={10} onPress={() => Linking.openURL('https://github.com/YayakFirmansyah')} />
          <Ionicons name="logo-twitter" color={COLORS.secondary} size={50} marginHorizontal={10} marginVertical={10} onPress={() => Linking.openURL('https://twitter.com/yayak65')} />
          <Ionicons name="logo-facebook" color={COLORS.secondary} size={50} marginHorizontal={10} marginVertical={10} onPress={() => Linking.openURL('https://fb.com/yayakxfirmansyah')} />
          <Ionicons name="logo-instagram" color={COLORS.secondary} size={50} marginHorizontal={10} marginVertical={10} onPress={() => Linking.openURL('https://instagram.com/yayakfirmansyah._')} />
          <Ionicons name="logo-youtube" color={COLORS.secondary} size={50} marginHorizontal={10} marginVertical={10} onPress={() => Linking.openURL('https://www.youtube.com/@dhiyauddinfirmansyah8111')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
