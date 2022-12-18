const firstTableNumber = document.querySelectorAll("#first-number");
const secondTableNumber = document.querySelectorAll("#second-number");
const pageNumber = document.querySelectorAll("#page-number");

for (let i = 1; i < firstTableNumber.length; i++) {
  firstTableNumber[i].textContent = i + 1;
}
for (let i = 1; i < secondTableNumber.length; i++) {
  secondTableNumber[i].textContent = i + 1;
}

for (let i = 1; i < pageNumber.length; i++) {
  pageNumber[i].textContent = i + 1;
}
