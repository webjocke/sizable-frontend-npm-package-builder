"use strict"

import {
    init,
    classModule,
    propsModule,
    styleModule,
    datasetModule,
    attributesModule,
    eventListenersModule,
    h,
    thunk
} from "snabbdom"

window.snabbdom_init = init
window.thunk = thunk
window.h = h
window.snabbdom_class = classModule
window.snabbdom_props = propsModule
window.snabbdom_style = styleModule
window.snabbdom_dataset = datasetModule
window.snabbdom_attributes = attributesModule
window.snabbdom_eventlisteners = eventListenersModule
