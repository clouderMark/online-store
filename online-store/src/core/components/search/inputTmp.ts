class InputTmp {
  element: HTMLInputElement;

  constructor(parent: HTMLElement, tagClass: string) {
    this.element = document.createElement('input');

    if (typeof tagClass === 'string') this.element.classList.add(...tagClass.split(' '));

    if (parent) parent.append(this.element);

    this.element.setAttribute('input', 'text');
  }

  removeElement(): void {
    this.element.remove();
  }

  render(): HTMLElement {
    return this.element;
  }
}

export default InputTmp;
