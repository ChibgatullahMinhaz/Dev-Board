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
function clearHsitory (){
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
