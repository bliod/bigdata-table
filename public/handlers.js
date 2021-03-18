const handleSort = (headers, el) => {
  for (let index = 0; index < headers.length; index++) {
    headers[index].classList.remove("sort");
  }
  el.target.classList.add("sort");
  sortTable(el.target);
};

const handleItemClick = (el, listElement) => {
  for (let index = 0; index < listElement.rows.length; index++) {
    listElement.rows[index].classList.remove("active");
  }
  el.path[1].classList.add("active");
  selection.innerText = el.target.innerText;
};
