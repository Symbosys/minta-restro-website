"use client";

import React, { useState, useEffect } from 'react';
import { State, City, IState, ICity } from 'country-state-city';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Store, 
  ChevronRight, 
  Search, 
  Check, 
  X,
  AlertCircle,
  Building2,
  Calendar,
  Navigation
} from 'lucide-react';
import { updateShopDetailsAction } from '../../api/actions/verification';
import MapPickerModal from '../MapPickerModal';

const DAYS_OF_WEEK = [
  { id: 1, label: 'Monday' },
  { id: 2, label: 'Tuesday' },
  { id: 3, label: 'Wednesday' },
  { id: 4, label: 'Thursday' },
  { id: 5, label: 'Friday' },
  { id: 6, label: 'Saturday' },
  { id: 0, label: 'Sunday' },
];

export default function Step3({ vendorData, onNext, onPrev }: { vendorData: any, onNext: (data?: any) => void, onPrev: () => void }) {
  // Shop Details
  const [shopName, setShopName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  
  // Location
  const [completeAddress, setCompleteAddress] = useState('');
  const [floor, setFloor] = useState('');
  const [pincode, setPincode] = useState('');
  const [areaName, setAreaName] = useState('');
  const [selectedState, setSelectedState] = useState<IState | null>(null);
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
  
  // Hours
  const [shopHours, setShopHours] = useState<any[]>([]);
  
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  
  // UI State
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showStateList, setShowStateList] = useState(false);
  const [showCityList, setShowCityList] = useState(false);
  const [stateSearch, setStateSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');

  const allStates = State.getStatesOfCountry('IN');
  const filteredStates = allStates.filter(s => s.name.toLowerCase().includes(stateSearch.toLowerCase()));
  
  const allCities = selectedState ? City.getCitiesOfState('IN', selectedState.isoCode) : [];
  const filteredCities = allCities.filter(c => c.name.toLowerCase().includes(citySearch.toLowerCase()));

  useEffect(() => {
    if (vendorData) {
      setShopName(vendorData.shopName || '');
      setContactNumber(vendorData.contactNumber || vendorData.mobile || '');
      setCompleteAddress(vendorData.completeAddress || '');
      setFloor(vendorData.floor || '');
      setPincode(vendorData.pincode || '');
      setAreaName(vendorData.areaName || '');
      setLatitude(vendorData.latitude || null);
      setLongitude(vendorData.longitude || null);
      
      if (vendorData.state) {
        const stateObj = allStates.find(s => s.name === vendorData.state);
        if (stateObj) setSelectedState(stateObj);
      }
      
      // We can't easily find city without state, so it will be handled when state is loaded or manually picked
      
      if (vendorData.shopHours && Array.isArray(vendorData.shopHours) && vendorData.shopHours.length > 0) {
        // Initialize state with all days, merging in vendor data
        const initialHours = DAYS_OF_WEEK.map(day => {
          const existing = vendorData.shopHours.find((h: any) => h.dayOfWeek === day.id);
          if (existing) {
            return {
              ...existing,
              active: true
            };
          }
          return {
            dayOfWeek: day.id,
            openTime: new Date(new Date().setHours(9, 0, 0, 0)).toISOString(),
            closeTime: new Date(new Date().setHours(21, 0, 0, 0)).toISOString(),
            active: false
          };
        });
        setShopHours(initialHours);
      } else {
        // Default hours: 9 AM to 9 PM for all days
        const defaultHours = DAYS_OF_WEEK.map(day => ({
          dayOfWeek: day.id,
          openTime: new Date(new Date().setHours(9, 0, 0, 0)).toISOString(),
          closeTime: new Date(new Date().setHours(21, 0, 0, 0)).toISOString(),
          active: true
        }));
        setShopHours(defaultHours);
      }
    }
  }, [vendorData]);

  // Handle City lookup after State is found
  useEffect(() => {
    if (selectedState && vendorData?.city) {
      const cityObj = City.getCitiesOfState('IN', selectedState.isoCode).find(c => c.name === vendorData.city);
      if (cityObj) setSelectedCity(cityObj);
    }
  }, [selectedState]);

  const toggleDay = (dayId: number) => {
    setShopHours(prev => {
      const exists = prev.find(h => h.dayOfWeek === dayId);
      if (exists) {
        return prev.map(h => h.dayOfWeek === dayId ? { ...h, active: !h.active } : h);
      } else {
        return [...prev, {
          dayOfWeek: dayId,
          openTime: new Date(new Date().setHours(9, 0, 0, 0)).toISOString(),
          closeTime: new Date(new Date().setHours(21, 0, 0, 0)).toISOString(),
          active: true
        }];
      }
    });
  };

  const updateTime = (dayId: number, type: 'openTime' | 'closeTime', value: string) => {
    setShopHours(prev => prev.map(h => h.dayOfWeek === dayId ? { ...h, [type]: value } : h));
  };

  const handleSubmit = async () => {
    if (!shopName || !contactNumber || !completeAddress || !pincode || !areaName || !selectedState || !selectedCity) {
      setErrorMsg('Please fill in all mandatory fields.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (pincode.length !== 6) {
      setErrorMsg('Pincode must be 6 digits.');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    const activeHours = shopHours.filter(h => h.active).map(({ active, ...rest }) => rest);

    const payload = {
      shopName,
      contactNumber,
      mainAddress: completeAddress,
      completeAddress,
      floor,
      pincode,
      areaName,
      city: selectedCity.name,
      state: selectedState.name,
      stateCode: selectedState.isoCode,
      country: 'India',
      countryCode: 'IN',
      shopHours: activeHours,
      latitude: latitude,
      longitude: longitude,
    };

    const res = await updateShopDetailsAction(payload, vendorData.token);
    setIsLoading(false);

    if (res.success) {
      // Update local storage so data persists on refresh
      const updatedVendor = { ...vendorData, ...payload, status: 'SHOP_IMAGES_NOT_UPLOADED' };
      localStorage.setItem('vendorAuth', JSON.stringify(updatedVendor));
      onNext(updatedVendor);
    } else {
      setErrorMsg(res.message);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatTimeForInput = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toTimeString().slice(0, 5);
    } catch (e) {
      return "09:00";
    }
  };

  const handleTimeChange = (dayId: number, type: 'openTime' | 'closeTime', timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    updateTime(dayId, type, date.toISOString());
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-visible">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-1">Menu and operational details</h2>
        <p className="text-gray-500 text-[15px]">Name, location, timings and menu details</p>
      </div>
      <div className="h-px bg-gray-200 w-full mb-8"></div>

      {errorMsg && (
        <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 shadow-sm animate-in shake duration-500">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-semibold">{errorMsg}</p>
        </div>
      )}

      <div className="space-y-12">
        {/* Section 1: Basic Info */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-[#8719C6]">
            <Store className="w-5 h-5" />
            <h3 className="text-lg font-bold text-gray-900 m-0">Store Basics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
            <div>
              <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                Shop Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="e.g. McDonald's - Jubilee Hills"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8719C6]/20 focus:border-[#8719C6] transition-all text-gray-900 text-sm shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                Order Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#8719C6]/20 focus-within:border-[#8719C6] transition-all shadow-sm">
                <span className="text-gray-400 mr-2 border-r border-gray-200 pr-2 font-medium">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="10-digit mobile number"
                  className="flex-1 outline-none text-gray-900 text-sm bg-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Precise Location */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-[#8719C6]">
            <MapPin className="w-5 h-5" />
            <h3 className="text-lg font-bold text-gray-900 m-0">Store Address</h3>
          </div>

          <div className="mb-8">
            <div className={`w-full h-48 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 group hover:border-[#8719C6]/50 hover:bg-[#8719C6]/5 transition-all cursor-pointer overflow-hidden relative  ${latitude ? 'border-solid border-[#8719C6]/30' : ''}`}
                 onClick={() => setIsMapOpen(true)}>
              {latitude && longitude ? (
                <>
                  <div className="absolute inset-0 bg-emerald-50/50 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 mb-3 animate-bounce duration-1000">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-emerald-700 font-black text-sm uppercase tracking-widest">Location Pinned</p>
                    <p className="text-emerald-600/70 text-[10px] font-bold mt-1">Click to re-adjust on map</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                    <Navigation className="w-7 h-7 text-[#8719C6]" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-black text-gray-900 uppercase tracking-tight">Pin on Map</p>
                    <p className="text-xs text-gray-500 font-bold mt-0.5">Recommended for faster verification</p>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                Complete Address <span className="text-red-500">*</span>
              </label>
              <textarea
                value={completeAddress}
                onChange={(e) => setCompleteAddress(e.target.value)}
                placeholder="Shop number, building name, street, locality"
                rows={3}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8719C6]/20 focus:border-[#8719C6] transition-all text-gray-900 text-sm shadow-sm resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                  Floor / Unit (Optional)
                </label>
                <input
                  type="text"
                  value={floor}
                  onChange={(e) => setFloor(e.target.value)}
                  placeholder="e.g. Ground Floor"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8719C6]/20 focus:border-[#8719C6] transition-all text-gray-900 text-sm shadow-sm"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  placeholder="6-digit pincode"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8719C6]/20 focus:border-[#8719C6] transition-all text-gray-900 text-sm shadow-sm"
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                  Area / Locality Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={areaName}
                  onChange={(e) => setAreaName(e.target.value)}
                  placeholder="e.g. Jubilee Hills"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8719C6]/20 focus:border-[#8719C6] transition-all text-gray-900 text-sm shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* State Picker */}
              <div className="relative">
                <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                  State <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowStateList(!showStateList)}
                  className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white hover:bg-gray-50 transition-all shadow-sm"
                >
                  <span className={selectedState ? "text-gray-900" : "text-gray-400"}>
                    {selectedState ? selectedState.name : "Select State"}
                  </span>
                  <Search className="w-4 h-4 text-gray-400" />
                </button>
                
                {showStateList && (
                  <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden max-h-[300px] flex flex-col">
                    <div className="p-3 border-b border-gray-100 bg-gray-50/50">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search state..."
                        value={stateSearch}
                        onChange={(e) => setStateSearch(e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#8719C6]"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="overflow-y-auto flex-1">
                      {filteredStates.map(s => (
                        <div
                          key={s.isoCode}
                          onClick={() => {
                            setSelectedState(s);
                            setSelectedCity(null);
                            setShowStateList(false);
                            setStateSearch('');
                          }}
                          className={`px-4 py-3 text-sm cursor-pointer hover:bg-[#8719C6]/5 flex items-center justify-between border-b border-gray-50 last:border-none ${selectedState?.isoCode === s.isoCode ? 'bg-[#8719C6]/10 text-[#8719C6] font-bold' : 'text-gray-700 font-medium'}`}
                        >
                          {s.name}
                          {selectedState?.isoCode === s.isoCode && <Check className="w-4 h-4" />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* City Picker */}
              <div className="relative">
                <label className="block text-[13px] font-bold text-[#374151] mb-2 uppercase tracking-tight">
                  City <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  disabled={!selectedState}
                  onClick={() => setShowCityList(!showCityList)}
                  className={`w-full flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white transition-all shadow-sm ${!selectedState ? 'opacity-60 cursor-not-allowed bg-gray-50' : 'hover:bg-gray-50'}`}
                >
                  <span className={selectedCity ? "text-gray-900" : "text-gray-400"}>
                    {selectedCity ? selectedCity.name : "Select City"}
                  </span>
                  <Search className="w-4 h-4 text-gray-400" />
                </button>

                {showCityList && selectedState && (
                  <div className="absolute z-50 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden max-h-[300px] flex flex-col">
                    <div className="p-3 border-b border-gray-100 bg-gray-50/50">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search city..."
                        value={citySearch}
                        onChange={(e) => setCitySearch(e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm outline-none focus:border-[#8719C6]"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div className="overflow-y-auto flex-1">
                      {filteredCities.map((c, idx) => (
                        <div
                          key={`${c.name}-${idx}`}
                          onClick={() => {
                            setSelectedCity(c);
                            setShowCityList(false);
                            setCitySearch('');
                          }}
                          className={`px-4 py-3 text-sm cursor-pointer hover:bg-[#8719C6]/5 flex items-center justify-between border-b border-gray-50 last:border-none ${selectedCity?.name === c.name ? 'bg-[#8719C6]/10 text-[#8719C6] font-bold' : 'text-gray-700 font-medium'}`}
                        >
                          {c.name}
                          {selectedCity?.name === c.name && <Check className="w-4 h-4" />}
                        </div>
                      ))}
                      {filteredCities.length === 0 && (
                        <div className="px-4 py-8 text-center text-gray-400 text-sm">
                          No cities found in this state
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Operating Hours */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-[#8719C6]">
            <Clock className="w-5 h-5" />
            <h3 className="text-lg font-bold text-gray-900 m-0">Operating Hours</h3>
          </div>
          <p className="text-gray-500 text-[13px] mb-8 font-medium">
             Set your outlet's opening and closing times. Customers will only see you open during these hours.
          </p>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {DAYS_OF_WEEK.map((day) => {
              const hourConfig = shopHours.find(h => h.dayOfWeek === day.id);
              const isActive = hourConfig?.active ?? false;

              return (
                <div key={day.id} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => toggleDay(day.id)}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${isActive ? 'bg-[#8719C6]' : 'bg-gray-200'}`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${isActive ? 'left-7' : 'left-1'}`}></div>
                    </button>
                    <span className={`text-sm font-bold min-w-[80px] ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>{day.label}</span>
                  </div>

                  {isActive ? (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 flex-col xs:flex-row">
                        <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Open</span>
                        <input
                          type="time"
                          value={formatTimeForInput(hourConfig.openTime)}
                          onChange={(e) => handleTimeChange(day.id, 'openTime', e.target.value)}
                          className="border border-gray-200 rounded px-2 py-1 text-xs font-bold bg-white text-gray-700 outline-none focus:border-[#8719C6] focus:ring-1 focus:ring-[#8719C6]/10"
                        />
                      </div>
                      <span className="text-gray-300 font-medium">to</span>
                      <div className="flex items-center gap-1.5 flex-col xs:flex-row">
                        <span className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Close</span>
                        <input
                          type="time"
                          value={formatTimeForInput(hourConfig.closeTime)}
                          onChange={(e) => handleTimeChange(day.id, 'closeTime', e.target.value)}
                          className="border border-gray-200 rounded px-2 py-1 text-xs font-bold bg-white text-gray-700 outline-none focus:border-[#8719C6] focus:ring-1 focus:ring-[#8719C6]/10"
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded">Closed</span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center shrink-0 pb-4">
        <button
          onClick={onPrev}
          className="group flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold transition-all"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 group-hover:bg-gray-50 transition-all">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </div>
          Back
        </button>
        
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-[#8719C6] hover:bg-[#7215a8] disabled:opacity-70 text-white font-black py-3.5 px-12 rounded-xl transition-all shadow-lg hover:shadow-[#8719C6]/30 active:scale-95 text-lg flex items-center justify-center min-w-[200px]"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <div className="flex items-center gap-3">
               Finish Setup <ChevronRight className="w-5 h-5" />
            </div>
          )}
        </button>
      </div>

      <MapPickerModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        initialLat={latitude || undefined}
        initialLng={longitude || undefined}
        onSelect={(addr, lat, lng) => {
          setCompleteAddress(addr);
          setLatitude(lat);
          setLongitude(lng);
          setIsMapOpen(false);
          
          // Try to extract pincode if present in address
          const pinMatch = addr.match(/\b\d{6}\b/);
          if (pinMatch) setPincode(pinMatch[0]);
        }}
      />
    </div>
  );
}
