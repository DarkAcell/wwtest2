const player = new Plyr('#linkep');
player.on('ready', function() {
    var video = document.getElementById('linkep');
    window.SubtitlesOctopusOnLoad = function() {
        var options = {
            video: video,
            subUrl: eps19,
            fonts: [fontssub01, fontssub02, sublink19],
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