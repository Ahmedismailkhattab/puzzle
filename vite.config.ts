
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // هذا السطر يضمن عدم حدوث خطأ "process is not defined" في المتصفح
    'process.env': {}
  }
});
