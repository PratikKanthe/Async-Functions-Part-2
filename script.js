//Async Fuction Reff : https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/tree/main/Video%2075
console.log("Thise are Promises");

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
  document.head.append(sc);
};

loadscript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
