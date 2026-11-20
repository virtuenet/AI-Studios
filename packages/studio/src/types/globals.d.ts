/**
 * Runtime overrides injected by self-hosted deployments or the Electron shell.
 */
export {};

declare global {
  interface Window {
    __FILM_CREW_ML_ENDPOINT__?: string;
    __AI_STUDIOS_ERROR_ENDPOINT__?: string;
  }
}
