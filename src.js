"use strict"

import {
    init,
    classModule,
    propsModule,
    styleModule,
    attributesModule,
    eventListenersModule,
    h,
} from "snabbdom"

window.snabbdom_init = init
window.h = h
window.snabbdom_class = classModule
window.snabbdom_props = propsModule
window.snabbdom_style = styleModule
window.snabbdom_attributes = attributesModule
window.snabbdom_eventlisteners = eventListenersModule
