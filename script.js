const number = document.querySelectorAll("#number");
const pageNumber = document.querySelectorAll("#page-number");

for (let i = 1; i < number.length; i++) {
  number[i].textContent = i + 1;
}

for (let i = 1; i < pageNumber.length; i++) {
    pageNumber[i].textContent = i + 1;
  }