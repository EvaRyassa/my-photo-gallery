export type filterType = '' | 'nature'| 'animal'| 'auto' | 'architecture';

interface commentItem {
    name:string
    text: string
}

export interface photoDatabaseItem {
    src: string,
    readonly id: number,
    alt: filterType,
    like: boolean,
    comments: commentItem[]
}