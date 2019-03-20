<template lang="pug">
.flex-wrap
  .header 我是头部菜单
  .content
    scroller(@pulldown="refresh" :data="list" @scrollToEnd="loadMore" :pullup="pullup")
      .list(v-for="item in list")
        .name 姓名：{{item.name}}
        .phone 手机号码：{{item.phone}}
        .email 电子邮箱{{item.email}}
  .footer 我是底部菜单
</template>

<script>
import scroller from "$components/scroller";
import { getData } from "$api";

export default {
  name: "app",
  data() {
    return {
      list: [],
      start: 1,
      pageSize: 10,
      pullup: true //是否触发下拉加载更多事件
    };
  },
  components: {
    scroller
  },
  methods: {
    loadMore() {
      if (!this.pullup) return;
      this.start += this.pageSize;
      this.fetchData(true);
    },
    refresh() {
      this.start = 1;
      this.pullup = true;
      this.fetchData();
    },
    fetchData(isLoadMore) {
      let { start, pageSize } = this;
      getData({ start, pageSize }).then(result => {
        if (isLoadMore) {
          if (result.data && result.data.length === 0) {
            this.pullup = false;
          }
          this.list = this.list.concat(result.data);
        } else {
          this.list = result.data;
        }
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss">
.list {
  border-bottom: 1px solid #eee;
  padding: 0.5rem;
}
html,
body,
.flex-wrap {
  height: 100%; //flex作垂直方向布局的时候，需要保证flex容器高度为固定值
}
.flex-wrap {
  display: flex;
  flex-direction: column; //高度自适应的移动端布局
}
.footer,
.header {
  line-height: 3em;
  background-color: #ddd;
}
.content {
  flex: 1;  //占满除了底部和顶部外的所有空隙
  position: relative; //scroller组件要求容器必须为定位元素
}
</style>

 