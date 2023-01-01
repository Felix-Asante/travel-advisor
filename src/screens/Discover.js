import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import { Avatar } from "../../assets";
import MenuNavigation from "../components/Discover/MenuNavigation";
import Search from "../components/Discover/Search";
import ListingsSection from "../components/Discover/ListingsSection";
import NoData from "../components/NoData";
import { getPlacesData } from "../lib";
export default function Discover() {
	const [isLoading, setIsLoading] = useState(false);
	const [listings, setListings] = useState([]);
	const [category, setCategory] = useState("restaurants");
	const [longLat, setLongLat] = useState({
		northeast: { lng: 109.149359, lat: 12.838442 },
		southwest: { lng: 109.095887, lat: 11.847676 },
	});
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	useEffect(() => {
		setIsLoading(true);
		getPlacesData(category, longLat)
			.then((results) => {
				setListings(results);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
			});
	}, [category, longLat]);

	const onPlaceSelect = (details) => {
		setLongLat(details);
	};
	return (
		<SafeAreaView className="flex-1 bg-white relative">
			<View className="flex-row items-center justify-between px-8">
				<View>
					<Text className="text-[30px] text-[#00646b] font-bold">Discover</Text>
					<Text className="text-[#527283] text-[20px]">
						the beauty of nature
					</Text>
				</View>
				<View className="w-12 h-12 bg-gray-400 rounded-md shadow-lg items-center justify-center">
					<Image
						source={Avatar}
						className="object-cover w-full h-full rounded-md"
					/>
				</View>
			</View>
			{/* // autocomplete places */}
			<Search onPlaceSelect={onPlaceSelect} />
			{isLoading ? (
				<View className="flex-1 items-center justify-center">
					<ActivityIndicator size="large" color="#006460" />
				</View>
			) : (
				<ScrollView>
					{/* menu navigation */}
					<MenuNavigation setCategory={setCategory} category={category} />
					{listings?.length > 0 ? (
						<ListingsSection listings={listings} />
					) : (
						<NoData />
					)}
				</ScrollView>
			)}
		</SafeAreaView>
	);
}
