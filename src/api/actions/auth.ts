"use server";

import api from '../api';

export async function requestOtpAction(mobile: string) {
  try {
    const res = await api.post('/auth/vendor/request-otp', { mobile });
    return { success: res.data.success, message: res.data.message };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || error.message || 'Something went wrong while requesting OTP.' 
    };
  }
}

export async function verifyOtpAction(mobile: string, otp: string) {
  try {
    const res = await api.post('/auth/vendor/verify-otp', { mobile, otp });
    return { 
      success: res.data.success, 
      message: res.data.message, 
      data: res.data.data 
    };
  } catch (error: any) {
    return { 
      success: false, 
      message: error.response?.data?.message || error.message || 'Something went wrong while verifying OTP.' 
    };
  }
}
