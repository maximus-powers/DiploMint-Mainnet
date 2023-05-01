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
      <div className="bg-dark">
        <div className="text-light text-center bg-dark">
            <h1 className="">Search Diplomas</h1>
            <h3>You can search by name, major, institution, or graduation date</h3>
            <p>All results are verified diplomas (data called directly from indexed smart contract)</p>
        </div>

        <div className="text-center bg-dark">
          <div className="d-flex justify-content-center">
            <input className="form-control rounded-pill my-4 col-md-8 mb-5" type="text" value={searchTerm} onChange={handleSearchTermChange} />
          </div>
        </div>
      </div>

          <div className="mt-5 bg-harvard"></div>

          <div className="bg-harvard mb-5">
            {loading && <p className="text-light text-center">Loading...</p>}
            {error && <p className="text-light text-center">Error: {error.message}</p>}
            {data && data.diplomas.map((diploma) => (
              <div className="card mx-5" style={{width: '20rem'}} key={diploma.id}>
                <div className="card-body text-center">
                  <h3>{diploma.studentName}</h3>
                  <p>{diploma.major}</p>
                  <p>{diploma.graduationDate}</p>
                  <p>{diploma.institution}</p>
                  <a href={`/view/${diploma.id}`} className="btn text-light bg-harvard">View Diploma</a>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}

export default Search;
