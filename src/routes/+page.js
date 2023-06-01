import { browser, building, dev, version } from "$app/environment";
export const ssr = false;

export async function load() {
  // let lat, lon;

  // let coords;
  // async function coords() {
  //   if (browser && "geolocation" in navigator) {
  //   return navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(
  //       "coords",
  //     position.coords.latitude, position.coords.longitude;
  //     );
  //   });
  //   }
  // }

  // console.log("coords", await coords());

  // if ("geolocation" in navigator) {
  //   coords = navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(
  //       "coords",
  //       position.coords.latitude,
  //       position.coords.longitude
  //     );
  //   });
  // }

  // console.log("coords", coords());

  // const coords = async () => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const obj = {
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       };

  //       return obj;
  //     });
  //   } else {
  //     console.log("geolocation IS NOT available");
  //     return { lat: 0, lon: 0 };
  //   }
  // };

  return {
    // version,
    // gps: coords(),
  };
}
