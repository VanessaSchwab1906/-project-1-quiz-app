// CREATE NEW CARD WITH INPUT FROM FORM

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  //   console.log(formElements);
  const questionValue = formElements.question.value;
  //   console.log(questionValue);
  const answerValue = formElements.answer.value;
  console.log(answerValue);
  const tagValue = formElements.tag.value;
  console.log(tagValue);

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
    <p hidden data-js="hidden-answer">${answerValue}</p>
    <section class="tag-section">
    <a href="#">${tagValue}</a>
    </section>
    `;

  document.body.append(newSection);
});

// CHARACTERS COUNT

const questionElement = document.querySelector('[data-js="questionArea"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});
