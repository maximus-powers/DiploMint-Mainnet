import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_DIPLOMAS_BY_VALUE = gql`
  query getAllDiplomasByValue($searchTerm: String!) {
    diplomas(
      where: {
        or: [
          { studentName_contains_nocase: $searchTerm }
          { major_contains_nocase: $searchTerm }
          { graduationDate_contains_nocase: $searchTerm }
          { institution_contains_nocase: $searchTerm }
        ]
      }
    ) {
      id
      studentName
      studentWallet
      major
      graduationDate
      institution
    }
  }
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, data } = useQuery(GET_DIPLOMAS_BY_VALUE, {
    variables: { searchTerm },
    skip: !searchTerm,
  });

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
        <div className="text-center my-3">
            <h1 className="my-3">Search Diplomas</h1>
            <h3>You can search by name, major, institution, or graduation date</h3>
            <p>All results are verified diplomas (data called directly from indexed smart contract)</p>
        </div>

        <div className="text-center">
        <input className="form-control rounded-pill my-5" type="text" value={searchTerm} onChange={handleSearchTermChange} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.diplomas.map((diploma) => (
            <div className="card" style={{width: '20rem'}} key={diploma.id}>
                <div className="card-body">
                    <h3>{diploma.studentName}</h3>
                    <p>{diploma.major}</p>
                    <p>{diploma.graduationDate}</p>
                    <p>{diploma.institution}</p>
                    <a href={`/view/${diploma.id}`} className="btn btn-primary">View Diploma</a>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Search;
