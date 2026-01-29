import NetInfo from "@react-native-community/netinfo";

// Monitor connection
NetInfo.addEventListener(state => {
  if (!state.isConnected) {
    console.log("Offline! Starting 10km map download...");
    downloadOfflineMap();
  } else {
    console.log("Online! Clearing cache...");
    clearOfflineMaps();
  }
});
