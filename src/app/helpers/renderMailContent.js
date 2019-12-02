export default function({ products }) {
  let layout = '<ul>';

  products.map(currentProduct => {
    layout += `<li>${currentProduct.itemId} - <a href="${currentProduct.viewItemURL}">${currentProduct.title}</a></li>`;
  });

  layout += `</ul>`;

  return layout;
}
