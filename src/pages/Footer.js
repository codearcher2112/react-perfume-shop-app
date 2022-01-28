import React  from "react"
import Footer from '../components/footer'
import { Icon } from "../components/icons/styles/icons"

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Wrapper>
				<Footer.Row>
					<Footer.Column>
						<Footer.Title> Our Co-workers </Footer.Title>
						<Footer.Link href='https://www.dior.com/en_int'> Christian Dior </Footer.Link>
						<Footer.Link href='https://www.carolinaherrera.com/ww/en/'> Carolina Herrera </Footer.Link>
						<Footer.Link href='https://www.hugoboss.com/home'> Hugo Boss </Footer.Link>
						<Footer.Link href='#'> Jimmy Choo </Footer.Link>
						<Footer.Link href='https://www.armani.com/countries/index'> Armani </Footer.Link>
						<Footer.Link href='https://www.chanel.com/ru/'> Chanel </Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title> Social </Footer.Title>
						<Footer.Link href='https://www.instagram.com/leparfum.kst/'> <Icon className="fab fa-instagram"/> Instagram </Footer.Link>
						<Footer.Link href='https://m.facebook.com/Leparfum-105159614545618/?ref=external%3Awww.google.com&__nodl'> <Icon className="fab fa-facebook"/> Facebook </Footer.Link>
						<Footer.Link href='https://twitter.com/leperfumemv'> <Icon className="fab fa-twitter"/> Twitter </Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title> Payment </Footer.Title>
						<Footer.Link href='#'> <Icon className="fab fa-cc-visa"/> Visa card </Footer.Link>
						<Footer.Link href='#'> <Icon className="fab fa-cc-mastercard"/> Master Card </Footer.Link>
						<Footer.Link href='#'> <Icon className="fab fa-cc-paypal"/> PayPal </Footer.Link>
						<Footer.Link href='#'> <Icon className="fab fa-cc-apple-pay"/> Apple Pay </Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title> Help </Footer.Title>
						<Footer.Link href='#'> About Us </Footer.Link>
						<Footer.Link href='#'> Armenia, Yerevan </Footer.Link>
						<Footer.Link href='#'> <Icon className="fas fa-phone-square-alt"/> +374-98-704-049 </Footer.Link>
					</Footer.Column>
				</Footer.Row>
			</Footer.Wrapper>
		</Footer>
	)
}