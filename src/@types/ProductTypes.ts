export interface IProducts {
    id: number,
    loading: boolean,
    title: string,
    description?: string,
    price: number,
    category: string,
    type_of_product: string,
    gender?: string,
    main_image: string,
    sub_images?: string[],
}

export interface IProductItem {
    item: {
        id: number,
        loading: boolean,
        title: string,
        description?: string,
        price: number,
        category: string,
        type_of_product: string,
        gender?: string,
        main_image: string,
        sub_images?: string[],
    }
}