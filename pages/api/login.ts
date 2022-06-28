import type {NextApiRequest, NextApiResponse} from 'next';
import { DefaultMsgResponse } from '../../types/DefaultMsgResponse';

type Data = {
    login: String,
    senha: String
}

export default (req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {

    const {login, password} = req.body;
 

    if(req.method === 'POST') {
        if(login === "caio@fiap.com.br" && password === '123'){
            return res.status(200).json({msg: 'Login autenticado.'});
        }
        return res.status(400).json({msg: 'Usuário ou senha inválido.'});
    }
    return res.status(405).json({error: 'Método não encontrado.'});

}