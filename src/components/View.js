import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_DIPLOMA_BY_ID = gql`
    query getById($id: String!) {
        diploma(id: $id) {
            graduationDate
            institution
            major
            studentName
            studentWallet
            id
        }
    }
`;

function View() {
    const { id } = useParams();
    // console.log(id);

    const { loading, error, data } = useQuery(GET_DIPLOMA_BY_ID, {
        variables: {id},
        skip: !id,
    })

    return (
        <div className="text-light">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
            <div className="text-center mt-3">
            <h3>Learner Name: {data.diploma.studentName}</h3>
            <p>Major: {data.diploma.major}</p>
            <p>Graduation: {data.diploma.graduationDate}</p>
            <p>Academic Institution: {data.diploma.institution}</p>
            <p>Student Wallet Address: {data.diploma.studentWallet}</p>
            <p>Diploma ID: {data.diploma.id}</p>
            </div>
        )}
        </div>
    );
};

export default View;
