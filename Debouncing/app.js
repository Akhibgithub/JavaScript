let count = 0;

function getData() {
  console.log(`fetcing data ${count++}`);
}
const myDebounce = (call, t) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, t);
  };
};

const BetterFunction = myDebounce(getData, 1000);
