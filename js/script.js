var acc=document.getElementsByClassName("accordion");
for(let i=0;i<acc.length;i++){
    acc[i].onclick=function(){
        this.classList.toggle("active");
        let panel=this.nextElementSibling;
        if(panel.style.display=='block'){
            panel.style.display='none';

        }else{
            panel.style.display='block';
        }
    }
}