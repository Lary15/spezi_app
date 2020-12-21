import api from './api';

export const createMarker = (latitude, longitude) => {
  return api.post('/markers', {
    marker: {
      latitude,
      longitude
    }
  });
};

export const allMarkers = () => {
  return api.get('/markers');
};

export const deleteMarker = (id) => {
  return api.delete(`/markers/${id}`);
};