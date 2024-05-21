import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GuessInput from "./components/GuessInput";
import GuessButton from "./components/GuessButton";
import { useState } from "react";
import GuessFeedback from "./components/GuessFeedback";

export default function App() {
	const [guess, setGuess] = useState("");
	const [feedback, setFeedback] = useState("");

	function handleGuess() {
		if (Number(guess) == 1988) {
			setFeedback("Correct");
		} else if (Number(guess) <= 1987) {
			setFeedback("Viktor was not born yet in the year " + guess + "!");
		} else setFeedback("No! Then Viktor would only be " + (2024 - Number(guess)) + "!");
	}

	return (
		<View style={styles.container}>
			<Text style={{ padding: 10 }}>What year was Viktor born?</Text>
			<View>
				<GuessInput guess={guess} setGuess={setGuess} />
				<GuessButton handleGuess={handleGuess} />
			</View>
			<GuessFeedback feedback={feedback} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
