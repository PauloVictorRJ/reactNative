import { useEffect, useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";

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
                style={styles.input}
            />
            {
                !isValid && (
                    <Text>Campo inválido</Text>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
