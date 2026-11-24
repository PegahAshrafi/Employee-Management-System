"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // تنظیمات پیش‌فرض برای تمام درخواست‌ها (مثل تلاش مجدد در صورت خطا)
      retry: 1,
      refetchOnWindowFocus: false, // وقتی کاربر روی تب کلیک کرد دوباره درخواست نفرسته
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
