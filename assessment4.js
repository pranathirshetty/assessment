const students = [
{ name: "Amit Sharma", age: 19, course: "B.Tech" },
{ name: "Priya Verma", age: 22, course: "MCA" },
{ name: "Rohit Gupta", age: 20, course: "BCA" },
{ name: "Neha Singh", age: 23, course: "B.Sc" },
{ name: "Karan Patel", age: 18, course: "B.Com" }
];

function renderTable(data) {
  const studentContainer = document.getElementById("student-container");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Name", "Age", "Course"].forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach(hotel => {
    const row = document.createElement("tr");
    Object.values(hotel).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  studentContainer.appendChild(table);
};
renderTable(students);

const background = document.getElementsByClassName("backgroundcolor");
background[0].addEventListener("click", () => {
  document.body.classList.toggle("students");
});


document.getElementById("hide").addEventListener("click", () => {
const a=document.getElementById("student-container");
a.style.display=(a.style.display==="none")?"block":"none";
 
});


document.getElementById("age").addEventListener("click", () => {
  const g = students.filter((el) => el.age >= 20);
  const studentContainer = document.getElementById("student-container");
  studentContainer.innerHTML = "";
  renderTable(g);
});

document.getElementById("reset").addEventListener("click", () => {
  const a = document.getElementById("student-container");
  a.style.display === "none";
  a.innerHTML = ""; 
  renderTable(students);
});