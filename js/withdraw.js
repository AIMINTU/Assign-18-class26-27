
 document.getElementById('withdraw1').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdrawInput');
    const withdrawInputValue=withdrawInput.value;
    //console.log(typeof withdrawInputValue)
    const withdrawInput1=parseInt(withdrawInputValue)
    //console.log(typeof withdrawInput1)

    //withdrawpara start
    const withdrawpara=document.getElementById('withdrawpara')
    //console.log(withdrawpara)
    const withdrawparaValue=withdrawpara.innerText;
    const withdrawpara1=parseInt(withdrawparaValue)
    //console.log(withdrawpara1)
    const result=withdrawInput1+ withdrawpara1
   // console.log(result)
    withdrawpara.innerText =result;
   
    //total part
    const totalParagraph=document.getElementById('total-amount');
    //console.log(totalParagraph)
    const withdrawFromtotal=totalParagraph.innerText;
    //console.log(withdrawFromtotal)
    const totalParagraph1=parseInt(withdrawFromtotal)
    //console.log(typeof totalParagraph1)
    const result2= totalParagraph1-withdrawInputValue;
    totalParagraph.innerText=result2;
    

    // if(withdrawInputValue>totalParagraph1){
    //     withdrawInput.innerText="00"
    // }
    // else{
    //     withdrawInput.innerText=result
    // }

    // if(result2<=0){
    //     alert("You haven't sufficient balance in the account")
    // }
    // else{
    //     totalParagraph.innerText=result2 
    // }


    withdrawInputValue.value=''

})
