import CustomInput from '@/components/CustomInput'
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
            <CustomInput
                placeholder='Digite seu usuário'
                value={userName}
                setValue={setUserName}
            />
            <CustomInput
                placeholder='Digite sua senha'
                value={userPassword}
                setValue={setPassword}
            />
            <TouchableOpacity onPress={register} disabled={!isValid}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}