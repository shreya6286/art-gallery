<script>
    import { onMount } from "svelte";
    import { callServerApi, callServerApiGetUserAcc } from "../services/DataService";
    import { UserRegistrationSchema } from "../schema/UserRegistrationSchema";
    import { goto } from "$app/navigation";

    let users = {};
    let errorObj = {};
    let showStatus = false;
    let stat = '';
    let alreadyShown = false;

    onMount(()=>{
        getUserAccounts();
    })

    async function getUserAccounts() {
        const result = await callServerApiGetUserAcc(users);
        console.log(result);
    }
    
    async function onSubmit() {
        try {
            users['person_name'] = '';
            const parse_res = UserRegistrationSchema.parse(users);
            console.log(parse_res);
            const reg_users= await callServerApiGetUserAcc(users);
            console.log(reg_users);
            if (reg_users.data.length > 0) {
                stat = 'Registeration failed, user already registered';
                showStatus = true;
                setTimeout(()=>{
                    stat = '';
                    showStatus = false;
                }, 5000)
            }
            else {
                stat = 'User has registered successfully, please wait...';
                const ins_result = await callServerApi(users);
                console.log(ins_result);
                showStatus = true;
                setTimeout(()=>{
                    stat = '';
                    showStatus = false;
                    goto('/login')
                }, 3000)
            }
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
    .bg{
        background-image: url('login-bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: calc(100vh - 60px);
        overflow-y: hidden;
    }
    a{
        text-decoration: none;
    }
    .font1{
		font-size: 13px;
	}
    .bg-col{
        background-color: #DDD5D2;
    }
    .flex1{
        display: flex;
        align-items: center;
    }
    .font1{
        font-size: 14px;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-1 bg-col"></div>
        <div class="col-md-11 p-5 bg flex1">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4 bg-white p-5 rounded">
                    <div class="row">
                        <center class="mb-2">
                            <h1 style="font-family: 'Dancing Script';">Register</h1>
                            <p class="font1">Already registered? <a href="/login">Login</a> now</p>
                        </center>
                        <div class="row mt-1">
                           <div class="col-md-6">
                                <div class="mb-2">
                                    <label for="fname" class="form-label font1">First name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control form-control-sm" id="fname" bind:value={users.first_name} required>
                                </div>
                           </div>
                           <div class="col-md-6">
                                <div class="mb-2">
                                    <label for="lname" class="form-label font1">Last name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control form-control-sm" id="lname"  bind:value={users.last_name} required>
                                </div>
                           </div>
                        </div>
                        <div class="row">
                            <div class="mb-2">
                                <label for="mob" class="form-label font1">Mobile number <span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-sm" id="mob"  bind:value={users.phone} required>
                            </div>
                            <div class="mb-2">
                                <label for="email" class="form-label font1">Email address <span class="text-danger">*</span></label>
                                <input type="email" class="form-control form-control-sm" id="email"  bind:value={users.email_id} required>
                            </div>
                            <div class="mb-2">
                                <label for="pass" class="form-label font1">Password <span class="text-danger">*</span></label>
                                <input type="password" class="form-control form-control-sm" id="pass"  bind:value={users.password} required>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <!-- <div class="col-md-6"> -->
                                <a href="/register" class="btn btn-sm btn-primary form-control" on:click={onSubmit}>Submit</a>
                                   <div class="row">
                                    {#if showStatus }
                                        <p class="text-danger text-center mt-3 mb-0 font1">
                                            { stat }
                                        </p>
                                    {/if}
                                        {#if  alreadyShown }
                                            <p class="text-danger text-center mt-3 mb-0 font1">
                                                {#if Object.keys(errorObj).length > 0}
                                                    { stat }
                                                {/if}
                                            </p>
                                        {/if}
                                   </div>
                            <!-- </div> -->
                            <!-- <div class="col-md-6">
                                <a href="/login" class="btn btn-sm btn-secondary form-control">Login</a>       
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6"></div>
            </div>
        </div>
    </div>
</div>
