// VenueMap.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import GeoCoderMarker from './GeoCoderMarker/GeoCoderMarker';

export default function VenueMap({ lat, lon }) {
    return (
        <MapContainer center={[lat, lon]} zoom={6} scrollWheelZoom={false} style={{ height: '40vh', width: '100%', zIndex: '0' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoCoderMarker lat={lat} lon={lon} />
        </MapContainer>
    );
}
