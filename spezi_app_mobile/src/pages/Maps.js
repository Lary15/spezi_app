import React, {useState, useContext, useEffect} from 'react';

import MapView, {Marker} from 'react-native-maps';
import {Appbar} from 'react-native-paper';

import {AuthContext} from '../providers/AuthProvider';
import {createMarker, allMarkers, deleteMarker} from '../services/marker';

export default Maps = ({navigation}) => {
  const authContext = useContext(AuthContext);
  const [markers, setMarkers] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    allMarkers()
      .then((res) => setMarkers(res.data))
      .catch((e) => console.log(e));
  }, [refresh]);

  const handleLogout = async () => {
    const response = await authContext.logout();
  };

  const getLogout = async () => {
    const response = await authContext.logout();
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="MAPA" />
        <Appbar.Action icon="logout" onPress={() => handleLogout()} />
      </Appbar.Header>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: -15.705028,
          longitude: -48.055318,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        onPress={(e) => {
          createMarker(
            e.nativeEvent.coordinate.latitude,
            e.nativeEvent.coordinate.longitude,
          )
            .then((res) => setRefresh(!refresh))
            .catch((e) => console.log(e));
        }}>
        {markers.map((marker) => {
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => {
                deleteMarker(marker.id)
                  .then((res) => setRefresh(!refresh))
                  .catch((e) => console.log(e));
              }}
            />
          );
        })}
      </MapView>
    </>
  );
};
