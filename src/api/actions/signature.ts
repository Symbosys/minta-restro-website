"use server";

import api from '../api';

export async function uploadSignatureAction(formData: FormData, vendorId: string, token: string) {
  try {
    const res = await api.put(`/vendor/${vendorId}`, formData, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return { success: true, data: res.data.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to upload signature' };
  }
}
