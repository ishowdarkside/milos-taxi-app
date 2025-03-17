export enum QueryKeysType {
  Local = 1,
  Server,
}

export enum UpdateType {
  Static = 1,
  WebSocket,
}

export interface localQueryKeysTypes {
  component: string;
  data: string;
}

export interface backendQueryKeyType {
  updateType: UpdateType;
  endpoint: string;
  baseUrl: string;
  params?: Record<string, unknown>;
}
