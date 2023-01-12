// Async Js Programming
// Callback, Promises, Async & Await.

// const data = [
//     {name:'Akhib', profession:'Software Developer'},
//     {name:'Awais', profession:'Software Developer'},
// ];

// const getData = () => {
//     setTimeout(()=>{
//         data.forEach((item, index)=>{
//          console.log(item.name,item.profession);
//         })
//     },1000)
// }

// const createdata = (newData,callback) => {
//     setTimeout(()=>{
//      data.push(newData)
//      callback()
//     },2000)
// }
// createdata({name:'Asif', profession: 'Software Developer'},getData)

const data = [
  { name: "Akhib", profession: "Software Developer" },
  { name: "Awais", profession: "Software Developer" },
];

const getData = () => {
  setTimeout(() => {
    data.forEach((item, index) => {
      console.log(item.name, item.profession);
    });
  }, 1000);
};

const createdata = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("please enter valid name and profession...");
      }
    }, 2000);
  });
};
// createdata({ name: "Asif", profession: "Software Developer" })
//   .then(getData)
//   .catch((err) => console.log(err));


const start = async () => {
   await createdata({ name: "Asif", profession: "Software Developer" })
   .then(getData)
  .catch((err) => console.log(err));
}
start()