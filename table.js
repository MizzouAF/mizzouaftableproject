const response = {
   "programofstudy": [
      {
         "crsnmbr": "IS_LT 9474",
         "crstitle": "Front End Analysis",
         "type": "Core",
         "term": "Fall 2021",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 7355",
         "crstitle": "Web Design & Development",
         "type": "Development",
         "term": "Summer 2022",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 7361",
         "crstitle": "Introduction to Digital Media",
         "type": "Development",
         "term": "Summer 2022",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 7384",
         "crstitle": "Designing Games for Learning",
         "type": "Design",
         "term": "Fall 2022",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 9471",
         "crstitle": "Instructional Systems Design",
         "type": "Core",
         "term": "Fall 2022",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 9485",
         "crstitle": "Designing Online Learning",
         "type": "Design",
         "term": "Spring 2023",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 9486",
         "crstitle": "Advanced Designing Games for Learning",
         "type": "Design",
         "term": "Spring 2023",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 7383",
         "crstitle": "Rapid Development Tools for Online Learning",
         "type": "Development",
         "term": "Summer 2023",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 9470",
         "crstitle": "Computer Science for Educators",
         "type": "Elective",
         "term": "Summer 2023",
         "units": 3,
      },
      {
         "crsnmbr": "IS_LT 9450",
         "crstitle": "Research Methods in Information Science and Learning Technology",
         "type": "Core",
         "term": "Fall 2023",
         "units": 3,
      }
   ]
}

const tableContent = document.getElementById("table-content")
const tableButtons = document.querySelectorAll("th button");

const createRow = (obj) => {
  const row = document.createElement("tr");
  const objKeys = Object.keys(obj);
  objKeys.map((key) => {
    const cell = document.createElement("td");
    cell.setAttribute("data-attr", key);
    cell.innerHTML = obj[key];
    row.appendChild(cell);
  });
  return row;
};

const getTableContent = (data) => {
  data.map((obj) => {
    const row = createRow(obj);
    tableContent.appendChild(row);
  });
};

const sortData = (data, param, direction = "asc") => {
  tableContent.innerHTML = '';
  const sortedData =
    direction == "asc"
      ? [...data].sort(function (a, b) {
          if (a[param] < b[param]) {
            return -1;
          }
          if (a[param] > b[param]) {
            return 1;
          }
          return 0;
        })
      : [...data].sort(function (a, b) {
          if (b[param] < a[param]) {
            return -1;
          }
          if (b[param] > a[param]) {
            return 1;
          }
          return 0;
        });

  getTableContent(sortedData);
};

const resetButtons = (event) => {
  [...tableButtons].map((button) => {
    if (button !== event.target) {
      button.removeAttribute("data-dir");
    }
  });
};

window.addEventListener("load", () => {
  getTableContent(response.programofstudy);

  [...tableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      resetButtons(e);
      if (e.target.getAttribute("data-dir") == "desc") {
        sortData(response.programofstudy, e.target.id, "desc");
        e.target.setAttribute("data-dir", "asc");
      } else {
        sortData(response.programofstudy, e.target.id, "asc");
        e.target.setAttribute("data-dir", "desc");
      }
    });
  });
});
