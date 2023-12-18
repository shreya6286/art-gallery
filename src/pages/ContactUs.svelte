<script>
    import { onMount } from "svelte";
    import { UserRegistrationSchema } from "../schema/UserRegistrationSchema";
    import { callServerApiSendUserMsg } from "../services/DataService";
    import { goto } from "$app/navigation";

    let users = {};
    let errorObj = {};
    let showStatus = false;
    let stat = '';
    let alreadyShown = false;
    
    async function onSubmit() {
        try {
            users['first_name'] = '';
            users['last_name'] = '';
            users['password'] = '';
            const parse_res = UserRegistrationSchema.parse(users);
            console.log(parse_res);
            const reg_users= await callServerApiSendUserMsg(users);
            console.log(reg_users);
            showStatus = true;
            stat = 'Your message has been sent!';
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

</script>

<style>
    .search-pannel{
        background-color: white;
        height: 70px;
        box-shadow: 5px 5px 15px gray;
        border-radius: 10px;
    }
    .bg{
        background-image: url('bg1.png');
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 30px
    }
    p{
        font-size: 14px;
    }
</style>

<div class="row">
    <div class="row bg">
        <div class="col-2"></div>
        <div class="col-8 p-3 text-center">
            <div class="input-group">
                <input type="text" class="form-control center bg-white p-2" disabled placeholder="Subscribe to our newsletter for the latest updates!">
                <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
        </div>
        <div class="col-2"></div>
    </div>
    <div class="row mt-5">
        <h3 class="text-center">Contact Us</h3>
        <p class="text-center">If you have any questions, we'll be glad to answer them!</p>
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="row mt-2">
                <div class="col-md-4">
                    <hr class="text-success" style="border: 2px solid">
                    <h5 class="mt-4">Contact Information</h5>
                    <p class="mt-3">
                        Phone number: +91 9876543210 <br>
                        Email address: artaxis@gmail.com
                    </p>
                </div>
                <div class="col-md-4">
                    <hr style="color:blueviolet; border: 2px solid">
                    <h5 class="mt-4">Gallery Address</h5>
                    <p>3 Hanover Square, Koregaon Park, Pune, Maharashtra, India</p>
                </div>
                <div class="col-md-4">
                    <hr style="color:red; border: 2px solid">
                    <h5 class="mt-4">Send us a message</h5>
                    <div class="row mt-3">
                        <div class="mb-3">
                            <input type="text" class="form-control form-control-sm" placeholder="Enter full name" bind:value={users.person_name}>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <input type="text" class="form-control form-control-sm" placeholder="Phone number" bind:value={users.phone}>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <input type="email" class="form-control form-control-sm" placeholder="Email address" bind:value={users.email_id}>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control form-control-sm" id="mess" rows="3" placeholder="Write a message..." bind:value={users.message}></textarea>
                        <div class="row px-3 mt-3">
                            <button class="btn btn-primary btn-sm" on:click={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
        <div class="col-md-1"></div>
    </div>
</div>