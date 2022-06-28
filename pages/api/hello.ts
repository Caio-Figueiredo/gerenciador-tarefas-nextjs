// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//NextApiRequest = ele importa a requisição
//NextApiResponse = ele importa a response
//TypeScript traz a tipagem para o nosso código como vantagem

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
