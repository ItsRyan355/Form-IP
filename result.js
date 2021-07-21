function resultform(){
    event.preventDefault();

    alert ('Form has been submitted')
    var calender2 = document.getElementById("date").value;
    var male = ["Kwasi", "Kwaduo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abeena", "Akua", "Yaa", "Afua", "Ama"];
    // if(document.myForm.date.value == "" || document.myForm.date.value > ){ 
    //     alert("Your date is overdue");
    //     return(false);
    // } 

    var calender = new Date (calender2);
    var dayIndex = calender.getDay();
    
    if(document.getElementById("male").checked){
        var maleNames = male[dayIndex];
        document.getElementById("card").innerHTML = 'Your Ankan name is' + maleNames ;
    };

    if(document.getElementById("female").checked){
        var femaleNames = female[dayIndex];
        document.getElementById("card").innerHTML = ' Your Ankan name is' + femaleNames ;

}

}

