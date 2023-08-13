export function handleSubmit(event) {
  event.preventDefault();

  let urlInput = document.querySelector("#url-input").value;
  let formResult = document.querySelector("#form-result");

  fetch("http://localhost:8080/testing", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urlInput }),
  })
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      if (data.validation != null) {
        formResult.innerHTML = "";
      } else {
        formResult.innerHTML = `<p>Popularity: ${data.polarity}</p>`;
        formResult.innerHTML = `<p>Text: ${data.text}</p>`;
      }
    });
}
