const inpBox = document.querySelector("input");
const btn = document.querySelector("button");
const imgContainer = document.querySelector('.imgContainer');

btn.addEventListener("click", () => {
  let inpValue = inpBox.value;
  let imgUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inpValue;
  console.log(imgUrl);

  if(inpValue != '') {
    imgContainer.classList.add("showImage");
    imgContainer.style.backgroundImage = `url('${imgUrl}')`;
  }
})
