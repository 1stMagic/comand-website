<template>
    <main>
        <h1>Icon Fonts</h1>
        <CmdFormElement
            element="input"
            type="search"
            id="component-search"
            labelText="Search icons"
            placeholder="Search icons"
            :showLabel="false"
            :showSearchButton="false"
            fieldIconClass="icon-search"
            v-model="filterIcons"
        />
        <h2>Framework Icons</h2>
        <div class="grid-container-create-columns">
            <div v-for="(icon, index) in filteredFrameworkIcons" :key="index">
                <span :class="icon.iconClass"></span>
                <span>{{ icon.name }}</span>
            </div>
        </div>
        <hr/>
        <h2>Logos Icons</h2>
        <div class="grid-container-create-columns">
            <div v-for="(icon, index) in filteredLogosIcons" :key="index">
                <span :class="icon.iconClass"></span>
                <span>{{ icon.name }}</span>
            </div>
        </div>
    </main>
</template>

<script>
import {CmdFormElement} from "comand-component-library"

import frameworkIcons from "../component-library/generated/frameworkIcons.json"
import logosIcons from "../component-library/generated/logosIcons.json"

export default {
    name: "IconFont",
    components: {CmdFormElement},
    data() {
        return {
            filterIcons: "",
            sortedFrameworkIcons: this.sortIcons(frameworkIcons),
            sortedLogosIcons: this.sortIcons(logosIcons)
        }
    },
    computed: {
        filteredFrameworkIcons() {
            return this.filteredIcons(this.sortedFrameworkIcons)
        },
        filteredLogosIcons() {
            return this.filteredIcons(this.sortedLogosIcons)
        }
    },
    methods: {
        filteredIcons(iconFont) {
            const filterTerm = this.filterIcons.trim().toLowerCase()

            if (filterTerm) {
                return iconFont.filter((item) => {
                    return item.name.toLowerCase().includes(filterTerm)
                })
            }
            return iconFont
        },
        sortIcons(icons) {
            return icons.sort((a, b) => {
                // compare icon-names to sort alphabetical
                return a.name.localeCompare(b.name)
            })
        }
    }
}
</script>

<style scoped>

</style>