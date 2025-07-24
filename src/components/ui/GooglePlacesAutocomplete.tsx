import React, { useRef, useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import TypewriterText from "./TypewriterText";

const libraries = ["places"];

// Custom styles for Google Autocomplete dropdown and pulsing effect
const googleAutocompleteStyles = `
  .pac-container {
    background: #fff !important;
    border-radius: 16px !important;
    box-shadow: 0 8px 32px 0 rgba(60,60,60,0.12) !important;
    border: 1.5px solid #bfc8d5 !important;
    font-family: 'Inter', 'San Francisco', 'Arial', sans-serif !important;
    padding: 4px 0 !important;
    z-index: 99999 !important;
  }
  .pac-item {
    color: #232526 !important;
    font-size: 1.08rem !important;
    border-radius: 10px !important;
    margin: 2px 8px !important;
    padding: 8px 16px !important;
    transition: background 0.15s;
  }
  .pac-item:hover, .pac-item-selected {
    background: #f5f5f7 !important;
    color: #db5439 !important;
  }
  .pac-matched {
    color: #db5439 !important;
    font-weight: 600;
  }
  .pulse-orange {
    box-shadow: 0 0 0 0 #ff6b47, 0 0 0 4px #ff6b4740;
    animation: pulseOrange 2.7s infinite;
    border-color: #ff6b47 !important;
  }
  @keyframes pulseOrange {
    0% {
      box-shadow: 0 0 0 0 #ff6b47, 0 0 0 4px #ff6b4740;
    }
    70% {
      box-shadow: 0 0 0 8px #ff6b4700, 0 0 0 16px #ff6b4700;
    }
    100% {
      box-shadow: 0 0 0 0 #ff6b47, 0 0 0 4px #ff6b4740;
    }
  }
`;

interface GooglePlacesAutocompleteProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
  prompt?: string;
  animatedPlaceholders?: string[];
}

export function GooglePlacesAutocomplete({ onPlaceSelected, prompt }: GooglePlacesAutocompleteProps) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <style>{googleAutocompleteStyles}</style>
      {prompt && (
        <div style={{ color: '#db5439', fontWeight: 600, fontSize: 17, marginBottom: 8, textAlign: 'center' }}>{prompt}</div>
      )}
      <Autocomplete
        onLoad={ref => (autocompleteRef.current = ref)}
        onPlaceChanged={() => {
          if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            const hasDisplayName = typeof (place as any)?.displayName?.text === 'string';
            if (place && (place.name || hasDisplayName)) {
              onPlaceSelected(place);
            } else {
              console.warn('Invalid place selected:', place);
            }
          }
        }}
      >
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Type your restaurant name..."
            className="w-full rounded-xl border-2 border-[#bfc8d5] focus:border-[#db5439] shadow-md px-4 py-2 text-lg text-gray-900 placeholder-gray-400 bg-white transition-all duration-200 pulse-orange"
            style={{ outline: "none", boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)' }}
          />
        </div>
      </Autocomplete>
    </>
  );
}

export default GooglePlacesAutocomplete;