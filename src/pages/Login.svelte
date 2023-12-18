<script>
    import { onMount } from "svelte";
    import { callServerApi, callServerApiGetUserAcc } from "../services/DataService";
    import { UserRegistrationSchema } from "../schema/UserRegistrationSchema";
    import { goto } from "$app/navigation";

    let users = {};
    let stat = '';
    let showStatus = false;
    let errorObj = {};
    let alreadyShown = false;

    onMount (()=>{
        onLoginClick();
    })

    async function onLoginClick() {
        try {
            users['first_name'] = '';
            users['person_name'] = '';
            users['last_name'] = '';
            users['message'] = '';
            users['email_id'] = 'shreyabhavsar@gmail.com';
            const parse_res = UserRegistrationSchema.parse(users);
            const reg_users= await callServerApiGetUserAcc(users);
            console.log(reg_users);
            if (reg_users.data.length > 0) {
                stat = 'User has logged in successfully, please wait...';
                showStatus = true;
                userName = users.phone;
                console.log(userName)
                setTimeout(()=>{
                    stat = '';
                    showStatus = false;
                    goto('/')
                }, 5000)
            }
            else {
                stat = 'User not registered';
                showStatus = true;
                setTimeout(()=>{
                    stat = '';
                    showStatus = false;
                    goto('/register')
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
</style>

<div class="container-fluid">
    <div class="row">
        <div class="col-md-1 bg-col"></div>
        <div class="col-md-11 p-5 bg flex1">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4 bg-white p-5 rounded">
                    <div class="row">
                        <center>
                            <h1 style="font-family: 'Dancing Script';">Login</h1>
                        </center>
                        <div class="row mt-5">
                            <!--Email_box-->
                                <input id="mob" type="text" class="form-control mb-3 form-control-sm" placeholder="Enter Phone number" bind:value={users.phone}>
                             <!--Password-->
                                <input id="pass" type="password" class="form-control form-control-sm" placeholder="Enter Password" bind:value={users.password}>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <!--Remember_box-->
                                <input id="remember" type="checkbox" value="Remember" name="Remembercheck">
                                <label for="Remembercheck" class="font1">Remember me</label>
                            </div>
                            <div class="col-md-6 text-end">
                                <!--Forgot_password-->
                                <a href="#" class="font1">Forgot password?</a>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <a href="/register" class="btn btn-sm btn-secondary form-control">Register</a>
                            </div>
                            <div class="col-md-6">
                                <a href="/login" class="btn btn-sm btn-secondary form-control" on:click={onLoginClick}>Login</a>       
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-5 p-0"><hr></div>
                            <div class="col-2 text-center p-0 mt-1">or</div>
                            <div class="col-5 p-0"><hr></div>
                        </div>
                        <!-- <hr class="mt-4"> -->
                        <div class="row mt-2">
                            <button type="button" class="btn btn-sm btn-primary mb-3"> <i class="bi bi-google"></i> &nbsp; Continue with Google</button>
                            <button type="button" class="btn btn-sm btn-primary mb-3"> <i class="bi bi-facebook"></i> &nbsp; Continue with Facebook</button>
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
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6"></div>
            </div>
        </div>
    </div>
</div>
