

function startVideo() {
    // Get video element reference
    var video = document.querySelector( "#videoElement" );


    var video = document.querySelector( "#videoElement" );

    // Get promise, devolve into object and start stream

    if ( hasGetUserMedia() )
    {
        navigator.mediaDevices.getUserMedia( { video: true } )
            .then( function ( stream ) {
                video.srcObject = stream;
            } )
            .catch( function ( err0r ) {
                console.log( "Something went wrong!" );
            } );
    }
    else
    {
        alert( 'getUserMedia() is not supported in your browser' );
    }
}

function stopVideo() {
    var video = document.querySelector( "#videoElement" );
    var stream = video.srcObject;
    var tracks = stream.getTracks();


    for ( var i = 0; i < tracks.length; i++ )
    {
        var track = tracks[ i ];
        track.stop();
    }

    video.srcObject = null;

}

function clickPic() {
    var canvas = document.querySelector( "#pic" );
    var video = document.querySelector( "#videoElement" );

    canvas.getContext( '2d' ).drawImage( video, 0, 0, canvas.width, canvas.height );


    console.log( image_data_url );
}

function usePic() {
    var canvas = document.querySelector( "#pic" );
    var image_data_url = canvas.toDataURL( 'image/jpeg' );

    var filename = "newImg.jpeg";

    download( image_data_url, filename );
}

function download( dataurl, filename ) {
    const link = document.createElement( "a" );
    link.href = dataurl;
    link.download = filename;
    link.click();
}

function hasGetUserMedia() {
    return !!( navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia );
}