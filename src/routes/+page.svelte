<script>
	import Footer from "$lib/components/Footer.svelte"

	let query = ''

	$: disabled = query.length === 0
</script>

<svelte:head>
	<title>Best Bideo Search</title>
</svelte:head>

<div class="container">
	<header class="fc g24">
		<a class="fc" href="/">
			<svg class="logo" height="100" viewBox="0 0 340 168" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path class="gray" d="M0 166.479V1.88067H42.6306C71.5869 1.88067 94.7572 12.6978 94.7572 44.9607C94.7572 60.8794 87.2258 74.9417 70.7143 78.0835C91.1996 80.7138 99.8082 98.6671 99.8082 117.709C99.8082 148.781 80.9571 166.479 50.3082 166.479H0ZM36.1653 141.078C53.5881 141.078 64.8551 136.999 64.8551 117.099C64.8551 96.4471 54.9835 91.6985 36.1653 91.6985V141.078ZM36.1653 67.72C52.781 67.72 63.0367 64.7426 63.0367 45.9767C63.0367 29.9681 50.2111 26.2656 36.1653 26.2656V67.72Z" fill="#FFFEF0"/>
				<path class="gray" d="M102.615 166.479V1.88067H176.158V26.672H138.78V67.5167H167.268V92.7145H138.78V141.891H176.562V166.479H102.615Z" fill="#FFFEF0"/>
				<path class="gray" d="M279.186 166.479V28.9073H254.537V1.88067H340V28.9073H315.553V166.479H279.186Z" fill="#FFFEF0"/>
				<path d="M221.643 166.837C203.014 162.532 193.979 144.049 188.883 127.246L217.534 114.715C220.212 124.012 225.717 142.813 238.949 139.26C252.439 135.639 242.045 115.537 235.541 110.092C219.69 96.4487 198.123 92.3572 182.476 78.2649C168.32 64.8988 162.642 38.4504 173.633 21.7337C183.303 6.72941 206.88 -3.4861 224.593 1.11065C241.201 5.22998 249.902 21.5841 254.442 36.8556L225.385 48.6533C223.168 41.1939 219.563 25.3919 208.847 28.2686C202.363 30.0095 201.264 37.4533 202.787 43.1493C205.882 54.721 214.886 60.0896 224.991 65.1684C238.615 71.9673 252.586 78.1037 263.887 88.597C281.9 104.911 286.421 136.49 268.285 154.316C256.965 165.647 237.061 170.401 221.643 166.837Z" fill="#BC243C"/>
			</svg>
		</a>
		<a href="/upload" class="fc btn">
			<div class="desktop">UPLOAD + VIDS</div>
			<svg class="mobile" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="var(--text)"><path d="M431.68-319.25v-322.24l-113.4 113.97-69.09-68.23 231.04-230.48 230.48 230.48-69.19 68.23-113.4-113.97v322.24h-96.44Zm-201.1 185.1q-39.43 0-67.93-28.5-28.5-28.5-28.5-67.93v-135.33h96.43v135.33h498.84v-135.33h96.81v135.33q0 39.46-28.61 67.95-28.61 28.48-68.2 28.48H230.58Z"/></svg>
		</a>
	</header>
	<main class="fc fl1">
		<form class="fc" action="search" method="get">
			<div class="text fc g24">
				<label for="query">I'M LOOKING FOR</label>
				<input type="text" class="fl1" id="query" name="query" placeholder="CAT" bind:value={query}>
				<label for="query">VIDEOS</label>
			</div>
			<button type="submit" class="btn" {disabled}>SEARCH</button>
		</form>
	</main>
	<Footer />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}
	header {
		justify-content: space-between;
		padding: 24px;
	}
	a[href="/upload"], button, label, input {
		font-size: 64px;
		font-weight: 900;
		padding: 0 24px;
	}
	.text {
		width: 100%;
	}
	main {
		justify-content: center;
		align-self: stretch;
	}
	form {
		flex-direction: column;
		padding: 24px;
		gap: 24px;
		align-self: stretch;
		width: 100%;
		justify-content: center;
	}
	input {
		text-align: center;
		width: 150px;
		border-bottom: 8px solid var(--text);
		background: transparent;
		color: var(--text);
	}
	@media (max-width: 1100px) {
		a[href="/upload"], button, label, input {
			font-size: 32px;
		}
	}
	@media (max-width: 700px) {
		a[href="/upload"] {
			height: 56px;
		}
		.logo {
			height: 56px;
		}
		a[href="/upload"] {
			height: auto;
			padding: 8px;
		}
		input {
			width: 100%;
		}
		.text {
			flex-direction: column;
			gap: 0;
			text-align: center;
		}
	}
</style>