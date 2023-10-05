const breedsJSX = document.querySelector("#dogs");
const divDescription = document.querySelector(".divDescription");
breedsJSX.addEventListener("change", async (e) => {
  //   console.log(breedsJSX.value);
  if (breedsJSX.value !== "none") {
    const response = await fetch(`/breeds/${breedsJSX.value}`, { method: "POST" });
    const result = await response.json();
    //   console.log(result);
    //   console.log(result.serch);
    divDescription.innerHTML = result.serch;
  }else{
    divDescription.innerHTML = ""
  }
});
