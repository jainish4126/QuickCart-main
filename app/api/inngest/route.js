import { serve } from "inngest/next";
import {
  createUserOrder,
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation
} from "@/config/inngest";

// ✅ Ensure no accidental "globle" usage breaks deployment
// This makes sure globalThis is available everywhere
if (typeof globalThis !== "undefined") {
  globalThis.appGlobals = globalThis.appGlobals || {};
}

// ✅ Serve Inngest functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder
  ],
});
