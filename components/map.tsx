import React, { useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map: React.FC = () => {
  const myLatlng = { lat: 23.897645, lng: 121.54191 };
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [infoWindow, setInfoWindow] =
    React.useState<google.maps.InfoWindow | null>(null);
  const [selectedPosition, setSelectedPosition] =
    React.useState<google.maps.LatLng | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || "",
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      // Initialize the map and infoWindow when the Google Maps script is loaded
      const map = new google.maps.Map(document.getElementById("map")!, {
        zoom: 16,
        center: myLatlng,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Lat/Lng!",
        position: myLatlng,
      });

      setMap(map);
      setInfoWindow(infoWindow);

      infoWindow.open(map);

      // Configure the click listener.
      map.addListener("click", (mapsMouseEvent: any) => {
        // Close the current InfoWindow.
        infoWindow.close();

        // Create a new InfoWindow.
        const newInfoWindow = new google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
        });

        newInfoWindow.setContent(
          JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
        );
        newInfoWindow.open(map);
        setInfoWindow(newInfoWindow);
        setSelectedPosition(mapsMouseEvent.latLng);
      });
    }
  }, [isLoaded, loadError]);

  return (
    <div style={{ height: "500px", width: "100%" }}>
      {isLoaded && !loadError && (
        <GoogleMap
          id="map"
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          zoom={4}
          center={myLatlng}
        >
          {selectedPosition && (
            <Marker
              position={{
                lat: selectedPosition.lat(),
                lng: selectedPosition.lng(),
              }}
            />
          )}

          {infoWindow && selectedPosition && (
            <InfoWindow position={selectedPosition}>
              <div>{JSON.stringify(selectedPosition.toJSON(), null, 2)}</div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
