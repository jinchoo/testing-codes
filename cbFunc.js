const fetchData = function () {
  return new Promise((resolve, reject) => {
    reject();
  });
};

fetchData()
  .then(() => {
    console.log("Success 1");
  })
  .catch(() => {
    console.log("Error 1");
  })
  .then(() => {
    console.log("Success 2");
  });
