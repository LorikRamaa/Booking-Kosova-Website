function navbarToggle() {
  document
    .getElementById("first_nav_links")
    .classList.toggle("first_nav_active");
  document.getElementById("menu_toggler").classList.toggle("first_nav_active");
}

function categoryToggle() {
  document
    .getElementById("second_nav_links")
    .classList.toggle("second_nav_active");
  document.getElementById("category").classList.toggle("second_nav_active");
}

function notification() {
  document
    .getElementById("dropdown_notification")
    .classList.toggle("dropdown_notification_active");
  document
    .getElementById("dropdown_profile_button")
    .classList.remove("dropdown_profile_button_active");
}
function profile() {
  document
    .getElementById("dropdown_profile_button")
    .classList.toggle("dropdown_profile_button_active");
  document
    .getElementById("dropdown_notification")
    .classList.remove("dropdown_notification_active");
}

function profileMenuMobile() {
  document
    .getElementById("profile_mobile_menu")
    .classList.toggle("profile_mobile_menu_active");
  document
    .getElementById("menu_toggler_profile")
    .classList.toggle("profile_mobile_menu_active");
  document
    .getElementById("body_overlay")
    .classList.toggle("body_overlay_active");
}

// booking
function upComingBooking() {
  document
    .getElementById("completed_booking_div")
    .classList.add("booking_show");
  document
    .getElementById("completed_booking_div")
    .classList.remove("booking_hide");
  document.getElementById("canceled_booking_div").classList.add("booking_hide");
  document
    .getElementById("canceled_booking_div")
    .classList.remove("booking_show");
  document
    .getElementById("completed_booking_third_div")
    .classList.add("booking_hide");
  document
    .getElementById("completed_booking_third_div")
    .classList.remove("booking_show");
  document.getElementById("first_title").classList.add("booking_active_class");
  document
    .getElementById("second_title")
    .classList.remove("booking_active_class");
  document
    .getElementById("third_title")
    .classList.remove("booking_active_class");
}

function canceledBookings() {
  document
    .getElementById("completed_booking_div")
    .classList.remove("booking_show");
  document
    .getElementById("completed_booking_div")
    .classList.add("booking_hide");
  document
    .getElementById("canceled_booking_div")
    .classList.remove("booking_hide");
  document.getElementById("canceled_booking_div").classList.add("booking_show");
  document
    .getElementById("completed_booking_third_div")
    .classList.add("booking_hide");
  document
    .getElementById("completed_booking_third_div")
    .classList.remove("booking_show");
  document
    .getElementById("first_title")
    .classList.remove("booking_active_class");
  document.getElementById("second_title").classList.add("booking_active_class");
  document
    .getElementById("third_title")
    .classList.remove("booking_active_class");
}

function completedBookings() {
  document
    .getElementById("completed_booking_div")
    .classList.remove("booking_show");
  document
    .getElementById("completed_booking_div")
    .classList.add("booking_hide");
  document.getElementById("canceled_booking_div").classList.add("booking_hide");
  document
    .getElementById("canceled_booking_div")
    .classList.remove("booking_show");
  document
    .getElementById("completed_booking_third_div")
    .classList.remove("booking_hide");
  document
    .getElementById("completed_booking_third_div")
    .classList.add("booking_show");
  document
    .getElementById("first_title")
    .classList.remove("booking_active_class");
  document
    .getElementById("second_title")
    .classList.remove("booking_active_class");
  document.getElementById("third_title").classList.add("booking_active_class");
}

// password
let pwdInput = document.getElementById("password-icon");
let showIcon = document.getElementById("eye");

function showPwd() {
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
    showIcon.classList.remove("fa-eye-slash");
    showIcon.classList.add("fa-eye");
  } else {
    pwdInput.type = "password";
    showIcon.classList.remove("fa-eye");
    showIcon.classList.add("fa-eye-slash");
  }
}
// responsive nav bar

// let dropdownParent = document.querySelector("#dropdown");
// let dropdownMenu = document.querySelector(".dropdown_menu");
// let subMenu = document.querySelector("submenu");
// let submenuMenu = document.querySelector("submenu_menu");
// let dropdown_more = document.querySelector(".dropdown_more");
// let dropdown_sec = document.querySelector(".dropdown_sec");

