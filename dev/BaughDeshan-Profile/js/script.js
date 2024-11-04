(() => {
     // Script Section DOM 
  // create elements
  scriptSection = document.createElement("section");
  scriptSectionHeader = document.createElement("h2");
  scriptP = document.createElement("p")
  setup = document.createElement("p")
  delivery = document.createElement("p")
  funnyButton = document.createElement("button");
//   assign id attributes
  scriptSection.setAttribute("id", "scriptFunnies");
  scriptSectionHeader.setAttribute("id", "scriptHeader");
  scriptP.setAttribute("id", "scriptP")
  setup.setAttribute("id","setupP")
  delivery.setAttribute("id"," deliveryP")
  // assign inner html
  scriptP.innerHTML = "This section calls the jokeapi and outputs some funnies!"
  scriptSectionHeader.innerHTML = "JavaScript Games & Funnies";
  funnyButton.innerHTML = "Click for a new funny!"
  // append to body
  document.body.append(scriptSection)
  scriptSection.appendChild(scriptSectionHeader);
  scriptSection.appendChild(scriptP)
  scriptSection.appendChild(setup)
  scriptSection.appendChild(delivery)
  scriptSection.appendChild(funnyButton)

  // store api within variable URL
  const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`;

  const handleError = (error) => {
    console.error("API has run into an error", error);
  };
  const handleApi = (api) => {
    const ssetup = api.setup;
    const ddelivery = api.delivery;

    setup.innerHTML = ssetup;
    delivery.innerHTML = ddelivery;

    console.log(handleApi);
  };
  document.querySelector("button").addEventListener("click", () => {
    fetchAPI();
  });
  const fetchAPI = () => {
    fetch(url)
      // convert api data into usable object data
      .then((response) => response.json())
      //
      .then((json) => handleApi(json))
      .catch((error) => handleError(error));
  };
  fetchAPI();
 
})();
