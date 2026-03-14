"use server";

import api from '../api';

export async function updateShopDetailsAction(payload: any, token: string) {
  try {
    const res = await api.post('/vendor/verification/shop-details', payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || error.message || 'Failed to update shop details.' 
    };
  }
}

export async function uploadShopImagesAction(formData: FormData, token: string) {
  try {
    const res = await api.post('/vendor/verification/shop-images', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || error.message || 'Failed to upload images.' 
    };
  }
}
