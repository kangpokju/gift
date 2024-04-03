import Link from "next/link";

export default function Mnav(){

	return(
		<>
			<nav className="nav">
				<img className="M__menu" src="/images/menu1.png"></img>
				<Link href="/"><img className="M__logo" src="/images/top_logo.png" /></Link>
				<div className="member_join">
					<Link href={'/'}>로그인</Link>
					<Link href={'join'}>회원가입</Link>
				</div>
			</nav>
		</>
	)

}