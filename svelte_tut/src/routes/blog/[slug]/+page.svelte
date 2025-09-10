<script>
    import { message } from "$lib/index.js";
    let {data} = $props()
</script>


<h1>
    {data.post.title}
</h1>

<div>
    {message}
    {@html data.post.content}

</div>