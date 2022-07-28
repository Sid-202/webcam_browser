const webcamElement = document.getElementById( 'videoElement' );
const canvasElement = document.getElementById( 'pic' );
const webcam = new Webcam( webcamElement, 'user', canvasElement );

function startVideo() {
    webcam.start()
        .then( result => {
            console.log( "webcam started" );
        } )
        .catch( err => {
            console.log( err );
        } );
}

function stopVideo() {
    webcam.stop();
}

function clickPic() {
    let picture = webcam.snap();
    let download_link = document.querySelector( '#download' );
    download_link.href = picture;
    download_link.style.textDecoration = "underline";
    download_link.download = "image.png";

}
