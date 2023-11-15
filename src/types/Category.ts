export interface Category {
    id: number,
    name: string,
    slug: string,
    index: boolean,
    children: Array<Category> | null
}