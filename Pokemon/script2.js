const attendantForm = document.forms.attendant;

attendantForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = attendantForm.elements;
  const name = inputs["name"];

  addAttendantItem(name.value);

  name.value = "";
});

const results = document.querySelector(".names");
let key = 0;

const createResult = (name, key) => {
  const li = document.createElement("li");
  li.innerText = name;
  li.setAttribute("key", key);

  return li;
};

const addAttendantItem = (name) => {
  results.appendChild(createResult(name, key));
  key++;
};