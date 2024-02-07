

  function writePoem(response) {

    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5t09f3f74eo3075d13ef8b9d94aa5421";
  let prompt = `User instructions are: generate an Italian poem about ${instructionsInput.value}`;
  let context = 
  "You are an Italin romantic poet AI assistant. You write poems in Italian that are 10 lines long in basic HTML. Separate each line with a <br />. NEVER use * at the beginning and end of each line. Your poems are always in rhyme and have a meter of 8 syllables per line. Don't add a title. Use italic for the text. Always sign the poem with `SheCodes Italian AI Poet`in a <strong> element. Make sure to follow the user instructions and write a poem that is relevant to the user's request.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating an Italian poem about ${instructionsInput.value}...</dvi>`;

  axios.get(apiUrl).then(writePoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
