import { Customer, Location } from "../interfaces/interfaces"

interface CardProps {
    customer: Customer;
    locations: Location[];
}

export function Card({customer, locations}: CardProps) {

    return (
        <div className="flex flex-col justify-center items-center w-3/5 p-4 my-5 bg-black rounded-2xl hover:opacity-80 transition duration-200">
            <h2 className="text-lg font-bold">{customer.name}</h2>
            <h3>{customer.email}</h3>
            <ul>
                <h3>Locations:</h3>
                {locations.map(location => (
                    <li key={location.id}>{location.location}</li>
                ))}
            </ul>
        </div>
    )
}