// import { browser, building, dev, version } from "$app/environment";

// export async function handle({ event, resolve }) {
//   console.log("hooks", browser);
//   if ((await browser) && "geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log("lat", position.coords.latitude, position.coords.longitude);
//       console.log("lon", position.coords.latitude, position.coords.longitude);
//     });
//     // } else {
//     //   console.log("geolocation IS NOT available");
//   }

//   return await resolve(event);
// }
