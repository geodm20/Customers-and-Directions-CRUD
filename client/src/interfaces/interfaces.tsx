export interface Customer {
    id: number;
    name: string;
    email: string;
}

export interface Location {
    id: number;
    location: string;
    customer: number;
}