import styles from "../styles/Home.module.css";
import "../styles/Table.module.css";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

/* Added by hitesh */
import { qClient, GET_LATEST_COURSES } from "../pages/api/queries";
import { ApolloProvider, useQuery } from "@apollo/client";
import { d } from "./components/data1";
/* ------------ */

import "gridjs/dist/theme/mermaid.css";

/* Fetch Latest Courses */
function LatestCourseList({ time }) {
  let latest = [];

  const { loading, error, data } = useQuery(GET_LATEST_COURSES, {
    variables: {
      publish_time: time,
      pageSize: 50,
      pageCursor: "",
    },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    data.latestCourses.courses.map((val) =>
      latest.push([
        val.id,
        val.name,
        val.description,
        val.owner,
        <button onClick={() => editCourse(val)}>Edit</button>,
      ])
    );
    const rows = latest.map((elements) => {
      return elements;
    });

    const columns = d.columns.map((items) => {
      return items;
    });
  }

  return (
    <>    
      <br />
      <ul>
      {latest.map((elements) => {
      return <p>{elements}</p>;
    })}
      </ul>
    </>
  );
}

const table = () => {
  return (
    <ApolloProvider client={qClient}>
      <div className="content-panel">
        <LatestCourseList time="1648724942" />
      </div>
    </ApolloProvider>
  );
};

export default table;
