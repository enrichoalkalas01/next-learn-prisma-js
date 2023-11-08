import prisma from "../../../../lib/db/prisma"

export default async function handle(req, res) {
    console.log(req.query)

    const content = await prisma.content.findMany()
    
    res.json({
        message: 'Successfull to get data!',
        statusCode: 200,
        statusMessage: 'Successfull to get data!',
        data: content
    })
}