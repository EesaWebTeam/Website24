import React, {useState, useEffect} from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import '../css/Table.css';

export default function Study(){
    
  const [data, setData] = useState([]);    
        
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await fetch("https://cities-qd9i.onrender.com/agents");
        const agents = await response.json();
          setData(agents);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
      }; fetchData();
   }, []);
      
   const [searchTerm, setSearchTerm] = useState("");

  const columns = useMemo(
    () => [
      { Header: "Year", accessor: "id" },
      { Header: "Course Name", accessor: "course_name" },
      { Header: "Course Code", accessor: "course_code" },            
    ],[]
    );
  
    const filteredData = data.filter(item =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable({ columns, data : filteredData});

    return(
        // <div className="gradient_background flex items-center justify-center h-screen">
        //    <h1 className="text-center text-2xl font-bold">Hey there!</h1>
        // </div>
      <div className="table-container">
        <div style={{ textAlign: "center" }}>
        <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginLeft: "20px", margin:"0 px auto", marginBottom: "20px", padding: "8px", width: "300px" }}
      />
       </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
       
    );
};
