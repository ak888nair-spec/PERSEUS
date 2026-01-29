import MapboxGL from "@react-native-mapbox-gl/maps";

const downloadOfflineMap = async (userLat, userLng) => {
  const pack = await MapboxGL.offlineManager.createPack({
    name: 'offlineRegion',
    styleURL: MapboxGL.StyleURL.Street,
    minZoom: 12,
    maxZoom: 15,
    bounds: [[userLng - 0.1, userLat - 0.1], [userLng + 0.1, userLat + 0.1]] 
    // Note: 0.1 degrees is roughly 11km depending on latitude
  });
};
