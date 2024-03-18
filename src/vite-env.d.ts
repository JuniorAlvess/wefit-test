/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL_PROD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
