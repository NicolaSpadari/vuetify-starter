<route>
    {
        name: "Home",
        meta: {
            "order": 1
        }
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
