class Page {
  constructor(rootContent, loadingElement) {
    this._rootContent = rootContent;
    this._loadingElement = loadingElement;
  }

  async init() {
    this._loadingElement.style.visibility = 'hidden';
    this._rootContent.innerHTML = '';
    this._rootContent.innerHTML = await this.render();
    await this.afterRender();
  }

  update(html) {
    this._rootContent.innerHTML = html;
  }

  showLoading() {
    // this._loadingElement.style.visibility = 'visible';
  }

  hideLoading() {
    this._loadingElement.style.visibility = 'hidden';
  }
}

module.exports = Page;
