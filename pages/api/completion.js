import { db } from '@utils/database';


export default async function data(req, res) {

  let sql = 'SELECT * FROM tt';

  try {
    const data = await db(sql,[])
    res.status(200).json(data)
    
  } catch (error){
    console.error('데이터 로드중 실패',error);
    res.status(500).json({message: '서버 내부 에러'})
  }
  

}
