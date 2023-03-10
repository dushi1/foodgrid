import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native'
import Color from '../../../constants/color';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("")


    const navigation = useNavigation();


    const handleLogin = async () => {
        try {
            if (email.length > 0 && password.length > 0) {

                const isUserLogin = await auth().signInWithEmailAndPassword(
                    email,
                    password,
                );
                setMessage(" ");
                console.log(isUserLogin)
                navigation.navigate("Home", {
                    email: isUserLogin.user.email,
                    uid: isUserLogin.user.uid,

                });
            } else (
                alert('please enter email and password')
            )
        }
        catch (err) {
            console.log(err);
            setMessage(err.message);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.loginbox}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.textstyle}>Login</Text>
                    <Text style={{ fontSize: 16 }}>please sign in to continue.</Text>
                </View>
                <TextInput placeholder='Enter email' value={email} onChangeText={value => setEmail(value)} style={styles.textinputstyle} />
                <TextInput value={password} onChangeText={value => setPassword(value)} secureTextEntry={true} maxLength={10} placeholder='Password' style={styles.textinputstyle} />
                <TouchableOpacity onPress={() => handleLogin()} style={styles.buttonstyles}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableOpacity>
                <Text>{message}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 5 }}>
                    <Text>Don't have an account?</Text>
                    <Text onPress={() => navigation.navigate('Registration')}
                        style={{ color: Color.appcolo }}>Sign up</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    textstyle: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    loginbox: {
        marginVertical: 30,
        marginHorizontal: 20,
    },
    textinputstyle: {
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10
    },
    buttonstyles: {
        backgroundColor: Color.appcolo,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logintext: {
        color: 'white',
        fontSize: 17,
    }

})