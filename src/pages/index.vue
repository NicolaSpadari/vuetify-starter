<route>
{
    name: "Home"
}
</route>

<template>
    <v-container class="fill-height">
        <HelloWorld />
    </v-container>
</template>

<script lang="ts" setup>
    const route = useRoute();

    useHead({
        title: String(route.name),
        meta: [
            {
                name: "description",
                content: "Homepage description"
            }
        ]
    });
</script>
