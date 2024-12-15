<script lang="ts">
    export let company: string = '';
    export let role: string = '';
    export let icon: string = '';
    export let description: string = '';
</script>

<div class="container gap-16 mb-10">
<div
    class="p-4 sm:p-6 md:p-8 flex flex-col mr-auto gap-4 mr-black text-center cursor-pointer group hover:border-violet-400 duration-200"
>
    <div
        class="bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={icon}></i>
    </div>
    <h3 class="text-violet-400 font-bolder text-xl sm:text-2xl md:text-3xl">
        {role}
    </h3>
    <p class="company text-violet-400 text-lg sm:text-xl md:text-2xl">
        {company}
    </p>
    <p class="text-base sm:text-lg md:text-xl">
        {description}
    </p>
    <slot />
    
</div>
</div>

<style>
    .container:hover h3{
        color: whitesmoke;
        letter-spacing: 8px;
        font-weight: 900;
        text-decoration: underline orchid;
        text-underline-offset: 8px;
        transition-duration: 600ms

    }
    .container h3{
        color: whitesmoke;
        letter-spacing: 8px;
        font-weight: 900;
        text-decoration: underline orchid;
        text-underline-offset: 8px;
        transition-duration: 600ms

    }
    .container{
        background: rgba(0, 0, 0, 0.8);
        border: 5px solid black;
        /* box-shadow: 0px 0px 20px indigo; */
        
    }
    .container:hover{
        box-shadow: 0px 0px 80px indigo
    }

</style>
