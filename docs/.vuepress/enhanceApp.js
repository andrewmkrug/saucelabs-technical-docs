import Vue from 'vue';
import {Tabs, Tab} from 'vue-tabs-component';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.component('Tabs', Tabs);
Vue.component('Tab', Tab);
}

    