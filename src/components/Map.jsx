import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const position = [51.505, -0.09];

const Map = () => {
    return (
        <section className="">
            <p>Ubicación</p>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </section>
    );
};

export default Map;
