"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Check,
  ChevronRight,
  AlertCircle,
  Plus,
  Trash2,
  Package,
  Layers,
  Image as ImageIcon,
  X,
  Camera
} from 'lucide-react';
import {
  getVendorCategoriesAction,
  updateVendorCategoriesAction,
  getVendorSubCategoriesAction,
  updateVendorSubCategoriesAction,
  createCustomSubCategoryAction,
  updateVendorStatusAction
} from '../../api/actions/inventory';

// Simple Clean Switch Component
const Switch = ({ checked, onChange, disabled }: { checked: boolean, onChange: () => void, disabled?: boolean }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={(e) => {
      e.stopPropagation();
      onChange();
    }}
    className={`
      relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none 
      ${checked ? 'bg-[#8719C6]' : 'bg-gray-200'}
    `}
  >
    <span
      className={`
        pointer-events-none block h-4 w-4 rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out
        ${checked ? 'translate-x-4' : 'translate-x-0'}
      `}
    />
  </button>
);

export default function Step5({ vendorData, onNext, onPrev }: { vendorData: any, onNext: (data?: any) => void, onPrev: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [enabledCategoryIds, setEnabledCategoryIds] = useState<Set<string>>(new Set());

  // Subcategories state -> maps categoryId to its subcategories
  const [subCategories, setSubCategories] = useState<Record<string, any[]>>({});
  const [selectedSubCategoryIds, setSelectedSubCategoryIds] = useState<Record<string, Set<string>>>({});

  const [isSaving, setIsSaving] = useState(false);

  // Custom Subcategory Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customDesc, setCustomDesc] = useState('');
  const [customImage, setCustomImage] = useState<File | null>(null);
  const [customImagePreview, setCustomImagePreview] = useState<string | null>(null);
  const [isCreatingCustom, setIsCreatingCustom] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    const res = await getVendorCategoriesAction(vendorData.token);
    if (res.success && Array.isArray(res.data)) {
      setCategories(res.data);
      const enabled = new Set<string>();
      res.data.forEach((c: any) => {
        if (c.isSelected) enabled.add(c.id.toString());
      });
      setEnabledCategoryIds(enabled);

      if (res.data.length > 0) {
        handleCategoryClick(res.data[0].id.toString(), enabled);
      }
    } else {
      setErrorMsg(res.message);
    }
    setIsLoading(false);
  };

  const fetchSubCategories = async (categoryId: string) => {
    const res = await getVendorSubCategoriesAction(categoryId, vendorData.token);
    if (res.success && Array.isArray(res.data)) {
      setSubCategories(prev => ({ ...prev, [categoryId]: res.data }));
      const selectedIds = new Set<string>();
      res.data.forEach((sc: any) => {
        if (sc.isSelected) selectedIds.add(sc.id.toString());
      });
      setSelectedSubCategoryIds(prev => ({ ...prev, [categoryId]: selectedIds }));
    }
  };

  const handleCategoryClick = (categoryId: string, currentEnabled = enabledCategoryIds) => {
    setActiveCategoryId(categoryId);
    if (currentEnabled.has(categoryId) && !subCategories[categoryId]) {
      fetchSubCategories(categoryId);
    }
  };

  const toggleCategory = async (categoryId: string) => {
    const newEnabled = new Set(enabledCategoryIds);
    const isNowEnabled = !newEnabled.has(categoryId);

    if (isNowEnabled) {
      newEnabled.add(categoryId);
    } else {
      newEnabled.delete(categoryId);
    }

    setEnabledCategoryIds(newEnabled);
    if (isNowEnabled && !subCategories[categoryId]) {
      const res = await updateVendorCategoriesAction(Array.from(newEnabled), vendorData.token);
      if (res.success) {
        await fetchSubCategories(categoryId);
      } else {
        const revert = new Set(newEnabled);
        revert.delete(categoryId);
        setEnabledCategoryIds(revert);
        setErrorMsg('Failed to enable category.');
      }
    } else {
      updateVendorCategoriesAction(Array.from(newEnabled), vendorData.token);
    }
  };

  const toggleSubCategory = async (subCategoryId: string) => {
    if (!activeCategoryId) return;

    const currentSelected = selectedSubCategoryIds[activeCategoryId] || new Set();
    const newSelected = new Set(currentSelected);

    if (newSelected.has(subCategoryId)) {
      newSelected.delete(subCategoryId);
    } else {
      newSelected.add(subCategoryId);
    }

    setSelectedSubCategoryIds(prev => ({ ...prev, [activeCategoryId]: newSelected }));
    await updateVendorSubCategoriesAction(activeCategoryId, Array.from(newSelected), vendorData.token);
  };

  const handleCustomImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomImage(file);
      setCustomImagePreview(URL.createObjectURL(file));
    }
  };

  const submitCustomSubCategory = async () => {
    if (!activeCategoryId) return;
    if (!customName.trim()) {
      setErrorMsg('Please enter a name.');
      return;
    }

    setIsCreatingCustom(true);
    const formData = new FormData();
    formData.append('categoryId', activeCategoryId);
    formData.append('name', customName.trim());
    if (customDesc.trim()) formData.append('description', customDesc.trim());
    if (customImage) formData.append('image', customImage);

    const res = await createCustomSubCategoryAction(formData, vendorData.token);
    if (res.success) {
      setIsModalOpen(false);
      setCustomName('');
      setCustomDesc('');
      setCustomImage(null);
      setCustomImagePreview(null);
      await fetchSubCategories(activeCategoryId);
    } else {
      setErrorMsg(res.message);
    }
    setIsCreatingCustom(false);
  };

  const handleFinishStep = async () => {
    if (enabledCategoryIds.size === 0) {
      setErrorMsg('Please select at least one primary category.');
      return;
    }

    setIsSaving(true);
    try {
      // Sync categories
      await updateVendorCategoriesAction(Array.from(enabledCategoryIds), vendorData.token);

      let updatedVendor = { ...vendorData };

      // Only update status if the vendor hasn't completed this step before
      if (vendorData.status === 'PRODUCT_SELECTION_NOT_DONE') {
        const res = await updateVendorStatusAction('BANK_ACCOUNT_NOT_ADDED', vendorData.id, vendorData.token);
        if (res.success) {
          updatedVendor.status = 'BANK_ACCOUNT_NOT_ADDED';
          localStorage.setItem('vendorAuth', JSON.stringify(updatedVendor));
        } else {
          setErrorMsg('Failed to update status.');
          setIsSaving(false);
          return;
        }
      }

      onNext(updatedVendor);
    } catch (e) {
      setErrorMsg('Something went wrong.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-3 border-[#8719C6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const activeCategoryObj = categories.find(c => c.id.toString() === activeCategoryId);
  const isActiveCategoryEnabled = activeCategoryId && enabledCategoryIds.has(activeCategoryId);
  const currentSubCategories = activeCategoryId ? (subCategories[activeCategoryId] || []) : [];
  const currentSelectedSubCategoryIds = activeCategoryId ? (selectedSubCategoryIds[activeCategoryId] || new Set()) : new Set();

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto pb-20 px-4">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Manage Inventory</h2>
        <p className="text-gray-500 text-sm">Organize your shop's categories and items.</p>
      </div>

      <div className="h-px bg-gray-100 w-full mb-6"></div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p className="text-xs font-semibold">{errorMsg}</p>
        </div>
      )}

      {/* Primary Categories - Horizontal Pill List */}
      <div className="mb-8 overflow-hidden">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-1" style={{ scrollbarWidth: 'none' }}>
          {categories.map((cat) => {
            const isSelected = activeCategoryId === cat.id.toString();
            const isEnabled = enabledCategoryIds.has(cat.id.toString());
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id.toString())}
                className={`flex items-center gap-3 min-w-max px-4 py-2 border rounded-2xl transition-all
                  ${isSelected ? 'border-[#8719C6] bg-[#8719C6]/5 shadow-sm' : 'border-gray-200 bg-white hover:bg-gray-50'}
                `}
              >
                <div className={`w-8 h-8 rounded-full overflow-hidden border border-gray-100 ${!isEnabled && !isSelected ? 'opacity-50' : ''}`}>
                  {cat.image ? (
                    <img src={typeof cat.image === 'string' ? JSON.parse(cat.image).url : cat.image?.url} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <Package className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <span className={`text-sm font-bold ${isSelected ? 'text-[#8719C6]' : 'text-gray-600'}`}>
                  {cat.name}
                </span>
                {isEnabled && (
                  <div className="w-4 h-4 bg-[#8719C6] rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Category Panel */}
      {activeCategoryObj && (
        <div className="animate-in slide-in-from-top-2 duration-300">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-12">
            {/* Toggle Header */}
            <div className="p-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
              <div>
                <h3 className="text-base font-bold text-gray-900">Selling {activeCategoryObj.name}?</h3>
                <p className="text-xs text-gray-500">Toggle on to enable selection of items.</p>
              </div>
              <Switch
                checked={isActiveCategoryEnabled || false}
                onChange={() => toggleCategory(activeCategoryObj.id.toString())}
              />
            </div>

            {/* Sub-Categories Section */}
            {isActiveCategoryEnabled && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Layers className="w-3 h-3 text-[#8719C6]" /> Available Items
                  </span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-bold text-[#8719C6] bg-[#8719C6]/5 hover:bg-[#8719C6]/10 px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors"
                  >
                    <Plus className="w-3 h-3" /> Add Custom
                  </button>
                </div>

                {currentSubCategories.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl">
                    <p className="text-sm text-gray-400">No items available. Add your own custom ones!</p>
                  </div>
                ) : (
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1 -mx-1" style={{ scrollbarWidth: 'none' }}>
                    {currentSubCategories.map((sub: any) => {
                      const isSelected = currentSelectedSubCategoryIds.has(sub.id.toString());
                      const parsedImage = typeof sub.image === 'string' ? JSON.parse(sub.image) : sub.image;

                      return (
                        <div
                          key={sub.id}
                          className={`min-w-[200px] max-w-[200px] p-4 rounded-2xl border-2 transition-all flex flex-col gap-3 relative
                            ${isSelected ? 'border-[#8719C6] bg-[#8719C6]/5' : 'border-gray-100 bg-white shadow-sm'}
                          `}
                        >
                          <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                              {parsedImage?.url ? (
                                <img src={parsedImage.url} alt={sub.name} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Layers className="w-5 h-5 text-gray-200" />
                                </div>
                              )}
                            </div>
                            <Switch
                              checked={isSelected}
                              onChange={() => toggleSubCategory(sub.id.toString())}
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-1">
                              <h5 className={`font-bold text-sm truncate ${isSelected ? 'text-[#8719C6]' : 'text-gray-900'}`}>{sub.name}</h5>
                              {sub.isCustom && <span className="text-[8px] font-black bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded uppercase">Custom</span>}
                            </div>
                            <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">
                              {sub.description || 'Standard shop item category'}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-bold text-sm"
        >
          <ChevronRight className="w-4 h-4 rotate-180" /> Back
        </button>

        <button
          onClick={handleFinishStep}
          disabled={isSaving || enabledCategoryIds.size === 0}
          className="px-10 py-3.5 bg-[#8719C6] hover:bg-[#7215a8] disabled:bg-gray-200 text-white font-black rounded-xl transition-all shadow-md active:scale-95 flex items-center gap-2 min-w-[200px] justify-center text-sm"
        >
          {isSaving ? (
            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>Save & Continue <ChevronRight className="w-4 h-4" /></>
          )}
        </button>
      </div>

      {/* Custom Item Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-sm shadow-xl overflow-hidden">
            <div className="p-5 border-b border-gray-50 flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">New Custom Item</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-900">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Item Name *</label>
                <input
                  type="text"
                  value={customName}
                  onChange={e => setCustomName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8719C6] focus:bg-white outline-none text-sm font-medium transition-all"
                  placeholder="e.g. Specialty Beverages"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Description</label>
                <textarea
                  rows={2}
                  value={customDesc}
                  onChange={e => setCustomDesc(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#8719C6] focus:bg-white outline-none text-sm font-medium transition-all resize-none"
                  placeholder="Tell us more about this item..."
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-gray-500 uppercase">Image</label>
                  {customImagePreview && (
                    <button onClick={() => { setCustomImage(null); setCustomImagePreview(null); }} className="text-red-500 text-[10px] font-bold">Remove</button>
                  )}
                </div>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`h-28 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${customImagePreview ? 'border-[#8719C6] bg-[#8719C6]/5' : 'border-gray-100 bg-gray-50 hover:bg-gray-100'}`}
                >
                  {customImagePreview ? (
                    <img src={customImagePreview} alt="Preview" className="h-full w-auto object-contain p-2 rounded-xl" />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-300">
                      <Camera className="w-5 h-5" />
                      <span className="text-[10px] font-bold">Choose Image</span>
                    </div>
                  )}
                </div>
                <input type="file" className="hidden" ref={fileInputRef} onChange={handleCustomImageChange} accept="image/*" />
              </div>
            </div>

            <div className="p-5 bg-gray-50 flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl font-bold text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={submitCustomSubCategory}
                disabled={isCreatingCustom || !customName.trim()}
                className="flex-1 py-2.5 rounded-xl font-bold text-sm text-white bg-[#8719C6] hover:bg-[#7215a8] disabled:opacity-50 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {isCreatingCustom ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Check className="w-4 h-4" />}
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
