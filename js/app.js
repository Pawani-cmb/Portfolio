console.log("Portfolio JavaScript Connected");

document.getElementById("currentYear").textContent = new Date().getFullYear();

const projectsSection = document.querySelector(".projects-list");
console.log(projectsSection);

console.log(projectsSection.textContent);

console.log(projectsSection.innerHTML);

const projectsCards = document.querySelectorAll(".project-item");

document.getElementById("projectCount").textContent="Total Projects  : " +projectsCards.length;

projectsCards.forEach(function (card) {

    card.addEventListener("click", function () {
        console.log(card.textContent);
    });

});
