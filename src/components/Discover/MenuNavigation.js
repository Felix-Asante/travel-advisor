import React, { useState } from "react";
import { Text, View } from "react-native";
import { Attractions, Hotels, Restaurants } from "../../../assets";
import Menu from "./Menu";

export default function MenuNavigation({ setCategory, category }) {
	return (
		<View className="flex-row items-center justify-between px-8 mt-8">
			<Menu
				title="Restaurants"
				imageSrc={Restaurants}
				type={category}
				setType={setCategory}
			/>
			<Menu
				title="Hotels"
				imageSrc={Hotels}
				type={category}
				setType={setCategory}
			/>
			<Menu
				title="Attractions"
				imageSrc={Attractions}
				type={category}
				setType={setCategory}
			/>
		</View>
	);
}
