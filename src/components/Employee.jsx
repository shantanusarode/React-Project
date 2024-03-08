const Employee = () => {
    const empData = [
        {empId : 1001 , empName:"shantanu.sarode@gmail.com",empDesc:"developer"},
        {empId : 1002 , empName:"Atul@gmail.com",empDesc:"developer"},
        {empId : 1003 , empName:"Ankita@gmail.com",empDesc:"developer"},
        {empId : 1004 , empName:"Shubhi@gmail.com",empDesc:"developer"},
        {empId : 1005 , empName:"Ashish@gmail.com",empDesc:"developer"}
    ]
    return(
<div>
<h1 className="text-center">All Employee Details</h1>
<table className="table table-bordered">
<thead className="thread-dark">
<tr><th>EMPID</th><>EmpName</><th>EmpDesc</th></tr>
</thead>
<tbody>
                    {
                             empData.map(  (employee)   => ( 
<tr>
<td> {employee.empId }</td>  <td> {employee.empName }</td>  <td> {employee.empDesc }</td>
</tr>
                    ))}
</tbody></table></div>
    )
}
export default Employee;