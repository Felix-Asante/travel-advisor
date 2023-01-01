import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { HeroImage } from "../../assets";

export default function HomeScreen() {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<SafeAreaView className="flex-1 bg-white relative">
			{/* First section */}
			<View className="flex flex-row items-center gap-3 px-6 py-4">
				<View className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
					<Text className=" text-blue-500 font-semibold">GO</Text>
				</View>
				<Text className="text-[#2a2b4b] text-2xl font-semibold">Travel</Text>
			</View>
			{/* Welcome text section */}
			<View className="px-6 mt-6 space-y-3">
				<Text className="text-ash text-[40px]">Enjoy the trip with</Text>
				<Text className="text-blue-500 text-[30px] font-bold">
					Good Moments
				</Text>
				<Text className="text-ash text-base">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quam
					maxime, voluptate.
				</Text>
			</View>
			{/* GO SECTION */}
			<View className="w-[360px] h-[360px] bg-blue-500 absolute rounded-full bottom-32 -right-36"></View>
			<View className="w-[360px] h-[360px] bg-orange absolute rounded-full -bottom-16 -left-36"></View>
			{/* main image */}
			<View className="flex-1 relative items-center justify-center">
				<Animatable.Image
					animation="fadeIn"
					easing="ease-in-out"
					source={HeroImage}
					className="w-full h-full object-cover mt-20"
				/>
				{/* GO BUTTON */}
				<TouchableOpacity
					className="animate-ping absolute bottom-20 w-20 h-20  border-l-2 border-r-2 border-t-4 border-blue-500 rounded-full items-center justify-center"
					onPress={() => navigation.navigate("Discover")}
				>
					<Animatable.View
						animation={"pulse"}
						easing="ease-in-out"
						iterationCount={"infinite"}
						className="w-[69px] h-[69px] items-center justify-center rounded-full bg-blue-500"
					>
						<Text className="text-gray-50 text-[30px] font-semibold">Go</Text>
					</Animatable.View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
