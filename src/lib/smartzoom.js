const bbox = require('@turf/bbox').default;

module.exports = function (map, feature) {
  if (feature.geometry.type === 'Point') {
    map.jumpTo({
      center: feature.geometry.coordinates
    });
  } else {
    const bounds = bbox(feature);
    map.fitBounds(bounds, { padding: 60 });
  }
};
