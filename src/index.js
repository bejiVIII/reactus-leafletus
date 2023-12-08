import { createRoot } from "react-dom/client";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
//import "leaflet/dist/leaflet.css";

const map = document.getElementById("map");
const root = createRoot(map);
root.render(
  <MapContainer
    center={[51.505, -0.09]}
    zoom={13}
    style={{ width: "100%", height: "100vh" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <Circle
      center={[51.505, -0.09]}
      radius={300}
      pathOptions={{ color: "blue" }}
    />
  </MapContainer>
);
