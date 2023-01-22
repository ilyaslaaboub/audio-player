class Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;
        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.name = [];
        this.name[0] = "Radio 1";
        this.name[1] = "Music 2";
        this.name[2] = "Music 3";

        this.audio =[];
        this.audio[0] = "http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
        this.audio[1] = "./msc/akil.mp3";
        this.audio[2] = "./msc/hasni.mp3";
        
        this.numberaudio =0;

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
        this.next_audio();
        });
           
        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{ 
        this.back_audio();  
         
        });
        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else 
        {
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberaudio<this.audio.length-1){
            ++this.numberaudio;
            this.isPlayed = false; 
            }
            else{
            this.numberaudio = 0;
            }
            localStorage.setItem("save",this.numberaudio);
            this.setSource();
    }
    back_audio(){
        if(this.numberaudio>0){
            --this.numberaudio;
            this.isPlayed = false; 
        }
        else{
        this.numberaudio = this.audio.length -1; 
        }
        localStorage.setItem("save",this.numberaudio);
        this.setSource();
    }
    setSource(){
    if(localStorage.getItem("save")!=null){
        this.numberaudio = localStorage.getItem("save");
    }
    document.getElementById("radio-title").innerHTML = this.name[this.numberaudio];
    document.getElementById("audio_file").src = this.audio[this.numberaudio];

    this.play_pause();
    }

}
onload = new Player();