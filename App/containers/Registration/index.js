import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("")
    const navigation = useNavigation();

    const handleSignup = async () => {
        try {
            if (email.length > 0 && password.length > 0) {


                const isUserCreated = await auth().createUserWithEmailAndPassword(
                    email,
                    password
                );
                console.log(isUserCreated)
                navigation.navigate("Auth");
            } else {
                alert('Please enter email and password')
            }
        }
        catch (err) {
            console.log(err)
            setMessage(err.message)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginbox}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.textstyle}>Create Account</Text>
                </View>
                {/* <TextInput placeholder='Fullname' style={styles.textinputstyle} /> */}
                <TextInput onChangeText={value => setEmail(value)} placeholder='Email' style={styles.textinputstyle} />
                <TextInput onChangeText={value => setPassword(value)} secureTextEntry={true} placeholder='Password' style={styles.textinputstyle} />
                {/* <TextInput secureTextEntry={true} maxLength={10} placeholder='Conform password' style={styles.textinputstyle} /> */}

                <TouchableOpacity onPress={() => handleSignup()} style={styles.buttonstyles}>
                    <Text style={styles.logintext}>Sign up</Text>
                </TouchableOpacity>

                <Text>{message}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 5 }}>
                    <Text>Already have a account?</Text>
                    <Text onPress={() => navigation.navigate('Auth')} style={{ color: '#fca840' }}>Sign in</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    textstyle: {
        fontSize: 30,
        fontWeight: 'bold'
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
        backgroundColor: '#fca840',
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


