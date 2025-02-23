const slider = document.querySelector(".members-list");
const members = document.querySelectorAll(".member");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const memberWidth = members[0].offsetWidth + 10; // Member width + gap
const visibleItems = 4;
let currentIndex = visibleItems; // Start from the first real item

// Clone first and last few items for seamless looping
const firstClones = [];
const lastClones = [];

for (let i = 0; i < visibleItems; i++) {
    let cloneFirst = members[i].cloneNode(true);
    let cloneLast = members[members.length - 1 - i].cloneNode(true);
    firstClones.push(cloneFirst);
    lastClones.push(cloneLast);
}

// Add clones to beginning and end
lastClones.reverse().forEach(clone => slider.prepend(clone));
firstClones.forEach(clone => slider.append(clone));

const totalItems = document.querySelectorAll(".member").length;
slider.style.transform = `translateX(-${currentIndex * memberWidth}px)`;

// Move slider function with infinite loop logic
function moveSlider(direction) {
    if (direction === "next") {
        currentIndex++;
        slider.style.transition = "transform 0.4s ease-in-out";
    } else if (direction === "prev") {
        currentIndex--;
        slider.style.transition = "transform 0.4s ease-in-out";
    }

    slider.style.transform = `translateX(-${currentIndex * memberWidth}px)`;

    // Reset position when reaching cloned elements
    setTimeout(() => {
        if (currentIndex >= totalItems - visibleItems) {
            currentIndex = visibleItems;
            slider.style.transition = "none";
            slider.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
        }
        if (currentIndex <= 0) {
            currentIndex = totalItems - (2 * visibleItems);
            slider.style.transition = "none";
            slider.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
        }
    }, 400);
}

// Button click events
nextBtn.addEventListener("click", () => moveSlider("next"));
prevBtn.addEventListener("click", () => moveSlider("prev"));

// Touch swipe support
let startX = 0;
slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) moveSlider("next"); // Swipe left → next
    if (endX - startX > 50) moveSlider("prev"); // Swipe right → prev
});
