var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event) { console.log(event);
     Content = event.results[0][0].transcript.toLowerCase(); 
     console.log(Content); if (Content == "selfie") { speak(); } }

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    setTimeout(function() { img_id = "image1"; 
    take_snapshot(); 
    speak_data = "Taking your next Selfie in 5 seconds"; 
    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterThis); }, 5000);

    setTimeout(function(){
        var  img_id = "image2"
         take_selfie();
         save();
         var synth = window.speechSynthesis;
     Webcam.attach(camera);
 
     speak_data = "Taking your next Selfie in 10 seconds";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
     },10000);

     setTimeout(function(){
        var  img_id = "image3"
         take_selfie();
         save();
         var synth = window.speechSynthesis;
     Webcam.attach(camera);
 
     speak_data = "Taking your next Selfie in 15 seconds";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
     },15000);
}

function take_snapshot(){
    console.log(img_id);

    webcam.snap(function(data_uri){
        if(img_id == "image1"){
        document.getElementById("result1").innerHTML = '<img id="image1" src="'+data_uri+'"/>'
        }
        if(img_id == "image2"){
            document.getElementById("result2").innerHTML = '<img id="image2" src="'+data_uri+'"/>';
        }
        if(img_id == "image3"){
            document.getElementById("result3").innerHTML = '<img id="image3" src="'+data_uri+'"/>';
        }
    });
}
