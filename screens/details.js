import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../constants/colors';
import { useRoute } from '@react-navigation/native';

const Details = () => {
  const route = useRoute();
  const { listId, listName } = route.params;

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let url = '';

    if (listId === 1) {
      url = 'https://jsonplaceholder.typicode.com/users';
    } else if (listId === 2) {
      url = 'https://jsonplaceholder.typicode.com/posts';
    } else if (listId === 3) {
      url = 'https://jsonplaceholder.typicode.com/comments';
    } else if (listId === 4) {
      url = 'https://jsonplaceholder.typicode.com/albums';
    } else if (listId === 5) {
      url = 'https://jsonplaceholder.typicode.com/photos';
    } else if (listId === 6) {
      url = 'https://jsonplaceholder.typicode.com/todos';
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const navigation = useNavigation();
  const buttons = datas.map((data) => ({
    label: data.name || data.title,
    route: 'SubDetails',
    subId: data.id,
    listId: listId,
    listName: listName,
  }));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={{ marginVertical: 25 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            {listName} List
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
            position: 'absolute',
            top: 150,
            left: 0,
            right: 0,
            bottom: 50,
            flexDirection: 'column',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: COLORS.grey,
            padding: 10,
            borderRadius: 10,
          }}
        >
          {datas.length === 0 ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Loading...</Text>
            </View>
          ) : (
            <ScrollView style={{ marginHorizontal: 20 }}>
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
                    onPress={() =>
                      navigation.navigate(button.route, {
                        listName: button.listName,
                        subId: button.subId,
                        listId: button.listId,
                      })
                    }
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
            </ScrollView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
