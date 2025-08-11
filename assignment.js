 const input =document.getElementById("enter");
    const btn=document.getElementsByClassName("try")
    const para=document.getElementById("data");
    btn[0].addEventListener("click",()=>
{
    console.log(input.value);
  const li=document.createElement("li")
    li.textContent=input.value;
    data.appendChild(li);
   input.value=""
});

const a=document.getElementById("call");
const b = async () => {
        const c = await fetch("https://jsonplaceholder.typicode.com/users");
        if (c.ok) {
          const d = await c.json();
          d.forEach((el) => {
            const row = document.createElement("tr");
              const id = document.createElement("td");
            id.textContent = el.id;
            const name = document.createElement("td");
            name.textContent = el.name;
             const email = document.createElement("td");
            email.textContent = el.email;
            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(email);
            a.appendChild(row);
          });
        }
      };
      b();

  const background = document.getElementsByClassName("colour");
  background[0].addEventListener("click", () => {
    // document.body.style.backgroundColor === "white"?"lightblue":"white";
    document.body.classList.toggle("students")
});