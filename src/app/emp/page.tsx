async function getEmp() {
    const results = await fetch('http://localhost:3001/api/emp')
    console.log(results)

    if (!results.ok) { 
        throw new Error('Failed to fetch data')

    }
    return results.json()

}


export default async function Page() {
    const emps = await getEmp()
    console.log(emps)

    return (
        <div>
            {emps.map((emp, index) => (
                <div key={index}>
                    {emp.name}||{emp.age}||{emp.salary}
                </div>
            )

            )}
            
        </div>
    )
}
