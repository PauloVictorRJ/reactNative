
import InputCustomUserName from '@/components/InputCustomUserName'
import InputCustomUserPassword from '@/components/InputCustomUserPassword'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInputComponent } from 'react-native'

export default function HomeScreen() {
    const [userName, setUserName] = useState('')
    const [userPassword, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    const register = () => {
        console.log('userName', userName)
        console.log('userPassword', userPassword)
    }

    useEffect(() => {
        const isUserNameValid = userName.length >= 4
        const isPasswordValid = userPassword.length >= 4
        setIsValid(isUserNameValid && isPasswordValid)
    }, [userName, userPassword])

    return (
        <View>
            <Text> Tela de Login</Text>
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
            <TouchableOpacity onPress={register} disabled={!isValid}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}