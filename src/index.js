const resume_btn1 = document.querySelector("#resume-button-1");
const resume_btn2 = document.querySelector("#resume-button-2");

resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1o5NmeaszbWUO70uMHt1EP3sQuF0iaTuQ/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1o5NmeaszbWUO70uMHt1EP3sQuF0iaTuQ";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1o5NmeaszbWUO70uMHt1EP3sQuF0iaTuQ/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1o5NmeaszbWUO70uMHt1EP3sQuF0iaTuQ";
});