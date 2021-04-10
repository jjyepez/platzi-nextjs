import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const oneAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query

  const db = new DB()
  const avo = await db.getById(id as string)

  console.log({ avo })

  response.status(200).json(avo)
}

export default oneAvo
