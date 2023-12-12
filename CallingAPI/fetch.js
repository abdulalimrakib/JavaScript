fetch("https://jsonplaceholder.typicode.com/posts", {
  // method = "POST" for create a resourse
  // method = "PUT" for update a resourse
  // method = "PATCH" for patching a resourse
  // method = "DELETE" for delete a resourse
  method: "POST",
  body: JSON.stringify({
    id: 101,
    title: "hello",
    body: "It's me Abdul Alim",
    userId: 101,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => {
    if (!res.ok) {
      throw Error("Something wrong !! ");
    }
    return res.json();
  })
  //.then((res) => console.log(res))
  .catch((e) => {
    console.log(e);
  });

// async - await fetching

const fetchRequest = async (url, resourse) => {
  // we make a function for reusability
  const res = await fetch(url, resourse);
  const data = await res.json();
  return data;
};

const getData = (url, resourse) => {
  fetchRequest(url, resourse).then((res) => console.log(res));
};

getData("https://jsonplaceholder.typicode.com/posts", {
  // method = "POST" for create a resourse
  // method = "PUT" for update a resourse
  // method = "PATCH" for patching a resourse
  // method = "DELETE" for delete a resourse
  method: "POST",
  body: JSON.stringify({
    id: 101,
    title: "hello",
    body: "It's me Abdul Alim",
    userId: 101,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
