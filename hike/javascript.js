function ValidatMark () {
    
    //input
    var name=prompt ('enter your name');
    var mark=prompt('enter your mark');
    var age=prompt('enter your Age');
    
     //Validation
    while (mark>100 || mark < 0 || mark == '') {
         mark=prompt('Please Enter The Mark Between ( 0 - 100)'); 
    }
    // if (mark >=50 ){Document.write 'welcom to class 201'} else
    var fun =confirm ('code is fun ');
    if ( mark >=50 ) {
    //console.log('this is user input : ' , mark)
        document.write('<h3>' +'welcome to class 201' +'</h3>');
        
    } else {
        document.write('<h3>' +'sorry you are faild' +'</h3>');
    // console.log('this is user input : ' , mark)
        
    }
    
    
    var today = new Date();
    console.log('this is the date reserved word : ' , today)
    
    var hourNow = today.getHours();
    console.log('this is hourNow shit : ' , hourNow)
    
    var greeting; 
    console.log('this is greeting : ', greeting)
    if (hourNow > 18) {
        greeting = 'Good evening!'
        console.log('this is greeting : ', greeting)
    } 
    
    else if (hourNow > 12) {
        greeting = 'Good afternoon!'
        console.log('this is greeting : ', greeting)
    }
    
    else if (hourNow > 0) {
        greeting = 'Good morning!';
        console.log('this is greeting : ', greeting)
    }
    
    else {greeting = 'Welcome!';
    console.log('this is greeting : ', greeting)
    }

    return greeting ;
      
}

var greeting =  ValidatMark ();

document.write ( ' <h3>' +greeting + ' </ h3>' )