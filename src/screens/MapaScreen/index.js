import MapView, { Marker } from "react-native-maps";

export default function MapaScreen() {
    return (
        <>
            <MapView>
                <Marker coordinate={{  latitude: '', longitude: ''}} >

                </Marker>
            </MapView>
        </>
    );
}