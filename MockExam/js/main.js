var AccountDetails=
        {title: "Areej-Hasan",
    balance: 9000,
    currency: "PKRS",
    IBAN: "PKN123454321"};

document.getElementById("title").innerHTML = "Areej-Hasan";
document.getElementById("balance").innerHTML="9000";
document.getElementById("currency").innerHTML="PKRS";
document.getElementById("IBAN").innerHTML="PKN123454321";

var deposit=0;
var withdraw=0;

function depositFunction(e,v) {
    if (e.keyCode === 13) {
        if (!isNaN(v)) {
            AccountDetails.balance+=parseInt(v);
            document.getElementById("balance").innerHTML=AccountDetails.balance;
        }
    }
}
function withdrawFunction(e,v) {
    if (e.keyCode === 13) {
        if (!isNaN(v)) {
            AccountDetails.balance-=parseInt(v);
            document.getElementById("balance").innerHTML=AccountDetails.balance;
        }
    }
}