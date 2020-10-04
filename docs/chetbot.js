function saveUn() {
    var f = document.getElementById('f').value;
    if (f == "hello" || f == "good morning" || f == "good afternoon" || f == "good night")
        alert("Hello, human.");
    if (f == "what day is today")
        alert(new Date());
    return false;
}
