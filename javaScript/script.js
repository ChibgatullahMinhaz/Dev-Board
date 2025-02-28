// Set random theme 
document.getElementById('changeTheme').addEventListener('click', function (event) {
    event.preventDefault()
    
    document.body.style.backgroundColor = GetReandomTheme();
})