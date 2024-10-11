import { TextInput } from "react-native";

export default function CustomInput({ placeholder, value, setValue }) {
    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
        />
    )
}