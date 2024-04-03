import Nav from "./Nav";
import Menunav from "./Menunav";
import Mnav from "./Mnav";



export default function Header (){


	return(
		<section>
			<div className="desk__header">
				<Nav />
				<Menunav />
			</div>
			<div  className="mobile__header">
				<Mnav />

			</div>
		</section>
	)

}