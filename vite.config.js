import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

// ESモジュール環境で __dirname を定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: './src', // 開発の基点をsrcフォルダに設定
  plugins: [
    ViteEjsPlugin(),
  ],
  resolve: {
    alias: {
      // エイリアス名を 'scss'（スラッシュなし）に変更し、確実に絶対パスで紐付ける
      'scss': resolve(__dirname, 'src/scss'),
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../dist', // 書き出し先をルートのdistフォルダに設定
    emptyOutDir: true, // 書き出し時に古いdistを空にする
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        business: resolve(__dirname, 'src/business/index.html'),
        company: resolve(__dirname, 'src/company/index.html'),
        contact: resolve(__dirname, 'src/contact/index.html'),
        cosmetics: resolve(__dirname, 'src/cosmetics/index.html'),
        for_salons: resolve(__dirname, 'src/for_salons/index.html'),
        product: resolve(__dirname, 'src/product/index.html'),
        supplement: resolve(__dirname, 'src/supplement/index.html'),
        news: resolve(__dirname, 'src/news/index.html'),
        online_shop: resolve(__dirname, 'src/online_shop/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
  },
});