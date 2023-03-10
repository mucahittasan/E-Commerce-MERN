export interface IProducts {
    id: number,
    title: string,
    description?: string,
    price: number,
    category: string,
    type_of_product: string,
    gender?: string,
    main_image: string,
    sub_images?: string[],
}