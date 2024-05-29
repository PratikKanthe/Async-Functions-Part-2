//Async Fuction
console.log("These are Promises");

// let prom1 = new Promise();

const callback = (args) => {
  console.log("This is Callback function");
};

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Unable to load promised functions");
  } else {
    setTimeout(() => {
      console.log("Promised functions are loaded successfully");
      resolve("Resolved");
    }, 3000);
  }
});

prom1
  .then((a) => {
    console.log(a);
  })
  .catch((error) => {
    console.log(error);
  });

const loadscript = (src, callback) => {
  let sc = document.createElement("script");
  sc.onload = callback("hello");
  sc.src = src;
  document.head.append(sc);
};

loadscript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

//Practice
let prom2 = new Promise((resolve, reject) => {
  console.log("promise2");
  reject(console.log("Rejected"));

  resolve(console.log("Resolved Promise 2"));
});

Promise.all([prom1, prom2]);
