e = document.getElementById('cd');

function ten (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:10";

    setTimeout(()=>{
        cb();},1000)
}

function nine (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:9";
    setTimeout(()=>{
        cb();
    },1000);
    
}

function eight (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:8";
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function seven (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:7";
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function six (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:6";

    
    setTimeout(()=>{
        cb();
    },1000);
    
}
function five (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:5";
    setTimeout(()=>{
        cb();
    },1000);
    
}

function four (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:4";
    setTimeout(()=>{
        cb();
    },1000);
    
}

function three (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:3";
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function two (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:2";
    
    setTimeout(()=>{
        cb();
    },1000);
    
}

function one (cb){
    e.innerHTML = "";
    e.innerHTML = "COUNTDOWN:1";
    
    setTimeout(()=>{
        cb();
    },1000);

}

ten(()=>{
    nine(()=>{
        eight(()=>{
            seven(()=>{
                six(()=> {
                    five(()=> {
                        four (()=>{
                            three(()=> {
                                two (()=> {
                                    one (()=>{
                                        hello();
                                    })
                                })
                            })
                        });
                    });
                });
            });
        });
    });
});

function hello (){
    e.innerHTML = "";
    e.innerHTML = "HAPPY INDEPENDENCE DAY !!";
}