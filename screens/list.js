import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';


const List = () => {
  const navigation = useNavigation();
  const buttons = [
    { listName: 'Users', label: 'Users', route: 'Details', listId: 1 },
    { listName: 'Posts', label: 'Posts', route: 'Details', listId: 2 },
    { listName: 'Comments', label: 'Comments', route: 'Details', listId: 3 },
    { listName: 'Albums', label: 'Albums', route: 'Details', listId: 4 },
    { listName: 'Photos', label: 'Photos', route: 'Details', listId: 5 },
    { listName: 'Todos', label: 'Todos', route: 'Details', listId: 6 },
  ];

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
            List
          </Text>

          <Text
            style={{
              fontSize: 15,
            }}
          >
            Several lists taken from JSONPlaceholder
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
            flexDirection: 'column',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: COLORS.grey,
            padding: 10,
            borderRadius: 10,
          }}
        >
          {buttons.map((button, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: index !== 0 ? 10 : 0,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate(button.route, {listName:button.listName, listId: button.listId })}
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
                <Text>{button.label}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default List;
