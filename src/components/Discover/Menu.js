import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Menu({ key, title, imageSrc, type, setType }) {
	const handlePress = () => {
		setType(title.toLowerCase());
	};
	return (
		<TouchableOpacity
			className="items-center justify-center space-y-2 cursor-pointer"
			onPress={handlePress}
		>
			<View
				className={`w-16 h-16 shadow-sm rounded-full items-center justify-center p-1 ${
					type === title.toLowerCase() ? "bg-gray-200" : ""
				}`}
			>
				<Image source={imageSrc} className="w-full h-full object-contain" />
			</View>
			<Text className="text-blue-500 text-sm font-semibold">{title}</Text>
		</TouchableOpacity>
	);
}
