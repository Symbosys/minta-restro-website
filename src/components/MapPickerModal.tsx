"use client";

import { Autocomplete, GoogleMap, useLoadScript } from '@react-google-maps/api';
import { Check, Crosshair, MapPin, Search, X } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDp1m24jCv0artNLvNYGiRemEEjwAduk20';
const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

interface MapPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (address: string, lat: number, lng: number) => void;
  initialLat?: number;
  initialLng?: number;
}

export default function MapPickerModal({ isOpen, onClose, onSelect, initialLat, initialLng }: MapPickerModalProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  
  // mapCenter drives the ACTUAL center of the map (used for search/geolocation)
  const [mapCenter, setMapCenter] = useState({ 
    lat: initialLat || 23.3441, 
    lng: initialLng || 85.3091 
  });

  // selectedCoords tracks where the user has dragged the map (used for address/confirm)
  const [selectedCoords, setSelectedCoords] = useState(mapCenter);

  const [address, setAddress] = useState('');
  const [isLodaing, setIsLoading] = useState(false);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const [isLocatingUser, setIsLocatingUser] = useState(false);

  const mapRef = useRef<google.maps.Map | null>(null);
  const lastGeocodedCoords = useRef(mapCenter);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    setMap(map);
  }, []);

  const onMapUnmount = useCallback(() => {
    mapRef.current = null;
    setMap(null);
  }, []);

  const onIdle = useCallback(() => {
    if (!mapRef.current) return;
    
    const newCenter = mapRef.current.getCenter();
    if (!newCenter) return;

    const lat = newCenter.lat();
    const lng = newCenter.lng();
    
    // Check if it's actually a significant move to avoid micro-loops
    if (Math.abs(lat - lastGeocodedCoords.current.lat) < 0.000001 && Math.abs(lng - lastGeocodedCoords.current.lng) < 0.000001) {
        return;
    }

    const newPos = { lat, lng };
    lastGeocodedCoords.current = newPos;
    setSelectedCoords(newPos);

    // Reverse Geocode
    setIsLoading(true);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: newPos }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress('Unknown location');
      }
      setIsLoading(false);
    });
  }, []);

  const onAutocompleteLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const newPos = { lat, lng };
        
        // Update BOTH to move map and set selection
        setMapCenter(newPos);
        setSelectedCoords(newPos);
        mapRef.current?.setZoom(17);
      }
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLocatingUser(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // Update BOTH to move map and set selection
          setMapCenter(pos);
          setSelectedCoords(pos);
          mapRef.current?.setZoom(17);
          setIsLocatingUser(false);
        },
        () => {
          setIsLocatingUser(false);
          alert("Error getting location. Please check your browser permissions.");
        }
      );
    }
  };

  if (!isOpen) return null;

  if (loadError) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-red-100 text-center max-w-sm">
        <X className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Map Load Error</h3>
        <p className="text-gray-500 text-sm mb-4">Could not load Google Maps. Please check your internet connection or API key.</p>
        <button onClick={onClose} className="w-full bg-gray-100 py-3 rounded-xl font-bold text-gray-700">Close</button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-4xl rounded-none sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full sm:h-[85vh] animate-in fade-in zoom-in duration-300">
        
        {/* Header - Fixed on top */}
        <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl font-black text-gray-900 leading-none">Pin Store Location</h3>
            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mt-1">Move map to pick exact location</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Map Rendering Container */}
        <div className="flex-1 relative bg-gray-100 overflow-hidden">
           {isLoaded ? (
             <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={mapCenter}
                zoom={15}
                onLoad={onMapLoad}
                onUnmount={onMapUnmount}
                onIdle={onIdle}
                options={{
                  disableDefaultUI: true,
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
             />
           ) : (
             <div className="w-full h-full flex flex-col items-center justify-center gap-3">
               <div className="w-10 h-10 border-4 border-[#8719C6]/20 border-t-[#8719C6] rounded-full animate-spin"></div>
               <p className="text-xs text-gray-400 font-black uppercase tracking-widest">Loading Google Maps...</p>
             </div>
           )}

           {/* Search Overlay */}
           {isLoaded && (
             <div className="absolute top-4 left-4 right-4 z-10">
               <Autocomplete 
                 onLoad={onAutocompleteLoad} 
                 onPlaceChanged={onPlaceChanged}
                 //@ts-ignore
                 onClose={onClose}
               >
                 <div className="relative flex items-center">
                   <div className="absolute left-4 z-20">
                     <Search className="w-5 h-5 text-gray-400" />
                   </div>
                   <input
                     type="text"
                     placeholder="Search for area, street name..."
                     className="w-full pl-12 pr-4 py-3.5 bg-white shadow-xl rounded-2xl text-sm font-bold border-0 focus:ring-2 focus:ring-[#8719C6] outline-none"
                     onClick={(e) => e.stopPropagation()}
                   />
                 </div>
               </Autocomplete>
             </div>
           )}

           {/* Centered Pin Sticker */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-4px)] pointer-events-none z-20">
              <div className="flex flex-col items-center">
                 <div className="bg-[#8719C6] px-3 py-1.5 rounded-xl shadow-xl mb-1 flex items-center gap-2 animate-bounce">
                    <span className="text-[10px] text-white font-black uppercase tracking-wider">Set Location</span>
                 </div>
                 <div className="relative">
                    <MapPin className="w-12 h-12 text-[#8719C6] drop-shadow-2xl" fill="#8719C6" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-black/30 rounded-full blur-[1px]"></div>
                 </div>
              </div>
           </div>

           {/* Current Location Button */}
           <button
             type="button"
             onClick={handleCurrentLocation}
             className="absolute bottom-6 right-6 bg-white w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center text-[#8719C6] hover:bg-gray-50 transition-all z-20 active:scale-90"
           >
             {isLocatingUser ? (
               <div className="w-6 h-6 border-3 border-[#8719C6]/20 border-t-[#8719C6] rounded-full animate-spin"></div>
             ) : (
               <Crosshair className="w-7 h-7" />
             )}
           </button>
        </div>

        {/* Footer - Interactive sticky card */}
        <div className="bg-white p-6 border-t border-gray-100 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.15)] shrink-0 z-30">
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${isLodaing ? 'bg-gray-50 border-gray-100' : 'bg-[#F5F0FF] border-[#8719C6]/10'}`}>
               {isLodaing ? (
                 <div className="w-5 h-5 border-2 border-gray-200 border-t-[#8719C6] rounded-full animate-spin"></div>
               ) : (
                 <MapPin className="w-6 h-6 text-[#8719C6]" />
               )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8719C6] block mb-1">Store Address</span>
              <p className={`text-[15px] font-bold text-gray-900 leading-snug truncate ${isLodaing ? 'text-gray-300' : ''}`}>
                {isLodaing ? 'Detecting address...' : address || 'Move map to select location'}
              </p>
            </div>
          </div>

          <button
            disabled={isLodaing || !address}
            onClick={() => onSelect(address, selectedCoords.lat, selectedCoords.lng)}
            className="w-full bg-[#8719C6] hover:bg-[#7215a8] disabled:bg-gray-200 disabled:text-gray-400 text-white font-black py-4 rounded-2xl shadow-xl shadow-[#8719C6]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
          >
            {isLodaing ? (
              <span>Detecting Location...</span>
            ) : (
              <div className="flex items-center gap-2">
                Confirm Location <Check className="w-6 h-6" strokeWidth={3} />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
