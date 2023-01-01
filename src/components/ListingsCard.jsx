import { Image, Text, TouchableOpacity, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function ListingsCard({
	title,
	imageSrc,
	location,
	listingInfo,
}) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("SingleList", { param: listingInfo })}
			className="rounded-md border border-gray-300 space-y-2 px-2 py-2 shadow-md bg-white w-[45%]  my-2"
		>
			<Image
				source={{ uri: imageSrc }}
				className="w-full h-32 object-cover mb-2"
			/>
			{title ? (
				<>
					<Text className="text-[#428288] text-[18px] font-bold mb-2">
						{title.length > 10 ? `${title.slice(0, 10)}...` : title}
					</Text>
					<View className="flex-row items-center space-x-1">
						<Foundation name="marker" size={20} color="#8597a2" />
						<Text className="text-[#428288] text-[14px] font-bold">
							{location.length > 14 ? `${location.slice(0, 14)}...` : location}
						</Text>
					</View>
				</>
			) : null}
		</TouchableOpacity>
	);
}
