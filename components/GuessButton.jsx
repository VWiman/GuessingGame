import { Button } from "react-native";
export default function GuessButton({handleGuess}) {
	return (
			<Button onPress={() => handleGuess()} title="Submit" accessibilityLabel="Submit button" />
	);
}

