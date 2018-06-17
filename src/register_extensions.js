import { Registry } from '@mozaik/ui'

import github from '@mozaik/ext-github'
import gitlab from '@mozaik/ext-gitlab'
import time from '@mozaik/ext-time'
import travis from '@mozaik/ext-travis'
import jsongraph from 'mozaik-ext-jsongraph'

Registry.addExtensions({
  github,
  jsongraph,
  gitlab,
  time,
  travis
})
