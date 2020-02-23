<template>
    <section class="awesome-table">
        <table>
            <thead>
                <tr>
                    <th v-for="(obj, ind) in config" :key="ind">
                        {{ obj.title }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in theData" :key="index">
                    <td v-for="(obj, ind) in config" :key="ind">
                        <span v-if="obj.type === 'text'">{{row[obj.key]}}</span>
                        <span v-if="obj.type === 'date'">{{new Date(row[obj.key]).toLocaleDateString()}} </span>
                        <figure v-if="obj.type === 'image'">
                            <img :src="row[obj.key]" height="60px" />
                        </figure>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    props: ['theData', 'config'],
}
</script>

<style lang="scss">

.awesome-table {
    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
    overflow: auto;
    margin-top: 30px;

    figure {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;

        img {
            border: 1px solid #bbb;
            border-radius: 50%;
            overflow: hidden;
        }
    }

    table {
        border-collapse: collapse;
        width: 100.1%;

        th {
            position: sticky;
            top: 0;
            background: #f1f1f1;
            padding: 10px 5px;
            text-align: left;
            border-bottom: 1px solid #999;
        }
        
        td {
            padding: 5px 5px;
            text-align: left;
        }
    }
}


</style>