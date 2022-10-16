import { resolve } from 'path';
import { defineConfig } from 'vite';


export default defineConfig({
     build: {
          rollupOptions: {
               input: {
                    main: resolve(__dirname, 'index.html'),
                    sections: resolve(__dirname, 'sections/index.html'),
                    questions: resolve(__dirname, 'questions/index.html')
               }
          }
     }
});