export type Product = {
    readonly id:           number;
    readonly quantity:     number;
    readonly product_colors: {
        hex_value: string;
        colour_name: string;
      }[];
    readonly brand:        string;
    readonly name:         string;
    readonly price:        string;
    readonly price_sign:   string;
    readonly currency:     string;
    readonly image_link:   string;
    readonly product_link: string;
    readonly website_link: string;
    readonly description:  string;
    readonly rating:       null;
    readonly category:     string;
    readonly product_type: string;
    readonly tag_list:     string[];
}
export type Details = {
    readonly id:           number;
    readonly brand:        string;
    readonly name:         string;
    readonly price:        string;
    readonly price_sign:   string;
    readonly currency:     string;
    readonly image_link:   string;
    readonly product_link: string;
    readonly website_link: string;
    readonly description:  string;
    readonly rating:       null;
    readonly category:     string;
    readonly product_type: string;
    readonly tag_list:     string[];

}
export interface CurrencyState {
    selected: string; 
}
export interface LikeState {
    likedProducts: number[]; 
}

export interface CartState {
    products: Product[]; 
}
export interface RootState {
    currency: CurrencyState; 
    like: LikeState; 
}
