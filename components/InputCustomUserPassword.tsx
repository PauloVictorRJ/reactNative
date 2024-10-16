import { useEffect, useState } from "react";
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function InputCustomUserPassword({ placeholder, value, setValue, minLenght }) {
    const [isValid, setIsValid] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        const valid = value.length >= minLenght;
        setIsValid(valid);
    }, [value]);

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={setValue}
                    secureTextEntry={!isPasswordVisible}
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon
                        name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                        size={24}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>
            {
                !isValid && (
                    <Text style={{ color: 'red' }}>A senha deve ter no mínimo {minLenght} caracteres</Text>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
