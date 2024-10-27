document.getElementById('deposit').addEventListener('click',function(){
    // if(depositInputvalue.value===''){
    //     const btn=document.getElementById('deposit');
    //     btn.setAttribute('disabled')
    // }


    const depositInput=document.getElementById('depositInput');
    const depositInputvalue=depositInput.value
    const convertdeposit=parseInt(depositInputvalue)
     //console.log(convertdeposit)

    const depositparagraph=document.getElementById('depositparagraph');
    const depositparagraphinnertext=depositparagraph.innerText;
    //console.log(depositparagraphinnertext)
    const depositpara=parseInt(depositparagraphinnertext)
    //console.log(depositAdd)
    //console.log(depositAdd.innerText)
    //console.log(typeof depositAdd.innerText)
    //console.log(typeof depositpara)
    //const result=depositInputnum+depositAdd1
    const result=convertdeposit+depositpara;
    depositparagraph.innerText=result;


    //total start
    const TotalAmount=document.getElementById('total-amount')
    const totalpara1=TotalAmount.innerText;
    const totalPara2=parseInt(totalpara1)
    console.log(typeof totalPara2)
    //const totalPara=parseInt(TotalAmount)
    //console.log(totalPara)
    const totalResult=convertdeposit+totalPara2;
    TotalAmount.innerText=totalResult;
    //remove value in the input
    depositInput.value='';



})
