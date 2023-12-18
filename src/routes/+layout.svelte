<script>
	import { callServerApiGetUserAcc } from "../services/DataService";
	// import userName
	// let notLoggedIn = false;
	// let isLoggedIn = false;

	let users = {};
</script>

<style>
	.font1{
		font-size: 14px;
	}
	li{
		margin-left: 5px;
	}
</style>

<nav class="navbar navbar-expand-lg">
	<div class="container-fluid">
		<a class="navbar-brand mx-4" href="/">
			<img src="logo4.png" width="21" height="21" class="d-inline-block align-text-top">&nbsp; ArtAxis
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
				<li class="nav-item">
					<a class="nav-link active font1" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link font1" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link font1" href="/consign">Consign artwork</a>
				</li>
				<li class="nav-item">
					<a class="nav-link font1" href="/shop">Shop</a>
				</li>
				<li class="nav-item">
					<a class="nav-link font1" href="/contact-us">Contact us</a>
				</li>
			</ul>
			<form class="d-flex">
				<a href="/login" class="btn btn-outline-dark px-3 ps-3 rounded-3 mx-3 btn-sm">Login</a>
				<a href="/register" class="btn btn-dark rounded-3 px-3 ps-3 me-3 btn-sm">Create Account</a>
			</form>
		</div>
	</div>
  </nav>

  <slot/>
