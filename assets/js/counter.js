window.addEventListener('load', function(){
    let counterArr = document.querySelectorAll('.count');
    let counterArr2 = [];
    for(let j=0; j < counterArr.length; j++){
        counterArr2[j] = counterArr[j].innerHTML;
    }
    let count = 0;
    let flag = false;
    
    for(let j=0; j < counterArr.length; j++){
        counterArr[j].innerHTML = 0;
    }

    counterArr.innerHTML = 100;

    function main(){
        console.log(count);
        if(flag){
            return;
        }
        flag = true;
        for(let i=0; i<counterArr.length ; i++){
            if (counterArr[i].innerHTML == counterArr2[i]) {
                continue;
            }
            flag = false;
            counterArr[i].innerHTML = count;
        }
        count += 1;
        console.log(1);

        setTimeout(main, 10);
    }

    main();
});


