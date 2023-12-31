export interface ICategory {
    id: number,
    name: string,
    slug: string,
    index: boolean,
    children: Array<ICategory> | null
}