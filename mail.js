function sendEmail(){
    Email.send({
        SecureToken : "f3759a4a-4fbe-442f-9aa8-e7db2eb94aec",
        To: 'ht.quynhanh305@gmail.com',
        From: 'ht.quynhanh305@gmail.com',
        Subject : document.getElementById('subject').value,
        Body : "Name: " + document.getElementById("name").value + 
        "<br> Email: " + document.getElementById("email").value +
        "<br> Message: " + document.getElementById("message").value,
            }).then(
    message => alert("Message Sent.")
            );

}