<script>
    import { goto } from "$app/navigation"
    import { callServerApiGetUserConsign } from "../services/DataService";
    import { onMount } from "svelte";

    function readMore(){
        goto('/read-more')
    }

    let categories = [{
        img: "artCat1.jpeg",
        title: 'Street art',
        loc: '#'
    },
    {
        img: "artCat2.jpeg",
        title: 'Pop art',
        loc: '#'
    },
    {
        img: "artCat5.jpeg",
        title: 'Photography',
        loc: '#'
    },
    {
        img: "artCat7.jpeg",
        title: 'Pre-20th Century',
        loc: '#'
    },
    {
        img: "artCat6.jpeg",
        title: 'Impressionist and Modern art',
        loc: '#'
    },
    {
        img: "artCat8.jpeg",
        title: 'Abstract art',
        loc: '#'
    }
    ]

    let pins = [
        {
        img: "shop1.jpeg",
        title: 'Field',
        year: '2000',
        name: 'Sam Francis',
        price: 'Rs. 15,000'
    },
    {
        img: "shop2.jpeg",
        title: 'Sunset',
        year: '2001',
        name: 'Omar Rayo',
        price: 'Rs. 6,000'
    },
    {
        img: "shop3.jpeg",
        title: "Girl with a lamp",
        year: '2002',
        name: 'Julian Opie',
        price: 'Rs. 19,000'
    },
    {
        img: "shop14.jpeg",
        title: 'Hues',
        year: '2003',
        name: 'Daniel Heidkamp',
        price: 'Rs. 12,500'
    },
    {
        img: "shop5.jpeg",
        title: 'A sunflower field',
        year: '2004',
        name: 'Jen Mann',
        price: 'Rs. 11,000'
    },
    {
        img: "shop6.jpeg",
        title: 'Dried flowers',
        year: '2005',
        name: 'Andie Dinkin',
        price: 'Rs. 50,000'
    },
    {
        img: "shop7.jpeg",
        title: 'Old man with a guitar',
        year: '2006',
        name: 'Damien Hirst',
        price: 'Rs. 40,000'
    },
    {
        img: "shop8.jpeg",
        title: 'Man with cats',
        year: '2007',
        name: 'Keith Haring',
        price: 'Rs. 25,000'
    },
    {
        img: "shop9.jpeg",
        title: 'Stride in the streetlight',
        year: '2008',
        name: 'Banksy',
        price: 'Rs. 8,000'
    },
    {
        img: "shop10.jpeg",
        title: 'Fallen angel',
        year: '2009',
        name: 'Jonas Fisch',
        price: 'Rs. 45,000'
    },
    {
        img: "shop11.jpeg",
        title: 'Obsession',
        year: '2010',
        name: 'RETNA',
        price: 'Rs. 1,150'
    },
    {
        img: "shop12.jpeg",
        title: 'Rainy window',
        year: '2011',
        name: 'Russell Young',
        price: 'Rs. 34,000'
    },
    ]

    let users = {};
    let pic = '';
    let title = '';
    let artist = '';
    let year = '';
    let cost = '';
    let pin = [];

    async function getArtWork() {
        const result= await callServerApiGetUserConsign(users);
        console.log(result);
        pin = result.data
        pin.forEach(element => {
            pic = element.photo;
            title = element.title;
            artist = element.artist_name;
            year = element.art_year;
            cost = element.price;
        });
        console.log(pin)
        return result;
    }

    onMount(()=>{
        getArtWork();
    })

</script>

