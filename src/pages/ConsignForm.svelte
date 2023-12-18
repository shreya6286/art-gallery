<script>
    import ArtworkDetails from "../components/ArtworkDetails.svelte";
</script>
<div class="container-fluid">
    <div class="row mt-5">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <ul class="nav nav-tabs">
                <!-- <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Contact Information</a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link active" aria-disabled="true">Artwork Details & Upload Photos</a>
                </li>
            </ul>
            <!-- <ContactInfo/> -->
            <ArtworkDetails/>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>