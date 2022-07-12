/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
  readonly VITE_UPLOAD_SERVICE_URL: string;
  readonly VITE_MODE: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
