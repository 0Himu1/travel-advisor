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
      "x-rapidapi-key": "00b36a0facmsh2f2bfcd8dd25df2p1e4155jsn9ea62b1e7915",
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
