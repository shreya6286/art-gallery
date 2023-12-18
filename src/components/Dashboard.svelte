<style>
    .bg{
        background-image: url('home.png');
        background-size: contain;
        background-repeat: no-repeat;
        /* background-position: right; */
        width: 100%;
        height: calc(100vh - 55px);
        /* height: 100vh; */
        overflow-y: hidden;
        overflow-x: hidden;
    }
    .flex1{
        display: flex;
        align-items: center;
    }
    .box{
        background-color: aqua;
        height: 10%;
        width: 10%;
        position: relative;
        animation-name: example;
        animation-duration: 10s;
        animation-iteration-count: infinite;
    }
    @keyframes example {
        0%   {left:0px; top:0px; width: 10%; height: 10%;}
        20%  {left:60%; transform: skewY(-10deg) rotateY(60deg) ; width: 10%; height: 10%;}
        /* 45%  {left:58%;  width: 10%; height: 10%;} */
        /* 65%  {left:65%; transform: skewY(-10deg) rotateY(60deg); transform-origin: top left; width: 30%; height: 30%;} */
        35%  {left:60%; transform: skewY(-10deg) rotateY(60deg) scale(3,2); transform-origin: top left;}
        50%  {left:60%; transform: skewY(-10deg) rotateY(60deg) scale(1,1); transform-origin: top left;}
        70%  {left:81%; transform: skewY(-10deg) rotateY(60deg); width: 10%; height: 10%;}
        85%  {left:86%; transform: skewY(-30deg) rotateY(-60deg); width: 10%; height: 10%;}
        100%  {left:93%; transform:  skewY(-30deg) rotateY(-60deg) rotateX(0deg) rotateZ(0deg); width: 10%; height: 10%;}
    }
</style>

<div class="container-fluid">
    <div class="row">
        <!-- <img src="home.png" alt=""> -->
        <div class="col bg">
            <!-- <div class="box"></div> -->
        </div>
    </div>
</div>
