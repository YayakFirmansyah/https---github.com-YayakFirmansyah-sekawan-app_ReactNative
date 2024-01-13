import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native';

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={{ marginVertical: 25 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginVertical: 15,
            }}
          >
            Signup
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Please Signup Here
          </Text>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              marginVertical: 10,
            }}
          >
            Email Address
          </Text>
          <View
            style={{
              width: '100%',
              height: 50,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 25,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.grey}
              keyboardType="email-address"
              style={{
                width: '100%',
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              marginVertical: 10,
            }}
          >
            Phone Number
          </Text>
          <View
            style={{
              width: '100%',
              height: 50,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}
          >
            <Text
              style={{
                width: '15%',
                borderRightColor: COLORS.black,
              }}
            >
              ( +62 )
            </Text>
            <Text
              style={{
                width: '10%',
                fontSize: 20,
                borderRightColor: COLORS.black,
              }}
            >
              |
            </Text>
            <TextInput
              placeholder="( 8xx ) xxxx xxxx"
              placeholderTextColor={COLORS.grey}
              keyboardType="numeric"
              style={{
                width: '100%',
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 400,
              marginVertical: 10,
            }}
          >
            Password
          </Text>
          <View
            style={{
              width: '100%',
              height: 50,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 25,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.grey}
              secureTextEntry={isPasswordShown}
              style={{
                width: '100%',
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 15,
              }}
            >
              {isPasswordShown == true ? <Ionicons name="eye-off" size={25} /> : <Ionicons name="eye" size={25} />}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <Checkbox style={{ marginRight: 10 }} value={isChecked} onValueChange={setIsChecked} color={isChecked ? COLORS.secondary : undefined} />
          <Text>I agree to the terms and conditions</Text>
        </View>

        <View style={{ marginVertical: 20 }}>
          <Button onPress={() => navigation.navigate('Login')} title="Sign Up" color={COLORS.secondary} />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 15 }}>Or Sign Up with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
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
            <Image
              source={require('../assets/facebook.png')}
              style={{
                height: 35,
                width: 35,
                marginRight: 10,
              }}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Pressed')}
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
            <Image
              source={require('../assets/google.png')}
              style={{
                height: 35,
                width: 35,
                marginRight: 10,
              }}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 25,
          }}
        >
          <Text style={{ fontSize: 15, color: COLORS.black }}>Already have an account ? </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 15,
                color: COLORS.secondary,
                fontWeight: 'bold',
                marginLeft: 5,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
