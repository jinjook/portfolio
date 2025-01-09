// 이미지 배열
const images = [
  "resources/일정추가.jpg",
  "resources/calendar.gif", // 이미지 추가 필요
];

let currentIndex = 0;

// 요소 선택
const modal = document.getElementById("imageModal");
const openButton = document.querySelector(".cta");
const closeButton = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

// 모달 열기
openButton.addEventListener("click", () => {
  modal.style.display = "flex";
  modalImage.src = images[currentIndex]; // 현재 이미지 표시
});

// 모달 닫기
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// 이전 이미지
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex];
});

// 다음 이미지
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex];
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
