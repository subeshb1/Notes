function ageCalculator(birthDateString) {
    const birthYear = new Date(birthDateString).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear-birthYear
}
// console.log(ageCalculator(new Date(diff)));

window.onload = function () {

    let button = document.getElementById('button1');
    
    button.onclick = function () {
        let userDate =  document.getElementById('birthYear').value;
        // ageCalculator(userDate)
       alert(ageCalculator(userDate))
    }
}
