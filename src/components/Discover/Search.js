import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function Search({ onPlaceSelect }) {
	return (
		<View className="flex-row items-center bg-white mx-4 rounded-xl px-4 shadow-lg mt-4">
			<GooglePlacesAutocomplete
				placeholder="Search"
				onPress={(data, details = null) => {
					onPlaceSelect(details?.geometry?.viewport);
				}}
				fetchDetails={true}
				GooglePlacesDetailsQuery={{ fields: "geometry" }}
				query={{
					key: "AIzaSyAND1byc4c4TEib5iVL0Xn9QVY3Hu-dGrM",
					language: "en",
				}}
			/>
		</View>
	);
}
