<template>
    <v-navigation-drawer v-model="show" temporary>
        <v-list nav>
            <template v-for="page in orderedRoutes">
                <v-list-item v-if="page.name !== '404'" :key="page.path" :to="page.path" :title="String(page.name)" :value="page.path" />
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
    const router = useRouter();
    const { show } = useSidebar();

    const orderedRoutes = computed(() => {
        return router.getRoutes().sort((a, b) => {
            if (a.meta.order < b.meta.order) {
                return -1;
            }
            return 1;
        });
    });
</script>