// dropdownParent.addEventListener("click", dropdownMenuFn);
// function dropdownMenuFn() {
//   dropdownMenu.classList.toggle("dropdownShow_mobile");
// }

// // dropdown_more.addEventListener("click", dropdown_moreFn);
// function dropdown_moreFn() {
//   dropdown_sec.classList.toogle("dropdownShow_mobile_2");
// }

// // subMenu.addEventListener("click", subMenuFn);
// // function subMenuFn() {
// //   submenuMenu.classList.toggle("dropdownShow_mobile_3");
// // }

// profile settings

let saveChanges = document.querySelector(".save_changes");
let fullnameInput = document.querySelector("#name");
let fullnameTitle = document.querySelector("#fullnameTitle");
let fullnameTitle2 = document.querySelector(".fullnameTitle");

localStorage.setItem("name", "Lorik Rama");

fullnameTitle.innerHTML = localStorage.getItem("name");
fullnameTitle2.innerHTML = localStorage.getItem("name");
fullnameInput.value = localStorage.getItem("name");
saveChanges.addEventListener("click", insertName);

function insertName(e) {
  localStorage.setItem("name", fullnameInput.value);
  fullnameTitle.innerHTML = localStorage.getItem("name");
  fullnameTitle2.innerHTML = localStorage.getItem("name");
  alert("Your name have been changed ");
}
// email

let saveEmail = document.querySelector("#saveEmail");
let emailInput = document.querySelector("#enteremail");
let emailTitle = document.querySelector(".profile_email");
let emailTitle2 = document.querySelector(".helloemail");

localStorage.setItem("email", "lorikrama07@gmail.com");

emailTitle.innerHTML = localStorage.getItem("email");
emailTitle2.innerHTML = localStorage.getItem("email");
// emailInput.value = localStorage.getItem("email");
saveEmail.addEventListener("click", insertEmail);

function insertEmail(e) {
  localStorage.setItem("email", emailInput.value);
  emailTitle2.innerHTML = localStorage.getItem("email");
  emailTitle.innerHTML = localStorage.getItem("email");
  alert("Your email have been changed ");
}

// delete card
let dots = document.querySelector("#dot");
// let drop = document.querySelector(".drop_delete");

function deleteDots() {
  document.querySelector(".drop_delete").classList.toggle("showDelete");
  console.log("asdwad");
}

function deleteDotsTwo() {
  document.querySelector(".drop_delete_two").classList.toggle("showDelete");
  console.log("asdwad");
}

// delete card

// let deleteBtn = document.querySelector("#drop_delete_two p");
// let cardTwo = document.querySelector("#card_two");

// deleteBtn.addEventListener("click", deleteCard);

// function deleteCard(e) {
//   if (e.target.parentElement.classList.contains("drop_delete_two")) {
//     e.target.parentElement.parentElement.parentElement.parentElement.remove();
//   } else {
//     console.log("spobon");
//   }
// }

// create card

// let cardContainer = document.querySelector(".card_wrap");
// let addBtn = document.querySelector("#addCard");

// addBtn.addEventListener("click", createCard);

// function createCard(e) {
//   let divCard = document.createElement("div");
//   divCard.className = "card";
//   let divCardUp = document.createElement("div");
//   divCardUp.className = "card_up";
//   let img = document.createElement("img");
//   img.src = "./assets/images/visa.svg";

//   console.log(divCard);
// }
// image change

let image = document.querySelector(".avatar_info");
let image2 = document.querySelector(".avatar");
let changeBtn = document.querySelector("#upload_image");
let image3 = document.querySelector("#profile_p");
// image.src = localStorage.getItem("pfp");
// image2.src = localStorage.getItem("pfp");
changeBtn.addEventListener("change", changeBtnFn);

function changeBtnFn() {
  let changedImg = (image.src = URL.createObjectURL(changeBtn.files[0]));

  localStorage.setItem("pfp", changedImg);

  image.src = localStorage.getItem("pfp");
  image2.src = localStorage.getItem("pfp");
  image3.src = localStorage.getItem("pfp");
}
function search() {
  document
    .getElementById("search_dropdown")
    .classList.toggle("search_dropdown_active");
}
