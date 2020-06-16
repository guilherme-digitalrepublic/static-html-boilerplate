/**
 * Collection of strings to be shared across the component.
 * @enum {Object<string>}
 */
const CLASSES = {
  youtube: 'dr-video__youtube',
  playButton: 'dr-video__play',
  iframe: 'dr-video__iframe'
}

/**
 * @module Video
 */
class Video {
  /**
   * @param {HTMLElement} element - The HTMLElement this module is constructed upon
   */
  constructor(element) {
    this.element_ = element
    this.youtube_ = this.element_.querySelector(`.${CLASSES.youtube}`)
    this.instanceVideo()
  }

  /**
   * Instance video with clickable thumbnail.
   */
  instanceVideo() {
    const { iframe, playButton } = CLASSES
    const play = document.createElement('div')
    play.setAttribute('class', playButton)
    this.youtube_.appendChild(play)
    this.youtube_.onclick = function() {
      const video = document.createElement('iframe')
      video.setAttribute('class', iframe)
      video.setAttribute('frameborder', '0')
      video.setAttribute(
        'allow',
        'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      )
      video.setAttribute('allowfullscreen', true)
      video.setAttribute(
        'src',
        `https://www.youtube.com/embed/${this.id}?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1`
      )
      video.style.width = this.style.width
      video.style.height = this.style.height
      this.parentNode.replaceChild(video, this)
    }
  }
}

// Exports
export default Video
