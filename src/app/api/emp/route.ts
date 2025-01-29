export async function GET(req: Request, res: Response) {
    const data = [{ 'name': 'john', 'age': 18 },
    { 'name': 'jack', 'age': 19 }]

    return Response.json(data)
}