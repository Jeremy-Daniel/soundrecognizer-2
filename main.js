var model; 

function sound_classifying(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    model = ml5.soundClassifier("https://storage.googleapis.com/tm-model/-tWlWwraM/model.json",modelLoaded);
}

function modelLoaded(){
    model.classify(gotResult);
}
