export interface IProducts {
    _id: string,
    id: number,
    loading: boolean,
    title: string,
    description?: string,
    price: number,
    category: string,
    type_of_product: string,
    count: number,
    gender?: string,
    main_image: string,
    images?: [
        {
            sub_image?: string
        }
    ] | undefined,
}

export interface IProductItem {
    item: {
        _id: string,
        id: number,
        loading: boolean,
        title: string,
        description?: string,
        price: number,
        category: string,
        type_of_product: string,
        count: number,
        gender?: string,
        main_image: string,
        images?: [
            {
                sub_image?: string
            }
        ] | undefined,
    }
    itemOffset?: number | undefined
}
