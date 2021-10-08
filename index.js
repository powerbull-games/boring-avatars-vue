/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */

import Avatar from './src/Avatar.vue';

export default { 
    install(app, options) {
        app.component("boring-avatars",Avatar);
    }
}