import prisma from "../../../../lib/db/prisma"

export default async function handle(req, res) {
    // console.log(req.query)

    const content = await prisma.Master_Performer.findMany({
        include: {
            SocialMediaRelation: {
                include: {
                    Social_Media: true
                }
            }
        }
    })
    
    res.json({
        message: 'Successfull to get data!',
        statusCode: 200,
        statusMessage: 'Successfull to get data!',
        data: content
    })
}