import {useState, useEffect} from "react";
import { getAllCustomers } from "../api/customers.api";
import { getAllLocations } from "../api/customers.api";
import { Customer } from "../interfaces/interfaces";
import { Location } from "../interfaces/interfaces";
import { Card } from "./Card";

export default function Body() {

    const [customers, setCustomers] = useState<Customer[]>();
    const [locations, setLocations] = useState<Location[]>();
 
    useEffect(() => {
        async function getCustomers() {
            const response1 = await getAllCustomers();
            const response2 = await getAllLocations();
            setCustomers(response1);
            setLocations(response2);
        }
        getCustomers();
    }, [])

    useEffect(() => {
        customers && console.log(customers);
        locations && console.log(locations);
    }, [customers]);

    return (
        <>
            <section className="flex flex-col justify-center items-center w-full">
                <h1 className="text-3xl my-10 font-bold">Current customers:</h1>
                {customers && locations && customers.map(customer => (
                    <Card key={customer.id} customer={customer} locations={locations.filter(location => location.customer === customer.id)}/>
                ))}
            </section>
        </>
    )
}