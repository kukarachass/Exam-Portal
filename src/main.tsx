import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import './index.css';
import { worker } from "./mocks/browser";

const queryClient = new QueryClient();

async function enableMocks() {
    if (import.meta.env.DEV) {
        await worker.start();
    }
}

enableMocks().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </StrictMode>
    );
});