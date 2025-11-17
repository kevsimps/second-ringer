// types/index.d.ts
declare global {
  interface Window {
    AGENTX_SERVICE: any; // Or a more specific type like 'object' or a custom type
  }
}

// This is required to make the declaration file work
export {};