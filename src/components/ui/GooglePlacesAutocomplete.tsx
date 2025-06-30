import React, { useRef } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

export function GooglePlacesAutocomplete({ onPlaceSelected }: { onPlaceSelected: (place: google.maps.places.PlaceResult) => void }) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete
      onLoad={ref => (autocompleteRef.current = ref)}
      onPlaceChanged={() => {
        if (autocompleteRef.current) {
          const place = autocompleteRef.current.getPlace();
          onPlaceSelected(place);
        }
      }}
    >
      <input
        type="text"
        placeholder="Type your restaurant name..."
        className="w-full rounded-xl border px-4 py-2 text-lg text-white placeholder-gray-400"
        style={{ outline: "none" }}
      />
    </Autocomplete>
  );
}