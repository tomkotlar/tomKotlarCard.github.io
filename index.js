

function myFunction() {
  const myLoader = setTimeout(showPage, 2500);
}

function showPage() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector("#myDiv").style.display = "block";
}

const check = document.getElementById('checkbox');

check.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

