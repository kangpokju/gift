import { db } from "@utils/database";
import bcrypt from "bcrypt";

export default async function post(req, res) {

    let userId = req.body.user_id;
    let userPass = req.body.user_pass;
    let userEmail = req.body.user_email;
    let userName = req.body.user_name;
    let userDate = req.body.user_day;

    
    if(req.method === 'POST'){
        
        let sql = "INSERT INTO member (mem_id, mem_name, mem_pass, mem_email, mem_date) values (?,?,?,?,?)"
        let inSql = 'SELECT mem_id FROM member WHERE mem_id = ?'
        let INSdata = await db(inSql, [userId])

        if(INSdata.length > 0){
            console.log("아이디 존재")
            return res.status(400).json({message:"이미 존재하는 아이디 입니다"});
        }
        
        try{
            const saltRounds = 10;
            bcrypt.hash(userPass, saltRounds, async(err,hash)=>{
                if(err){
                    console.error("비밀번호 해싱 오류:", err);
                    return res.status(500).json({message: "비밀번호 해싱 중 오류 발생"});
                }

                try{
                    const data = await db(sql, [userId, userName, hash, userEmail, userDate])
                    return res.redirect(302,"/");

                }catch (err){
                    console.error("데이터 쿼리 오류:",err)
                    return res.status(500).json({message:"데이터 쿼리중 오류 발생"});
                }
            });
        }catch (err){
            console.log(err)
        }






    }

}