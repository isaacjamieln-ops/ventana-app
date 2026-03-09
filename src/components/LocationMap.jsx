import React from 'react';
import { Card } from 'react-bootstrap';
import nyslData from '../data/nyslData';

const LocationMap = ({ locationKey, showDetails = false }) => {
  const location = nyslData.locations?.[locationKey];
  if (!location) return null;

  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Card.Title className="text-primary">{location.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{location.address}</Card.Subtitle>
      </Card.Body>
      {location.mapUrl && (
        <Card.Footer className="p-0">
          <iframe src={location.mapUrl} width="100%" height="250" 
            style={{ border: 0, borderRadius: '0 0 5px 5px' }} 
            allowFullScreen loading="lazy" title={location.name} />
        </Card.Footer>
      )}
    </Card>
  );
};

export default LocationMap;