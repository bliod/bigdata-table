function DisplayList(wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = data.slice(start, end);
  let headers = document.getElementsByTagName("th");
  let column = document.createElement("tr");

  //create table column headers and add to table
  const headerElements = createHeaders(headers);
  column.append(...headerElements);
  wrapper.appendChild(column);

  //create each row items
  paginatedItems.forEach((el, i) => {
    let item_element = document.createElement("tr");
    let thName = document.createElement("td");
    let thId = document.createElement("td");
    let thAge = document.createElement("td");
    let thBalance = document.createElement("td");

    thName.innerText = paginatedItems[i].name;
    thId.innerText = paginatedItems[i]._id;
    thAge.innerText = paginatedItems[i].age;
    thBalance.innerText = paginatedItems[i].balance;

    //add event listener to each row item
    item_element.onclick = (el) => handleItemClick(el, tableElement);
    item_element.append(thId, thName, thAge, thBalance);

    wrapper.appendChild(item_element);
  });
}

function SetupPagination(wrapper, rows_per_page) {
  let backwards = document.getElementById("backwards");
  let forwards = document.getElementById("forwards");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  let btnCount = 1;

  let page_count = Math.ceil(data.length / rows_per_page);

  prev.addEventListener("click", () => {
    btnCount = handlePrevClick(btnCount, wrapper);
    DisplayList(tableElement, rows, current_page);
  });

  next.addEventListener("click", () => {
    btnCount = handleNextClick(btnCount, wrapper, page_count);
    DisplayList(tableElement, rows, current_page);
  });

  forwards.addEventListener(
    "click",
    () => (btnCount = handleForwardsClick(btnCount, wrapper, page_count))
  );
  backwards.addEventListener(
    "click",
    () => (btnCount = handleBackwardsClick(btnCount, wrapper, page_count))
  );

  //initial load
  for (let i = btnCount; i < btnCount + 10; i++) {
    let btn = PaginationButton(i, data);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page) {
  let button = document.createElement("button");
  button.innerText = page;
  button.id = `btn${page}`;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    let current_btn = document.querySelectorAll(".pagenumbers button");
    console.log(current_btn);
    for (let index = 0; index < current_btn.length; index++) {
      current_btn[index].classList.remove("active");
    }
    button.classList.add("active");
    current_page = page;
    DisplayList(tableElement, rows, current_page);
  });
  return button;
}

function sortTable(column) {
  let table, rows, switching, i, x, y, shouldSwitch;
  let isSorted = column.dataset.sorted;

  table = document.getElementById("table");
  switching = true;
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    // console.log(rows);
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      // console.log(i);
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[column.dataset.id];
      y = rows[i + 1].getElementsByTagName("TD")[column.dataset.id];
      //check if the two rows should switch place:
      if (isSorted === "true") {
        if (column.dataset.id == 0 || column.dataset.id == 2) {
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (column.dataset.id == 0 || column.dataset.id == 2) {
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  if (isSorted === "true") {
    column.dataset.sorted = "false";
  } else {
    column.dataset.sorted = "true";
  }
}
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
