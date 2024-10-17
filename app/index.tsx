
import InputCustomUserName from '@/components/InputCustomUserName'
import InputCustomUserPassword from '@/components/InputCustomUserPassword'
import { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HomeScreen() {
    const [userName, setUserName] = useState('')
    const [userPassword, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    const register = () => {
        router.replace('/Home/home')
    }

    useEffect(() => {
        const isUserNameValid = userName.length >= 4
        const isPasswordValid = userPassword.length >= 4
        setIsValid(isUserNameValid && isPasswordValid)
    }, [userName, userPassword])

    return (
        <View>
            <Text style={styles.titleText}> Tela de Login</Text>
            <InputCustomUserName
                placeholder='Digite seu usuário'
                value={userName}
                minLenght={4}
                setValue={setUserName}
            />
            <InputCustomUserPassword
                placeholder='Digite sua senha'
                value={userPassword}
                minLenght={4}
                setValue={setPassword}
            />
            <TouchableOpacity onPress={register} disabled={!isValid} style={styles.button}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
});