export function getComments (id: number) {
    const localData = localStorage.getItem(`${id}`);
    if (localData) {
        const comments = JSON.parse(localData);
        return comments;
    }
}