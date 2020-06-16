import LazyLoad from 'vanilla-lazyload'

// Attach components to elements
export const imgLazyLoad = () => {
  new LazyLoad({
    elements_selector: 'img',
    data_src: 'src',
    data_srcset: 'srcset',
    use_native: true,
    cancel_on_exit: false
  })
}
