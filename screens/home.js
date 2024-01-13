import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={{ marginVertical: 25 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginVertical: 25,
            }}
          >
            Dashboard
          </Text>

          <Text
            style={{
              fontSize: 15,
            }}
          >
            This application has a data list and profile
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: COLORS.grey,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('List')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 50,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 5,
              borderRadius: 10,
            }}
          >
            <Ionicons name="list" color={COLORS.secondary} size={25} marginRight={10} />
            <Text>List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 50,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 5,
              borderRadius: 10,
            }}
          >
            <Ionicons name="people" color={COLORS.secondary} size={25} marginRight={10} />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
