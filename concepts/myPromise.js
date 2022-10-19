// learn Promise

const one = () => {
  return "111111111";
};
const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("222222222");
    }, 3000);
  });
};

const three = () => {
  console.log("hello promise testing");
  return "33333333";
};
const myPromise = async () => {
  let a = one();
  console.log(a);

  let b = await two();
  console.log(b);

  let c = three();
  console.log(c);
};
myPromise();
