function letTest() {
    let x = 31;
    if(true) {
        let x = 71; // andere Variable
        let y = 80;
        console.log(x); // 71
    }
    console.log(x); // 31
    console.log(y); // Error
} 
letTest();
