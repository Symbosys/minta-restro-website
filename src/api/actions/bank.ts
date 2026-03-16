"use server";

import api from '../api';

export async function createBankAccountAction(data: any, token: string) {
  try {
    const res = await api.post('/vendor/bank/create', data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to add bank account' };
  }
}

export async function fetchVendorBankAccountsAction(vendorId: string, token: string) {
  try {
    const res = await api.get(`/vendor/bank/${vendorId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to fetch bank accounts' };
  }
}

export async function updateBankAccountAction(bankId: string, vendorId: string, data: any, token: string) {
  try {
    const res = await api.put(`/vendor/bank/${vendorId}/${bankId}`, data, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return { success: true, data: res.data.data };
  } catch (error: any) {
    return { success: false, message: error.response?.data?.message || 'Failed to update bank account' };
  }
}
