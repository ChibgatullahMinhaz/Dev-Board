// discover
document.getElementById('discover').addEventListener('click',function (event) {
    event.preventDefault();
   window.location.href = './view/Blog.html'
});
// Set random theme 
document.getElementById('changeTheme').addEventListener('click', function (event) {
    event.preventDefault()
    document.body.style.backgroundColor = GetReandomTheme();
})

// get time 
document.getElementById('dayShort').innerText = GetDate();
document.getElementById('FullDate').innerText = getFullDate();
const time = getTime();


// // Initial counts
let tasktCount = tasked.length;
let navCount = parseFloat(document.getElementById('navCount').innerText);
let conMessageCount = 0;  

document.getElementById('taskAssign').innerText = tasktCount;

const allbtns = document.querySelectorAll(".complete-btn");
for (let i = 0; i < allbtns.length; i++) {
    allbtns[i].dataset.taskTitle = tasked[i].taskTitle;
    allbtns[i].addEventListener('click', function (event) {
        event.preventDefault();

        tasktCount--;
        navCount++;
        document.getElementById('taskAssign').innerText = tasktCount;
        document.getElementById('navCount').innerText = navCount;
        alert('Board Updated Successfully.');
        const cardTitle = allbtns[i].dataset.taskTitle;

        const historyContainer = document.getElementById('history');
        const hDiv = document.createElement('div');
        hDiv.innerHTML = `
            <div class="bg-[#f4f7ff] p-4 rounded-2xl">
                <p class="text-slate-600">You have completed the task ${cardTitle} ${time}</p>
            </div>
        `;
        historyContainer.appendChild(hDiv);

        allbtns[i].setAttribute("disabled", "true");

        if (conMessageCount === tasktCount) {
            alert('Congrats!!! You have completed all the current tasks.');
        }
    });
}


// history clear 
function clearHsitory() {
    document.getElementById('clearHistory').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('history').innerHTML = '';
    })
}
clearHsitory()