$(document).ready(function(){


$('.navig').mouseover(function(){
$(this).css("font-size", "36px");
$(this).css('text-decoration', 'none');
console.log('MOUSE')
});

$('.navig').mouseout(function(){
$(this).css("font-size", "32px");
$(this).css('text-decoration', 'none');
});

$('.userCentered').mouseover(function(){
$(this).find('p').css("font-size", "36px");
$(this).find('p').css('text-decoration', 'none');
});

$('.userCentered').mouseout(function(){
$(this).find('p').css("font-size", "30px");
$(this).find('p').css('text-decoration', 'none');
});
});


function userAdded() {
    var inputName = document.getElementById('userName').value;
    var inputEmail = document.getElementById('userEmail').value;
    var inputFeedback = document.getElementById('userFeedback').value;

    if (inputUser.length == 0) {
        document.getElementById('warningUser').innerHTML = 'FIELD CANNOT BE BLANK'
        document.getElementById('warningPass').innerHTML = ''
        document.getElementById('passSignup').value = '';
        document.getElementById('passVerSignup').value = '';
        
    }

    else if (inputPass.length == 0){
        document.getElementById('warningUser').innerHTML = ''
        document.getElementById('warningPass').innerHTML = 'FIELD CANNOT BE BLANK'
    }

    else if (inputPass != inputVerPass){
        document.getElementById('warningUser').innerHTML = ''
        document.getElementById('warningPass').innerHTML = 'PASSWORDS MUST MATCH'

        document.getElementById('passSignup').value = '';
        document.getElementById('passVerSignup').value = '';
    }

    else {

        document.getElementById('warningUser').innerHTML = ''
        document.getElementById('warningPass').innerHTML = ''
        var newSignup = new User(inputUser,inputPass)
        userDataBase.push(newSignup)
        document.getElementById('verify').innerHTML = 'SIGN UP SUCCESSFUL!'
        document.getElementById('passSignup').value = '';
        document.getElementById('userSignup').value = '';
        document.getElementById('passVerSignup').value = '';
        
        
    }

}

function sendMail() {
    var link = "mailto:cawallace95@gmail.com"
             
             + "&subject=" + escape("Feedback")
             + "&body=" + escape(document.getElementById('userFeedback').value)  +  "%0D%0A" +  escape(document.getElementById('userName').value)
    ;

    window.location.href = link;
}