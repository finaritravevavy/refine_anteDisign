"use client";
import React, { useEffect, useState } from "react";
import Chart from "./chart"
export default function tableau(){
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const Api = await fetch('http://localhost:8080/v1/graphql', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-hasura-admin-secret': 'myadminsecretkey',
            },
            body: JSON.stringify({
                query: `
                    query MyQuery {
                        personne {
                            age
                            nom
                        }
                    }`,
                }),
            });
            const resultat = await Api.json();
            console.log(resultat);
            if (resultat.data && resultat.data.personne) {
                setData(resultat.data.personne);}
            else {
                console.error("personne data not found in response", resultat);
            }
    };
    fetchData();},[]);
    return(
        <div>
            <h1>
                gjkgj
            </h1>
            <div><Chart data = {data}/></div>
        </div>
    );
}