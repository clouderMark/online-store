class SelectTmp {
  element: HTMLSelectElement;

  constructor(parent: HTMLElement, tagClass: string) {
    this.element = document.createElement('select');

    if (typeof tagClass === 'string') this.element.classList.add(...tagClass.split(' '));

    if (parent) parent.append(this.element);
  }

  removeElement(): void {
    this.element.remove();
  }

  render(): HTMLElement {
    return this.element;
  }
}

export default SelectTmp;
