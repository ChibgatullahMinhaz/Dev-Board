
document.getElementById('bkdesk').addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = "../index.html"
});
// create reandom theme Color
function GetReandomTheme() {
    const hexCharacters = '012AB345F6789CDE';
    let themeColor = '#';
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 16);
        themeColor += hexCharacters[random];
    }
    return themeColor;
}

// history clear 
function clearHsitory() {
    document.getElementById('clearHistory').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('history').innerHTML = '';
    })
}
clearHsitory()
// get date 
function GetDate() {
    const now = new Date();
    const shortDay = now.toLocaleDateString('en-US', { weekday: 'short' });
    return shortDay;
}
function getFullDate() {
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const shortMonth = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    return `${shortMonth} ${day} ${year}`;
}
// get Time 
function getTime() {
    const date = new Date();
    let getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const getSeconds = date.getSeconds();
    const ampm = getHours >= 12 ? 'PM' : 'AM';
    getHours = getHours % 12;
    getHours = getHours ? getHours : 12;

    const formattedTime = `${getHours}:${getMinutes < 10 ? '0' + getMinutes : getMinutes}:${getSeconds < 10 ? '0' + getSeconds : getSeconds} ${ampm}`;

    return formattedTime;
}

// dynamic card looding 
function cardLoading() {
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
}
