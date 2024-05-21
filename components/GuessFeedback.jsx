import { Text } from "react-native";

export default function GuessFeedback({feedback}) {
	return (
		<Text style={{ marginTop: 10, padding: 10, fontSize: 20 }}>
			{feedback}
		</Text>
	);
}
