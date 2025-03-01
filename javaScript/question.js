const Questions = [
    {
        Qs: "Question-1: What are the different ways to select an element in the DOM?",
        Answer:"In JavaScript  Different ways to select an element DOM in querySelectorAll() and querySelector() and getElementsByTagName() and getElementsByClassName() and getElementById() "
    }
    ,
    {
        Qs: "Question-2: What is the difference between innerHTML, innerText, and textContent ?",
        Answer:"innerHTML sets HTML content inside en element, InnerText sets only visible text and textContent sets visible text and hidden elements"
    }
    ,
    {
        Qs: " Question-3: What is event delegation in the DOM?",
        Answer:"Event delegation is a technique in JavaScript whene need event lisener multiple child elements, then add a single event listener to their parent. This works because of event bubbling, which allows events to propagate up the DOM tree."
    }
    ,
    {
        Qs: "Question-4: What is event bubbling in the DOM?",
        Answer:"Event Bubbling is a phase in event propagation. Bubbling starts from the target element and moves up to the root. event bubbling stope Can be stopped using event.stopPropagation()"
    }
    ,
    {
        Qs: "Question-5: How do you create, add, and remove elements using JavaScript?",
        Answer:"in JavaScript, Document.createElement('div') for Creating, Document.body.apendChild('div') for adding and div.remove() for removing Elements"
    }
    
];

const QuestionsContainer = document.getElementById('qsContainer');

for (const Question of Questions) {
    const div = document.createElement('div');
    div.classList.add("bg-white","p-4","rounded-xl", "shadow-md", "mt-8")
    div.innerHTML = ` <h1 class="text-xl font-bold">${Question.Qs}</h1>
            <hr class="border-dotted border-gray-700 mt-3">
            <p>${Question.Answer}</p>`
    QuestionsContainer.appendChild(div);
}