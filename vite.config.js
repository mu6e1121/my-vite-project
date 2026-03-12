import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';

export default defineConfig({
  root: './src', // 開発の基点をsrcフォルダに設定
  plugins: [
    ViteEjsPlugin(),
  ],
  build: {
    outDir: '../dist', // 書き出し先をルートのdistフォルダに設定
    emptyOutDir: true, // 書き出し時に古いdistを空にする
    rollupOptions: {
      output: {
        // 各種アセットの書き出し先を振り分ける
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name].[ext]'; // CSSはdist/css/へ
          }
          return 'assets/[name].[ext]'; // その他はdist/assets/へ
        },
        chunkFileNames: 'js/[name].js', // JSの塊はdist/js/へ
        entryFileNames: 'js/[name].js', // メインのJSはdist/js/へ
      },
    },
  },
});