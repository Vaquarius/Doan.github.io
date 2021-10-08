let bannercarouse = $('#bannercarouse')

bannercarouse.append(`
    <div class="banner">
    <div class="container-fluid">
        <div class="producimageslide row">
            <div class="col-12 producimages">
                <section class="one-element">
                    <img src="../../IMG/DJM-S7-hero-carousel-1440x600.jpg" alt="Image">
                    <div class="overlay">
                    <h1 class="headline">
                        DJM-S7
                    </h1>
                    <h2>Turntable</h2>
                    <span class="description">
                        This new 2-channel battle mixer gives you the freedom to customize your setup and bring your own unique style to every performance.
                    </span>
                    <button class="bannerbtn"><a  href="">By Now</a></button> 
                    </div>
                </section>
                
            </div>
            <div class="col-8 small-images">
                <div class="small-image"><img src="../../IMG/DJM-S7-hero-carousel-1440x600.jpg" alt=""></div>
                <div class="small-image"><img src="../../IMG/CDJ-3000-carousel-desktop-1440x600.jpg" alt=""></div>
                <div class="small-image"><img src="../../IMG/vm speaker carousel 1440x600.jpg" alt=""></div>
            </div>
        </div>
        
    </div>
    </div>
`)
$(document).ready(function () {
    $('.small-images img').click(function () { 
        var image = $(this).attr('src');
        $('.one-element img').attr('src', image);
        
    });
});
$('.content-link button').click(function () {
    var idx = $(this).closest('.content-link').index();
    
    $('.content-link button').removeClass('active-link');
    $(this).addClass('active-link');

    $('.content-panel').hide();
    $('.content-panel').eq(idx).show();
});