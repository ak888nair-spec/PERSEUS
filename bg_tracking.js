import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const TRACKING_TASK_NAME = 'background-location-task';

// 1. Define the task
TaskManager.defineTask(TRACKING_TASK_NAME, ({ data, error }) => {
  if (error) return;
  if (data) {
    const { locations } = data;
    console.log('New location saved in background:', locations);
    // Here you would save to a local database (like SQLite)
  }
});

// 2. Trigger the task via Button
const startTracking = async () => {
  await Location.startLocationUpdatesAsync(TRACKING_TASK_NAME, {
    accuracy: Location.Accuracy.High,
    distanceInterval: 10, // meters
    deferredUpdatesInterval: 1000, // ms
    foregroundService: {
      notificationTitle: "Tracking Active",
      notificationBody: "Your location is being recorded offline."
    }
  });
};
