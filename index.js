const getBtn = document.querySelector("#getBtn");
const clearBtn = document.querySelector("#clearBtn");
const tableContent = document.querySelector(".table-content");

const getData = async () => {
  //   const { data } = await axios(`https://jsonplaceholder.typicode.com/todos`);
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => res.json())
    .then((data) => data);

  let tableBodyData = ``;
  for (let idx = 0; data.length > idx; idx++) {
    tableBodyData += `
          <tr>
              <td>${data[idx].id}</td>
              <td>${data[idx].title}</td>
              <td>${data[idx].completed}</td>
              <td>${data[idx].userId}</td>
          <tr>
        `;
  }

  const tableHtml = `
      <table border="collapsed">
          <tr>
              <th> ID </th>
              <th> Title </th>
              <th> Completed </th>
              <th> User ID </th>
          </tr>
          ${tableBodyData}
      </table>
    `;

  tableContent.innerHTML = tableHtml;
};

const clearData = () => {
  tableContent.innerHTML = "";
};
