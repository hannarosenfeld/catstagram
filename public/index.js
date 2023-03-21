// Your code here
// random img https://api.thecatapi.com/v1/images/search
window.onload = async () => {
  const app = document.getElementById("app");
  const url = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await url.json();
  const data = result[0];

  const img = document.createElement('img');
  const h1 = document.createElement('h1');


  h1.innerText = 'Kitten Pic';
  img.setAttribute('src', data.url);

  app.style.display = 'flex';
  app.style.flexDirection = 'column';
  app.style.alignItems = 'center';

  app.appendChild(h1);
  app.appendChild(img);
  // set img height/ width

  // console.log("result: ",data)

}


// const getData = async () => {
//     const app = document.getElementById("app");
//     const url = await fetch("https://api.thecatapi.com/v1/images/search");
//     const result = await url.json();
//     const data = result[0];

//     // set img height/ width

//     console.log("result: ",data)
// }
