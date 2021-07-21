class ScrollHandler {
  static init(scrollHeight = 0) {
    if (scrollHeight) {
      document.querySelector('body').addEventListener('scroll', () => { this._onScroll(scrollHeight); });
    } else {
      document.querySelector('header').style.background = '#ff7b54';
    }
    document.querySelector('header').style.background = '#ff7b54';
  }

  static remove() {
    document.querySelector('header').style.background = '#ff7b54';
  }

  static _onScroll(scrollHeight) {
    if (document.body.scrollTop > scrollHeight - document.querySelector('header').scrollHeight || document.documentElement.scrollTop > scrollHeight - document.querySelector('header').scrollHeight) {
      document.querySelector('header').style.background = '#ff7b54';
    } else {
      document.querySelector('header').style.background = 'none';
    }
  }
}

export default ScrollHandler;
