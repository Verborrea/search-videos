<script>
	export let data
</script>

<main class="g24">
	<form class="fc fl1 g24" action="search" method="get">
		<a href="/" title="Home">
			<svg height="100" viewBox="0 0 340 168" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path class="gray" d="M0 166.479V1.88067H42.6306C71.5869 1.88067 94.7572 12.6978 94.7572 44.9607C94.7572 60.8794 87.2258 74.9417 70.7143 78.0835C91.1996 80.7138 99.8082 98.6671 99.8082 117.709C99.8082 148.781 80.9571 166.479 50.3082 166.479H0ZM36.1653 141.078C53.5881 141.078 64.8551 136.999 64.8551 117.099C64.8551 96.4471 54.9835 91.6985 36.1653 91.6985V141.078ZM36.1653 67.72C52.781 67.72 63.0367 64.7426 63.0367 45.9767C63.0367 29.9681 50.2111 26.2656 36.1653 26.2656V67.72Z" fill="#FFFEF0"/>
				<path class="gray" d="M102.615 166.479V1.88067H176.158V26.672H138.78V67.5167H167.268V92.7145H138.78V141.891H176.562V166.479H102.615Z" fill="#FFFEF0"/>
				<path class="gray" d="M279.186 166.479V28.9073H254.537V1.88067H340V28.9073H315.553V166.479H279.186Z" fill="#FFFEF0"/>
				<path d="M221.643 166.837C203.014 162.532 193.979 144.049 188.883 127.246L217.534 114.715C220.212 124.012 225.717 142.813 238.949 139.26C252.439 135.639 242.045 115.537 235.541 110.092C219.69 96.4487 198.123 92.3572 182.476 78.2649C168.32 64.8988 162.642 38.4504 173.633 21.7337C183.303 6.72941 206.88 -3.4861 224.593 1.11065C241.201 5.22998 249.902 21.5841 254.442 36.8556L225.385 48.6533C223.168 41.1939 219.563 25.3919 208.847 28.2686C202.363 30.0095 201.264 37.4533 202.787 43.1493C205.882 54.721 214.886 60.0896 224.991 65.1684C238.615 71.9673 252.586 78.1037 263.887 88.597C281.9 104.911 286.421 136.49 268.285 154.316C256.965 165.647 237.061 170.401 221.643 166.837Z" fill="#BC243C"/>
			</svg>
		</a>
		<div class="fc fl1 g24">
			<label for="query">RESULTS FOR</label>
			<input type="text" class="fl1" id="query" name="query" placeholder="CATS" value={data.query}>
			<!-- <label for="query">VIDEOS</label> -->
		</div>
		<button type="submit" class="btn">
			<span class="desktop">SEARCH</span>
			<svg class="mobile" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="var(--text)"><path d="m794.19-94.67-263.24-263.3q-29.98 23.09-70.47 36.27-40.5 13.19-85.83 13.19-116.84 0-197.03-80.27-80.19-80.28-80.19-195.44t80.28-195.32q80.27-80.16 195.43-80.16 115.16 0 195.32 80.25 80.16 80.24 80.16 195.45 0 45.36-12.79 84.33t-37.57 72.32l264.97 263.83-69.04 68.85ZM373.26-404.94q75.75 0 127.34-51.73t51.59-127.2q0-75.46-51.59-127.43-51.59-51.96-127.28-51.96-76.25 0-127.85 51.96-51.6 51.97-51.6 127.43 0 75.47 51.55 127.2 51.54 51.73 127.84 51.73Z"/></svg>
		</button>
	</form>
	<h1>Showing <strong>1000</strong> results for: <strong>{data.query}</strong></h1>
</main>

<style>
	a {
		align-self: stretch;
	}
	.fc {
		display: flex;
		align-items: center;
	}
	.fl1 {
		flex: 1;
	}
	.g24 {
		gap: 24px;
	}
	main {
		display: flex;
		flex-direction: column;
		padding: 24px;
	}
	label, button, input {
		font-weight: 900;
		font-size: 64px;
	}
	button {
		padding: 0 24px;
	}
	input {
		text-align: center;
		width: 150px;
		border-bottom: 8px solid var(--text);
		background: transparent;
		color: var(--text);
	}
	.mobile {
		display: none;
	}
	svg {
		flex-shrink: 0;
		width: auto;
	}
	a:hover .gray{
		fill: var(--accent);
	}
	@media (max-width: 1100px) {
		svg {
			height: 64px;
		}
		label, button, input {
			font-size: 32px;
		}
		h1 {
			font-size: 24px;
		}
		.g24 {
			gap: 16px;
		}
	}
	@media (max-width: 700px) {
		svg {
			height: 32px;
		}
		.desktop, label {
			display: none;
		}
		.mobile {
			display: block;
		}
		h1 {
			font-size: 20px;
		}
		button {
			padding: 8px;
		}
	}
</style>