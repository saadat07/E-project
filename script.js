


document.querySelector(".centerPopup").style.display = "none";

function orderBtn(){


    const cName = document.getElementById("Cname").value;
    const cNumber =  document.getElementById("cNumber").value;
    const cOrder =  document.getElementById("cOrder").value;
    const cAdd =  document.getElementById("cAdd").value;
    const cQuantity =  document.getElementById("cQuantity").value;
    const cAddress=  document.getElementById("cAddress").value;

if((cName&&cNumber&&cOrder&&cAdd&&cQuantity&&cAddress)!= ""){


        document.querySelector("#contact").style.display="none";
        document.querySelector(".centerPopup").style.display = "grid";
    
    
        document.querySelector(".form-data").innerHTML=`
        Your Name: ${cName} <br /> 
        Your Number: ${cNumber} <br /> 
        Your Order: ${cOrder}  <br /> 
        Additional Food: ${cAdd}  <br /> 
        Quantity: ${cQuantity}  <br /> 
        Address: ${cAddress}  <br /> 
        `;
        
}

else{

    document.querySelector("#onError").innerHTML = `Please Select all Require Fields`
}
}








