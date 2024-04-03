import Link from "next/link";



export default function Nav (){

	return(
		<nav className="nav">
			<div className="nav_top">
				<Link href="/"><img src="/images/top_logo.png" /></Link>
				<div>
					<Link href="/login">로그인</Link>
					<Link href="/join">회원가입</Link>
					<Link href="#">마이페이지</Link>
					
				</div>
			</div>
		</nav>

	)

}