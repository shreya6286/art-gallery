<style>
    p{
        font-size: 12px;
    }
    label, input, option{
        font-size: 14px;
    }
</style>

<div class="container-fluid">
    <div class="row mt-5">
        <h4>Let us know how to reach you</h4>
        <p>We will only use these details to contact you regarding your submission.</p>
    </div>
    <div class="row mt-3">
        <div class="col-md-6 mb-3">
            <label for="fname" class="form-label">First name</label>
            <input type="text" class="form-control form-control-sm" id="fname">
        </div>
        <div class="col-md-6 mb-3">
            <label for="lname" class="form-label">Last name</label>
            <input type="text" class="form-control form-control-sm" id="lname">
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control form-control-sm" id="email">
        </div>
        <div class="col-md-6 mb-3">
            <label for="mob" class="form-label">Phone number</label>
            <input type="text" class="form-control form-control-sm" id="mob">
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Country</label>
            <input type="email" class="form-control form-control-sm" id="email">
        </div>
        <div class="col-md-6 mb-3">
            <label for="mob" class="form-label">Best time to call</label>
            <select class="form-select form-select-sm" aria-label="Default select example">
                <option selected>Choose time</option>
                <option value="1">Urgent</option>
                <option value="2">2 to 4 weeks</option>
                <option value="3">1 to 2 months</option>
                <option value="4">2 to 4 months</option>
                <option value="5">Not important</option>
            </select>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <button class="btn btn-dark rounded-5 px-3 ps-3">Save and Continue</button>
        </div>
    </div>
</div>