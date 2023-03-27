// CREATE NEW CARD

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  //   console.log(formElements);
  const questionValue = formElements.question.value;
  console.log(questionValue);

  const newSection = document.createElement("section");
  newSection.classList.add("question-card");
  newSection.innerHTML = `<section>
    <img
      src="./assets/bookmark_transparent.png"
      alt="bookmark transparent"
      id="bookmark-1"
      data-js="bookmark-1"
    />
    </section>
    <p>
    ${questionValue} <br />
    </p>
    <section>
    <button type="button" data-js="button">Show answer</button>
    </section>
    <p hidden data-js="hidden-answer">Cascading Style Sheet</p>
    <section class="tag-section">
    <a href="#">#html</a>
    <a href="#">#general</a>
    <a href="#">#css</a>
    </section>
    `;

  document.body.append(newSection);
});
