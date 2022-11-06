import {countryListWithCode} from "./countries.js";

countryListWithCode.map((item,i) => {
    let country = `My Country Name and Code: ${item.name} (${item.code})`;
    console.log(country);
});