export const currencyFormatter = (amount, currency = 'INR') => {
    const formatter = Intl.NumberFormat('en-IN', {
        style : 'currency',
        currency : currency
    });

    return formatter.format(amount);
}