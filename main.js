const accd = document.getElementsByClassName("accordion-icon");

let i;
for (i = 0; i < accd.length; i++) {
    accd[i].addEventListener('click', function () {
        this.classList.toggle('active')
// console.log(this)

      })  

}
// console.log(accd)
