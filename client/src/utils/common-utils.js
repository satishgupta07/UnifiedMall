export const addEllipsis = (text) => {
    if(text.lenght > 50) {
        return text.substring(0, 50) + '...';
    }
    return text;
}