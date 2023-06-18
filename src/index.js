const resume_btn1 = document.querySelector("#resume-button-1");
const resume_btn2 = document.querySelector("#resume-button-2");

resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1yz24CNYgOW3KnvhAzCNm2i4d7mkrf9Du/view?usp=drive_link"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1yz24CNYgOW3KnvhAzCNm2i4d7mkrf9Du";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1yz24CNYgOW3KnvhAzCNm2i4d7mkrf9Du/view?usp=drive_link"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=1yz24CNYgOW3KnvhAzCNm2i4d7mkrf9Du";
});