// JavaScript Document    
function myrusd(){
    var a=Number(document.Dolar.myr.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Dolar.myr.value);    
        b=a*0.234836;
        document.Dolar.usd.value = b;
    }
}
function usdmyr(){
    var a=Number(document.Dolar.usd.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Dolar.usd.value);    
        b=a*4.25880;
        document.Dolar.myr.value = b;
    }
}
//----------------------------------------------------------------------------------
function myrgbp(){
    var a=Number(document.Sterling.myr.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Sterling.myr.value);    
        b=a*0.183232;
        document.Sterling.gbp.value = b;
    }
}
function gbpmyr(){
    var a=Number(document.Sterling.gbp.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Sterling.gbp.value);    
        b=a*5.45757;
        document.Sterling.myr.value = b;
    }
}
//----------------------------------------------------------------------------------
function myrsar(){
    var a=Number(document.Riyal.myr.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Riyal.myr.value);    
        b=a*0.880458;
        document.Riyal.sar.value = b;
    }
}
function sarmyr(){
    var a=Number(document.Riyal.sar.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Riyal.sar.value);    
        b=a*1.13577;
        document.Riyal.myr.value = b;
    }
}
//----------------------------------------------------------------------------------
function myrjpy(){
    var a=Number(document.Yen.myr.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Yen.myr.value);    
        b=a*24.3801;
        document.Yen.jpy.value = b;
    }
}
function jpymyr(){
    var a=Number(document.Yen.jpy.value);
    var b;
    if (a == null || a == ""){
        window.alert("Please insert value");
    }else if (isNaN(a)){
        window.alert("Please enter number only")
    } else {
        a=Number(document.Yen.jpy.value);    
        b=a*0.0410170;
        document.Yen.myr.value = b;
    }
}