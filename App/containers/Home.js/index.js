import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    const route = useRoute();
    const { email, uid } = route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Eamil: {Auth().currentUser.email}</Text>
            <Text>UID: {Auth().currentUser.uid} </Text>


            <TouchableOpacity
                style={{
                    marginVertical: 20,
                    width: '80%',
                    backgroundColor: 'red',
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 20,
                }}
                onPress={async () => {
                    await Auth().signOut();
                    navigation.dispatch(StackActions.replace('Auth'));
                    // navigation.navigate('Login');
                }}>
                <Text style={{ color: '#fff' }}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;
