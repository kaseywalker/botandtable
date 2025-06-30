// @ts-ignore
// <reference types="@types/google.maps" />
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// Make sure your tsconfig.json has "module": "esnext" and "jsx": "react-jsx" (already set)

// Type guard for import.meta.env (works in Vite and similar setups)
function getGoogleMapsApiKey() {
  if (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.VITE_GOOGLE_MAPS_API_KEY) {
    return (import.meta as any).env.VITE_GOOGLE_MAPS_API_KEY;
  }
  return "";
}
const GOOGLE_MAPS_API_KEY = getGoogleMapsApiKey();

export const GooglePlacesAutocompleteElement: React.FC<{
  onPlaceSelect?: (place: any) => void;
  className?: string;
  style?: React.CSSProperties;
}> = ({ onPlaceSelect, className = "", style = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const autocompleteRef = useRef<any>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    let autocompleteElement: any;

    loader.load().then(() => {
      if (!containerRef.current) return;
      // Remove any previous autocomplete element
      if (autocompleteRef.current) {
        containerRef.current.removeChild(autocompleteRef.current);
      }
      autocompleteElement = document.createElement("gmp-place-autocomplete");
      autocompleteElement.setAttribute("style", "width:100%; height:48px; border:none; outline:none; background:white; border-radius:14px; box-shadow:inset 0 1.5px 4px 0 rgba(0,0,0,0.08); font-size:18px; color:#111827; padding-left:44px; padding-right:16px; font-family: 'Inter', 'San Francisco', 'SF Pro Display', Arial, sans-serif; border:1.5px solid #D1D5DB; transition: box-shadow 0.2s, border 0.2s;");
      autocompleteElement.setAttribute("placeholder", "Search for your restaurant...");
      autocompleteElement.className = className;
      // Add focus ring on focus
      autocompleteElement.addEventListener("focus", () => {
        autocompleteElement.style.boxShadow = "0 0 0 2px #60a5fa, inset 0 1.5px 4px 0 rgba(0,0,0,0.08)";
        autocompleteElement.style.border = "1.5px solid #60a5fa";
      });
      autocompleteElement.addEventListener("blur", () => {
        autocompleteElement.style.boxShadow = "inset 0 1.5px 4px 0 rgba(0,0,0,0.08)";
        autocompleteElement.style.border = "1.5px solid #D1D5DB";
      });
      // Listen for place selection
      autocompleteElement.addEventListener("gmp-select", (event: any) => {
        if (onPlaceSelect) {
          onPlaceSelect(event.detail);
        }
      });
      // Add search icon
      const icon = document.createElement("span");
      icon.innerHTML = `<svg width="22" height="22" fill="none" stroke="#9CA3AF" stroke-width="2" viewBox="0 0 24 24" style="position:absolute; left:14px; top:13px;"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>`;
      icon.style.position = "absolute";
      icon.style.left = "14px";
      icon.style.top = "13px";
      icon.style.pointerEvents = "none";
      icon.style.zIndex = "2";
      // Wrap in a relative div for icon positioning
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.width = "100%";
      wrapper.style.height = "48px";
      wrapper.appendChild(icon);
      wrapper.appendChild(autocompleteElement);
      autocompleteRef.current = wrapper;
      containerRef.current.appendChild(wrapper);
    });
    return () => {
      if (containerRef.current && autocompleteRef.current) {
        containerRef.current.removeChild(autocompleteRef.current);
      }
    };
  }, [onPlaceSelect, className]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", marginBottom: 0, ...style }}
    />
  );
};

export default GooglePlacesAutocompleteElement; 