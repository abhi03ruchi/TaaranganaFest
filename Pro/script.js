function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_1p1b6p1" , "template_qpjxx0f" , params).then(function(res){
        alert("Sucess" + res.status);
    })
}