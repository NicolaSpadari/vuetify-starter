<route>
    {
        name: "About",
        meta: {
            "order": 2
        }
    }
</route>

<template>
    <v-container class="fill-height">
        <CustomCard />
    </v-container>
</template>

<script lang="ts" setup>
    const route = useRoute();

    useHead({
        title: String(route.name),
        meta: [
            {
                name: "description",
                content: "About description"
            }
        ]
    });
</script>
