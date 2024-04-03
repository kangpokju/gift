// mysql 모듈에서 createPool을 가져옵니다. createPool은 데이터베이스 연결 풀을 생성하는 함수입니다.
const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  charset: 'utf8mb4',
  // port: 3306,
});

// 데이터베이스에 연결을 시도합니다. 연결에 실패하면 오류 메시지를 출력하고, 성공하면 'Connected to db...!' 메시지를 출력합니다.
pool.getConnection((err, conn) => {
  if (err) console.log("Error connecting to db...");
  else console.log("Connected to db...!");
  conn.release();  //연결을 사용한 후에는 반드시 해제해야 합니다.
});

// 쿼리를 실행하는 함수를 정의합니다. 이 함수는 프로미스를 반환하여 비동기적으로 작동합니다.
const db = (query, arrParams) => {
  return new Promise((resolve, reject) => {
    try {
      // 데이터베이스에 쿼리를 실행합니다.
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log("Error in executing the query");
          reject(err);
        }else {
          // Buffer 데이터를 문자열로 변환합니다.
          const processedResults = data.map(row => {
            return Object.keys(row).reduce((acc, key) => {
              acc[key] = row[key] instanceof Buffer ? row[key].toString('utf-8') : row[key];
              return acc;
            }, {});
          });
          //버퍼 인코딩 
          resolve(processedResults);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

// 외부에서 사용할 수 있도록 db 함수를 export 합니다.
module.exports = { db };