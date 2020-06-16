// Reference our components so they get included
import { initializeComponents } from 'utils/initializeComponents'
import { imgLazyLoad } from 'utils/lazyload'

const ready = () => {
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    return Promise.resolve()
  }

  return new Promise(resolve =>
    document.addEventListener('DOMContentLoaded', resolve)
  )
}

ready().then(() => initializeComponents(document), imgLazyLoad(document))
