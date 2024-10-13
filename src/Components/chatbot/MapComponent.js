import React, { useState, useEffect, useRef } from 'react';

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
};

const MapComponent = ({ locations }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadScript('https://apis.mappls.com/advancedmaps/api/403dc1555a6c8cacc81512dba7c8bfdd/map_sdk?layer=vector&v=3.0');
        
        if (!mapRef.current && mapContainerRef.current) {
          mapRef.current = new window.mappls.Map(mapContainerRef.current, {
            center: [locations[0].latitude, locations[0].longitude],
            zoomControl: true,
            location: true
          });
        }

        // Remove existing markers
        markersRef.current.forEach(marker => mapRef.current.removeLayer(marker));
        markersRef.current = [];

        // Add new markers
        locations.forEach(location => {
          const marker = new window.mappls.Marker({
            position: {"lat": location.latitude, "lng":location.longitude},
            map: mapRef.current,
            fitbounds: true,
            icon_url: 'https://apis.mapmyindia.com/map_v3/1.png',
            fitbounds: true,
            // popup: location.hospitalName ? new window.MapmyIndia.Popup().setHTML(location.hospitalName) : null
          });
          markersRef.current.push(marker);
        });

        // Adjust map view to fit all markers
        if (locations.length > 1) {
          const bounds = new window.mappls.latLngBounds();
          locations.forEach(location => bounds.extend([location.latitude, location.longitude]));
          mapRef.current.fitBounds(bounds);
        } else {
          mapRef.current.setView([locations[0].latitude, locations[0].longitude]);
        }
      } catch (error) {
        console.error("Error loading MapmyIndia script:", error);
      }
    };

    if (document.readyState === 'complete') {
      initMap();
    } else {
      window.addEventListener('load', initMap);
      return () => window.removeEventListener('load', initMap);
    }
  }, [locations]);

  return <div id = "map" ref={mapContainerRef} style={{ height: "300px", width: "80%" }} />;
};

export default MapComponent;