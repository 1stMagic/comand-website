<template>
    <main>
        <CmdWidthLimitationWrapper id="iconfont-overview">
            <h1>Iconfonts</h1>
            <p>
                The icons were converted with the great, free <a href="https://icomoon.io/app/" target="icomoon">IcoMoon-App</a>.
                To use an icon add <code>&lt;span class="icon-<em>name</em>"&gt;&lt;/span&gt;</code> in html. The <em>name</em> of an icon is listed below each icon.
                If no readable label/caption is provided, add a tooltip with <code>title="<em>describable text"</em></code> to the <code>&lt;span&gt;</code> for accessibility. <br/>
                All icons (and their tooltips) used in components of the <router-link :to="{name: 'cl-getting-started'}">Component Library</router-link> can be replaced by a property.
                For more details have a look on the property-tab of a certain component inside the
                <router-link :to="{name: 'cl-components'}">component documentation</router-link>.
            </p>
            <div class="flex-container no-gap">
                <CmdFormElement
                    element="input"
                    type="search"
                    id="iconfont-search"
                    labelText="Search icons"
                    placeholder="Search icons"
                    :showLabel="false"
                    :showSearchButton="false"
                    fieldIconClass="icon-search"
                    autofocus="autofocus"
                    v-model="filterIcons"
                />
                <CmdFakeSelect
                    :select-data="listOfIconfonts"
                    type="checkboxOptions"
                    labelText="Search icons"
                    :showLabel="false"
                    class="no-flex"
                    v-model="filterIconsByFont"
                />
            </div>
            <h2>Framework Icons</h2>
            <div class="grid-container-create-columns">
                <div v-for="(icon, index) in filteredFrameworkIcons" :key="index" class="icon">
                    <span :class="icon.iconClass"></span>
                    <span>{{ icon.name }}</span>
                </div>
            </div>
            <hr/>
            <h2>Logos Icons</h2>
            <div class="grid-container-create-columns">
                <div v-for="(icon, index) in filteredLogosIcons" :key="index" class="icon">
                    <span :class="icon.iconClass"></span>
                    <span>{{ icon.name }}</span>
                </div>
            </div>
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
// import components
import {CmdFakeSelect} from "comand-component-library"
import {CmdFormElement} from "comand-component-library"
import {CmdWidthLimitationWrapper} from "comand-component-library"

// import data
import frameworkIcons from "../component-library/generated/frameworkIcons.json"
import logosIcons from "../component-library/generated/logosIcons.json"

export default {
    name: "IconFont",
    components: {
        CmdFakeSelect,
        CmdFormElement,
        CmdWidthLimitationWrapper
    },
    data() {
        return {
            filterIcons: "",
            sortedFrameworkIcons: this.sortIcons(frameworkIcons),
            sortedLogosIcons: this.sortIcons(logosIcons),
            filterIconsByFont: [1, 2],
            listOfIconfonts: [
                {
                    text: "Framework Iconfont",
                    value: 1
                },
                {
                    text: "Logos Iconfont",
                    value: 2
                }
            ]
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

<style lang="scss">
#iconfont-overview {
    section {
        padding-top: 2rem;

        p code {
            display: inline;
        }

        .icon {
            display: flex;
            flex-direction: column;
            gap: calc(var(--default-gap) / 4);
            align-items: center;
            text-align: center;

            span {
                margin: 0;
                font-size: 1.2rem;
                line-height: 120%;

                &[class*="icon"] {
                    font-size: 3rem;
                }
            }
        }
    }
}
</style>