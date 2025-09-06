// Lời chúc
const wishes = [
  "🌸 Chúc bạn tuổi mới tràn đầy yêu thương!",
  "💖 Luôn xinh đẹp và hạnh phúc!",
  "🎂 Niềm vui luôn ngập tràn trong tim!",
  "✨ Mọi ước mơ đều thành hiện thực!",
  "🌈 Thành công và may mắn nhé!",
  "🎂 Sinh nhật zui zẻ",
];

// Tạo bong bóng bay
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.innerText = wishes[Math.floor(Math.random() * wishes.length)];

  balloon.style.left = Math.random() * 80 + "vw";
  balloon.style.background = `rgba(255, ${150 + Math.random() * 100}, ${
    200 + Math.random() * 50
  }, 0.8)`;

  document.getElementById("balloons").appendChild(balloon);
  setTimeout(() => balloon.remove(), 8000);
}

if (document.getElementById("balloons")) {
  setInterval(createBalloon, 2000);
}
