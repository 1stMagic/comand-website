<template>
    <main>
        <CmdWidthLimitationWrapper id="faq">
            <h1>FAQ</h1>
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why is CoManD written with one m only?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
            >
                <template #body>
                    <div style="padding: 1rem;">
                <p>CoManD' is an acronym for COntent MANagement and Distribution."</p>
                    </div>
                </template>
            </CmdBox>
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why is the Frontend Framework plain HTML and CSS?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="The Frontend Framework should run natively without an additional technology or compiler.
                   It should work as a foundation of every project you build independent from further technologies you use."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why is CoManD-Software desktop first?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="Most web sites are viewed on desktop first. The desktop version, especially for large platforms
                must be planed very precise and the user interface and the entire look-and-feel should work together.
                Planning complex interfaces first and reducing elements for mobil is often (not always) easier than to add
                element and arrange them later for desktop-view. However in the end it does not matter, because the result is the same
                on each device. But we recommend to go desktop first if you want to avoid style collisions in your project."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'How do I change the CSS-breakpoints for the Frontend Framework?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="You cannot change them. Of course you could create your own custom stylesheet and add new breakpoints,
                but then you have to overwrite all styling from the default breakpoints as well, which would be not very practicle.
                Therefore we just put all the basic settings (for large screen resolutions) into framework.css. If you do not want
                to use the styling for screen resolutions lower than 1024px in width, just do not import the breakpoints.css-file
                and create your own styles for any screen resolution you want in a custom css-file."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'How do I change the CSS-breakpoints for the Component Library?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="You have to be careful if you want to change the CSS-breakpoints for the Component-Library. You have
to define your own custom breakpoints for the Frontend Framework as explained in this FAQ first.
                The breakpoints for the Component Library itself can be changed in variables.scss and should fit to those you defined for the Frontend Framework."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why does the Component Library use SCSS instead off native CSS?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="We believe that SCSS is just a transition technology. We also believe that native CSS is easier to handle and creates far better and performant code.
                SCSS requires compling and has some other disadvantages, but it also has some advantages CSS does not have - i.e. Nesting selectors to avoid redundancy in coding.
                Additionaly mixins can be useful as well, but we try to avoid those by smart CSS structure, if possible. The last advandatage that was important to us is the possibility
                to use variables in media queries i.e. to define breakpoints."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why does the Component Library use SCSS but not SCSS-variables or -functions',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="Because it is not necessary. If you code smart CSS3, functions can be replaced easily. For calculations we just use CSS-calc-function and
variables can be uses in native CSS for a ong time already. Additionally we want the Component Library to use the values defined for the CSS-variables of the Frontend Framework
 - no need to define everything again in SCSS-variables."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Can I uses SCSS-variables if I use the Component Library?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="Tho it is not recommended, because we just use CSS-variables (except for breakpoints), but of course you can.
                Just add SCSS-variables in variables.scss or define you own file and use it in your project.
                Nevertheless it is highly recommended to use CSS-variables instead to stay consistent, especially referring to the different
                behavior of SCSS- and CSS-variables relating to their scope."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Will the SCSS be removed if nesting and media query-variables will be implemented in pure CSS?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="Due to the fact that w3c has nesting and a wider use of CSS-variables already on its list, we will transfer everything
which requires SCSS now into native CSS as far as all major browsers will support it."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Can I use other units like Pixel or Em in my CSS?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="Of course you can, but to avoid confusion we recommend just to use Rem, Percentage or Fractions to stay consistent."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why is 1 Rem defined as 10px and not as 16px?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="We think 16px is just harder to handle so we defined 1Rem as 10px.
I.e. if you want to set a size of 29px with the default 16px you have to calculate it to 1.8125rem (if you want to use Rem).
If you use 10px as default, 29px equals 2.9rem which is far easier to calculate for most people."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Why does CoManD-software use HSL(A) instead of Hex or RGB to define colors?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="HSL is far easier to handle, especially if you are not very familiar with handling colors in general
or using Hex or RGB at all. In HSL you can change the color more intuitively. I.e. if you want to use blue-color but not fully saturated,
you can just reduce the value for S(aturation). In Hex and RGB you have to get completely new values for all channels. 
You want to raise the lightness of your color by exactly by 10%? Just raise the value for L(ightness) by 10. You cannot do those changes that easily with Hex or RGB."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Can I still use Hex- or RGB-colors even tho CoManD-software uses HSL?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="You can, but it is not recommended to stay consistent. But of course you can define your own colors (or overwrite existing ones)
in your custom css-file, but there is no advantage in doing it (compared to using HSL instead)."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'How could I overwrite existing CSS-variables?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="Just have a look at the top of frontend.css in the Frontend Framework. There you will find all CSS-variables defined.
If you want to overwrite them, just copy their names and put the in a custom.css (which should be imported last in your project) and define them new."
            />
            <CmdBox
                :cmdCustomHeadline="{
                                headlineText: 'Do I also have to use VUE3 if I want to use the Component Library?',
                                headlineLevel: 2
                            }"
                :collapsible="true"
                textBody="You have. We wanted to use the newest features of VUE, that's why we use VUE3."
            />
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
// import components
import {
    CmdBox,
    CmdWidthLimitationWrapper
} from "comand-component-library"

export default {
    name: "Faq.vue",
    components: {
        CmdBox,
        CmdWidthLimitationWrapper
    },
}
</script>

<style scoped>

</style>