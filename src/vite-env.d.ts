/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_BASE_URL_PROD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
