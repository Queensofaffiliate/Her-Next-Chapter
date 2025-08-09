import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
```typescript
export default defineConfig(({ mode }) => ({
  // existing config...
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  },
  // rest of config
}));
```
