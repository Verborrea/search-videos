<script>
	export let name, tags, url, thumbnail;
</script>

<div class="container">
	<a href={url} target="_blank">
		<img src={thumbnail} alt={name}>
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="24" cy="24" r="22" stroke="#FFFEF0" stroke-width="4"/>
			<path d="M34 24L19 32.6603L19 15.3397L34 24Z" fill="#FFFEF0"/>
		</svg>	
	</a>
	<p>{name}: <span>{tags.join(', ')}</span></p>
</div>

<style>
	a {
		position: relative;
		padding: 0;
		border: 0;
		cursor: pointer;
		width: 100%;
	}
	span {
		color: gray;
	}
	img {
		width: 100%;
		object-fit: cover;
		height: 240px;
		background: gray;
    	display: block;
	}
	p {
		background: var(--background);
		text-align: start;
		padding: 8px 0;
		z-index: 1;
		bottom: 0;
		color: var(--text);
		font-size: 20px;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: none;
	}
	a:hover img {
		filter: brightness(0.75);
	}
	a:hover svg {
		display: block
	}
</style>