function handleSubmit(event) {
  event.preventDefault();
  // check what text was put into the form field
  const formText = document.getElementById("name").value;
  const results = document.querySelector("#results");
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");

  let data = {
    text: formText,
  };

  fetch("http://localhost:8080/testApi", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      results.textContent = data.text;
    });
}
export { handleSubmit };
