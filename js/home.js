document.getElementById('btn-add').addEventListener('click', function(event){
    event.preventDefault();
    console.log('money add button clicked');
   const addMoneyInput= getInputFieldValueById("input-add");

    console.log(addMoneyInput);
    if(addMoneyInput===123){
        console.log("Add your money");
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        //add money
        const addMoney = parseFloat(addMoneyInput);
        const saveBalance = parseFloat(balance);

        const newBalance = addMoney + saveBalance;
        console.log(newBalance);
        //update the element

        document.getElementById('account-balance').innerText = newBalance;

        //add history
        const p=document.createElement('p');
        p.innerText=`Added: ${addMoney} Tk new balance : ${newBalance}`;
        console.log(p);
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert("failed to add money");
    }
});