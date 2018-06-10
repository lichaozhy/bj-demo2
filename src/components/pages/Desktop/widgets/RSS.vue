<template>
    <b-card :title="feed.title"
        class="h-100 rss-widget"
        :sub-title="feed.generator">
        <p class="card-text"
            :title="feed.description">{{feed.description}}</p>
        <ul class="rss-items">
            <li v-for="item in feed.items"
                :key="item.link"><a
                    :href="item.link" target="_blank">{{item.title}}</a></li>
        </ul>
    </b-card>
</template>

<script>
import Widget from '../utils/renderer/Widget.vue';
import RSSParser from 'rss-parser';

const proxy = 'https://cors-anywhere.herokuapp.com/';

export default {
	components: {
		Widget
	},
    props: ['object'],
    data() {
        return {
            feed: {
                items: []
            }
        }
    },
    mounted() {
        const parser = this.parser = new RSSParser();
        const url = this.object.meta.url;

        parser.parseURL(proxy + url, (err, feed) => {
            feed.items.splice(10);

            this.feed = feed;
        });
    }
}
</script>


<style lang="less">
.rss-widget {
    p {
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ul.rss-items {
        padding: 0;

        li {
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
