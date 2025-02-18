"use client";

import { useEffect, useRef } from 'react';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export default function Map({ center, zoom = 15, className = "w-full h-64" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current) {
      // Add Leaflet CSS
      const linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(linkEl);

      // Add Leaflet JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        const L = window.L;
        if (!mapInstanceRef.current && mapRef.current) {
          // Initialize the map
          const map = L.map(mapRef.current).setView([center.lat, center.lng], zoom);

          // Add OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Add a custom marker
          const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="w-6 h-6 rounded-full bg-[var(--gold-400)] border-2 border-white shadow-lg"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          });

          // Add marker
          L.marker([center.lat, center.lng], { icon }).addTo(map)
            .bindPopup('Rajini by The Waters')
            .openPopup();

          mapInstanceRef.current = map;

          // Add custom styles for the marker
          const style = document.createElement('style');
          style.textContent = `
            .custom-marker {
              background: transparent;
              border: none;
            }
          `;
          document.head.appendChild(style);
        }
      };

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
        document.head.removeChild(linkEl);
        document.head.removeChild(script);
      };
    }
  }, [center, zoom]);

  return <div ref={mapRef} className={className} />;
} 