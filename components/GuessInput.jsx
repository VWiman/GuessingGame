import { TextInput } from "react-native";

export default function GuessInput({guess, setGuess}) {
	return (
        <TextInput
            keyboardType="numeric"
			style={{
				height: 40,
				width: 100,
				borderColor: "gray",
				borderWidth: 1,
			}}
			value={guess}
			onChangeText={(text) => setGuess(text)}
		/>
	);
}
