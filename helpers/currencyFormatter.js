const currencyFormatter = Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
});

export default currencyFormatter;