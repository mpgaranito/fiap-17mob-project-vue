<template>
    <div>
        This route is for the user ID {{ $route.params.id }}
        
        <span v-if="$route.query">
            <p v-for="query in $route.query">
                {{ query }}
            </p>
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
