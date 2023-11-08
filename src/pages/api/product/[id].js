import prisma from "../../../../lib/db/prisma"

export default async function handle(req, res) {
    const { id } = req.query 

    const content = await prisma.content.findUnique({
        where: { id: Number(id) }
    })

    res.json({
        message: 'Successfull to get data!',
        statusCode: 200,
        statusMessage: 'Successfull to get data!',
        data: content
    })
}