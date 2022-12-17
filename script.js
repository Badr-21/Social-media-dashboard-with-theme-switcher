const body = document.querySelector("body");
const toggle = document.querySelector("[type='checkbox']");
const header = document.querySelector(".header");
const switchBackGround = document.querySelector(".switch");
const slider = document.querySelector(".slider");
const h1 = document.querySelector(".dashboard-total-followers h1");
const container = document.querySelector(".container");
const h2 = document.querySelector(" h2");
const totalBackGround = document.querySelectorAll(".total");
const todayBackGround = document.querySelectorAll(".today");
const h3 = document.querySelectorAll("h3");
const span = document.querySelectorAll(".today-overview span");

toggle.addEventListener("click", (e) => {
    if(e.target.checked) {
        body.classList.remove("dark");
        header.classList.remove("dark");
        switchBackGround.classList.remove("dark");
        h1.classList.remove("dark");
        slider.classList.remove("dark");
        container.classList.remove("dark");
        h2.classList.remove("dark");
        totalBackGround.forEach(ele => {
            ele.classList.remove("dark");
        });
        todayBackGround.forEach(ele => {
            ele.classList.remove("dark");
        });
        h3.forEach(ele => {
            ele.classList.remove("dark");
        });
        span.forEach(ele => {
            ele.classList.remove("dark");
        });
    }else {
        body.classList.add("dark");
        header.classList.add("dark");
        switchBackGround.classList.add("dark");
        h1.classList.add("dark");
        slider.classList.add("dark");
        container.classList.add("dark");
        h2.classList.add("dark");
        totalBackGround.forEach(ele => {
            ele.classList.add("dark");
        });
        todayBackGround.forEach(ele => {
            ele.classList.add("dark");
        });
        h3.forEach(ele => {
            ele.classList.add("dark");
        });
        span.forEach(ele => {
            ele.classList.add("dark");
        });
    }
})
console.log(toggle)