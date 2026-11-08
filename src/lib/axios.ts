import axios from "axios";

// ۱. ساخت بیس اصلی
export const api = axios.create({
  baseURL: "https://ems-server-teal.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// (Request): 
api.interceptors.request.use(
  (config) => {
    // گرفتن توکن از حافظه مرورگر
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // خطای قبل از ارسال
    return Promise.reject(error);
  },
);

// (Response): 
api.interceptors.response.use(
  (response) => {
    // سرور موفق بود (کدهای 200)؛ پاسخ رو عادی رد کن بره
    return response;
  },
  (error) => {
    // سرور خطا داد (مثلاً ۴۰۱ یعنی توکن منقضی یا نامعتبره)
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token"); // پاک کردن توکن باطله
        window.location.href = "/login"; // انتقال اجباری به لاگین
      }
    }

    return Promise.reject(error);
  },
);
