import { authMiddleware } from "@clerk/nextjs";
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const protectedRoute = createRouteMatcher([
//     '/',
//     '/upcoming',
//     '/meeting(.*)',
//     '/previous',
//     '/recordings',
//     '/personal-room',
//   ]);
  
//   export default clerkMiddleware((auth, req) => {
//     if (protectedRoute(req)) auth().protect();
//   });
  

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};