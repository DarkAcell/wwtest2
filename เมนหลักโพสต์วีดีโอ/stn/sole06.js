const player = new Plyr('#linkep');
player.on('ready', function() {
    var video = document.getElementById('linkep');
    window.SubtitlesOctopusOnLoad = function() {
        var options = {
            video: video,
            subUrl: eps06,
            fonts: [fontssub01, fontssub02, sublink06],
            //onReady: onReadyFunction,
            //debug: true,
            workerUrl: '/assets/sttoc/ocobjectwoker1102020.js'
        };
        window.octopusInstance = new SubtitlesOctopus(options); // You can experiment in console
    };
    if (SubtitlesOctopus) {
        SubtitlesOctopusOnLoad();
    }
});