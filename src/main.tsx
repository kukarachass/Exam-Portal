import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={}>
        <RouterProvider router={}/>
    </QueryClientProvider>
  </StrictMode>,
)
