<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
               errorMessage: error.message
			}
		};
	}
</script>

<script>
	export let status;
    export let errorMessage;

</script>


<section>
    <div class=" align-middle">
        <h2 class="text-shadow bigH2">{status}</h2>
        <p class="text-center">
            {#if status == 404 }
            <strong>This site doesn't exists in this universe. <br> Switch to another parallel universe or </strong
                ><br />
                {:else}
                <strong>{errorMessage} </strong
                    ><br />
            {/if}
         
        </p>
        <div class="d-flex justify-content-center pt-3">
            <a class="btn btn-primary" href="/">Go back to home</a>
        </div>
    </div>
</section>
