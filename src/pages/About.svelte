<style>
    h5{
        color: red;
    }
    .normal {
        border: 1px solid red;
        border-radius: 20px;
    }
    i{
        font-size: 25px;
        color: red;
    }
    .custom-card{
        background-color:bisque;
    }
    p{
        font-size: 14px;
    }
    .flex1{
        display: flex;
        justify-content: center;
    }
    .img1{
        border-radius: 50%;
        width: 180px;
    }
    .bg{
        background-image: url('bg1.png');
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 10px
    }
</style>

<div class="container-fluid">
    <div class="row bg">
        <div class="col-2"></div>
        <div class="col-8 p-3 text-center">
            <h3 class="text-center mt-4" > About Us</h3>
        </div>
        <div class="col-2"></div>
    </div>
    <!-- <div class="row px-5 pb-5 pt-3 mx-5">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <img src="about.jpeg" alt="" width="100%" class="rounded-3">
        </div>
        <div class="col-md-1"></div>
    </div> -->
    <div class="row mt-5 pt-1">
        <div class="col-md-1"></div>
        <div class="col-md-5">
            <div class="row">
                <h5> A world of art awaits </h5>
                <p> Welcome to ArtAxis, a haven for art enthusiasts and 
                    collectors alike. Our gallery is a celebration of
                    creativity, a space where imagination knows no
                    bounds, and where art takes center stage.<br>
                    We are dedicated to promoting and showcasing
                    exceptional works of art from both emerging and
                    established artists.
                </p>
            </div>
        </div>
        <div class="col-md-5">
            <div class="row normal mb-3 pt-3 px-3">
                <div class="col-1">
                    <i  class="bi bi-pin-fill bi-lg "></i>
                </div>
                <div class="col-11">
                    <h4>Vision</h4>
                    <p>We at ArtAxis aim to bring together Patrons, Artists, and Customers to exchange the passion for art.</p>
                </div>
            </div>
            <div class="row normal pt-3 px-3 mb-3">
                <div class="col-1">
                    <i  class="bi-gear-wide-connected bi-lg"></i>
                </div>
                <div class="col-11">
                    <h4>Mission</h4>
                    <p>To share globally influenced, culturally diverse, and technologically advanced arts and artforms. </p>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>    
    </div>

    <div class="row mb-5 mt-5">
        <h4 class="text-center" > Our Team </h4>
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="row text-center mt-4 pt-2">
                <div class="col-4"> 
                    <div class="row flex1">
                        <div class="card border-0" style="width: 18rem;">
                            <div class="col">
                                <div class="row flex1">
                                    <img src="ani1.jpeg" class="card-img-top img1" alt="...">
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title"><b>Anisha Bhandare</b></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4"> 
                   <div class="row flex1">
                        <div class="card border-0" style="width: 18rem;">
                            <div class="col">
                                <div class="row flex1">
                                    <img src="shrey1.jpeg" class="card-img-top img1" alt="...">
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title"><b>Shreya Bhavsar</b></h6>
                            </div>
                        </div>
                   </div>
                </div>
                <div class="col-4"> 
                    <div class="row flex1">
                        <div class="card border-0" style="width: 18rem;">
                            <div class="col">
                                <div class="row flex1">
                                    <img src="ojasvin.jpeg" class="card-img-top img1" alt="...">
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title"><b>Ojasvin Borawke</b></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
       
    </div>
</div>