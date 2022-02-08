import axios from "axios";

export default async function getPlacesDeta(type, sw, ne) {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "703132757bmsh9cd2d85619e64c4p13ce42jsn773e3be2fcdd",
    },
  };

  try {
    //request
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}
