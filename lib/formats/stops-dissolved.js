import { getStopsAsGeoJSON } from 'gtfs';
import buffer from '@turf/buffer';
import { geomEach } from '@turf/meta';
import { multiPolygon } from '@turf/helpers';
import polygonClipping from 'polygon-clipping';

import { simplifyGeoJSON } from '../geojson-utils.js';

const stopsDissolved = async (config, routeId, directionId) => {
  const query = {};

  if (routeId !== undefined && directionId !== undefined) {
    query.route_id = routeId;
    query.direction_id = directionId;
  }

  const stops = await getStopsAsGeoJSON(query);
  const bufferedStops = buffer(stops, config.bufferSizeMeters, { units: 'meters' });
  const geometries = [];

  // Simplify geoJSON buffers before unioning
  const simplifiedBufferedStops = simplifyGeoJSON(bufferedStops, config);

  geomEach(simplifiedBufferedStops, geometry => {
    if (geometry.type === 'MultiPolygon') {
      geometries.push(geometry.coordinates);
    }

    if (geometry.type === 'Polygon') {
      geometries.push([geometry.coordinates]);
    }
  });

  const unioned = polygonClipping.union(...geometries);
  const geojson = multiPolygon(unioned);

  // Assign agency_name
  geojson.properties.agency_name = bufferedStops.features[0].properties.agency_name;

  return simplifyGeoJSON(geojson, config);
};

export default stopsDissolved;
