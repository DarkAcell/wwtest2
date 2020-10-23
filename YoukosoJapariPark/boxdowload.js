(function() {
    var content = `<div id="boxonlinedownload">
    
   
    <!-- /.l-content_n l-content_n-sp -->
    <div class="l-content_n l-content_n-sp">
        <section class="c-cardbox-list">
            <div class="boxvideoinfo">

                <div class="bgvideo" style="background-image: url(../img/bg_movie.png); ">
                    <video poster="/img/videologo.png" id="linkep">
                    <!-- Video files ID -->
                    <source id="720p" type="video/mp4" size="720">
                    <source id="1080p" type="video/mp4" size="1080">
                </video>
                </div>
                <div class="p-onair">
                    <div class="table_wrap">
                        <div class="table_head">
                            <p></p>
                        </div>
                        <div class="table_body">

                            <a id="previous" class="btn_back"> ก่อนหน้า</a>
                            <a id="EPListHome" class="btn_back"> หน้าหลัก</a>
                            <a id="next" class="btn_back "> ถัดไป</a>
                        </div>
                    </div>
                </div>
                <button class="collapsible">Download Link</button>
                <div class="content">
                    <div class="table_body ">

                        <div class="downloadqua">
                            <a id="drivedownloadoriginal" class="btn_backdown "> Original full size</a>
                            <a id="drivedownload480p" class="btn_backdown "> 480P</a>
                            <a id="drivedownload720p" class="btn_backdown "> 720P</a>
                            <a id="drivedownload1080p" class="btn_backdown "> 1080P</a>
                        </div>
                    </div>
                    <div class="p-onair ">
                        <div class="table_head ">
                            <a id="updatetime" class="update_time">UpdateTime</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </div>

`
    document.write(content)
})();