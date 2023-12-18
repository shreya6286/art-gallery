<script>
    import { goto } from "$app/navigation";

    function fillConsignForm(){
        goto('./consign-form')
    }
</script>

<style>
    i{
        font-size: 40px;
    }
    p{
        font-size: 12px;
    }
    h6{
        font-size: 14px;
    }
    .flex1{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .minHeight{
        min-height: 100vh;
    }
    .text{
        color: orangered;
    }
</style>

<div class="container-fluid minHeight">
    <div class="row mt-5">
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-3 px-5 flex1">
            <h2>Unleash your <span class="text">creativity</span> with us.</h2>
        </div>
        <div class="col-md-9 flex1">
            <video width="90%" autoplay muted loop class="rounded">
                <source src="vid1.mp4" type="video/mp4">
            </video>
        </div>
        <!-- <div class="col-md-1"></div> -->
    </div>

    
    <div class="row mt-5">
        <div class="row">
            <h4 class="text-center">How to submit a consignment?</h4>
        </div>
        <div class="row px-5 ps-5 pt-3">
            <div class="col-md-4 text-center p-4">
                <i class="bi bi-journal-text"></i>
                <h6 class="text-center mt-4">Share details</h6>
                <p>Complete the form on this page providing us with as much detail as possible about your artwork.</p>
            </div>
            <div class="col-md-4 text-center p-4">
                <i class="bi bi-send"></i>
                <h6 class="text-center mt-4">Send us your form</h6>
                <p>We will contact you as soon as possible to request images of your artwork.</p>
                <button class="btn btn-warning mt-5 rounded-5 ps-4 px-4" on:click={fillConsignForm}>Artwork consignment form</button>
            </div>
            <div class="col-md-4 text-center p-4">
                <i class="bi bi-telephone"></i>
                <h6 class="text-center mt-4">Review and respond</h6>
                <p>Our specialists will review your submission and we will do our best to respond to you within 24 hours.</p>
            </div>
        </div>
    </div>

    <div class="row pt-5 mt-4 bg-light mb-5 pb-4">
        <div class="row">
            <h4 class="text-center">How it works?</h4>
            <div class="col-md-1"></div>
            <div class="col-md-10 mt-4">
                <p>
                    Send us details and images of your artwork from your collection you are looking to sell. 
                    Once we have received we can provide complimentary estimates for the artwork that can be 
                    considered for resale.
                </p>
                <p>
                    If you are happy with the estimates given, we will then start to work with our existing 
                    clientele and our new prospective enquiries to promote your artwork on our social media 
                    platform. If Yield Gallery physically have your consignment, this will be hung in our 
                    gallery for clients to view.
                </p>
                <p>
                    Our advisors will keep you up to date and informed of all offers for your artwork. If an 
                    offer is accepted for your artwork we will arrange payment to you within 10 working days 
                    and our logistics department will arrange delivery to the buyer.
                </p>
            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</div>