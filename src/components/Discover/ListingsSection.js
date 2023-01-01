import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import ListingsCard from "../ListingsCard";

export default function ListingsSection({ listings }) {
	return (
		<View>
			<View className="flex-row items-center justify-between mt-8 px-4">
				<Text className="text-ash text-[28px] font-bold">Top Tips</Text>
				<TouchableOpacity className="flex-row items-center space-x-1">
					<Text className="text-[#a0c4c7] text-[20px] font-bold">Explore</Text>
					<Ionicons name="arrow-forward-sharp" size={24} color="#a0c4c0" />
				</TouchableOpacity>
			</View>

			<View className="px-4 mt-8 flex-row item-center justify-evenly flex-wrap">
				{listings.map((item, index) => (
					<ListingsCard
						key={index}
						imageSrc={
							item?.photo?.images?.thumbnail?.url ||
							"https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
						}
						title={item?.name}
						location={item?.location_string}
						listingInfo={item}
					/>
				))}
			</View>
		</View>
	);
}
