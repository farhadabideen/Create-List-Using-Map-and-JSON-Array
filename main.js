import {countryListWithCode} from "./countries.js";

countryListWithCode.map((item,index) => {
    let country = `My Country Code and Name: (${item.code}) ${item.name} - ${index.valueOf()} `;
    console.log(country);
});