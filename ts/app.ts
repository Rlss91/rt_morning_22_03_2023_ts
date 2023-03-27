const casting = () => {
  const inputTxt = document.getElementById("txt") as HTMLInputElement;

  if (!inputTxt) return;

  inputTxt.value = "";
};
