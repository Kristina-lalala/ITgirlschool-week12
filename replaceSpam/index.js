let finalMassage = document.getElementById("finalMassage");
let text = document.getElementById("name");
let link = document.getElementById("link");
let comment = document.getElementById("comment");
let finalComment = document.getElementById("finalComment");



function capitalizeString(str) {
    const changrWord = str.toLowerCase().slice(1);
    const fistWord = str.slice(0, 1).toUpperCase();
    return fistWord + changrWord;
}


function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return str.replace(/xxx|viagra/ig, "***")
}


function F() {
    let textValue = text.value;
    let words = textValue.split(' ');
    let result = '';
    words.forEach(function(word){
    result += ' ' + capitalizeString(word);
    });
    finalMassage.innerHTML = result;


    let linkValue = link.value;
    document.querySelector("#image").style.backgroundImage = `url(${link.value})`;


    let commentValue = comment.value;
    let finalCommentText = '';
        finalCommentText = '' + checkSpam(commentValue);
        finalComment.innerHTML = finalCommentText;
}