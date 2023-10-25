import './styles.scss'
import * as imageSrc from '../../images/headerImage.png'
interface Props {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="headerContainer">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={imageSrc.default} alt="" />
    </div>
  )
}

export default Header
