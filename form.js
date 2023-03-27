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

// CHARACTERS COUNT (Question-Area)

const questionElementQ = document.querySelector('[data-js="questionArea"]');
const amountLeftQ = document.querySelector('[data-js="amountLeft"]');
const maxLengthQ = questionElementQ.getAttribute("maxlength");

const updateAmountLeftQ = (value) => {
  amountLeftQ.innerText = value;
};

updateAmountLeftQ(maxLengthQ);

questionElementQ.addEventListener("input", () => {
  updateAmountLeftQ(maxLengthQ - questionElementQ.value.length);
});

// CHARACTERS COUNT (Answer-Area)
const questionElementA = document.querySelector('[data-js="answerArea"]');
const amountLeftA = document.querySelector('[data-js="amountLeftA"]');
const maxLengthA = questionElementA.getAttribute("maxlength");

const updateAmountLeftA = (value) => {
  amountLeftA.innerText = value;
};

updateAmountLeftA(maxLengthA);

questionElementA.addEventListener("input", () => {
  updateAmountLeftA(maxLengthA - questionElementA.value.length);
});
