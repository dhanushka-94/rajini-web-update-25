"use client";

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ apiKey, center, zoom = 15, className = "w-full h-64" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize the map
        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#242f3e" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            }
          ]
        });

        // Add a marker for the hotel location
        new google.maps.Marker({
          position: center,
          map: map,
          title: "Rajini by The Waters",
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#DAA520",
            fillOpacity: 1,
            strokeColor: "#B8860B",
            strokeWeight: 2,
          },
        });

        mapInstanceRef.current = map;
      }
    };

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, [apiKey, center, zoom]);

  return <div ref={mapRef} className={className} />;
} 