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

const handlePrevClick = (btnCount, wrapper) => {
  if (current_page > 1) {
    let removeCurrent = document.getElementById(`btn${current_page}`);
    removeCurrent.classList.remove("active");
    current_page -= 1;

    if (current_page < btnCount) {
      btnCount -= 10;
      wrapper.innerHTML = "";
      if (btnCount < 0) {
        btnCount = 1;
      }
      for (let i = btnCount; i < btnCount + 10; i++) {
        let btn = PaginationButton(i, data);
        wrapper.appendChild(btn);
      }
    }
    let addPrev = document.getElementById(`btn${current_page}`);
    addPrev.classList.add("active");
  }
  return btnCount;
};

const handleNextClick = (btnCount, wrapper, page_count) => {
  if (current_page < page_count) {
    let removeCurrent = document.getElementById(`btn${current_page}`);
    removeCurrent.classList.remove("active");

    current_page += 1;

    if (current_page > btnCount + 9) {
      btnCount += 10;
      wrapper.innerHTML = "";
      for (let i = btnCount; i < btnCount + 10; i++) {
        if (i <= page_count) {
          //Append only till page count
          let btn = PaginationButton(i, data);
          wrapper.appendChild(btn);
        }
      }
    }

    let addNext = document.getElementById(`btn${current_page}`);
    addNext.classList.add("active");
  }
  return btnCount;
};

const handleForwardsClick = (btnCount, wrapper, page_count) => {
  if (btnCount + 10 > page_count) {
    return;
  }
  btnCount += 10;
  wrapper.innerHTML = "";
  for (let i = btnCount; i < btnCount + 10; i++) {
    if (i <= page_count) {
      //Append only till page count
      let btn = PaginationButton(i, data);
      wrapper.appendChild(btn);
    }
  }
  return btnCount;
};

const handleBackwardsClick = (btnCount, wrapper, page_count) => {
  btnCount -= 10;
  wrapper.innerHTML = "";
  if (btnCount < 0) {
    btnCount = 1;
  }
  for (let i = btnCount; i < btnCount + 10; i++) {
    let btn = PaginationButton(i, data);
    wrapper.appendChild(btn);
  }
  return btnCount;
};
