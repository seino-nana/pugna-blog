// filters.js
export const formatDate = (value) => {
    if (value) {
        const date = new Date(value);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(2, 4);
        return `${year}/${month}/${day}`;
    }
};
