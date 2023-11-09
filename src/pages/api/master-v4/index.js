import prisma from "../../../../lib/db/prisma"

export default async function handle(req, res) {
    const content = await prisma.Master_Client_Mains.findMany()
    
    res.json({
        message: 'Successfull to get data!',
        statusCode: 200,
        statusMessage: 'Successfull to get data!',
        data: content
    })
}