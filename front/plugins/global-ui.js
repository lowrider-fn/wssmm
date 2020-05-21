import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const components = require.context(
    '~/components/common/ui',
    false,
    /[a-z]\w+\.(vue|js)$/,
)

components.keys().forEach((fileName) => {
    const config = components(fileName)
    const name = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))

    Vue.component(name, config.default)
})
