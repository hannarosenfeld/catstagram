// Your code here
// random img https://api.thecatapi.com/v1/images/search
window.onload = async () => {
    const app = document.getElementById("app");
    const url = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await url.json();
    const data = result[0];

    // set img height/ width

    console.log("result: ",data)
}


// const getData = async () => {
//     const app = document.getElementById("app");
//     const url = await fetch("https://api.thecatapi.com/v1/images/search");
//     const result = await url.json();
//     const data = result[0];

//     // set img height/ width

//     console.log("result: ",data)
// }
