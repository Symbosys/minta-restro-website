"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  Upload, 
  X, 
  Check, 
  ChevronRight, 
  AlertCircle,
  Image as ImageIcon,
  Plus,
  Trash2,
  Info
} from 'lucide-react';
import { uploadShopImagesAction } from '../../api/actions/verification';

export default function Step4({ vendorData, onNext, onPrev }: { vendorData: any, onNext: (data?: any) => void, onPrev: () => void }) {
  const [shopImage, setShopImage] = useState<File | null>(null);
  const [shopImagePreview, setShopImagePreview] = useState<string | null>(null);
  const [menuImages, setMenuImages] = useState<File[]>([]);
  const [menuPreviews, setMenuPreviews] = useState<string[]>([]);
  
  const [initialShopPreview, setInitialShopPreview] = useState<string | null>(null);
  const [initialMenuPreviews, setInitialMenuPreviews] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const shopInputRef = useRef<HTMLInputElement>(null);
  const menuInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (vendorData?.images) {
      try {
        const images = typeof vendorData.images === 'string' ? JSON.parse(vendorData.images) : vendorData.images;
        if (images?.url) {
          setShopImagePreview(images.url);
          setInitialShopPreview(images.url);
        }
      } catch (e) { console.error("Error parsing shop images", e); }
    }
    
    if (vendorData?.menuImages && Array.isArray(vendorData.menuImages)) {
      const existingMenus = (vendorData.menuImages as any[]).map((m: any) => {
        let imgObj = m.imageUrl;
        if (typeof imgObj === 'string') {
          try {
            imgObj = JSON.parse(imgObj);
          } catch (e) {
            return imgObj;
          }
        }
        return imgObj?.url || imgObj;
      });
      setMenuPreviews(existingMenus);
      setInitialMenuPreviews(existingMenus);
    }
  }, [vendorData]);

  const handleShopImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrorMsg('Please upload a valid image file.');
        return;
      }
      setShopImage(file);
      setShopImagePreview(URL.createObjectURL(file));
      setErrorMsg('');
    }
  };

  const handleMenuImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remaining = 4 - menuPreviews.length;
    
    if (files.length > remaining) {
      setErrorMsg(`You can only upload up to 4 menu images. ${remaining} slots left.`);
      return;
    }

    const validFiles = files.filter(f => f.type.startsWith('image/'));
    if (validFiles.length < files.length) {
      setErrorMsg('Some files were ignored because they are not valid images.');
    }

    setMenuImages(prev => [...prev, ...validFiles]);
    const newPreviews = validFiles.map(f => URL.createObjectURL(f));
    setMenuPreviews(prev => [...prev, ...newPreviews]);
    setErrorMsg('');
  };

  const removeMenuImage = (index: number) => {
    const previewToRemove = menuPreviews[index];
    
    // If it's a blob (newly added file), remove it from menuImages too
    if (previewToRemove.startsWith('blob:')) {
      // Find the correspondence. This assumes order is preserved.
      // A more robust way would be to store objects {preview, file}
      // But for now, we can find which "new" image this corresponds to
      const newOnlyIndex = menuPreviews.slice(0, index).filter(p => p.startsWith('blob:')).length;
      setMenuImages(prev => prev.filter((_, i) => i !== newOnlyIndex));
    }
    
    setMenuPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const isDirty = () => {
    const shopChanged = !!shopImage;
    const menuCountChanged = menuPreviews.length !== initialMenuPreviews.length;
    
    // Check if any of the remaining menu previews are new (blobs) 
    // or if the set of existing ones changed (less likely but possible)
    const hasNewMenuImages = menuPreviews.some(p => p.startsWith('blob:'));
    
    // If anything was removed or added or replaced
    return shopChanged || menuCountChanged || hasNewMenuImages;
  };

  const handleSubmit = async () => {
    if (!shopImage && !shopImagePreview && menuPreviews.length === 0) {
      setErrorMsg('Please upload at least one image (Shop or Menu).');
      return;
    }

    // If no changes, move to next step immediately
    if (!isDirty()) {
      onNext();
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const formData = new FormData();
      if (shopImage) {
        formData.append('shopImage', shopImage);
      }

      menuImages.forEach(file => {
        formData.append('menuImages', file);
      });

      const res = await uploadShopImagesAction(formData, vendorData.token);
      if (res.success) {
        let updatedVendor = { ...vendorData };
        // Update status only if not already advanced
        if (vendorData.status === 'SHOP_IMAGES_NOT_UPLOADED') {
          updatedVendor.status = 'PRODUCT_SELECTION_NOT_DONE';
          localStorage.setItem('vendorAuth', JSON.stringify(updatedVendor));
        }
        onNext(updatedVendor);
      } else {
        setErrorMsg(res.message);
      }
    } catch (error: any) {
      setErrorMsg('An error occurred during upload.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto pb-20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-1">Visual Identity</h2>
        <p className="text-gray-500 text-[15px]">Upload photos that make your shop look irresistible to customers.</p>
      </div>
      <div className="h-px bg-gray-200 w-full mb-8"></div>

      {errorMsg && (
        <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 shadow-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-semibold">{errorMsg}</p>
        </div>
      )}

      <div className="space-y-12">
        {/* Section 1: Main Shop Photo */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[#8719C6]">
              <ImageIcon className="w-5 h-5" />
              <h3 className="text-lg font-bold text-gray-900">Main Store Photo</h3>
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Required</span>
          </div>

          <div 
            onClick={() => shopInputRef.current?.click()}
            className={`relative group cursor-pointer rounded-3xl overflow-hidden border-2 border-dashed transition-all duration-300 min-h-[300px] flex flex-col items-center justify-center bg-gray-50/50 hover:bg-[#8719C6]/5 ${shopImagePreview ? 'border-solid border-[#8719C6]/30' : 'border-gray-200 hover:border-[#8719C6]'}`}
          >
            {shopImagePreview ? (
              <>
                <img src={shopImagePreview} alt="Shop" className="w-full h-[300px] object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white/20 p-4 rounded-2xl border border-white/30 text-white flex items-center gap-2 font-bold">
                    <Camera className="w-5 h-5" /> Change Photo
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-[#8719C6]" />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Upload Shop Front</h4>
                <p className="text-sm text-gray-500 font-medium">Clear photo of your shop's entrance or main display</p>
              </div>
            )}
            <input 
              type="file" 
              ref={shopInputRef} 
              onChange={handleShopImageChange} 
              className="hidden" 
              accept="image/*" 
            />
          </div>
        </section>

        {/* Section 2: Menu Photos */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-[#8719C6]">
              <ImageIcon className="w-5 h-5" />
              <h3 className="text-lg font-bold text-gray-900">Menu & List Photos</h3>
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">{menuPreviews.length}/4 Uploaded</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {menuPreviews.map((preview, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
                <img src={preview} alt={`Menu ${index + 1}`} className="w-full h-full object-cover" />
                <button 
                  onClick={(e) => { e.stopPropagation(); removeMenuImage(index); }}
                  className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            
            {menuPreviews.length < 4 && (
              <div 
                onClick={() => menuInputRef.current?.click()}
                className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:bg-[#8719C6]/5 hover:border-[#8719C6] transition-all cursor-pointer flex flex-col items-center justify-center p-4 group"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform mb-2">
                  <Plus className="w-5 h-5 text-[#8719C6]" />
                </div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-tight">Add Menu</span>
                <input 
                  type="file" 
                  ref={menuInputRef} 
                  onChange={handleMenuImagesChange} 
                  className="hidden" 
                  multiple 
                  accept="image/*" 
                />
              </div>
            )}
          </div>
        </section>

        {/* Professional Tips */}
        <section className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
           <div className="flex items-center gap-2 text-gray-900 mb-4">
             <Info className="w-5 h-5 text-[#8719C6]" />
             <h4 className="text-sm font-black uppercase tracking-widest">Professional Tips</h4>
           </div>
           <ul className="space-y-3">
             <li className="flex items-start gap-3 text-sm text-gray-600 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-[#8719C6] mt-1.5 shrink-0"></div>
               Use natural daylight for clear, vibrant photos that look professional.
             </li>
             <li className="flex items-start gap-3 text-sm text-gray-600 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-[#8719C6] mt-1.5 shrink-0"></div>
               Ensure the entire menu is readable, centered, and not blurry.
             </li>
             <li className="flex items-start gap-3 text-sm text-gray-600 font-medium">
               <div className="w-1.5 h-1.5 rounded-full bg-[#8719C6] mt-1.5 shrink-0"></div>
               Avoid excessive filters; keep photos looking real and appetizing.
             </li>
           </ul>
        </section>
      </div>

      {/* Footer Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center bg-white pb-4">
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
          disabled={isLoading || (!shopImage && !shopImagePreview && menuPreviews.length === 0)}
          className="bg-[#8719C6] hover:bg-[#7215a8] disabled:opacity-50 text-white font-black py-3.5 px-12 rounded-xl transition-all shadow-lg hover:shadow-[#8719C6]/30 active:scale-95 text-lg flex items-center justify-center min-w-[250px]"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <div className="flex items-center gap-3">
               Save & Professionalize <Check className="w-6 h-6" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
