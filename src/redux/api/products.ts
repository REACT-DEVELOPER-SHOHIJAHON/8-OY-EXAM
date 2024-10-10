import {   Product,  } from "../../types/auth";
import { api } from "./index";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json",
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductById: build.query({
            query: (id) => ({
              url: `/products/${id}.json`,
            }),
            providesTags: ["PRODUCTS"]
          }),
        getProductsBlush: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=powder&product_type=blush",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsBronzer: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=powder&product_type=bronzer",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsEyeLiner: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=liquid&product_type=eyeliner",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsEyeshadow: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=palette&product_type=eyeshadow",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsFoundation: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=concealer&product_type=foundation",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsLipliner: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=lipstick&product_type=lipstick",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        }),
        getProductsMascara: build.query<Product[], undefined>({
            query: () => ({
                url: "/products.json?product_category=&product_type=mascara",
                params: {
                    category: "makeup"
                }
            }),
            providesTags: ["PRODUCTS"]
        })
    })
})



export const {
    useGetProductsQuery,
    useGetProductsBlushQuery,
    useGetProductsBronzerQuery,
    useGetProductsEyeLinerQuery,
    useGetProductsEyeshadowQuery,
    useGetProductsFoundationQuery ,
    useGetProductsLiplinerQuery,
    useGetProductsMascaraQuery,
    useGetProductByIdQuery

} = productsApi;