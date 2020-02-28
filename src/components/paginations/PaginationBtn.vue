<template>
    <div class="justify-center">

            <ul>
                <li v-for=" n in numOfPages" :key="n">
                    <v-btn @click="setPage(n)" fab x-small primary>
                        {{n}}
                    </v-btn>
                </li>
            </ul>


    </div>
</template>

<script>
    export default {
        name: "PaginationBtn.vue",
        props:{
            initialPage:{default:1},
            data:{default:[]},
            perPage:{default:10}
            },
        data() {
            return {
                currentPage: this.initialPage
            }
        },
        computed: {
                offset() {
                    return ((this.currentPage - 1) * this.perPage);
                },
                limit() {
                    return (this.offset + this.perPage);
                },
                numOfPages() {
                    return Math.ceil(this.data.length / this.perPage);
                },
                computedData(){
                    return this.data.slice(this.offset, this.limit);
            }

        },
        methods: {
            setPage(n) {
                this.currentPage = n;
                if (this.offset > this.data.length) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.currentPage = this.numOfPages;
                }

                this.$emit('clicked',this.computedData)
            }
        },
    }

</script>

<style scoped lang="scss">
    ul {
        list-style: none;
        padding: 0;
        li {
            display: inline;
            padding-right: 5px;
            & :last-child {
                padding-right: 0;
            }
        }
    }
</style>
