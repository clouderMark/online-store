class CheckboxTmp {
  element: HTMLInputElement;

  constructor(
    parent: HTMLElement,
    tagClass: string,
    attr?: Record<string, unknown>,
  ) {
    this.element = document.createElement('input') as HTMLInputElement;

    if (typeof tagClass === 'string') this.element.classList.add(...tagClass.split(' '));

    if (parent) parent.append(this.element);

    if (attr) {
      for (const [key, value] of Object.entries(attr)) {
        this.element.setAttribute(key, value as string);
      }
    }
  }

  removeElement(): void {
    this.element.remove();
  }

  render(): HTMLElement {
    return this.element;
  }
}

export default CheckboxTmp;
