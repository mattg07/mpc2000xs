
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".mpc-button");
    const playbackRateSlider = document.getElementById("playbackRateSlider");
    const keySoundMap = {
        "KeyQ": "sound1",
        "KeyW": "sound2",
        "KeyE": "sound3",
        "KeyR": "sound4",
        "KeyA": "sound5",
        "KeyS": "sound6",
        "KeyD": "sound7",
        "KeyF": "sound8",
        "KeyZ": "sound9",
        "KeyX": "sound10",
        "KeyC": "sound11",
        "KeyV": "sound12",
        "Digit1": "sound13",
        "Digit2": "sound14",
        "Digit3": "sound15",
        "Digit4": "stopAllSounds" 
    

    const keysPressed = new Set();
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            playSound(button);
        });
    });

const currentlyPlayingSounds = new Set();

document.addEventListener("keydown", function(event) {
if (keySoundMap.hasOwnProperty(event.code)) {
    const soundId = keySoundMap[event.code];

    if (soundId === "stopAllSounds") {
        stopAllSounds();
    } else {
        const audioElement = document.getElementById(soundId);
        const audioInstance = new Audio(audioElement.src);
        audioInstance.playbackRate = playbackRateSlider.value;
        audioInstance.play();
        buttons.forEach(function(button) {
            if (button.getAttribute("data-sound") === soundId) {
                button.classList.add("active");
            }
        });
        keysPressed.add(event.code);

        currentlyPlayingSounds.add(audioInstance);
    }
}
});

function stopAllSounds() {
    currentlyPlayingSounds.forEach(function(audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
    });
    currentlyPlayingSounds.clear();
}




const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("mouseover", function() {
    if (!keysPressed.has("Digit4")) {
      stopButton.classList.add("active-hover");
    }
  });
  
  stopButton.addEventListener("mouseout", function() {
    if (!keysPressed.has("Digit4")) {
      stopButton.classList.remove("active-hover");
    }
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.code === "Digit4") {
      stopButton.classList.add("active-keydown");
    }
  });
  
  document.addEventListener("keyup", function(event) {
    if (event.code === "Digit4") {
      stopButton.classList.remove("active-keydown");
    }
    stopButton.addEventListener("click", function() {
  stopSounds(); 
});
  });
  

    document.addEventListener("keyup", function(event) {
        buttons.forEach(function(button) {
            button.classList.remove("active");
        });

        keysPressed.clear();
    });

    function playSound(button) {
        const soundId = button.getAttribute("data-sound");
        const audioElement = document.getElementById(soundId);
        const audioInstance = new Audio(audioElement.src);
    
        audioInstance.playbackRate = playbackRateSlider.value;
    
        audioInstance.play();
    
        currentlyPlayingSounds.add(audioInstance); //
    }
    

    playbackRateSlider.addEventListener("input", function() {
        const playbackRateDisplay = document.getElementById("playbackRateDisplay");
        playbackRateDisplay.textContent = this.value;
    });
});
document.addEventListener("DOMContentLoaded", function() {
const reverb = new Tone.Reverb({
    decay: 5, 
    wet: 0.6  ,
}).toDestination();

const sound1Element = document.getElementById("sound1");
const sound1Player = new Tone.Player(sound1Element.src);
sound1Player.connect(reverb);

const knob1Button = document.getElementById("knob1");
knob1Button.addEventListener("mousedown", function() {
    sound1Player.start();
});

const chorus = new Tone.Chorus({
    frequency: 1.5, 
    delayTime: 4.5,
    depth: 1,
    feedback: 0.2, 
}).toDestination(); 

const sound2Element = document.getElementById("sound5");
const sound2Player = new Tone.Player(sound2Element.src);
sound2Player.connect(chorus);
const knob2Button = document.getElementById("knob2");
knob2Button.addEventListener("mousedown", function() {
    sound2Player.start();
});

const pingPongDelay = new Tone.PingPongDelay({
    delayTime: 0.2,  // Adjust the delay time as needed
    feedback: 0.3,  // Adjust the feedback as needed
}).toDestination(); 

const sound3Element = document.getElementById("sound9");
const sound3Player = new Tone.Player(sound3Element.src);
sound3Player.connect(pingPongDelay); // Connect to the PingPongDelay effect

const knob3Button = document.getElementById("knob3");
knob3Button.addEventListener("mousedown", function() {
    sound3Player.start(); // Use sound3Player here
});
});










