/*
TK 4
  create a mini project for your local car dealer store
  create a page to sell 3 types of car that can be customized with 3 types of colors
*/

enum ECarType {
  MAZDA,
  FERRARI,
  FIAT,
}

enum ECarColor {
  RED = "red",
  BLUE = "blue",
  BLACK = "black",
}

const buyCar = (carType: ECarType, carColor: ECarColor): void => {
  console.log(`you chosen ${carType} and in ${carColor} color`);
  for (let [key, value] of Object.entries(ECarColor)) {
    console.log(`key: ${key}, value: ${value}`);
  }
  //   console.log(ECarColor);
};

buyCar(ECarType.FERRARI, ECarColor.BLACK);

let selectedCarColor: string;

window.addEventListener("load", (): void => {
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
  carColorSelect?.addEventListener("change", (ev: any): void => {
    const carImg = document.getElementById("carImg");
    if (!carImg) {
      return;
    }
    let color: string = ev.target.value.toLowerCase();
    carImg.classList.remove(`${selectedCarColor.toLocaleLowerCase()}-color`);
    selectedCarColor = ev.target.value;
    carImg.classList.add(`${color}-color`);
    console.log("color", color);
    // switch (ev.target.value) {
    //   case ECarColor.BLACK:
    //     carColorSelect.classList.add("black-color");
    //     break;
    //   case ECarColor.BLACK:
    //     carColorSelect.classList.add("black-color");
    //     break;
    //   case ECarColor.BLACK:
    //     carColorSelect.classList.add("black-color");
    //     break;
    // }
  });
});
