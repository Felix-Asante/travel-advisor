import React from "react";
import { Image, Text, View } from "react-native";
import { NotFound } from "../../assets";
export default function NoData() {
	return (
		<View className="w-full space-y-8 h-[400px] items-center justify-center">
			<Image source={NotFound} className="w-32 h-32 object-cover" />
			<Text className="text-xl text-ash font-bold">No listings found</Text>
		</View>
	);
}
