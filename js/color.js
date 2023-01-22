class Color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.select_color("color1")
        });  
        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.select_color("color2")
        });  
        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.select_color("color3")
        });  
        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.select_color("color4")
        });  
        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "linear-gradient(to right, #dd3e54, #6be585)";
        }
        this.select_color(localStorage.getItem("COLOR"));
    }
    select_color(color){
   
        if(color=="color1"){
        document.body.style.background = "linear-gradient(to right, #dd3e54, #6be585)";
    }else if(color=="color2"){
        document.body.style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
    }else if(color=="color3"){
    document.body.style.background = "linear-gradient(to right, #dd3e54, #6be585)";
    }else if(color=="color4"){
    document.body.style.background = "linear-gradient(to right, #1f4037, #99f2c8)";
    }
    localStorage.setItem("COLOR",color);
}
}
onload = new Color();