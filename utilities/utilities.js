// create reandom theme Color
function GetReandomTheme() {
    const hexCharacters = '0123456789ABCDEF';
    let themeColor = '#';
    for (let i = 0; i < 6; i++) {
        themeColor += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return themeColor;
}
