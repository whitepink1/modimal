export type ProductColors = 'black' | 'red' | 'green' | 'yellow' | 'dark-blue' | 'purple' | 'pink' | 'light-blue' | 'orange' | 'white';

export type ProductProps = {
    id: number;
    date: Date;
    image: string;
    name: string;
    colors: ProductColors[];
    type: string;
    price: number;
}