import Link from "next/link";


export default function Menunav (){

	return(
		<section>
			<div className="menu_nav">
				<div>=</div>
				<div>
					<Link href="#">구글기프트</Link>
					<Link href="#">아프리카TV</Link>
					<Link href="#">게임쿠폰</Link>
					<Link href="#">모바일상품권</Link>
					<Link href="#">플레이스테이션</Link>
				</div>

				<div className="menu_nav-icon">
					<Link href="#"><img src="/images/icon1.png" /> </Link>
					<Link href="#"><img src="/images/icon2.png" /> </Link>
					<Link href="#"><img src="/images/icon3.png" /> </Link>
				</div>
			</div>	

			{/* <div className="M__menu_nav">
				<div>=</div>
				<div className="menu_nav-category ">
					<Link href="/"><img src="/images/top_logo.png" /></Link>
				</div>
			</div> */}
		</section>
	)

}