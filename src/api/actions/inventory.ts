"use server";

import api from '../api';

// Categories
export async function getVendorCategoriesAction(token: string) {
  try {
    const res = await api.get('/vendor/inventory/categories', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to fetch categories' };
  }
}

export async function updateVendorCategoriesAction(categoryIds: string[], token: string) {
  try {
    const res = await api.post('/vendor/inventory/categories/update', { categoryIds }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to update categories' };
  }
}

// Sub Categories
export async function getVendorSubCategoriesAction(categoryId: string, token: string) {
  try {
    const res = await api.get(`/vendor/inventory/sub-category?categoryId=${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to fetch sub-categories' };
  }
}

export async function updateVendorSubCategoriesAction(categoryId: string, subCategoryIds: string[], token: string) {
  try {
    const res = await api.post('/vendor/inventory/sub-category/update', { categoryId, subCategoryIds }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to update sub-categories' };
  }
}

export async function createCustomSubCategoryAction(formData: FormData, token: string) {
  try {
    const res = await api.post('/vendor/inventory/sub-category/custom', formData, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to create custom sub-category' };
  }
}

// Step progression update (we can just use the generic update vendor or update endpoint)
export async function updateVendorStatusAction(status: string, vendorId: string, token: string) {
  try {
    const res = await api.put(`/vendor/${vendorId}`, { status }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to update status' };
  }
}
