export const dateHelper = (date) => {
    let newDate = new Date(date);
    return `${newDate.toLocaleDateString("en-GB").replaceAll('/', '.')}`;
}