import { useEffect, useState } from "react";
import { TextInput, Text } from "react-native";

export default function InputCustomUserName({ placeholder, value, setValue, minLenght }) {
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const valid = value.length >= minLenght
        setIsValid(valid)
    })
    return (
        <>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
            {
                !isValid && (
                    <Text>Campo inválido</Text>
                )
            }
        </>
    )
}