var main=document.querySelector(".main");

setTimeout(function(){
    main.innerText="10";
    setTimeout(function(){
        main.innerText="9";
        setTimeout(function(){
            main.innerText="8";
            setTimeout(function(){
                main.innerText="7";
                setTimeout(function(){
                    main.innerText="6";
                    setTimeout(function(){
                        main.innerText="5";
                        setTimeout(function(){
                            main.innerText="4";
                            setTimeout(function(){
                                main.innerText="3";
                                setTimeout(function(){
                                    main.innerText="2";
                                    setTimeout(function(){
                                        main.innerText="1";
                                        setTimeout(function(){
                                            main.innerText="Happy Independence Day!";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);