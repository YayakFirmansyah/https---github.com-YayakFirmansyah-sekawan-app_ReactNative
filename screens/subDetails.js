import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import COLORS from '../constants/colors';

const SubDetails = () => {
  const route = useRoute();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [listId, setListId] = useState(null);
  const [listName, setListName] = useState(null);

  useEffect(() => {
    const { subId, listId, listName } = route.params || {};

    if (subId && listId) {
      setListId(listId);
      setListName(listName);
      fetchData(listId, subId);
    }
  }, [route.params]);

  const fetchData = async (listId, subId) => {
    let url = '';

    try {
      if (listId === 1) {
        url = `https://jsonplaceholder.typicode.com/users/${subId}`;
      } else if (listId === 2) {
        url = `https://jsonplaceholder.typicode.com/posts/${subId}`;
      } else if (listId === 3) {
        url = `https://jsonplaceholder.typicode.com/comments/${subId}`;
      } else if (listId === 4) {
        url = `https://jsonplaceholder.typicode.com/albums/${subId}`;
      } else if (listId === 5) {
        url = `https://jsonplaceholder.typicode.com/photos/${subId}`;
      } else if (listId === 6) {
        url = `https://jsonplaceholder.typicode.com/todos/${subId}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 25 }}>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{listName} Details</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: COLORS.grey }} />
        </View>
        {data ? (
          <>{listId === 1 ? <UserDetails data={data} /> : listId === 2 ? <PostDetails data={data} /> : listId === 3 ? <CommentDetails data={data} /> : listId === 4 ? <AlbumDetails data={data} /> : listId === 5 ?  <PhotoDetails data={data} /> : listId === 6 ? <TodoDetails data={data} /> : null}</>
        ) : error ? (
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Error: {error.message}</Text>
          </View>
        ) : (
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Loading...</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const UserDetails = ({ data }) => (
  <>
    <Text style={{ marginBottom: 20 }}>ID : {data.id}</Text>
    <Text style={{ marginBottom: 20 }}>
      Name : {'\n'}
      {data.name}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Username : {'\n'}
      {data.username}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Email : {'\n'}
      {data.email}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Address : {'\n'}
      {data.address.street}, {data.address.suite}, {data.address.city}, {data.address.zipcode}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Geo : {data.address.geo.lat}, {data.address.geo.lng}
    </Text>
    <Text style={{ marginBottom: 20 }}>Phone: {data.phone}</Text>
    <Text style={{ marginBottom: 20 }}>Website: {data.website}</Text>
    <Text style={{ marginBottom: 20 }}>
      Company : {data.company.name}, {data.company.catchPhrase}, {data.company.bs}
    </Text>
  </>
);

const PostDetails = ({ data }) => (
  <>
    <Text style={{ marginBottom: 20 }}>User ID : {data.userId}</Text>
    <Text style={{ marginBottom: 20 }}>ID : {data.id}</Text>
    <Text style={{ marginBottom: 20 }}>
      Title : {'\n'}
      {data.title}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Body : {'\n'}
      {data.body}
    </Text>
  </>
);

const CommentDetails = ({ data }) => (
  <>
    <Text style={{ marginBottom: 20 }}>Post ID : {data.postId}</Text>
    <Text style={{ marginBottom: 20 }}>ID : {data.id}</Text>
    <Text style={{ marginBottom: 20 }}>
      Name : {'\n'}
      {data.name}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Email : {'\n'}
      {data.email}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Body : {'\n'}
      {data.body}
    </Text>
  </>
);

const AlbumDetails = ({ data }) => (
  <>
    <Text style={{ marginBottom: 20 }}>User ID : {data.userId}</Text>
    <Text style={{ marginBottom: 20 }}>ID : {data.id}</Text>
    <Text style={{ marginBottom: 20 }}>
      Title : {'\n'}
      {data.title}
    </Text>
  </>
);

const PhotoDetails = ({ data }) => (
  <>
    <Text style={{ marginBottom: 20 }}>Album ID : {data.albumId}</Text>
    <Text style={{ marginBottom: 20 }}>ID : {data.id}</Text>
    <Text style={{ marginBottom: 20 }}>
      Title : {'\n'}
      {data.title}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      URL : {'\n'}
      {data.url}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Thumbnail URL : {'\n'}
      {data.thumbnailUrl}
    </Text>
  </>
);

const TodoDetails = ({ data }) => (
  <>
    <Text style={{ marginBottom: 20 }}>User ID : {data.userId}</Text>
    <Text style={{ marginBottom: 20 }}>ID : {data.id}</Text>
    <Text style={{ marginBottom: 20 }}>
      Title : {'\n'}
      {data.title}
    </Text>
    <Text style={{ marginBottom: 20 }}>
      Completed : {'\n'}
      {data.completed ? 'Yes' : 'No'}
    </Text>
  </>
);

export default SubDetails;
