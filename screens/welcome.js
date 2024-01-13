import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import { Image } from 'react-native';
import { Button } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Image
            source={require('../assets/logo.png')}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Let's Start
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Your Journey With Us
          </Text>
        </View>
        <View
          style={{
            marginTop: 200,
          }}
        >
          <Button title="Login" filled onPress={() => navigation.navigate('Login')} color={COLORS.secondary} />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#fff',
                marginRight: 5,
              }}
            >
              Don't Have any Account?
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: COLORS.secondary,
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate('Signup')}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
