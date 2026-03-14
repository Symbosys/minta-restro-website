"use server";

import api from '../api';

export async function fetchVendorDocumentAction(vendorId: string, token: string) {
  try {
    const res = await api.get(`/vendor/document/${vendorId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: res.data.data || res.data };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to fetch documents.' 
    };
  }
}

export async function verifyVendorDocumentAction(data: any, token: string) {
  try {
    const res = await api.post('/vendor/document/verify', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { success: true, data: res.data.data || res.data };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Failed to verify document.' 
    };
  }
}
