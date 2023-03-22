"use strict";
var ECarType;
(function (ECarType) {
    ECarType[ECarType["MAZDA"] = 0] = "MAZDA";
    ECarType[ECarType["FERRARI"] = 1] = "FERRARI";
    ECarType[ECarType["FIAT"] = 2] = "FIAT";
})(ECarType || (ECarType = {}));
var ECarColor;
(function (ECarColor) {
    ECarColor["RED"] = "red";
    ECarColor["BLUE"] = "blue";
    ECarColor["BLACK"] = "black";
})(ECarColor || (ECarColor = {}));
const buyCar = (carType, carColor) => {
    console.log(`you chosen ${carType} and in ${carColor} color`);
    for (let [key, value] of Object.entries(ECarColor)) {
        console.log(`key: ${key}, value: ${value}`);
    }
};
buyCar(ECarType.FERRARI, ECarColor.BLACK);
let selectedCarColor;
window.addEventListener("load", () => {
    const carColorSelect = document.getElementById("carColorSelect");
    if (carColorSelect) {
        let options = "";
        for (let [key, value] of Object.entries(ECarColor)) {
            if (!selectedCarColor) {
                selectedCarColor = key;
            }
            options += `<option value="${key}">${key}</option>`;
        }
        carColorSelect.innerHTML = options;
    }
    carColorSelect?.addEventListener("change", (ev) => {
        const carImg = document.getElementById("carImg");
        if (!carImg) {
            return;
        }
        let color = ev.target.value.toLowerCase();
        carImg.classList.remove(`${selectedCarColor.toLocaleLowerCase()}-color`);
        selectedCarColor = ev.target.value;
        carImg.classList.add(`${color}-color`);
        console.log("color", color);
    });
});
