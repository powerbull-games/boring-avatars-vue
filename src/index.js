/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */

import Avatar from './components/avatar.vue';

export default { 
    install(app, options) {
        app.component("boring-avatars",Avatar);
    }
}