const videos =["Videos\Video1.mp4", "Videos\Video2.mp4", "Videos\Video3.mp4"];

let indice = 0;

function siguiente(){
    if(indice === videos.length - 1 ){
        indice = 0;
    }else{
        indice ++;
    }
    document.getElementById("video").src=videos[indice];
}

function anterior(){
    if(indice === 0){
        indice = videos.length - 1;
    }else{
        indice --;
    }
    document.getElementById("video").src=videos[indice];
}