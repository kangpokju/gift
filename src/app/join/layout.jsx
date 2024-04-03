// pages/join/index.js 또는 다른 경로에 따라 조정
'use client';
import React, { useEffect } from 'react';
// import Join from "../../../components/Member/Join";
import '@/styles/member/joinstyle.css';
import Link from 'next/link';

export default function JoinPage({ children }) {
  useEffect(() => {
    let tabHeader = document.getElementsByClassName("tab-header")[0];
    let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
		// let tabBody = document.getElementsByClassName("tab-body")[0];
    let tabsPane = tabHeader.getElementsByTagName("div");


    for (let i = 0; i < tabsPane.length; i++) {
      tabsPane[i].addEventListener("click", function () {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
				// tabBody.getElementsByClassName("active")[0].classList.remove("active");
        // tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(100% / 3 * ${i})`;
      });
    }
  }, []);

  return (
    <section className="consent">
      <h2 style={{textAlign:'center'}}>회원 가입</h2>
      <ol className="step">
        <div className="tabs">
          <div className="tab-header">
            <div className="active">
              <Link href={'/join'}><i className="fa fa-code"/>약관동의</Link>
            </div>
            <div>
						  <Link href={'/join/register'}><i className="fa fa-pencil-square-o"/>회원등록</Link>
            </div>
            <div>
              <Link href={'/join/register'}><i className="fa fa-bar-chart"/> 가입완료</Link>
            </div>
            {/* <div>
              <i className="fa fa-envelope-o"/> Contact
            </div> */}
          </div>
          <div className="tab-indicator"></div>
        </div>
      </ol>
			  {children}
    </section>
  );
}
