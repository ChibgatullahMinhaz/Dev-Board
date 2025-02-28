// Set random theme 
document.getElementById('changeTheme').addEventListener('click', function (event) {
    event.preventDefault()
    document.body.style.backgroundColor = GetReandomTheme();
})

// get time 
document.getElementById('dayShort').innerText = GetDate();
document.getElementById('FullDate').innerText = getFullDate();
const time = getTime();

// count
let tasktCount = parseFloat(document.getElementById('taskAssign').innerText);
let navCount= parseFloat(document.getElementById('navCount').innerText);
const conMessageCount = 0;

const allbtns = document.querySelectorAll(".complete-btn");
for (let i = 0; i < allbtns.length; i++) {
    const btn = allbtns[i];
   btn.addEventListener('click', function (event) {
        event.preventDefault();
        tasktCount--
        navCount++
        document.getElementById('taskAssign').innerText = tasktCount;
        document.getElementById('navCount').innerText = navCount;
        alert('completed')
        const cardTitle = btn.taskTitle;
        const historyContainer = document.getElementById('history');
        const hDiv =document.createElement('div');
        hDiv.innerHTML = `
         <div class="bg-[#f4f7ff] p-4 rounded-2xl">
        <p class="text-slate-600">You have Complete The Task ${cardTitle}  ${time} </p>
    </div>
        `
       historyContainer.appendChild(hDiv);
       btn.setAttribute("disabled", "true")

       if (conMessageCount === tasktCount) {
        alert('congrass')
       }
    });
}



