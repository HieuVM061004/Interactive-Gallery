function upDate(previewPic) {
    // Log to check if event is triggered
    console.log("Mouse over an image!");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    // Select the element with id 'image'
    const imageDiv = document.getElementById("image");

    // Change the text content
    imageDiv.textContent = previewPic.alt;

    // Change the background image
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    const imageDiv = document.getElementById("image");

    // Reset the background image
    imageDiv.style.backgroundImage = '';

    // Reset the text content
    imageDiv.textContent = "Hover over an image below to display here.";
}
