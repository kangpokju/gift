
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { db } from "@utils/database";

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
          
          let sql = "SELECT * FROM member WHERE mem_id = ?";
          let id = credentials.username;
          let pass = credentials.password;
          try{
            let user = await db(sql, [id])
            return user;

          } catch (error) {
            console.error(error)
          }
  
          //bcrypt 암호화된 비번과 유저입력값을 비교
          const pwcheck = await bcrypt.compare(pass, user[0].mem_pass);
          if(user.length == 0 || !pwcheck){
            console.log('아이디 비번이 틀렸습니다')
            return null;
          }
          return user;
    }}),

  ],

 //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
 session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
},

callbacks: {
    //4. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user[0].mem_name;
        token.user.email = user[0].mem_email;
        console.log("-------------rrrrrr------------");
        console.log(token.user.name);
        console.log(token.user.email);
        console.log("-------------rrrrrr------------");
      }
      return token;
    },
  
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  
    secret : process.env.AUTH_SECRET,
  
    // adapter: TypeORMLegacyAdapter({
    //   type: "mysql",
    //   username: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   host: process.env.DB_HOST,
    //   database: process.env.DB_DATABASE,
    //   synchronize: true,
    // }),
  
  };

export default NextAuth(authOptions); 