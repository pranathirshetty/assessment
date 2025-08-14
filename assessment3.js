const h=document.getElementById("image");
for(let i=5;i<15;i++)
{ 
let a= new Image(350,325);
a.src=`https://via.assets.so/movie.png?id=${i}&q=95&w=360&h=360&fit=fill`;
a.alt="Image not found";
a.id=i;
a.style.border="2px solid black";
a.style.padding="10px 10px";
h.appendChild(a);
}

const background = document.getElementsByClassName("colour");
background[0].addEventListener("click", () => {
  // document.body.style.backgroundColor === "white"?"lightblue":"white";
  document.body.classList.toggle("students");
});


/*for(let i=5;i<15;i++)
{ 
    let a= new Image(300,300);
a.src="https://via.assets.so/movie.png?id=5&q=95&w=360&h=360&fit=fill";
a.alt="Image not found";
a.id=i;
a.style.border="2px solid black";
a.style.padding="10px 10px";
document.body.appendChild(a);
}*/