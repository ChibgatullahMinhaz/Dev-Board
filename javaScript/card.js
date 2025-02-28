const tasked = [
    {
        company: "ShopEase",
        taskTitle: "Fix Mobile Button Issue ",
        des: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly"
    },
    {
        company: "CloudSync",
        taskTitle: "Add Dark Mode",
        des: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly"
    },
    {
        company: "SwiftPay",
        taskTitle: "Optimize  Home page",
        des: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly"
    },
    {
        company: "Meta",
        taskTitle: "Add new emoji 🤲",
        des: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly"
    },
    {
        company: "Google LLC",
        taskTitle: "Integrate OpenAI API ",
        des: "Debug using Chrome DevTools, check for overlapping elements, and ensure onClick works properly and ensure onClick works properly"
    },
    {
        company: "Glassdoar",
        taskTitle: "Improve Job searching ",
        des: "Debug using Chrome DevTools, check for overlapping elements"
    },
];

const cardContainer = document.getElementById('takeCard');

for (const taks of tasked) {
    const div = document.createElement('div');
    div.classList.add("bg-[#f4f7ff]", "p-4", "space-y-4", "rounded-lg")
    div.innerHTML = `
     <button class="btn bg-white hover:bg-white border-none">${taks.company}</button>
  <h1 class="font-medium text-xl mt-2">${taks.taskTitle} </h1>
<div class="h-[60px] bg-white overflow-hidden text-gray-500 p-1"> ${taks.des} </div>
<div class="flex justify-between items-center">
<div>
 <p class="text-gray-500">Deadline</p>
 <p class="font-medium">21 March 2025</p>
  </div>
  <button class="btn btn-primary complete-btn">Completed</button> </div>
    `
    cardContainer.appendChild(div)
}
