$(function() {
    let num1= '';
    let num2= '';
    let operator= '';
    let operatorclick=false;
    let result= '';

    $('.num,.point').click(function() {
    if(result === '0'){
        result= '';
    };
    if(operatorclick){
        num2 +=$(this).text();
    }
    else{
        num1 +=$(this).text();
    };
    result +=$(this).text();
    $('#display').val(result);
});

$('.reset').click(function(){
    num1= '';
    num2= '';
    operator= '';
    operatorclick=false;
    result= '0';
    $('#display').val(result);
});

$('.operator').click(function(){
    if(num1 == '') return; 
    if(operatorclick){
        result = result.slice(0, -1);
    };
    operator=$(this).text();
    operatorclick=true;
    result +=operator;
    $('#display').val(result);
});

$('#equal').click(function(){
    let calculation;
    if(operator == '+'){
        calculation=Number(num1) + Number(num2);
    }
    else if(operator == '-'){
        calculation=Number(num1) - Number(num2);
    }
    else if(operator == '*'){
        calculation=Number(num1) * Number(num2);
    }
    else if(operator == '/'){
        calculation=Number(num1) / Number(num2);
    }
    $('#display').val(calculation);  
    
    num1 = String(calculation);
    num2 = '';
    operator = '';
    operatorclick = false;
    result = num1;
});

});