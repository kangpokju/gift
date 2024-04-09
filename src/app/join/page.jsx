'use client'

import { useState, useEffect } from 'react';

export default function Compl() {

	const [formData, setFormData] = useState(null);

    useEffect(() => {
     
			fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
				.then((response) => response.json())
				.then((fetchdata) => {
					setFormData(fetchdata)
				})
				.catch((error) =>{
					console.error('데이터 로드 실패:', error)
				});
    }, []);
  
    // 데이터 로딩 중이거나 실패한 경우 처리
    if (!formData) {
      return <p>데이터를 불러오는 중...</p>;
    }
  
    return (
      <section className='memberConsent'>
        <div className="areeAll">
          <h4>전체동의</h4>
          <p>
            <span className="ec-chk">
              <input type="checkbox" id="areeAllcheck" />
            </span>
            <label htmlFor="areeAllcheck" className="areeAllText">
              이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다. 이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
            </label>
          </p>
        </div>
        <div className="agreeInner">
          <div className="chkStep1">
            <input type="checkbox" id="aree_condition" />
            <label htmlFor="aree_condition">이용약관 동의 (필수)</label>
          </div>
          <textarea name="conditions" cols="30" rows="10" defaultValue={formData[0].conditions}></textarea>
  
          <div className="chkStep1">
            <input type="checkbox" id="aree_uaer_inf" />
            <label htmlFor="aree_uaer_inf">개인정보 수집 및 이용 동의 (필수)</label>
          </div>
          <textarea name="user_info" cols="30" rows="10" defaultValue={formData[0].userInformation}></textarea>
        </div>
      </section>
    );
}
