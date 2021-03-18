const handleSort = (headers, el) => {
  for (let index = 0; index < headers.length; index++) {
    headers[index].classList.remove("sort");
  }
  el.target.classList.add("sort");
  sortTable(el.target);
};
