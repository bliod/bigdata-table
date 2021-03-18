const createHeaders = (headers) => {
  let columnId = document.createElement("th");
  columnId.innerText = "ID";
  columnId.dataset.id = 0;
  columnId.onclick = (el) => handleSort(headers, el);

  let columnName = document.createElement("th");
  columnName.innerText = "Name";
  columnName.dataset.id = 1;
  columnName.onclick = (el) => handleSort(headers, el);

  let columnAge = document.createElement("th");
  columnAge.innerText = "Age";
  columnAge.dataset.id = 2;
  columnAge.onclick = (el) => handleSort(headers, el);

  let columnBalance = document.createElement("th");
  columnBalance.innerText = "Balance";
  columnBalance.dataset.id = 3;
  columnBalance.onclick = (el) => handleSort(headers, el);
  return [columnId, columnName, columnAge, columnBalance];
};
