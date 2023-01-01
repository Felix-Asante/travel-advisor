import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "./src/screens/Discover";
import HomeScreen from "./src/screens/HomeScreen";
import SingleListing from "./src/screens/SingleListing";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Discover" component={Discover} />
				<Stack.Screen name="SingleList" component={SingleListing} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
