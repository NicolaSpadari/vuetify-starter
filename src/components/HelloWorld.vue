<template>
    <v-responsive class="d-flex align-center text-center fill-height">
        <v-img
            contain
            height="300"
            src="/logo.svg"
        />

        <div class="text-body-1 font-weight-light mb-n1">
            Hello
        </div>

        <h1 class="text-h2 font-weight-bold">
            Vuetify 3
        </h1>

        <div class="py-14" />

        <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
                <v-btn
                    :href="repoLink"
                    min-width="164"
                    variant="text"
                    target="_blank"
                >
                    <v-icon
                        icon="mdi-github"
                        size="large"
                        start
                    />

                    {{ name }}
                </v-btn>
            </v-col>
        </v-row>
    </v-responsive>
</template>

<script lang="ts" setup>
    const { repoLink, name } = useGithub();
</script>
