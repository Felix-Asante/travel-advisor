import axios from "axios";

export const getPlacesData = async (category, longLat) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${category}/list-in-boundary`,
			{
				params: {
					bl_latitude: longLat.southwest.lat,
					bl_longitude: longLat.southwest.lng,
					tr_latitude: longLat.northeast.lat,
					tr_longitude: longLat.northeast.lng,
				},
				headers: {
					"X-RapidAPI-Key":
						"366333a548msh27d9f9597f60ec2p197f72jsn6157ecf8921c",
					"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
				},
			}
		);

		return data;
	} catch (error) {
		return null;
	}
};
