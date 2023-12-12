// axios returns response object - data, status, statusText, headers, config
// asios can throw error

const { default: axios } = require("axios");

// "post" for create a resourse
// "put" for update a resourse
// "patch" for patching a resourse
// "delete" for delete a resourse
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    userId: 101,
    id: 101,
    title: "hello",
    body: "it's me Abdulo Alim",
  })
  //   .then((res) => console.log(res.data))
  .catch((e) => console.log(e.message));

