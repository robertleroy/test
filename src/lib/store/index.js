import { browser } from '$app/environment';
import { writable } from "svelte/store";

let locationStore = JSON.parse(
  browser && localStorage.getItem("savedLocations")
) || [
  {
    id: "1",
    city: "Avon",
    region: "CO",
    countryCode: "US",
    lat: 39.635112,
    lon: -106.518868,
  },
  {
    id: "2",
    city: "Rancho Mirage",
    region: "CA",
    countryCode: "US",
    lat: 33.766656,
    lon: -116.417691,
  },
  {
    id: "3",
    city: "Franklin",
    region: "NJ",
    countryCode: "US",
    lat: 40.504123,
    lon: -74.516532,
  },
];

let orderStore = JSON.parse(browser && localStorage.getItem("sortOrder")) || [
  "3",
  "2",
  "1",
];

export const savedLocations = writable(locationStore);
savedLocations.subscribe(
  (val) =>
    browser && localStorage.setItem("savedLocations", JSON.stringify(val))
);

export const sortOrder = writable(orderStore);
sortOrder.subscribe(
  (val) => browser && localStorage.setItem("sortOrder", JSON.stringify(val))
);

// let options = JSON.parse(browser && localStorage
//   .getItem('toppings')) || [
// { topping: 'Pepperoni', added: false },
// { topping: 'Sausage', added: false },
// { topping: 'Mushrooms', added: false },
// ];
// export const toppings = writable(browser && options);
// toppings.subscribe((val) => browser && localStorage
//   .setItem('toppings', JSON.stringify(val)));
