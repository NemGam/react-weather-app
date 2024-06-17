import React, { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL, geoAPIOptions } from "../../api";

function Search(props){

    const [search, setSearch] = useState(null);

    const loadOptions = async(inputVal) =>{
        try {
            console.log("Sending the request");
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=500000&namePrefix=${inputVal}`, 
                geoAPIOptions);
            const result = await response.json();
            
            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
        return {
            options: null,
        };
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        props.onSearchChange(searchData);
    }

    return (
        <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}


export default Search;