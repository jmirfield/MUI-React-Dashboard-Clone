import { merge } from 'lodash'

import Appbar from './Appbar'
import Button from './Button'
import Container from './Container'
import IconButton from './IconButton'
import Toolbar from './Toolbar'

const ComponentsOverrides = (theme) => {
    return merge(
        Appbar(theme),
        Button(theme),
        Container(theme),
        IconButton(theme),
        Toolbar(theme)
    )
}

export default ComponentsOverrides