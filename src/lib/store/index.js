import { browser } from '$app/environment';
import { writable } from "svelte/store";



let locationStore = JSON.parse(
  browser && localStorage.getItem("savedLocations")
) || [];

let orderStore = JSON.parse(browser && localStorage.getItem("sortOrder")) || [];

export const savedLocations = writable(locationStore);
savedLocations.subscribe(
  (val) =>
    browser && localStorage.setItem("savedLocations", JSON.stringify(val))
);

export const sortOrder = writable(orderStore);
sortOrder.subscribe(
  (val) => browser && localStorage.setItem("sortOrder", JSON.stringify(val))
);






let todoStore = JSON.parse(browser && localStorage.getItem("todoStore")) || {
  list: [],
  order: []
};

export const store = writable(todoStore);
store.subscribe((val) => {
  browser && localStorage.setItem("todoStore", JSON.stringify(val))
});