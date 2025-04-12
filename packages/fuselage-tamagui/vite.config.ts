import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: './tamagui.config.ts',
      components: ['tamagui'],
      optimize: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // or .tsx depending on your entry
      name: 'FuselageTamagui',
      fileName: (format) => `fuselage-tamagui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tamagui'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
