<script>
    import { UserConsignSchema } from "../schema/UserConsignSchema";
    import { callServerApiSendUserConsign } from "../services/DataService";
    import { getBase64 } from "../services/DataService";

    let users = {};
    let errorObj = {};
    let showStatus = false;
    let stat = '';
    let alreadyShown = false;
    
    async function onSubmitArtDetails() {
        try {
            const parse_res = UserConsignSchema.parse(users);
            console.log(parse_res);
            console.log(users);
            const reg_users= await callServerApiSendUserConsign(users);
            console.log(reg_users);
            showStatus = true;
            stat = 'Your artwork has been stored!';
            setTimeout(()=>{
                    stat = '';
                    showStatus = false;
                }, 5000)
        }
        catch (err) {
            console.log(err)
            errorObj = err.flatten().fieldErrors;
            let key = Object.keys(errorObj)[0];
            stat = key + ' - ' + errorObj[key][0];
            alreadyShown = true;
            setTimeout(()=> {
                stat = '';
                alreadyShown = false;
            }, 5000)
            console.log(errorObj[key][0]);
        }
    }

    async function getAttach(event){
        let files = event.target.files;
        if (files && files.length > 0){
            users['photo'] = await getBase64(files)
        }
        console.log(files[0].name);
    }
    
</script>

<style>
    p{
        font-size: 12px;
    }
    label, input, option, a, h6{
        font-size: 14px;
    }
    a{
        color: gray;
        text-decoration: none;
        float: right;
    }
    .font1{
        font-size: 14px;
    }
</style>

<div class="container-fluid">
    <div class="row">
        {#if showStatus }
            <p class="text-danger text-center mt-3 mb-0 font1">
                { stat }
            </p>
        {/if}
            {#if alreadyShown }
                <p class="text-danger text-center mt-3 mb-0 font1">
                    {#if Object.keys(errorObj).length > 0}
                        { stat }
                    {/if}
                </p>
            {/if}
    </div>
    <div class="row mt-5">
        <h4>Tell us about your artwork</h4>
        <p>All fields are required to submit a work</p>
    </div>
    <div class="row mt-3">
        <div class="col-md-6 mb-3">
            <label for="artist" class="form-label">Artist <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-sm" id="artist" placeholder="Enter full name" bind:value={users.artist_name}>
        </div>
        <div class="col-md-6 mb-3">
            <label for="title" class="form-label">Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-sm" id="title" placeholder="Add title or write 'Unknown'" bind:value={users.title}>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="mat" class="form-label">Materials <span class="text-secondary">(Optional)</span></label>
            <input type="text" class="form-control form-control-sm" id="mat" placeholder="Add materials" bind:value={users.materials}>
        </div>
        <div class="col-md-4 mb-3">
            <label for="year" class="form-label">Year <span class="text-danger">*</span></label>
            <input type="text" class="form-control form-control-sm" id="year" placeholder="YYYY" bind:value={users.art_year}>
        </div>
        <div class="col-md-4 mb-3">
            <label for="rare" class="form-label">Rarity <span class="text-danger">*</span></label>
            <a href="#" data-bs-toggle="modal" data-bs-target="#rare">What is this?</a>
            <select class="form-select form-select-sm" aria-label="Default select example" bind:value={users.rarity}>
                <option selected>Select a classification</option>
                <option value="1">Unique</option>
                <option value="2">Limited Edition</option>
                <option value="3">Open Edition</option>
                <option value="4">Unknown Edition</option>
            </select>

            <div class="modal fade" tabindex="-1" id="rare">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Rarity classifications</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li>
                                <h6>Unique</h6>
                                <p>One-of-a-kind piece</p>
                            </li>
                            <li>
                                <h6>Limited edition</h6>
                                <p>The edition run has ended; the number of works produced is known and included in the listing.</p>
                            </li>
                            <li>
                                <h6>Open edition</h6>
                                <p>The edition run is ongoing. New works are still being produced, which may be numbered. This includes made-to-order works.</p>
                            </li>
                            <li>
                                <h6>Unknown edition</h6>
                                <p>The edition run has ended; it is unclear how many works were produced.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="row pb-4">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="row">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        <div class="col-1"></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="text" class="form-control form-control-sm" id="price" placeholder="Add price" bind:value={users.price}>
        </div>
        <div class="col-md-4 mb-3">
            <label for="prove" class="form-label">Provenance <span class="text-secondary">(Optional)</span></label>
            <a href="#" data-bs-toggle="modal" data-bs-target="#provenance">What is this?</a>
            <input type="text" class="form-control form-control-sm" id="prove" placeholder="Describe how you acquired the work" bind:value={users.provenance}>

            <div class="modal fade" tabindex="-1" id="provenance">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Artwork provenance</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Provenance is the documented history of an artwork’s ownership and authenticity.</p>
                        <p>Please list any documentation you have that proves your artwork’s provenance, such as:</p>
                        <ul>
                            <li>
                                <p>Invoices from previous owners</p>
                            </li>
                            <li>
                                <p>Certificates of authenticity</p>
                            </li>
                            <li>
                                <p>Gallery exhibition catalogues</p>
                            </li>
                        </ul>
                    </div>
                    <div class="row pb-4">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="row">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        <div class="col-1"></div>
                    </div>
                  </div>
                </div>
            </div>


        </div>
        <div class="col-md-4 mb-3">
            <label for="mob" class="form-label">Medium <span class="text-danger">*</span></label>
            <select class="form-select form-select-sm" aria-label="Default select example" bind:value={users.medium}>
                <option selected>Type of art form</option>
                <option value="1">Street art</option>
                <option value="2">Pop art</option>
                <option value="3">Photography</option>
                <option value="4">Pre-20th Century art</option>
                <option value="5">Impressionist and Modern art</option>
                <option value="6">Abstract art</option>
            </select>
        </div>
    </div>

    <div class="row mt-2">
        <div class="col-md-3 mb-3">
            <label for="artist" class="form-label">Height <span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="number" class="form-control form-control-sm" bind:value={users.height}>
                <span class="input-group-text font1">in</span>
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="artist" class="form-label">Width <span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="number" class="form-control form-control-sm" bind:value={users.width}>
                <span class="input-group-text font1">in</span>
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="artist" class="form-label">Depth</label>
            <div class="input-group">
                <input type="number" class="form-control form-control-sm" bind:value={users.depth}>
                <span class="input-group-text font1">in</span>
            </div>
        </div>
        <div class="col-md-3 mb-3 hstack">
            <div class="row">
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                          in
                        </label>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                          cm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="mt-5">

    <div class="row mb-5">
        <div class="row mt-5">
            <h4>Upload photos of your artwork</h4>
            <p>To evaluate your submission faster, please upload high-quality photos of the work's front and back. <br>
                If possible, include photos of any signatures or certificates of authenticity.
            </p>
        </div>
        
        <div class="row border p-5 mt-4">
            <h5>Drag and drop photos here</h5>
            <p>Files supported: JPG, PNG, JPEG <br>
                Total maximum size: 100 KB
            </p>
            <div class="col mt-3">
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Photo</label>
                    <input type="file" class="form-control" id="inputGroupFile01" on:change={getAttach}>
                </div>
            </div>
        </div>
        
        <div class="row mt-4">
            <div class="col">
                <button class="btn btn-dark rounded-5 px-3 ps-3" on:click={onSubmitArtDetails}>Submit Artwork</button>
            </div>
        </div>
    </div>
</div>