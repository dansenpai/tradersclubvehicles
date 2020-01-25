import numeral from 'numeral';

export const formatCurrency = (value) => {
  const f = value
  .toFixed(2)
  .replace('.', `,`)
  .replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    `$1.`,
  );

  return `R$ ${f}`;
}

export const formatKm = (value) => {
  const f = value
  .toFixed()
  .replace('.', `,`)
  .replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    `$1.`,
  );

  return  `${f} KM`;
}
