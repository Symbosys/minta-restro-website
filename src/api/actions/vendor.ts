"use server";

import api from '../api';

export async function updateVendorAction(vendorId: string, payload: any, token: string) {
  try {
    const res = await api.put(`/vendor/${vendorId}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: res.data };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || error.message || 'Failed to update vendor.' 
    };
  }
}

export async function fetchVendorMeAction(token: string) {
  try {
    const res = await api.get('/vendor/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: res.data.data || res.data };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || error.message || 'Failed to fetch profile.' 
    };
  }
}