<style>
    .font1{
        font-size: 12px;
        color: gray;
    }
    a,p, label{
        text-decoration: none;
        color: black;
        font-size: 13px;
        margin-top: 5px;
    }
    .font2{
        font-size: 14px;
    }

    img{
        width: 100%;
    }
    figure {
        margin: 0;
        display: inline-block;
        width: 100%;
    }

    .gallery-container {
        column-count: 3;
        column-gap: 20px 20px;
    }
    .paint{
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .orange{
        background-color: rgb(255, 121, 12);
    }
    .purple{
        background-color: purple;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="row p-5">
            <h2>Collect art and design online</h2>
            <label for="search" class="form-label mt-3 font1">Millions of artworks, styles and collections</label>
            <div class="input-group">
                <input type="text" class="form-control form-control-sm" id="search" aria-describedby="button-addon2" placeholder="Search by...">
                <button class="btn btn-dark" type="button" id="button-addon2"><i class="bi bi-search"></i></button>
            </div>
        </div>
        <div class="row px-5 ps-5">
            {#each categories as cat}
                <div class="col-md-2">
                    <a href={cat.loc}>
                        <img src={cat.img} width="100%" alt="">
                        <p>{cat.title}</p>
                    </a>
                </div>
            {/each}
        </div>
        <div class="row p-5">
            <div class="col-md-3 pe-5">
                <h6><i class="bi bi-filter-left"></i>&nbsp; Filters</h6>
                <hr>
                <p class="mt-4">Rarity</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Unique</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Limited Edition</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Open Edition</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Unknown Edition</label>
                </div>
                <hr>

                <p>Size</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Small <span style="color: gray">(Under 40cm / 16in)</span></label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Medium <span style="color: gray;">(40cm - 100cm / 16in - 40in)</span></label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Large <span style="color: gray;">(Over 100cm / 40in)</span></label>
                </div>
                <hr>

                <p>Price</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Below Rs. 5,000</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Below Rs. 50,000</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Above Rs. 50,000</label>
                </div>

                <label for="price" class="form-label">Price</label>
                <input type="range" class="form-range" min="1000" max="100000" step="5000" id="price">
                <hr>

                <p>Ways to buy</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Purchase</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Bid</label>
                </div>
                <hr>

                <p>Color</p>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="red">
                        <label class="form-check-label" for="red">Red</label>
                    </div>
                    <div class="bg-danger col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="orange">
                        <label class="form-check-label" for="orange">Orange</label>
                    </div>
                    <div class="orange col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="yell">
                        <label class="form-check-label" for="yell">Yellow</label>
                    </div>
                    <div class="bg-warning col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="green">
                        <label class="form-check-label" for="green">Green</label>
                    </div>
                    <div class="bg-success col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="blu">
                        <label class="form-check-label" for="blu">Blue</label>
                    </div>
                    <div class="bg-primary col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="pur">
                        <label class="form-check-label" for="pur">Purple</label>
                    </div>
                    <div class="purple col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>
                <div class="form-check row hstack">
                    <div class="col-10">
                        <input class="form-check-input" type="checkbox" value="" id="bl">
                        <label class="form-check-label" for="bl">Black & White</label>
                    </div>
                    <div class="bg-dark col-2 rounded-5">
                        <div class="paint"></div>
                    </div>
                </div>

            </div>

            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-4 text-end">
                                <p class="form-label font2">Sort by:</p>
                            </div>
                            <div class="col-8">
                                <select class="form-select form-select-sm">
                                    <option selected>Recommended</option>
                                    <option value="1">Recently updated</option>
                                    <option value="2">Recently added</option>
                                    <option value="3">Price: Low to High</option>
                                    <option value="4">Price: High to Low</option>
                                    <option value="5">Artwork year (descending)</option>
                                    <option value="6">Artwork year (ascending)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-container mt-5">
                        {#each pins as pin}
                            <div class="col mb-4">
                                <div class="card">
                                    <img src={pin.img} class="card-img-top">
                                    <div class="card-body">
                                        <h6 class="card-title">{pin.title}</h6>
                                        <p class="card-text">
                                            {pin.name}, {pin.year} <br>
                                            <b>{pin.price}</b>
                                        </p>
                                        <div class="text-end">
                                            <button class="btn btn-warning btn-sm" on:click={readMore}>Read more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                </div>
            </div>
        </div>
    </div>
</div>