import Component from '@/core/templates/components';

const buttons = [
  {
    id: 'store-page',
    text: 'Store Page',
  },
  {
    id: 'basket-page',
    text: 'Basket Page',
  },
  // {
  //   id: 'item-page',
  //   text: 'Item Page',
  // },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');

    buttons.forEach((button) => {
      console.log(button.id);
      const buttonHTML = document.createElement('a');

      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();

    return this.container;
  }
}
export default Header;
