<script>
	import { fly } from "svelte/transition";

	let placeholder = "drop ur vid here"
	let loading = false
	let done = false

	function change(e) {
		if (e.target.files.length > 0) {
			placeholder = e.target.files[0].name
			disabled = false
		} else {
			disabled = true
		}
	}

	function upload() {
		loading = true
		setTimeout(()=>{
			loading = false
			done = true
			document.querySelector('#video').value = ""
			placeholder = "drop ur vid here"
		}, 2000)
	}

	$: if (done === true) {
		setTimeout(()=>{
			done = false
		}, 3000)
	}
	$: disabled = placeholder === "drop ur vid here"
</script>

<svelte:head>
	<title>Upload | Best Bideo Search</title>
</svelte:head>

{#if done}
<div class="toast" transition:fly={{ y: -100 }}>
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--background)"><path d="m424-276 304-304-74-74-230 230-116-116-74 74 190 190Zm56 228q-89.64 0-168.48-34.02-78.84-34.02-137.16-92.34-58.32-58.32-92.34-137.16T48-480q0-89.9 34.08-168.96 34.08-79.07 92.5-137.55Q233-845 311.74-878.5 390.48-912 480-912q89.89 0 168.94 33.5Q728-845 786.5-786.5t92 137.58q33.5 79.09 33.5 169 0 89.92-33.5 168.42Q845-233 786.51-174.58q-58.48 58.42-137.55 92.5Q569.9-48 480-48Zm0-106q136.51 0 231.26-94.74Q806-343.49 806-480t-94.74-231.26Q616.51-806 480-806t-231.26 94.74Q154-616.51 154-480t94.74 231.26Q343.49-154 480-154Zm0-326Z"/></svg>
	SUCCESSFULLY UPLOADED
</div>
{/if}
<a href="/" class="btn">GO BACK</a>
<form action="/upload" method="get" on:submit|preventDefault={upload}>
	<label for="video">
		<div class="srq top lef"></div>
		<div class="srq top rig"></div>
		<div class="srq bot lef"></div>
		<div class="srq bot rig"></div>
		<h1>{placeholder}</h1>
	</label>
	<input type="file" name="video" id="video" hidden on:change={change} accept="video/mp4,video/x-m4v,video/*">
	<button type="submit" class="btn" disabled={disabled || loading}>
		{loading ? "LOADING" : "UPLOAD"}
	</button>
</form>

<style>
	.btn {
		font-size: 100px;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 149px);
		gap: 64px;
	}
	button {
		padding-inline: 1ch;
	}
	label {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background: var(--background);
		width: 316px;
		height: 276px;
	}
	h1 {
		text-align: center;
	}
	.top { top: -8px }
	.rig { right: -8px }
	.lef { left: -8px }
	.bot { bottom: -8px }

	.srq {
		position: absolute;
		background: var(--accent);
		height: 70px;
		width: 70px;
		z-index: -1;
	}
	@media (max-width: 1000px) {
		.btn {
			font-size: 64px;
		}
		form {
			min-height: calc(100vh - 95px);
		}
	}
	@media (max-width: 700px) {
		.btn {
			font-size: 32px;
		}
		label {
			width: calc(100% - 64px);
			height: 250px;
		}
	}
</style>