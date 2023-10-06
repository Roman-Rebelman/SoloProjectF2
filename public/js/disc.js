const breedsJSX = document.querySelector("#dogs");
const divDescription = document.querySelector(".divDescription");
const btnPhoto = document.querySelector(".btnPhoto");
const images = document.querySelector(".image");

breedsJSX.addEventListener("change", async (e) => {
  //   console.log(breedsJSX.value);
  if (breedsJSX.value !== "none") {
    const response = await fetch(`/breeds/${breedsJSX.value}`, {
      method: "POST",
    });
    const result = await response.json();
    //   console.log(result);
    //   console.log(result.serch);
    divDescription.innerHTML = result.serch;
    btnPhoto.addEventListener("click", async (e) => {
      const responseBtn = await fetch(
        `https://dog.ceo/api/breed/${breedsJSX.value.toLowerCase()}/images/random`
      );
      const resultbtn = await responseBtn.json();
      images.src = resultbtn.message;
    });
  } else {
    divDescription.innerHTML = "";
  }
});
