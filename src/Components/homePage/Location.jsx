import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Location.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC_raYUyBjizy8VCgNTML_5rcuNhuppXlA",
  });
  const center = useMemo(() => ({ lat: 43.5147, lng: 16.4435 }), []);

  return (
    <div className="map-container">
      {!isLoaded ? (
        <h1>Učitavanje...</h1>
      ) : (
        <GoogleMap mapContainerClassName="map" center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;
