const bar =document.getElementById('bar');
const nav=document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
})
}

function clicked(){
    var globalVariable={
        idvalue: document.getElementById('spanin').textContent
     };
    // var global idvalue=
    // alert(globalVariable.idvalue);
    
    window.location.href='simple.php';
    // alert("hello");
    
}
